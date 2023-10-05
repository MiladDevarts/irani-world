export default function Loading() {
  return (
    <section className="absolute top-0 left-0 z-[10000] flex items-center justify-center  w-full h-screen bg-white/90 backdrop-blur-2xl">
      <video autoPlay muted loop className="w-56">
        <source src="/videos/loading.mov" />
      </video>
    </section>
  );
}
