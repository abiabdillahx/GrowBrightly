export default function Muac() {
    return (
        <main class="container mx-auto px-4 py-12 max-w-4xl">
            <article>
                <div class="mb-8">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Health</span>
                        <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Nutrition</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">The Complete Guide to Measuring Upper Arm Circumference (MUAC)</h1>
                    <div class="flex items-center space-x-4 mb-6">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Health Specialist"/>
                        <div>
                            <p class="font-medium text-gray-900">Health Specialist</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <span>June 10, 2023</span>
                                <span class="mx-2">•</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                         alt="Measuring child's arm" class="w-full h-auto rounded-xl shadow-lg"/>
                    <div class="mt-4 text-sm text-gray-500 text-center">Proper MUAC measurement technique for accurate nutritional assessment</div>
                </div>

                <div class="bg-white rounded-xl shadow-md p-8 md:p-10 article-content">
                    <p class="text-lg font-medium text-gray-700 mb-8">
                        Upper Arm Circumference (MUAC) measurement is a quick, non-invasive way to assess nutritional status, particularly for identifying malnutrition. This guide will walk you through the proper technique and explain why this measurement matters.
                    </p>
                    
                    <h2 class="text-2xl font-bold text-emerald-800 mt-8 mb-4">Why Measure MUAC?</h2>
                    
                    <p class="mb-4">
                        MUAC is a powerful indicator because it reflects both muscle mass and subcutaneous fat. In situations of undernutrition, these reserves are depleted, leading to a lower MUAC measurement.
                    </p>
                    
                    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                        <h4 class="font-bold text-emerald-800 mb-3">Key Benefits of MUAC Measurement:</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Quick screening:</strong> Especially useful in emergencies and field settings</li>
                            <li><strong>Non-invasive:</strong> No needles or special equipment required</li>
                            <li><strong>Reliable indicator:</strong> Strong correlation with nutritional status</li>
                            <li><strong>Easy to learn:</strong> Can be performed by community health workers</li>
                        </ul>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-emerald-800 mt-8 mb-4">Step-by-Step MUAC Measurement</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">1. Gather Your Tools</h4>
                            <p>You'll need a flexible, non-stretchable measuring tape with clear centimeter markings. Ensure it's in good condition without any kinks or tears.</p>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">2. Prepare the Person</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Have the person stand tall with arms relaxed at their sides</li>
                                <li>Use the non-dominant arm (opposite the writing hand) for consistency</li>
                                <li>Remove any bulky clothing that might interfere</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">3. Locate the Midpoint</h4>
                            <p class="mb-2">Finding the correct measurement point is crucial:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Bend the arm to 90 degrees to identify landmarks:
                                    <ul class="list-circle pl-5 mt-1">
                                        <li><strong>Acromion:</strong> Bony point at shoulder top</li>
                                        <li><strong>Olecranon:</strong> Point of the elbow</li>
                                    </ul>
                                </li>
                                <li>Find the midpoint between these two points</li>
                                <li>Mark this spot lightly with a pen if needed</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">4. Take the Measurement</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>With arm hanging straight, wrap the tape around the marked midpoint</li>
                                <li>Ensure tape lies flat against skin without compressing</li>
                                <li>Read measurement at eye level to the nearest 0.1 cm</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">5. Record and Interpret</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Note the measurement immediately</li>
                                <li>Compare against standard MUAC reference charts</li>
                                <li>For accuracy, consider taking 2-3 measurements</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-emerald-800 mt-12 mb-4">MUAC Interpretation Guidelines</h2>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-emerald-200">
                            <thead class="bg-emerald-100">
                                <tr>
                                    <th class="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">MUAC Measurement</th>
                                    <th class="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Nutritional Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 px-4 border-b border-emerald-200">Below 11.5 cm</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Severe acute malnutrition</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-emerald-200">11.5-12.5 cm</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Moderate acute malnutrition</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-emerald-200">Above 12.5 cm</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Normal nutrition</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="bg-emerald-100 rounded-lg p-6 mt-8">
                        <p class="text-emerald-800 font-medium">
                            Regular MUAC measurements can track nutritional status over time. When performed correctly, this simple measurement provides valuable insights into a person's health and wellbeing.
                        </p>
                    </div>
                </div>
                
                <div class="mt-8 mb-12">
                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Topics</h3>
                    <div class="flex flex-wrap gap-2">
                        <a href="/head-circumference" class="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Head Circumference</a>
                        <a href="#" class="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Child Nutrition</a>
                        <a href="#" class="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Growth Monitoring</a>
                    </div>
                </div>
            </article>
        </main>
    );
}