import React from 'react';

//component to print our spies to the page using .map
//info will come in from props
//this will be a function component 

const Jerks = (props) => {
  // console.log(props.shitheads)
  return (
    <main>
      {
        props.spies.length === 0 
        ? <p>Nothing to see here</p> 
        : props.spies.map((spy, index)=> {
          return (
            <h3 key={spy._id}>{spy.name}</h3>
          )
        })
      }
    </main>
  )
}

export default Jerks;