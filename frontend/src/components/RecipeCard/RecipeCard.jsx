import PropTypes from 'prop-types';

const RecipeCard = ({ title, description, image, ingredients, instructions }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
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
