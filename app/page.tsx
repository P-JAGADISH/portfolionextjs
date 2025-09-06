"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download } from "lucide-react"

const pages = [
  { id: 1, title: "Profile" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Education" },
  { id: 4, title: "Skills" },
  { id: 5, title: "Projects" },
  { id: 6, title: "Services" },
  { id: 7, title: "Contact" },
]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const nextPage = () => {
    if (currentPage < pages.length && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 1 && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1)
        setIsAnimating(false)
      }, 300)
    }
  }

  const goToPage = (pageNum: number) => {
    if (pageNum !== currentPage && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage(pageNum)
        setIsAnimating(false)
      }, 300)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-2xl animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-md flex items-center justify-center">
              <div className="w-16 h-20 bg-gradient-to-b from-gray-200 to-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="text-white text-xl font-semibold animate-pulse">Loading Portfolio...</div>
          <div className="mt-4 flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Book Container */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="bg-white rounded-xl shadow-inner min-h-[600px] md:min-h-[700px] relative overflow-hidden">
            {/* Page Content */}
            <div
              className={`transition-all duration-300 ${isAnimating ? "opacity-0 transform translate-x-4" : "opacity-100 transform translate-x-0"}`}
            >
              {/* Page 1 - Profile */}
              {currentPage === 1 && (
                <div className="p-6 md:p-12 h-full flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                        JP
                      </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">JAGADISH P</h1>
                    <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                      REACT.JS FRONTEND DEVELOPER
                    </h2>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">+91 9384997035</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">jagajagadish1410@gmail.com</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">Chennai - Tamil Nadu</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Profile Summary</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Frontend Developer with 1.5+ years of experience in developing responsive and scalable web
                          applications. Skilled in React.js, Redux, JavaScript, TypeScript, HTML, CSS, Bootstrap, and
                          Tailwind CSS. Proficient in building dynamic UIs, integrating REST APIs, and implementing
                          authentication (Firebase Auth, Google OAuth, JWT). Experienced in debugging, performance
                          optimization, and deployment using Firebase Hosting, Netlify, and GitHub Pages with domain
                          setup via GoDaddy.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Page 2 - Experience */}
              {currentPage === 2 && (
                <div className="p-6 md:p-12 h-full">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>

                  <div className="space-y-8">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
                          <Badge variant="secondary">April 2025 - Present</Badge>
                        </div>
                        <h4 className="text-lg text-blue-600 font-semibold mb-3">Jayam Web Solutions Pvt Ltd</h4>
                        <p className="text-gray-600 mb-4">
                          Built admin dashboards, user-facing interfaces, and static business websites using React.js,
                          HTML, CSS, Bootstrap, and JavaScript.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge>React.js</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>HTML</Badge>
                          <Badge>CSS</Badge>
                          <Badge>Bootstrap</Badge>
                          <Badge>Firebase</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
                          <Badge variant="secondary">Mar 2024 - Mar 2025</Badge>
                        </div>
                        <h4 className="text-lg text-purple-600 font-semibold mb-3">JK Global IT Solutions</h4>
                        <p className="text-gray-600 mb-4">
                          Developed responsive UIs and dashboards using React.js, Tailwind CSS, and Bootstrap. Built
                          product listing, cart, and checkout interfaces with smooth navigation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge>React.js</Badge>
                          <Badge>Tailwind CSS</Badge>
                          <Badge>Redux</Badge>
                          <Badge>REST APIs</Badge>
                          <Badge>Firebase</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Frontend Developer Certification</h3>
                          <Badge variant="secondary">2024</Badge>
                        </div>
                        <h4 className="text-lg text-green-600 font-semibold mb-3">Ethnus Code Mithra</h4>
                        <p className="text-gray-600 mb-2">Certificate No: D7NZ6R9K</p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Page 3 - Education */}
              {currentPage === 3 && (
                <div className="p-6 md:p-12 h-full">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">B.Tech in Information Technology</h3>
                          <Badge variant="secondary">2023</Badge>
                        </div>
                        <h4 className="text-lg text-blue-600 font-semibold mb-2">Loyola Institute of Technology</h4>
                        <p className="text-gray-600">Percentage: 78%</p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Higher Secondary Certificate (HSC)</h3>
                          <Badge variant="secondary">2019</Badge>
                        </div>
                        <h4 className="text-lg text-purple-600 font-semibold mb-2">
                          Sri Lakshmi Vidyalaya Matriculation Hr Sec School
                        </h4>
                        <p className="text-gray-600">Percentage: 72%</p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">
                            Secondary School Leaving Certificate (SSLC)
                          </h3>
                          <Badge variant="secondary">2017</Badge>
                        </div>
                        <h4 className="text-lg text-green-600 font-semibold mb-2">
                          Bala Mandir Matriculation Hr Sec School
                        </h4>
                        <p className="text-gray-600">Percentage: 82%</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
                        <div className="flex gap-4">
                          <Badge variant="outline" className="text-lg py-2 px-4">
                            Tamil
                          </Badge>
                          <Badge variant="outline" className="text-lg py-2 px-4">
                            English
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Page 4 - Skills */}
              {currentPage === 4 && (
                <div className="p-6 md:p-12 h-full">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-orange-500">HTML</Badge>
                            <Badge className="bg-blue-500">CSS</Badge>
                            <Badge className="bg-purple-500">Bootstrap</Badge>
                            <Badge className="bg-cyan-500">Tailwind CSS</Badge>
                            <Badge className="bg-yellow-500">JavaScript</Badge>
                            <Badge className="bg-blue-600">TypeScript</Badge>
                            <Badge className="bg-cyan-600">React.js</Badge>
                            <Badge className="bg-black">Vite</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="mt-6">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">State Management & APIs</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-cyan-600">React Hooks</Badge>
                            <Badge className="bg-purple-600">Context API</Badge>
                            <Badge className="bg-violet-600">Redux Toolkit</Badge>
                            <Badge className="bg-green-600">REST API</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Authentication & Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-orange-600">Firebase Auth</Badge>
                            <Badge className="bg-red-500">Google OAuth</Badge>
                            <Badge className="bg-gray-700">JWT</Badge>
                            <Badge className="bg-blue-500">Email.js</Badge>
                            <Badge className="bg-orange-500">Postman</Badge>
                            <Badge className="bg-purple-500">Thunder Client</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="mt-6">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Deployment & Design</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-orange-600">Firebase Hosting</Badge>
                            <Badge className="bg-teal-500">Netlify</Badge>
                            <Badge className="bg-gray-800">GitHub Pages</Badge>
                            <Badge className="bg-blue-600">GoDaddy</Badge>
                            <Badge className="bg-black">Git</Badge>
                            <Badge className="bg-gray-700">GitHub</Badge>
                            <Badge className="bg-blue-500">Canva</Badge>
                            <Badge className="bg-purple-600">Figma</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )}

              {/* Page 5 - Projects */}
              {currentPage === 5 && (
                <div className="p-6 md:p-12 h-full">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Projects</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                      <CardContent className="p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-12 bg-blue-500 rounded mx-auto mb-2"></div>
                            <p className="text-sm text-gray-600">Admin Dashboard</p>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Admin Dashboards & Business Websites</h3>
                        <p className="text-gray-600 mb-4">
                          Built responsive admin dashboards and static business websites using React.js, HTML, CSS,
                          Bootstrap, and JavaScript.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge>React.js</Badge>
                          <Badge>Bootstrap</Badge>
                          <Badge>Firebase</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                      <CardContent className="p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-12 bg-purple-500 rounded mx-auto mb-2"></div>
                            <p className="text-sm text-gray-600">E-Commerce App</p>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Web Application</h3>
                        <p className="text-gray-600 mb-4">
                          Developed responsive UIs with product listing, cart, and checkout interfaces. Integrated
                          authentication and consumed REST APIs.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge>React.js</Badge>
                          <Badge>Redux</Badge>
                          <Badge>REST API</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Responsibilities</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Built responsive UIs with React.js, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</li>
                          <li>
                            • Integrated authentication systems (Firebase Auth, Google OAuth, JWT) and APIs for
                            real-time data
                          </li>
                          <li>• Ensured cross-browser compatibility, responsiveness, and performance optimization</li>
                          <li>
                            • Deployed applications using Firebase Hosting, Netlify, GitHub Pages with domain setup via
                            GoDaddy
                          </li>
                          <li>• Collaborated with UI/UX and backend teams using Git & GitHub for version control</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Page 6 - Services */}
              {currentPage === 6 && (
                <div className="p-6 md:p-12 h-full">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Services</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-2xl">💻</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Web Development</h3>
                        <p className="text-gray-600 mb-4">
                          Building responsive and scalable web applications using React.js, JavaScript, and modern
                          frontend technologies.
                        </p>
                        <Button>Learn More</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-2xl">🎨</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">UI/UX Design</h3>
                        <p className="text-gray-600 mb-4">
                          Creating intuitive and engaging user interfaces with modern design principles and user
                          experience best practices.
                        </p>
                        <Button>Learn More</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-2xl">📱</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Responsive Design</h3>
                        <p className="text-gray-600 mb-4">
                          Ensuring your website looks perfect on all devices with mobile-first responsive design
                          approach.
                        </p>
                        <Button>Learn More</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Optimization</h3>
                        <p className="text-gray-600 mb-4">
                          Optimizing web applications for speed, performance, and better user experience across all
                          platforms.
                        </p>
                        <Button>Learn More</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Page 7 - Contact */}
              {currentPage === 7 && (
                <div className="p-6 md:p-12 h-full">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-blue-600" />
                              <span className="text-gray-700">+91 9384997035</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5 text-blue-600" />
                              <span className="text-gray-700">jagajagadish1410@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-blue-600" />
                              <span className="text-gray-700">Chennai - Tamil Nadu</span>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Connect with me:</h4>
                            <div className="flex gap-3">
                              <Button variant="outline" size="sm">
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                              </Button>
                              <Button variant="outline" size="sm">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-6">Send Message</h3>
                          <form className="space-y-4">
                            <div>
                              <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                              ></textarea>
                            </div>
                            <Button className="w-full">Send Message</Button>
                          </form>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600">
                          <strong>Declaration:</strong> I hereby declare that all the information provided in this
                          portfolio is true and accurate to the best of my knowledge.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <span className="text-sm font-medium text-gray-700">{currentPage}</span>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPage}
                  disabled={currentPage === pages.length}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Page Indicators */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div className="flex flex-col gap-2">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => goToPage(page.id)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === page.id ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    title={page.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
