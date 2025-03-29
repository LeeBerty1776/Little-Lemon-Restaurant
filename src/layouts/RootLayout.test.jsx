import {updateTimes, initializeTimes} from "./RootLayout"
import { describe } from "vitest";


describe("API data fetching", () => {
    test("initializeTimes() should return array", () => {
        const availableTimes = initializeTimes();
        expect(Array.isArray(availableTimes) && availableTimes.length > 0).toBeTruthy()
    })

    test("updateTimes(date) should return array" , () => {
        const availableTimes = updateTimes(new Date("1989-6-4"))
        expect(Array.isArray(availableTimes) && availableTimes.length > 0).toBeTruthy()
    })
})