import './index.css';

const Header = () =>
{
    return (
        <>
           <header>
        <div class="logo">
       
            <img src="https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg" alt="" />
        </div>
        <div class="menu">
            <div class="icon">



                
                <div></div>
                <div></div>
                <div></div>


            </div>
            <li> <a href="/gioithieu">Giới thiệu</a>

            </li>
            <li> <a href="/oto">Ô tô</a>

            </li>
            <li> <a href="/xemaydien">Xe máy điện</a>

            </li>
            <li> <a href="">Dịch vụ hậu mãi</a>

            </li>
            <li> <a href="">Pin và trạm sạc</a></li>


        </div>
        <div class="others">
            <li> <a  id="demo" href="login.html"> Tài khoản</a>
               

            </li>



            <li> <a class="thea" href="">ĐĂNG KÝ LÁI THỬ</a>


            </li>

        </div>


    </header>
        </>
    )
}
export default Header;
