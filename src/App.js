import Card from "./componants/Card";
import Footer from "./componants/Footer";
import Header from "./componants/Header";
import Hero from "./componants/Hero";
import {data} from "./data"


function App() {
  const cards = data.map(card=>(
    <Card card={card} />
  ))
  return (
    <div className="App">
     <Header/>
     <Hero/>
      <section>
        {cards}
      </section>
     <Footer/>
    </div>
  );
}

export default App;
