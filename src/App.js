import { BsDashLg } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import Navbar from './Components/Navbar';
import Section from "./Components/Section";
import Footer from "./Components/Footer";
function App() {
  let imageArray = [
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png",
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png",
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png",
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png",
    "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png",
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section>
        <div className="Header-Container">
          <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="" />
          <h1>Start React</h1>
          <h2>
            <BsDashLg style={{ fontSize: '80' }} />
            < BsFillStarFill />
            <BsDashLg style={{ fontSize: '80' }} />
          </h2>
          <h3>Graphic Artist - Web Designer - Illustrator</h3>
        </div>
      </Section>
      <Section>
        <div className="portfolio-container">
          <h1>PORTFOLIO</h1>
          <h2>
            <BsDashLg style={{ fontSize: '80' }} />
            < BsFillStarFill />
            <BsDashLg style={{ fontSize: '80' }} />
          </h2>
          <div className="portfolio-images-container">
            {
              imageArray.map((element) => (
                <img height={250} className="card-images" src={element} alt="" />
              ))
            }
          </div>
        </div>
      </Section>
      <Section>
        <div className="About-container">
          <h1>About</h1>
          <h2>
            <BsDashLg style={{ fontSize: '80' }} />
            < BsFillStarFill />
            <BsDashLg style={{ fontSize: '80' }} />
          </h2>
          <div className="paras-div">
            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
          <button type="button" class="btn btn-outline-secondary dwn-btn"><BsDownload />Free Download!</button>
        </div>
      </Section>
      <Section>
        <div className="Contact-container">
          <h1>CONTACT ME</h1>
          <h2>
            <BsDashLg style={{ fontSize: '80' }} />
            < BsFillStarFill />
            <BsDashLg style={{ fontSize: '80' }} />
          </h2>
          <form>
            <div class="mb-3">
              <input type="email" placeholder="Fun name" class="form-control inp-tag" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <input type="email" placeholder="Email address" class="form-control inp-tag" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <input type="text" placeholder="Phone number" class="form-control inp-tag" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <textarea type="" placeholder="Message" class="form-control inp-tag" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary form-btn">Submit</button>
          </form>
        </div>
      </Section>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
