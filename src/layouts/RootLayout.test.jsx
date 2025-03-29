import {updateTimes, initializeTimes} from "./RootLayout"
import { describe } from "vitest";


describe("API data fetching", () => {
    test("initializeTimes() should return array", () => {
        const availableTimes = initializeTimes();
        expect(availableTimes).toBeInstanceOf(Array)
    })

    test("updateTimes(date) should return array" , () => {
        const availableTimes = updateTimes(new Date())
        expect(availableTimes).toBeInstanceOf(Array)
    })
})