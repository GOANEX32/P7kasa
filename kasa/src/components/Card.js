import data from '../data.json'
import { Link } from "react-router-dom";


const post = () => {
 console.log(data)
    return(
        <div className='gallery'>
             {
             data.map((data) => (
            <Link to={`/logement/${data.id}`} className="linkCard" key={data.id}>    
            <div className='post' >
               <img className='post-image' src={data.cover} alt="logement" ></img>
               <div className='post-titre'>{data.title}</div>
             </div>
             </Link>
             ))}
        
        </div>
        

    )
}

export default post ;
