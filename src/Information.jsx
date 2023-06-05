import './index.css'
import thietbisac from '../src/IvyProject/thietbisac.png'
const Information = () => {
    return (
        <>
           <div class="title">
        <h2>Pin và trạm sạc</h2>
        <div class="sub-title">Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách cho
            thuê pin độc đáo, ưu việt và khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.

        </div>

    </div>
    <div class="battery-item">
        <div> <img src="https://storage.googleapis.com/vinfast-data-01/image-pin-tramsac-oto_1666149988.png"></img>

            Pin và trạm sạc ô tô
            <div class="xct"> <a>XEM CHI TIẾT</a> </div>

        </div>

        <div> <img src="https://storage.googleapis.com/vinfast-data-01/image-pin-tramsac-xmd_1666150010.png"></img>Pin
            và trạm sạc xe máy điện
            <div class="xct"> <a>XEM CHI TIẾT</a> </div>
        </div>

    </div>
    <div class="thietbisac">
        <div class="thietbisac-1">
            <img src={thietbisac}></img>

        </div>
        <div class="thietbisac-1">
            <div class="tbs1">Thiết bị sạc </div>
            <div class="tbs1">di động</div>
            <div class="tbs2">
                VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của khách hàng một cách thuận
                tiện nhất.
            </div>
            <div class="tbs3">TÌM HIỂU THÊM </div>

        </div>
    </div>
    <div class="bhdv">
        <div class="bhdvtitle">
            <div class="bhdv1">Bảo hành và Dịch vụ</div>
            <div class="bhdv-title">
                VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống Showroom, Nhà phân phối và xưởng dịch vụ
                rộng khắp, đáp ứng tối đa nhu cầu của Khách hàng.


            </div>
            <div class="csbh"> Chính sách bảo hành </div>
            <div class="csbh3"> Bảo hành vượt trội lên đến 10 năm.</div>
            <div class="xctt">
                <div class="bhdvxct"> Xem chi tiết</div>
            </div>

            <div class="csbh"> Đặt lịch bảo dưỡng </div>
            <div class="csbh3">Lên lịch sửa chữa, bảo dưỡng cho xe</div>
            <div class="dlbd">
                <div class="bhdvdlbd">ĐẶT LỊCH BẢO DƯỠNG</div>
            </div>



        </div>


    </div>

        </>
            )

}
            export default Information;