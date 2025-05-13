'use client';
import { useEffect, useState } from "react"; 
import { useRouter } from 'next/navigation'; 
import { auth, googleProvider, db } from "@/utils/firebase"; 
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState(null); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    // useEffect(() => {
    //     const togglePassword = document.getElementById('togglePassword');
    //     const passwordInput = document.getElementById('password');
        
    //     if (togglePassword && passwordInput) {
    //         togglePassword.addEventListener('click', function () {
    //             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    //             passwordInput.setAttribute('type', type);
    //             this.querySelector('i').classList.toggle('fa-eye-slash');
    //             this.querySelector('i').classList.toggle('fa-eye');
    //         });
    //     }
    // }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            router.push('/');
        } catch (error) {
            console.error("Error signing in with email and password:", error);
            setError(error.message);
            alert(`Login failed: ${error.message}`);
        }
    };

    const handleGoogleSignIn = async () => {
        setError(null);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    createdAt: new Date(),
                    firstName: user.displayName ? user.displayName.split(' ')[0] : '',
                    lastName: user.displayName ? user.displayName.split(' ').slice(1).join(' ') : ''
                });
            }

            alert('Google Sign-In successful!');
            router.push('/'); 
        } catch (error) {
            console.error("Error signing in with Google:", error);
            setError(error.message);
            alert(`Google Sign-In failed: ${error.message}`);
        }
    };

    return (
        <>
        <div className="min-h-180 flex items-center justify-center p-1">
        <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-emerald-gradient py-6 px-8 text-center">
                    <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                    <p className="text-emerald-100 mt-1">Sign in to your account</p>
                </div>
                {/* {error && <p className="text-red-500">{error}</p>} */}
                <form className="p-8" id="loginForm" onSubmit={handleLogin}>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-envelope text-gray-400"></i>
                            </div>
                            <input type="email" id="email" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus-emerald outline-none transition duration-200" placeholder="your@email.com" required/>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-lock text-gray-400"></i>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus-emerald outline-none transition duration-200"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"/>
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">Forgot password?</a>
                    </div>
                    
                    <button type="submit" className="w-full btn-emerald text-white font-medium py-3 px-4 rounded-full cursor-pointer shadow hover:shadow-md">
                        Sign In
                    </button>

                    {/* Tombol Google Sign-In */}
                    <div className="mt-4 text-center">
                        <p className="text-gray-600 text-sm mb-2">Or sign in with</p>
                        <button 
                            type="button" 
                            onClick={handleGoogleSignIn} 
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center shadow hover:shadow-md transition duration-200"
                        >
                            <i className="fab fa-google mr-2"></i> {}
                            Sign In with Google
                        </button>
                    </div>
                    
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
