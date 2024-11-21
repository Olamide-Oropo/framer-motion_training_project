import React from "react";
import { motion as M } from "framer-motion";

export default function Home() {
  return (
    <>
      <M.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        This is the home page
      </M.h1>
    </>
  );
}