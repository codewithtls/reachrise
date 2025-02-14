"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsQuora,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
function CodeWithTLS() {
  const cards = [
    {
      title: "Application Development Course",
      src: "/images/cwt/app.jpg",
    },
    {
      title: "Full-Stack Development Course",
      src: "/images/cwt/mern.jpg",
    },
    {
      title: "Data Science Course",
      src: "/images/cwt/data-science.jpg",
    },
    {
      title: "AI/ML Course",
      src: "/images/cwt/ai-ml.jpg",
    },
    {
      title: "Digital Marketing Development Course",
      src: "/images/cwt/dm.jpg",
    },
    {
      title: "DSA Course",
      src: "/images/cwt/dsa.jpg",
    },
  ];
  const links = [
    {
      title: "Code With TLS -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/people/CODE-with-TLS/61564912846319/",
    },
    {
      title: "Code With TLS -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://www.instagram.com/codewithtls",
    },
    {
      title: "Code With TLS -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@codewithtls-z1i",
    },
    {
      title: "Code With TLS -LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/company/codewithtls/",
    },
    {
      title: "Code With TLS -Twitter",
      icon: (
        <BsTwitter className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://x.com/codewithtls",
    },
    {
      title: "Code With TLS -Quora",
      icon: (
        <BsQuora className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.quora.com/profile/CODE-With-TLS?q=code%20with%20tl",
    },
    {
      title: "Code With TLS -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://g.co/kgs/vKthBv2",
    },
  ];
  const testimonials = [
    {
      quote:"Code with TLS changed my life! I landed a job at a top tech company within 3 months of completing the Full-Stack Web Development course!",
      name: "Abhishek Kumar",
      designation:"Student at Code With TLS",
      src: "/images/cwt/app.jpg",
    },
    {
      quote:"The best coding institute! The live projects and career guidance really helped me get placed as a software developer. Highly recommended!",
      name: "Sneha Malik",
      designation:"Student at Code With TLS",
      src: "/images/cwt/mern.jpg",
    },
    {
      quote:"Practical, industry-focused courses with expert mentorship. I now have a strong portfolio and job-ready skills!",
      name: "Jatin Singh",
      designation:"Student at Code With TLS",
      src: "/images/cwt/dm.jpg",
    },
  ]
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About Code With TLS
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          Welcome to Code with TLS, your one-stop destination for mastering
          coding and software development. Whether you're a beginner or an
          experienced professional, our courses are designed to help you learn,
          practice, and excel in the world of technology.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          At Code with TLS, we offer industry-relevant courses, including web
          development, data science, Python programming, AI & ML, and full-stack
          development. Our hands-on learning approach, live projects, and expert
          mentorship ensure that you gain real-world experience. Plus, we
          provide a 100% job placement guarantee, making us the top choice for
          anyone looking to kickstart a career in tech.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Choose Code with TLS?
        </h2>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          1. Industry-Oriented Coding Courses
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We provide structured courses that cover the latest industry trends
          and prepare you for real-world challenges.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>👨‍💻 Full-Stack Web Development</li>
          <li>📊 Data Science & Machine Learning</li>
          <li>🐍 Python Programming & Automation</li>
          <li>📱 App Development – iOS & Android</li>
          <li>🖥️ Cybersecurity & Ethical Hacking</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          2. Hands-On Learning with Live Projects
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          At Code with TLS, we believe in learning by doing. Our courses
          include:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🛠 Live coding exercises & real-world projects</li>
          <li>💻 Hackathons & coding challenges</li>
          <li>📝 Interview prep & coding assessments</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          3. 100% Placement Assistance
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We don’t just teach you how to code—we help you land your dream job!
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🎯 Mock interviews & resume-building sessions</li>
          <li>💼 Direct hiring partnerships with top tech companies</li>
          <li>📈 Career mentorship & job-ready skills</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          4. Online & Offline Learning Options
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We offer both self-paced online courses and classroom-based training,
          allowing you to choose a mode that suits your schedule.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🌍 Learn from anywhere with our online platform</li>
          <li>🏫 Attend offline classes for in-person mentorship</li>
          <li>🔗 Access course materials anytime, anywhere</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          5. Certification & Career Growth
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Upon completion of our courses, you’ll receive industry-recognized
          certifications that boost your resume and job prospects.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>📜 Certificate of Completion</li>
          <li>🚀 Portfolio-building with real projects</li>
          <li>🤝 Internship & job opportunities with partner companies</li>
        </ul>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
        Student Reviews – Success Stories
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Start Your Coding Journey Today!
        </h2>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📍 Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/CODE+with+TLS/@28.6298777,77.2728251,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5fb766bc95:0x48127b414b928184!8m2!3d28.629873!4d77.2754!16s%2Fg%2F11lnjd1p75?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              2/81-82, Ground Floor, Lalita Park, Gali No - 2, Laxmi Nagar, New
              Delhi - 110092
            </a>
          </li>
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+918527866980"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +91-8527866980
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:info@codewithtls.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              info@codewithtls.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.codewithtls.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.codewithtls.com
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
export default CodeWithTLS;
