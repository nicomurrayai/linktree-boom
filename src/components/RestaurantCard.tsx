import type { CSSProperties } from 'react'
import type { Restaurant } from '../data/restaurants'

interface RestaurantCardProps {
  restaurant: Restaurant
  index: number
}

type CustomProperties = CSSProperties & {
  '--card-accent'?: string
  '--reveal-delay'?: string
}

export function RestaurantCard({ restaurant, index }: RestaurantCardProps) {
  const itemStyle: CustomProperties = {
    '--reveal-delay': `${280 + index * 110}ms`,
  }
  const cardStyle: CustomProperties = {
    '--card-accent': restaurant.accent,
  }

  return (
    <li className="restaurant-item reveal" style={itemStyle}>
      <a
        className="restaurant-card"
        href={restaurant.href}
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        aria-label={`Ver carta de ${restaurant.name}; se abre en una nueva pestaña`}
      >
        <span className="logo-frame">
          <img
            className="restaurant-logo"
            src={restaurant.logo}
            alt={`Logo de ${restaurant.name}`}
          />
        </span>

        <span className="restaurant-copy">
          <span className="restaurant-name">{restaurant.name}</span>
          <span className="restaurant-description">{restaurant.description}</span>
          <span className="restaurant-action">
            Ver carta
            <svg
              className="action-arrow"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 11L11 3M5 3H11V9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </a>
    </li>
  )
}
