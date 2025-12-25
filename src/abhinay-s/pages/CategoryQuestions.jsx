import React from "react";

const CategoryQuestions = ({
  title = "Understanding Category franchise",
  data = [],
}) => {
  // safety check
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="border rounded-xl px-4 py-2 bg-gray-50">
      {/* Heading */}
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      {/* Questions */}
      <ul className="space-y-3">
        {data.map((item, index) => (
          <li key={item.id || index}>
            <a
              href="#"
              className="text-[#268BFF] hover:underline text-base leading-relaxed block"
            >
              {item.question}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryQuestions;
