import React from 'react'

const CurrentTime = () => {
  let time = new Date()
  return (
    <>
      <p className="lead">
        This is the current time : <span className='fw-bold'>{time.toLocaleDateString()}</span> - <span className='fw-bold'>{time.toLocaleTimeString()}</span>
      </p>
    </>
  );
}

export default CurrentTime
