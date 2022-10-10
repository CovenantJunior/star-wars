const MovieList = ({movies, Change}) => {
    return (
        <select  id="film" name="film" onChange={Change} className="animate-box pulse animated-fast" style={{animationIterationCount: "infinite"}}>
            <option>Tap Here</option>
            {movies.map((movie) => (
                <option key={movie.episode_id} value={movie.episode_id} id={movie.episode_id}>{movie.title}</option>
            )).reverse()}
        </select>
    );
}
 
export default MovieList;