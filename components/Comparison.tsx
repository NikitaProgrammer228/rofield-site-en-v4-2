
export default function Comparison(){
  const rows=[
    {k:"Flight time", a:"Up to 23 minutes", b:"9.1 minutes (with LiDAR)", adv:"InnoSpector"},
    {k:"Price", a:"~ $50,000", b:"~ $100,000", adv:"InnoSpector"},
    {k:"LiDAR range", a:"Up to 70 m", b:"Up to 45 m", adv:"InnoSpector"},
    {k:"Operating temperature", a:"-20…+55 °C", b:"0…+50 °C", adv:"InnoSpector"},
    {k:"Weight (with LiDAR)", a:"Up to 3 kg", b:"2.41 kg", adv:"Comparable"},
    {k:"Communication range", a:"Up to 1 km", b:"~500 m", adv:"InnoSpector"},
    {k:"LiDAR point density", a:"Up to 200 kpts/s", b:"1.3M pts/s", adv:"Different metrics"},
    {k:"Gas detection", a:"Optional with auto‑shutdown", b:"Optional (flammable gases)", adv:"Comparable"},
    {k:"Thermal camera", a:"Included", b:"Optional (160×120)", adv:"InnoSpector"},
    {k:"Base package", a:"LiDAR + Thermal + 4K", b:"4K camera only", adv:"InnoSpector"}
  ];
  return (<section id="compare" className="container py-24">
    <h2 className="text-3xl sm:text-4xl font-semibold">InnoSpector vs Elios 3</h2>
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-[880px] w-full text-sm rounded-2xl overflow-hidden border border-white/10">
        <thead className="bg-white/5"><tr>
          <th className="text-left p-3">Feature</th>
          <th className="text-left p-3">InnoSpector</th>
          <th className="text-left p-3">Flyability Elios 3</th>
          <th className="text-left p-3">Advantage</th></tr></thead>
        <tbody>{rows.map((r,i)=>(<tr key={i} className="odd:bg-white/[.03]">
          <td className="p-3">{r.k}</td><td className="p-3 font-medium">{r.a}</td><td className="p-3">{r.b}</td>
          <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs ${r.adv==='InnoSpector'?'bg-emerald-600/40 border border-emerald-400/40':r.adv==='Comparable'?'bg-white/10 border border-white/20':'bg-white/10 border border-white/20'}`}>{r.adv}</span></td>
        </tr>))}</tbody></table>
    </div>
  </section>);
}
