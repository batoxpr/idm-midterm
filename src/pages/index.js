import BoredCard from "@/app/components/BoredCard";
import "../app/globals.css";
import styles from "@/app/components/BoredCard.module.css"

const BORED_API = `https://www.boredapi.com/api/activity`;
const COCKTAIL_API = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
// Just like exercise three...
export async function getStaticProps() {
  // Get first API query
  const responseBoredAPI = await fetch(BORED_API);
  const boredAPIData = await responseBoredAPI.json(); // This might be different for each API
  // Get second API query
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
            <h1>Bored & Thirsty?</h1>
            {/* <h2>Are you feeling bored and thirsty today?</h2> */}

            <BoredCard 
            activity={boredAPIData.activity}
            type={boredAPIData.type}
            participants={boredAPIData.participants}
            drink={cocktailAPIData.drinks[0].strDrink}
            drinkImg={cocktailAPIData.drinks[0].strDrinkThumb}
            />
        </main>
    );
}