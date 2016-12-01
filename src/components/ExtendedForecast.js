import React from 'react'


const ExtendedForecast = ({name, list}) => {
  console.log(list);
  if (list) {
  return(
    <div>
      <h1>{name}</h1>
      ExtendedForecast
      <p>{list.map((item) => {
        return (
          <div>
            <span> High: {item.high.fahrenheit} </span>
            <span> Low: {item.low.fahrenheit} </span>
            <span> {item.conditions} </span>
            <img src={item.icon_url}/>
          </div>
        )
      })}</p>
    </div>
  )
} else {
  return <div></div>
  }
}
export default ExtendedForecast
