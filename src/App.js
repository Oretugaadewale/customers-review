import "./App.css";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Testimonials</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
