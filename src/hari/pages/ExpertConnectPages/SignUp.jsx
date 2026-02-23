import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhoneAlt,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({ keycloak }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Register user with Keycloak
      const adminToken = await getAdminToken();
      
      const userData = {
        username: formData.email,
        email: formData.email,
        firstName: formData.fullName.split(' ')[0],
        lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
        enabled: true,
        attributes: {
          phone: [formData.phone],
        },
        credentials: [
          {
            type: 'password',
            value: formData.password,
            temporary: false,
          },
        ],
      };

      const registerUrl = `${keycloak.authServerUrl}/admin/realms/${keycloak.realm}/users`;
      
      await axios.post(registerUrl, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
        },
      });

      // Auto-login after registration
      const tokenUrl = `${keycloak.authServerUrl}/realms/${keycloak.realm}/protocol/openid-connect/token`;
      
      const params = new URLSearchParams();
      params.append('client_id', keycloak.clientId);
      params.append('username', formData.email);
      params.append('password', formData.password);
      params.append('grant_type', 'password');

      const response = await axios.post(tokenUrl, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Set the token in keycloak instance
      keycloak.token = response.data.access_token;
      keycloak.refreshToken = response.data.refresh_token;
      keycloak.authenticated = true;
      keycloak.tokenParsed = JSON.parse(atob(response.data.access_token.split('.')[1]));

      // Redirect to home
      navigate('/');
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response?.status === 409) {
        setError('An account with this email already exists.');
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getAdminToken = async () => {
    // This requires admin credentials - you'll need to set up a backend endpoint
    // For now, using a simple registration flow
    // In production, use Keycloak's registration flow or backend API
    throw new Error('Admin token needed - use keycloak.register() instead');
  };

  const handleKeycloakRegister = () => {
    // Use Keycloak's built-in registration with your custom redirect
    keycloak.register({
      redirectUri: window.location.origin + '/',
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white mx-10 my-10">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 py-10 relative">
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 flex items-center text-gray-600 hover:text-[#6D3E93] transition cursor-pointer"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <div className="w-full max-w-sm mt-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-2xl font-bold text-gray-800">
              Create an Account
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Join us and start your journey today.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Type name here"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="123-456-7890"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="At least 8 characters"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </div>
              </div>
            </div>

            {/* Sign Up Button - Using Keycloak's registration page with your UI redirect */}
            <button
              type="button"
              onClick={handleKeycloakRegister}
              className="w-full bg-[#6D3E93] text-white py-2 rounded-lg font-medium text-lg hover:bg-[#5B2E7E] transition duration-200"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center rounded-t-xl md:rounded-none md:rounded-l-xl h-64 md:h-auto"
        style={{
          backgroundImage:
            "url('/hari/ExpertConnectImages/backgrounds/signin.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-xl md:rounded-none md:rounded-l-xl" />

        <div className="absolute bottom-6 left-6 text-white max-w-sm">
          <div className="flex space-x-1 mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-lg" />
            ))}
          </div>

          <h2 className="text-2xl font-bold">LeMiCi AI</h2>
          <p className="mt-2 text-sm leading-relaxed">
            LeMiCi IQ is a marketing automation platform offering WhatsApp
            Business API, web push, and social media tools.
          </p>
          <p className="mt-3 text-sm font-semibold text-blue-400">
            Pritesh Prakash Rane & Soniya Uday Naik
          </p>
          <p className="text-xs">Directors</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
