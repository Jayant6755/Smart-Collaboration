import { motion } from "framer-motion";
import { UserPlus, Layout, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Workspace",
    description: "Sign up in seconds, invite your team, and set up your first project with our guided onboarding.",
  },
  {
    icon: Layout,
    step: "02",
    title: "Organize & Collaborate",
    description: "Create tasks, assign owners, set deadlines, and collaborate in real-time with your team.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Ship & Iterate",
    description: "Track progress, analyze performance, and continuously improve your team's workflow.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
            Up and running in minutes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100/50 mb-6">
                <step.icon className="w-7 h-7 text-blue-600" />
              </div>
              <span className="block font-display text-xs font-bold text-blue-700 tracking-widest uppercase mb-2">
                Step {step.step}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
