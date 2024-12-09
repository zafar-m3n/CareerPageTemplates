import React from "react";
import DynamicValues from "@/data/data";

const Benefits = () => {
  return (
    <section className="py-12">
      <div className="flex justify-center mb-12 px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center max-w-3xl">
          Working at Cleveri means{" "}
          <span className="text-blue-500">
            flexibility, trust and meaningful choices
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white px-6 lg:px-12 py-6 lg:py-12">
        <img
          src="https://picsum.photos/600/300?grayscale"
          alt="Who We Are"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm mb-2 text-justify">
            We understand the importance of flexibility in today’s workplace. At
            Cleveri, you have options: work remotely from the comfort of your
            home, utilize our office spaces or collaborative hubs, or join us as
            a freelancer, allowing you the freedom to decide when, where, and
            how you contribute to our exciting projects.
          </p>
          <p className="text-sm mb-2 text-justify">
            We foster a culture of continuous learning and improvement,
            embracing a feedback-driven mindset. Most importantly, we genuinely
            care—about building innovative and ethical solutions, about the
            impact of our actions on the world, and about ensuring every
            employee has a meaningful and fulfilling experience. As an
            organization committed to inclusivity and sustainability, we provide
            a safe, supportive, and collaborative environment for all team
            members, where everyone’s voice is valued.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
