import '../static/css/datatables.min.css';

const MovieDetails = ({movie, detail}) => {
    movie = movie[0];
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
                
              </tbody>
            </table>
        </div>
    );
}
 
export default MovieDetails;