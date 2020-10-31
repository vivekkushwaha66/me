import git from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import stackoverflow from '../images/stackoverflow.svg';
import "../scss/social.scss";

function Social() {
    return (
        <div className="social">
            <div className="social__icon" onClick={() => window.open('https://www.linkedin.com/in/vivekkushwaha66/')}><img src={linkedin} alt="Linkedin" /></div>
            <div className="social__icon" onClick={() => window.open('https://stackoverflow.com/users/7904862/vivek-kushwaha')}><img src={stackoverflow} alt="Stack Overflow" /></div>
            <div className="social__icon" onClick={() => window.open('https://github.com/vivekkushwaha66')}><img src={git} alt="Github" /></div>
        </div>
    );
}


export default Social;