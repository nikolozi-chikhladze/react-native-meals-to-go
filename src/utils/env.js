import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-44ddf.cloudfunctions.net";
const localHost =
  "http://73d3-176-221-217-67.ngrok.io/mealstogo-44ddf/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const isMock = true;
