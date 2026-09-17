function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#121212] text-[#f8f4ed]">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-[6vw] py-6 sm:py-7">
        <a className="flex items-center gap-2.5 text-[1.05rem] font-bold tracking-[-0.03em]" href="#top" aria-label="MovieExplorer home">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#d9ff57] pl-0.5 text-[0.55rem] text-[#161616]" aria-hidden="true">▶</span>
          <span>MovieExplorer</span>
        </a>

        <nav className="flex items-center gap-3 text-xs sm:gap-8" aria-label="Main navigation">
          <a className="rounded-full border border-white/20 px-3 py-2.5 transition-colors hover:bg-[#d9ff57] hover:text-[#161616] sm:px-[17px]" href="#movies">Browse movies <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="relative flex min-h-[650px] items-end bg-[linear-gradient(90deg,rgba(10,10,10,0.94)_0%,rgba(10,10,10,0.63)_42%,rgba(10,10,10,0.1)_100%),url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center px-[8vw] pb-[75px] pt-[150px] before:absolute before:inset-0 before:bg-[linear-gradient(0deg,#121212,transparent_30%)] before:content-[''] sm:min-h-[720px] sm:px-[12vw] sm:pb-[86px] sm:pt-[170px]" aria-labelledby="hero-title">
          <div className="relative z-[1] max-w-[610px]">
            <p className="mb-5 flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#d9ff57]"><span className="size-[7px] bg-[#d9ff57]" /> Your next favorite is waiting</p>
            <h1 className="m-0 font-serif text-[clamp(4.2rem,8vw,7.8rem)] font-medium leading-[0.91] tracking-[-0.055em]" id="hero-title">Find a story<br /><em className="text-[#d9ff57]">worth watching.</em></h1>
            <p className="my-[30px] mb-[34px] max-w-[390px] text-base leading-[1.6] text-[#b9b4ad]">
              Explore handpicked worlds, unforgettable performances, and the films everyone will be talking about.
            </p>
            <a className="inline-flex items-center gap-[30px] bg-[#d9ff57] px-[21px] py-[15px] text-xs font-bold text-[#171717] transition-transform hover:-translate-y-0.5 hover:bg-[#efffa4]" href="#movies">Explore movies <span className="text-lg leading-[0.7]" aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer className="mx-[8vw] flex flex-col items-start gap-[17px] border-t border-white/20 py-[25px] sm:mx-[6vw] sm:flex-row sm:items-center sm:justify-between">
        <a className="flex items-center gap-2.5 text-[1.05rem] font-bold tracking-[-0.03em]" href="#top">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#d9ff57] pl-0.5 text-[0.55rem] text-[#161616]" aria-hidden="true">▶</span>
          <span>MovieExplorer</span>
        </a>
        <p className="m-0 text-[0.7rem] text-[#b9b4ad]">© 2026 MovieExplorer. Made for movie people.</p>
        <a className="text-[0.7rem] text-[#d9ff57]" href="https://github.com" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  )
}

export default App
