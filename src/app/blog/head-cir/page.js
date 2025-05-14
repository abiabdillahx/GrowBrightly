export default function HeadCir() {
    return (
        <main class="container mx-auto px-4 py-12 max-w-4xl">
            <article>
                <div class="mb-8">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Health</span>
                        <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Child Development</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">The Essential Guide to Measuring Head Circumference</h1>
                    <div class="flex items-center space-x-4 mb-6">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Health Specialist"/>
                        <div>
                            <p class="font-medium text-gray-900">Health Specialist</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <span>June 12, 2023</span>
                                <span class="mx-2">•</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                         alt="Measuring baby's head" class="w-full h-auto rounded-xl shadow-lg"/>
                    <div class="mt-4 text-sm text-gray-500 text-center">Proper head circumference measurement technique for growth monitoring</div>
                </div>

                <div class="bg-white rounded-xl shadow-md p-8 md:p-10 article-content">
                    <p class="text-lg font-medium text-gray-700 mb-8">
                        Head circumference measurement is a vital tool for monitoring brain growth and development, especially in infants and young children. This guide covers the proper technique and its importance in pediatric care.
                    </p>
                    
                    <h2 class="text-2xl font-bold text-emerald-800 mt-8 mb-4">Why Measure Head Circumference?</h2>
                    
                    <p class="mb-4">
                        Head circumference (Occipitofrontal circumference or OFC) reflects brain growth and is particularly important during the first two years of life when the brain develops rapidly.
                    </p>
                    
                    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                        <h4 class="font-bold text-emerald-800 mb-3">Key Benefits of Head Circumference Measurement:</h4>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Early detection:</strong> Can identify potential developmental issues</li>
                            <li><strong>Growth tracking:</strong> Shows brain development patterns over time</li>
                            <li><strong>Non-invasive:</strong> Simple, safe procedure with no discomfort</li>
                            <li><strong>Universal standard:</strong> Part of routine well-child visits</li>
                        </ul>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-emerald-800 mt-8 mb-4">Step-by-Step Measurement Guide</h2>
                    
                    <div class="space-y-6">
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">1. Equipment Preparation</h4>
                            <p>Use a flexible, non-stretchable measuring tape with clear millimeter markings. Paper or plastic tapes are preferable to cloth tapes which may stretch.</p>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">2. Position the Child</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>For infants: Measure while being held by caregiver or lying down</li>
                                <li>For older children: Can sit or stand</li>
                                <li>Ensure hair is lying flat without accessories</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">3. Identify Measurement Points</h4>
                            <p class="mb-2">Locate these anatomical landmarks:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>Front:</strong> Most prominent part of forehead (supraorbital ridges)</li>
                                <li><strong>Back:</strong> Most prominent part of occipital bone</li>
                                <li><strong>Sides:</strong> Just above the ears</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">4. Take the Measurement</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Wrap tape around the head at the identified points</li>
                                <li>Ensure tape lies flat without twisting</li>
                                <li>Apply gentle pressure - enough to compress hair but not indent skin</li>
                                <li>Read measurement at eye level to nearest 0.1 cm</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">5. Record and Plot</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Record measurement immediately with date and age</li>
                                <li>Plot on standardized growth chart</li>
                                <li>Compare with previous measurements to assess growth pattern</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-emerald-800 mt-12 mb-4">Interpreting Head Circumference</h2>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-emerald-200">
                            <thead class="bg-emerald-100">
                                <tr>
                                    <th class="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Measurement</th>
                                    <th class="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Percentile</th>
                                    <th class="py-2 px-4 border-b border-emerald-200 text-left text-emerald-800">Interpretation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 px-4 border-b border-emerald-200">Below 3rd</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Microcephaly</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">May indicate developmental concerns</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-emerald-200">3rd-97th</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Normal range</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Follow growth curve pattern</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-emerald-200">Above 97th</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">Macrocephaly</td>
                                    <td class="py-2 px-4 border-b border-emerald-200">May warrant further evaluation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="bg-emerald-100 rounded-lg p-6 mt-8">
                        <p class="text-emerald-800 font-medium">
                            While single measurements provide useful information, tracking head circumference over time provides the most valuable insights into a child's growth and development.
                        </p>
                    </div>
                </div>
                
                <div class="mt-8 mb-12">
                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Topics</h3>
                    <div class="flex flex-wrap gap-2">
                        <a href="/muac" class="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">MUAC Measurement</a>
                        <a href="#" class="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Child Growth</a>
                        <a href="#" class="tag bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white">Developmental Milestones</a>
                    </div>
                </div>
            </article>
        </main>
    );
}