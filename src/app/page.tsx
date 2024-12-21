import Banner from "@/components/banner";
import Explore from "@/components/explore";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Social from "@/components/social";
import Subscription from "@/components/subscription";

export default function Home() {
  console.log("page");
  return (
    <>
      <Banner />
      <Feature />
      <Explore />
      <Social />
      <Subscription />
    </>
  );
}
