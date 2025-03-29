import Card from "./Card"
import { NavLink } from "react-router-dom"

const items = [
    {
        name: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        url: "/greek-salad.jpg"
    },
    {
        name: "Bruchetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with sald and olive oil",
        url: "/bruchetta.svg"
    },
    {
        name: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authetic as can be imagined",
        url: "lemon-dessert.jpg"
    }
]
export default function Specials() {
  return (
    <section className='p-4 mb-8'>
        <h1 className='text-center display-title text-secondary'>This week's specials!</h1>
        <div className="grid md:grid-cols-[repeat(3,minmax(0,320px))] justify-center gap-4">
            {items.map(special => <Card key={special.name} item={special} />)}
        </div>
    </section>
  )
}
