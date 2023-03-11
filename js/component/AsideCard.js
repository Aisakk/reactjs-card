function AsideCard({title, description, url}){
    let styleImg = {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        height: '500px',
        padding: '25px',
        display:'flex',
        flexDirection:'column',
        color: '#fff',
        borderRadius: '16px',
        justifyContent: 'space-between',
        
    };
    return(
        <div className="aside-card" style={styleImg}>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    )
}

