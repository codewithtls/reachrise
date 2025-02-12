import Breadcrumb from "@/components/Breadcrumb";
import MinistryOfDaru from "@/components/MinistryOfDaru";
import React from "react";

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
