import BookingForm from '../components/BookingForm'

export default function Reserve() {
  return (
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url('/restaurant.jpg')",
  }}>
  <div className="hero-overlay"></div>
  <BookingForm />
</div>

  )
}
