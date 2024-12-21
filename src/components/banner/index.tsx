import RightBannerImage from "@/assets/jpg/baner-right-image-01.jpg";
import RightBannerImage2 from "@/assets/jpg/baner-right-image-02.jpg";
import RightBannerImage3 from "@/assets/jpg/baner-right-image-03.jpg";
import RightBannerImage4 from "@/assets/jpg/baner-right-image-04.jpg";
import LeftBannerImage from "@/assets/jpg/left-banner-image.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./styles.css";

type Category = {
  title: string;
  subTitle: string;
  description: string;
  url: string;
  label: string;
  image: StaticImageData;
};

function Banner() {
  const renderLeftContent = () => {
    return (
      <div className="left-content">
        <div className="thumb">
          <div className="inner-content">
            <h4>We Are Hexashop</h4>
            <span>Awesome, clean &amp; creative HTML5 Template</span>
            <div className="main-border-button">
              <a href="#">Purchase Now!</a>
            </div>
          </div>
          <Image src={LeftBannerImage} alt="Banner Image" />
        </div>
      </div>
    );
  };

  const categoties: Category[] = [
    {
      title: "Women",
      subTitle: "Best Clothes For Women",
      description:
        " Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.",
      url: "/",
      label: "Discover More",
      image: RightBannerImage,
    },
    {
      title: "Men",
      subTitle: "Best Clothes For Men",
      description:
        " Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.",
      url: "/",
      label: "Discover More",
      image: RightBannerImage2,
    },
    {
      title: "Kids",
      subTitle: "Best Clothes For Kids",
      description:
        " Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.",
      url: "/",
      label: "Discover More",
      image: RightBannerImage3,
    },
    {
      title: "Accessories",
      subTitle: "Best Trend Accessories",
      description:
        " Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.",
      url: "/",
      label: "Discover More",
      image: RightBannerImage4,
    },
  ];
  return (
    <div className="main-banner" id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">{renderLeftContent()}</div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                {categoties.map((category, index) => {
                  return <Category category={category} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Category = ({ category }: { category: Category }) => {
  return (
    <div className="col-lg-6">
      <div className="right-first-image">
        <div className="thumb">
          <div className="inner-content">
            <h4>{category.title}</h4>
            <span>{category.subTitle}</span>
          </div>
          <div className="hover-content">
            <div className="inner">
              <h4>{category.title}</h4>
              <p>{category.description}</p>
              <div className="main-border-button">
                <Link href={category.url}>{category.label}</Link>
              </div>
            </div>
          </div>
          <Image src={category.image} alt="right-banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
