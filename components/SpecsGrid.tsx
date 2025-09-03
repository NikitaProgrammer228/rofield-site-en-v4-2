
export default function SpecsGrid(){
  const specs=[{k:"Flight time",v:"up to 23 minutes"},{k:"Mission range",v:"up to 2.5 km"},
    {k:"Operating temperature",v:"-20…+55 °C"},{k:"Navigation",v:"SLAM (LiDAR+IMU), 360° obstacle avoidance"},
    {k:"LiDAR",v:"Livox Mid‑360, up to 70 m, up to 200 kpts/s"},{k:"Comms link",v:"up to 1 km (environment‑dependent)"},
    {k:"Dimensions (L×W×H)",v:"480 × 580 × 177 mm"},{k:"Weight (with LiDAR)",v:"up to 3 kg"}];
  return (<section id="specs" className="container py-20"><h2 className="text-3xl sm:text-4xl font-semibold">Technical specifications</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">{specs.map((s,i)=>(<div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm opacity-70">{s.k}</div><div className="text-lg font-semibold mt-1">{s.v}</div></div>))}</div>
  </section>);
}
