import type { CSSProperties } from 'react'
import { RestaurantCard } from './components/RestaurantCard'
import { restaurants } from './data/restaurants'

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

const COUNT_WORDS = ['Una', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis']

const SUSHI_HREFS: Record<string, string> = {
  sushiboom: 'https://www.lacartaa.com/sushiboom-palermo',
  greenboom: 'https://www.lacartaa.com/greenboom-palermo',
}

function countWord(n: number) {
  return COUNT_WORDS[n - 1] ?? String(n)
}

function App() {
  const heroStyle: RevealStyle = {
    '--reveal-delay': '70ms',
  }

  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase()
  const isSushi = path === '/sushi'

  const visibleRestaurants = isSushi
    ? restaurants.flatMap((restaurant) => {
        const href = SUSHI_HREFS[restaurant.name.toLowerCase()]

        return href ? [{ ...restaurant, href }] : []
      })
    : restaurants

  const count = visibleRestaurants.length
  const noun = count === 1 ? 'propuesta irresistible' : 'propuestas irresistibles'

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
              {countWord(count)} {noun}. Descubrí tu favorita y abrí la
              carta en un toque.
            </p>
          </header>

          <section aria-label="Cartas digitales disponibles">
            <ul className="restaurant-list">
              {visibleRestaurants.map((restaurant, index) => (
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
