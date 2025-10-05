import React, { useState, useEffect } from "react";
import "./App.css";

const ModernWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // بيانات الموقع
  const [services] = useState([
    {
      id: 1,
      icon: "💻",
      title: "تطوير الويب",
      description: "نطور مواقع ويب متكاملة بتقنيات حديثة وسريعة الاستجابة",
      features: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      icon: "📱",
      title: "تطبيقات الجوال",
      description: "تصميم وتطوير تطبيقات الهواتف الذكية لأنظمة iOS و Android",
      features: ["React Native", "Flutter", "Firebase"],
    },
    {
      id: 3,
      icon: "🎨",
      title: "تصميم UI/UX",
      description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام",
      features: ["Figma", "Adobe XD", "Prototyping"],
    },
    {
      id: 4,
      icon: "🛒",
      title: "متاجر إلكترونية",
      description: "بناء متاجر إلكترونية متكاملة مع أنظمة الدفع",
      features: ["Shopify", "WooCommerce", "Payment Gateways"],
    },
  ]);

  const [projects] = useState([
    {
      id: 1,
      title: "منصة تعليمية",
      category: "ويب",
      image: "🎓",
      description: "منصة تعليمية متكاملة مع نظام إدارة المحتوى",
    },
    {
      id: 2,
      title: "تطبيق توصيل",
      category: "جوال",
      image: "🚚",
      description: "تطبيق توصيل طعام مع نظام متابعة في الوقت الفعلي",
    },
    {
      id: 3,
      title: "موقع شركة",
      category: "ويب",
      image: "🏢",
      description: "موقع شركة احترافي مع نظام إدارة المحتوى",
    },
    {
      id: 4,
      title: "متجر إلكتروني",
      category: "ويب",
      image: "🛍️",
      description: "متجر إلكتروني متكامل مع نظام الدفع",
    },
  ]);

  const [testimonials] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      position: "مدير تسويق",
      content: "خدمات ممتازة وسريعة، فريق محترف أنصح بالتعامل معهم",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "فاطمة عبدالله",
      position: "صاحبة مشروع",
      content: "ساعدوني في تطوير متجري الإلكتروني بشكل رائع ومحترف",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "خالد السعدي",
      position: "مدير تقنية",
      content: "فريق مبدع ومحترف في مجال التصميم والتطوير",
      rating: 4,
      avatar: "👨‍🔧",
    },
  ]);

  // تتبع التمرير
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // تتبع الأقسام النشطة
      const sections = ["home", "about", "services", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // التنقل السلس
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سنرد عليك قريباً.");
    e.target.reset();
  };

  return (
    <div className="modern-website">
      {/* الهيدر */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <i className="fas fa-rocket"></i>
              <span>
                تكنو<span>سول</span>
              </span>
            </div>

            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <ul>
                {["home", "about", "services", "projects", "contact"].map(
                  (section) => (
                    <li key={section}>
                      <a
                        className={activeSection === section ? "active" : ""}
                        onClick={() => scrollToSection(section)}
                      >
                        {section === "home" && "الرئيسية"}
                        {section === "about" && "من نحن"}
                        {section === "services" && "خدماتنا"}
                        {section === "projects" && "أعمالنا"}
                        {section === "contact" && "اتصل بنا"}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="header-actions">
              <button
                className="cta-button"
                onClick={() => scrollToSection("contact")}
              >
                ابدأ مشروعك
              </button>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* القسم الرئيسي */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span className="gradient-text">نحو عالم رقمي</span>
                <br />
                <span>متميز وإبداعي</span>
              </h1>
              <p>
                نقدم حلولاً تقنية متكاملة تساعدك على النمو والتميز في عالم
                الأعمال الرقمية. نحن شركة رائدة في مجال التطوير والتصميم الرقمي.
              </p>
              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  شاهد أعمالنا
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => scrollToSection("about")}
                >
                  اعرف المزيد
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <h3>+500</h3>
                  <p>مشروع مكتمل</p>
                </div>
                <div className="stat">
                  <h3>+150</h3>
                  <p>عميل سعيد</p>
                </div>
                <div className="stat">
                  <h3>+5</h3>
                  <p>سنوات خبرة</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <i className="fas fa-mobile-alt"></i>
                  <span>تطبيقات الجوال</span>
                </div>
                <div className="floating-card card-2">
                  <i className="fas fa-laptop-code"></i>
                  <span>تطوير الويب</span>
                </div>
                <div className="floating-card card-3">
                  <i className="fas fa-shopping-cart"></i>
                  <span>متاجر إلكترونية</span>
                </div>
                <div className="main-visual">
                  <div className="visual-content">
                    <i className="fas fa-rocket"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-background">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
        </div>
      </section>

      {/* قسم من نحن */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>من نحن</h2>
            <p>شركة رائدة في مجال الحلول التقنية والرقمية</p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>نحن فريق من المبدعين والمطورين المحترفين</h3>
              <p>
                نعمل معاً لتقديم أفضل الحلول التقنية التي تلبي احتياجات عملائنا
                وتساعدهم على تحقيق أهدافهم في العالم الرقمي. نحن نؤمن بأن
                التكنولوجيا يجب أن تكون أداة لتسهيل الحياة ودفع عجلة التطور.
              </p>

              <div className="features-grid">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="feature-content">
                    <h4>تسليم سريع</h4>
                    <p>نضمن تسليم المشاريع في الوقت المتفق عليه</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-medal"></i>
                  </div>
                  <div className="feature-content">
                    <h4>جودة عالية</h4>
                    <p>نقدم أعلى معايير الجودة في جميع مشاريعنا</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="feature-content">
                    <h4>دعم فني</h4>
                    <p>دعم فني متواصل بعد انتهاء المشروع</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="feature-content">
                    <h4>حلول مبدعة</h4>
                    <p>نقدم حلولاً مبتكرة تلبي احتياجاتك</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="visual-container">
                <div className="team-visual">
                  <div className="team-member member-1">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="team-member member-2">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="team-member member-3">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>خدماتنا</h2>
            <p>نقدم مجموعة متكاملة من الخدمات التقنية</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="service-link">
                  اعرف المزيد <i className="fas fa-arrow-left"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الأعمال */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>أعمالنا</h2>
            <p>إطلالة على بعض مشاريعنا الناجحة</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">{project.image}</div>
                  <div className="project-overlay">
                    <button className="view-project">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              اطلب مشروعك الآن
            </button>
          </div>
        </div>
      </section>

      {/* قسم آراء العملاء */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>آراء عملائنا</h2>
            <p>ماذا يقول عملاؤنا عن خدماتنا</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="rating">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p>"{testimonial.content}"</p>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الاتصال */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>اتصل بنا</h2>
            <p>نحن هنا لمساعدتك في مشروعك القادم</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>الهاتف</h4>
                  <p>+966 50 123 4567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>البريد الإلكتروني</h4>
                  <p>info@technosol.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>العنوان</h4>
                  <p>الرياض، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="social-links">
                <h4>تابعنا على</h4>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="الاسم الكامل" required />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input type="text" placeholder="الموضوع" required />
              </div>

              <div className="form-group">
                <textarea placeholder="الرسالة" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-primary">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <i className="fas fa-rocket"></i>
                <span>
                  تكنو<span>سول</span>
                </span>
              </div>
              <p>
                شركة رائدة في تقديم الحلول التقنية والرقمية المتكاملة لمساعدة
                الشركات على النمو والنجاح في العالم الرقمي.
              </p>
            </div>

            <div className="footer-section">
              <h4>روابط سريعة</h4>
              <ul>
                <li>
                  <a onClick={() => scrollToSection("home")}>الرئيسية</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("about")}>من نحن</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("services")}>خدماتنا</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("projects")}>أعمالنا</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>خدماتنا</h4>
              <ul>
                <li>
                  <a>تطوير الويب</a>
                </li>
                <li>
                  <a>تطبيقات الجوال</a>
                </li>
                <li>
                  <a>تصميم UI/UX</a>
                </li>
                <li>
                  <a>متاجر إلكترونية</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>النشرة البريدية</h4>
              <p>اشترك في نشرتنا البريدية لتصلك آخر العروض والأخبار</p>
              <div className="newsletter-form">
                <input type="email" placeholder="بريدك الإلكتروني" />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 تكنوسول. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// إضافة الأنماط
const AppCSS = `
:root {
  --primary: #4361ee;
  --primary-dark: #3a56d4;
  --secondary: #7209b7;
  --accent: #f72585;
  --success: #4cc9f0;
  --warning: #f8961e;
  --error: #e63946;
  --dark: #1d3557;
  --light: #f8f9fa;
  --gray: #6c757d;
  --gray-light: #e9ecef;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
  --border-radius: 12px;
  --border-radius-lg: 20px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --container-width: 1200px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: var(--light);
  direction: rtl;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* الهيدر */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  transition: var(--transition);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--dark);
  text-decoration: none;
}

.logo i {
  margin-left: 0.5rem;
  color: var(--primary);
}

.logo span span {
  color: var(--primary);
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  cursor: pointer;
}

.nav a:hover,
.nav a.active {
  color: var(--primary);
  background: rgba(67, 97, 238, 0.1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cta-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--dark);
  margin: 3px 0;
  transition: var(--transition);
  border-radius: 2px;
}

/* القسم الرئيسي */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
}

.gradient-text {
  background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary:hover {
  background: #e1156d;
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.stat p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  height: 400px;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.main-visual {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.main-visual i {
  font-size: 4rem;
  color: white;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  top: 20px;
  left: 20px;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  animation-delay: 1s;
}

.card-3 {
  bottom: 20px;
  left: 50px;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: 100px;
  left: -100px;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 10%;
}

/* الأقسام العامة */
section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

/* قسم من نحن */
.about {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  color: var(--gray);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.feature {
  display: flex;
  gap: 1rem;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-content h4 {
  font-size: 1.2rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.feature-content p {
  color: var(--gray);
  margin: 0;
  font-size: 0.9rem;
}

.about-visual {
  display: flex;
  justify-content: center;
}

.visual-container {
  width: 300px;
  height: 300px;
  position: relative;
}

.team-visual {
  position: relative;
  width: 100%;
  height: 100%;
}

.team-member {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  border: 4px solid white;
  box-shadow: var(--shadow);
}

.member-1 {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.member-2 {
  bottom: 20px;
  left: 20px;
}

.member-3 {
  bottom: 20px;
  right: 20px;
}

/* قسم الخدمات */
.services {
  background: var(--light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
  border: 1px solid var(--gray-light);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.feature-tag {
  background: var(--gray-light);
  color: var(--dark);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.service-link {
  background: none;
  border: none;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.service-link:hover {
  color: var(--primary-dark);
  gap: 1rem;
}

/* قسم الأعمال */
.projects {
  background: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  background: var(--accent);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.view-project:hover {
  background: #e1156d;
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  background: var(--gray-light);
  color: var(--dark);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
}

.project-content h3 {
  font-size: 1.3rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.project-content p {
  color: var(--gray);
  line-height: 1.6;
}

.projects-cta {
  text-align: center;
}

/* قسم آراء العملاء */
.testimonials {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
}

.testimonials .section-header h2,
.testimonials .section-header p {
  color: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.rating {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-content p {
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  font-size: 2.5rem;
}

.author-info h4 {
  margin-bottom: 0.25rem;
}

.author-info span {
  opacity: 0.8;
  font-size: 0.9rem;
}

/* قسم الاتصال */
.contact {
  background: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-details h4 {
  font-size: 1.2rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.contact-details p {
  color: var(--gray);
  margin: 0;
}

.social-links h4 {
  font-size: 1.2rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 50px;
  height: 50px;
  background: var(--gray-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark);
  text-decoration: none;
  transition: var(--transition);
}

.social-link:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  border: 1px solid var(--gray-light);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
}

/* الفوتر */
.footer {
  background: var(--dark);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.footer-section p {
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
}

.footer-section ul li a:hover {
  color: white;
}

.newsletter-form {
  display: flex;
  margin-top: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  font-size: 1rem;
}

.newsletter-form button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  cursor: pointer;
  transition: var(--transition);
}

.newsletter-form button:hover {
  background: var(--primary-dark);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
}

/* التصميم المتجاوب */
@media (max-width: 1024px) {
  .hero-content {
    gap: 2rem;
  }
  
  .hero-text h1 {
    font-size: 3rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .nav {
    position: fixed;
    top: 80px;
    right: -100%;
    background: white;
    width: 80%;
    height: calc(100vh - 80px);
    transition: var(--transition);
    box-shadow: var(--shadow-lg);
    padding: 2rem;
  }
  
  .nav-open {
    right: 0;
  }
  
  .nav ul {
    flex-direction: column;
    gap: 1rem;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .hero-content,
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .hero-stats {
    justify-content: space-between;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .services-grid,
  .projects-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .floating-card {
    position: relative;
    margin-bottom: 1rem;
  }
  
  .card-1, .card-2, .card-3 {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    transform: none;
    margin: 1rem 0;
  }
  
  .hero-visual {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .header-actions {
    gap: 0.5rem;
  }
  
  .cta-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
`;

// إضافة الأنماط إلى المستند
const styleSheet = document.createElement("style");
styleSheet.textContent = AppCSS;
document.head.appendChild(styleSheet);

export default ModernWebsite;
