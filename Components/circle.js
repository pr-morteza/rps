
import Button from 'react-bootstrap/Button';
import Image from "next/image";

function Circle({icon, org, styles, onClick, color}) { 
     
    return(
        <Button variant="light" onClick={onClick} className={`border-${color} rounded-circle ${org ? 'col-md-8 col-8':'col-6'}`} style={{aspectRatio : '1 / 1', transform:'translate(-50%, -50%)', border:'1rem solid red', position:'absolute',...styles}} >
            <Image width={org?50:40} src={icon} alt=''/>  
        </Button>
    )
}

export default Circle;

            