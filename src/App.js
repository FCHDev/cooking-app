import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./components/Card";
import image from './cooker.png';
import './index.css'


const App = () => {

    const [mealsData, setMealsData] = useState([])
    const [inputSearch, setInputSearch] = useState("");
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 428px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 428px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [matches]);


    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v2/9973533/search.php?s=${inputSearch}`)
            .then((res) =>
                setMealsData(res.data.meals));
    }, [inputSearch]);

    return (
        <div className="app-container">
            <h1>React World Cooking App</h1>
            <img className="cooker" src={image} alt="cooker draw comics"/>
            <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)"
                   onChange={(e) => setInputSearch(e.target.value)}/>

            <div className="meals-container">
                {mealsData &&
                    mealsData
                        // .sort((a, b) => b.strArea - a.strArea)
                        // .slice(0, 24)
                        .map((meal) => (
                            <Card key={meal.idMeal} repas={meal}/>
                        ))
                }
            </div>
        </div>
    );
};

export default App;
