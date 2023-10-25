"use-client"
import styles from "./BoredCard.module.css";
import ActivityIcon from "./ActivityIcon";

const BoredCard = ({
    activity, 
    type,
    participants,
    drink,
    drinkImg,
    drinkInst,
    ing1, ing2, ing3, ing4, ing5,
}) => (
    <div className={styles.BoredCardWrapper}> 

        <p> You could: {activity} while sipping a glass of "{drink}" cocktail!</p>

        <div className={styles.CocktailImg}>
                <img src={drinkImg} title={drinkInst}></img>
            <div className={styles.CocktailInst}>
                <p2>Ingredients: {ing1}, {ing2}, {ing3}, {ing4}, {ing5} <br/></p2>
                <p2> <br/> Instructions: {drinkInst}</p2>
        </div>
        </div>

        <div className={styles.ActivityIconImage}>
            <ActivityIcon participants={participants} type={type} />
        </div>
    </div>
)

export default BoredCard;