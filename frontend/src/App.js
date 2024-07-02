import './App.css';
import Navbar from './components/Navbar.js';
import data from './Movieinfo.json';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.style.left = `${i * 100}%`;
    });
    slideImage();
  }, []);

  const slideImage = () => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const goNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % data.length);
  };

  const goPrev = () => {
    setCounter((prevCounter) => (prevCounter - 1 + data.length) % data.length);
  };

  useEffect(() => {
    slideImage();
  }, [counter]);

  return (
    <div>
      <Navbar />
      <section className="slider-section">
        <div className="button-container">
          <button onClick={goPrev}>Prev</button>
          <button onClick={goNext}>Next</button>
        </div>
        <div className="slider-container">
          {data.map((movie, i) => (
            <div className="slide" key={i}>
              <img src={movie.image_url} alt={movie.name} />
            </div>
          ))}
        </div>
      </section>
      <section className="movies-section">
        <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#040F3A' }}>
          {data.map((movie, i) => (
            <div className="container" key={i}>
              <img src={movie.image_url} style={{ width: '300px', height: '200px', borderRadius: '30px' }} alt={movie.name} />
              <h4 style={{ color: 'white' }}>{movie.name}</h4>
              <h5 style={{ color: 'white' }}>Rating-{movie.rating}</h5>
              <div style={{ color: 'white' }}>{movie.description}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;


