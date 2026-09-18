function MovieDetailsModal({ movie, onClose }) {
  if (!movie) return null

  const releaseDate = movie.premiered ? new Date(movie.premiered).getFullYear() : 'N/A'
  const rating = movie.rating?.average ?? 'N/A'
  const summary = movie.summary?.replace(/<[^>]*>/g, '') || 'No overview available.'

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/75 p-4" role="presentation" onClick={onClose}>
      <section className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-white/10 bg-[#1b1b1b]" role="dialog" aria-modal="true" aria-labelledby="movie-details-title" onClick={(event) => event.stopPropagation()}>
        <div className="relative aspect-[16/7] bg-[#252525]">
          {movie.image?.original || movie.image?.medium ? (
            <img className="h-full w-full object-contain" src={movie.image.original ?? movie.image.medium} alt={`${movie.name} poster`} />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-[#b9b4ad]">No poster available</div>
          )}
          <button className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-[#121212] text-lg text-[#f8f4ed]" type="button" aria-label="Close movie details" onClick={onClose}>✕</button>
        </div>
        <div className="space-y-5 p-6 sm:p-8">
          <h2 className="m-0 font-serif text-3xl font-medium" id="movie-details-title">{movie.name}</h2>
          <p className="m-0 text-sm text-[#b9b4ad]">⭐ {rating} <span className="px-2">|</span> 📅 Release: {releaseDate}</p>
          <div>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#d9ff57]">Overview</h3>
            <p className="m-0 leading-7 text-[#d4d0ca]">{summary}</p>
          </div>
          <p className="m-0 text-sm text-[#b9b4ad]">
            Genres: {movie.genres?.join(', ') || 'N/A'} <span className="px-2">|</span> Status: {movie.status || 'N/A'} <span className="px-2">|</span> Runtime: {movie.runtime ? `${movie.runtime} min` : 'N/A'}
          </p>
          <button className="border border-white/20 px-5 py-3 text-xs font-bold transition-colors hover:bg-white hover:text-[#171717]" type="button" onClick={onClose}>Close</button>
        </div>
      </section>
    </div>
  )
}

export default MovieDetailsModal