export default function Projects() {
    return (
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-medium">Company Insights Dashboard</h3>
            <p className="text-gray-600 mt-2">
              A backend data analysis tool that compares public interest and stock trends using Google Trends, Yahoo Finance,
              and Gemini-powered sentiment modeling. Built with Flask, Pandas, and REST APIs.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
              <li>Generated executive summaries with 4+ Flask APIs for trend detection</li>
              <li>Validated stock tickers, handled errors, and rate-limited for stability</li>
              <li>
                <a href="https://github.com/aariyagage/company-insights-dashboard" target="_blank" className="underline">
                  GitHub Repo
                </a>
              </li>
            </ul>
          </div>
  
          {/* Project 2 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-medium">Ctrl+Shift</h3>
            <p className="text-gray-600 mt-2">
              A lightweight terminal tool and Flask API for extracting Google Trends data in under 10 seconds.
              Built using PyTrends, Pandas, and designed for rapid use with zero setup.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
              <li>Cleaned & returned JSON/tabular outputs with 90% less boilerplate</li>
              <li>Automated keyword tracking, reduced manual trend research time by 70%</li>
              <li>
                <a href="https://github.com/aariyagage/ctrlshift" target="_blank" className="underline">
                  GitHub Repo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
  