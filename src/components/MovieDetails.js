import '../static/css/datatables.min.css';

const MovieDetails = ({movie, detail}) => {
    movie = movie[0];
    return (
        <div>
            <marquee behavior="scroll" direction="left">{movie.opening_crawl}</marquee>
            <br />
            <br />
            <button>All</button>
            <button>Male</button>
            <button>Female</button>
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