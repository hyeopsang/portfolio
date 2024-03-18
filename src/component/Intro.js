import "./Intro.css";
import main from "../img/intromain.gif";

const Intro = ({introRef}) => {
    return (
        <div className="Intro" >
            <div className="h21">Sanghyeop</div>
            <h2 className="h22">Portfolio</h2>
            <div className="mainImg">
                <img src={main} />
            </div>
            <div className="roundContainer">
                <div className="rounded-text rotating">
                    <svg viewBox="0 0 200 200">
                    <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke-width="0"></path>
                    <g font-size="17px">
                    <text text-anchor="start">
                        <textPath className="coloring" href="#textPath" startOffset="0%"> Hello! My name is sanghyeop. Nice to meet you</textPath>
                    </text>
                    </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Intro;