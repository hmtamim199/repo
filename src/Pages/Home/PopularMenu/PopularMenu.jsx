import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useHook from "../../../hooks/useHook";

const PopularMenu = () => {
  const [menu] = useHook();
  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);

  // useEffect( () => {
  //   fetch('menu.json')
  //   .then( res => res.json())
  //   .then( data => {
  //     const popularItems = data.filter( item => item.category === 'popular')
  //     setMenu(popularItems)})
  // },[])
  return (
    <section className="mb-12">
      {/* 
      <SectionTitle
      subeading="from our collection"
      heading="popular menu"
      ></SectionTitle> */}
      <div className="grid md:grid-cols-2 gap-9">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
