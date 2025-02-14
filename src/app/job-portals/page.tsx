import Breadcrumb from "@/components/Breadcrumb";
import JobPortals from "@/components/JobPortals";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Job Portals | Reach Rise",
  description:"Job Portals | Reach Rise",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/job-portals",
  },
}
function JobPortalsPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="Job Portals"
          tagline="Hire 365, Rojgar Today and AapKi Jobs"
          image="/images/hire.png"
        />
      </div>
      <JobPortals />
    </div>
  );
}

export default JobPortalsPage;
