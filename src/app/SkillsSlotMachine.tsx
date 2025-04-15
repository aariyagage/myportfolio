'use client';

import { useEffect, useState } from 'react';

const skillSets = [
  ['React', 'Vue', 'Svelte', 'Next.js'],
  ['Python', 'Java', 'C++', 'Go'],
  ['Node.js', 'Express', 'Flask', 'FastAPI'],
];

const getRandomSkill = (list: string[]) => list[Math.floor(Math.random() * list.length)];

export default function SkillsSlotMachine() {
  const [slots, setSlots] = useState(["", "", ""]);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);

    let iterations = 0;
    const spinInterval = setInterval(() => {
      setSlots([
        getRandomSkill(skillSets[0]),
        getRandomSkill(skillSets[1]),
        getRandomSkill(skillSets[2]),
      ]);
      iterations++;
      if (iterations > 15) {
        clearInterval(spinInterval);
        setSpinning(false);
      }
    }, 100);
  };

  useEffect(() => {
    spin(); // spin on load
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto text-center mt-16">
      <h2 className="text-2xl font-bold mb-4">My Tech Stack</h2>
      <div className="flex justify-center gap-6 text-2xl font-mono">
        {slots.map((slot, i) => (
          <div key={i} className="w-24 h-16 border border-gray-300 rounded-lg flex items-center justify-center bg-white shadow-inner">
            {slot || '🎰'}
          </div>
        ))}
      </div>
      <button
        onClick={spin}
        disabled={spinning}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
      >
        {spinning ? 'Spinning...' : 'Spin Again'}
      </button>
    </div>
  );
}
