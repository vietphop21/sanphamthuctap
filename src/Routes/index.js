import Oto from "../Oto"
import Gioithieu from "../Gioithieu"

import Header from "../Header"
import Car from "../Car"
import Motorbike from "../Motorbike"
import Footer from "../Footer"
import Headerlayout from "../Layout/Headerlayout"
import Home from "../Layout/Home"

const publicRoutes = [
    {path:'/', component:"",layout:Home},
    {path:'oto' ,component:Car, layout:Headerlayout},
    {path:'/xemaydien' ,component:Motorbike,layout:null},
    {path:'/gioithieu' , component:"",layout:Home},



]

const privateRoutes = () =>
{

}
export {publicRoutes,privateRoutes}