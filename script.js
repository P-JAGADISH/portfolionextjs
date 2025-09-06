class PortfolioBook {
  constructor() {
    this.currentPage = 1
    this.totalPages = 7
    this.isAnimating = false

    this.init()
  }

  init() {
    /* Simplified initialization to ensure pages display immediately */
    this.showInitialPages()
    this.bindEvents()
    this.updateNavigation()
    this.addPageTransitions()
  }

  showInitialPages() {
    /* Show first page immediately without hiding all pages first */
    const page1 = document.querySelector("#page-1")
    const page2 = document.querySelector("#page-2")

    // Hide pages 3-7 only
    for (let i = 3; i <= 7; i++) {
      const page = document.querySelector(`#page-${i}`)
      if (page) page.classList.add("hidden")
    }

    // Ensure first two pages are visible
    if (page1) {
      page1.classList.remove("hidden")
      page1.style.opacity = "1"
      page1.style.transform = "translateX(0)"
    }
    if (page2) {
      page2.classList.remove("hidden")
      page2.style.opacity = "1"
      page2.style.transform = "translateX(0)"
    }
  }

  initializePages() {
    // Hide all pages first
    document.querySelectorAll(".book-page").forEach((page) => {
      page.classList.add("hidden")
    })

    // Show first two pages (page 1 and 2)
    const page1 = document.querySelector("#page-1")
    const page2 = document.querySelector("#page-2")

    if (page1) page1.classList.remove("hidden")
    if (page2) page2.classList.remove("hidden")
  }

  bindEvents() {
    // Navigation buttons
    document.getElementById("prevBtn").addEventListener("click", () => this.previousPage())
    document.getElementById("nextBtn").addEventListener("click", () => this.nextPage())

    // Page indicators
    document.querySelectorAll(".indicator-dot").forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToPage(index + 1))
    })

    // Contact me button
    const contactBtn = document.querySelector(".contact-me")
    if (contactBtn) {
      contactBtn.addEventListener("click", () => this.goToPage(7))
    }

    // Form submission
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", this.handleFormSubmit.bind(this))
    }

    // Keyboard navigation
    document.addEventListener("keydown", this.handleKeyPress.bind(this))

    // Add hover effects to skill tags
    this.addSkillTagEffects()

    // Add service card animations
    this.addServiceCardAnimations()
  }

  nextPage() {
    if (this.currentPage < this.totalPages && !this.isAnimating) {
      const nextPage = this.currentPage % 2 === 1 ? this.currentPage + 2 : this.currentPage + 1
      this.goToPage(Math.min(nextPage, this.totalPages))
    }
  }

  previousPage() {
    if (this.currentPage > 1 && !this.isAnimating) {
      const prevPage = this.currentPage % 2 === 1 ? this.currentPage - 2 : this.currentPage - 1
      this.goToPage(Math.max(prevPage, 1))
    }
  }

  goToPage(pageNumber) {
    if (pageNumber === this.currentPage || this.isAnimating) return

    this.isAnimating = true

    /* Improved page switching logic */
    // Hide current pages
    const currentLeftPage = document.querySelector(`#page-${this.currentPage}`)
    const currentRightPage = document.querySelector(`#page-${this.currentPage + 1}`)

    if (currentLeftPage) currentLeftPage.classList.add("hidden")
    if (currentRightPage) currentRightPage.classList.add("hidden")

    // Show new pages immediately
    setTimeout(() => {
      const newLeftPage = document.querySelector(`#page-${pageNumber}`)
      const newRightPage = document.querySelector(`#page-${pageNumber + 1}`)

      if (newLeftPage) {
        newLeftPage.classList.remove("hidden")
        newLeftPage.style.opacity = "1"
        newLeftPage.style.transform = "translateX(0)"
        this.animatePageContent(newLeftPage)
      }

      if (newRightPage && pageNumber < this.totalPages) {
        newRightPage.classList.remove("hidden")
        newRightPage.style.opacity = "1"
        newRightPage.style.transform = "translateX(0)"
        this.animatePageContent(newRightPage)
      }

      this.currentPage = pageNumber
      this.updateNavigation()

      setTimeout(() => {
        this.isAnimating = false
      }, 300)
    }, 100)
  }

  animatePageContent(page) {
    const elements = page.querySelectorAll(".timeline-item, .service-card, .skill-tag, .form-group")
    elements.forEach((el, index) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"

      setTimeout(() => {
        el.style.transition = "all 0.5s ease"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, index * 100)
    })
  }

  updateNavigation() {
    document.getElementById("pageNumber").textContent = Math.ceil(this.currentPage / 2)

    // Update navigation buttons
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")

    prevBtn.disabled = this.currentPage === 1
    nextBtn.disabled = this.currentPage >= this.totalPages

    // Update page indicators
    document.querySelectorAll(".indicator-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index + 1 === this.currentPage)
    })
  }

  handleKeyPress(e) {
    switch (e.key) {
      case "ArrowLeft":
        this.previousPage()
        break
      case "ArrowRight":
        this.nextPage()
        break
      case "Home":
        this.goToPage(1)
        break
      case "End":
        this.goToPage(this.totalPages - 1)
        break
    }
  }

  handleFormSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const submitBtn = e.target.querySelector('button[type="submit"]')

    // Animate button
    submitBtn.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Sending...'
    submitBtn.disabled = true

    // Simulate form submission
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="bi bi-check-circle"></i> Message Sent!'
      submitBtn.style.background = "#10b981"

      setTimeout(() => {
        submitBtn.innerHTML = "Send Message"
        submitBtn.style.background = ""
        submitBtn.disabled = false
        e.target.reset()
      }, 2000)
    }, 1500)
  }

  addPageTransitions() {
    // Add smooth transitions between pages
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateX(0)"
        }
      })
    })

    document.querySelectorAll(".book-page").forEach((page) => {
      observer.observe(page)
    })
  }

  addSkillTagEffects() {
    document.querySelectorAll(".skill-tag").forEach((tag) => {
      tag.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.05)"
      })

      tag.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)"
      })
    })
  }

  addServiceCardAnimations() {
    document.querySelectorAll(".service-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`

      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px) scale(1.02)"
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)"
      })
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loadingScreen")
  const mainWrapper = document.getElementById("mainWrapper")

  /* Reduced loading time and ensured immediate content display */
  setTimeout(() => {
    loadingScreen.classList.add("hidden")

    // Initialize portfolio book immediately
    setTimeout(() => {
      new PortfolioBook()
    }, 100)
  }, 1500)
})

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Parallax effect for profile image
  const profileImg = document.querySelector(".profile-img")
  if (profileImg) {
    profileImg.addEventListener("mousemove", (e) => {
      const rect = profileImg.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      profileImg.style.transform = `scale(1.05) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`
    })

    profileImg.addEventListener("mouseleave", () => {
      profileImg.style.transform = "scale(1) rotateX(0) rotateY(0)"
    })
  }

  // Add typing effect to profile title
  const profileTitle = document.querySelector(".profile-title")
  if (profileTitle) {
    const text = profileTitle.textContent
    profileTitle.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        profileTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(typeWriter, 1000)
  }
})
