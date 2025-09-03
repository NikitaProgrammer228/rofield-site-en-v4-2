"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar(){
  const pathname = usePathname();
  const isInnoVTOL3Page = pathname === "/innovtol-3";
  
  return (<div className="fixed top-0 inset-x-0 z-40">
    <nav className="container flex items-center justify-between py-4 backdrop-blur bg-black/30 rounded-b-2xl">
      <div className="flex items-center gap-2 font-semibold">
        <span className="inline-block size-5 rounded-full bg-white/90" /> 
        <Link href="/" className="hover:opacity-80 transition-opacity">
          {isInnoVTOL3Page ? "InnoVTOL-3" : "InnoSpector"}
        </Link>
      </div>
      
      {!isInnoVTOL3Page && (
        <div className="hidden sm:flex gap-6 text-sm">
          <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
          <a href="#specs" className="opacity-80 hover:opacity-100">Specs</a>
          <a href="#compare" className="opacity-80 hover:opacity-100">Comparison</a>
          <a href="#videos" className="opacity-80 hover:opacity-100">Videos</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </div>
      )}
      
      <div className="flex items-center gap-3">
        {!isInnoVTOL3Page && (
          <Link href="/innovtol-3" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-sm">
            InnoVTOL-3
          </Link>
        )}
        {isInnoVTOL3Page && (
          <Link href="/" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-sm">
            Back to InnoSpector
          </Link>
        )}
        <a href="#contact" className="px-3 py-1.5 rounded-full bg-brand hover:brightness-110 text-sm">CONTACT US</a>
      </div>
    </nav></div>);
}
