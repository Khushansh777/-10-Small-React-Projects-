import React, { useState } from "react";

const testimonialsData = [
  {
    name: "Alice Johnson",
    text: "This product changed my life! Highly recommended to everyone.",
    location: "New York, USA",
  },
  {
    name: "Mohammed Ali",
    text: "Excellent service and fantastic results. Will use again.",
    location: "London, UK",
  },
  {
    name: "Priya Singh",
    text: "A seamless experience from start to finish. Five stars!",
    location: "Mumbai, India",
  },
];

const Testinomials = () => {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setIndex((prev) => (prev >= 0 && prev < 2 ? prev + 1 : prev));
  };
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Testimonials    
      </h2>
      <button onClick={handlePrev}>Previous</button>{" "}
      <button onClick={handleNext}>Next</button>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 8,
          padding: "1rem",
          marginBottom: "1.5rem",
          background: "#fafafa",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <p style={{ fontStyle: "italic", marginBottom: 8 }}>
          "{testimonialsData[index].text}"
        </p>
        <div style={{ fontWeight: "bold" }}>{testimonialsData[index].name}</div>
        <div style={{ color: "#888", fontSize: 14 }}>
          {testimonialsData[index].location}
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
