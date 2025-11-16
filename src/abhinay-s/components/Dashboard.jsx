import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-4 bg-white">
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-semibold text-[#6D3E93]">
            Hello Abhishek !
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <h4 className="text-sm font-semibold">Abhishek Bhatt</h4>
            <p className="text-xs text-gray-500">Designer</p>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Dashboard Title */}
      <main className="px-10 mt-6">
        <h1 className="text-5xl font-bold mb-6">LeMiCi Dashboard</h1>

        {/* Overview Section */}
        <div className="flex w-full h-[500px] gap-5">
          {/* State Panel */}
          <div className="w-1/3">
            <div className="bg-pink-50 h-full rounded-3xl shadow-sm p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">State</h2>
                <p className="text-sm text-gray-500 mt-2">Overview Panel</p>
              </div>
              <div className="self-end mt-4">
                <div className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                  ➜
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 flex flex-col">
            {/* Stats */}
            <div className="flex gap-4">
              <div className="bg-blue-50 rounded-3xl p-8 flex flex-col items-center justify-center flex-1">
                <p className="text-lg font-semibold mb-3">Industry</p>
                <div className="w-24">
                  <CircularProgressbar
                    value={75}
                    text={`75%`}
                    styles={buildStyles({
                      textColor: "#000",
                      pathColor: "#60a5fa",
                      trailColor: "#e5e7eb",
                    })}
                  />
                </div>
              </div>

              <div className="bg-yellow-50 rounded-3xl p-8 flex flex-col items-center justify-center flex-1">
                <p className="text-lg font-semibold mb-3">Company</p>
                <div className="w-24">
                  <CircularProgressbar
                    value={75}
                    text={`75%`}
                    styles={buildStyles({
                      textColor: "#000",
                      pathColor: "#facc15",
                      trailColor: "#e5e7eb",
                    })}
                  />
                </div>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center flex-1">
                <p className="text-lg font-semibold mb-3">Data</p>
                <div className="w-24">
                  <CircularProgressbar
                    value={65}
                    text={`65%`}
                    styles={buildStyles({
                      textColor: "#000",
                      pathColor: "#6b21a8",
                      trailColor: "#e5e7eb",
                    })}
                  />
                </div>
              </div>
            </div>

          {/* Graph Placeholder */}
<div className="bg-white rounded-3xl shadow-sm p-6 mt-4 flex-1 flex justify-center items-center">
  <div className="flex items-end space-x-4 h-48 w-full justify-center">
    {[50, 80, 60, 100, 70, 50, 80, 20, 110, 20, 40].map((h, i) => (
      <div
        key={i}
        className={`w-8  transition-all duration-300 ${
          i === 8 ? "bg-[#6D3E93]" : "bg-gray-300"
        }`}
        style={{ height: `${h}%` }}
      ></div>
    ))}
  </div>
</div>


          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-3 gap-6 mt-10 mb-4">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="flex flex-col">
                <img
              src="/abhinay/dash-1.jpg"
              alt="Projects"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="text-sm text-gray-600">
                Implementation and Monitoring of projects in aspirational
                districts...
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold mt-2 inline-block"
              >
                Read More
              </a>
            </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/abhinay/dash-2.jpg"
              alt="Analytics"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Analytics</h3>
              <p className="text-sm text-gray-600">
                Deeper analytics into administrative data to support district
                magistrates...
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/abhinay/dash-3.jpg"
              alt="Citizen Feedback"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Citizen Feedback</h3>
              <p className="text-sm text-gray-600">
                Niti Aayog looks forward to constructive feedback from citizens
                to improve the program...
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold mt-2 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
