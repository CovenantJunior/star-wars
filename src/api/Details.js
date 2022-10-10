const Details = (character) => {
    return (
        fetch(character)
        .then(res => {
            if (!res.ok) {
                throw Error('Failed to fetch data...')
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
    );
}
 
export default Details;
