'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, GraduationCap, Code2, Rocket, User, Target, Linkedin } from 'lucide-react';

const experiences = [
  {
    company: 'Copart',
    role: 'Product Manager',
    date: 'Mar 2023 - Present',
    location: 'Dallas, TX',
    points: [
      'Addressed declining buyer engagement in auction flows, increasing conversion by 15% and generating $2M+ incremental revenue.',
      'Completed product lifecycle for 25+ marketplace features, prioritizing roadmap initiatives in an Agile environment.',
      'Scaled product capabilities across five international markets (UK, Oman, Bahrain, Spain, Finland).',
      'Accelerated enterprise insurer integrations from discovery to production launch via PRDs and Guidewire ClaimCenter Cloud workflows.'
    ]
  },
  {
    company: 'Cipla Ltd.',
    role: 'Business Analyst (Product & Analytics)',
    date: 'Nov 2019 - Nov 2021',
    location: 'Mumbai, IN',
    points: [
      'Increased targeted medicine sales by 40% within six months through KPI-driven dashboards.',
      'Enabled strategic decision-making across 100+ regional offices with real-time visibility into sales performance.',
      'Reduced operational sanitization costs by $1.2M by identifying inefficiencies through data analysis.',
      'Reduced reporting latency from 24 hours to near real-time by modernizing enterprise reporting systems.'
    ]
  }
];

const projects = [
  {
    title: 'Sales Analytics Dashboard',
    link: 'https://github.com/prithvi1811/sales-analytics-dashboard',
    description: 'End-to-end BI pipeline with ETL, data modeling, and Tableau dashboard.'
  },
  {
    title: 'GitHub Repository AI Chatbot',
    link: 'https://github.com/prithvi1811/github-repo-ai-chatbot',
    description: 'Built an AI chatbot that indexes GitHub repositories and answers questions using RAG and a local LLM (Llama3 via Ollama) with a Streamlit UI.'
  },
  {
    title: 'Used Car Price Prediction',
    link: 'https://github.com/prithvi1811/Used-Car-Price-Prediction-',
    description: 'Machine learning model for automated pricing decisions.'
  },
  {
    title: 'Automated Bulk Email',
    link: 'https://github.com/prithvi1811/Automation-on-Sending-Bulk-Email-',
    description: 'Growth and Ops automation script for scaled outreach.'
  },
  {
    title: 'Telecom Churn Prediction',
    link: 'https://github.com/prithvi1811/Telecom-churn-prediction',
    description: 'Predictive analytics model to identify customer churn risks.'
  }
];

const skills = {
  pm: ['Product Strategy', 'Roadmapping', 'A/B Testing', 'Marketplace Optimization', 'Enterprise Integrations'],
  tech: ['SQL', 'Python', 'Snowflake', 'AWS', 'Guidewire'],
  ai: ['LLMs', 'RAG', 'Vector Databases', 'LangChain', 'Embeddings', 'AI Product Prototyping']
};

export default function Resume() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-4 md:px-8 text-white z-20">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Summary & Roles Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Summary */}
          <div className="group relative p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md overflow-hidden hover:bg-zinc-800/40 transition-colors duration-500 flex flex-col justify-between">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-zinc-500" size={24} />
                <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500">Summary</h3>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Product Manager driving marketplace and platform initiatives across multi-million-dollar transaction systems. Delivered $2M+ revenue impact, 15% conversion lift, and 35% operational efficiency gains through experimentation, enterprise integrations, and data-driven product strategy. Experienced in building AI-powered product prototypes using LLMs, vector search, and retrieval-based architectures.
              </p>
            </div>
            <a href="https://www.linkedin.com/in/prithvishaktichauhan/" target="_blank" rel="noreferrer" className="relative z-10 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#0A66C2] px-6 py-3 rounded-xl hover:bg-[#004182] transition-colors w-fit">
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Roles of Interest */}
          <div className="group relative p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md overflow-hidden hover:bg-zinc-800/40 transition-colors duration-500">
             <div className="flex items-center gap-3 mb-8">
              <Target className="text-zinc-500" size={24} />
              <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500">Target Roles</h3>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {['Senior Product Manager', 'Product Manager', 'Technical Product Manager', 'AI Product Manager', 'Data Product Manager', 'Business Analyst (Product)'].map((role, i) => (
                <span key={i} className="px-4 py-2.5 bg-zinc-900 border border-zinc-700/50 hover:border-zinc-500 transition-colors rounded-xl text-sm text-zinc-200 font-medium tracking-wide shadow-sm cursor-default">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-zinc-500" size={24} />
            <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500">
              Professional Experience
            </h3>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md overflow-hidden hover:bg-zinc-800/40 transition-colors duration-500"
              >
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4 relative z-10">
                  <div>
                    <h4 className="text-2xl font-semibold tracking-tight text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-zinc-400 font-medium">{exp.company} <span className="mx-2 text-zinc-700">•</span> {exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full px-4 py-2 bg-zinc-900/50 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="space-y-3 relative z-10">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-zinc-400 text-sm leading-relaxed flex items-start">
                      <span className="text-zinc-600 mr-3 mt-1.5 text-xs">◆</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="text-zinc-500" size={24} />
            <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500">
              Selected Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="group relative p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md overflow-hidden hover:bg-zinc-800/40 transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <Code2 className="text-zinc-500" size={24} />
                  <a href={project.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight strokeWidth={1.5} size={18} />
                  </a>
                </div>
                <h4 className="text-xl font-semibold mb-3 tracking-tight text-white">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-8">Technical Arsenal</h3>
            <div className="space-y-6">
              <div>
                <h5 className="text-white text-sm font-semibold mb-3">Product & Strategy</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.pm.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-white text-sm font-semibold mb-3">Core Tech</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.tech.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-white text-sm font-semibold mb-3">AI & ML</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-zinc-500" size={24} />
              <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/10 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-1">M.S. Business Analytics</h4>
                <p className="text-sm text-zinc-400 mb-3">University of Texas at Dallas</p>
                <p className="text-xs font-mono text-zinc-500">Jan 2022 - Dec 2023</p>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/10 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-1">B.Tech Civil Engineering</h4>
                <p className="text-sm text-zinc-400 mb-3">Manipal University Jaipur, India</p>
                <p className="text-xs font-mono text-zinc-500">Apr 2015 - Jul 2019</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
