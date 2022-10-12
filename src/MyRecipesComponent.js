import check from './check.png'

function MyRecipeComponent ({label, image, cuisine, mealType, calories, protein, fat, carbs, ingredients, url, webSite}){

    return(
        <div className="componentCont">
           <div className="component" key={label}>

           <h2>{label}</h2>

            <p className="cuisine">cuisine: {cuisine}  ({mealType})</p>
            <p className="colories">{calories.toFixed()} calories ({(protein*100).toFixed()}/{(fat*100).toFixed()}/{(carbs*100).toFixed()})</p>
            <div>
            <img className="img" src={image} alt="photo" width="450px" height="450px"/>
            </div>
            <p className='text'>See full recipe on: <a href={url} target="_blank"> {webSite}</a></p>
            <p className="ingridients">Ingredients:</p>
            <ul >
                {ingredients.map(ingredient =>(
                    <li><img className='check' src={check} width="20px" alt="check" /> {ingredient}</li>
                ))}
            </ul>
           </div>
            
        </div>
    )
}

export default MyRecipeComponent;