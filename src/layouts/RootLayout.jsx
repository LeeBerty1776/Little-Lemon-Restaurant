import { Outlet} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useReducer} from "react";
import {fetchAPI, submitAPI} from "../utils/api"


const initializeTimes = () => {
  return fetchAPI(new Date())
}

const updateTimes = (date) => {
  return fetchAPI(date)
}

const availableTimesReducer = (state, action) => {
  switch(action.type) {
    case "initialize": return initializeTimes();
    case "update": return updateTimes(action.payload);
    default: return state;
  }
}

export default function RootLayout() {
  const [availableTimes, availableTimesDispatch] = useReducer(availableTimesReducer, null);

  return (
    <>
        <Header />
        <main>
            <Outlet context={{availableTimes, availableTimesDispatch}}/>
        </main>
        <Footer />
    </>
  )
}
