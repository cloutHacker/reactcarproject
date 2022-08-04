import { useState } from "react"
import Footer from "./Footer";
import Nav from "./Nav";
import Slider from './Slider';
const Home = () => {
const [details, setdetails] = useState({
    'wishlist' : 0,
    'notifications':0,
    'wishlist_class': ''
});
const [cars, setCars] = useState([
    {
        name: 'volvo',
        description: 'This is the best car in the world',

    },
    {
        name: 'Mercedes Benz',
        description: 'This is the most renown car',
    },
    {
        name: 'Corolla',
        description: 'This is the painted with of neon paint',
    },
    {
        name: 'Toyota',
        description: 'Made by the greatest company in the whole world',
    }
]);  
let wishlist = () => {
setdetails({...details, wishlist_class: ' text-danger', wishlist: details.wishlist + 1});
}
let carName = ['','car1.png', 'car2.png'][Math.ceil(Math.random()*2)];

console.log()
return (
    <div>
    <Nav wishlist={details.wishlist} notifications={details.notifications} wishlist_class={details.wishlist_class}/>
    <Slider />
    <div className="d-inline-flex flex-col flex-wrap">

        {cars.map((car) => (
            cars.map((car) => (
                <div className="card card-text rounded col-lg-4 col-md-6 col-sm-12 col-xsm-12 p-2">
                  <h5 className="card-title">{car.name}</h5> 
                   <div className="card-body">
                    <img className="img-fluid card-img card-img-top" src={'images/'+carName}/>
                   <p className="text-dark m-0">{car.description}</p>
                    <div>
                    <button className="btn btn-sm h-25 btn-danger ms-auto m-0" onClick={wishlist}><span className="fa fa-cart-plus fs-4"></span></button>
                    </div>
                   </div>
                </div>
            ))
        ))}
    </div>
    <Footer />
    </div>
    
)
}
export default Home;