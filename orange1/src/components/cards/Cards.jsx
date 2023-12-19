import PagesCard from "./PagesCard";
import "./style.css";

const Cards = () => {
    return ( 
        <div className="cards_11">
            <div className="cards">
                <div className="container">
                    <div className="wrapper_one">
                        <PagesCard cardImg={"./../../img/2.jpg"} cardTitle={"Грейпфрутовый сок"} cardInformation={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                        <PagesCard cardImg={"./../../img/3.jpg"} cardTitle={"Персиковый сок"} cardInformation={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    </div>
                </div>
            </div>
            <div className="cards1">
                    <div className="container">
                        <div className="wrapper_two">
                            <PagesCard cardImg={"./../../img/4.jpg"} cardTitle={"Манго сок"} cardInformation={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                            <PagesCard cardImg={"./../../img/5.jpg"} cardTitle={"Драгон сок"} cardInformation={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Cards;