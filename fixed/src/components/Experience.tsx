import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Data Analyst',
    company: 'HotelHub',
    location: 'Goa, India',
    duration: 'Sep 2022 – Jan 2026',
    responsibilities: [
      'Developed interactive dashboards and KPI reporting systems for real-time business monitoring',
      'Designed and implemented ETL processes for data warehousing and analytics',
      'Created measurement strategies and automated analytics workflows',
      'Delivered actionable insights through data analysis and visualization',
      'Collaborated with cross-functional teams to understand business requirements',
      'Integrated APIs and telemetry data for comprehensive analytics solutions',
    ],
    tools: ['SQL', 'Python', 'Tableau', 'Power BI', 'Excel', 'REST APIs', 'Git', 'JIRA'],
  },
  {
    role: 'Engineering Intern, Quality Analysis',
    company: 'Mrinq Technologies',
    location: 'Goa, India',
    duration: 'Feb 2021 – Mar 2021',
    responsibilities: [
      'Collected and analysed hardware performance data using manual and automated collection methods with attention to detail',
      'Conducted root cause analysis on component defects using data mining and statistical techniques, improving product reliability by 12%',
      'Developed data models and documented comprehensive test results to support data-driven engineering decisions',
    ],
    tools: ['Data Mining', 'Statistical Analysis', 'Data Modeling', 'Documentation'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, expIndex) => (
                <div key={expIndex} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary glow-effect hidden md:block" />

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + expIndex * 0.2 }}
                    className="p-8 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-4">Key Responsibilities</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 + expIndex * 0.2 + index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, index) => (
                          <span key={index} className="skill-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
