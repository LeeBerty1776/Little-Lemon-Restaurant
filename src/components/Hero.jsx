import { NavLink } from "react-router-dom"

export default function Hero() {
  return (
<section className="hero min-h-screen bg-[url('/restaurant-food.jpg')]">
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="display-title text-primary">Little Lemon</h1>
      <h2 className="sub-title mb-4">Chicago</h2>
      <p className="lead-text mb-10">
      We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </p>
      <button className="btn btn-primary btn-outline lead-text">
        <NavLink to="/reserve">Reserve a Table</NavLink>
      </button>
    </div>
  </div>
</section>
  )
}
