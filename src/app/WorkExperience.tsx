export default function WorkExperience() {
    return (
      <section id="work_section" className="py-24">
        <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-medium">Co-Founder @ Brev</h3>
            <p className="text-gray-600 text-sm mt-1">Sep 2024 – Present</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
              <li>Built an AI study tool used by 2,000+ students using Node.js, React, MongoDB</li>
              <li>Led QA testing with Playwright, reducing post-release bugs by 40%</li>
              <li>Scaled backend to support real-time NLP scoring & cheat sheet generation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Front Desk Assistant @ ASU University Housing</h3>
            <p className="text-gray-600 text-sm mt-1">Aug 2023 – Present</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
              <li>Supported 1,500+ residents with in-person help and admin support</li>
              <li>Balanced hospitality with safety protocol enforcement</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">UI/UX Intern @ Home Revise Education (India)</h3>
            <p className="text-gray-600 text-sm mt-1">Oct 2021 – May 2022</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
              <li>Designed 50+ wireframes for a high school edtech mobile app</li>
              <li>Improved onboarding & dashboard usability across platforms</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }