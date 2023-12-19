import "./style.css";
import facebook from "./../../img/6.png";
import twitter from "./../../img/7.png";
import inform from "./../../img/8.png";
import google from "./../../img/9.png";
import telegram from "./../../img/10.png";

const Footer = () => {
    return ( 
        <footer>
            <div className="footer1">
                <p>Все права защищены</p>
                <div className="icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={inform} alt="" />
                    <img src={google} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;