import React from 'react'
import './recipeinfo.css'
const Recipeinfo = () => {
  return (
    <div>
      <div className='OuterContainer'>
      <div className='Spacing'>

      </div>
        <div className='BigContainer'>
          <img src="https://vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg" alt='Bhel Img' height={"600px"} width={"600px"}>
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
              <h1><i>Bhel</i></h1>
              <div className='Spacing'>

              </div>
              <div className='IngredientBox'>
                <h3><i><b>Ingredient :-</b></i></h3>
                <ul>
                  <li>
                    Kurmura
                  </li>
                  <li>
                    Farsan
                  </li>
                  <li>
                    Onion
                  </li>
                  <li>
                    Tomato
                  </li>
                  <li>
                    Potato
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
                  Heat the oil in a pan over medium heat. Add the onions and cook until softened, about 5 minutes.
                  Add the tomatoes and potatoes and cook until tender, about 10 minutes.
                  Add the green chilies, coriander leaves, chaat masala, and salt and cook for 1 minute more.
                  Remove the pan from the heat and let cool slightly.
                  In a large bowl, combine the kurmura, farsan, and the cooled tomato mixture.
                  Add the lemon juice and mix well.
                  Serve immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipeinfo
