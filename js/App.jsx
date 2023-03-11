



function App(){
    let [card, setCard] = React.useState(null)
    function handleClick(){
        return setCard(listCard)
    }
    return (
        <div className="container">
            <div className="title-page">
                <h4 className="title">Get Items</h4><button className="button" onClick={handleClick}>Get Me</button>
            </div>
            <div className="container-card-aside">
                <div className="container-card">
                    {card == null ? <p className="title">Dont have items to show</p>: card.map((item,index)=> <Card key={index} title={item.title} description={item.description} url={item.url}/>)}
                </div>
                { card == null ? '' : <AsideCard title="Aside" description=" Lorem ipsum dolor sit amet consectetur." url="https://www.shyamparivar.com/uploads/gallery/Hd-Wallpapers-For-PC.jpg"/>}
            </div>
            
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

