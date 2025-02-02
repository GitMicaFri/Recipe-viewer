import './App.css';
import RecipeCard from './components/RecipeCard/RecipeCard.jsx';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import RecipeForm from "./components/RecipeForm/RecipeForm.jsx";
import RecipeList from "./components/RecipeList/RecipeList.jsx";


import defaultImage from './assets/default-hero.jpg';

function App() {
  const testRecept = { // Mockdata
    title: "Farmors Äppelkaka",
    description: "En saftig och kryddig äppelkaka med kanel och kardemumma.",
    temperature: 175,
    time: 45,
    image: "",
    ingredients: [
      { amount: "3 st", name: "äpplen" },
      { amount: "2 dl", name: "vetemjöl" },
      { amount: "1.5 dl", name: "socker" },
      { amount: "2 tsk", name: "kanel" },
      { amount: "1 tsk", name: "kardemumma" }
    ],
    instructions: [
      "Sätt ugnen på 175 grader.",
      "Skala och kärna ur äpplena. Skär i tunna klyftor.",
      "Blanda mjöl, socker och kryddor i en bunke.",
      "Smöra en pajform och lägg i äppelklyftorna.",
      "Strö över mjölblandningen så att det täcker äpplena jämnt."
    ]
  };

  // Funktion för att hantera sökningar
  const handleSearch = (query) => {
    console.log(`Söker efter: ${query}`);
    // Här kan du lägga till logik för att filtrera recept
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <HamburgerMenu />
        <h1>Familjens Receptsamling</h1>
        <SearchBar onSearch={handleSearch} />
        <p className="header-subtitle">Upptäck och dela dina favoritrecept!</p>
      </header>

      {/* Landing Page */}
      <Hero title="Välkommen till Familjens Receptsamling" image={defaultImage} />

      {/* Formulär för att lägga till recept */}
      <main className="main">
        <RecipeForm />

        {/* Testrecept visas alltid */}
        <RecipeCard {...testRecept} image={testRecept.image || defaultImage} />

        {/* Lista över sparade recept */}
        <RecipeList />
      </main>

      <footer className="footer">
        <p>© 2025 Familjens Receptsamling</p>
      </footer>
    </div>
  );
}

export default App;
