import Breadcrumb from "@/components/Breadcrumb";
import MinistryOfDaru from "@/components/MinistryOfDaru";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ministry of Daru | Best Restaurant & Bar in Noida",
  description:"Enjoy fine dining, rooftop seating, and live entertainment at Ministry of Daru, Noida’s best restaurant. Daily live music, happy hour deals & franchise options available.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/ministry-of-daru",
  },
}
function MinistryofDaruPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="Ministry of Daru"
          tagline="The Finest Fine Dining Restaurant in Noida & Delhi NCR"
          image="/images/mod.png"
        />
      </div>
      <MinistryOfDaru />
    </div>
  );
}

export default MinistryofDaruPage;
