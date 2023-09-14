import localFont from "next/font/local";
import {
  Homemade_Apple, Fira_Code, Playfair_Display, Source_Sans_3
} from "next/font/google";

export const northwell = localFont({
  src: "./Northwell.otf",
  variable: "--font-handwriting-1",
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const homemadeApple = Homemade_Apple({
  weight: "400",
  variable: "--font-handwriting-2",
  subsets: ["latin"],
});


export const firaCode = Fira_Code({
  variable: "--font-monospace",
  subsets: ["latin"],
});
