import "./Skills.css";
import css from "../img/css.png";
import fig from "../img/figma.png";
import git from "../img/git.png";
import github from "../img/githubb.png";
import html from "../img/html.png";
import jquery from "../img/jquery.png";
import js from "../img/js.png";
import react from "../img/react.png";
import ts from "../img/ts.png";
import vs from "../img/vs.png";
import { useState, useEffect } from "react";

const Skills = ({skillRef}) => {
    const [jsModal, setJsModal] = useState(false);
    const onClickJs = () => {
        setJsModal(true);
        setCModal(false);
        setFModal(false);
        setGModal(false);
        setGhModal(false);
        setHModal(false);
        setJqModal(false);
        setReModal(false);
        setTsModal(false);
    }
    const [tsModal, setTsModal] = useState(false);
    const onClickTs = () => {
        setTsModal(true);
        setJsModal(false);
        setCModal(false);
        setGhModal(false);
        setFModal(false);
        setGModal(false);
        setHModal(false);
        setJqModal(false);
        setReModal(false);
    }
    const [hModal, setHModal] = useState(false);
    const onClickH = () => {
        setHModal(true);
        setJsModal(false);
        setCModal(false);
        setFModal(false);
        setGModal(false);
        setJqModal(false);
        setGhModal(false);
        setReModal(false);
        setTsModal(false);
    }
    const [cModal, setCModal] = useState(false);
    const onClickC = () => {
        setCModal(true);
        setJsModal(false);
        setFModal(false);
        setGModal(false);
        setHModal(false);
        setGhModal(false);
        setJqModal(false);
        setReModal(false);
        setTsModal(false);
    }
    const [reModal, setReModal] = useState(false);
    const onClickRe = () => {
        setReModal(true);
        setJsModal(false);
        setCModal(false);
        setGhModal(false);
        setFModal(false);
        setGModal(false);
        setHModal(false);
        setJqModal(false);
        setTsModal(false);
    }
    const [jqModal, setJqModal] = useState(false);
    const onClickJq = () => {
        setJqModal(true);
        setJsModal(false);
        setCModal(false);
        setFModal(false);
        setGhModal(false);
        setGModal(false);
        setHModal(false);
        setReModal(false);
        setTsModal(false);
    }
    const [ghModal, setGhModal] = useState(false);
    const onClickGh = () => {
        setGhModal(true);
        setJsModal(false);
        setCModal(false);
        setFModal(false);
        setHModal(false);
        setJqModal(false);
        setReModal(false);
        setTsModal(false);
    }
    const [gModal, setGModal] = useState(false);
    const onClickG = () => {
        setGModal(true);
        setJsModal(false);
        setCModal(false);
        setFModal(false);
        setHModal(false);
        setJqModal(false);
        setReModal(false);
        setGhModal(false);
        setTsModal(false);
    }
    const [fModal, setFModal] = useState(false);
    const onClickF = () => {
        setFModal(true);
        setJsModal(false);
        setCModal(false);
        setGModal(false);
        setHModal(false);
        setJqModal(false);
        setReModal(false);
        setGhModal(false);
        setTsModal(false);
    }
    return (
        <div className="Skills" >
            <div className="skills_in">
                        <div className="a01" onClick={()=> onClickRe()}  >
                            <img src={react} />
                            <span>click !</span>
                        </div>
                        <div className="a02" onClick={()=> onClickJq()}  >
                            <img src={jquery} />
                            <span>click !</span>
                        </div>
                    <div className="a03" onClick={() => onClickJs()}  >
                        <img src={js} />
                        <span>click !</span>
                    </div>
                    <div className="a04" onClick={()=> onClickTs()}  >
                        <img src={ts}  />
                        <span>click !</span>
                    </div>
                    <div className="a05" onClick={()=> onClickH()}  >
                        <img src={html} />
                        <span>click !</span>
                    </div>
                    <div className="a06" onClick={()=> onClickC()}  >
                        <img src={css} />
                        <span>click !</span>
                    </div>
                        <div className="a07" onClick={()=> onClickG()}>
                            <img src={git} />
                            <span>click !</span>
                        </div>
                        <div className="a08" onClick={()=> onClickF()}>
                            <img src={fig} />
                            <span>click !</span>
                        </div>
                        <div className="a09" onClick={()=> onClickGh()} >
                            <img src={github} />
                            <span>click !</span>
                        </div>
            </div>
                <div className={reModal === false ? "react-about" : "react-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={react} /></div>
                        <div className="about-txt">
                            <h3>React</h3>
                            <p>
                                
                                React의 구조를 이해하고 있으며,
                                간결하고 효율적인 상태 및 props의 활용으로 유연하게 컴포넌트 간 소통하며
                                원활한 데이터 흐름을 구축합니다.
                            </p>
                        </div>
                    </div>
                </div>  
                <div className={jqModal === false ? "jquery-about" : "jquery-about open"}>
                    <div className="about-in">
                    <div className="about-img"><img src={jquery} /></div>
                        <div className="about-txt">
                            <h3>Jquery</h3>
                            <p>
                                제이쿼리를 사용하여 단순한 코드로 웹 페이지에 다양한 기능를 구현할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>  
                <div className={jsModal === false ? "javaScript-about" : "javaScript-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={js} /></div>
                        <div className="about-txt">
                            <h3>javaScript</h3>
                            <p>Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.</p>
                        </div>
                    </div>
                </div>  
                <div className={tsModal === false ? "typeScript-about" : "typeScript-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={ts} /></div>
                        <div className="about-txt">
                            <h3>TypeScript</h3>
                            <p>타입스크립트의 특징인 정적 타입 언어로 타입을 체크해 오류를 확인하며 작업 환경의 안정성을 높일수 있습니다.</p>
                        </div>
                    </div>
                </div>  
                <div className={hModal === false ? "html-about" : "html-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={html} /></div>
                        <div className="about-txt">
                            <h3>HTML</h3>
                            <p>웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.</p>
                        </div>
                    </div>
                </div>  
                <div className={cModal === false ? "css-about" : "css-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={css} /></div>
                        <div className="about-txt">
                            <h3>Css</h3>
                            <p>
                                position, display를 적절히 사용하여 반응형웹을 적용할 수 있습니다. 
                            </p>
                        </div>
                    </div>
                </div>  
                <div className={gModal === false ? "git-about" : "git-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={git} /></div>
                        <div className="about-txt">
                            <h3>Git</h3>
                            <p></p>
                        </div>
                    </div>
                </div>  
                <div className={fModal === false ? "figma-about" : "figma-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={fig} /></div>
                        <div className="about-txt">
                            <h3>Figma</h3>
                            <p></p>
                        </div>
                    </div>
                </div>  
                <div className={ghModal === false ? "github-about" : "github-about open"}>
                    <div className="about-in">
                        <div className="about-img"><img src={github} /></div>
                        <div className="about-txt">
                            <h3>Github</h3>
                            <p>commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다</p>
                        </div>
                    </div>
                </div>  
           
        </div>
    )
}

export default Skills;



