import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Subpage.css';

function Coin() {
    const [value, setValue] = useState(5200);

    const sumChange1 = () => {
        setValue(value+1000)
    }
    const sumChange2 = () => {
        setValue(value+300);
    }
    const sumChange3 = () => {
        setValue(value+1500);
    }

    return(
        <div>
            <div className="menu_content">
                <div className="ontitle">
                    <h2>전체 메뉴</h2>
                </div>
                <div className="menu_detail">
                    <div className="menu_detail_img">
                        <p></p>
                    </div>
                    <div className="menu_detail_txt">
                        <h3 className="h3_main">
                            <span className="h3_1">고메이</span><br />
                            <span className="h3_2">데미햄버그 불고기 파스타</span>
                        </h3>
                        <p className="txt_p1">
                            국내산 돼지고기로 만든 부드러운 어쩌구 저쩌구 맛있는<br />
                            데미햄버그 불고기파스타
                        </p>
                        <div className="menu_detail_option">
                            <ul>
                                <li>
                                    <span>
                                        <input type="checkbox" onChange={sumChange1}></input>
                                        <label>계란후라이</label>
                                    </span>
                                    <span className="checkoption"><em>+1,000</em> 원</span>
                                </li>
                                <li>
                                    <span>
                                        <input type="checkbox" onChange={sumChange2}></input>
                                        <label>청양고추</label>
                                    </span>
                                    <span className="checkoption"><em>+300</em> 원</span>
                                </li>
                                <li>
                                    <span>
                                        <input type="checkbox" onChange={sumChange3}></input>
                                        <label>3종믹스치즈</label>
                                    </span>
                                    <span className="checkoption"><em>+1,500</em> 원</span>
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="total_price">
                            <div className="total_price_box">
                                <dl>
                                    <dd className="total_price_result">
                                        <span>5,200</span>
                                        <span>
                                            <em>( +{value-5200})</em>
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                            <div className="price_wrap">
                                <span>
                                    <em>{value}</em> 원
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin;