import { Outlet, useLoaderData} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";

export default function RootLayout() {
  const loaderData = useLoaderData();
  const [availableTimes, setAvailableTimes] = useState();
  useEffect( () => {
    if (loaderData.availableTimes instanceof Promise){
      loaderData.availableTimes.then(times => setAvailableTimes(times))
    } else {
      setAvailableTimes(loaderData.availableTimes)
    }
  } , [loaderData.availableTimes])

  return (
    <>
        <Header />
        <main>
            <Outlet context={availableTimes}/>
        </main>
        <Footer />
    </>
  )
}

export async function availableTimesLoader() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 2000); 
  });
  return {availableTimes: promise}
}