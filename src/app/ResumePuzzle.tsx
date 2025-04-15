'use client'

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

import { useState, useEffect } from 'react'

const correctOrder = ['R', 'E', 'S', 'U', 'M', 'E']

const getShuffled = (array: string[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function ResumePuzzle() {
  const [letters, setLetters] = useState(() => getShuffled(correctOrder))
  const [completed, setCompleted] = useState(false)

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const updated = [...letters]
    const [moved] = updated.splice(result.source.index, 1)
    updated.splice(result.destination.index, 0, moved)
    setLetters(updated)
  }

  useEffect(() => {
    if (letters.join('') === correctOrder.join('')) {
      setCompleted(true)
      setTimeout(() => {
        window.open('/Aariya_Gage_Resume.pdf', '_blank')
      }, 600)
    }
  }, [letters])

  return (
    <div className="mt-10 flex flex-col items-center">
      <p className="text-md mb-2 font-medium">
        🔓 Drag the letters to spell <span className="font-bold">RESUME</span>
      </p>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="resume-letters" direction="horizontal" isDropDisabled={false}>
          {(provided) => (
            <div
              className="flex gap-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {letters.map((letter, index) => (
                <Draggable
                  key={`${letter}-${index}`}
                  draggableId={`${letter}-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-md text-xl font-bold cursor-grab shadow-md select-none"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {letter}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {completed && (
        <p className="text-green-600 mt-4 font-semibold">✅ Resume unlocked!</p>
      )}
    </div>
  )
}
