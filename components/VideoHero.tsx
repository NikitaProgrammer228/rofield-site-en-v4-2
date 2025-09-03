
export default function VideoHero(){
  return (
    <header className="relative h-[88svh] overflow-hidden">
      <img
        src="/images/hero-dron-dungeon.png"
        alt="InnoSpector drone in industrial environment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/70" />
      <div className="relative container h-full flex flex-col items-start justify-end pb-16">
        <span className="tracking-[.2em] text-xs opacity-80">INNOSPECTOR</span>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Unmanned system for industrial inspection & monitoring
        </h1>
        <p className="mt-3 max-w-2xl opacity-90">
          A protected industrial drone for autonomous inspection, scanning and monitoring of complex facilities, tanks and hard‑to‑reach locations with limited space.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#compare" className="px-5 py-3 rounded-full bg-brand hover:brightness-110">Compare with Elios 3</a>
          <a href="#specs" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15">See full specs</a>
        </div>
      </div>
    </header>
  );
}
