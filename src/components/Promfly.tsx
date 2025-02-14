"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsQuora,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
function Promfly() {
  const cards = [
    {
      title: "Application Development Services",
      src: "/images/promfly/app.png",
    },
    {
      title: "Website Development Services",
      src: "/images/promfly/web.png",
    },
    {
      title: "Promfly Google Ads Services",
      src: "/images/promfly/google.png",
    },
    {
      title: "On-page SEO",
      src: "/images/promfly/seo.png",
    },
    {
      title: "Shopify Website Development Services",
      src: "/images/promfly/shopify.png",
    },
    {
      title: "UI/UX Design Services",
      src: "/images/promfly/uiux.png",
    },
    {
      title: "Graphic Design Tips & Tricks",
      src: "/images/promfly/graphic.png",
    },
    {
      title: "Theme Development Services",
      src: "/images/promfly/theme.png",
    },
    {
      title: "Social Media Campaigns",
      src: "/images/promfly/smm.png",
    },
  ];
  const links = [
    {
      title: "Promfly -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/people/Promfly/61555331055219/",
    },
    {
      title: "Promfly -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://www.instagram.com/promfly/",
    },
    {
      title: "Promfly -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@PromflyDigitalSolutions",
    },
    {
      title: "Promfly -LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/company/promfly/posts/?feedView=all",
    },
    {
      title: "Promfly -Twitter",
      icon: (
        <BsTwitter className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://x.com/promfly",
    },
    {
      title: "Promfly -Quora",
      icon: (
        <BsQuora className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.quora.com/profile/PromFly?q=Promfly",
    },
    {
      title: "Promfly -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://g.co/kgs/VKcMkPh",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About promfly
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          At PromFly, we’re not just another digital marketing agency—we’re your
          growth partners! Our mission is to help businesses of all sizes
          increase their online presence, drive engagement, and maximize
          conversions through result-oriented marketing strategies.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          With a team of experienced digital marketers, creative designers, and
          data-driven strategists, we deliver customized marketing solutions
          tailored to your brand’s unique needs. Whether you're a startup
          looking for visibility or an established business aiming for
          expansion, PromFly is here to help you scale.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Choose PromFly for Your Digital Marketing Needs?
        </h2>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          1. 360° Digital Marketing Solutions
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We offer comprehensive marketing services designed to boost your
          brand's online presence.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📈 Search Engine Optimization (SEO)</strong> – Rank higher
            on Google & increase organic traffic
          </li>
          <li>
            <strong>📣 Social Media Marketing (SMM)</strong> – Build brand
            awareness & engage with your audience
          </li>
          <li>
            <strong>🎯 Pay-Per-Click Advertising (PPC)</strong> – Maximize ROI
            with Google & Meta Ads
          </li>
          <li>
            <strong>📝 Content Marketing</strong> – High-quality blogs, articles
            & website content
          </li>
          <li>
            <strong>📩 Email Marketing & Lead Generation</strong> – Nurture
            leads & drive conversions
          </li>
          <li>
            <strong>📊 Analytics & Performance Tracking</strong> – Data-driven
            decisions for better results
          </li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          2. Data-Driven Approach for Maximum ROI
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We analyze trends, audience behavior, and performance metrics to
          optimize campaigns for the best results. Our strategies are designed
          to provide:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>✔ Higher conversion rates</li>
          <li>✔ Increased customer engagement</li>
          <li>✔ Better return on ad spend (ROAS)</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          3. Customized Marketing Strategies
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Every business is unique, so we create tailored strategies that align
          with your brand goals and target audience.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🎯 Custom SEO plans for long-term growth</li>
          <li>📊 Unique content & ad creatives for engagement</li>
          <li>🚀 Performance-based marketing with measurable success</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          4. Experienced Team & Industry Expertise
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Our team consists of certified digital marketers, content creators,
          and branding experts who bring years of experience in various
          industries, including:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🏥 Healthcare & Wellness</li>
          <li>🏨 Hospitality & Travel</li>
          <li>🛒 E-commerce & Retail</li>
          <li>📚 Education & Coaching</li>
          <li>📱 Tech & SaaS Businesses</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          5. Affordable & Scalable Digital Solutions
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We believe in delivering top-quality services at budget-friendly
          rates, making digital marketing accessible for startups, small
          businesses, and enterprises alike.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>💰 Flexible pricing plans to fit all budgets</li>
          <li>📌 Scalable marketing campaigns that grow with your business</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          6. Transparent Reporting & Real-Time Insights
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We keep you informed about your campaign performance with detailed
          reports and real-time insights.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>📊 Monthly performance reports</li>
          <li>🔹 Keyword & traffic analytics</li>
          <li>💡 Actionable recommendations</li>
        </ul>

        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
        Get Started with PromFly Today!
        </h2>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+917303881503"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +91-7303881503
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:info@promfly.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              info@promfly.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.promfly.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.promfly.com
            </a>
          </li>
        </ul>
      </div>
      <FloatingDock mobileClassName="translate-y-20" items={links} />
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}
export default Promfly;
