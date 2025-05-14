import Image from "next/image";
export default function Muac() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <article>
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Health</span>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Nutrition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">The Complete Guide to Measuring Upper Arm Circumference (MUAC)</h1>
                    <div className="flex items-center space-x-4 mb-6">
                        <Image className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" width={48} height={48} alt="Health Specialist"/>
                        <div>
                            <p className="font-medium text-gray-900">Health Specialist</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>June 10, 2023</span>
                                <span className="mx-2">•</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>
                    <Image width={1000} height={1000} src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                         alt="Measuring child&apos;s arm" className="w-full h-auto rounded-xl shadow-lg"/>
                    <div className="mt-4 text-sm text-gray-500 text-center">Proper MUAC measurement technique for accurate nutritional assessment</div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 md:p-10 article-content">
                    <p className="text-lg font-medium text-gray-700 mb-8">
                        Upper Arm Circumference (MUAC) measurement is a quick, non-invasive way to assess nutritional status, particularly for identifying malnutrition. This guide will walk you through the proper technique and explain why this measurement matters.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Why Measure MUAC?</h2>
                    
                    <p className="mb-4">
                        MUAC is a powerful indicator because it reflects both muscle mass and subcutaneous fat. In situations of undernutrition, these reserves are depleted, leading to a lower MUAC measurement.
                    </p>
                    
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                        <h4 className="font-bold text-emerald-800 mb-3">Key Benefits of MUAC Measurement:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Quick screening:</strong> Especially useful in emergencies and field settings</li>
                            <li><strong>Non-invasive:</strong> No needles or special equipment required</li>
                            <li><strong>Reliable indicator:</strong> Strong correlation with nutritional status</li>
                            <li><strong>Easy to learn:</strong> Can be performed by community health workers</li>
                        </ul>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Step-by-Step MUAC Measurement</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">1. Gather Your Tools</h4>
                            <p>You&apos;ll need a flexible, non-stretchable measuring tape with clear centimeter markings. Ensure it&apos;s in good condition without any kinks or tears.</p>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">2. Prepare the Person</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Have the person stand tall with arms relaxed at their sides</li>
                                <li>Use the non-dominant arm (opposite the writing hand) for consistency</li>
                                <li>Remove any bulky clothing that might interfere</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">3. Locate the Midpoint</h4>
                            <p className="mb-2">Finding the correct measurement point is crucial:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Bend the arm to 90 degrees to identify landmarks:
                                    <ul className="list-circle pl-5 mt-1">
                                        <li><strong>Acromion:</strong> Bony point at shoulder top</li>
                                        <li><strong>Olecranon:</strong> Point of the elbow</li>
                                    </ul>
                                </li>
                                <li>Find the midpoint between these two points</li>
                                <li>Mark this spot lightly with a pen if needed</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">4. Take the Measurement</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>With arm hanging straight, wrap the tape around the marked midpoint</li>
                                <li>Ensure tape lies flat against skin without compressing</li>
                                <li>Read measurement at eye level to the nearest 0.1 cm</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">5. Record and Interpret</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Note the measurement immediately</li>
                                <li>Compare against standard MUAC reference charts</li>
                                <li>For accuracy, consider taking 2-3 measurements</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-emerald-800 mt-12 mb-4">MUAC Interpretation Guidelines</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-emerald-200">
                            <thead className="bg-emerald-100">
                                <tr>
                                    <th className="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">MUAC Measurement</th>
                                    <th className="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Nutritional Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-emerald-200">Below 11.5 cm</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Severe acute malnutrition</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-emerald-200">11.5-12.5 cm</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Moderate acute malnutrition</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-emerald-200">Above 12.5 cm</td>
                                    <td className="py-2 px-4 border-b border-emerald-200">Normal nutrition</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="bg-emerald-100 rounded-lg p-6 mt-8">
                        <p className="text-emerald-800 font-medium">
                            Regular MUAC measurements can track nutritional status over time. When performed correctly, this simple measurement provides valuable insights into a person&apos;s health and wellbeing.
                        </p>
                    </div>
                </div>
                
                <div className="mt-8 mb-12">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        <a href="/head-circumference" className="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Head Circumference</a>
                        <a href="#" className="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Child Nutrition</a>
                        <a href="#" className="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Growth Monitoring</a>
                    </div>
                </div>
            </article>
        </main>
    );
}