import './Container.css'

function Container(props) {

    return (
        <>
            <h1>Bienvenido a AbstrArt</h1>
            <h3>Market of abstract arts</h3>
            {props.children}
        </>
    )
  }
  
  export default Container