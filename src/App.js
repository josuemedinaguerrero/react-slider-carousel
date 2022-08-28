import ControlledCarousel from "./components/CarouselContainer";
import SendEmail from "./components/Email";
import "./App.css";

function App() {
   return <div>
      <ControlledCarousel />
      <div className="contact">
         <h1>Contact me</h1>
         Web: <a href="https://josuemedinaguerrero.netlify.app/">https://josuemedinaguerrero.netlify.app/</a>
      </div>
      <SendEmail />
   </div>
}

export default App;

