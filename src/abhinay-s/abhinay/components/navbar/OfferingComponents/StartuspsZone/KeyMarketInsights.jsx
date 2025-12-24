const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
const KeyMarketInsights = () => {
  return (
    <div className="p-4 border rounded-xl shadow-sm py-16">
      <h3 className="font-bold mb-2">Key Market insights 📊</h3>
      <p className="text-sm">Revenue of the market research industry worldwide</p>
      <p className="font-bold mt-1">53.9B USD</p>
      <p className="text-sm text-gray-600 mt-2">
        Annual growth of global market research revenue
      </p>
      <p className="font-bold text-green-600">4.6%</p>
      <Button className="mt-3 w-full">Get more insights</Button>
    </div>
  );
};

export default KeyMarketInsights;