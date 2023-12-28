import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Popular from "./Popular";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                Bistro Boss Resturant
                </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popular></Popular>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;