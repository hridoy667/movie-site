function MovieCard({ movie, onDetails }) {
  const show = movie.show ?? movie
  const releaseDate = show.premiered ? new Date(show.premiered).getFullYear() : 'N/A'
  const rating = show.rating?.average ?? 'N/A'

  return (
    <article className="overflow-hidden border border-white/10 bg-[#1b1b1b]">
      <div className="aspect-[2/3] bg-[#252525]">
        {show.image?.medium ? (
          <img className="h-full w-full object-cover" src={show.image.medium} alt={`${show.name} poster`} />
        ) : (
          <div className="flex h-full items-center justify-center px-5 text-center text-sm text-[#b9b4ad]">No poster available</div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <h2 className="m-0 truncate text-lg font-bold">{show.name}</h2>
        <p className="m-0 text-sm text-[#b9b4ad]">⭐ {rating} <span className="px-2">•</span> 📅 {releaseDate}</p>
        <button className="w-full border border-[#d9ff57] px-4 py-3 text-xs font-bold text-[#d9ff57] transition-colors hover:bg-[#d9ff57] hover:text-[#171717]" type="button" onClick={() => onDetails(show)}>
          See Details
        </button>
      </div>
    </article>
  )
}

export default MovieCard
