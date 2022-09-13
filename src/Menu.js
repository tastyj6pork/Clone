import React from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Subpage.css';

function Menu() {
    return(
    <div>

        <div className="menu_tit">
            <div className="menu_init">
                <div className="menu_h2"><h2>한솥 메뉴</h2></div>
                <ul>
                    <li>전체메뉴</li>
                    <li>추천키워드</li>
                </ul>
            </div>
        </div>
        <div className="menu_box">
            <div className="menu_select">
                <ul>
                    <li>전체보기</li><hr />
                    <li>신메뉴/행사</li><hr />
                    <li>프리미엄-고메이</li><hr />
                    <li>사각도시락</li><hr />
                    <li>보울도시락</li><hr />
                    <li>실속반찬/사이드</li>
                </ul>
            </div>
            <div className="menu_list">
                <div className="menu_list_wrap">
                    <p className="dp">신메뉴/행사</p>
                    <h3 className="h3_tit">신메뉴</h3>
                    <div class="area_sc3">
                        <figure class="sc_wrap">
                            <span class="sc_img">
                                <img src="images/menu_bulgogi.jpg" alt="why한솥 가맹점 이미지" />
                            </span>
                            <figcaption>
                                <p class="sc_tit fz_02">
                                    <Link to="/coin">데미햄버그 불고기 파스타</Link>
                                </p>
                                <span class="menu_txt">5,200원</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Menu;