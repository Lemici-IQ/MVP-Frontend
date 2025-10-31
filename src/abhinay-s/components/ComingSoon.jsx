import React, { useState, useEffect } from 'react';
import { Mail, User } from 'lucide-react';
import ConnectForm from './ConnectForm';

const ComingSoon = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('I Am');
  const [showConnectForm, setShowConnectForm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGetInTouch = () => {
    setShowConnectForm(true);
  };

  const handleBackToComingSoon = () => {
    setShowConnectForm(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { hours, minutes, seconds } = formatTime(currentTime);
  
  // Conditionally render either the ConnectForm or ComingSoon page
  if (showConnectForm) {
    return <ConnectForm onBack={handleBackToComingSoon} />;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/coming-soon.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-[20px] bg-white/20 border border-white/30 rounded-xl shadow-lg px-6 py-10 text-white text-center max-w-3xl w-full space-y-6">

        {/* Logo */}
        <div className="flex justify-center">
          <img src="/abhinay/comig.png" alt="LeMiCI Logo" className="h-[60px] sm:h-[80px]" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, color: '#ffffffff' }}
        >
          “Reimagining <span className="">AI powered</span><br />
          <span className="">Business Search</span> for India”
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg font-inter text-white/80">
          Intent. Information. Intelligence. Insight. Impact
        </p>

        {/* Currently Being Crafted */}
        <h2 className="text-xl font-semibold font-inter">Currently Being Crafted</h2>

        {/* Live Digital Clock */}
        <div className="flex justify-center items-baseline gap-[0.25rem] text-4xl sm:text-6xl font-bold"
          style={{ fontFamily: '"Digital-7", "Courier New", monospace', color: '#ffffff' }}>
          <span className="px-2">{hours}</span>
          <span className="px-1">:</span>
          <span className="px-2">{minutes}</span>
          <span className="px-1">:</span>
          <span className="px-2">{seconds}</span>
        </div>


        {/* Role Selector & Contact Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <div className="relative dropdown-container cursor-pointer">
            <button 
              onClick={toggleDropdown}
              className="flex cursor-pointer items-center bg-white text-black px-4 py-3 rounded-[10px] text-sm font-medium shadow-md hover:bg-gray-50 transition-colors"
            >
              <User className="w-4 h-4 mr-2" /> {selectedRole} ▾
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-[10px] shadow-lg z-10">
                <button
                  onClick={() => handleRoleSelect('Startup')}
                  className="w-full text-left px-4 py-3 text-black text-sm hover:bg-gray-100 transition-colors rounded-t-[10px]"
                >
                  Startup
                </button>
                <button
                  onClick={() => handleRoleSelect('Investor')}
                  className="w-full text-left px-4 py-3 text-black text-sm hover:bg-gray-100 transition-colors"
                >
                  Investor
                </button>
                <button
                  onClick={() => handleRoleSelect('Contributors')}
                  className="w-full text-left px-4 py-3 text-black text-sm hover:bg-gray-100 transition-colors"
                >
                  Contributors
                </button>
                <button
                  onClick={() => handleRoleSelect('Explore')}
                  className="w-full text-left px-4 py-3 text-black text-sm hover:bg-gray-100 transition-colors rounded-b-[10px]"
                >
                  Explore
                </button>
              </div>
            )}
          </div>
          <button 
            onClick={handleGetInTouch}
            className="cursor-pointer flex items-center gap-2 bg-black px-4 py-3 rounded-[10px] text-sm font-medium hover:bg-gray-900 transition-colors shadow-md"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-white/80">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <i className="fab fa-facebook text-xl"></i>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;