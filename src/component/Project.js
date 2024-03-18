import { useRef, useState } from "react";
import "./Project.css";
import Nicon from "../img/New.png";
import EZicon from "../img/Layer-0_03.png";
import Aicon from "../img/imgbin_apple-logo-png.png";
import Nfull from "../img/NewFull.png";
import Afull from "../img/AppleFull.png";
import EZfull from "../img/EZFull.png";
import Github from "../img/githubb.png"; 
import Weather from "../img/Weather.png";
import WeatherFull from "../img/WeatherFull.png";
import portfolio from "../img/portfolio.png";

const Project = () => {
    const [isFlipped, setIsFlipped] = useState(false);
      
    const handleClick = () => {
        setIsFlipped(!isFlipped);
        setIsFlipped2(false);
        setIsFlipped3(false);
        setIsFlipped4(false);
        setIsFlipped5(false);
    };
    const [isFlipped2, setIsFlipped2] = useState(false);
      
    const handleClick2 = () => {
        setIsFlipped(false);
        setIsFlipped2(!isFlipped2);
        setIsFlipped3(false);
        setIsFlipped4(false);
        setIsFlipped5(false);
    };
    const [isFlipped3, setIsFlipped3] = useState(false);
      
    const handleClick3 = () => {
        setIsFlipped(false);
        setIsFlipped2(false);
        setIsFlipped3(!isFlipped3);
        setIsFlipped4(false);
        setIsFlipped5(false);
    };
    const [isFlipped4, setIsFlipped4] = useState(false);
      
    const handleClick4 = () => {
        setIsFlipped(false);
        setIsFlipped2(false);
        setIsFlipped3(false);
        setIsFlipped4(!isFlipped4);
        setIsFlipped5(false);
    };
    const [isFlipped5, setIsFlipped5] = useState(false);
      
    const handleClick5 = () => {
        setIsFlipped(false);
        setIsFlipped2(false);
        setIsFlipped3(false);
        setIsFlipped4(false);
        setIsFlipped5(!isFlipped5);
    };
    
    

    return (
        <div className="Project" >
             <div className="animated-title">
                <div className="track">
                    <div className="content">
                        <div className={`tp1 ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                            <img src={WeatherFull} />
                            <div className="tp1_back">
                                <h2>Song of the day</h2>
                                <div className="link">
                                    <img src={Weather} onClick={() => window.open("https://elaborate-marzipan-15d29a.netlify.app")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/songofdays")}/>
                                </div>
                                <div className="useSkill">
                                    <p style={{color:"#412454", backgroundColor:"#f6edfb", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># React</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># Openweather API</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># Geolocation API</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># Youtube-Library</p>
                                </div>
                                <div className="detail">
                                    <h3>개요</h3>
                                    <p>비오는 날 날씨에 어울리는 플레이 리스트를 찾아듣던 게 생각나서 자동으로<br/>
                                    날씨에 맞는 노래를 틀어주는 어플을 생각하며 만들게 되었습니다.</p>
                                </div>
                                <div className="detail2">
                                    <h3>상세</h3>
                                <p>Geolocation API를 사용하여 현재 위치의 경도와 위도를 가져오고<br/>
                                    Openweather API의 날씨 정보와 연결하여 현재 위치의 날씨 정보를<br/>
                                    구현하였고 유트브 라이브러리를 사용해서 노래 뮤비의 링크들을<br/> 모아서 플레이 리스트들을 만들고 Openweather API의
                                    날씨 데이터에<br/> 연결하여 날씨에 따라 다른 플레이 리스트가 재생이 되도록 만들었습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp2 ${isFlipped2 ? 'flipped' : ''}`} onClick={handleClick2}>
                            <img src={EZfull}/>
                            <div className="tp2_back">
                                <h2>EZfit</h2>
                                <div className="link">
                                    <img src={EZicon} onClick={() => window.open("https://ezfit-d8354.web.app/open")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/EZfit")}/>
                                </div>
                                <div className="nav"></div>
                                <div className="useSkill">
                                    <p style={{color:"#412454", backgroundColor:"#f6edfb", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}>#React</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}>#Css</p>
                                </div>
                                <div className="detail">
                                    <h3>개요</h3>
                                    <p>운동을 처음하시는 분들을 생각하고 가상의 어플을 구현해봤습니다.</p>
                                </div>
                                <div className="detail2">
                                    <h3>상세</h3>
                                    <p>운동, 음식, 운동 영상을 기록할수 있으며, 운동 영상 기록창에서는 운동 영상을<br/> 검색하여
                                    기록하게 되어 있습니다.
                                    제가 맡은 파트는 더미데이터에서 reducer함수로<br/> 데이터를 가져와서 기록창들을 만들고
                                    캘린더에 연결되도록 만들었습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp3 ${isFlipped3 ? 'flipped' : ''}`} onClick={handleClick3}>
                            <img src={Afull}/>
                            <div className="tp3_back">
                                <h2>AppleStore</h2>
                                <div className="link">
                                    <img src={Aicon} onClick={() => window.open("https://hyeop-applestore.netlify.app")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/AppleStore")}/>
                                </div>
                                <div className="nav"></div>
                                <div className="useSkill">
                                    <p style={{color:"#ffa944", backgroundColor:"#feebe1",padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Html</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                    <p style={{color:"#1c3829", backgroundColor:"#e7f3e6", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Jquery</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># slick-Library</p>
                                </div>
                                <div className="detail">
                                    <h3>개요</h3>
                                    <p>평소에 개인적으로 디자인을 정말 잘했다고 생각해왔던 애플 스토어 웹사이트를<br/> 조금 변형하여 반응형으로 클론 코딩해봤습니다.
                                    </p>
                                </div>
                                <div className="detail2">
                                    <h3>상세</h3>
                                    <p>
                                        드롭다운 기능은 제이쿼리로 구현하였고 슬라이드 기능은 슬릭 라이브러리를<br/> 사용했습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp4 ${isFlipped4 ? 'flipped' : ''}`} onClick={handleClick4}>
                            <img src={portfolio}/>
                            <div className="tp4_back">
                                <h2>portfolio</h2>
                                <div className="link">
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/portfolio")}/>
                                </div>
                                <div className="nav"></div>
                                <div className="useSkill">
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                    <p style={{color:"#1c3829", backgroundColor:"#e7f3e6", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Jquery</p>
                                </div>
                                <div className="detail">
                                    <p>
                                        라이브러리를 쓰지 않고 기능들을 구현하려고 노력하였고 <br/>
                                        심플하면서도 대충 만들지 않은 것처럼 구성하려고 노력했습니다.
                                    </p>
                                </div>
                                <div className="detail2">
                                    <p>
                                        항상 느꼈지만 이 포트폴리오를 만들면서 저의 능력 수준을<br/> 더 크게 깨닫게 된거 같습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp5 ${isFlipped5 ? 'flipped' : ''}`} onClick={handleClick5}>
                            <img src={Nfull}/>
                            <div className="tp5_back">
                                <h2>Newbalance</h2>
                                <div className="link">
                                    <img src={Nicon} onClick={() => window.open("https://newbalancekr.netlify.app")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/Newbalance")}/>
                                </div>
                                <div className="useSkill">
                                    <p style={{color:"#ffa944", backgroundColor:"#feebe1",padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Html</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                </div>
                                <div className="detail">
                                    <p>
                                        첫 프로젝트이며
                                        html과 css만을 사용하여 뉴발란스 한국 사이트를 클론 코딩했습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp1 ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                            <img src={WeatherFull} />
                            <div className="tp1_back">
                                <h2>Song of the day</h2>
                                <div className="link">
                                    <img src={Weather} onClick={() => window.open("https://elaborate-marzipan-15d29a.netlify.app")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/songofdays")}/>
                                </div>
                                <div className="useSkill">
                                    <p style={{color:"#412454", backgroundColor:"#f6edfb", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># React</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># Openweather API</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># Geolocation API</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># Youtube-Library</p>
                                </div>
                                <div className="detail">
                                    <h3>개요</h3>
                                    <p>비오는 날 날씨에 어울리는 플레이 리스트를 찾아 듣던게 생각나서 자동으로<br/>
                                    날씨에 맞는 노래를 틀어주는 어플을 생각하며 만들게 되었습니다.</p>
                                </div>
                                <div className="detail2">
                                    <h3>상세</h3>
                                <p>Geolocation API를 사용하여 현재 위치의 경도와 위도를 가져오고<br/>
                                    Openweather API의 날씨 정보와 연결하여 현재 위치의 날씨 정보를<br/>
                                    구현하였고 유트브 라이브러리를 사용해서 노래 뮤비의 링크들을<br/> 모아서 플레이 리스트들을 만들고 Openweather API의
                                    날씨 데이터에<br/> 연결하여 날씨에 따라 다른 플레이 리스트가 재생이 되도록 만들었습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp2 ${isFlipped2 ? 'flipped' : ''}`} onClick={handleClick2}>
                            <img src={EZfull}/>
                            <div className="tp2_back">
                                <h2>EZfit</h2>
                                <div className="link">
                                    <img src={EZicon} onClick={() => window.open("https://ezfit-d8354.web.app/open")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/EZfit")}/>
                                </div>
                                <div className="nav"></div>
                                <div className="useSkill">
                                    <p style={{color:"#412454", backgroundColor:"#f6edfb", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}>#React</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}>#Css</p>
                                </div>
                                <div className="detail">
                                    <h3>개요</h3>
                                    <p>운동을 처음하시는 분들을 생각하고 가상의 어플을 구현해봤습니다.</p>
                                </div>
                                <div className="detail2">
                                    <h3>상세</h3>
                                    <p>운동, 음식, 운동 영상을 기록할수 있으며, 운동 영상 기록창에서는 운동 영상을<br/> 검색하여
                                    기록하게 되어 있습니다.
                                    제가 맡은 파트는 더미데이터에서 reducer함수로<br/> 데이터를 가져와서 기록창들을 만들고
                                    캘린더에 연결되도록 만들었습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp3 ${isFlipped3 ? 'flipped' : ''}`} onClick={handleClick3}>
                            <img src={Afull}/>
                            <div className="tp3_back">
                                <h2>AppleStore</h2>
                                <div className="link">
                                    <img src={Aicon} onClick={() => window.open("https://hyeop-applestore.netlify.app")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/AppleStore")}/>
                                </div>
                                <div className="nav"></div>
                                <div className="useSkill">
                                    <p style={{color:"#ffa944", backgroundColor:"#feebe1",padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Html</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                    <p style={{color:"#1c3829", backgroundColor:"#e7f3e6", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Jquery</p>
                                    <p style={{padding:"0.1vw 0.1vw"}}># slick-Library</p>
                                </div>
                                <div className="detail">
                                    <h3>개요</h3>
                                    <p>평소에 개인적으로 디자인을 정말 잘했다고 생각해왔던 애플 스토어 웹사이트를<br/> 조금 변형하여 반응형으로 클론 코딩해봤습니다.
                                    </p>
                                </div>
                                <div className="detail2">
                                    <h3>상세</h3>
                                    <p>
                                        드롭다운 기능은 제이쿼리로 구현하였고 슬라이드 기능은 슬릭 라이브러리를<br/> 사용했습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp4 ${isFlipped4 ? 'flipped' : ''}`} onClick={handleClick4}>
                            <img src={portfolio}/>
                            <div className="tp4_back">
                                <h2>portfolio</h2>
                                <div className="link">
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/portfolio")}/>
                                </div>
                                <div className="nav"></div>
                                <div className="useSkill">
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                    <p style={{color:"#1c3829", backgroundColor:"#e7f3e6", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Jquery</p>
                                </div>
                                <div className="detail">
                                    <p>
                                        라이브러리를 쓰지 않고 기능들을 구현하려고 노력하였고 <br/>
                                        심플하면서도 대충 만들지 않은 것처럼 구성하려고 노력했습니다.
                                    </p>
                                </div>
                                <div className="detail2">
                                    <p>
                                        항상 느꼈지만 이 포트폴리오를 만들면서 저의 능력 수준을<br/> 더 크게 깨닫게 된거 같습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`tp5 ${isFlipped5 ? 'flipped' : ''}`} onClick={handleClick5}>
                            <img src={Nfull}/>
                            <div className="tp5_back">
                                <h2>Newbalance</h2>
                                <div className="link">
                                    <img src={Nicon} onClick={() => window.open("https://newbalancekr.netlify.app")}/>
                                    <img src={Github} onClick={() => window.open("https://github.com/hyeopsang/Newbalance")}/>
                                </div>
                                <div className="useSkill">
                                    <p style={{color:"#ffa944", backgroundColor:"#feebe1",padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Html</p>
                                    <p style={{color:"#02457a", backgroundColor:"#d6e8ee", padding:"0.1vw 0.3vw", borderRadius:"0.3vw"}}># Css</p>
                                </div>
                                <div className="detail">
                                    <p>
                                        첫 프로젝트이며
                                        html과 css만을 사용하여 뉴발란스 한국 사이트를 클론 코딩했습니다.
                                    </p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
