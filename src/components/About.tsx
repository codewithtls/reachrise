"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
const heading = [
  {
    text: "Build",
  },
  {
    text: "Your",
  },
  {
    text: "Career",
  },
  {
    text: "with",
  },
  {
    text: "Reach Rise.",
    className: "text-[color:--primary-color] dark:text-[color:--primary-color]",
  },
];

function About() {
  return (
    <>
      <section id="about" className="container mx-auto px-4 my-20 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffect words={heading} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10"></div>
        </div>
        <TracingBeam className="">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative ">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      </section>
    </>
  );
}
const content = [
  {
    title: "About Reach Rise",
    description: (
      <>
        <p className="text-lg mb-2 text-gray-700">
          At Reach Rise, we are a dynamic multi-business enterprise committed to
          delivering excellence across various industries. From education and
          language learning to hospitality, entertainment, technology, and
          digital marketing, we aim to provide the best services tailored to our
          customers’ needs. With a growing presence in multiple sectors, our
          brands are recognized for their quality, customer satisfaction, and
          market leadership.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          Our passion lies in empowering individuals—whether through language
          education, unforgettable dining experiences, tech-driven learning, or
          innovative digital marketing solutions. With a customer-first
          approach, we ensure excellence, innovation, and reliability in every
          service we offer.
        </p>
      </>
    ),
    badge: "About Us",
    image: "/images/mod.png",
  },
  {
    title: "Reach Rise's Vision",
    description: (
      <>
        <p className="text-lg mb-2 text-gray-700">
          To be a trusted name in education, hospitality, entertainment, and
          digital solutions, providing top-notch services that empower
          individuals and enrich experiences. We strive to set new benchmarks in
          quality, innovation, and customer satisfaction across all our
          industries.
        </p>
      </>
    ),
    badge: "Our Vision",
    image: "/images/tbg.png",
  },
  {
    title: "Our Brands and Services",
    description: (
      <>
        <p className="text-lg mb-2 text-gray-700">
          To establish Reach Rise as a market leader in every sector we operate
          in.
          <br />
          To provide accurate, high-quality, and innovative services that exceed
          customer expectations. To continuously evolve and adapt to industry
          trends, ensuring our customers receive the best-in-class experiences.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          TLS (The japanese Language School)
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Best Japanese Language School – Leading Japanese learning institute
          known for its exceptional teaching methods.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          MOD (Ministry of Daru)
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Finest Fine Dining Restaurant in Noida & Delhi NCR, with over 5,000
          happy reviews on Google, Zomato, and BookMyShow.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          TBG (The Beer Garden)
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Best Rooftop Café in Delhi NCR & Noida, offering a delightful ambiance
          and 2,000+ happy reviews across platforms.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          Code with TLS
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Premier Tech Course Provider, empowering students with in-demand
          programming and technology skills.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          CB Crown Banquet
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          The Best Banquet & Party Hall in Noida, offering premium event hosting
          and luxury celebrations.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          Hey Fairies
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Your go-to online store for customized mobile covers, offering unique
          and stylish designs.
        </p>
        <h1 className="text-[color:--primary-color] text-xl mb-2 font-semibold">
          PromFly
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          A leading Digital Marketing Agency, helping businesses grow with
          innovative and results-driven marketing strategies.
        </p>
      </>
    ),
    badge: "Our Goal",
    image: "/images/tls.png",
  },
];
export default About;