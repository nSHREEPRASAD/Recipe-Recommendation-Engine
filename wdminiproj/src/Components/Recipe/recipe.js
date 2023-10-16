import React from 'react'
import "./recipe.css"
import {Link} from 'react-router-dom';
const Recipe = () => {
    return (
        <div>
            <div className='OuterContainer'>
                <div className='TopContainer'>
                    <h1><i>Here are the Recipes...</i></h1>
                </div>
                <div className='MiddleContainer'>
                    <div className='FirstMiddleContainer'>
                        <div className='Left'>
                             
                        </div>
                        <div className="card">
                            <img src="https://vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg" className="card-img-top" alt="Bhel" height={"300px"}/>
                                <div className="card-body">
                                    <h5 className="card-title">Bhel</h5>
                                    <p className="card-text">A burst of vibrant flavors and textures in every mouthful.</p>
                                    <Link to={"/recipeinfo"}><button className="btn btn-primary" >
                                        Recipe
                                    </button></Link>
                                </div>
                        </div>
                        <div className='Left'>
                             
                        </div>
                        <div className='Left'>
                             
                        </div>
                        <div className="card">
                            <img src="https://assets.cntraveller.in/photos/6275025f74266e7300892c34/3:2/w_6000,h_4000,c_limit/lead.jpg" className="card-img-top" alt="Pohe" height={"300px"}/>
                                <div className="card-body">
                                    <h5 className="card-title">Kande Pohe</h5>
                                    <p className="card-text"> A flattened rice dish from India, enjoyed for breakfast, lunch, or dinner.</p>
                                    <Link to={"/recipeinfo1"}><button className="btn btn-primary" >
                                        Recipe
                                    </button></Link>
                                </div>
                        </div>
                        <div className='Left'>
                             
                        </div>
                        <div className='Left'>
                             
                        </div>
                        <div className="card">
                            <img src="https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg" className="card-img-top" alt="Upma" height={"300px"}/>
                                <div className="card-body">
                                    <h5 className="card-title">Upma</h5>
                                    <p className="card-text"> A savory porridge made from semolina or rice flour, popular for breakfast.</p>
                                    <Link to={"/recipeinfo2"}><button className="btn btn-primary" >
                                        Recipe
                                    </button></Link>
                                </div>
                        </div>
                        <div className='Left'>
                             
                        </div>
                        <div className='Left'>
                             
                        </div>
                        <div className="card">
                            <img src="https://previews.123rf.com/images/indianfoodimages/indianfoodimages1909/indianfoodimages190902620/130570812-pineapple-sheera-or-halwa-also-known-as-ananas-keshri-shira-popular-south-indian-dessert-recipe.jpg" className="card-img-top" alt="Shira" height={"300px"}/>
                                <div className="card-body">
                                    <h5 className="card-title">Shira</h5>
                                    <p className="card-text"> A sweet vermicelli pudding, often made with saffron, nuts, and dried fruits.</p>
                                    <Link to={"/recipeinfo3"}><button className="btn btn-primary" >
                                        Recipe
                                    </button></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
