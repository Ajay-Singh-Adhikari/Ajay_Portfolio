import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-28 pb-14 px-4 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        <span className="text-pink-600">About Me</span>
      </h2>
      <p className="max-w-3xl text-center text-gray-300 text-base md:text-lg leading-relaxed px-2 md:px-4">
        I&apos;m a{" "}
        <span className="text-pink-600 font-semibold">Front-End Developer</span>{" "}
        with a keen eye for design and a passion for crafting seamless,
        user-friendly experiences. I specialize in building responsive,
        interactive websites that combine modern design with clean, efficient
        code. My focus is on delivering products that are both beautiful and
        functional.
      </p>
    </section>
  );
};

export default About;
