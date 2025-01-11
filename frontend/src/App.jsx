// grundstruktur
import './App.css'
import RecipeCard from './components/RecipeCard/RecipeCard.jsx';

function App() {
  const testRecept = {
    title: "Farmors Äppelkaka",
    description: "En saftig och kryddig äppelkaka med kanel och kardemumma.",
    temperature: 175,
    time: 45,
    image: "https://images.unsplash.com/photo-1568571780765-9276da287eb1",
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
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Familjens Receptsamling</h1>
      </header>
      <main className="main">
        <RecipeCard {...testRecept} />
      </main>
      <footer className="footer">
        <p>© 2025 Familjens Receptsamling</p>
      </footer>
    </div>
  )
}

export default App
