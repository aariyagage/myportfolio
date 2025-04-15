'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

export default function Skills() {
  useEffect(() => {
    Draggable.create('.skill-card', {
      bounds: 'body',
      inertia: true,
      onRelease: function () {
        const dropZones = document.querySelectorAll('.drop-zone')
        dropZones.forEach(zone => {
          const zoneRect = zone.getBoundingClientRect()
          const thisRect = this.target.getBoundingClientRect()

          if (
            thisRect.left < zoneRect.right &&
            thisRect.right > zoneRect.left &&
            thisRect.top < zoneRect.bottom &&
            thisRect.bottom > zoneRect.top
          ) {
            zone.appendChild(this.target)
          }
        })
      }
    })
  }, [])

  return (
    <section className="min-h-screen p-10 bg-[#f9f9fb]">
      <h2 className="text-4xl font-bold text-center mb-10">Where do these fit?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-semibold text-lg">
        <div id="zone-proficient" className="drop-zone">💪 Proficient</div>
        <div id="zone-learning" className="drop-zone">🧪 Learning</div>
        <div id="zone-interested" className="drop-zone">🌈 Interested</div>
      </div>

      <div id="skill-pool" className="flex flex-wrap justify-center gap-4 mt-12">
        {['React', 'Node.js', 'Python', 'Flask', 'TypeScript', 'MongoDB', 'SQL', 'GSAP', 'Next.js'].map(skill => (
          <div key={skill} className="skill-card px-4 py-2 bg-white shadow rounded text-sm font-medium text-gray-800 cursor-pointer">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
