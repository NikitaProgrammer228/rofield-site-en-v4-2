
"use client";
import { useState, useEffect } from "react";
type Item={src:string;label?:string;ratio?:"video"|"square"|"portrait"};

export default function Gallery({items}:{items:Item[]}){
  const [open,setOpen]=useState(false);
  const [idx,setIdx]=useState(0);
  const ratio=(r:Item["ratio"])=> r==="portrait"?"aspect-[3/4]": r==="square"?"aspect-square":"aspect-video";
  const show=(i:number)=>{ setIdx(i); setOpen(true); };
  const prev=()=> setIdx(i=> (i-1+items.length)%items.length);
  const next=()=> setIdx(i=> (i+1)%items.length);

  useEffect(()=>{
    if(!open) return;
    const onKey=(e:KeyboardEvent)=>{ if(e.key==="Escape") setOpen(false); if(e.key==="ArrowRight") next(); if(e.key==="ArrowLeft") prev(); };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return ()=>{ window.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; };
  },[open]);

  return (<section id="gallery" className="container py-24">
    <h2 className="text-3xl sm:text-4xl font-semibold">Media</h2>
    <p className="opacity-80 mt-2">Click any image to view it large.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it,i)=>(<figure key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-zoom-in select-none" onClick={()=>show(i)}>
        <div className={`relative ${ratio(it.ratio)}`}>
          <img src={it.src} alt={it.label||''} draggable={false} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>
        </div>
        {it.label && <figcaption className="px-3 py-2 text-sm opacity-80">{it.label}</figcaption>}
      </figure>))}
    </div>

    {open && (<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center overscroll-contain overflow-auto">
      <button aria-label="Close" className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20" onClick={()=>setOpen(false)}>Close</button>
      <button aria-label="Prev" className="absolute left-4 md:left-8 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20" onClick={prev}>‹</button>
      <button aria-label="Next" className="absolute right-4 md:right-8 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20" onClick={next}>›</button>
      <div className="max-w-[92vw] max-h-[90vh] p-2 md:p-4">
        <img src={items[idx].src} alt={items[idx].label||''} draggable={false} className="max-w-[92vw] max-h-[90vh] w-auto h-auto object-contain select-none"/>
        {items[idx].label && <div className="text-center mt-2 opacity-80 text-sm">{items[idx].label}</div>}
      </div>
    </div>)}
  </section>);
}
