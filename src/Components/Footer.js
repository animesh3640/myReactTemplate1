import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
    return (
        <div>
            <div className="Footer-top">
                <div className="footer-section-div">
                    <div>
                        <h3>LOCATION</h3>
                        <h5>2215 John Daniel Drive Clark, MO 65243</h5>
                    </div>
                    <div style={{whiteSpace:'nowrap' ,marginLeft:'50px'}} >
                        <h3>AROUND THE WEB</h3>
                        <h5>
                            <BsFacebook className="icons" />
                            <BsTwitter className="icons" />
                            <BsLinkedin className="icons" />
                            <BsInstagram className="icons" />
                        </h5>
                    </div>
                    <div>
                        <h3>ABOUT FREELANCER</h3>
                        <h5>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by 
                            <a target="_blank" href="https://create-react-app.dev/docs/adding-bootstrap/"> Start Bootstrap</a>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © Animesh Karne's Website 2023</p>
            </div>
        </div>
    )
}
export default Footer