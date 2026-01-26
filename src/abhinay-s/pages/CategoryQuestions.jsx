import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryQuestions = ({
  title = "Understanding Category franchise",
  data = [],
}) => {
  const navigate = useNavigate();

  // safety check
  if (!Array.isArray(data) || data.length === 0) return null;

  const handleQuestionClick = (question) => {
    // Navigate to Franchise page with question
    navigate(`/franchise?question=${encodeURIComponent(question)}&autoSubmit=true`);
  };

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
            <button
              onClick={() => handleQuestionClick(item.question)}
              className="text-[#268BFF] hover:underline text-base leading-relaxed block text-left w-full cursor-pointer"
            >
              {item.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryQuestions;
