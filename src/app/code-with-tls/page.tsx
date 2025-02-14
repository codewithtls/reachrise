import Breadcrumb from "@/components/Breadcrumb";
import CodeWithTLS from "@/components/CodeWithTLS";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Code with TLS | Best Coding Courses with 100% Placement Guarantee",
  description:"Learn coding with hands-on projects at Code with TLS. Web development, data science, Python & more. 100% job placement guarantee.",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/code-with-tls",
  },
}
function CodeWithTLSPage() {
  return (
    <div>
      <div>
        <Breadcrumb
          title="Code with TLS"
          tagline="Learn to Code & Get Placed in Top Tech Companies"
          image="/images/cwt.png"
        />
      </div>
      <CodeWithTLS />
    </div>
  );
}

export default CodeWithTLSPage;
