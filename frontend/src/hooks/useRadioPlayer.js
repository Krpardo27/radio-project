import { useContext } from "react";
import { RadioPlayerContext } from "../context/RadioPlayerContext";

export const useRadioPlayer = () => {
  const ctx = useContext(RadioPlayerContext);
  if (!ctx) throw new Error("useRadioPlayer must be inside provider");
  return ctx;
};
