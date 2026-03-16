'use client';

import { Github, Linkedin } from 'lucide-react';

export default function Resume() {
  return (
    <section className="bg-[#121212] text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Selected Work */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">Selected Work</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/40">
              <h3 className="text-xl font-semibold">AI Repository Chatbot</h3>
              <p className="mt-3 text-zinc-400">
                Built a chatbot that answers questions about GitHub repositories using
                retrieval-augmented generation, embeddings, and vector search.
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                Demonstrates how AI can reduce time spent navigating large codebases
                and improve developer productivity.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/40">
              <h3 className="text-xl font-semibold">Sales Analytics Dashboard</h3>
              <p className="mt-3 text-zinc-400">
                Designed an analytics pipeline and dashboards that track marketplace
                performance, operational KPIs, and revenue trends.
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                Enabled faster reporting and improved product decision visibility.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/40">
              <h3 className="text-xl font-semibold">Automated ETL Pipeline</h3>
              <p className="mt-3 text-zinc-400">
                Built automated data workflows using SQL and Python to reduce manual
                reporting effort and improve data reliability.
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                Reduced analyst workload and improved consistency of business reporting.
              </p>
            </div>

          </div>
        </div>


        {/* AI Product Thinking */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">
            How I Think About AI Products
          </h2>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8">

            <p className="text-zinc-400 max-w-4xl mb-8 leading-7">
              I focus on building AI products that solve real workflow problems.
              My approach is to identify where AI can reduce friction, automate
              repetitive work, and improve decision quality while maintaining
              user trust and transparency.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-lg font-semibold">Problem First</h3>
                <p className="mt-2 text-zinc-400 text-sm">
                  Start with a real user pain point and determine where AI
                  meaningfully improves the experience.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-lg font-semibold">Workflow Fit</h3>
                <p className="mt-2 text-zinc-400 text-sm">
                  AI should fit naturally in the user journey as a copilot,
                  recommendation engine, or automation layer.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-lg font-semibold">Trust & Quality</h3>
                <p className="mt-2 text-zinc-400 text-sm">
                  Focus on output quality, explainability, and appropriate
                  human oversight when necessary.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-lg font-semibold">Measure Impact</h3>
                <p className="mt-2 text-zinc-400 text-sm">
                  Evaluate success using metrics like task completion time,
                  adoption rate, usefulness, and business outcomes.
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* Experience */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">Experience</h2>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Product Manager — Copart</h3>
              <p className="text-zinc-400">Dallas, TX • Mar 2023 – Present</p>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>• Improved buyer engagement across auction flows leading to a 15% conversion lift.</li>
                <li>• Delivered 25+ marketplace and platform features across auction workflows.</li>
                <li>• Partnered with engineering and operations teams to prioritize product roadmap initiatives.</li>
                <li>• Scaled product capabilities across UK, Spain, Finland, Oman, and Bahrain markets.</li>
                <li>• Led enterprise insurer integrations from discovery through production launch.</li>
                <li>• Used SQL dashboards to analyze feature performance and guide product decisions.</li>
                <li>• Improved internal operational tools for marketplace teams.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Business Analyst — Cipla</h3>
              <p className="text-zinc-400">Mumbai, India • Nov 2019 – Nov 2021</p>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>• Increased targeted medicine sales by 40% using analytics dashboards.</li>
                <li>• Built reporting tools that supported product and sales strategy.</li>
                <li>• Automated reporting workflows using SQL and Excel.</li>
                <li>• Identified growth opportunities using sales performance analysis.</li>
                <li>• Delivered KPI dashboards for leadership decision-making.</li>
              </ul>
            </div>

          </div>
        </div>


        {/* Skills */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8 text-zinc-300">

            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li>Product Strategy</li>
                <li>Roadmapping</li>
                <li>A/B Testing</li>
                <li>Stakeholder Management</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Data</h3>
              <ul className="space-y-2">
                <li>SQL</li>
                <li>Python</li>
                <li>ETL Pipelines</li>
                <li>Tableau</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">AI</h3>
              <ul className="space-y-2">
                <li>LLMs</li>
                <li>RAG</li>
                <li>Vector Databases</li>
                <li>LangChain</li>
              </ul>
            </div>

          </div>
        </div>


        {/* Links */}
        <div className="flex gap-6 pt-10 border-t border-zinc-800">

          <a
            href="https://github.com/prithvi1811"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/prithvichauhan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Linkedin size={18} /> LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}
