import profile from "../images/profile.jpg";
import '../scss/content.scss';
import nodejs from '../images/nodejs.svg';
import csharp from '../images/c-sharp.svg';
import angular from '../images/angular.svg';
import ireact from '../images/react.svg';

function Content() {
    return (
        <div className="content">
            <div className="profile">
                <div className="profile__photo">
                    <img src={profile} alt="Vivek Kushwaha" height="150" width="150" />
                </div>
                <div className="profile__summary">
                    <p>Experienced Application Developer with a demonstrated history of working in the information
                    technology and services industry.<br /><br />

                    Specializes in Front End Development using Angular 2 and above. Skilled in Angular 2+ and .NET
                    Framework. Hard working and quick leaner. Take responsibility and accountability of the work given
                    </p>
                </div>
                <div className="profile__technology">
                    <h2 className="head">Technologies</h2>
                    <div className="tech-container">
                        <div className="tech">
                            <div className="tech__logo">
                                <img src={nodejs} alt="Node js" />
                            </div>
                            <div className="tech__title">Nodejs</div>
                        </div>
                        <div className="tech">
                            <div className="tech__logo">
                                <img src={csharp} alt=".Net Core" /></div>
                            <div className="tech__title">.Net Core</div>
                        </div>
                        <div className="tech">
                            <div className="tech__logo">
                                <img src={angular} alt="Angular" />
                            </div>
                            <div className="tech__title">Angular</div>
                        </div>
                        <div className="tech">
                            <div className="tech__logo">
                                <img src={ireact} alt="React" />
                            </div>
                            <div className="tech__title">React</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Content;