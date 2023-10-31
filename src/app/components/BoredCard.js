"use-client"
import styles from "./BoredCard.module.css";
import ActivityIcon from "./ActivityIcon";
import Image from 'next/image'

const BoredCard = ({
    activity, 
    drink,
    drinkImg,
    drinkInst,
    ing1, ing2, ing3, ing4, ing5,
    participants,
    type,
    arrowImg
}) => (

    
    
    <div className={styles.BoredCardWrapper}>
        <p> You could: {activity} while sipping a glass of '{drink}' cocktail!</p>
        
            

        <div className={styles.AnotherWrap}>
        <div className={styles.CocktailImg}>
            <img src={drinkImg} />
            <div className={styles.CocktailInst}>
                <p2>Ingredients: {ing1}, {ing2}, {ing3}, {ing4}, {ing5} <br/></p2>
                <p2> <br/> Instructions: {drinkInst}</p2>
            </div>
        </div>

       
        <div className={styles.ArrowImg}>
                <img src={arrowImg}/>
            </div>
            </div>

        

        <div className={styles.ActivityIconImage}>
            <ActivityIcon participants={participants} type={type} />
        </div>
    </div>
    
    
    
)

export default BoredCard;

// className={ClassImg}