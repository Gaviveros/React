import kandinsky from '../../img/kandinsky.png'
import './Cards.css'


function Cards() {
    return (
      <>
        <div className="card size text-white">
          <img className="card-img-top img" src={kandinsky} alt="Card image" />
            <div className="card-img-overlay">
              <h1 className="card-title">Kandinsky</h1>
              <p className="card-text">Pintura azul</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
      </>
    )
  }
  
  export default Cards