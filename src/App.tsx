
function App() {
  const searchMovie = (e) => {
    e.preventDefault()
    console.log("Bien joué Jo")
  }

  return (
    <>
      <main className=''>
        <h1>Cinemax</h1>
        <h3>Trouvez les infos de films et séries en 2 clics !</h3>
        <form onSubmit={searchMovie}>
          <input type="text" className="border" />
          <button className="border">Rechercher</button>
        </form>
      </main>
    </>
  )
}

export default App
