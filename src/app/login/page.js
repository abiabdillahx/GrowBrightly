export default function LoginPage() {
    return (
        <>
        <div className="min-h-180 flex items-center justify-center p-1">
        <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* <!-- Header --> */}
                <div className="bg-emerald-gradient py-6 px-8 text-center">
                    <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                    <p className="text-emerald-100 mt-1">Sign in to your account</p>
                </div>
                
                {/* <!-- Form --> */}
                <form className="p-8" id="loginForm">
                    <div className="mb-6">
                        <label for="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-envelope text-gray-400"></i>
                            </div>
                            <input type="email" id="email" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus-emerald outline-none transition duration-200" placeholder="your@email.com" required/>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-lock text-gray-400"></i>
                            </div>
                            <input type="password" id="password" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus-emerald outline-none transition duration-200" placeholder="••••••••" required/>
                            <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600" id="togglePassword">
                                <i className="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"/>
                            <label for="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">Forgot password?</a>
                    </div>
                    
                    <button type="submit" className="w-full btn-emerald text-white font-medium py-3 px-4 rounded-full cursor-pointer shadow hover:shadow-md">
                        Sign In
                    </button>
                    
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">Don&apos;t have an account? 
                            <a href="/register" className="text-emerald-600 hover:text-emerald-800 font-medium"> Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    );
}