
"use client";
import { useEffect, useRef } from "react";

function useAutoPlay(ref: React.RefObject<HTMLVideoElement>){
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver(([e])=>{
      if(!el) return;
      if(e.isIntersecting){ el.play().catch(()=>{}); }
      else{ el.pause(); }
    }, { threshold: .5 });
    io.observe(el);
    return ()=>io.disconnect();
  },[ref]);
}

export default function VideoReels(){
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  useAutoPlay(v1); useAutoPlay(v2);

  return (
    <section className="container py-20" id="videos">
      <h2 className="text-3xl sm:text-4xl font-semibold">Field videos</h2>
      <p className="opacity-80 mt-2">Short clips that show the system in action. Tap to unmute, full controls available.</p>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <video ref={v1} className="w-full h-80 object-cover" controls muted playsInline preload="metadata" poster="/images/hero-drone.jpg">
            <source src="/media/clip-4718.mp4" type="video/mp4" />
          </video>
          <div className="px-3 py-2 text-sm opacity-80">Clip #4718</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <video ref={v2} className="w-full h-80 object-cover" controls muted playsInline preload="metadata" poster="/images/lidar-1.jpg">
            <source src="/media/clip-4703.mp4" type="video/mp4" />
          </video>
          <div className="px-3 py-2 text-sm opacity-80">Clip #4703</div>
        </div>
      </div>
    </section>
  );
}
