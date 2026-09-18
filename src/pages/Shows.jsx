import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard.jsx'
import MovieDetailsModal from '../components/MovieDetailsModal.jsx'

const showsUrl = 'https://api.tvmaze.com/shows'

function Shows() {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const endpoint = searchQuery.trim()
      ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery.trim())}`
      : showsUrl

    async function loadShows() {
      try {
        const response = await fetch(endpoint)
        if (!response.ok) throw new Error('Unable to load movies.')
        const data = await response.json()
        setMovies(data)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') setError(requestError.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadShows()
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-[#121212] text-[#f8f4ed]">
      <header className="flex items-center justify-between px-[6vw] py-6 sm:py-7">
        <a className="flex items-center gap-2.5 text-[1.05rem] font-bold tracking-[-0.03em]" href="/" aria-label="MovieExplorer home">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#d9ff57] pl-0.5 text-[0.55rem] text-[#161616]" aria-hidden="true">▶</span>
          <span>MovieExplorer</span>
        </a>
        <a className="rounded-full border border-white/20 px-3 py-2.5 text-xs transition-colors hover:bg-[#d9ff57] hover:text-[#161616] sm:px-[17px]" href="/">Home</a>
      </header>

      <main className="mx-auto max-w-[1400px] px-[8vw] py-12 sm:py-20">
        <h1 className="mb-7 font-serif text-4xl font-medium sm:text-5xl">All movies</h1>
        <label className="mb-10 block">
          <span className="sr-only">Search for a movie</span>
          <input className="w-full border border-white/20 bg-[#1b1b1b] px-5 py-4 text-base text-[#f8f4ed] outline-none placeholder:text-[#8c8882] focus:border-[#d9ff57]" type="search" placeholder="Search for a movie..." value={searchQuery} onChange={(event) => { setIsLoading(true); setError(''); setSearchQuery(event.target.value) }} />
        </label>
        {isLoading && <p className="text-[#b9b4ad]">Loading movies...</p>}
        {error && <p className="text-[#ff8c8c]">{error}</p>}
        {!isLoading && !error && movies.length === 0 && <p className="text-[#b9b4ad]">No movies found.</p>}
        {!isLoading && !error && movies.length > 0 && <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{movies.map((movie) => <MovieCard key={movie.show?.id ?? movie.id} movie={movie} onDetails={setSelectedMovie} />)}</div>}
      </main>
      <MovieDetailsModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  )
}

export default Shows
