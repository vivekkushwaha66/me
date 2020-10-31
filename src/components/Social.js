import git from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import stackoverflow from '../images/stackoverflow.svg';
import "../scss/social.scss";

function Social() {
    return (
        <div className="social">
            <div className="social__icons"><img src={linkedin} alt="Linkedin " /></div>
            <div className="social__icons"><img src={stackoverflow} alt="Stack Overflow" /></div>
            <div className="social__icons"><img src={git} alt="Github" /></div>
        </div>
    );
}


export default Social;