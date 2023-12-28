import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import UseCart from "../UseCart";
import { useEffect } from "react";
import UseAxios from "../UseAxios";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const CheckOutForm = () => {
    const stripe = useStripe()
    const [error , setError] = useState()
    const [cart] = UseCart()
    const {user} = useContext(AuthContext)
    const [clientSecret , setClientSecret] = useState('')
    const [status , setStatus] = useState('')
    const axiosSecure = UseAxios()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0 )
    const elements = useElements()
    console.log(status)

    useEffect(()=>{
      axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    },[axiosSecure, totalPrice])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details:{
                email: user?.email || '',
                name: user?.displayName || ''
              }
            }
          })
          if(confirmError){
            console.log('error')
          }
          else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
              setStatus(paymentIntent.id)
              const paymentDetails ={
                email: user.email,
                price: totalPrice,
                date: new Date(),
                cartIds: cart?.map(item => item._id),
                status: 'pending'
              }
              const res = await axiosSecure.post('/payments', paymentDetails)
              console.log(res.data)
            }
          }
    }

  return (
    <form className="mx-20" onClick={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button type="submit" className="btn btn-warning " disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {status && <p className="text-green-400">Your Transection id :
        {status}</p>}
    </form>
  );
};

export default CheckOutForm;
