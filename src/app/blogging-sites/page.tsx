import BloggingSites from "@/components/BloggingSites";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogging Sites | Reach Rise",
  description:"Blogging Sites | Reach Rise",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/blogging-sites",
  },
}
function BloggingSitesPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="Blogging Sites"
          tagline="Blogging Sites"
          image="/images/indus.png"
        />
      </div>
      <BloggingSites />
    </div>
  );
}

export default BloggingSitesPage;
