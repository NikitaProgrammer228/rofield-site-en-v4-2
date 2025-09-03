
export default function FeatureCards(){
  const items=[{t:"SLAM — GPS-free flight",d:"Real‑time 3D mapping with LiDAR+IMU. 360° obstacle avoidance."},
    {t:"Gas analysis with auto‑shutdown",d:"Operate safely in live gas environments; automatic stop at high concentration."},
    {t:"Thermal + 4K from day one",d:"Industrial thermal camera and stabilized 4K camera included."},
    {t:"Smart return‑to‑home",d:"Automatic return to mission start point on link loss."},
    {t:"Rugged, dust & moisture resistant",d:"Collision‑resilient protective frame for confined spaces."},
    {t:"Own electronics & software",d:"Integration into existing workflows, open architecture for add‑ons."}];
  return (<section id="features" className="container py-20">
    <h2 className="text-3xl sm:text-4xl font-semibold">Key capabilities</h2>
    <p className="opacity-80 mt-2 max-w-2xl">Everything required for professional inspections is included out‑of‑the‑box.</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">{items.map((it,i)=>(<div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-lg font-semibold">{it.t}</div><div className="opacity-80 mt-2">{it.d}</div></div>))}</div>
  </section>);
}
