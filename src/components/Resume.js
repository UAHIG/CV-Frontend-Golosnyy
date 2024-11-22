// Компонент с анимацией пятна

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Resume() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [activeTab, setActiveTab] = useState("skills")
  const [hoveredSkill, setHoveredSkill] = useState("")
  const [imgError, setImgError] = useState(false)

  // Функция для обновления координат курсора
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY })
    setIsMoving(true)
  }

  const about = [
    "I began my career as a design engineer in 2005.",
    "Between 2007 and 2022, I advanced from Production Preparation Engineer to Chief Technologist at an innovative packaging company.",
    "I am a dedicated and passionate professional with strong organizational skills, eager to secure a Frontend Developer position.",
    "I am ready to join the team and contribute to achieving company goals.",
  ]

  const skills = [
    "JavaScript (ECMAScript 5+)",
    "ReactJS, TypeScript",
    "HTML5, CSS3",
    "Redux",
    "npm/yarn",
    "Git/GitHub/GitLab",
    "JSON",
    "AJAX",
  ]

  const experience = [
    {
      period: "2023 - 2024",
      items: [
        "RS Schools Course «JavaScript/Front-end»",
        "Learn Microsoft Build JavaScript applications using TypeScript",
        "UDEMY React REDUX full course.",
      ],
    },
    {
      period: "2022 - 2023",
      items: [
        "Java Script (learn.javascript.ru Course)",
        "EPAM Front-End Self-Paced Online Program",
      ],
    },
    {
      period: "2007 - 2022 FT Group LLC",
      items: [
        "Production Preparation Engineer 2007-2010",
        "Chief Technologist 2010-2022",
        "Supporting the technological process at a packaging manufacturing plant, color matching, creating color libraries, maintaining process documentation, coordinating personnel work, quality control.",
      ],
    },
    {
      period: "2005-2007 SKB UKRELECTROMASH",
      items: [
        "Design engineer",
        "Postgraduate internship. Developing technical drawings. Converting drawings to digital format",
      ],
    },
  ]

  const education = [
    {
      year: "2024",
      course:
        "Learn Microsoft Build JavaScript applications using TypeScript ()",
    },
    { year: "2024", course: "UDEMY React REDUX full course." },
    { year: "2023", course: "RS School Course «JavaScript/Front-end»" },
    {
      year: "2022",
      course: "LearnJS Java Script (learn.javascript.ru Course)",
    },
    { year: "2022", course: "EPAM Front-End Self-Paced Online Program" },
    {
      year: "2013",
      course: "X-Rite Color Theory & Color Master software Training",
    },
    {
      year: "2007",
      course: 'MIPE NTU "KhPI" Management of Administration and Economics',
    },
    {
      year: "2005",
      course: 'NTU "KhPI" Master of Electromechanical Engineering',
    },
    {
      year: "2003",
      course: 'NTU "KhPI" Bachelor of Electromechanical Engineering',
    },
  ]

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className='max-w-7xl mx-auto relative overflow-hidden min-h-screen bg-gray-100'>
      {/* Анимация облака следования за курсором */}
      <motion.div
        className='absolute w-60 h-60 rounded-full bg-blue-100 opacity-100 pointer-events-none'
        style={{
          translateX: cursorPosition.x - 340,
          translateY: cursorPosition.y - 400,
          filter: isMoving ? "blur(70px)" : "blur(100px)",
        }}
        animate={{ x: cursorPosition.x - 30, y: cursorPosition.y - 30 }}
        transition={{ type: "spring", stiffness: 2, damping: 0 }}
        onAnimationComplete={() => setIsMoving(false)}
      />
      {/* Контент */}
      <div className='min-h-screen bg-gradient-to-br from-gray-800 to-gray-400 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
        <div className='md:flex'>
          <div className='md:w-1/3 bg-gradient-to-br from-gray-700 to-gray-900 text-white p-8 space-y-4'>
            <div className='flex flex-col items-center mb-6'>
              <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-gray-100'>
                {!imgError ? (
                  <img
                    // src='/Photo.png'
                    // Не работал путь. Проблемы с загруузкой. Применена новая схема:
                    
                    src={`${process.env.PUBLIC_URL}/Photo.png`}
                    alt='IG'
                    className='w-full h-full object-cover'
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className='text-7xl font-bold text-gray-700'>IG</span>
                )}
              </div>
              <motion.h1
                className='text-3xl font-bold mt-4 text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                IGOR GOLOSNYY
              </motion.h1>
              <motion.h2
                className='text-xl text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                JUNIOR FRONTEND DEVELOPER
              </motion.h2>
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>CONTACT</h3>
              <div className='flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <a
                  href='mailto:golosnyigor@gmail.com'
                  className='hover:underline'>
                  golosnyigor@gmail.com
                </a>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                <span>+48789940994 (PL)</span>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <a href='https://github.com/uahig' className='hover:underline'>
                  github.com/uahig
                </a>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                    clipRule='evenodd'
                  />
                </svg>
                <a
                  href='https://www.linkedin.com/in/uahig/'
                  className='hover:underline'>
                  linkedin.com/in/uahig/
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>LANGUAGES</h3>
              <ul className='mt-2 text-sm'>
                <li>English: Intermediate (keep studying)</li>
                <li>Ukrainian: Native</li>
                <li>Russian: Native</li>
                <li>Polish: Elementary (keep studying)</li>
              </ul>
            </div>
          </div>
          <div className='md:w-2/3 p-8'>
            <div className='space-y-6'>
              <div className='flex flex-wrap gap-2'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded ${
                    activeTab === "skills"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("skills")}>
                  Skills
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded ${
                    activeTab === "about"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("about")}>
                  About Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded ${
                    activeTab === "experience"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("experience")}>
                  Experience
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded ${
                    activeTab === "education"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab("education")}>
                  Education
                </motion.button>
              </div>
              <AnimatePresence mode='wait'>
                {activeTab === "skills" && (
                  <motion.div
                    key='skills'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className='text-xl font-semibold text-gray-700'>
                      SKILLS AND KNOWLEDGE
                    </h3>
                    <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {skills.map((skill) => (
                        <motion.div
                          key={skill}
                          className='bg-gray-100 p-2 rounded relative overflow-hidden'
                          whileHover={{ scale: 1.05 }}
                          onHoverStart={() => setHoveredSkill(skill)}
                          onHoverEnd={() => setHoveredSkill("")}>
                          {skill}
                          {hoveredSkill === skill && (
                            <motion.div
                              className='absolute inset-0 bg-blue-500 opacity-20'
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    <h3 className='text-xl font-semibold text-gray-700 mt-6'>
                      TOOLS
                    </h3>
                    <ul className='mt-2 list-disc list-inside'>
                      <li>VSCode</li>
                      <li>Figma</li>
                      <li>Webpack</li>
                      <li>Chrome Dev Tools</li>
                    </ul>
                  </motion.div>
                )}
                {activeTab === "about" && (
                  <motion.div
                    key='about'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className='text-xl font-semibold text-gray-700'>
                      ABOUT ME
                    </h3>
                    <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {about.map((about) => (
                        <motion.div
                          key={about}
                          className='bg-gray-100 p-2 rounded relative overflow-hidden'
                          whileHover={{ scale: 1.05 }}
                          onHoverStart={() => setHoveredSkill(about)}
                          onHoverEnd={() => setHoveredSkill("")}>
                          {about}
                          {hoveredSkill === about && (
                            <motion.div
                              className='absolute inset-0 bg-blue-500 opacity-20'
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {activeTab === "experience" && (
                  <motion.div
                    key='experience'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className='text-xl font-semibold text-gray-700'>
                      EXPERIENCE
                    </h3>
                    {experience.map((exp, index) => (
                      <motion.div
                        key={exp.period}
                        className='mt-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}>
                        <h4 className='font-semibold'>{exp.period}</h4>
                        <ul className='list-disc list-inside'>
                          {exp.items.map((item, i) => (
                            <li key={i} className='text-sm'>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {activeTab === "education" && (
                  <motion.div
                    key='education'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}>
                    <h3 className='text-xl font-semibold text-gray-700'>
                      EDUCATION
                    </h3>
                    <ul className='mt-2 space-y-2'>
                      {education.map((edu, index) => (
                        <motion.li
                          key={`${edu.year}-${edu.course}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className='text-sm'>
                          <strong>{edu.year}:</strong> {edu.course}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}



