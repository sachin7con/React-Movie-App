
// SGN

import React, { useState } from 'react'
import Header from './components/Header'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('')

  return (
    <div id="container">

      <div id="header">
        <Header />
      </div>

      <div className="grey">
        <GenreFilter  setSelectedGenre={setSelectedGenre} />
        </div>
        <div>
        <header><MovieList selectedGenre={selectedGenre} /></header>
      </div>

    </div>
  )
}

export default App
