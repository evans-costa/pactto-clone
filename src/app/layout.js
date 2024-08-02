import localFont from "next/font/local";
import "./styles/globals.css";

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
});

const museoSlab = localFont({
  src: "../../public/fonts/Museo_Slab_900.otf",
  weight: "900",
  variable: "--font-museoslab-bold",
});

export const metadata = {
  title: "Pactto",
  description: "Get your video reviewed with Pactto Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${museoSlab.variable}`}>{children}</body>
    </html>
  );
}
