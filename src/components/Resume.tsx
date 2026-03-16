'use client';

import { Github, Linkedin } from 'lucide-react';

export default function Resume() {
  return (
    <section className="bg-[#121212] text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Selected Work */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">Selected Work</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold">GitHub Repository AI Chatbot</h3>
              <p className="mt-3 text-zinc-400">
                Built a chatbot that answers questions about a GitHub repository using
                Retrieval Augmented Generation (RAG), embeddings, and vector search.
              </p>
              <p className="mt-3 text-zinc-500 text-sm">
                Demonstrates practical AI product thinking and reduces time spent
                searching across large codebases.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold">Sales Analytics Dashboard</h3>
              <p className="mt-3 text-zinc-400">
                Designed an end-to-end BI pipeline with ETL workflows and Tableau dashboards
                to track marketplace performance and operational metrics.
              </p>
              <p className="mt-3 text-zinc-500 text-sm">
                Enabled faster reporting and improved decision visibility across teams.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold">Automated ETL Pipeline</h3>
              <p className="mt-3 text-zinc-400">
                Built automated data workflows using SQL and Python to reduce manual
                reporting processes and improve data reliability.
              </p>
              <p className="mt-3 text-zinc-500 text-sm">
                Reduced analyst workload and improved consistency of business reporting.
              </p>
            </div>

          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">Experience</h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold">Product Manager — Copart</h3>
              <p className="text-zinc-400">Dallas, TX • 2023 – Present</p>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>• Improved buyer engagement across auction flows leading to a 15% conversion lift.</li>
                <li>• Delivered 25+ marketplace and platform features in cross-functional agile teams.</li>
                <li>• Scaled product capabilities across global markets including UK, Oman, Bahrain, Spain and Finland.</li>
                <li>• Led enterprise insurer integrations from discovery through production launch.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Business Analyst — Cipla</h3>
              <p className="text-zinc-400">Mumbai, India • 2019 – 2021</p>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>• Increased targeted medicine sales by 40% through analytics dashboards.</li>
                <li>• Built reporting tools to improve product strategy and operational decisions.</li>
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
                <li>Cross-functional Leadership</li>
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
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/prithvi1811"
            target="_blank"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
