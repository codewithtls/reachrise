import Breadcrumb from "@/components/Breadcrumb";
import Promfly from "@/components/Promfly";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PromFly | Best Digital Marketing Agency in India",
  description:"Looking for expert digital marketing services? PromFly helps businesses grow with SEO, social media, PPC, content marketing & more.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/promfly",
  },
}
function PromflyPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="Promfly"
          tagline="The Best Digital Marketing Service Provider"
          image="/images/promfly.png"
        />
      </div>
      <Promfly />
    </div>
  );
}

export default PromflyPage;
