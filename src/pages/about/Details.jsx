import React from 'react'
const details = [
    {
     heading: "37+",
     text: "Years of experience"
    },
    {
        heading: "98K",
        text: "Success Investments"
       },
       {
        heading: "65B",
        text: "Dollar Money Profit"
       },
       {
        heading: "24+",
        text: "Expert Advisors"
       },
]



function Details() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12 mt-5 ">
    {details.map((detail, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center p-6 text-grayTheme bg-white
         hover:bg-grayTheme hover:text-cream rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <h1 className="text-4xl font-bold">{detail.heading}</h1>
        <p className="text-sm mt-2">{detail.text}</p>
      </div>
    ))}
  </div>
  )
}

export default Details
