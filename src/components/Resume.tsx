import Link from "next/link";

const experience = [
  {
    company: "Copart",
    role: "Product Manager",
    location: "Dallas, TX",
    period: "Mar 2023–Present",
    bullets: [
      "Led end-to-end seller integration strategy for 20 insurance carriers in 6 months, expanding inventory by 100,000+ lots across the U.S. and Canada through data-driven product management and cross-functional execution.",
      "Partnered with engineering, QA, and design to translate business needs into product requirements, prioritize backlogs, and ship marketplace workflows with minimal guidance across backend and API-dependent surfaces.",
      "Delivered AI-powered historical lot insights using machine learning signals and quantitative analysis, improving seller decision-making and contributing to a 1 million-unit increase in platform inventory.",
      "Built automated bid-limit logic across UAE, Oman, and Bahrain using country-specific rules and HTTP-based currency conversion, eliminating 5+ hours of manual operational work each day.",
      "Launched MAO 2.0 for the UK market, creating a structured seller experience for reviewing, negotiating, and accepting pre-auction offers across the full product lifecycle.",
      "Implemented Google Analytics and FullStory across buyer and seller portals, enabling UI-centric analysis, testing, experimentation, and roadmap prioritization based on behavioral data.",
      "Delivered a custom buyer configuration in 2 weeks for the largest customer account, increasing revenue from that account by 30% and strengthening go-to-market execution.",
    ],
  },
  {
    company: "Cipla Ltd.",
    role: "Business Analyst",
    location: "Mumbai, India",
    period: "Nov 2019–Nov 2021",
    bullets: [
      "Analyzed sales performance across India to identify underperforming regions and recommended targeted go-to-market actions that increased sales by 30%.",
      "Collaborated with business intelligence engineers to define quantitative metrics, build dashboards, and provide leadership with real-time visibility into regional performance.",
      "Developed the business case for bringing enterprise sanitization operations in-house, reducing operating costs by approximately USD 200,000 per quarter.",
      "Partnered with leadership on regional sales planning, segmentation, and prioritization to improve execution across commercial channels and support revenue growth.",
    ],
  },
];

const selectedWork = [
  {
    title: "Buyer Conversion Optimization",
    period: "Copart · 2023–2024",
    metric: "15% conversion lift · $2M+ revenue",
    metricColor: "text-emerald-400",
    summary:
      "Diagnosed and resolved buyer drop-offs in the auction flow through data-driven analysis and UX experimentation.",
    details: [
      "Market Context: Copart's buyer funnel was losing share to competitors. Critical insight: buyers weren't completing purchases at key decision points in the auction flow. This represented both a user experience problem and significant revenue leakage.",
      "Discovery: Conducted funnel analysis across 100K+ buyer sessions, identified drop-off hotspots, and ran user interviews with buyers who abandoned flows. Found that pricing transparency and bid confirmation friction were the primary blockers.",
      "Solution: Worked with design and engineering to redesign bid confirmation UX, add real-time pricing clarity, and streamline checkout. Structured multi-variant A/B tests to validate each change.",
      "Process: Led cross-functional collaboration with 6-person engineering team and design partner. Defined success metrics (conversion rate, revenue per buyer, abandonment rate). Ran 3 sequential test cycles over 4 months, each iteration informed by user feedback and data.",
      "Impact: 15% conversion lift, $2M+ incremental annual revenue, reduced checkout abandonment by 28%. Results scaled across all buyer segments. Became the template for future optimization work.",
    ],
    tags: ["A/B Testing", "Funnel Analysis", "UX Research", "Marketplace Optimization", "Revenue Impact"],
  },
  {
    title: "International Marketplace Expansion",
    period: "Copart · 2023–2024",
    metric: "10% of total GMV · 5 new markets",
    metricColor: "text-blue-400",
    summary:
      "Scaled the auction platform to 5 new international markets with localized pricing, compliance, and workflows.",
    details: [
      "Market Context: Copart's GMV was concentrated in the US, limiting growth. Competitive intelligence showed buyers and sellers in UK, Oman, Bahrain, Spain, and Finland had unmet demand. Strategic goal: diversify revenue and unlock new liquidity.",
      "Discovery: Worked with regional sales teams to understand market dynamics, compliance requirements, and local seller/buyer workflows. Analyzed competitor approaches and regulatory constraints in each territory.",
      "Solution: Built an adaptable platform model with region-specific pricing logic, localized seller workflows, and compliance-sensitive requirements. Designed KPI frameworks to measure liquidity health by market.",
      "Process: Led 3-month market entry planning with legal, operations, and regional teams. Created playbook for each market launch. Managed regulatory alignment, phased rollouts, and post-launch optimization.",
      "Team Collaboration: Partnered with 12+ stakeholders (legal, operations, regional leadership) to unblock compliance, localization, and go-to-market. Escalated blockers to leadership and negotiated cross-team priorities.",
      "Impact: Launches contributed 10% of total GMV within first year. Established playbook for future international expansion. Reduced market entry friction and onboarding time by 40% vs. initial estimates.",
    ],
    tags: ["Marketplace Strategy", "International Expansion", "Regulatory Compliance", "Cross-Functional Leadership", "Platform Localization"],
  },
  {
    title: "Analytics & KPI Framework",
    period: "Copart · 2023–Present",
    metric: "40% reduction in ad-hoc requests",
    metricColor: "text-violet-400",
    summary:
      "Built a self-serve analytics layer and KPI framework that transformed how cross-functional teams make decisions.",
    details: [
      "Problem: Product, operations, and leadership teams were drowning in ad-hoc data requests. No standardized KPI definition meant misaligned priorities. Decision-making was slow and data quality was inconsistent.",
      "Discovery: Interviewed 20+ stakeholders to understand their decision workflows, KPI needs, and reporting pain points. Found that teams were making decisions on different metrics, causing misalignment.",
      "Solution: Designed a unified KPI framework with clear definitions, calculation logic, and business context. Built a self-serve analytics layer (Snowflake + reporting tools) that exposed critical metrics to all teams.",
      "Process: Defined 8 core KPI clusters (buyer funnel, seller efficiency, marketplace health, revenue). Worked with stakeholders to agree on metrics and cadence. Built documentation and training to drive adoption.",
      "Impact: Reduced ad-hoc reporting requests by 40%. Teams now have real-time visibility into metrics. Decision-making velocity increased by ~30%. Framework became the single source of truth for business metrics.",
    ],
    tags: ["Analytics Design", "KPI Framework", "Metrics", "Data Infrastructure", "Stakeholder Alignment"],
  },
  {
    title: "GitHub Repository AI Chatbot",
    period: "Personal Project · 2024",
    metric: "RAG · LLMs · Vector Search",
    metricColor: "text-blue-300",
    summary:
      "Built and shipped a working RAG chatbot that answers questions from GitHub repositories.",
    details: [
      "Problem: Developers spend significant time manually exploring unfamiliar codebases before they can answer basic architecture or logic questions.",
      "Solution: Built a Retrieval-Augmented Generation workflow that ingests repository content, chunks code and documentation, creates vector embeddings, retrieves relevant context, and generates grounded answers via LLM.",
      "Implementation: Used LangChain for orchestration, Llama3 via Ollama for inference, vector search for context retrieval, and Streamlit for the interface.",
      "Impact: Reduced manual code exploration time by ~60% for common repo understanding tasks. Created a strong hands-on prototype demonstrating an AI-native product workflow in action.",
    ],
    tags: ["LangChain", "Llama3", "RAG", "Vector Search", "Streamlit", "AI Product"],
    link: "https://github.com/prithvi1811/github-repo-ai-chatbot",
    linkLabel: "View GitHub",
  },
];

const marketplaceStrategy = [
  {
    title: "Network Effects & Liquidity",
    description:
      "I focus on balancing supply and demand-side dynamics. Success means having enough quality sellers to attract buyers, and enough active buyers to motivate sellers—it's a virtuous cycle that breaks if either side stalls.",
  },
  {
    title: "Unit Economics Matter",
    description:
      "I obsess over unit-level profitability—cost per transaction, buyer acquisition cost, seller churn. Marketplace math is unforgiving; negative unit economics don't scale, no matter the volume.",
  },
  {
    title: "Regional & Segment Strategy",
    description:
      "Different markets have different dynamics. I prioritize understanding regional constraints (compliance, buyer behavior, competition) and tailor product, pricing, and GTM accordingly.",
  },
  {
    title: "Seller & Buyer Alignment",
    description:
      "Pricing, fees, and workflows need to feel fair to both sides. If sellers feel squeezed or buyers feel overcharged, the marketplace loses trust. I design for transparent, aligned incentives.",
  },
];

const productMethodology = [
  {
    title: "Discovery First",
    description:
      "User interviews, data analysis, and market research before anything else. I need to understand the real problem before I can design a solution. Assumptions are expensive; evidence is cheap.",
  },
  {
    title: "Hypothesis-Driven Experimentation",
    description:
      "Every product decision is a hypothesis. I define success metrics upfront, run controlled experiments (A/B tests, cohort analysis), and let data validate or falsify my assumptions.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "Product lives at the intersection of user needs, technical constraints, and business goals. I partner closely with design, engineering, data, and ops teams—not to align them, but to solve together.",
  },
  {
    title: "Measure, Learn, Iterate",
    description:
      "Shipping is not the end; it's the beginning. I instrument everything, measure impact against defined KPIs, and use learnings to inform the next cycle. Product is never done.",
  },
];

const learnings = [
  {
    title: "When Fast Shipping Beats Perfect Planning",
    description:
      "Early in my Copart experience, I spent 6 weeks perfecting a complex feature spec before building. Learned lesson: ship a simple version in 2 weeks, gather real user feedback, iterate faster. Shipped > Perfect.",
    context: "Copart marketplace feature launch",
  },
  {
    title: "Seller Incentives Trump Interface Design",
    description:
      "We redesigned seller dashboards beautifully but adoption stayed low. Root cause: sellers had no incentive to use them—they weren't generating more sales. I learned: align incentives first, design second. Now I ask 'why would users care?' before building.",
    context: "Copart seller-side optimization",
  },
  {
    title: "Compliance and Product Velocity Are Tension Points",
    description:
      "International expansion taught me that regulatory constraints force trade-offs. A feature that works in the US might be illegal elsewhere. I learned to involve legal earlier, design for flexibility, and be realistic about velocity in regulated markets.",
    context: "International marketplace expansion",
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
      "Product Discovery",
      "Roadmapping & Prioritization",
      "MVP Definition",
      "Product Lifecycle",
      "Agile & Scrum",
      "Stakeholder Management",
    ],
  },
  {
    title: "Analytics & Experimentation",
    skills: [
      "SQL",
      "Python",
      "A/B Testing & Experimentation",
      "Amplitude",
      "Attribution, LTV & CAC",
      "Google Analytics & FullStory",
      "Data-Driven Decision Making",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLMs",
      "Retrieval Augmented Generation (RAG)",
      "LangChain",
      "LlamaIndex",
      "FAISS Vector Search",
      "Llama3",
      "AI Product Prototyping",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "Tableau",
      "Power BI",
      "Guidewire",
      "Snowflake",
    ],
  },
];

const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "Certified ScrumMaster (CSM)",
  "Python for Data Science, AI & Development",
  "Data Analysis with R Programming",
  "Tableau Essential Training",
  "Introduction to R",
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
            title="Selected Work"
            description="Projects that show how I think through product problems, build prototypes, and create measurable business value."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {selectedWork.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm transition hover:border-zinc-700"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{project.period}</p>
                </div>

                <p className={`mt-4 text-sm font-medium ${project.metricColor}`}>
                  {project.metric}
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-200">
                  {project.summary}
                </p>

                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                  {project.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>

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
            eyebrow="Marketplace Thinking"
            title="How I Approach Marketplace Product"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {marketplaceStrategy.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
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
          <SectionTitle
            eyebrow="Process & Methodology"
            title="How I Ship Product"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {productMethodology.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
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
          <SectionTitle
            eyebrow="Learning & Growth"
            title="Failures That Shaped My Thinking"
            description="The mistakes that taught me the most about product strategy and execution."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {learnings.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
                <p className="mt-4 text-xs text-zinc-500">{item.context}</p>
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
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700"
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
          <SectionTitle eyebrow="Capabilities" title="Skills" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        <div>
          <SectionTitle eyebrow="Credentials" title="Certifications" />

          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300"
              >
                {cert}
              </span>
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
