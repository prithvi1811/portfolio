import Link from "next/link";

const selectedWork = [
  {
    title: "GitHub Repository AI Chatbot",
    period: "Personal Project · 2024",
    metric: "RAG · LLMs · Vector Search",
    metricColor: "text-blue-400",
    description:
      "Problem: Developers struggle to understand large GitHub repositories quickly.\n\nSolution: Built a Retrieval-Augmented Generation (RAG) chatbot that chunks repositories, generates embeddings, and retrieves context-aware answers using LLMs.\n\nImpact: Reduced manual code exploration time by ~60% by enabling natural language querying over structured and unstructured code.",
    tags: ["LangChain", "Llama3", "RAG", "Vector DB", "Streamlit", "Python"],
    link: "https://github.com/prithvi1811/github-repo-ai-chatbot",
  },
  {
    title: "Sales Analytics Dashboard",
    period: "Cipla · 2020–2021",
    metric: "40% conversion improvement",
    metricColor: "text-emerald-400",
    description:
      "Problem: Sales teams lacked visibility into territory performance and buyer behavior.\n\nSolution: Designed KPI-driven dashboards tracking conversion rates, regional sales, and engagement patterns.\n\nImpact: Identified pricing inefficiencies and drop-offs, contributing to ~40% increase in conversion over 3 months through data-driven decisions.",
    tags: ["SQL", "Python", "KPI Design", "Dashboards", "Go-to-Market"],
  },
  {
    title: "Automated ETL & Reporting Pipeline",
    period: "Cipla · 2020–2021",
    metric: "24hrs → <2hr latency",
    metricColor: "text-violet-400",
    description:
      "Problem: Reporting relied on manual processes with 24-hour delays.\n\nSolution: Built automated ETL pipelines using Python and SQL to clean, transform, and structure data.\n\nImpact: Reduced reporting latency to under 2 hours and cut manual effort by ~70%.",
    tags: ["SQL", "Python", "ETL", "Data Pipelines", "Automation"],
  },
];
const aiCards = [
  {
    title: "Problem First",
    description:
      "I start with the bottleneck, not the model. The best AI products solve a painful workflow problem instead of adding AI for its own sake.",
  },
  {
    title: "Workflow Fit",
    description:
      "AI has to fit naturally into how people already work. I look for places where it speeds up decisions, reduces manual effort, or improves quality without creating friction.",
  },
  {
    title: "Trust & Quality",
    description:
      "Outputs need to be useful, explainable, and reliable enough for real teams to adopt. I care about grounding, feedback loops, and clear failure handling.",
  },
  {
    title: "Measure Impact",
    description:
      "I think about AI features like product features: define the success metric, instrument the workflow, and validate whether it improves business outcomes.",
  },
];

const experience = [
  {
    company: "Copart",
    role: "Product Manager",
    location: "Dallas, TX",
    period: "Mar 2023–Present",
bullets: [
  "Led A/B-tested UX improvements across auction flows, increasing buyer conversion by 15% and generating $2M+ incremental revenue.",
  "Rolled out platform enhancements across UK, Spain, Finland, Oman, and Bahrain by adapting pricing logic, workflows, and compliance requirements for each market.",
  "Built a self-serve analytics platform and KPI framework, reducing ad-hoc reporting requests by 40% across business teams.",
  "Led end-to-end Guidewire ClaimCenter integration, reducing insurer onboarding friction and improving enterprise workflow efficiency.",
  "Partnered with leadership to analyze product metrics and user behavior, driving roadmap decisions across multiple product initiatives.",
],
  },
  {
    company: "Cipla Ltd.",
    role: "Business Analyst (Product & Analytics)",
    location: "Mumbai, India",
    period: "Nov 2019–Nov 2021",
bullets: [
  "Built KPI-driven dashboards to identify underperforming territories, increasing targeted medicine sales by ~40% within 6 months.",
  "Partnered with stakeholders across 100+ regional offices to define KPIs and guide go-to-market strategy.",
  "Modernized reporting infrastructure with automated pipelines, reducing data latency from 24 hours to near real-time.",
],
  },
];

const skillColumns = [
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "A/B Testing & Experimentation",
      "Marketplace Optimization",
      "Enterprise Integrations",
      "KPI & Metrics Design",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLMs",
      "Retrieval Augmented Generation (RAG)",
      "Vector Databases",
      "LangChain",
      "Embeddings",
      "AI Product Prototyping",
    ],
  },
  {
    title: "Technical",
    skills: [
      "SQL",
      "Python",
      "Snowflake",
      "AWS",
      "Guidewire",
      "ETL Pipelines",
    ],
  },
];

const education = [
  {
    school: "University of Texas at Dallas",
    degree: "MS Business Analytics",
    period: "Jan 2022–Dec 2023",
  },
  {
    school: "Manipal University Jaipur",
    degree: "BTech Civil Engineering",
    period: "Apr 2015–Jul 2019",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Resume() {
  return (
    <section className="bg-[#121212] px-6 py-24 text-zinc-200 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-20">
        <div>
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected Work"
            description="A mix of AI prototyping, analytics, and platform work across product and data."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {selectedWork.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{project.period}</p>
                  </div>
                </div>

                <p className={`mt-4 text-sm font-medium ${project.metricColor}`}>
                  {project.metric}
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <div className="mt-6">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      View GitHub →
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="AI Product Thinking"
            title="How I Think About AI Products"
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {aiCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Career" title="Experience" />

          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.role} · {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.location}</p>
                  </div>
                  <p className="text-sm text-zinc-500">{item.period}</p>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-zinc-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Capabilities" title="Skills" />

          <div className="grid gap-6 md:grid-cols-3">
            {skillColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                  {column.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Academics" title="Education" />

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.degree}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.period}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-400 sm:flex-row sm:items-center">
          <p>Prithvi Chauhan</p>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/prithvi1811"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/prithvishaktichauhan/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
