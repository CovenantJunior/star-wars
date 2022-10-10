import '../static/css/datatables.min.css';
import Row from './Row';
import Details from '../api/Details';

const MovieDetails = ({movie, detail}) => {
    movie = movie[0];
    //console.log(movie);
    var data;
    async function row(character){
      var row;
      const res = await fetch(character)
                  .then(res => res.json())
                  .then(data => row = data)
                  .then(() => console.log(row))
    }
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
                  data = row(character),console.log(data),
                  <Row key={data.episode_id} row={data} />
                ))}
              </tbody>
            </table>
        </div>
    );
}
 
export default MovieDetails;