import { BarChart3, Cpu, Bot } from "lucide-react";
import "./BusinessDevelopment.css";

export default function BusinessDevelopment() {
  return (
    <section className="w-full bg-[#0f0f0f] py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Top Heading */}
        <div className="text-center mb-14">
          <h3 className="text-sm tracking-wide text-gray-300 uppercase md:text-base">
            We are Avers
          </h3>

          <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Business Development & Innovation
          </h1>
        </div>

        {/* Container */}
        <div
          className="bg-[#141414] border border-gray-800 rounded-2xl p-6 md:p-10 
                        grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Card */}
          <div
            className="bg-[#0d0d0d] border border-gray-700 p-7 rounded-xl
                          hover:border-gray-500 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-5">
              <BarChart3 className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center text-white">
              Strategic Growth Solutions
            </h3>
            <p className="mt-3 leading-relaxed text-center text-gray-400">
              Developing customized strategies to empower businesses to grow,
              streamline operations, and succeed in evolving markets.
            </p>
          </div>

          {/* Card */}
          <div
            className="bg-[#0d0d0d] border border-gray-700 p-7 rounded-xl
                          hover:border-gray-500 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-5">
              <Cpu className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center text-white">
              Cutting-Edge Technology Integration
            </h3>
            <p className="mt-3 leading-relaxed text-center text-gray-400">
              Leveraging advanced tools and innovations to streamline operations
              and deliver unparalleled efficiency.
            </p>
          </div>

          {/* Card */}
          <div
            className="bg-[#0d0d0d] border border-gray-700 p-7 rounded-xl
                          hover:border-gray-500 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-5">
              <Bot className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center text-white">
              Future-Driven Innovation
            </h3>
            <p className="mt-3 leading-relaxed text-center text-gray-400">
              Anticipating tomorrow’s challenges with visionary ideas and
              sustainable solutions that drive long-term progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
