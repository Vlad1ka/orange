import "./styleCard.css";

const PagesCard = (cardImg, cardTitle, cardInformation) => {
    return ( 
        <div>
            <div className="top_part_card">
                <img src={cardImg} alt=""/>
            </div>
            <div className="bottom_part_card">
                <h3>{cardTitle}</h3>
                <p>{cardInformation}</p>
            </div>
        </div>
    );
}
 
export default PagesCard;