import React from 'react'
import './recipeinfo.css'
const Recipeinfo2 = () => {
    return (
        <div>
            <div className='OuterContainer'>
                <div className='Spacing'>

                </div>
                <div className='BigContainer'>
                    <img src="https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg" alt='Upma Img' height={"600px"} width={"600px"}>
                    </img>
                    <div className='LeftSpace'>

                    </div>
                    <div className='LeftSpace'>

                    </div>
                    <div class="card1" >
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <div className='Spacing'>

                            </div>
                            <h1><i>Upma</i></h1>
                            <div className='Spacing'>

                            </div>
                            <div className='IngredientBox'>
                                <h3><i><b>Ingredient :-</b></i></h3>
                                <ul>
                                    <li>
                                        Semolina
                                    </li>
                                    <li>
                                        Onion
                                    </li>
                                    <li>
                                        Tomato
                                    </li>
                                    <li>
                                        Lemon
                                    </li>
                                    <li>
                                        Cilantro leaves
                                    </li>
                                </ul>
                            </div>
                            <div className='Spacing'>

                            </div>
                            <div className='Spacing'>

                            </div>
                            <div className='Spacing'>

                            </div>
                            <div className='RecipeBox'>
                                <h3><i><b>Recipe :-</b></i></h3>
                                <p>
                                    Heat a pan over medium heat. Add the mustard seeds and cumin seeds and let them splutter.
                                    Add the onions and cook until softened, about 5 minutes.
                                    Add the ginger and green chilies and cook for 1 minute more.
                                    Add the tomatoes and cook until they are soft and mushy, about 5 minutes.
                                    Add the turmeric powder, red chili powder, and garam masala and cook for 1 minute more.
                                    Add the semolina and salt and mix well.
                                    Add the water and stir to combine.
                                    Bring the mixture to a boil, then reduce the heat to low and simmer for 5 minutes, or until the semolina is cooked through.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipeinfo2
