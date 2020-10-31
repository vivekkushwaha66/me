import './App.scss';
function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <div className="logo__head">Vivek Kushwaha</div>
          <div className="log__subhead">Software Engineer</div>
        </div>
        <div className="resume">
          Download Resume
        </div>
      </div>
      <div className="content">
        <div className="profile">
          <div className="profile__photo"><img src="" alt="" /></div>
          <div className="profile__summary">
            <p>Experienced Application Developer with a demonstrated history of working in the information
            technology and services industry.

            Specializes in Front End Development using Angular 2 and above. Skilled in Angular 2+ and .NET
            Framework. Hard working and quick leaner. Take responsibility and accountability of the work given
                </p>
          </div>
          <div className="profile__technology">
            <h2 className="head">Technologies</h2>
            <div className="tech">
              <div className="tech__logo">
                <img src="" alt="" />
              </div>
              <div className="tech__title">Nodejs</div>
            </div>
            <div className="tech">
              <div className="tech__logo">
                <img src="" alt="" /></div>
              <div className="tech__title">.Net Core</div>
            </div>
            <div className="tech">
              <div className="tech__logo">
                <img src="" alt="" />
              </div>
              <div className="tech__title">Angular</div>
            </div>
            <div className="tech">
              <div className="tech__logo">
                <img src="" alt="" />
              </div>
              <div className="tech__title">React</div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <h2 className="head">
          Write to me
        </h2>
        <form>
          <div className="form">
            <div className="form__group">
              <input type="text" className="input" placeholder="Name" />
              <input type="text" className="input" placeholder="Email Id" />
              <input type="text" className="input" placeholder="Phone No" />
              <input type="text" className="input" placeholder="Subject" />
            </div>
            <textarea name="" id="" cols="30" rows="10" className="query"></textarea>
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
      <div className="social">
        <div className="social__icons"><img src="" alt="" /></div>
        <div className="social__icons"><img src="" alt="" /></div>
        <div className="social__icons"><img src="" alt="" /></div>
      </div>
    </div>
  );
}

export default App;
