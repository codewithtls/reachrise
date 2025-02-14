import Breadcrumb from "@/components/Breadcrumb";
import HeyFairies from "@/components/HeyFairies";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "HeyFairies | Best Customized Mobile Covers Online in India",
  description:"Design your own mobile cover with HeyFairies. High-quality prints, trendy designs & personalized phone cases available across India.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/heyfairies",
  },
}
function HeyFairiesPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="HeyFairies"
          tagline="The Best Customized Mobile Covers Online Store"
          image="/images/hf.png"
        />
      </div>
      <HeyFairies />
    </div>
  );
}

export default HeyFairiesPage;
