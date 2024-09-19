export const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
export const baseUrl = "https://bayut.p.rapidapi.com/"

if (!baseUrl) {
    throw new Error("Missing baseUrl");
  }
  // if (!PUBLISHABLE_KEY) {
  //   throw new Error("Missing Publishable Key");
  // }
