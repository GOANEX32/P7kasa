import data from '../data.json'
import { Link } from "react-router-dom";


const post = () => {

    
    console.log(data)
    return(
        <div className='gallery'>
             {
             data.map((data, index) => (
            <Link to={`/logement/${data.id}`}>    
            <div className='post' key={data.id}>
               <img className='post-image' src={data.cover} ></img>
               <div className='post-titre'>{data.title}</div>
             </div>
             </Link>
             ))}
        
        </div>
        

    )
}

export default post ;
