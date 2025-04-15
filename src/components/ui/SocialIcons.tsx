'use client'
import React from "react";

export const SocialIcons = () => {
  return (
    <div className="mt-6 flex gap-4 text-2xl text-gray-800">
      <a
        href="https://www.linkedin.com/in/aariya-gage-88468924a/"
        target="_blank"
        className="hover:-translate-y-1 transform transition-transform duration-200"
      >
        <i className="ri-linkedin-fill"></i>
      </a>
      <a
        href="https://github.com/aariyagage"
        target="_blank"
        className="hover:-translate-y-1 transform transition-transform duration-200"
      >
        <i className="ri-github-fill"></i>
      </a>
      <a
        href="mailto:aariyagage@gmail.com"
        className="hover:-translate-y-1 transform transition-transform duration-200"
      >
        <i className="ri-mail-fill"></i>
      </a>
      <a
        href="https://brevityapp.vercel.app"
        target="_blank"
        className="hover:-translate-y-1 transform transition-transform duration-200"
      >
        <i className="ri-global-line"></i>
      </a>
    </div>
  );
};
