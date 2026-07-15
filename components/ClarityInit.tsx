"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "xmzoqmct76";

export default function ClarityInit() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);

  return null;
}
