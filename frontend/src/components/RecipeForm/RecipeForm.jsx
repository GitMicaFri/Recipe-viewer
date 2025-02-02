import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Användaren skriver in en bild-URL
  const [ingredients, setIngredients] = useState([{ amount: "", name: "" }]);
  const [instructions, setInstructions] = useState([""]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "recipes"), {
        title,
        description,
        image: imageUrl, // Sparar URL istället för att ladda upp bild
        ingredients,
        instructions,
      });

      console.log("✅ Recept sparat!");

      // Återställ formuläret
      setTitle("");
      setDescription("");
      setImageUrl("");
      setIngredients([{ amount: "", name: "" }]);
      setInstructions([""]);
    } catch (error) {
      console.error("❌ Fel vid sparande:", error);
    } finally {
      setLoading(false);
    }
  };

  // Hantera ingredienser
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { amount: "", name: "" }]);
  };

  // Hantera instruktioner
  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addInstructionField = () => {
    setInstructions([...instructions, ""]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lägg till ett nytt recept</h2>

      <input
        type="text"
        placeholder="Recepttitel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Beskrivning"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Bild-URL (ladda upp externt)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <h3>Ingredienser:</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Mängd"
            value={ingredient.amount}
            onChange={(e) => handleIngredientChange(index, "amount", e.target.value)}
          />
          <input
            type="text"
            placeholder="Ingrediens"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addIngredientField}>+ Lägg till ingrediens</button>

      <h3>Instruktioner:</h3>
      {instructions.map((instruction, index) => (
        <div key={index}>
          <textarea
            placeholder={`Steg ${index + 1}`}
            value={instruction}
            onChange={(e) => handleInstructionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addInstructionField}>+ Lägg till steg</button>

      <button type="submit" disabled={loading}>
        {loading ? "Sparar..." : "Spara recept"}
      </button>
    </form>
  );
};

export default RecipeForm;
