import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, TrendingUp, AlertCircle } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: 'Incomplete Communication',
      description: 'Words only tell part of the story. Confidence, stress, and true personality remain hidden behind surface conversations.',
    },
    {
      icon: Users,
      title: 'Missed Connections',
      description: 'Job interviews, client meetings, and first dates often end with uncertainty due to incomplete understanding.',
    },
    {
      icon: TrendingUp,
      title: 'Wrong Decisions',
      description: 'Without deeper insights, we make judgments based on limited information, leading to poor hiring and relationship choices.',
    },
    {
      icon: AlertCircle,
      title: 'Time Wasted',
      description: 'Hours spent in conversations that could have been optimized if we truly understood the person from the start.',
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
            The Problem We Solve
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every day, crucial moments slip away because we can't see the full picture of the person in front of us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                  <problem.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
        >
          <p className="text-xl text-center text-gray-300 italic">
            "What if technology could help us understand people at a deeper level, revealing insights that words alone cannot convey?"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
