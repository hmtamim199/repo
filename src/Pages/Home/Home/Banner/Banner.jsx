import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

import img1 from "../../../../assets/home/seyam.jpg";
import img2 from "../../../../assets/home/tamim2.jpg";
import img3 from "../../../../assets/home/seyam2.jpg";
import img4 from "../../../../assets/home/tamim.jpg";
import img5 from "../../../../assets/home/seyam3.jpg";
import img6 from "../../../../assets/home/owner.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
