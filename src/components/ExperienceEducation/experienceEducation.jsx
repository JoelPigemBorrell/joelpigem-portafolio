import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import "./experienceEducation.css"; // Importamos el CSS

export default function ExperienceEducation() {
  const experiences = [
    {
      title: "Web & Mobile Developer",
      company: "SymphonicHub",
      period: "2024 – Present",
      details: [
        "Developed and maintained web and mobile applications using modern technologies.",
        "Collaborated on the design, implementation, and deployment of software solutions.",
        "Ensured application performance, responsiveness, and usability across platforms.",
      ],
      icon: <Briefcase className="icon experience-icon" />,
    },
    {
      title: "IT Technician",
      company: "Aliart S.L.",
      period: "2021",
      details: [
        "Completed 380 hours of practical training in microcomputer systems and network maintenance",
        "Assisted in installation, configuration, and troubleshooting of hardware and software",
        "Supported network setup and basic IT support tasks"
      ],
      icon: <Briefcase className="icon experience-icon" />,
    },
  ];

  const education = [
    {
      degree: "HND in Multiplatform Application Development (DAM)",
      institution: "Vocational Training Center",
      period: "2023 – 2025",
      icon: <GraduationCap className="icon education-icon" />,
    },
    {
      degree: "Intermediate Vocational Training (SMX) in Microcomputer Systems and Networks",
      institution: "Vocational Training Center",
      period: "2021 – 2023",
      icon: <GraduationCap className="icon education-icon" />,
    },
    {
      degree: "Secondary Education (ESO)",
      institution: "High School",
      period: "2017 – 2021",
      icon: <GraduationCap className="icon education-icon" />,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="experience-education-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="columns">
          {/* Experience */}
          <div>
            <h3 className="column-title">
              <Briefcase className="icon experience-icon" /> Experience
            </h3>
            <div className="timeline experience-line">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="timeline-header">
                    {exp.icon}
                    <div>
                      <h4 className="item-title">{exp.title}</h4>
                      <p className="item-subtitle">{exp.company} • {exp.period}</p>
                    </div>
                  </div>
                  <ul className="timeline-details">
                    {exp.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="column-title">
              <GraduationCap className="icon education-icon" /> Education
            </h3>
            <div className="timeline education-line">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="timeline-header">
                    {edu.icon}
                    <div>
                      <h4 className="item-title">{edu.degree}</h4>
                      <p className="item-subtitle">{edu.institution} • {edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
