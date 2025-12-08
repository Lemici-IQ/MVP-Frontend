const HowWePicked = () => {
  return (
    <section className="w-full px-4 md:px-12 py-6">
      
      {/* Rounded Bar */}
      <div className="w-full bg-[#D9D9D9] text-gray-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
        How we picked the Software on the list
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm italic w-full">
        Our Independent and objective research is based on market demand signals in India
        along with annalysis of our proprietary data. This includes product information and
        verified user reviews in the last two years as of April 2025. Sponsorship or client
        status has no influence on the selection of products in the lists, but it may impact
        the order in which products appear.{" "}
        <a href="#" className="text-blue-500 underline">
          Read our full methodology.
        </a>
      </p>

    </section>
  );
};

export default HowWePicked;
