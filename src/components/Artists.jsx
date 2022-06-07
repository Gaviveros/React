import kandinsky from '..img/kandinsky.jpg'
import kline from '..img/kline.jpg'

function Artists(props) {

  let obras = [{
    id: 1,
    title: 'Pintura azul',
    img:{kandinsky},
    artist: ' Wassily Kandinsky',
    description: 'Obra vanguardista del siglo XX',
    price: 15000
  },
  {
    id: 2,
    title: 'Sin titulo',
    img:{kline},
    artist: 'Franz Kline',
    description: 'Obra vanguardista del siglo XX',
    price: 13000
  }
]

    return (

      obras.array.forEach(element => {
        <>
        <img src={kandinsky} alt="obra" />
        <h5 className="card-title">"Kandinsky"</h5>
        <p className="card-text">{props.title}</p>
        <p className="card-text">{props.price}</p>
        </>
      })

    )
  }
  
  export default Artists