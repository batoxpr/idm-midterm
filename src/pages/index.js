import BoredCard from "@/app/components/BoredCard";
import "../app/globals.css";
import styles from "@/app/components/BoredCard.module.css"

const BORED_API = `https://www.boredapi.com/api/activity`;
const COCKTAIL_API = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

export async function getStaticProps() {
  // first API query
  const responseBoredAPI = await fetch(BORED_API);
  const boredAPIData = await responseBoredAPI.json(); // This might be different for each API
  // second API query
  const responseCocktailAPI = await fetch(COCKTAIL_API);
  const cocktailAPIData = await responseCocktailAPI.json(); // This might be different for each API
  // Pass the responses down as props
  return {
    props: {
      boredAPIData,
      cocktailAPIData,
    },
  };
}

export default function Home({boredAPIData, cocktailAPIData}) {
    console.log(boredAPIData);
    console.log(cocktailAPIData);
    return (
        <main>
            <h1>tipsy activities</h1>
            {/* <h2>Are you feeling bored and thirsty today?</h2> */}


            <BoredCard 
            activity={boredAPIData.activity}
            type={boredAPIData.type}
            participants={boredAPIData.participants}
            drink={cocktailAPIData.drinks[0].strDrink}
            drinkImg={cocktailAPIData.drinks[0].strDrinkThumb}
            drinkInst={cocktailAPIData.drinks[0].strInstructions}
            ing1={cocktailAPIData.drinks[0].strIngredient1}
            ing2={cocktailAPIData.drinks[0].strIngredient2}
            ing3={cocktailAPIData.drinks[0].strIngredient3}
            ing4={cocktailAPIData.drinks[0].strIngredient4}
            ing5={cocktailAPIData.drinks[0].strIngredient5}
            groupImg={"https://i.pinimg.com/originals/a0/ac/f5/a0acf5ab2cd619deab46210077ed165c.gif"}
            aloneImg={"https://i.pinimg.com/originals/a0/ac/f5/a0acf5ab2cd619deab46210077ed165c.gif"}
            arrowImg={"https://www.freeiconspng.com/thumbs/cursor-png/cursor-png-ico-icns-free-icon-download--icon100m-20.png"}
            />
        </main>
    );
}