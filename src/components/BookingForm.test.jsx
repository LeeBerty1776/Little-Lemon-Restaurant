import { render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm";
import { vi } from "vitest";
import { useOutletContext } from "react-router-dom";

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useOutletContext: vi.fn()
}))

useOutletContext.mockReturnValue({availableTimes:["1:00"], availableTimesDispatch: vi.fn(), submitForm: vi.fn()})

test("static text should render", () => {
    render(<BookingForm />)

    const dateLabel = screen.getByText("Choose date")

    expect(dateLabel).toBeTruthy()
})