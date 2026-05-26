import type { CSSProperties } from 'react'
import { RestaurantCard } from './components/RestaurantCard'
import { restaurants } from './data/restaurants'

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

function App() {
  const heroStyle: RevealStyle = {
    '--reveal-delay': '70ms',
  }

  return (
    <>
      <div className="atmosphere" aria-hidden="true">
        <span className="glow glow-amber" />
        <span className="glow glow-olive" />
        <span className="glow glow-lilac" />
        <span className="grain" />
      </div>

      <main className="page">
        <div className="page-content">
          <header className="hero reveal" style={heroStyle}>
            <p className="eyebrow">Cartas digitales</p>
            <h1>Nuestras cartas</h1>
            <p className="introduction">
              Tres propuestas irresistibles. Descubrí tu favorita y abrí la
              carta en un toque.
            </p>
          </header>

          <section aria-label="Cartas digitales disponibles">
            <ul className="restaurant-list">
              {restaurants.map((restaurant, index) => (
                <RestaurantCard
                  key={restaurant.name}
                  restaurant={restaurant}
                  index={index}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
