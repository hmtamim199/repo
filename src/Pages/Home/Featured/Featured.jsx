import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/20250104_171411.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  my-20 pt-8">
      <SectionTitle
        subeading="check it out"
        heading="From our collection"
      ></SectionTitle>

      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-16 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-8 text-white">
          <p>March 1 .2025</p>
          <p className="uppercase">where can i get it?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis
            amet quisquam beatae iste labore nobis, necessitatibus facere, sit
            quaerat molestias expedita cupiditate dolores at, voluptas libero
            architecto saepe. Amet quis quo ducimus earum vel alias dicta minima
            corrupti. In nulla eveniet sequi laboriosam impedit magni ipsam
            dolorum voluptate asperiores.
          </p>
          <button className="btn btn-outline border-0 ">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
