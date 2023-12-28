import SectionTitle from "./SectionTitle";
import PopuConent from "./PopuConent";
import UseMenu from "../UseMenu";

const Popular = () => {
  const [menu] = UseMenu();
  const popular = menu?.filter(item => item.category === 'popular')
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const PopuItem = data.filter(item => item.category === 'popular')
  //       setMenu(PopuItem)
  //     });
  // }, []);
  return (
    <section className="">
      <SectionTitle
        heading={"Popular Items"}
        subTitle={"From Our Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        {
            popular?.map(popuMenu => <PopuConent key={popuMenu._id} popuMenu={popuMenu}></PopuConent>)
        }
      </div>
    </section>
  );
};

export default Popular;
