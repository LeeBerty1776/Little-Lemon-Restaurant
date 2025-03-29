import { render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm"


test("Test for some static text being rendered in the BookingForm component", () => {
    render(<BookingForm />)
    const dateLabel = screen.getByText("Choose date")

    expect(document.body.contains(dateLabel)).toBe(true)
})