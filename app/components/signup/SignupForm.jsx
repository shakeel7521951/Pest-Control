import { FaUser, FaLock, FaEnvelope, FaFeatherAlt } from 'react-icons/fa';
import Link from 'next/link'; // Added this import

export default function SignupForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-green-500 to-[#7BAE4B] p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <FaFeatherAlt className="text-white text-2xl" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">Join Our Avian Community</h2>
            <p className="text-white/90 mt-1">Create your free account today</p>
          </div>

          {/* Form Content */}
          <form className="p-6 space-y-5">
            <div className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="pl-10 w-full p-3 outline-0 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="pl-10 w-full p-3 outline-0 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="pl-10 w-full p-3 rounded-lg outline-0 border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                />
              </div>

              {/* Confirm Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="pl-10 w-full p-3 rounded-lg outline-0 border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-[#7BAE4B] hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-green-600 font-medium hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}