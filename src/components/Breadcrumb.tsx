import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  tagline: string;
  image: string;
}

const Breadcrumb = ({ title, tagline, image }: BreadcrumbProps) => {
  return (
    <div
      className="relative bg-cover bg-center text-white w-full"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        marginTop: "var(--header-height, 80px)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto text-center py-20">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>

        {/* Title and Tagline */}
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-lg md:text-xl mt-2">{tagline}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
