"use client";

export default function Footer() {
  return (
    // <!-- Footer -->
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="ml-8">
                        <div className="flex items-center mb-4">
                            {/* <i className="fas fa-leaf text-2xl text-primary mr-2"></i> */}
                            <h3 className="text-xl font-bold">GrowBrightly</h3>
                        </div>
                        <p className="text-gray-400">AI-powered stunting detection for healthier childhood growth.</p>
                        
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="/check" className="text-gray-400 hover:text-white transition">StuntCheck</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                              <a href="mailto:hello@growbrightly">
                                <i className="fas fa-envelope text-gray-400 mr-2"></i>
                                <span>hello@growbrightly.com</span>
                              </a>
                            </li>
                            <li className="flex itens-center">
                              <a href="https://instagram.com">
                                <i className="fa-brands fa-instagram mr-2 text-gray-300"></i>
                                <span>growbrighly</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://tiktok.com">
                                <i className="fa-brands fa-tiktok mr-2 text-gray-300"></i>
                                <span>grow.brighly</span>
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2025 GrowBrightly. All rights reserved.</p>
                </div>
            </div>
        </footer>
  );
}
