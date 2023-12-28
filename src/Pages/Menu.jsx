import { Helmet } from "react-helmet";
import Cover from "./Cover";
import img from "../../src/assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import UseMenu from "../UseMenu";
import SectionTitle from "./SectionTitle";
import MenuCategory from "./MenuCategory";
import pizzaImg from "../../src/assets/menu/pizza-bg.jpg";
import soupImg from "../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../src/assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = UseMenu();
  console.log(menu)
  const offered = menu?.filter((item) => item.category === "offered");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const salad = menu?.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={img}
        title={"OUR MENU"}
        desc={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        heading={"Don’t miss"}
        subTitle={"Today’s Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <Cover
        img={dessertImg}
        title={"Desserts"}
        desc={"Lorem Ipsum has been the industry’s standard dummy "}
      ></Cover>
      <MenuCategory items={dessert}></MenuCategory>
      <Cover
        img={pizzaImg}
        title={"Pizza"}
        desc={"Lorem Ipsum has been the industry’s standard dummy"}
      ></Cover>
      <MenuCategory items={pizza}></MenuCategory>
      <Cover
        img={soupImg}
        title={"Soup"}
        desc={"Lorem Ipsum has been the industry’s standard dummy"}
      ></Cover>
      <MenuCategory items={soup}></MenuCategory>
      <Cover
        img={saladImg}
        title={"Salad"}
        desc={"Lorem Ipsum has been the industry’s standard dummy"}
      ></Cover>
      <MenuCategory items={salad}></MenuCategory>
    </div>
  );
};

export default Menu;
