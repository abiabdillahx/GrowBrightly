import Image from "next/image";

export default function HeadCir() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <article>
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Health</span>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Child Development</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">The Essential Guide to Measuring Head Circumference</h1>
                    <div className="flex items-center space-x-4 mb-6">
                        <Image width={48} height={48} className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Health Specialist"/>
                        <div>
                            <p className="font-medium text-gray-900">Health Specialist</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>June 12, 2023</span>
                                <span className="mx-2">•</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                    <Image width={1000} height={1000} src="https://www.rch.org.au/uploadedImages/Main/Content/childgrowth/case5_head_0_2.gif" 
                         alt="Measuring baby&apos;s head" className="w-full h-auto rounded-xl shadow-lg"/>
                    <div className="mt-4 text-sm text-gray-500 text-center">Proper head circumference measurement technique for growth monitoring</div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 md:p-10 article-content">
                    <p className="text-lg font-medium text-gray-700 mb-8">
                        Head circumference measurement is a vital tool for monitoring brain growth and development, especially in infants and young children. This guide covers the proper technique and its importance in pediatric care.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Why Measure Head Circumference?</h2>
                    
                    <p className="mb-4">
                        Head circumference (Occipitofrontal circumference or OFC) reflects brain growth and is particularly important during the first two years of life when the brain develops rapidly.
                    </p>
                    
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                        <h4 className="font-bold text-emerald-800 mb-3">Key Benefits of Head Circumference Measurement:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Early detection:</strong> Can identify potential developmental issues</li>
                            <li><strong>Growth tracking:</strong> Shows brain development patterns over time</li>
                            <li><strong>Non-invasive:</strong> Simple, safe procedure with no discomfort</li>
                            <li><strong>Universal standard:</strong> Part of routine well-child visits</li>
                        </ul>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Step-by-Step Measurement Guide</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">1. Equipment Preparation</h4>
                            <p>Use a flexible, non-stretchable measuring tape with clear millimeter markings. Paper or plastic tapes are preferable to cloth tapes which may stretch.</p>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">2. Position the Child</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>For infants: Measure while being held by caregiver or lying down</li>
                                <li>For older children: Can sit or stand</li>
                                <li>Ensure hair is lying flat without accessories</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">3. Identify Measurement Points</h4>
                            <p className="mb-2">Locate these anatomical landmarks:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Front:</strong> Most prominent part of forehead (supraorbital ridges)</li>
                                <li><strong>Back:</strong> Most prominent part of occipital bone</li>
                                <li><strong>Sides:</strong> Just above the ears</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">4. Take the Measurement</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Wrap tape around the head at the identified points</li>
                                <li>Ensure tape lies flat without twisting</li>
                                <li>Apply gentle pressure - enough to compress hair but not indent skin</li>
                                <li>Read measurement at eye level to nearest 0.1 cm</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">5. Record and Plot</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Record measurement immediately with date and age</li>
                                <li>Plot on standardized growth chart</li>
                                <li>Compare with previous measurements to assess growth pattern</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-emerald-800 mt-12 mb-4">Interpreting Head Circumference</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-emerald-200">
                            <thead className="bg-emerald-100">
                                <tr>
                                    <th className="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Measurement</th>
                                    <th className="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Percentile</th>
                                    <th className="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Interpretation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-emerald-200">Below 3rd</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Microcephaly</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">May indicate developmental concerns</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-emerald-200">3rd-97th</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Normal range</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Follow growth curve pattern</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-emerald-200">Above 97th</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Macrocephaly</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">May warrant further evaluation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="bg-emerald-100 rounded-lg p-6 mt-8">
                        <p className="text-emerald-800 font-medium">
                            While single measurements provide useful information, tracking head circumference over time provides the most valuable insights into a child&apos;s growth and development.
                        </p>
                    </div>
                </div>
                
                <div className="mt-8 mb-12">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        <a href="/muac" className="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">MUAC Measurement</a>
                        <a href="#" className="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Child Growth</a>
                        <a href="#" className="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Developmental Milestones</a>
                    </div>
                </div>
            </article>
        </main>
    );
}