
"use client";
import { useRef, useEffect } from "react";

export default function HUDStrip({ images }:{images:{src:string;alt?:string}[]}){
  const scroller = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{ 
    const el=scroller.current; 
    if(!el) return;
    
    let down=false, startX=0, scroll=0;
    const onDown=(e:MouseEvent)=>{down=true; startX=e.pageX-el.offsetLeft; scroll=el.scrollLeft; el.classList.add('cursor-grabbing')};
    const onUp=()=>{down=false; el.classList.remove('cursor-grabbing')};
    const onMove=(e:MouseEvent)=>{ if(!down) return; e.preventDefault(); const x=e.pageX-el.offsetLeft; const walk=(x-startX); el.scrollLeft=scroll-walk };
    const onWheel=(e:WheelEvent)=>{ if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){ e.preventDefault(); el.scrollLeft += e.deltaY; } };
    
    el.addEventListener('mousedown',onDown); 
    el.addEventListener('mouseleave',onUp); 
    el.addEventListener('mouseup',onUp); 
    el.addEventListener('mousemove',onMove);
    el.addEventListener('wheel', onWheel, { passive:false });
    
    return ()=>{ 
      el.removeEventListener('mousedown',onDown); 
      el.removeEventListener('mouseleave',onUp); 
      el.removeEventListener('mouseup',onUp); 
      el.removeEventListener('mousemove',onMove); 
      el.removeEventListener('wheel', onWheel as any); 
    };
  },[]);
  
  const scrollBy = (dir:number)=>{ 
    const el=scroller.current; 
    if(!el) return; 
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior:'smooth' }); 
  };
  
  return (
    <section className="py-16 bg-white/5">
      <div className="container">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl sm:text-3xl font-semibold">HUD / telemetry</h3>
          <span className="text-sm opacity-70">Use mouse wheel or arrows</span>
        </div>
        <div className="relative mt-6 -mx-4 sm:mx-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[rgba(12,12,12,1)] to-transparent rounded-r-xl"/>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[rgba(12,12,12,1)] to-transparent rounded-l-xl"/>
          <button aria-label="Prev" onClick={()=>scrollBy(-1)} className="hidden md:flex absolute z-10 left-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">‹</button>
          <button aria-label="Next" onClick={()=>scrollBy(1)} className="hidden md:flex absolute z-10 right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">›</button>
          <div ref={scroller} className="overflow-x-auto no-scrollbar px-4 sm:px-0 touch-pan-x cursor-grab select-none">
            <div className="flex gap-4 snap-x snap-mandatory">
              {images.map((img,i)=>(
                <div key={i} className="snap-center shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-soft min-w-[min(300px,85vw)] sm:min-w-[min(860px,90vw)]">
                  <div className="relative aspect-video">
                    <img 
                      src={img.src} 
                      alt={img.alt||''} 
                      draggable={false} 
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
