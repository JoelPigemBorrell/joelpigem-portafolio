import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './experienceEducation.css';

const experiences = [
  {
    title: 'Web & Mobile Developer',
    company: 'SymphonicHub',
    period: '2024 – Present',
    details: [
      'Developed and maintained web and mobile applications using modern technologies.',
      'Collaborated on design, implementation, and deployment of software solutions.',
      'Ensured performance, responsiveness, and usability across platforms.',
    ],
  },
  {
    title: 'IT Technician',
    company: 'Aliart S.L.',
    period: '2021',
    details: [
      '380 hours of practical training in microcomputer systems and network maintenance.',
      'Installation, configuration, and troubleshooting of hardware and software.',
      'Network setup and IT support tasks.',
    ],
  },
];

const education = [
  {
    degree: 'HND in Multiplatform Application Development (DAM)',
    institution: 'Vocational Training Center',
    period: '2023 – 2025',
  },
  {
    degree: 'Intermediate Vocational Training (SMX) — Microcomputer Systems & Networks',
    institution: 'Vocational Training Center',
    period: '2021 – 2023',
  },
  {
    degree: 'Secondary Education (ESO)',
    institution: 'High School',
    period: '2017 – 2021',
  },
];

const cardAnim = (i) => ({
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

export default function ExperienceEducation() {
  return (
    <section className="exp-edu" id="experience">
      <div className="exp-edu-inner">
        <motion.div
          className="exp-edu-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="exp-edu-columns">
          {/* Experience */}
          <div>
            <div className="exp-edu-col-title">
              <Briefcase className="exp-edu-col-icon" />
              <h3>Work experience</h3>
            </div>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <motion.div key={i} className="timeline-card" {...cardAnim(i)}>
                  <div className="timeline-card-header">
                    <span className="timeline-card-title">{exp.title}</span>
                    <span className="timeline-card-period">{exp.period}</span>
                  </div>
                  <p className="timeline-card-company">{exp.company}</p>
                  <ul className="timeline-card-details">
                    {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="exp-edu-col-title">
              <GraduationCap className="exp-edu-col-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, i) => (
                <motion.div key={i} className="timeline-card" {...cardAnim(i)}>
                  <div className="timeline-card-header">
                    <span className="timeline-card-title">{edu.degree}</span>
                    <span className="timeline-card-period">{edu.period}</span>
                  </div>
                  <p className="timeline-card-company">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
