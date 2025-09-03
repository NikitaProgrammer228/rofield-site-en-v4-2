
import "../styles/globals.css"; 
import type { Metadata } from "next"; 
import NavBar from "@/components/NavBar";

export const metadata: Metadata = { 
  title: "InnoSpector — Industrial Drone Solutions", 
  description: "Professional industrial drone solutions for inspection, monitoring and mapping" 
}; 

export default function RootLayout({ children }:{children:React.ReactNode}){ 
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
