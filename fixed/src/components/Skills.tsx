import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, BarChart2, Code2, Settings, Globe, MessageCircle } from 'lucide-react';

const skillCategories = [
  {
    icon: Database,
    title: 'Data Analysis & Databases',
    skills: ['Advanced SQL', 'Excel', 'Python (Pandas, NumPy)', 'Data Profiling', 'Statistical Analysis', 'ETL'],
  },
  {
    icon: BarChart2,
    title: 'Data Visualization',
    skills: ['Tableau', 'Power BI', 'Looker Studio', 'Dashboard Design', 'KPI Reporting'],
  },
  {
    icon: Code2,
    title: 'Programming Tools',
    skills: ['Python', 'Java', 'REST APIs', 'JSON', 'Postman', 'JIRA', 'Confluence', 'Git'],
  },
  {
    icon: Settings,
    title: 'Methodologies',
    skills: ['Agile/SCRUM', 'BDD', 'A/B Testing', 'Root Cause Analysis', 'Data Quality Management'],
  },
  {
    icon: Globe,
    title: 'Domain Expertise',
    skills: ['Travel Tech', 'Booking Systems', 'Pricing Algorithms', 'Revenue Analytics', 'Ecommerce'],
  },
  {
    icon: MessageCircle,
    title: 'Soft Skills',
    skills: ['Communication', 'Interpersonal Skills', 'Training Delivery', 'Cross-functional Collaboration'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Skills</span>
          <h2 className="section-title">Core Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning data analysis, visualization, programming, 
            and domain expertise to deliver impactful analytics solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <category.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/80 text-muted-foreground border border-border/30 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
