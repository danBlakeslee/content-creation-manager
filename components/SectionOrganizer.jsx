import React from 'react'
import RedirectButton from './RedirectButton'

const SectionOrganizer = ({title, redirectLink}) => {
  return (
    <section className="flex justify-between bg-white mb-5 shadow px-4 py-4 border border-slate-100">
    <h2 className="text-xl font-bold tracking-tight text-slate-800">
      {title}
    </h2>
    <RedirectButton redirectLink={redirectLink} />
  </section>
)
}

export default SectionOrganizer