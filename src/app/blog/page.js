"use client";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "./blog.css";

export default function Blog() {
    useEffect(() => {
    document.documentElement.classList.add('emerald-background-page'); // Tambahkan class ke elemen root
  }, []);
    return(
    <>
        <Head>
            <title>Read the blogs - GrowBrightly</title>
        </Head>
        {/* <!-- Blog Content --> */}
        
        <main className="container mx-auto px-4 py-8 max-w-6xl">
            {/* <!-- Blog Header with Emerald Accent --> */}
            <div className="mb-12 text-center relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-100 rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full opacity-30"></div>
                <h1 className="text-3xl font-bold mb-4 relative">Stunting AI Blog</h1>
                <p className="text-gray-600 relative">Insights and updates on AI solutions for childhood stunting</p>
            </div>

            {/* <!-- Blog Posts Grid --> */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* <!-- Blog Post 1 --> */}
                <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>June 15, 2024</span>
                            <span className="mx-2">•</span>
                            <span>8 min read</span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-3">How to Measure MUAC</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">AI</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Healthcare</span>
                        </div>
                        <div className="article-content">
                            <p>The Upper Arm Circumference (MUAC) is a fantastic, quick, and non-invasive way to assess a person's nutritional status, particularly in identifying malnutrition. It's like taking a snapshot of their muscle and fat reserves...</p>
                        </div>
                        <a href="/blog/muac-measurement" className="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium">
                            Read more →
                        </a>
                    </div>
                </article>

                {/* <!-- Blog Post 2 --> */}
                <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>May 28, 2024</span>
                            <span className="mx-2">•</span>
                            <span>5 min read</span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-3">Nutritional Analysis with Machine Learning</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Nutrition</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">ML</span>
                        </div>
                        <div className="article-content">
                            <p>How machine learning is transforming dietary assessment and personalized nutrition plans in low-income populations. Our latest study shows promising results in automated nutritional analysis...</p>
                        </div>
                        <a href="#" className="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium">
                            Read more →
                        </a>
                    </div>
                </article>

                {/* <!-- Blog Post 3 --> */}
                <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>May 15, 2024</span>
                            <span className="mx-2">•</span>
                            <span>7 min read</span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-3">Mobile Health Solutions for Prevention</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Mobile</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Prevention</span>
                        </div>
                        <div className="article-content">
                            <p>Case studies from Southeast Asia showing how smartphone apps are improving maternal and child health outcomes. Our mobile health platform has reached over 10,000 families in rural areas...</p>
                        </div>
                        <a href="#" className="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium">
                            Read more →
                        </a>
                    </div>
                </article>

                {/* <!-- Blog Post 4 --> */}
                <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span>April 30, 2024</span>
                            <span className="mx-2">•</span>
                            <span>6 min read</span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-3">Big Data Approaches to Malnutrition</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Data</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Research</span>
                        </div>
                        <div className="article-content">
                            <p>Leveraging large-scale health datasets to identify patterns and predict stunting hotspots before they emerge. Our analysis of over 1 million health records reveals surprising correlations...</p>
                        </div>
                        <a href="#" className="inline-block mt-4 text-emerald-600 hover:text-emerald-800 font-medium">
                            Read more →
                        </a>
                    </div>
                </article>
            </div>

            {/* <!-- Simple Pagination --> */}
            <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-4">
                    <a href="#" className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">Previous</a>
                    <a href="#" className="px-4 py-2 bg-emerald-600 text-white rounded">1</a>
                    <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">2</a>
                    <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">3</a>
                    <a href="#" className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">Next</a>
                </nav>
            </div>
        </main>
    </>
    );
}