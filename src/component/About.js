import { useRef, useState, useEffect } from "react";
import "./About.css";
import handsomeguy from "../img/handsome.jpg";
import deveoper from "../img/programing.gif";
import team from "../img/team.gif";

const About = ({useScrollFadeIn, useScrollFadeIn2}) => {

    const animatedItem = useScrollFadeIn();
    const animatedItem2 = useScrollFadeIn2();

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsHovered2(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsHovered2(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
        setIsHovered(false);
    };

   
    return (
        <div className="About" >
            <h2 {...animatedItem}>" 안녕하세요, 프론트엔드 개발자를 꿈꾸는 유상협입니다. "</h2>
            <div className="about_in" onMouseLeave={handleMouseLeave}>
                <div className="about_photo">
                {isHovered ? 
                        <img src={deveoper} alt="변경된 이미지" />
                    : (
                        isHovered2 ? <img src={team} />
                                : <img src={handsomeguy} />
                )}
                </div>
                <div className="about_txt" onMouseLeave={handleMouseLeave} {...animatedItem2} >
                    <p onMouseEnter={handleMouseEnter}>
                        " 저는 새로운 것을 배우는 것을 즐기며 끊임없이 발전하고자 하는 열정을 가지고 있습니다. 지속적인 학습과 도전을 통해 자신의 잠재력을 최대한 발휘하고 싶습니다. "
                    </p>
                    <p onMouseEnter={handleMouseEnter2}>
                        " 저는 피드백을 소중히 받아들이고 지속적인 개선을 통해 더 나은 결과물을 만들어내는 것을 중요시합니다. 열린 마음으로 다양한 의견을 수용하며, 팀과 함께 성장하고 발전하기 위해 노력합니다. "
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
