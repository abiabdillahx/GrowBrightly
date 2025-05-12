"use client";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

// export const metadata = {
//   title: "About Us - GrowBrightly",  // Override title untuk halaman About
//   description: "Learn more about GrowBrightly"
// };

export default function AboutPage() {
  useEffect(() => {
    const backToTopButton = document.getElementById("back-to-top");

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton?.classList.remove("hidden");
        backToTopButton?.classList.add("flex");
      } else {
        backToTopButton?.classList.add("hidden");
        backToTopButton?.classList.remove("flex");
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTopButton?.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTopButton?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - GrowBrightly</title>
        <meta name="description" content="Learn more about GrowBrightly." />
      </Head>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-10 bg-emerald-50">
        <div className="leaf-bg absolute inset-0 z-0"></div>
        <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:justify-end text-right">
            <div className="md:w-1/2 mb-10 md:mb-0 mx-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                About <span className="text-emerald-600">GrowBrightly</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We are dedicated to creating sustainable solutions for the
                better next generation. We believe that our service will make a
                better life growth. GrowBrightly is helped by AI to increase
                our kids&apos; growth.
              </p>
              <a
                href="#"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 inline-block"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/placeholder.png"
                alt="Team working together"
                width={500}
                height={500}
                className="rounded-xl shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white mx-15">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-600">Mission</span> &{" "}
              <span className="text-emerald-600">Vision</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-emerald-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-bullseye text-emerald-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus iaculis metus bibendum magna pretium, et rutrum nibh sollicitudin. 
                Donec vitae ligula non tortor rhoncus tempor. Duis ut turpis ut arcu molestie varius. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-eye text-emerald-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus iaculis metus bibendum magna pretium, et rutrum nibh sollicitudin. 
                Donec vitae ligula non tortor rhoncus tempor. Duis ut turpis ut arcu molestie varius. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-600 text-white rounded-full shadow-lg hidden items-center justify-center"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}
