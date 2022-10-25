import React, { useState } from 'react';


const Tour = ({id, image,info, price, name, removeTour}) => {
 const [readMore, setReadMore] = useState(false);
  return(
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>
            ₦{price}
          </h4>
        </div>
        <p>{readMore? info : `${info.substring(0,200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore? 'show less' : 'read more'}
        </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not intrested</button>
      </footer>
    </article>
  )
}

export default Tour;

// If the readMore is true then i will want to display the info  i.e readMore ? info
//  However if the readMore is not (:) true then am going to look for info.substring(0, 200) 
// example of ternary operation
// const value = 1 < 0;
// value ? console.log('value is true') : console.log('value is false');