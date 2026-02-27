import { motion } from "framer-motion";
import { Users, Zap, BarChart3, Bell, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "See changes as they happen. Edit tasks, leave comments, and stay in sync with your team instantly.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automate repetitive workflows with intelligent rules and triggers that adapt to your team's habits.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track progress with beautiful dashboards and reports that give you actionable insights.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get notified about what matters. AI-powered alerts filter noise and surface critical updates.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SSO, and granular permissions keep your data safe and compliant.",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description: "Connect with 100+ tools your team already uses — Slack, GitHub, Figma, and more.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-blue-100/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">Features</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
            Everything your team needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help teams collaborate smarter and ship faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-background border border-border hover:shadow-[var(--shadow-card)] hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100/50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
