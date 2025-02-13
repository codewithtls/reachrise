import Breadcrumb from "@/components/Breadcrumb";
import MinistryOfDaru from "@/components/MinistryOfDaru";
import TheBeerGarden from "@/components/TheBeerGarden";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Beer Garden Noida | Best Rooftop Restro-Bar in Noida",
  description:"Experience the best garden-themed rooftop restaurant in Noida. Perfect for corporate parties, romantic dates, and high-energy nightlife.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/the-beer-garden",
  },
}
function BeerGardenPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="The Beer Garden"
          tagline="The Best Rooftop Café Experience"
          image="/images/tbg.png"
        />
      </div>
      <TheBeerGarden />
    </div>
  );
}

export default BeerGardenPage;
