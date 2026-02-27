import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 bg-gradient-to-r from-blue-800 to-blue-400 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center"
          style={{ backgroundImage: "var(--hero-gradient)" }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to transform your workflow?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Join thousands of teams already shipping faster with TaskFlow.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 font-semibold text-blue-600 hover:text-blue-700 bg-white hover:bg-white/90 transition-colors cursor-pointer"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
