import "./style.css";
import Card from "./PagesCard";
import grapefruit from "./../../img/2.jpg";
import peach from "./../../img/3.jpg";
import mango from "./../../img/4.jpg";
import dragonfruit from "./../../img/5.jpg";
const Cards = (props) => {
    const arr=[
        {
            img: <img src={grapefruit} alt="" />,
            title:"Грейпфрутовый сок",
            information:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img: <img src={peach} alt="" />,
            title:"Персиковый сок",
            information:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

    const arr2=[
        {
            img: <img src={mango} alt="" />,
            title:"Манго сок",
            information:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img: <img src={dragonfruit} alt="" />,
            title:"Драгон сок",
            information:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]
    
    return ( 
        <>
            <div className="cards">
                <div className="container">
                    <div className="wrapper_one">
                        {arr.map((obj)=>(
                        <Card
                            img={obj.img}
                            title={obj.title}
                            information={obj.information}
                        />
                        ))}
                    </div>
                </div>
            </div>
            <div className="cards1">
                    <div className="container">
                        <div className="wrapper_two">
                        {arr2.map((obj)=>(
                                <Card
                                    img={obj.img}
                                    title={obj.title}
                                    information={obj.information}
                                />
                            ))}
                        </div>
                    </div>
            </div>
        </>
     );
}
 
export default Cards;