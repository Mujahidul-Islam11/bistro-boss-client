

const PopuConent = ({popuMenu}) => {
    const {image, name, price, recipe} = popuMenu
    return (
        <section className="md:flex gap-6 mb-24">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase text-xl">{name}----------</h2>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <h2 className="text-amber-500">{price}</h2>
        </section>
    );
};

export default PopuConent;