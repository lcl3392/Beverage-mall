import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className="inner">
                <a href="" className='footer_logo'>
                    <img src="https://www.selecto.co.kr/assets/images/main/logo-white.svg" alt="" />
                </a>
            </div>
            <div className='footer_link'>
                <a href="" target='_blank'><img src="https://www.selecto.co.kr/assets/images/main/f-link-n.svg" alt="" /></a>
                <a href="" target='_blank'><img src="https://www.selecto.co.kr/assets/images/main/f-link-y.svg" alt="" /></a>
                <a href="" target='_blank'><img src="https://www.selecto.co.kr/assets/images/main/f-link-i.svg" alt="" /></a>
            </div>
            <div className='footer_list'>
                <a href="">개인정보취급방침</a>
            </div>
            <div className='footer_info'>
                <div>
                    <span>주소 : 서울시 구로구 구로3동 222-14 에이스하이엔드타워 2차 1402호</span>
                    <div className='info-devide_bar dv-remove'></div>
                    <span>도로명주소 : 서울시 구로구 디지털로26길 61 에이스하이엔드타워 2차 1402호</span>                    
                </div>
                <div>
                    <span>대표이사 : 황규연</span>
                    <div className='info-devide_bar'></div>
                    <span>사업자등록번호 : 109-81-99153</span>
                    <div className='info-devide_bar dv-remove'></div>
                    <span>
                    <a href="tel:1600-5649" style={{ color: '#fff' }}>전화 : 1600-5649</a>
                    </span>
                    <div className='info-devide_bar'></div>
                    <span>팩스 : 20-6340-1701</span>
                </div>
            </div>
            <div className='footer_copy'>
                <span>COPYRIGHT ㈜맥스원이링크 ALL RIGHTS RESERVED.</span>
            </div>
        </footer>
    );
};

export default Footer;