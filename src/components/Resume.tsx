import Link from "next/link";
import CaseStudyCard from "./CaseStudyCard";
import FailureCard from "./FailureCard";
import FrameworkCard from "./FrameworkCard";

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

const caseStudies = [
  {
    title: "Copart Buyer Conversion Optimization",
    period: "Copart · 2023–2024",
    metric: "15% conversion lift | $2M+ revenue impact",
    metricColor: "text-blue-400",
    summary: "Diagnosed and fixed auction flow bottlenecks through systematic funnel analysis.",
    tags: ["A/B Testing", "Funnel Analysis", "UX Optimization", "User Research", "Analytics"],
    link: "https://www.copart.com",
    linkLabel: "Copart Platform",
    steps: [
      {
        label: "Problem Discovery",
        content: "Through funnel analysis of 500K+ buyer sessions, identified critical drop-offs: 40% abandoned during payment flow, 25% at confirmation. User interviews revealed friction points: unclear pricing, unexpected fees, long load times on mobile.",
      },
      {
        label: "Research & Hypothesis",
        content: "Analyzed competitor checkout flows (CarGurus, Manheim). Hypothesized that showing fees upfront + mobile optimization would reduce abandonment. Set success metric: 3-5% conversion improvement within 6 weeks.",
      },
      {
        label: "Solution Design",
        content: "Designed 3 variations: (A) Fee transparency at cart entry, (B) Streamlined mobile flow with one-page checkout, (C) Social proof + urgency indicators. Worked with eng & design to build variations within 3-week sprint.",
      },
      {
        label: "Validation & Impact",
        content: "Ran 4-week A/B test with 200K buyers. Variation B won: 15% higher conversion, 12% reduced cart abandonment. Extrapolated: $2M+ incremental annual revenue from this cohort alone.",
      },
      {
        label: "Key Learnings",
        content: "Mobile-first matters more than feature richness. Removing optional fields (even 'optional ones') had outsized impact. Built repeatable funnel analysis framework now used by 8+ teams for feature prioritization.",
      },
    ],
  },
  {
    title: "Cipla Sales Analytics & Territory Optimization",
    period: "Cipla · 2020–2021",
    metric: "~40% sales lift | 6-month impact",
    metricColor: "text-emerald-400",
    summary: "Transformed regional sales visibility from static reports to real-time dashboards driving territory decisions.",
    tags: ["Data Analytics", "SQL", "Python", "Dashboards", "Go-to-Market"],
    steps: [
      {
        label: "Problem Discovery",
        content: "Sales leadership had no visibility into territory performance. Monthly reports came 2 weeks late, static (no ability to drill down), and didn't highlight anomalies. Regional teams guessed on priorities. Lost competitive bids due to slow intelligence.",
      },
      {
        label: "Research Phase",
        content: "Interviewed 15 sales leaders, 30 regional reps across 5 zones. Key insight: they needed real-time territory ranking + early warning signs (declining competitor win rates, emerging substitute products). Current sources: Excel sheets + WhatsApp groups.",
      },
      {
        label: "Solution Built",
        content: "Created dashboard suite: Territory Performance (weekly metrics, rank by growth), Sales Effectiveness (rep productivity, conversion by product), Competitive Watch (win/loss rates by competitor). Built on SQL queries + Python transformations, automated daily refresh.",
      },
      {
        label: "Deployment & Impact",
        content: "Rolled out to 50 regional managers in 2 phases. Within 3 months: territories identified underperformance earlier, reallocated reps to high-potential zones. Result: ~40% increase in targeted medicine category sales over 6 months, $500K+ revenue impact.",
      },
      {
        label: "Key Learning",
        content: "Speed of insight beats perfection of analysis. Dashboard launched at 70% completeness; teams' feedback improved it faster than me designing in isolation. Also learned: change management matters—had to retrain teams on interpreting metrics.",
      },
    ],
  },
  {
    title: "GitHub Repository AI Chatbot (RAG System)",
    period: "Personal Project · 2024",
    metric: "60% reduction in exploration time",
    metricColor: "text-blue-400",
    summary: "Built an LLM-powered system that answers codebase questions using retrieval-augmented generation.",
    tags: ["LangChain", "Llama3", "RAG", "Vector Search", "Streamlit", "Python"],
    link: "https://github.com/prithvi1811/github-repo-ai-chatbot",
    linkLabel: "View GitHub Repo",
    steps: [
      {
        label: "Problem Identified",
        content: "Developers spend 60%+ of onboarding time manually exploring unfamiliar codebases to answer basic questions: 'How does auth work?' 'Where are API routes?' 'What's the data model?'. Current solution: grep + reading, no context.",
      },
      {
        label: "Solution Design",
        content: "Built a RAG (Retrieval-Augmented Generation) system: ingest repo → chunk code/docs → create embeddings → store in vector DB → on query, retrieve relevant chunks → feed to LLM with context → generate grounded answers. Stack: LangChain, Llama3, FAISS, Streamlit.",
      },
      {
        label: "Implementation",
        content: "Ingests GitHub repos, extracts code files + documentation, splits into semantic chunks (150-token windows). Uses embedding model to vectorize. At query time: embed user question, retrieve top-5 similar chunks, pass to Llama3 with context. 2-second response time.",
      },
      {
        label: "Validation & Results",
        content: "Tested on 5 open-source repos (FastAPI, LangChain, Pydantic). Metrics: 85% answer accuracy vs human review, 60% time savings vs manual exploration. Hallucination rate <5% with proper grounding. Users report: accurate, faster than grep-based approach.",
      },
      {
        label: "Product Thinking",
        content: "This is where I test my AI product philosophy. 'Problem First': solved real developer pain. 'Workflow Fit': integrated into IDE mindset. 'Trust & Quality': grounding prevents hallucinations via retrieval. 'Measure Impact': quantified time savings. Living example of AI-native product thinking.",
      },
    ],
  },
];

const failures = [
  {
    title: "Market Expansion That Wasn't Needed",
    situation: "At Copart, pitched expanding to 3 new markets simultaneously based on revenue projections. Built roadmaps, secured budget, started hiring. After 6 weeks of execution, competitor data showed our timing was wrong—market seasonality would've killed Q3 performance. Had to pause 2 of 3 markets.",
    lesson: "Quantified projections aren't predictions. I optimized for revenue size without validating market timing, competitor saturation, or seasonal patterns. Lesson: hypothesis-first, not just metrics-first.",
    application: "Now always stress-test assumptions with 3 external data sources before greenlight. For the Guidewire integration (later project), validated 5 different use cases with 20 customers before committing engineering resources.",
  },
  {
    title: "Over-engineering a Dashboard",
    situation: "Built an ultra-comprehensive sales dashboard with 50+ KPIs, custom drill-downs, ML predictions. Took 8 weeks. Team started using... 3 KPIs. Turns out they just needed weekly territory ranking, not deep analysis.",
    lesson: "Feature parity ≠ user adoption. I was optimizing for 'what could be useful' instead of 'what solves their immediate pain.' Result: 85% unused features, technical debt, slower iterations.",
    application: "Now start MVP with 1 metric, validate it drives decisions, then expand. Recent analytics framework at Copart: launched with 3 core KPIs, users adopted instantly, then requested specific drill-downs (which I built iteratively).",
  },
  {
    title: "Misjudged International Market Complexity",
    situation: "Copart UK launch underestimated regulatory complexity. Planned 4-month rollout, ended up being 8 months. Pricing logic, seller workflows, compliance requirements were entangled. Delayed revenue impact by half.",
    lesson: "Markets that look similar (UK vs. US) can have drastically different operational requirements. I'd modeled them as 'variations' instead of 'distinct systems.' Regulatory/legal should be part of the discovery, not the surprise.",
    application: "For subsequent market launches (Spain, Finland), partnered with legal/ops in week 1 (not week 6). Mapped compliance requirements upfront. Reduced variance, more predictable timelines.",
  },
];

const productFramework = [
  {
    title: "Optimize for Metrics That Matter",
    description: "Most PMs optimize for vanity metrics (DAU, clicks, page views). I prioritize revenue, retention, and user satisfaction—metrics that compound. For every feature, I define the success metric upfront.",
    example: "At Copart: instead of 'increase traffic,' I optimized for 'buyer conversion rate' and 'average transaction value.' This forced focus on quality, not volume.",
  },
  {
    title: "Validate Hypotheses, Don't Predict Markets",
    description: "Markets are unpredictable. I don't try to predict; instead, I test small, learn fast, and iterate. A/B tests, user interviews, and data analysis trump big bets.",
    example: "The Copart UX optimization started as a hypothesis about checkout friction. Instead of redesigning everything, I tested 3 variations with 5% of traffic first. Only then scaled the winner.",
  },
  {
    title: "Balance Speed & Craftsmanship",
    description: "Shipping fast with 70% quality beats shipping perfect features in 6 months. But 'fast' doesn't mean sloppy—I ensure the core experience is solid, then iterate on polish.",
    example: "GitHub RAG chatbot shipped in 4 weeks with 85% accuracy. Could've spent 2 months optimizing to 95%, but the problem was urgent and real-world feedback was more valuable than perfection.",
  },
  {
    title: "Listen to Your 3 Audiences: Users, Data, Business",
    description: "User feedback tells you problems. Data tells you magnitude. Business constraints tell you urgency. Decisions require all 3; ignoring one leads to either irrelevant products or unsustainable ones.",
    example: "Sales dashboard at Cipla: users said they wanted more metrics (problem), data showed they actually used 3 (truth), business needed faster decision cycles (urgency). Combined all 3 → focused dashboard with 3 core KPIs.",
  },
  {
    title: "Ship Impact, Not Features",
    description: "A feature isn't done until it changes user behavior or business metrics. I measure every launch: Did adoption happen? Did behavior shift? Did metrics move? If not, we iterate or kill it.",
    example: "Guidewire integration wasn't about API parity; it was about reducing insurer onboarding time from 4 weeks to 2. That was the metric. Feature shipped when that metric was proven.",
  },
];

const aiCards = [
  {
    title: "Problem First",
    description:
      "I start with the user bottleneck, not the model. The strongest AI products solve a real workflow problem instead of adding AI for novelty.",
    example: "GitHub RAG chatbot: solved the real bottleneck—developers spending 60% of onboarding time exploring codebases. The AI isn't novel; the workflow it unlocks is.",
  },
  {
    title: "Workflow Fit",
    description:
      "I look for places where AI can reduce friction, speed up decisions, or remove repetitive work without forcing people into a totally new process.",
    example: "Rather than building a separate tool, the RAG chatbot integrates into the IDE mindset developers already have. Ask a question → get an answer. No new process to learn.",
  },
  {
    title: "Trust & Quality",
    description:
      "AI output only matters if users can rely on it. I care about grounding, retrieval quality, failure handling, and making outputs usable in real-world decisions.",
    example: "RAG system uses retrieval-augmented generation—every answer is grounded in actual codebase chunks. Hallucination rate <5% because we're not letting the model fabricate; it reasons from retrieved context.",
  },
  {
    title: "Measure Impact",
    description:
      "I treat AI like any product investment: define the success metric, instrument the experience, and validate whether the system actually improves business outcomes.",
    example: "Validated RAG chatbot on 5 repos: 85% answer accuracy, 60% time savings vs. manual exploration. If the metrics didn't prove value, I'd iterate on retrieval quality or prompt engineering.",
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
            eyebrow="Career"
            title="Experience"
            description="Marketplace, analytics, and enterprise platform work across product, operations, and decision systems."
          />

          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
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
          <SectionTitle
            eyebrow="Portfolio"
            title="Case Studies"
            description="Deep dives into real problems: how I identified them, designed solutions, and measured impact."
          />

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.title}
                title={study.title}
                period={study.period}
                metric={study.metric}
                metricColor={study.metricColor}
                summary={study.summary}
                tags={study.tags}
                link={study.link}
                linkLabel={study.linkLabel}
                steps={study.steps}
              />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="Learning & Growth"
            title="Failures & Learnings"
            description="What didn't work and what I learned. Authentic product thinking includes understanding what breaks."
          />

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {failures.map((failure, idx) => (
              <FailureCard
                key={idx}
                title={failure.title}
                situation={failure.situation}
                lesson={failure.lesson}
                application={failure.application}
              />
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
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {card.description}
                </p>
                {card.example && (
                  <div className="mt-4 border-t border-zinc-800 pt-3">
                    <p className="text-xs font-semibold text-blue-400">Example:</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-300">{card.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="My Philosophy"
            title="Product Decision Framework"
            description="How I approach prioritization, validation, and impact measurement."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productFramework.map((framework) => (
              <FrameworkCard
                key={framework.title}
                title={framework.title}
                description={framework.description}
                example={framework.example}
              />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Capabilities" title="Skills" />

          <div className="grid gap-6 md:grid-cols-3">
            {skillColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
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
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
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
