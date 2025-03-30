import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "./BookingForm";
import { describe, expect, vi } from "vitest";
import { useOutletContext } from "react-router-dom";

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useOutletContext: vi.fn()
}))

useOutletContext.mockReturnValue({
    availableTimes: ["15:00"],
    availableTimesDispatch: vi.fn(),
    submitForm: vi.fn()
});


let date, time, guests, occasion, submit;

beforeEach(() => {
    render(<BookingForm />);

    date = screen.getByLabelText("Choose date");
    time = screen.getByLabelText("Choose time");
    guests = screen.getByLabelText("Number of guests");
    occasion = screen.getByLabelText("Occasion");
    submit = screen.getByText("Make Your Reservation");
});

describe("BookingForm", () => {
    
    test("static text should render", () => {
        const dateLabel = screen.getByText("Choose date");
        expect(dateLabel).toBeTruthy();
    });

    describe("HTML form validation", () => {
        test("date field should have min and required", () => {
            expect(date.hasAttribute("min")).toBeTruthy();
            expect(date.hasAttribute("required")).toBeTruthy();
        });

        test("time field should have required", () => {
            expect(time.hasAttribute("required")).toBeTruthy();
        });

        test("guests field should have min, max and required", () => {
            expect(guests.hasAttribute("min")).toBeTruthy();
            expect(guests.hasAttribute("max")).toBeTruthy();
            expect(guests.hasAttribute("required")).toBeTruthy();
        });

        test("occasion field should have required", () => {
            expect(occasion.hasAttribute("required")).toBeTruthy();
        });
    });

    describe("JS form validation", () => {
        test("submit should be disabled by default", () => {
            expect(submit.disabled).toBeTruthy();
            
            fireEvent.click(submit);
            expect(useOutletContext().submitForm).not.toHaveBeenCalled();
        });

        test("submit should be enabled after filling all fields", () => {
            fireEvent.change(date, { target: { value: "2077-07-07" } });
            fireEvent.change(time, { target: { value: "15:00" } });
            fireEvent.change(guests, { target: { value: "1" } });
            fireEvent.change(occasion, { target: { value: "birthday" } });
            
            fireEvent.click(submit);
            expect(useOutletContext().submitForm).toHaveBeenCalled();
        });
    });
});