import './App.css';
import Image from './My.jpg';

function App() {
  return (
      <div id="main">
            <h2>Hi! buddy</h2>
            {/* FORM */}
            <form id="form" action="https://formspree.io/f/mpzbwkee" method="POST">
                <a href='https://www.facebook.com/imtious.midul/'><img src={Image} alt="" /></a>
                <h3>Imtious Islam</h3>
                {/* MESSAGE */}
                <textarea placeholder='Message | Suggestion | Advise . . .' name="Message"/>
                {/* SUBMIT BUTTON */}
                <button type="submit">Send</button>
            </form>
      </div>

  );
}

export default App;
