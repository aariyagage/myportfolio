'use client'

import Intro from './Intro'
// import Skills from './Skills'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import Footer from './Footer'
import ResumePuzzle from './ResumePuzzle'
import { FlipWords } from '@/components/ui/flip-words';


import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="pt-24 px-6 text-black max-w-4xl mx-auto">
        <Intro />
        <Projects />
        <WorkExperience />
        <Footer />
        <ResumePuzzle />
        <FlipWords />

      </main>

      {/* Floating Dock pinned to bottom center */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[999]">
      </div>
    </>
  )
}
