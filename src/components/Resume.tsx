import Link from "next/link";

const experience = [
  {
    company: "Copart",
    role: "Product Manager",
    location: "Dallas, TX",
    period: "Mar 2023–Present",
    bullets: [
      "Identified drop-offs across key auction flow steps through funnel analysis and buyer behavior reviews, then led A/B-tested UX improvements that increased buyer conversion by 15% and generated $2M+ in incremental revenue.",
      "Led rollout of platform enhancements across UK, Oman, Bahrain, Spain, and Finland by adapting pricing logic, seller workflows, and compliance-sensitive requirements for each market, helping these launches contribute roughly 10% of total GMV.",
      "Built a self-serve analytics layer and KPI framework for cross-functional teams, reducing ad-hoc reporting requests by 40% and speeding up decision-making for product, operations, and leadership stakeholders.",
      "Owned end-to-end delivery for Guidewire ClaimCenter integration work, from requirements and PRD definition through launch coordination, reducing insurer onboarding friction and improving enterprise workflow efficiency.",
      "Partnered with senior leadership to analyze product metrics, customer behavior, and business performance trends to shape roadmap priorities and support multi-quarter platform investment decisions.",
    ],
  },
  {
    company: "Cipla Ltd.",
    role: "Business Analyst (Product & Analytics)",
    location: "Mumbai, India",
    period: "Nov 2019–Nov 2021",
    bullets: [
      "Diagnosed underperformance across territories by analyzing sales trends, rep productivity, and regional demand signals, then built KPI-driven dashboards that helped drive a ~40% increase in targeted medicine sales within 6 months.",
      "Worked with stakeholders across 100+ regional offices to define business-critical KPIs, improve visibility into field performance, and support go-to-market and territory prioritization decisions.",
      "Modernized reporting workflows by building automated SQL and Python pipelines that reduced data latency from 24 hours to near real-time and removed significant manual reporting effort.",
    ],
  },
];

const selectedWork = [
  {
    title: "GitHub Repository AI Chatbot",
    period: "Personal Project · 2024",
    metric: "RAG · LLMs · Vector Search",
    metricColor: "text-blue-400",
    summary:
      "Built a working RAG chatbot that answers questions from GitHub repositories.",
    details: [
      "Problem: Developers often spend too much time manually exploring unfamiliar codebases before they can answer even basic architecture or logic questions.",
      "What I built: A Retrieval-Augmented Generation workflow that ingests repository content, chunks code and documentation, creates vector embeddings, retrieves relevant context, and generates grounded answers through an LLM-powered chat interface.",
      "How: Used LangChain orchestration, Llama3 via Ollama for inference, vector search for retrieval, and Streamlit for the interface.",
      "Impact: Reduced manual code exploration time by roughly 60% for common repo understanding tasks and created a strong hands-on prototype of an AI-native product workflow.",
    ],
    tags: ["LangChain", "Llama3", "RAG", "Vector Search", "Streamlit", "Python"],
    link: "https://github.com/prithvi1811/github-repo-ai-chatbot",
    linkLabel: "View GitHub",
  },
  {
    title: "Sales Analytics Dashboard",
    period: "Cipla · 2020–2021",
    metric: "~40% sales lift in 6 months",
    metricColor: "text-emerald-400",
    summary:
      "Built KPI-driven dashboards that turned regional sales data into actionable decisions.",
    details: [
      "Problem: Sales leadership lacked a clear view into which territories were underperforming and where conversion or adoption was breaking down.",
      "What I built: A dashboard suite tracking regional performance, product mix, territory-level trends, and sales KPIs to give leadership a real-time view into where interventions were needed.",
      "How: Combined SQL, Python, and reporting logic to structure data for ongoing business reviews and sales planning.",
      "Impact: Helped identify territory inefficiencies and prioritize action areas, contributing to an approximately 40% increase in targeted medicine sales over 6 months.",
    ],
    tags: ["SQL", "Python", "Dashboards", "KPI Design", "Go-to-Market"],
  },
  {
    title: "Automated ETL & Reporting Pipeline",
    period: "Cipla · 2020–2021",
    metric: "24 hrs → under 2 hrs",
    metricColor: "text-violet-400",
    summary:
      "Rebuilt reporting infrastructure to move from manual reporting to automated data delivery.",
    details: [
      "Problem: Reporting workflows depended heavily on manual processing, causing delays, inconsistency, and slower business response times.",
      "What I built: An automated ETL pipeline to ingest, clean, transform, and publish business data into structured reporting tables for downstream dashboarding and analysis.",
      "How: Used Python and SQL to automate repeatable data preparation logic and remove manual spreadsheet-based steps.",
      "Impact: Reduced reporting latency from 24 hours to under 2 hours and cut manual effort by about 70%, making operational data far more usable for decision-making.",
    ],
    tags: ["SQL", "Python", "ETL", "Data Pipelines", "Automation"],
  },
];

const aiCards = [
  {
    title: "Problem First",
    description:
      "I start with the user bottleneck, not the model. The strongest AI products solve a real workflow problem instead of adding AI for novelty.",
  },
  {
    title: "Workflow Fit",
    description:
      "I look for places where AI can reduce friction, speed up decisions, or remove repetitive work without forcing people into a totally new process.",
  },
  {
    title: "Trust & Quality",
    description:
      "AI output only matters if users can rely on it. I care about grounding, retrieval quality, failure handling, and making outputs usable in real-world decisions.",
  },
  {
    title: "Measure Impact",
    description:
      "I treat AI like any product investment: define the success metric, instrument the experience, and validate whether the system actually improves business outcomes.",
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
    <div className="mb-8 sm:mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 sm:mt-3 max-w-3xl text-sm sm:text-base leading-6 sm:leading-7 text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Resume() {
  return (
    <section className="bg-[#121212] px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 text-zinc-200">
      <div className="mx-auto max-w-6xl space-y-16 sm:space-y-20">
        <div>
          <SectionTitle
            eyebrow="Career"
            title="Experience"
            description="Marketplace, analytics, and enterprise platform work across product, operations, and decision systems."
          />

          <div className="space-y-4 sm:space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="rounded-lg sm:rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-6 transition hover:border-zinc-700"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {item.role} · {item.company}
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-zinc-400">{item.location}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 whitespace-nowrap">{item.period}</p>
                </div>

                <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 sm:gap-3">
                      <span className="mt-[8px] sm:mt-[10px] h-1.5 w-1.5 rounded-full bg-zinc-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected Work"
            description="Projects that show how I think through product problems, build prototypes, and create measurable business value."
          />

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {selectedWork.map((project) => (
              <div
                key={project.title}
                className="rounded-lg sm:rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-6 shadow-sm transition hover:border-zinc-700"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-zinc-400">{project.period}</p>
                </div>

                <p className={`mt-3 sm:mt-4 text-xs sm:text-sm font-medium ${project.metricColor}`}>
                  {project.metric}
                </p>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-200">
                  {project.summary}
                </p>

                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-400">
                  {project.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <div className="mt-4 sm:mt-6">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-medium text-blue-400 transition hover:text-blue-300 active:text-blue-500"
                    >
                      {project.linkLabel} →
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

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {aiCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg sm:rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-6 transition hover:border-zinc-700"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Capabilities" title="Skills" />

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-lg sm:rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-6 transition hover:border-zinc-700"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white">{column.title}</h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-300">
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

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="rounded-lg sm:rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-6 transition hover:border-zinc-700"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white">{item.school}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-300">{item.degree}</p>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-zinc-500">{item.period}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex flex-col items-start justify-between gap-3 sm:gap-4 border-t border-zinc-800 pt-6 sm:pt-8 text-xs sm:text-sm text-zinc-400 sm:flex-row sm:items-center">
          <p>Prithvi Chauhan</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="https://github.com/prithvi1811"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white active:text-zinc-300"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/prithvishaktichauhan/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white active:text-zinc-300"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
