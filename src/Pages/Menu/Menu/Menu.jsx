import Cover from "../Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import useHook from "../../../hooks/useHook";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useHook([]);

  const desert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const panjabi = menu.filter((item) => item.category === "panjabi");
  return (
    <div>
      <Cover img={coverImg} title="our menu"></Cover>
      <SectionTitle
        subeading="don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={panjabi}></MenuCategory>
    </div>
  );
};

export default Menu;
