import "./styleCard.css";

const Card = (props) => {
    return ( 
        <div className="card">
            <p>{props.img}</p>
            <p>{props.title}</p>
            <p>{props.information}</p>
        </div>
    );
}
 
export default Card;