import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Importera Firestore
import RecipeCard from "../RecipeCard/RecipeCard"; // Importera komponenten som visar recept

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const recipesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecipes(recipesData);
      } catch (error) {
        console.error("Fel vid hämtning av recept:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Alla recept</h2>
      {loading ? (
        <p>Laddar recept...</p>
      ) : (
        recipes.length > 0 ? (
          recipes.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
        ) : (
          <p>Inga recept tillgängliga.</p>
        )
      )}
    </div>
  );
};

export default RecipeList;
