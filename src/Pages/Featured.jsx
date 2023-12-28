import SectionTitle from "./SectionTitle";
import img from "../../src/assets/home/featured.jpg"

const Featured = () => {
    return (
        <section className="featured bg-fixed py-20  md:px-20 mb-24 ">
            <SectionTitle
            heading={'Check It Out'} subTitle={'From Our Menu'}></SectionTitle>
            <div className="px-5 md:flex justify-center items-center bg-black bg-opacity-40 gap-6 text-white">
                <img src={img} alt="" className="md:w-1/2 my-3"/>
                <div className="md:w-1/2">
                    <h3 className="text-xl font-bold">March, 20, 2023</h3>
                    <h3 className="text-2xl font-bold uppercase">Where can I get some?</h3>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, impedit necessitatibus. Animi debitis quas exercitationem suscipit, voluptas consequuntur voluptates accusamus corrupti deleniti quia, commodi vero numquam quibusdam iure optio sapiente rem nisi hic assumenda magni voluptatem. Reiciendis non eius expedita nihil doloremque minima magni. Nemo vel accusantium quaerat possimus earum!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;