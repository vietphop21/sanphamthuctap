import Car from "../Car";
import Header from "../Header";
import Information from "../Information";
import Motorbike from "../Motorbike";
import Slide from "../Slide";

const  Headerlayout =({children})=>{
    return (
        <>
        <Header/>
      
       
        <div>  {children} 
    

        </div>
       
        </>
    )

}
export default Headerlayout;