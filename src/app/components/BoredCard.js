"use-client"
import styles from "./BoredCard.module.css";

const BoredCard = ({
    activity, 
    type,
    participants,
    drink,
    drinkImg,
}) => (
    <div className={styles.BoredCardWrapper}> 

        <h3>Why don't you.. </h3>
        <h3>{activity} while sipping a glass of "{drink}" cocktail?</h3>

        <div className={styles.CocktailImg}>
        <img src={drinkImg}></img>
        </div>

        <p>This is a {type} activity.</p>
        {/* <p> {participants} </p>  */}
    </div>
)

export default BoredCard;