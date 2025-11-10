import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Heart, GraduationCap, ShoppingBag, Handshake } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Briefcase,
      title: 'Job Interviews',
      description: 'Assess candidate authenticity, confidence levels, and cultural fit beyond their rehearsed answers',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Handshake,
      title: 'Client Meetings',
      description: 'Understand client concerns and emotional state to build stronger business relationships',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Personal Relationships',
      description: 'Gain deeper insights into compatibility and emotional connection in dating scenarios',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Identify personality dynamics and optimize team composition for better collaboration',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: ShoppingBag,
      title: 'Sales & Negotiation',
      description: 'Read customer emotions and adjust your approach for more effective sales conversations',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: GraduationCap,
      title: 'Education & Mentoring',
      description: 'Understand student engagement and emotional state to provide better guidance',
      gradient: 'from-indigo-500 to-purple-500',
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
            Endless Possibilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Aura AI transforms every human interaction across professional and personal scenarios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.gradient} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
