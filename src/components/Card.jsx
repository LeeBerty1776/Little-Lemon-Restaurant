import { NavLink } from "react-router-dom"

export default function Card({item}) {
  return (
<article className="card shadow-sm bg-base-200">
  <figure>
    <img src={item.url} alt={item.name} className="w-full aspect-3/2 object-cover"/>
  </figure>
  <div className="card-body">
    <div className="card-title justify-between">
      <h2 className="card-title-font">{item.name}</h2>
      <span className="highlight-text text-secondary">{`$${item.price}`}</span>
    </div>
    <p className="paragraph-text">{item.description}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">
        <NavLink to="/order">Order Now</NavLink>
      </button>
    </div>
  </div>
</article>
  )
}
