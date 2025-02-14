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
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
function TeamLanguages() {
  const cards = [
    {
      title: "The Japanese Language School",
      src: "/images/tls/tls-1.webp",
    },
    {
      title: "Learn Japanese Language",
      src: "/images/tls/tls-2.webp",
    },
    {
      title: "Japanese Language Institute in Delhi",
      src: "/images/tls/tls-3.webp",
    },
    {
      title: "Japanese Language Classes",
      src: "/images/tls/tls-4.webp",
    },
    {
      title: "Japanese Language",
      src: "/images/tls/tls-5.webp",
    },
    {
      title: "Japanese Language Study",
      src: "/images/tls/tls-6.webp",
    },
    {
      title: "Learn Japanese Online",
      src: "/images/tls/tls-7.webp",
    },
    {
      title: "Best Language Institutes in Delhi",
      src: "/images/tls/tls-8.webp",
    },
    {
      title: "Best Japanese Language Courses",
      src: "/images/tls/tls-9.webp",
    },
  ];
  const links = [
    {
      title: "TLS -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/TlsTheJapaneseLanguageSchool/",
    },
    {
      title: "TLS -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://www.instagram.com/tls_japaneselanguage/",
    },
    {
      title: "TLS -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@tlsindo5358",
    },
    {
      title: "TLS -LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/company/team-language-services-tls-the-japanese-language-school/",
    },

    {
      title: "TLS -Pinterest",
      icon: (
        <BsPinterest className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://in.pinterest.com/teamlanguageservicess/",
    },
    {
      title: "TLS -Quora",
      icon: (
        <BsQuora className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.quora.com/profile/TLS-Japanese-Language-Institute?q=TLS",
    },
    {
      title: "TLS -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://g.co/kgs/HJ5fMEZ",
    },
  ];
  const testimonials = [
    {
      quote:
        "TLS helped me clear my JLPT N3 exam with confidence! The structured approach and supportive teachers made all the difference.",
      name: "Ankit S.",
      designation: "Student at TLS - The Japanese Language School",
      src: "/images/tls/tls-2.webp",
    },
    {
      quote:
        "The student visa assistance program was a game-changer. I am now studying in Tokyo, all thanks to TLS!",
      name: "Priya M.",
      designation: "Student at TLS - The Japanese Language School",
      src: "/images/tls/tls-3.webp",
    },
    {
      quote:
        "Learning Japanese at TLS was the best decision! The online classes were super interactive, and I feel ready to work in a Japanese company.",
      name: "Rahul K.",
      designation: "Student at TLS - The Japanese Language School",
      src: "/images/tls/tls-1.webp",
    },
    
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About TLS
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          At Team Language Services (TLS), we believe that learning a new
          language should be exciting, engaging, and accessible to everyone. As
          a leading Japanese language school in Delhi, we have been helping
          students master Japanese fluency through structured courses, expert
          faculty, and a practical approach to learning.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          With Japan being a global economic leader, proficiency in Japanese can
          open doors to countless opportunities in education, business, and
          travel. Whether you're an aspiring student, a working professional, or
          someone passionate about Japanese culture, TLS provides a supportive
          and immersive learning environment to help you achieve your goals.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Choose TLS?
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          We take pride in being one of the best Japanese language institutes in
          Delhi. Here’s why our students choose us:
        </p>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          1. Expert Japanese Trainers
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Our highly qualified and certified instructors provide in-depth
          training to help students master Japanese reading, writing, speaking,
          and listening skills. We focus on practical communication, ensuring
          that our students can confidently interact in real-life situations.
        </p>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          2. Structured Learning Approach
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Our courses are designed for all levels – whether you're a beginner,
          intermediate, or advanced learner, we have a well-structured
          curriculum tailored to your needs. We cover:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>✅ Hiragana, Katakana, and Kanji (Japanese Scripts)</li>
          <li>✅ Japanese Grammar and Sentence Structure</li>
          <li>✅ Pronunciation & Listening Skills</li>
          <li>✅ Conversational Practice for Everyday Situations</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          3. Online & Offline Classes for Maximum Flexibility
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          At TLS, we understand the importance of convenience, which is why we
          offer both online and offline Japanese classes. Whether you prefer
          learning from home or in a classroom setting, we provide:
        </p>
        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>Live Interactive Online Classes</li>
          <li>Offline Classroom Sessions in Delhi</li>
          <li>Self-Paced Learning Material & Recorded Lectures</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          4. Japan Student Visa Assistance
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Dreaming of studying in Japan? TLS provides complete student visa
          assistance for those looking to pursue education in Japan. Our team
          guides students through the visa process, university applications, and
          cultural preparation.
        </p>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          5. Affordable Course Fees & Easy Payment Options
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We offer budget-friendly Japanese language courses without
          compromising on quality. We also provide:
        </p>
        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>Installment Payment Options</li>
          <li>Discounts for Group Enrollments</li>
          <li>Special Packages for Corporate Training</li>
        </ul>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Our Japanese Language Courses
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          At TLS, we offer courses for all skill levels:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🔹 Beginner Level (JLPT N5 & N4)</li>
          <li>🔹 Intermediate Level (JLPT N3)</li>
          <li>🔹 Advanced Level (JLPT N2 & N1)</li>
        </ul>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Cultural Learning at TLS
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          At TLS, we believe that language and culture go hand in hand. That’s
          why we organize cultural activities and workshops such as:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🎌 Japanese Calligraphy Classes</li>
          <li>🍣 Sushi-Making Workshops</li>
          <li>🎭 Japanese Anime & Manga Sessions</li>
          <li>🏯 Study Tours & Japan Travel Guidance</li>
        </ul>
        <p className="text-lg mb-2 text-gray-700">
          These activities enhance the learning experience and help students
          immerse themselves in Japanese traditions.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Success Stories – Hear from Our Students!
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Join TLS & Start Your Japanese Learning Journey Today!
        </h2>
        <p>
          Learning Japanese opens a world of opportunities. Whether you’re
          aiming for career growth, international education, or cultural
          enrichment, TLS is the best place to start.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📍 Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/TLS+-+Japanese+Language+Institute/@28.6299308,77.272829,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfdd8236ce6a7:0x80929e6e1397af35!8m2!3d28.6299261!4d77.2754039!16s%2Fg%2F11g19q2d3y?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              2/81-82, 2nd Floor, Lalita Park, Gali No - 2, Laxmi Nagar, New
              Delhi - 110092
            </a>
          </li>
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+918700956038"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +918700956038
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:tls@teamlanguages.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              tls@teamlanguages.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.teamlanguages.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.teamlanguages.com
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

export default TeamLanguages;
