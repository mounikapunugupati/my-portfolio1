"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Mail,
  Linkedin,
  ChevronDown,
  Moon,
  Sun,
  Briefcase,
  ExternalLink,
  Award,
  GraduationCap,
  Trophy,
  Brain,
  Zap,
} from "lucide-react"

export default function ProfessionalPortfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-all duration-300 ${isDarkMode ? "dark" : ""}`}
    >
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Punugupati Mounika</div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
                Achievements
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hover:bg-muted">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 gentle-float">
            <img
              src="/mounika-profile.jpg"
              alt="Punugupati Mounika - Software Developer"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary shadow-lg object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Punugupati Mounika</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Software Developer & Technology Enthusiast
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            3rd year Information Technology student with expertise in full-stack development, AI/ML, and cloud
            technologies. Passionate about solving problems and creating innovative solutions through code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.about ? "fade-in-up" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Passionate About Technology</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                3rd year Information Technology student at Seshadri Rao Gudlavalleru Engineering College with a strong
                interest in software development. I have hands-on experience with Python, Java, and web technologies
                through academic and personal projects.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I enjoy solving problems, learning new technologies, and working in teams. I am eager to contribute my
                skills to innovative projects in areas such as AI/ML, Cloud, and Web Development.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8.35</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>

            <div className={`${isVisible.about ? "fade-in-up" : "opacity-0"} space-y-6`}>
              {[
                { name: "Java Programming", level: 90 },
                { name: "Python Development", level: 85 },
                { name: "Web Technologies (HTML/CSS/JS)", level: 88 },
                { name: "SQL Databases", level: 80 },
                { name: "MERN Stack", level: 85 },
                { name: "GitHub & Version Control", level: 82 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible.about ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>

          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Technology in Information Technology",
                institution: "Seshadri Rao Gudlavalleru Engineering College (JNTU Kakinada)",
                period: "2023 - 2027",
                grade: "CGPA: 8.35",
                icon: <GraduationCap className="w-6 h-6" />,
              },
              {
                degree: "Intermediate (M.P.C)",
                institution: "Nri Vidya Junior College, Guntur",
                period: "2021 - 2023",
                grade: "Percentage: 97.1%",
                icon: <GraduationCap className="w-6 h-6" />,
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className={`glass-card card-hover ${isVisible.education ? "fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                          <p className="text-lg text-foreground">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col items-end mt-2 md:mt-0">
                          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground mb-2">
                            {edu.period}
                          </Badge>
                          <Badge variant="outline" className="border-primary text-primary">
                            {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Experience & Training</h2>

          <div className="space-y-12">
            <Card className={`glass-card card-hover ${isVisible.experience ? "fade-in-up" : "opacity-0"}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">Virtual Internship - Full-Stack Development</h3>
                        <p className="text-lg text-foreground">SmartBridge Educational</p>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent-foreground mt-2 md:mt-0">
                        2025
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Worked on end-to-end web application development using the MERN stack, including UI design,
                      backend APIs, and database integration.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Developed full-stack applications using MongoDB, Express, React, and Node.js",
                        "Implemented user authentication and authorization systems",
                        "Designed responsive user interfaces and integrated APIs",
                        "Gained hands-on experience with modern web development practices",
                      ].map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`glass-card card-hover ${isVisible.experience ? "fade-in-up" : "opacity-0"}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">Virtual Internship - Cybersecurity</h3>
                        <p className="text-lg text-foreground">Palo Alto Networks</p>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent-foreground mt-2 md:mt-0">
                        2024
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Gained hands-on exposure to network security, threat detection, and cloud security fundamentals
                      through industry-recognized modules and simulations.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Learned network security principles and threat detection techniques",
                        "Worked with cloud security fundamentals and best practices",
                        "Completed industry-recognized cybersecurity modules",
                        "Gained practical experience through security simulations",
                      ].map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            <Card
              className={`glass-card card-hover overflow-hidden ${isVisible.projects ? "fade-in-up" : "opacity-0"}`}
            >
              <div className="relative">
                <img
                  src="/futuristic-analytics-dashboard-with-charts-and-gra.jpg"
                  alt="ShopEZ E-commerce Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">Full-Stack</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">ShopEZ - MERN Stack E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Built a comprehensive full-stack e-commerce web application using MongoDB, Express, React, and
                  Node.js. Features include product catalog, user authentication with JWT, shopping cart functionality,
                  and secure checkout workflows. Designed responsive UI and integrated secure payment gateway for
                  seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["MongoDB", "Express.js", "React", "Node.js", "JWT", "Payment Gateway"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Certificates & Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${isVisible.achievements ? "fade-in-up" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Technical Certifications
              </h3>
              <div className="space-y-4">
                {[
                  "Java Certification - HackerRank",
                  "Certificate of Completion - Game Development using Buildbox",
                  "Full Stack Development - SmartBridge Educational",
                ].map((cert, index) => (
                  <Card key={index} className="glass-card p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className={`${isVisible.achievements ? "fade-in-up" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Competitions & Achievements
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Command Prompt Usage Competition",
                    position: "1st Place",
                    icon: <Trophy className="w-4 h-4" />,
                    venue: "Seshadri Rao Gudlavalleru Engineering College",
                  },
                  {
                    name: "HackerRank Problem Solving",
                    position: "4-star Badge",
                    icon: <Zap className="w-4 h-4" />,
                  },
                  {
                    name: "HackerRank Java Programming",
                    position: "4-star Badge",
                    icon: <Brain className="w-4 h-4" />,
                  },
                ].map((achievement, index) => (
                  <Card key={index} className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {achievement.icon}
                        </div>
                        <div>
                          <span className="text-foreground font-medium block">{achievement.name}</span>
                          {achievement.venue && (
                            <span className="text-xs text-muted-foreground">{achievement.venue}</span>
                          )}
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {achievement.position}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${isVisible.contact ? "fade-in-up" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and collaborate on cutting-edge
                technology solutions. Let's connect and explore possibilities together.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "mounikapunugupati08@gmail.com" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "github.com/mounikapunugupati" },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/mounika-punugupati-885b92366",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg glass-card">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{contact.label}</div>
                      <div className="text-muted-foreground">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className={`glass-card ${isVisible.contact ? "fade-in-up" : "opacity-0"}`}>
              <CardHeader>
                <CardTitle className="text-primary">Send a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" className="bg-background border-border" />
                <Input placeholder="Your Email" type="email" className="bg-background border-border" />
                <Input placeholder="Subject" className="bg-background border-border" />
                <Textarea placeholder="Your message..." rows={4} className="bg-background border-border resize-none" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="font-bold text-2xl gradient-text mb-2">Punugupati Mounika</div>
            <p className="text-muted-foreground">Software Developer & Technology Enthusiast</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: "https://github.com/mounikapunugupati" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mounika-punugupati-885b92366" },
              { icon: Mail, href: "mailto:mounikapunugupati08@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <Button key={index} variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Icon className="w-5 h-5" />
              </Button>
            ))}
          </div>

          <div className="text-center text-muted-foreground text-sm">
            © 2024 Punugupati Mounika. Built with Next.js and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  )
}
