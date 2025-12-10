"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Terminal,
  Shield,
  Lock,
  Server,
  Code,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Award,
  Calendar,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const commands = [
    "$ whoami",
    "ankush_kashyap",
    "$ cat skills.txt",
    "penetration_testing",
    "vulnerability_assessment",
    "secure_code_review",
    "android_testing",
    "$ ls experience/",
    "cybernx/",
    "security_brigade/",
    "anzen_technologies/",
    "$ ./scan_portfolio.sh",
    "Scanning... 100% Complete ✓",
  ]

  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0

    const typeCommand = () => {
      if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
          setCurrentCommand(commands[commandIndex].substring(0, charIndex + 1))
          charIndex++
          setTimeout(typeCommand, 100)
        } else {
          setTimeout(() => {
            commandIndex++
            charIndex = 0
            if (commandIndex < commands.length) {
              setCurrentCommand("")
              setTimeout(typeCommand, 500)
            }
          }, 2000)
        }
      } else {
        // Reset and start over
        setTimeout(() => {
          commandIndex = 0
          charIndex = 0
          setCurrentCommand("")
          setTimeout(typeCommand, 1000)
        }, 3000)
      }
    }

    setTimeout(typeCommand, 1000)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    // Smooth scroll setup
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
          // Close mobile menu after navigation
          setMobileMenuOpen(false)
        }
      }
    }

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      clearInterval(cursorInterval)
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden w-full">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00FF00 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header - Improved responsive padding and spacing */}
      <header className="relative z-50 p-3 sm:p-4 md:p-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto mobile-menu-container">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-shrink">
            <Terminal className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0 text-[#00FF00]" />
            <span className="font-mono text-xs sm:text-sm md:text-lg truncate text-[#00FF00]">ankush@security:~$</span>
          </div>

          <button
            className="md:hidden p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-[#00FF00]" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#00FF00]" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
            <Link
              href="#about"
              className="font-mono text-xs lg:text-sm xl:text-base hover:text-[#00FF00] transition-colors text-white whitespace-nowrap"
            >
              ./about
            </Link>
            <Link
              href="#cv"
              className="font-mono text-xs lg:text-sm xl:text-base hover:text-[#00FF00] transition-colors text-white whitespace-nowrap"
            >
              ./resume
            </Link>
            <Link
              href="#experience"
              className="font-mono text-xs lg:text-sm xl:text-base hover:text-[#00FF00] transition-colors text-white whitespace-nowrap"
            >
              ./experience
            </Link>
            <Link
              href="#certifications"
              className="font-mono text-xs lg:text-sm xl:text-base hover:text-[#00FF00] transition-colors text-white whitespace-nowrap"
            >
              ./certifications
            </Link>
            <Link
              href="#contact"
              className="font-mono text-xs lg:text-sm xl:text-base hover:text-[#00FF00] transition-colors text-white whitespace-nowrap"
            >
              ./contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
          </div>
        </nav>

        {/* Mobile Menu - Improved mobile menu width */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          <div
            className={`absolute top-0 right-0 h-full w-64 sm:w-80 max-w-[85vw] bg-black border-l border-[#00FF00]/20 shadow-2xl transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 sm:p-6 pt-16 sm:pt-20">
              <nav className="flex flex-col gap-4 sm:gap-6">
                <Link
                  href="#about"
                  className="font-mono text-base sm:text-lg hover:text-[#00FF00] transition-colors py-2 sm:py-3 border-b border-white/20 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ./about
                </Link>
                <Link
                  href="#cv"
                  className="font-mono text-base sm:text-lg hover:text-[#00FF00] transition-colors py-2 sm:py-3 border-b border-white/20 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ./resume
                </Link>
                <Link
                  href="#experience"
                  className="font-mono text-base sm:text-lg hover:text-[#00FF00] transition-colors py-2 sm:py-3 border-b border-white/20 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ./experience
                </Link>
                <Link
                  href="#certifications"
                  className="font-mono text-base sm:text-lg hover:text-[#00FF00] transition-colors py-2 sm:py-3 border-b border-white/20 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ./certifications
                </Link>
                <Link
                  href="#contact"
                  className="font-mono text-base sm:text-lg hover:text-[#00FF00] transition-colors py-2 sm:py-3 border-b border-white/20 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ./contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Better responsive padding and grid layout */}
        <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 min-w-0">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 break-words">
                    <span className="font-mono text-[#00FF00]">Ankush</span>
                    <br />
                    <span className="text-white">Kashyap</span>
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 font-mono leading-relaxed">
                    Penetration tester & security consultant specializing in web applications, networks, APIs, and
                    Android mobile applications.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-mono text-xs sm:text-sm md:text-base w-full sm:w-auto">
                    <Link href="#contact">./view_projects.sh</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black font-mono text-xs sm:text-sm md:text-base bg-transparent w-full sm:w-auto"
                  >
                    <Link href="#contact">./contact_me.sh</Link>
                  </Button>
                </div>

                <div className="flex gap-4 sm:gap-5 md:gap-6 justify-center sm:justify-start">
                  <Link
                    href="https://linkedin.com/in/Ankushhhh14"
                    target="_blank"
                    className="text-[#00FF00] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </Link>
                  <Link href="#" className="text-[#00FF00] hover:text-white transition-colors">
                    <Github className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </Link>
                  <Link href="#" className="text-[#00FF00] hover:text-white transition-colors">
                    <Twitter className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </Link>
                </div>
              </div>

              {/* Terminal Window - Full width on mobile, adjusts on desktop */}
              <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 w-full overflow-hidden">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 md:py-3 bg-gray-800 border-b border-gray-700">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-1 sm:ml-2 md:ml-4 text-gray-400 text-[10px] sm:text-xs md:text-sm font-mono truncate">
                    ankush@cybersec: ~
                  </span>
                </div>
                <div className="p-2.5 sm:p-4 md:p-6 h-64 sm:h-72 md:h-80 lg:h-96 font-mono text-[10px] sm:text-xs md:text-sm overflow-hidden">
                  <div className="text-[#00FF00] space-y-0.5 sm:space-y-1">
                    <div className="mb-2 sm:mb-3 break-words text-xs sm:text-sm">
                      Welcome to Ankush's Security Terminal
                    </div>

                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="text-white break-words">$ cat /etc/profile</div>
                      <div className="text-blue-400 break-words">Name: Ankush Kashyap</div>
                      <div className="text-blue-400 break-words">Role: Cyber Security Consultant</div>
                      <div className="text-blue-400 break-words">Location: Mumbai, India</div>
                      <div className="text-blue-400 break-words">Status: Available for hire</div>

                      <div className="mt-2 sm:mt-3 text-white break-words">$ ls -la skills/</div>
                      <div className="text-yellow-400 break-words">drwxr-xr-x penetration_testing</div>
                      <div className="text-yellow-400 break-words">drwxr-xr-x vulnerability_assessment</div>
                      <div className="text-yellow-400 break-words">drwxr-xr-x secure_code_review</div>
                      <div className="text-yellow-400 break-words">drwxr-xr-x network_security</div>
                      <div className="text-yellow-400 break-words">drwxr-xr-x android_testing</div>

                      <div className="mt-2 sm:mt-3 text-white break-words">$ ./scan_portfolio.sh</div>
                      <div className="text-[#00FF00] break-words">Scanning... 100% Complete ✓</div>

                      <div className="mt-2 sm:mt-3 flex items-center flex-wrap">
                        <span className="text-white break-all">$ {currentCommand}</span>
                        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>▋</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Improved responsive grid and spacing */}
        <section id="about" className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00] flex-shrink-0" />
                <span className="font-mono text-[#00FF00] text-xs sm:text-sm md:text-base break-words">
                  $ cat about.md
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white break-words">
                    About Me
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                    I have a strong work ethic and a passion for cybersecurity with an unyielding commitment to securing
                    digital landscapes. My ability to collaborate effectively with team members, combined with strong
                    technical skills, enables me to deliver exceptional results.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 font-mono text-[10px] sm:text-xs md:text-sm">
                    <div className="text-[#00FF00] break-words">→ 1.5 years experience</div>
                    <div className="text-[#00FF00] break-words">→ 50+ security assessments</div>
                    <div className="text-[#00FF00] break-words">→ Hall of Fame: BASF, Nokia, LG, United Nations</div>
                  </div>
                </div>

                {/* Skills Cards - Improved responsive grid for skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
                  <div className="bg-gray-800 rounded-lg p-2.5 sm:p-3 md:p-4 border border-gray-600">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[#00FF00] flex-shrink-0" />
                      <span className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm break-words">
                        web_security.exe
                      </span>
                    </div>
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                      Expert in web application and API vulnerability assessment
                    </p>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2.5 sm:p-3 md:p-4 border border-gray-600">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <Server className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[#00FF00] flex-shrink-0" />
                      <span className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm break-words">
                        network_scan.py
                      </span>
                    </div>
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                      Skilled in network infrastructure security assessments
                    </p>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2.5 sm:p-3 md:p-4 border border-gray-600">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <Code className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[#00FF00] flex-shrink-0" />
                      <span className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm break-words">
                        api_security.sh
                      </span>
                    </div>
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                      Proficient in API security testing and vulnerability analysis
                    </p>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-2.5 sm:p-3 md:p-4 border border-gray-600">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <Smartphone className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[#00FF00] flex-shrink-0" />
                      <span className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm break-words">
                        android_test.apk
                      </span>
                    </div>
                    <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                      Proficient in Android mobile application security testing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CV Download Section - Improved responsive layout */}
        <section id="cv" className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00] flex-shrink-0" />
                <span className="font-mono text-[#00FF00] text-xs sm:text-sm md:text-base break-words">
                  $ cat resume.pdf
                </span>
              </div>

              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 border border-gray-600 max-w-2xl mx-auto">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#00FF00]/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#00FF00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-mono mb-2 break-words">
                      Download Resume
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 px-2">
                      Get my complete professional resume with detailed experience, skills, and certifications.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <Button
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = "/ankush_kashyap_resume.pdf"
                        link.download = "ankush_kashyap_resume.pdf"
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                      className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-mono w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base"
                    >
                      <svg
                        className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      ./download_cv.sh
                    </Button>

                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-mono space-y-0.5">
                      <div>→ File: ankush_kashyap_resume.pdf</div>
                      <div>→ Size: 2.3 MB</div>
                      <div>→ Last updated: {new Date().toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Improved responsive cards */}
        <section
          id="experience"
          className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900/20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00] flex-shrink-0" />
                <span className="font-mono text-[#00FF00] text-xs sm:text-sm md:text-base break-words">
                  $ ls -la /career/
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* CyberNX */}
                <div className="border-l-2 border-[#00FF00] pl-3 sm:pl-4 md:pl-6">
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600">
                    <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white font-mono break-words">
                          Associate Security Consultant
                        </h3>
                        <p className="text-[#00FF00] font-mono text-xs sm:text-sm md:text-base break-words">CyberNX</p>
                      </div>
                      <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                        <Badge className="bg-[#00FF00] text-black font-mono text-[10px] sm:text-xs">ACTIVE</Badge>
                        <Badge
                          variant="outline"
                          className="border-[#00FF00] text-[#00FF00] font-mono text-[10px] sm:text-xs"
                        >
                          Mumbai
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 font-mono text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4">
                      March 2025 - Present
                    </p>
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 text-gray-300 text-[10px] sm:text-xs md:text-sm font-mono">
                      <div className="break-words">→ Comprehensive security assessments</div>
                      <div className="break-words">→ Penetration testing & vulnerability analysis</div>
                      <div className="break-words">→ API vulnerability assessments</div>
                    </div>
                  </div>
                </div>

                {/* Security Brigade */}
                <div className="border-l-2 border-gray-600 pl-3 sm:pl-4 md:pl-6">
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600">
                    <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white font-mono break-words">
                          Associate Cyber Security Consultant
                        </h3>
                        <p className="text-[#00FF00] font-mono text-xs sm:text-sm md:text-base break-words">
                          Security Brigade
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gray-400 text-gray-400 font-mono text-[10px] sm:text-xs w-fit"
                      >
                        Remote
                      </Badge>
                    </div>
                    <p className="text-gray-400 font-mono text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4">
                      June 2024 - December 2024
                    </p>
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 text-gray-300 text-[10px] sm:text-xs md:text-sm font-mono">
                      <div className="break-words">→ Web application security testing</div>
                      <div className="break-words">→ API vulnerability assessments</div>
                      <div className="break-words">→ Automated security scanning</div>
                    </div>
                  </div>
                </div>

                {/* Anzen Technologies */}
                <div className="border-l-2 border-gray-600 pl-3 sm:pl-4 md:pl-6">
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600">
                    <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white font-mono break-words">
                          Information Security Intern
                        </h3>
                        <p className="text-[#00FF00] font-mono text-xs sm:text-sm md:text-base break-words">
                          Anzen Technologies
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gray-400 text-gray-400 font-mono text-[10px] sm:text-xs w-fit"
                      >
                        Navi Mumbai
                      </Badge>
                    </div>
                    <p className="text-gray-400 font-mono text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4">
                      August 2023 - February 2024
                    </p>
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 text-gray-300 text-[10px] sm:text-xs md:text-sm font-mono">
                      <div className="break-words">→ Web application security testing</div>
                      <div className="break-words">→ API vulnerability assessments</div>
                      <div className="break-words">→ Security assessment reporting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section - Improved responsive grid */}
        <section id="certifications" className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00] flex-shrink-0" />
                <span className="font-mono text-[#00FF00] text-xs sm:text-sm md:text-base break-words">
                  $ cat certifications.json
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
                {/* eJPT v2 Certification */}
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#00FF00]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-white font-mono break-words">
                        eJPT v2
                      </h3>
                      <p className="text-[#00FF00] font-mono text-[10px] sm:text-xs break-words">
                        eLearnSecurity Junior Penetration Tester
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">
                      <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
                      <span className="break-words">Issued: 2025</span>
                    </div>
                    <div className="text-gray-400 break-words">eLearnSecurity</div>
                    <Badge className="bg-[#00FF00] text-black font-mono text-[10px] sm:text-xs">ACTIVE</Badge>
                  </div>
                </div>

                {/* CRTA Certification */}
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#00FF00]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-white font-mono break-words">
                        CRTA
                      </h3>
                      <p className="text-[#00FF00] font-mono text-[10px] sm:text-xs break-words">
                        Certified Red Team Analyst
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm font-mono">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">
                      <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0" />
                      <span className="break-words">Issued: 2025</span>
                    </div>
                    <div className="text-gray-400 break-words">CyberWarFare Labs</div>
                    <Badge className="bg-[#00FF00] text-black font-mono text-[10px] sm:text-xs">ACTIVE</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame Section - Improved responsive grid */}
        <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00] flex-shrink-0" />
                <span className="font-mono text-[#00FF00] text-xs sm:text-sm md:text-base break-words">
                  $ cat hall_of_fame.log
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600 text-center">
                  <div className="h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 overflow-hidden">
                    <Image
                      src="/basf-chemical-company-logo.jpg"
                      width={120}
                      height={40}
                      alt="BASF logo"
                      className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-mono mb-1.5 sm:mb-2 break-words">
                    BASF
                  </h3>
                  <Badge className="bg-[#00FF00] text-black font-mono text-[8px] sm:text-[10px] md:text-xs">
                    HALL_OF_FAME
                  </Badge>
                </div>

                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600 text-center">
                  <div className="h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 overflow-hidden">
                    <Image
                      src="/nokia-telecommunications-logo.jpg"
                      width={120}
                      height={40}
                      alt="Nokia logo"
                      className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-mono mb-1.5 sm:mb-2 break-words">
                    Nokia
                  </h3>
                  <Badge className="bg-[#00FF00] text-black font-mono text-[8px] sm:text-[10px] md:text-xs">
                    HALL_OF_FAME
                  </Badge>
                </div>

                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600 text-center">
                  <div className="h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 overflow-hidden">
                    <Image
                      src="/lg-electronics-logo.jpg"
                      width={120}
                      height={40}
                      alt="LG logo"
                      className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-mono mb-1.5 sm:mb-2 break-words">
                    LG
                  </h3>
                  <Badge className="bg-[#00FF00] text-black font-mono text-[8px] sm:text-[10px] md:text-xs">
                    HALL_OF_FAME
                  </Badge>
                </div>

                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600 text-center">
                  <div className="h-8 sm:h-10 md:h-12 lg:h-16 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 overflow-hidden">
                    <Image
                      src="/united-nations-un-logo.jpg"
                      width={120}
                      height={40}
                      alt="United Nations logo"
                      className="max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white font-mono mb-1.5 sm:mb-2 break-words">
                    United Nations
                  </h3>
                  <Badge className="bg-[#00FF00] text-black font-mono text-[8px] sm:text-[10px] md:text-xs">
                    HALL_OF_FAME
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Improved responsive layout */}
        <section id="contact" className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00] flex-shrink-0" />
                <span className="font-mono text-[#00FF00] text-xs sm:text-sm md:text-base break-words">
                  $ ./contact_info.sh
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm">email:</div>
                      <a
                        href="mailto:kashyapankush394@gmail.com"
                        className="text-white hover:text-[#00FF00] transition-colors font-mono text-[10px] sm:text-xs md:text-sm break-all"
                      >
                        kashyapankush394@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm">phone:</div>
                      <a
                        href="tel:+918828150462"
                        className="text-white hover:text-[#00FF00] transition-colors font-mono text-[10px] sm:text-xs md:text-sm break-all"
                      >
                        +91 8828150462
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#00FF00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00FF00]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm">location:</div>
                      <span className="text-white font-mono text-[10px] sm:text-xs md:text-sm break-words">
                        Mumbai, India
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <Link
                      href="https://linkedin.com/in/Ankushhhh14"
                      target="_blank"
                      className="text-[#00FF00] hover:text-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                    <Link href="#" className="text-[#00FF00] hover:text-white transition-colors">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                    <Link href="#" className="text-[#00FF00] hover:text-white transition-colors">
                      <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-600">
                  <div className="font-mono text-[#00FF00] text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 break-words">
                    $ echo "Ready to secure your systems?"
                  </div>
                  <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    Let's connect and discuss how I can help enhance your organization's security posture through
                    comprehensive assessments and expert consultation.
                  </p>
                  <a href="mailto:kashyapankush394@gmail.com?subject=Security%20Consultation%20Inquiry">
                    <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-mono w-full text-[10px] sm:text-xs md:text-sm py-2 sm:py-2.5">
                      ./send_message.sh
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Improved responsive padding */}
      <footer className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-gray-400 text-[10px] sm:text-xs md:text-sm break-words px-2">
            © 2025 Ankush Kashyap. All rights reserved. | ankush@security:~$
          </p>
        </div>
      </footer>
    </div>
  )
}
