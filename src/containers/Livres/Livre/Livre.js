import React from "react";
import Button from '../../../components/Buttons/Button';

const livre = (props) => (
<>
    <td>{props.titre}</td>
    <td>{props.auteur}</td>
    <td>{props.nombreDePage}</td>
    <td><Button typeBtn="btn-warning" clic={()=> console.log("Modif")}>Modification</Button></td>
    <td><Button typeBtn="btn-danger" clic={props.suppression}>Suppression</Button></td>
</>
       
);

export default livre;