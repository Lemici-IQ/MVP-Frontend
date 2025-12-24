const Stats = ({ data }) => {
  return (
    <div className="mt-12">
      <h2 className="italic text-lg mb-6">
        Why you should choose LeMiCi
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((stat, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow p-18 text-center font-semibold ${
              idx === 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            <p className="text-2xl">{stat.value}</p>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
