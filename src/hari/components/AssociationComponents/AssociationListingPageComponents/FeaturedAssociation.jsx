const FeaturedAssociation = () => {
  return (
    <section className="w-full py-10 px-4 lg:px-10">
      {/* 70–30 layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Featured Business Association Categories
          </h2>
          <p className="mb-8 text-gray-600">The most in-demand categories among business professionals</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* CARD 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc1.jpg"
                alt="Technology"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Technology</p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc2.jpg"
                alt="Finance"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Finance</p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc3.jpg"
                alt="Healthcare"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Healthcare</p>
            </div>

            {/* CARD 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc4.jpg"
                alt="Manufacturing"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Manufacturing</p>
            </div>

            {/* CARD 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc5.jpg"
                alt="Retail"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Retail</p>
            </div>

            {/* CARD 6 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc6.jpg"
                alt="Consulting"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Consulting</p>
            </div>

            {/* CARD 7 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc7.jpg"
                alt="Construction"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Construction</p>
            </div>

            {/* CARD 8 */}
            <div className="flex flex-col items-center">
              <img
                src="/hari/AssociationImages/fc8.jpg"
                alt="Education"
                className="rounded-xl w-full h-36 object-cover"
              />
              <p className="mt-2 text-sm font-medium">Education</p>
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
            <li>What is a business association in the context of professional networking?</li>
            <li>Who is the target member for business associations in your industry?</li>
            <li>What is the typical membership model used by business associations?</li>
            <li>What are the main benefits offered in an association membership?</li>
            <li>What kind of events and networking opportunities are provided?</li>
            <li>What is the expected membership fee and ROI for a business association?</li>
            <li>What kind of resources and support does the association provide?</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FeaturedAssociation;

     