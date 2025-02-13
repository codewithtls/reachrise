import Breadcrumb from "@/components/Breadcrumb";
import CBCrownBanquet from "@/components/CBCrownBanquet";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CB Crown Banquet Noida | Best Venue for Weddings & Events",
  description:"CB Crown Banquet is the top event venue in Noida, offering customized decor, unlimited food packages, and easy accessibility near Electronic City Metro Station.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/cb",
  },
}
function CBPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="CB Crown Banquet"
          tagline="The Best Banquet & Party Hall in Noida"
          image="/images/cb.png"
        />
      </div>
      <CBCrownBanquet />
    </div>
  );
}

export default CBPage;
