import React from "react";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  // width :
  // 320px : extrasmall
  // 480px : small
  //760px : mediam
  //900px : large
  //1024 : Extra Large

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
