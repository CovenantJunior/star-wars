import '../static/css/datatables.min.css';
import '../static/js/jquery.min.js'
import Row from './Row';

const MovieDetails = ({movie, detail}) => {
    movie = movie[0];
    console.log(movie);
    return (
        <div>
            <marquee behavior="scroll" direction="left">{movie.opening_crawl}</marquee>
            <br />
            <br />
            <button className='select'>All</button>
            <button className='select'>Male</button>
            <button className='select'>Female</button>
            <br />
            <br />
            <table className="table dataTable table-responsive table-bordered" id="myTable">
              <thead className="thead-dark">
                <tr>
                  <th className="wdt-440">Name</th>
                  <th className="wdt-440">Gender</th>
                  <th className="wdt-440">Height</th>
                </tr>
              </thead>
              <tbody>
                {movie.characters.map((character) => (
                  fetch(character)
                  .then(res => {
                      if (!res.ok) {
                          throw Error('Failed to fetch data...')
                      }
                      return res.json();
                  })
                  .then(data => {
                      character = data;
                  }),
                  <Row data={character} />
                ))}
              </tbody>
            </table>
        </div>
    );
}
 
export default MovieDetails;