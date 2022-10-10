import { useState } from 'react';

const Row = ({key, row}) => {
    return (
        <tr key={key}>
            <td>{row.name}</td>
            <td>{row.gender}</td>
            <td>{row.height}</td>
        </tr>
    );
}
 
export default Row;


