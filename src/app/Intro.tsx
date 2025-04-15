'use client'

import { FlipWords } from '@/components/ui/flip-words'
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6"
      id="intro_section"
    >
      <div className="mb-4 rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
        🚀 Available for internships – Summer 2025
      </div>

      {/* BIG BOLD NAME */}
      <h1 className="text-6xl md:text-7xl font-[800] text-gray-900" style={{ fontSize: "72px", fontWeight: 800 }}>
        Aariya Gage
      </h1>

      {/* FlipWords line split into 2 lines */}
<div className="mt-6 text-xl text-gray-900 text-center" style={{ fontSize: "23px", fontFamily: 'InterTight', fontWeight: 500 }}>
<div className="text-xl font-medium text-gray-900 text-center" style={{ fontFamily: 'InterTight' }}>
  <span>I build </span>
  <FlipWords
    words={['fast', 'clean', 'scalable']}
    className="inline-block"
    duration={500}
  />
  <span> apps —</span>
</div>
  <p className="mt-1 font-normal text-gray-700">
    focused on performance, simplicity, and real-world impact.
  </p>
</div>


<div className="mt-6 flex justify-center items-center text-[36px] text-gray-900">
  <motion.a
    href="https://www.linkedin.com/in/aariya-gage-88468924a/"
    target="_blank"
    whileHover={{ y: -6 }}
    className="inline-block"
    style={{ marginRight: '20px' }}
  >
    <i className="ri-linkedin-fill"></i>
  </motion.a>
  <motion.a
    href="https://github.com/aariyagage"
    target="_blank"
    whileHover={{ y: -6 }}
    className="inline-block"
    style={{ marginRight: '20px' }}
  >
    <i className="ri-github-fill"></i>
  </motion.a>
  <motion.a
    href="mailto:aariyagage@gmail.com"
    whileHover={{ y: -6 }}
    className="inline-block"
    style={{ marginRight: '20px' }}
  >
    <i className="ri-mail-fill"></i>
  </motion.a>
  <motion.a
    href="https://brevityapp.vercel.app"
    target="_blank"
    whileHover={{ y: -6 }}
    className="inline-block"
  >
    <i className="ri-global-line"></i>
  </motion.a>
</div>
    </section>
  )
}
