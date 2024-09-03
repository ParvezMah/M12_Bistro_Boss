import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "../Featured/Featured.css";

const Featured = () => {
  return (
    <div className="mb-12">
      <SectionTitle subHeading="Check it Out" heading="Featured Item" />
      <div className="featured-item px-16 py-28">
        <div className="md:flex items-center gap-2 justify-center">
          <div>
            <img className="items-end" src={featuredImg} alt="" />
          </div>
          <div className="text-white">
            <p >
              March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <button className="btn btn-outline">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
