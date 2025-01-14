import PropTypes from 'prop-types';

const RecipeCard = ({ title, description, image, ingredients, instructions }) => {
  return (
    <div className="recipe-card">
      {/* Hero-sektion */}
      <div className="hero-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">{title}</h1>
        </div>
      </div>

      <h3>Ingredienser:</h3>
      <ul>
        {ingredients.map((item, index) => ( // loopar igenom arrayen ingredients som skickas som props
          <li key={index}> 
            {item.amount} {item.name}
          </li>
        ))}
      </ul>

      <h3>Instruktioner:</h3>
      <ol>
        {instructions.map((step, index) => ( // loopar igenom arrayen instructions
          <li key={index}>{step}</li>
        ))}
      </ol>
      {/* Resten av din kod */}
    </div>
  );
};

// Validera props
RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeCard;
