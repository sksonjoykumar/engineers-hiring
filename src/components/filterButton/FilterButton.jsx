import React from "react";

function FilterButton({ label, isActive, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={`font-outfit text-sm w-full px-1 py-2 border dark:border-gray-800 rounded-md my-1.5 ${
          isActive ? "bg-[#5F6FFF] dark:bg-[#5F6FFF] text-white" : ""
        }`}
      >
        {label}
      </button>
    </div>
  );
}

export default FilterButton;
