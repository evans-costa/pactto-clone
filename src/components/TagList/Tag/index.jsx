"use client";

import { useState, useEffect } from "react";

export default function Tag({ text, id }) {
  const [isVisited, setIsVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem(`visited_${id}`);
    if (visited) {
      setIsVisited(true);
    }
  }, [id]);

  const handleLinkClick = () => {
    setIsVisited(true);
    localStorage.setItem(`visited_${id}`, "true");
  };

  return (
    <div className="flex items-center gap-3">
      <span
        className={`rounded-2xl ${isVisited ? "bg-yellow" : "bg-gray"} px-1.5 py-1 text-xs uppercase text-black`}>
        {isVisited ? "Done" : "To Do"}
      </span>
      <p onClick={handleLinkClick} className="font-medium text-gray">
        {text}
      </p>
    </div>
  );
}
