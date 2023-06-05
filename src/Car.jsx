import './index.css';
import xe1 from '../src/IvyProject/xe1.png'
import xe2 from '../src/IvyProject/xe2.png'
import xe3 from '../src/IvyProject/xe3.png'
import Header from './Header';



const Car = () =>
{
    return (
        <>
        <Header/>
             <container>
        <div class="container">
            <div class="div1">
                <img class="img-container" src={xe1} ></img>
                <div class="car-name">VF 5 Plus </div>
                <div class="noidung"> Kiến tạo xu thế mới</div>
                <div class="info-car">

                    <p> Dòng xe </p>


                    <p> Số chỗ ngồi </p>

                    <p>Quảng đường</p>


                </div>
                <div class="info-car">
                    <div> SUV </div>


                    <div> 5 chỗ </div>

                    <div>~ 300 km</div>

                </div>
                <div class="price"> Từ 56.320.521 VNĐ</div>
                <div class="info-car">
                    <div class="datcoc"> <a>ĐẶT CỌC</a></div>
                    <div class="xemchitiet"> XEM CHI TIẾT</div>
                </div>


            </div>
            <div class="div1">
                <img class="img-container" src={xe2}></img>
                <div class="car-name">VF 5 Plus </div>
                <div class="noidung"> Kiến tạo xu thế mới</div>
                <div class="info-car">

                    <p> Dòng xe </p>


                    <p> Số chỗ ngồi </p>

                    <p>Quảng đường</p>


                </div>
                <div class="info-car">
                    <div> SUV </div>


                    <div> 5 chỗ </div>

                    <div>~ 300 km</div>

                </div>
                <div class="price"> Từ 56.320.521 VNĐ</div>
                <div class="info-car">
                    <div class="datcoc"> <a>ĐẶT CỌC</a></div>
                    <div class="xemchitiet"> XEM CHI TIẾT</div>
                </div>

            </div>
            <div class="div1">
                <img class="img-container" src={xe3}></img>
                <div class="car-name">VF 5 Plus </div>
                <div class="noidung"> Kiến tạo xu thế mới</div>
                <div class="info-car">

                    <p> Dòng xe </p>


                    <p> Số chỗ ngồi </p>

                    <p>Quảng đường</p>


                </div>
                <div class="info-car">
                    <div> SUV </div>


                    <div> 5 chỗ </div>

                    <div>~ 300 km</div>

                </div>
                <div class="price"> Từ 56.320.521 VNĐ</div>
                <div class="info-car">
                    <div class="datcoc"> <a>ĐẶT CỌC</a></div>
                    <div class="xemchitiet"> XEM CHI TIẾT</div>
                    
                </div>

            </div>


        </div>


    </container>


    
        </>
    )
}
export default Car;
