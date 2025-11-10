import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Sparkles } from 'lucide-react';

const Solution = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aura AI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A revolutionary AI system that analyzes personality and emotional state in real-time, without asking a single question
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced AI Analysis</h3>
                  <p className="text-gray-400">
                    Leverages cutting-edge machine learning models trained on millions of human interactions to decode subtle behavioral patterns
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Insights</h3>
                  <p className="text-gray-400">
                    Get instant personality and emotional analysis within seconds, enabling better decision-making in critical moments
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="text-gray-400">
                    All analysis happens securely with end-to-end encryption, ensuring complete privacy and data protection
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
                    <Brain className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Capture', desc: 'Video/audio input from interaction' },
                    { step: '02', title: 'Analyze', desc: 'AI processes behavioral patterns' },
                    { step: '03', title: 'Insight', desc: 'Receive personality & emotion profile' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="text-2xl font-bold text-purple-400">{item.step}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
