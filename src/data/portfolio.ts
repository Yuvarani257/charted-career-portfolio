export const github = "https://github.com/Yuvarani257";
export const linkedin = "https://www.linkedin.com/in/bevara-yuva-rani-45b66833a/";
export const projects = [
  {
    title: "AI-Assisted Enterprise Security",
    fullTitle: "AI-Assisted End-to-End Architecture for Detecting Persistent Attacks in Enterprise",
    category: "MACHINE LEARNING",
    kind: "security",
    description:
      "An intelligent approach to detecting persistent attacks through data processing and machine learning.",
    tools: ["Python", "Pandas", "Machine Learning", "REST APIs"],
    highlights: [
      "Data processing and analysis",
      "Machine learning-based detection",
      "API integration",
      "Security analytics",
      "Detection workflow optimization",
    ],
    problem:
      "Explore how intelligent data processing can support the detection of persistent threats in enterprise environments.",
    methodology:
      "Dataset processing and analysis, machine learning detection workflows, and REST API integration.",
  },
  {
    title: "Personality-Aware Recommendations",
    fullTitle: "Personality-Aware Product Recommendation System",
    category: "RECOMMENDATION SYSTEM",
    kind: "recommendation",
    description:
      "Connecting user behavior and personality patterns with more relevant product recommendations.",
    tools: ["Java", "Python", "Machine Learning"],
    highlights: [
      "User behavior analysis",
      "Supervised learning concepts",
      "Recommendation logic",
      "Personalized user experience",
      "Application development",
    ],
    problem:
      "Explore how user behavior and personality-related patterns can inform personalized product recommendations.",
    methodology:
      "Analyze user patterns, explore supervised learning concepts, and implement recommendation logic in an application.",
  },
  {
    title: "Excel Sales Dashboard",
    fullTitle: "Excel Sales Dashboard",
    category: "DATA ANALYTICS",
    kind: "excel",
    description:
      "Making business performance clear through interactive sales analysis and reporting.",
    tools: ["Excel", "Pivot Tables", "Slicers", "XLOOKUP"],
    highlights: [
      "Revenue analysis",
      "Regional sales performance",
      "Product-level analysis",
      "Sales trends",
      "Interactive reporting",
    ],
    problem:
      "Bring revenue, regional performance, and product-level sales into an accessible reporting view.",
    methodology:
      "Use Pivot Tables, Pivot Charts, Slicers, VLOOKUP, XLOOKUP, and SUMIFS to organize and explore sales data.",
  },
  {
    title: "E-Commerce BI Dashboard",
    fullTitle: "E-Commerce Business Intelligence Dashboard",
    category: "BUSINESS INTELLIGENCE",
    kind: "powerbi",
    description:
      "An interactive view of e-commerce performance, key indicators, and business insights.",
    tools: ["Power BI", "Data Modeling", "Visualization"],
    highlights: [
      "Business performance analysis",
      "KPI monitoring",
      "Interactive visualizations",
      "Data-driven reporting",
    ],
    problem:
      "Communicate e-commerce performance through accessible indicators and interactive visualizations.",
    methodology:
      "Model business data and develop visual reports that support KPI monitoring and performance analysis.",
  },
] as const;
export const skills = [
  { title: "Programming", icon: "code", items: ["Python", "Java", "C"] },
  {
    title: "Data Analytics",
    icon: "analytics",
    items: [
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Data Wrangling",
      "Statistical Analysis",
      "Feature Engineering",
      "KPI Reporting",
    ],
  },
  { title: "Databases", icon: "database", items: ["SQL", "MySQL", "PostgreSQL"] },
  {
    title: "Visualization & BI",
    icon: "chart",
    items: [
      "Microsoft Excel",
      "Power BI",
      "Pivot Tables",
      "Pivot Charts",
      "VLOOKUP",
      "XLOOKUP",
      "SUMIFS",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Libraries & Tools",
    icon: "tools",
    items: ["Pandas", "NumPy", "Git", "GitHub", "REST APIs"],
  },
  {
    title: "Beyond the Basics",
    icon: "spark",
    items: [
      "Basic Machine Learning",
      "A/B Testing Fundamentals",
      "Data Interpretation",
      "Problem Solving",
    ],
  },
];
export const certificates = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    mark: "ORACLE",
    detail: "Oracle Generative AI Professional",
  },
  {
    title: "English Certificate · C1 Advanced",
    issuer: "EF SET",
    mark: "EF SET",
    detail: "EF SET English Certificate – C1 Advanced",
  },
  {
    title: "DSA & Programming",
    issuer: "Smart Interviews",
    mark: "</>",
    detail: "Smart Interviews Certification – DSA and Programming",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    mark: "Deloitte.",
    detail: "Deloitte Data Analytics Job Simulation – Forage",
  },
];
export const articles = [
  {
    title: "SQL for Data Analysts: From Basics to Real-World Queries",
    category: "SQL",
    time: "5 min",
    intro: "A practical foundation for asking better questions of your data.",
    sections: [
      [
        "Start with a question",
        "A useful query starts with a business question, not a table. Identify the grain of the data: does one row represent an order, a customer, or an event? That decision shapes every aggregation.",
      ],
      [
        "Build the query in layers",
        "Select the necessary columns, filter with WHERE, and aggregate with GROUP BY. Use HAVING to filter grouped results. A common table expression can make a multi-step analysis easier to read.",
      ],
      [
        "Validate before sharing",
        "Check null values, duplicate identifiers, and join cardinality. Compare row counts before and after a join to avoid multiplying revenue accidentally.",
      ],
    ],
  },
  {
    title: "Exploring Data with Python and Pandas",
    category: "Python",
    time: "4 min",
    intro: "From a raw dataset to a clearer picture with a few thoughtful steps.",
    sections: [
      [
        "Understand the structure",
        "Begin with the shape, column names, and data types of your DataFrame. Inspect a small sample and a statistical summary before choosing transformations.",
      ],
      [
        "Clean with intention",
        "Investigate missing values rather than filling everything automatically. Standardize categories, parse dates, and check whether duplicates are legitimate repeated observations.",
      ],
      [
        "Explore patterns",
        "Use groupby to compare categories and simple visualizations to inspect distributions. Record assumptions and keep the original data separate from your cleaned version.",
      ],
    ],
  },
  {
    title: "Building Interactive Dashboards Using Power BI",
    category: "Power BI",
    time: "6 min",
    intro: "Designing reports that turn business questions into useful visual answers.",
    sections: [
      [
        "Model first",
        "Separate fact tables from dimension tables and define relationships carefully. A clear model makes calculations easier to maintain and filters more predictable.",
      ],
      [
        "Choose meaningful measures",
        "Define the business meaning of each KPI before writing a measure. Distinguish totals from averages and clarify the period used for comparisons.",
      ],
      [
        "Make the report readable",
        "Lead with key indicators, then trends and breakdowns. Use consistent colors, descriptive labels, and a limited set of filters. Test whether a reader can answer the original question.",
      ],
    ],
  },
  {
    title: "Excel Techniques Every Data Analyst Should Know",
    category: "Excel",
    time: "4 min",
    intro: "Small spreadsheet techniques that make everyday analysis more reliable.",
    sections: [
      [
        "Structure your workbook",
        "Use tables with clear headers and consistent types. Keep raw data, calculations, and presentation separate so changes remain traceable.",
      ],
      [
        "Analyze and look up",
        "Pivot Tables summarize large datasets quickly. XLOOKUP links related information; SUMIFS supports conditional totals. Always consider missing matches and duplicate keys.",
      ],
      [
        "Build a useful report",
        "Use slicers for exploration and charts that match the question. Reconcile dashboard totals with source data before sharing a workbook.",
      ],
    ],
  },
  {
    title: "Understanding Exploratory Data Analysis",
    category: "Data Analytics",
    time: "5 min",
    intro: "Learning what a dataset can—and cannot—tell you.",
    sections: [
      [
        "Inspect before modeling",
        "Exploratory data analysis is a process of asking questions, checking quality, and developing hypotheses. Start by understanding the context in which the data was collected.",
      ],
      [
        "Look at distributions",
        "Inspect numerical ranges, outliers, category frequencies, and missingness. A histogram or box plot can reveal patterns that an average hides.",
      ],
      [
        "Avoid premature conclusions",
        "Correlation alone does not establish causation. Document limitations, explore alternative explanations, and separate observations from recommendations.",
      ],
    ],
  },
  {
    title: "Turning Raw Data Into Business Insights",
    category: "Data Visualization",
    time: "4 min",
    intro: "Bridging the gap between an interesting chart and a meaningful decision.",
    sections: [
      [
        "Frame the decision",
        "Understand who will use the analysis and which decision it supports. Agree on metric definitions and the scope of the dataset.",
      ],
      [
        "Connect evidence to context",
        "Compare results with an appropriate baseline. Explore segments to understand whether an overall trend hides important differences.",
      ],
      [
        "Communicate clearly",
        "State the observation, explain its limitations, and describe a reasonable next step. A useful insight is understandable, relevant, and grounded in evidence.",
      ],
    ],
  },
];
export function demoMetrics(region: string) {
  const multiplier =
    region === "North" ? 0.38 : region === "South" ? 0.34 : region === "West" ? 0.28 : 1;
  return {
    revenue: Math.round(124580 * multiplier),
    orders: Math.round(1842 * multiplier),
    customers: Math.round(1264 * multiplier),
    values: [32, 47, 39, 65, 53, 78, 70, 91, 83, 110, 97, 128].map((v) =>
      Math.round(v * multiplier),
    ),
  };
}
export function validateContact(name: string, email: string, subject: string, message: string) {
  if (![name, email, subject, message].every((v) => v.trim())) return "Please complete all fields.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  return null;
}
