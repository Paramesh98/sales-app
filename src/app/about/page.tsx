import Skills from "@/components/skills";
import StickyHeader from "@/components/sticky-header";
import React from "react";
import Team from "../team";
import Service from "@/components/service";
import Subscription from "@/components/subscription";

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
