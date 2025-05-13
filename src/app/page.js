"use client";
import { setConfig } from "next/config";
import Image from "next/image";
import { useEffect, useState } from "react";

  export default function Home() {
    return (
      <>
      {/* // <!-- Hero Section --> */}
        <section className="hero-pattern flex-grow py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Detect Stunting Early with <span className="text-emerald-600">AI</span></h1>
                    <p className="text-xl text-gray-600 mb-2">GrowBrightly uses Gemini AI to analyze child growth patterns and identify stunting risks before they become serious.</p>
                    <h4 className="text-2xl text-gray-700 mb-10">Meet our feature, <span className="font-bold text-emerald-600">StuntCheck</span></h4>
                    <div className="flex justify-center space-x-4">
                        <a href="/check" className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-full transition duration-300">
                            Get Started <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                        <a href="/blog" className="border border-emerald-600 text-emerald-600 font-medium py-3 px-6 rounded-full hover:bg-emerald-100 transition duration-300">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Features Section --> */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* <!-- Feature 1 --> */}
                    <div className="bg-emerald-50 p-6 rounded-xl">
                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                            <i className="fas fa-child text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Growth Analysis</h3>
                        <p className="text-gray-600">Our AI compares your child&apos;s measurements with WHO growth standards to detect potential issues.</p>
                    </div>
                    
                    {/* <!-- Feature 2 --> */}
                    <div className="bg-emerald-50 p-6 rounded-xl">
                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                            <i className="fas fa-brain text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Gemini AI</h3>
                        <p className="text-gray-600">Powered by Google&apos;s most advanced AI to provide accurate, personalized insights.</p>
                    </div>
                    
                    {/* <!-- Feature 3 --> */}
                    <div className="bg-emerald-50 p-6 rounded-xl">
                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                            <i className="fas fa-heart text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Early Intervention</h3>
                        <p className="text-gray-600">Get actionable recommendations to address growth concerns before they become serious.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- CTA Section --> */}
        <section className="py-16 bg-emerald-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Monitor Your Child&apos;s Growth?</h2>
                <p className="text-xl mb-8 opacity-90">Join using GrowBrightly to ensure their children grow healthy and strong now.</p>
                <a href="/check" className="inline-block bg-white text-emerald-600 font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition">
                    Start Free Analysis <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>
      </>
    );
  }
