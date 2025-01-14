import React from 'react';
import '../Index-style.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="list">
            <li><a href="#tenkovi">Tenkovi</a></li>
            <li><a href="#avioni">Avioni</a></li>
            <li><a href="#borbena-vozila">Borbena vozila</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1 style={{ justifyContent: 'center', display: 'flex' }}>Odaberite državu</h1>
        <hr className="break" />

        <div className="container">
          {/* Croatia */}
          <div className="slike">
            <h3>Republika Hrvatska</h3>
            <a href="Croatia/hrvatski-tenkovi.html">
              <img className="nacije" src="assets/Nacije/Flag_of_Croatia.svg.png" alt="Croatian Flag" />
            </a>
          </div>

          {/* USA */}
          <div className="slike">
            <h3>Sjedinjene Američke Države</h3>
            <a href="USA/americki-tenkovi.html">
              <img className="nacije" src="assets/Nacije/Flag_of_the_United_States.svg.png" alt="USA Flag" />
            </a>
          </div>

          {/* Germany */}
          <div className="slike">
            <h3>Njemačka</h3>
            <a href="Germany/german-tanks.html">
              <img className="nacije" src="assets/Nacije/Flag_of_Germany.svg.png" alt="German Flag" />
            </a>
          </div>

          {/* Russia */}
          <div className="slike">
            <h3>Rusija</h3>
            <a href="Russia/russian-tanks.html">
              <img className="nacije" src="assets/Nacije/Flag_of_Russia.svg.png" alt="Russian Flag" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
