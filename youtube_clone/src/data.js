export const API_KEY = "AIzaSyCJPc2qXcpMC1qKNtENX9YL_k7rjZNMWF4";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
