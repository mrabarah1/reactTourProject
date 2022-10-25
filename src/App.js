import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
const [loading, setLoading] = useState(true);
const [tours, setTours] = useState([]);
// const [removeTour, setRemoveTour] = useState()

// const removeTour = (id) => {
//   const newTours = tours.filter((tour) => tour.id !== id);
//   setTours(newTours);
// }

const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours)
}
// fetch tours Api
const fetchTours = async () => {
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
  
  } catch (error) {
    setLoading(false)
  }
}
useEffect(() => {
fetchTours();
}, []);

if(loading) {
  return(
   <main>
   <div className='loading'>
     {loading ? <h1>Loading...</h1> : fetchTours()}
   </div>
   </main>
  )
}
if(tours.length === 0) {
  return (
    <main>
      <div className='title'>
      <h2>no tours left</h2>
      <button className='btn' onClick={fetchTours}>refresh</button>
    </div>
    </main>
  )
}

return(
  <>
  <main>
    <Tours  tours={tours}  removeTour={removeTour} />
  </main>
  </>
)

}

export default App;

// tours={tours} meaning, tours props is equal to tours state value

 