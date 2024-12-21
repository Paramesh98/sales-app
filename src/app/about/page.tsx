import Service from "@/components/service";
import Skills from "@/components/skills";
import StickyHeader from "@/components/sticky-header";
import Subscription from "@/components/subscription";
import Team from "../team";
import "./styles.css";

function About() {
  return (
    <div>
      <StickyHeader
        title="About Our Company"
        description="Awesome, clean &amp; creative HTML5 Template"
      />
      <Skills />
      <Team />
      <Service />
      <Subscription />
    </div>
  );
}

export default About;
