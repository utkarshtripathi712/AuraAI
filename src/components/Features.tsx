import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, TrendingUp, Lock, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get comprehensive analysis in under 1 second',
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'End-to-end encryption for all your data',
    },
    {
      icon: TrendingUp,
      title: '99.8% Accuracy',
      description: 'Industry-leading precision in personality analysis',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Supports 50+ languages and dialects',
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      description: 'Fully compliant with global privacy regulations',
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'AI models improve with every interaction',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with cutting-edge technology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
