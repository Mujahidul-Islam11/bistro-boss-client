import { Helmet } from "react-helmet";
import Cover from "./Cover";
import orderImge from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../UseMenu";
import FoodCard from "./FoodCard";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../src/assets/menu/pizza-bg.jpg";
import soupImg from "../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../src/assets/menu/salad-bg.jpg";


const Order = () => {
  const [menu] = UseMenu();
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const salad = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");
  return (
    <div className="">
      <Helmet>
        <title>Food Ordering Page</title>
      </Helmet>
      <Cover
        img={orderImge}
        title={"Order Now"}
        desc={"Lorem Ipsum has been the industry’s standard dummy"}
      ></Cover>

      <Tabs className={'my-12'}>
        <div className="text-center">
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>
          <TabPanel>
        <div className="grid md:grid-cols-4 gap-4 ">
            {salad?.map((Tab) => (
              <FoodCard key={Tab._id} img={saladImg} items={Tab}></FoodCard>
            ))}
        </div>
          </TabPanel>

          <TabPanel>
        <div className="grid md:grid-cols-4 gap-4">
            {pizza?.map((Tab) => (
              <FoodCard key={Tab._id} img={pizzaImg} items={Tab}></FoodCard>
            ))}
        </div>
          </TabPanel>

          <TabPanel>
        <div className="grid md:grid-cols-4 gap-4">
            {soup?.map((Tab) => (
              <FoodCard key={Tab._id} img={soupImg} items={Tab}></FoodCard>
            ))}
        </div>
          </TabPanel>

          <TabPanel>
        <div className="grid md:grid-cols-4 gap-4">
            {dessert?.map((Tab) => (
              <FoodCard key={Tab._id} img={dessertImg} items={Tab}></FoodCard>
            ))}
        </div>
          </TabPanel>

          <TabPanel>
        <div className="grid md:grid-cols-4 gap-4">
            {drinks?.map((Tab) => (
              <FoodCard key={Tab._id} items={Tab}></FoodCard>
            ))}
        </div>
          </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
