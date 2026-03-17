import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, LayoutDashboard, PieChart, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Data Cleaning',
    description: 'Clean and prepare datasets by handling missing values, duplicates, and inconsistencies for accurate analysis.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Creation',
    description: 'Build automated dashboards and KPI reports for business tracking and data-driven decision-making.',
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Create visually compelling, easy-to-understand insights through charts and interactive reporting tools.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate repetitive analytics workflows using Python and data pipelines to save time and increase efficiency.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Services</span>
          <h2 className="section-title">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional data analytics services tailored to transform your raw data 
            into actionable business intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="service-card text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
