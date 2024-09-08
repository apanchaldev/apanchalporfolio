import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import { Home } from './components/home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Experience } from './components/Experience/Experience'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Certificates } from './components/Certificates/Certificates'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home />
      <About />
      <Certificates />
      <Experience/>
      <Contact />
    </div>
  );
}

export default App
