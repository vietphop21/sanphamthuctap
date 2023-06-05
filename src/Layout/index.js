import Car from "../Car";
import Header from "../Header";
import Information from "../Information";
import Motorbike from "../Motorbike";
import Slide from "../Slide";

const  DefaultLayout =({children})=>{
    return (
        <>
        
       <Slide/>
        <div>   {children} 
   

        </div>
        </>
    )

}
export default DefaultLayout;