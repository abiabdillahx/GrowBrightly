'use client';
import { useEffect, useState } from "react"; // Tambahkan useState
import { useRouter } from 'next/navigation'; // Untuk redirect
import { auth, db } from "@/utils/firebase"; // Path ke konfigurasi Firebase Anda
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
    const router = useRouter();
    const [error, setError] = useState(null); // State untuk menampilkan error

    useEffect(() => {
        const togglePassword = document.getElementById('togglePassword');
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        function setupPasswordToggle(button, input) {
            if (!button || !input) return;
            button.addEventListener('click', function () {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.querySelector('i').classList.toggle('fa-eye-slash');
                this.querySelector('i').classList.toggle('fa-eye');
            });
        }

        setupPasswordToggle(togglePassword, passwordInput);
        setupPasswordToggle(toggleConfirmPassword, confirmPasswordInput);
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null); // Reset error

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        if (!terms) {
            setError('You must agree to the terms and conditions');
            return;
        }

        try {
            // 1. Buat pengguna di Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. Simpan data tambahan pengguna di Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: new Date() // Timestamp kapan user dibuat
            });

            console.log('Registration successful! User UID:', user.uid);
            alert('Registration successful! Welcome to our community.');
            router.push('/login'); // Redirect ke halaman login setelah sukses

        } catch (error) {
            console.error('Error during registration:', error);
            setError(error.message); // Tampilkan pesan error dari Firebase
            alert(`Registration failed: ${error.message}`);
        }
    };

    return (
        <div className="min-h-200 flex items-center justify-center p-1">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-emerald-gradient py-6 px-8 text-center">
                        <h1 className="text-2xl font-bold text-white">Create Account</h1>
                        <p className="text-emerald-100 mt-1">Join our community</p>
                    </div>
                    
                    <form className="p-8" id="registerForm" onSubmit={handleRegister}>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Tampilkan error */} 
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-user text-gray-400"></i>
                                    </div>
                                    <input type="text" id="firstName" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus-emerald outline-none transition duration-200" placeholder="John" required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-user text-gray-400"></i>
                                    </div>
                                    <input type="text" id="lastName" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus-emerald outline-none transition duration-200" placeholder="Doe" required/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-envelope text-gray-400"></i>
                                </div>
                                <input type="email" id="email" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus-emerald outline-none transition duration-200" placeholder="your@email.com" required/>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input type="password" id="password" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus-emerald outline-none transition duration-200" placeholder="••••••••" required/>
                                <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600" id="togglePassword">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input type="password" id="confirmPassword" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus-emerald outline-none transition duration-200" placeholder="••••••••" required/>
                                <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600" id="toggleConfirmPassword">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex items-center mb-6">
                            <input type="checkbox" id="terms" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" required/>
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the <a href="#" className="text-emerald-600 hover:text-emerald-800 font-medium">Terms</a> and <a href="#" className="text-emerald-600 hover:text-emerald-800 font-medium">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <button type="submit" className="w-full btn-emerald text-white font-medium py-3 px-4 rounded-lg shadow hover:shadow-md">
                            Create Account
                        </button>
                        
                        <div className="mt-6 text-center">
                            <p className="text-gray-600 text-sm">Already have an account? 
                                <a href="/login" className="text-emerald-600 hover:text-emerald-800 font-medium"> Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
