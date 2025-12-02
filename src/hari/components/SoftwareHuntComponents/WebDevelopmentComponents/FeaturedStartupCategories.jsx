const FeaturedStartupCategories = () => {
  return (
    <section className="w-full py-10 px-4 lg:px-10">
      {/* 70–30 layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-10">
            Featured Startup categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* CARD 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/ai.jpg"
                alt="AI/ML"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">AI/ML</p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/saas.jpg"
                alt="SaaS"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">SaaS</p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/cloudcomputing.jpg"
                alt="Cloud Computing"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Cloud computing</p>
            </div>

            {/* CARD 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/vr.jpg"
                alt="AR/VR"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">AR/VR</p>
            </div>

            {/* CARD 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/d2c.jpg"
                alt="D2C"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">D2C</p>
            </div>

            {/* CARD 6 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/digitalpay.jpg"
                alt="Digital Payments"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Digital Payments</p>
            </div>

            {/* CARD 7 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/telmed.jpg"
                alt="Telemedicine"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Telemedicine</p>
            </div>

            {/* CARD 8 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/SoftwareHuntImages/training.jpg"
                alt="Corporate Training"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Corporate Training</p>
            </div>

          </div>

          <div className="flex justify-end mt-6">
            <a className="text-sm text-blue-500 cursor-pointer inline-flex gap-1 items-center">
              View more →
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="rounded-2xl border-2 border-[#EDEDED] p-6">
          <h3 className="text-lg font-semibold mb-4">
            Understanding Category franchise
          </h3>

          <ul className="space-y-2 text-sm text-blue-500 leading-relaxed">
            <li>What is a category franchise in the context of the Food industry?</li>
            <li>Who is the target customer for a Food franchise in India ?</li>
            <li>What is the typical business model used by Food franchises ?</li>
            <li>What are the main services offered in a food franchise ?</li>
            <li>What kind of infrastructure or space is required ?</li>
            <li>What is the expected investment and ROI for a food franchise ?</li>
            <li>What kind of training and support does the franchisor provide ?</li>
            <li>In which locations does a food franchise work best in India ?</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FeaturedStartupCategories;
