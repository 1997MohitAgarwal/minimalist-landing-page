"use client";
import React,{ useState } from "react";
import Image from "next/image";
import { Zap, DollarSign, Shield, ArrowRight, Menu } from "lucide-react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Roadmap", "Pricing", "Blog", "Contact"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#101E30] via-[#0E0C26] to-[#171216] text-white relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-220px] right-[300px] w-96 h-80 bg-gradient-to-r from-[#310F46] via-[#471A47] to-[#4A2B26] blur-[20px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] left-[10%] w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm rotate-[15deg] pointer-events-none" />
        <div className="absolute top-[50%] left-[13%] w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm rotate-[30deg] pointer-events-none" />
        <div className="absolute top-[30%] right-[15%] w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-sm rotate-[45deg] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[8%] w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm rotate-[60deg] pointer-events-none" />
        <div className="absolute bottom-[-250px] left-[120px] w-96 h-80 bg-gradient-to-r from-[#310F46] via-[#471A47] to-[#4A2B26] blur-[20px] rotate-[10deg] rounded-full pointer-events-none" />

      </div>

      {/* Navigation */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Image
                src="/assets/images/logo.png?height=40&width=100"
                alt="Social Linker Logo"
                width={100}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
              <ul className="hidden md:flex items-center ml-12 space-x-1">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`text-sm text-gray-300 hover:text-white transition-colors px-4 py-2 ${
                      index !== 0 ? "border-l border-gray-500/30" : ""
                    }`}
                  >
                    <button className="focus:outline-none">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                Let&apos;s work together
              </button>
              <button className="border border-gray-500/50 px-5 py-2 rounded-xl text-sm hover:bg-white/5 transition-colors">
                Sign in
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute inset-x-0 top-full bg-[#101E30]/95 backdrop-blur-sm border-t border-gray-500/20">
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 text-sm"
                  >
                    {item}
                  </button>
                ))}
                <div className="border-t border-gray-500/20 pt-4 space-y-4">
                  <button className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 text-sm">
                    Let&apos;s work together
                  </button>
                  <button className="block w-full text-left text-white hover:bg-white/5 px-4 py-2 text-sm rounded-xl border border-gray-500/50">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl mx-auto font-bold leading-tight mb-10 sm:mb-8">
            Transform Your Business With Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3C72] via-[#9B0F89] to-[#D2691E]">
              UI/UX
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3C72] via-[#9B0F89] to-[#D2691E]">
              Website Designs.
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-4xl mx-auto px-4">
            Enhance user experience, optimize interfaces, and create stunning
            visuals with our professional UI/UX design, graphic design, and web
            development solutions. Whether you&apos;re looking for a responsive
            website, a modern app interface, or a custom design, we&apos;ve got
            you covered.
          </p>

          <div className="mt-8">
            <button className="relative flex items-center justify-between w-[300px] h-[50px] mx-auto rounded-md border border-[#50BFFF] overflow-hidden bg-[#101E30] transition-all duration-300 hover:border-[#1E3C72]">
              <span className="absolute inset-0 w-[130px] h-full bg-gradient-to-r from-[#1E3C72] via-[#9B0F89] to-[#D2691E] rounded-md transition-transform duration-300 transform translate-x-0"></span>
              <span className="relative z-10 text-white text-sm pl-4">
                Get started
              </span>
              <span className="relative flex items-center z-10 text-white text-sm pr-4">
                <p>Request demo</p>
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-10 md:mt-16 max-w-4xl mx-auto px-4 mb-10">
            {[
              { icon: Zap, text: "4-6 week delivery" },
              { icon: DollarSign, text: "Transparent price" },
              { icon: Shield, text: "Money back guarantee" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/[0.03] rounded-2xl p-2 backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.05] transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <feature.icon className="h-5 w-5 text-[#FF9900]" />
                </div>
                <p className="text-white text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
