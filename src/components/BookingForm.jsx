import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function BookingForm() {
   const {availableTimes, availableTimesDispatch} = useOutletContext()

   const [formData, setFormData] = useState({
         date: "",
         time: "",
         guests: "",
         occasion: ""
      });
   
   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   useEffect(() => {
      if (!formData.date) {
         availableTimesDispatch({type: "initialize"})
      } else {
         availableTimesDispatch({type: "update", payload: new Date(formData.date)})
      }
   }, [formData.date])

  return (
<form>
   <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
      <label className='input paragraph-text'>
         <span className='label'>Choose date</span>
         <input type="date" name='date' value={formData.date} onChange={handleChange}/>
      </label>

      <label className='select pl-3 paragraph-text'>
         <span className="label">Choose time</span>
         <select name='time' value={formData.time} onChange={handleChange}>
            <option hidden></option>
            {
               availableTimes ? 
               availableTimes.map(availableTime => <option key={availableTime} value={availableTime}>{availableTime}</option>) :
               <option disabled>Loading</option>
            }
         </select>
      </label>
      
      <label className='input paragraph-text'>
         <span className="label">Number of guests</span>
         <input type="number" name='guests' placeholder="1" min="1" max="10" value={formData.guests} onChange={handleChange}/>
      </label>
      
      <label className='select pl-3 paragraph-text'>
         <span className="label">Occasion</span>
         <select name='occasion' value={formData.occasion} onChange={handleChange}>
            <option hidden></option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
         </select>
      </label>

      <input className='lead-text btn btn-primary' type="submit" value="Make Your Reservation" />
   </fieldset>
</form>
  )
}
