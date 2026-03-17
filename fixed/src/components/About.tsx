import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart2, Database, Cpu, Users, TrendingUp, Settings } from 'lucide-react';

const highlights = [
  { icon: BarChart2, text: 'Measurement Strategies & KPI Tracking' },
  { icon: Settings, text: 'Automated Dashboards & Reporting' },
  { icon: Database, text: 'ETL Processes & Data Mining' },
  { icon: Cpu, text: 'API Integrations & Telemetry Analysis' },
  { icon: Users, text: 'Cross-functional Collaboration' },
  { icon: TrendingUp, text: 'Business Value & Stakeholder Impact' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />

      <div ref={ref} className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title">
              Transforming Data Into{' '}
              <span className="gradient-text">Actionable Insights</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Detail driven Data Analyst with 3+ years of experience in transforming 
              complex data into actionable business insights. I specialize in developing 
              measurement strategies, building automated dashboards, and creating 
              ETL processes that drive informed decision making.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              My expertise spans across SQL, Python, Tableau, and Power BI, with a 
              strong foundation in statistical analysis and data mining. I'm passionate 
              about solving complex business problems using analytics and automation, 
              delivering value to stakeholders through clear, data driven narratives.
            </p>

            {/* Key Strengths */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/30"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Passion Statement */}
            <div className="p-6 rounded-xl glass-card border-l-4 border-primary">
              <p className="text-sm font-semibold text-primary mb-2">What I'm Passionate About</p>
              <p className="text-muted-foreground">
                Solving complex business problems using analytics and automation, 
                turning raw data into compelling stories that drive strategic decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
