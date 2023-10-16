import React from 'react'
import './recipeinfo.css'
const Recipeinfo1 = () => {
    return (
        <div>
            <div className='OuterContainer'>
                <div className='Spacing'>

                </div>
                <div className='BigContainer'>
                    <img src="https://assets.cntraveller.in/photos/6275025f74266e7300892c34/3:2/w_6000,h_4000,c_limit/lead.jpg" alt='Pohe Img' height={"600px"} width={"600px"}>
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
                            <h1><i>Kande Pohe</i></h1>
                            <div className='Spacing'>

                            </div>
                            <div className='IngredientBox'>
                                <h3><i><b>Ingredient :-</b></i></h3>
                                <ul>
                                    <li>
                                        Pohe
                                    </li>
                                    <li>
                                        Potato
                                    </li>
                                    <li>
                                        Onion
                                    </li>
                                    <li>
                                        Lemon
                                    </li>
                                    <li>
                                        Coriander leaves
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
                                    Rinse the poha in water and drain it well.
                                    Heat the oil in a pan over medium heat. Add the mustard seeds and cumin seeds and let them splutter.
                                    Add the onions and cook until softened, about 5 minutes.
                                    Add the turmeric powder, red chili powder, and garam masala and cook for 1 minute more.
                                    Add the poha and salt and mix well.
                                    Cook for 2-3 minutes, or until the poha is heated through.
                                    Squeeze lemon juice over the poha and mix well.
                                    Garnish with coriander leaves and serve hot.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipeinfo1
