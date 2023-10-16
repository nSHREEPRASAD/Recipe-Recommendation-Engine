import React, { useState } from 'react'
import "./recommendation.css"
import { useNavigate } from 'react-router-dom';
const Recommendation = () => {
    const navigate = useNavigate();
    let [dishtype, setdishtype] = useState("Breakfast");
    const onpressed = (dish) => {
        setdishtype(dish);
    }
    let [dishtaste, setdishtaste] = useState("Sweet");
    const onclicked = (taste) => {
        setdishtaste(taste);
    }
    let [Calaries, setCalaries] = useState("100-200 Calories");
    const onTapped = (Cal) => {
        setCalaries(Cal);
    }
    const buttonclick =()=>{
        if(dishtype==="Breakfast" && dishtaste==="Spicy" && Calaries==="200-300 Calories"){
            navigate("/recipeinfo")
        }
        else if(dishtype==="Breakfast" && dishtaste==="Spicy" && Calaries==="100-200 Calories"){
            navigate("/recipeinfo1")
        }
        else if(dishtype==="Lunch" && dishtaste==="Spicy" && Calaries==="100-200 Calories" ){
            navigate("/recipeinfo1")
        }
        else if(dishtype==="Lunch" && dishtaste==="Spicy" && Calaries==="200-300 Calories" ){
            navigate("/recipeinfo1")
        }
        else if(dishtype==="Dinner" && dishtaste==="Spicy" && Calaries==="100-200 Calories"){
            navigate("/recipeinfo2")
        }
        else if(dishtype==="Dinner" && dishtaste==="Spicy" && Calaries==="200-300 Calories"){
            navigate("/recipeinfo1")
        }
        else if(dishtype==="Breakfast" && dishtaste==="Sweet"){
            navigate("/recipeinfo3")
        }
        else if(dishtype==="Lunch" && dishtaste==="Sweet"){
            navigate("/recipeinfo3")
        }
        else if(dishtype==="Dinner" && dishtaste==="Sweet"){
            navigate("/recipeinfo3")
        }


    }
    return (
        <div>
            <div className='Outer'>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className='horSpace'>

                </div>
                <div className="FormCard">
                    <div className="card-body">
                        <div className='horSpace'>

                        </div>
                        <div className='horSpace'>

                        </div>
                        <h5 className="card-title"><i><b>Fill this form</b></i></h5>
                        <div className='horSpace'>

                        </div>
                        <div className='horSpace'>

                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {dishtype}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => { onpressed("Breakfast") }} >Breakfast</button></li>
                                <li><button className="dropdown-item" onClick={() => { onpressed("Lunch") }} >Lunch</button></li>
                                <li><button className="dropdown-item" onClick={() => { onpressed("Dinner") }} >Dinner</button></li>
                            </ul>
                        </div>
                        <div className='horSpace'>

                        </div>
                        <div className='horSpace'>

                        </div>
                        <div class="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {dishtaste}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => { onclicked("Sweet") }} >Sweet</button></li>
                                <li><button className="dropdown-item" onClick={() => { onclicked("Spicy") }} >Spicy</button></li>
                            </ul>
                        </div>
                        <div className='horSpace'>

                        </div>
                        <div className='horSpace'>

                        </div>
                        <div class="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {Calaries}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => { onTapped("100-200 Calories") }} >100-200 Calories</button></li>
                                <li><button className="dropdown-item" onClick={() => { onTapped("200-300 Calories") }} >200-300 Calories</button></li>
                            </ul>
                        </div>
                        <div className='horSpace'>

                        </div>
                        <div className='horSpace'>

                        </div>
                        <button type="button" class="btn btn-primary" onClick={buttonclick}>Recommend Recipe</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recommendation
