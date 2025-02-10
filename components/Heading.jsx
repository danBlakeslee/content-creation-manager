import React from 'react'

const Heading = ({title}) => {
  return (
    <section className="bg-white mb-5 shadow-lg rounded px-4 py-4 border-2 border-slate-800">
    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
      {title}
    </h1>
  </section>
)
}

export default Heading