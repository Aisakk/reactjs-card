
function Card({title, description, url}){
    let styleImg = {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        minHeight: '200px',
        position: 'relative',
        padding: '20px',
        display:'flex',
        flexDirection:'column',
        color: '#fff',
        borderRadius: '16px',
        justifyContent: 'space-between',
        
    };
    return(
        <div className="card" style={styleImg}>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    )
}

