import React from 'react';
import Tour from './Tour';


const Tours = ({tours, removeTour}) => {
  return(
    <>
    <section>
      <div className='title'>
       <h2>our tours</h2>
       <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
        return(
          <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        )
       })}
      </div>
    </section>
    </>
  )
}

export default Tours;






// const Tours = ({tours, removeTour}) => {
//   return (
//     <>
//     <section>
//       <div className='title'>
//         <h2>Our tours</h2>
//         <div className='underline'></div>
//       </div>
//       <div>
//         {tours.map((tour) => {
//           return <Tour  key={tour.id} {...tour} removeTour={removeTour}></Tour>

//         })}
//       </div>
//     </section>
//     </>
//   )
// };

// export default Tours;

// {...tour} means in the tours component, i will have acess to all the properties that are in the object