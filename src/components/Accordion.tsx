"use client";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string; // HTML del markdown
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left text-lg font-medium hover:bg-gray-100"
          >
            {item.title}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div
              className="p-4 text-gray-700 prose"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
