"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-lg font-bold mb-4 md:mb-0">
            <span className="select-none">GrowBrightly</span>
          </div>
          <div className="font-semibold">
          </div>
          <div className="space-x-4">
            <span className="text-right">Our social medias</span><br/>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GrowBrightly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
