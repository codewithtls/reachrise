import Breadcrumb from "@/components/Breadcrumb";
import TeamLanguages from "@/components/TeamLanguages";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Best Japanese Language School in Delhi | TLS",
  description:"Learn Japanese with TLS, the top Japanese language institute in Delhi. Get expert training, online/offline classes, and Japan student visa assistance. Call +918700956038.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/the-beer-garden",
  },
}
function TeamLanguagesPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="TLS - The Japanese Language School"
          tagline="The Best Japanese Language School"
          image="/images/tls.png"
        />
      </div>
      <TeamLanguages />
    </div>
  );
}

export default TeamLanguagesPage;