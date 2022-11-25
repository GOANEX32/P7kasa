import data from '../data.json'


const post = () => {

    
    console.log(data)
    return(
        <div className='gallery'>
             {
             data.map((data, index) => (
            <div className='post' key={data.id}>
               <img className='post-image' src={data.cover} ></img>
               <div className='post-titre'>{data.title}</div>
             </div>
             ))}
        
        </div>
        

    )
}

export default post ;
