import '../static/css/datatables.min.css';
import Details from '../api/Details';
import { useState } from "react";
import loader from '../static/images/loader.gif';

const MovieDetails = ({movie, detail}) => {
    movie = movie[0];
    var array = [];
    const [isLoading, setisLoading] = useState(true);
    const [characterSet, setCharacterSet] = useState(null);

    
    movie.characters.map((character) => {
      async function row(character){
        var row;
        await fetch(character)
        .then(res => res.json())
        .then(data => row = data)
        .then(() => {array.push(row)})
        .then(() => {console.log(row)})
      }
      row(character).then(row => {
        setisLoading(false);
        setCharacterSet(array);
      })
    })
    
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
            {isLoading && <img src={loader} alt='' />}
            <table className="table dataTable table-responsive table-bordered" id="myTable">
              <thead className="thead-dark">
                <tr>
                  <th className="wdt-440">Name</th>
                  <th className="wdt-440">Gender</th>
                  <th className="wdt-440">Height</th>
                </tr>
              </thead>
              <tbody>
                {characterSet && characterSet.map((char, i) =>
                    <tr key={i}>
                        <td>{char.name}</td>
                        <td>{char.gender}</td>
                        <td>{char.height}cm</td>
                    </tr>
                )}
              </tbody>
            </table>
        </div>
    );
}
 
export default MovieDetails;
