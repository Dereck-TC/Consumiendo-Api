import React from 'react'; //No es necesario importar
import '../assets/css/Card.css';
// import image from '../assets/img/2396.jpg';

function Card(props){
    const abi = []
    const alias = []
    const validate1 = props.abilities.length > 4?4:props.abilities.length
    const validate2 = props.alias.length > 4?4:props.alias.length
    for(var i=0; i<validate1; i++){
        abi.push(<><b>{i + 1}:</b><span>{props.abilities[i]}</span><br /></>)
    }
    for(var y=0; y<validate2; y++){
        alias.push(<><b>{y + 1}:</b><span>{props.alias[y]}</span><br /></>)
    }
    //Un componente siempre debe devolver una cosa (un elemento de jsx)
    return <> {/*Fragment <React.Fragment></React.Fragment>*/}
     <article className='card'>
        {/* <p>Componente</p> */}
        <div className='card-content'>
            <div className="front">
                <div className="product">
                    <div className="imga">
                        <img className="img-product" src={props.image} alt="product" />
                    </div>
                </div>
                <div className="content">
                    <div className="description">
                        <h3 className="title-product">{props.title}</h3>
                        <p className="content-product">
                            <h3>Specie:<span>{props.specie}</span></h3>
                            <h3>Gender:<span>{props.gender}</span></h3>
                            <h3>Hair:<span>{props.hair}</span></h3>
                        </p>
                    </div>
                    <div className="price">
                        <p className="price-number">{props.origin}
                        <button href="" className="buy">BUY</button></p>
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="">
                    <h1>Other Features</h1>
                    <div className="features">
                        <p><b>Alias:</b><br/>{alias}</p>
                        <p><b>Abilities:</b><br/>{abi}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </article>
    </>
}

export default Card