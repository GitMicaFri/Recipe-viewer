import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase"; // Importera Firestore & Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // Bild-URL lagras här efter uppladdning
  const [imageFile, setImageFile] = useState(null); // Filen som ska laddas upp
  const [ingredients, setIngredients] = useState([{ amount: "", name: "" }]);
  const [instructions, setInstructions] = useState([""]);
  const [loading, setLoading] = useState(false); // Indikerar om uppladdning pågår

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = image; // Om ingen ny bild laddas upp, använd befintlig URL

      if (imageFile) {
        const imageRef = ref(storage, `recipe-images/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "recipes"), {
        title,
        description,
        image: imageUrl,
        ingredients,
        instructions,
      });

      console.log("Recept sparat!");
      setTitle("");
      setDescription("");
      setImage("");
      setImageFile(null);
      setIngredients([{ amount: "", name: "" }]);
      setInstructions([""]);
    } catch (error) {
      console.error("Fel vid sparande:", error);
    } finally {
      setLoading(false);
    }
  };

  // Hantera bildval
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
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

      <h3>Bild</h3>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imageFile && <p>Vald bild: {imageFile.name}</p>}

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
