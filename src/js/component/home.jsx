import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;