import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Database, BarChart2, LineChart, Code2 } from "lucide-react";

const categories = ["All", "SQL", "Tableau", "Power BI", "Python"];

const projects = [
  {
    id: 1,
    title: "Data Exploration in SQL",
    description:
      "Analyzed raw data using SQL queries to identify trends, patterns, and insights for decision-making.",
    category: "SQL",
    icon: Database,
    tools: ["SQL", "MySQL", "Data Analysis"],
    impact: "Uncovered key business trends leading to 15% improved decision accuracy",
    link: "https://github.com/amreenshaikh2224/DataExploration/blob/main/Exploration.sql",
  },
  {
    id: 2,
    title: "Data Cleaning in SQL",
    description:
      "Cleaned and prepared data by handling missing values, duplicates, and inconsistencies for accurate analysis.",
    category: "SQL",
    icon: Database,
    tools: ["SQL", "Data Quality", "ETL"],
    impact: "Improved data quality by 40% across multiple datasets",
    link: "https://github.com/amreenshaikh2224/Data_Analyst/blob/main/Data_Cleaning.sql",
  },
  {
    id: 3,
    title: "Tableau Dashboard Project",
    description:
      "Built interactive dashboards to visualize KPIs and key insights in a clear, user-friendly way.",
    category: "Tableau",
    icon: BarChart2,
    tools: ["Tableau", "Data Visualization", "KPI Design"],
    impact: "Reduced reporting time by 60% with automated dashboards",
    link: "https://public.tableau.com/app/profile/amreen.shaikh7022/vizzes",
  },
  {
    id: 4,
    title: "Power BI Reporting Project",
    description:
      "Created dynamic reports with data modeling and visuals to track performance and support business goals.",
    category: "Power BI",
    icon: LineChart,
    tools: ["Power BI", "DAX", "Data Modeling"],
    impact: "Enabled real-time tracking for 10+ business metrics",

    // ✅ Add your link here (choose one option below)
    // Option A: Google Drive demo video link
    // link: "https://drive.google.com/your-video-link",

    // Option B: YouTube unlisted demo link
    // link: "https://youtu.be/your-video-id",

    // Option C: GitHub repo link (PBIX or screenshots)
    // link: "https://github.com/amreenshaikh2224/your-powerbi-repo",
  },
  {
    id: 5,
    title: "Python Analysis & Automation",
    description:
      "Automated data processing and analysis, performed data visualization, and generated actionable insights.",
    category: "Python",
    icon: Code2,
    tools: ["Python", "Pandas", "Automation"],
    impact: "Saved 20+ hours weekly through automated workflows",

    // ✅ Add your Python project link here (GitHub recommended)
    // link: "https://github.com/amreenshaikh2224/your-python-project",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of data analysis, visualization, and automation projects
            demonstrating expertise in transforming raw data into business value.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow-effect"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              layout
              className="project-card group"
            >
              {/* Card Header with Icon */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Impact Section */}
              <div className="px-6 py-4 bg-secondary/30 border-t border-border/30">
                <p className="text-xs font-semibold text-primary mb-1">Impact</p>
                <p className="text-sm text-muted-foreground">{project.impact}</p>
              </div>

              {/* Tools + Link */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* ✅ Always show a button, disable if link missing */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground opacity-70">
                    Link will be added soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
