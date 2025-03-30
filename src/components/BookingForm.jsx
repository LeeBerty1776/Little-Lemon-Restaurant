import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function BookingForm() {
   const {availableTimes, availableTimesDispatch, submitForm} = useOutletContext()

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

   const handleSubmit = e => {
      e.preventDefault()
      submitForm(formData)
   }

   const validate = () => {
      return (formData.date
         && formData.time
         && Number(formData.guests) >= 1
         && Number(formData.guests) <= 10
         && formData.occasion)
   }

   useEffect(() => {
      if (!formData.date) {
         availableTimesDispatch({type: "initialize"})
      } else {
         availableTimesDispatch({type: "update", payload: new Date(formData.date)})
      }
   }, [formData.date])

  return (
<form onSubmit={handleSubmit}>
   <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
      <label className='paragraph-text input validator' htmlFor='date'>
         <span className='label'>Choose date</span>
         <input type="date" name='date' value={formData.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} required id='date'/>
      </label>

      <label className='select pl-3 paragraph-text validator' htmlFor='time'>
         <span className="label">Choose time</span>
         <select name='time' value={formData.time} onChange={handleChange} required id='time'>
            <option hidden></option>
            {
               availableTimes ? 
               availableTimes.map(availableTime => <option key={availableTime} value={availableTime}>{availableTime}</option>) :
               <option disabled>Loading</option>
            }
         </select>
      </label>
      
      <label className='input paragraph-text validator' htmlFor='guests'>
         <span className="label">Number of guests</span>
         <input required type="number" name='guests' min="1" max="10" value={formData.guests} onChange={handleChange} id='guests' />
      </label>

      
      <label className='validator select pl-3 paragraph-text' htmlFor='occasion'>
         <span className="label">Occasion</span>
         <select name='occasion' value={formData.occasion} onChange={handleChange} required id='occasion'>
            <option hidden></option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
         </select>
      </label>

      <input className='lead-text btn btn-primary' type="submit" value="Make Your Reservation" disabled={!validate()} />
   </fieldset>
</form>
  )
}
