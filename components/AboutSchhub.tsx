"use client";
// pages/about.js
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../app/About.module.css"; // Import CSS for styling
import AuthButton from "./AuthButton";

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);

  // Use useEffect to trigger animation on mount
  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="bg-inherit text-inherit">
      <div>
        <h1>Welcome to Schoolhub Social Network</h1>
        <p>
          Our social network is a vibrant online community designed to connect
          students, lecturers, and aspirant in an innovative and engaging way.
          Through our platform, members can interact, collaborate, and stay
          updated on school events and activities.
        </p>
        <p>
          At schoolhub, we believe in fostering a sense of belonging and
          community both inside and outside the classroom. Our social network
          provides a space for students to share ideas, seek support, and build
          meaningful relationships with their peers and mentors.
        </p>
        <p>
          Whether you're a student looking to connect with classmates, a
          lecturer seeking to enhance collaboration, or an aspirant wanting to
          stay informed, schoolhub social network offers something for everyone.
        </p>
        <p>
          Join us today and experience the power of connectivity in education!
        </p>
      </div>
    </div>
  );
}
