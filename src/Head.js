import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Head() {

    /*const toggleBtn = document.querySelector('.mobile_menu_btn');
    const menu = document.querySelector('.gnb_menu ul li');

    toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    });*/

    return(
      <div id="wrap" class="bg_w">
<header id="header" >
    <div class="hd_flex">
        <div class="area_flex">
            <ul>
                <li>
                    <Link to="/login">로그인</Link>
                    </li>
                <li>
                    <Link to="/join">회원가입</Link>
                    </li>
                <li class="sns_insta">
                    <a href="https://www.instagram.com/hansot_official/" target="_blank" title="새 창 열림" ><span class="blind"></span></a>
                </li>
                <li class="sns_face">
                    <a href="https://www.facebook.com/hansotOfficial/?ref=ts&fref=ts" target="_blank" title="새 창 열림" ><span class="blind"></span></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="hd_fixed">
        <div class="hd_content">
            <div class="logo">
                <h1><Link to="/"><span class="blind"></span></Link></h1>
            </div>
            <div class="mobile_menu_btn">
                <a><FontAwesomeIcon icon={faBars} onClick /></a>
            </div>
            <section id="gnb" class="area_gnb mo_version">
                <div class="m_area_flex">
                    <ul>
                        <li>
                            <a href="/login">로그인</a>
                            </li>
                        <li>
                            <a href="/join/join_step1">회원가입</a>
                            </li>
                    </ul>
                </div>
                <div class="gnb_menu">
                    <ul>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">BRAND</a></p>
                            <div class="dp2">
                                <ul>
                                    <li class="active"><a href="/brand/story">브랜드 스토리</a></li>
                                    <li><a href="/brand/philosophy">브랜드 철학</a></li>
                                    <li><a href="/brand/legacy">브랜드 유산</a></li>
                                    </ul>
                            </div>
                        </li>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">ESG</a></p>
                            <div class="dp2">
                                <ul>
                                    <li class="active"><a href="/esg/management">ESG경영이란?</a></li>
                                    <li><a href="/esg/environment">환경보호(Environment)</a></li>
                                    <li><a href="/hansot/social">사회공헌(Social)</a></li>
                                    <li><a href="/esg/management">윤리경영(Governance)</a></li>
                                    <li><a href="/esg/sdgs">세계 40대 브랜드 선정</a></li>

                                    </ul>
                            </div>
                        </li>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">MENU</a></p>
                            <div class="dp2">
                                <ul>
                                    <li><a href="/menu/menu_list">전체메뉴</a></li>
                                    <li><a href="/menu/material">식재료 이야기</a></li>
                                    <li><a href="/menu/chancha">페루찬차마요커피</a></li>
                                    <li><a href="/menu/menu_order">단체 주문</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">STORE</a></p>
                            <div class="dp2">
                                <ul>
                                    <li><a href="/store/store_find">주변점포찾기</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">EVENT</a></p>
                            <div class="dp2">
                                <ul>
                                    <li><a href="/event/event_list">이 달의 이벤트</a></li>
                                    <li><a href="/event/store_event_list">신규점 오픈이벤트</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">FRANCHISE</a></p>
                            <div class="dp2">
                                <ul>
                                    <li><a href="/franchise/hansot_store">Why 한솥 가맹점</a></li>
                                    <li><a href="/franchise/success">성공수기</a></li>
                                    <li><a href="/franchise/process">창업개설절차</a></li>
                                    <li><a href="/franchise/calc">예상 창업 비용</a></li>
                                    <li><a href="/franchise/qna">창업문의</a></li>
                                    <li><a href="/franchise/briefing">창업설명회 일정·신청</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="dp1">
                            <p class="dp1_tit"><a href="#none">HANSOT</a></p>
                            <div class="dp2">
                                <ul>
                                    <li><a href="/hansot/promise">한솥의 약속</a></li>
                                    <li><a href="/hansot/vision">한솥의 비전</a></li>
                                    <li><a href="/hansot/history">연혁&amp;수상</a></li>
                                    <li><a href="/hansot/news_list">한솥 NEWS</a></li>
                                    <li><a href="/hansot/location">오시는 길</a></li>
                                    <li><a href="/footer/faq_list">고객센터</a></li>
                                    <li class="h_last"><a href="/footer/incruit">인재채용</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="bg_layer"></div>
        </div>
    </div>
</header>
</div>
    )
  }

  export default Head;