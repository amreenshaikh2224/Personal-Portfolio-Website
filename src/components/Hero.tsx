import { motion } from "framer-motion";
import { ArrowDown, Sparkles, BarChart3, Zap } from "lucide-react";
import amreenProfile from "@/assets/amreen-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Hello, I&apos;m <span className="gradient-text">Amreen Shaikh</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Data Analyst | SQL • Python • Tableau • Power BI
            </h2>

            {/* ✅ CTA Buttons FIXED (No more 404) */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => scrollToSection("portfolio")} className="btn-primary">
                View Portfolio
              </button>

              <button onClick={() => scrollToSection("contact")} className="btn-outline">
                Contact Me
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="stat-card"
              >
                <div className="flex items-center gap-2 text-primary mb-1">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <p className="text-2xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="stat-card"
              >
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Zap className="w-4 h-4" />
                </div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-xs text-muted-foreground">Dashboards Built</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="stat-card"
              >
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Data-Driven</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 animate-pulse-slow" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating Border */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                />

                {/* Main Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/50 glow-effect">
                  <img
                    src={amreenProfile}
                    alt="Amreen Shaikh - Data Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 p-3 rounded-xl glass-card"
                >
                  <BarChart3 className="w-6 h-6 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 p-3 rounded-xl glass-card"
                >
                  <Zap className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
