import React from "react";
import { Link } from "react-router-dom";
import InquiryForm from "@/components/InquiryForm/InquiryForm";
import Hero from "@/components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import CTASection from "../../components/CTASection/CTASection";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import BusinessSolutions from "../../components/BusinessSolutions/BusinessSolutions";
import BusinessDevelopment from "../../components/BusinessDevelopment/BusinessDevelopment";
import VisionMission from "../../components/VisionMission/VisionMission";
import ITSolutions from "../ITSolutions/ITSolutions";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <div className="w-full p-0 m-0">
        <Hero />
      </div>

      {/* Business Development Section */}
      <div className="w-full p-0 m-0">
        <BusinessDevelopment />
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full p-0 m-0">
        <VisionMission />
      </div>

      {/* IT Solutions Section */}
      <div className="w-full p-0 m-0">
        <ITSolutions />
      </div>

      {/* Why choose us Section */}
      <div className="w-full p-0 m-0">
        <WhyChooseUs />
      </div>

      {/* Business Solutions Section */}
      <div className="w-full p-0 m-0">
        <BusinessSolutions />
      </div>

      {/* How We Work Section */}
      <div className="w-full p-0 m-0">
        <HowWeWork />
      </div>

      {/* CTA Section */}
      <div className="w-full p-0 m-0">
        <CTASection />
      </div>

      {/* Blog */}
      <div className="w-full p-0 m-0">
        <Blog />
      </div>

      {/* TESTIMONIALS */}
      <div className="w-full p-0 m-0">
        <Testimonials />
      </div>

      {/* INQUIRY FORM POPUP */}
      <div className="w-full p-0 m-0">
        <InquiryForm />
      </div>
    </div>
  );
}
