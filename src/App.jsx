import React, { useState, useEffect } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [testimonials] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      position: "مدير تسويق",
      content: "خدمات ممتازة وسريعة، أنصح بالتعامل معهم",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "فاطمة عبدالله",
      position: "صاحبة مشروع",
      content: "ساعدوني في تطوير متجري الإلكتروني بشكل رائع",
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "خالد السعدي",
      position: "مدير تقنية",
      content: "فريق محترف ومبدع في مجال التصميم والتطوير",
      avatar: "👨‍🔧",
    },
  ]);

  const [services] = useState([
    {
      id: 1,
      icon: "💻",
      title: "تطوير الويب",
      description: "نطور مواقع ويب متكاملة بتقنيات حديثة",
    },
    {
      id: 2,
      icon: "📱",
      title: "تطبيقات الجوال",
      description: "تصميم وتطوير تطبيقات الهواتف الذكية",
    },
    {
      id: 3,
      icon: "🎨",
      title: "تصميم UI/UX",
      description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام",
    },
    {
      id: 4,
      icon: "🛒",
      title: "متاجر إلكترونية",
      description: "بناء متاجر إلكترونية متكاملة",
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollY >= element.offsetTop &&
          scrollY < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <i className="fas fa-code"></i>
              <span>
                تكنو<span>سول</span>
              </span>
            </div>

            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <ul>
                <li>
                  <a
                    className={activeSection === "home" ? "active" : ""}
                    onClick={() => scrollToSection("home")}
                  >
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a
                    className={activeSection === "about" ? "active" : ""}
                    onClick={() => scrollToSection("about")}
                  >
                    من نحن
                  </a>
                </li>
                <li>
                  <a
                    className={activeSection === "services" ? "active" : ""}
                    onClick={() => scrollToSection("services")}
                  >
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a
                    className={activeSection === "portfolio" ? "active" : ""}
                    onClick={() => scrollToSection("portfolio")}
                  >
                    أعمالنا
                  </a>
                </li>
                <li>
                  <a
                    className={activeSection === "contact" ? "active" : ""}
                    onClick={() => scrollToSection("contact")}
                  >
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </nav>

            <button className="cta-button">ابدأ مشروعك</button>

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
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              نحو عالم رقمي <span>متميز</span>
            </h1>
            <p>
              نحن نقدم حلولاً تقنية متكاملة تساعدك على النمو والتميز في عالم
              الأعمال الرقمية
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">ابدأ الآن</button>
              <button className="btn-secondary">اعرف المزيد</button>
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
          <div className="hero-image">
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
          </div>
        </div>
      </section>

      {/* About Section */}
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
                وتساعدهم على تحقيق أهدافهم في العالم الرقمي.
              </p>

              <div className="features">
                <div className="feature">
                  <i className="fas fa-rocket"></i>
                  <div>
                    <h4>تسليم سريع</h4>
                    <p>نضمن تسليم المشاريع في الوقت المتفق عليه</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-medal"></i>
                  <div>
                    <h4>جودة عالية</h4>
                    <p>نقدم أعلى معايير الجودة في جميع مشاريعنا</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-headset"></i>
                  <div>
                    <h4>دعم فني</h4>
                    <p>دعم فني متواصل بعد انتهاء المشروع</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="image-placeholder">
                <i className="fas fa-users"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                <a href="#" className="service-link">
                  اعرف المزيد <i className="fas fa-arrow-left"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>أعمالنا</h2>
            <p>إطلالة على بعض مشاريعنا الناجحة</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="image-placeholder">مشروع متجر إلكتروني</div>
              </div>
              <div className="portfolio-content">
                <h3>متجر إلكتروني متكامل</h3>
                <p>تصميم وتطوير متجر إلكتروني مع نظام دفع إلكتروني</p>
                <span className="portfolio-category">تطوير ويب</span>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="image-placeholder">تطبيق جوال</div>
              </div>
              <div className="portfolio-content">
                <h3>تطبيق توصيل طعام</h3>
                <p>تطبيق جوال لنظام توصيل الطعام مع إدارة المتاجر</p>
                <span className="portfolio-category">تطبيقات جوال</span>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="image-placeholder">منصة تعليمية</div>
              </div>
              <div className="portfolio-content">
                <h3>منصة تعليم إلكتروني</h3>
                <p>منصة متكاملة للتعليم عن بعد مع نظام إدارة المحتوى</p>
                <span className="portfolio-category">تطوير ويب</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>اتصل بنا</h2>
            <p>نحن هنا لمساعدتك في مشروعك القادم</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>الهاتف</h4>
                  <p>+966 50 123 4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>البريد الإلكتروني</h4>
                  <p>info@technosol.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>العنوان</h4>
                  <p>الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="الاسم الكامل" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="البريد الإلكتروني" required />
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <i className="fas fa-code"></i>
                <span>
                  تكنو<span>سول</span>
                </span>
              </div>
              <p>شركة رائدة في تقديم الحلول التقنية والرقمية المتكاملة</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
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
                  <a onClick={() => scrollToSection("portfolio")}>أعمالنا</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>خدماتنا</h4>
              <ul>
                <li>
                  <a href="#">تطوير الويب</a>
                </li>
                <li>
                  <a href="#">تطبيقات الجوال</a>
                </li>
                <li>
                  <a href="#">تصميم UI/UX</a>
                </li>
                <li>
                  <a href="#">متاجر إلكترونية</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>النشرة البريدية</h4>
              <p>اشترك في نشرتنا البريدية لتصلك آخر العروض والأخبار</p>
              <div className="newsletter">
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

// ملف CSS منفصل (App.css)
const AppCSS = `
:root {
  --primary: #2c3e50;
  --secondary: #3498db;
  --accent: #e74c3c;
  --light: #ecf0f1;
  --dark: #2c3e50;
  --gray: #95a5a6;
  --success: #2ecc71;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
  direction: rtl;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background-color: var(--primary);
  color: white;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow);
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo i {
  margin-left: 10px;
  color: var(--secondary);
}

.logo span {
  color: var(--secondary);
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin: 0 15px;
}

.nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.nav ul li a:hover,
.nav ul li a.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.cta-button {
  background-color: var(--secondary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: var(--transition);
}

.cta-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary) 0%, #34495e 100%);
  color: white;
  padding: 150px 0 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero h1 span {
  color: var(--secondary);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 3rem;
}

.btn-primary {
  background-color: var(--secondary);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: var(--transition);
}

.btn-secondary:hover {
  background-color: white;
  color: var(--primary);
}

.hero-stats {
  display: flex;
  gap: 30px;
}

.stat h3 {
  font-size: 2rem;
  margin-bottom: 5px;
}

.stat p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
}

.hero-image {
  position: relative;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: float 3s ease-in-out infinite;
}

.floating-card i {
  font-size: 1.5rem;
  color: var(--secondary);
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

/* Sections Common Styles */
section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.about {
  background-color: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text h3 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 20px;
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #555;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.feature i {
  background-color: var(--secondary);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.feature h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--primary);
}

.feature p {
  margin: 0;
  color: #666;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
}

/* Services Section */
.services {
  background-color: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary);
}

.service-card p {
  color: #666;
  margin-bottom: 20px;
}

.service-link {
  color: var(--secondary);
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

/* Portfolio Section */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.portfolio-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  height: 200px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.portfolio-content {
  padding: 25px;
}

.portfolio-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--primary);
}

.portfolio-content p {
  color: #666;
  margin-bottom: 15px;
}

.portfolio-category {
  background-color: var(--light);
  color: var(--primary);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Testimonials Section */
.testimonials {
  background: linear-gradient(135deg, var(--primary) 0%, #34495e 100%);
  color: white;
}

.testimonials .section-header h2,
.testimonials .section-header p {
  color: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.testimonial-content p {
  font-style: italic;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  font-size: 2rem;
}

.author-info h4 {
  margin-bottom: 5px;
}

.author-info span {
  opacity: 0.8;
  font-size: 0.9rem;
}

/* Contact Section */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-item i {
  background-color: var(--secondary);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-item h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--primary);
}

.contact-item p {
  color: #666;
  margin: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

/* Footer */
.footer {
  background-color: var(--primary);
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--secondary);
}

.footer-section p {
  opacity: 0.8;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: var(--transition);
  cursor: pointer;
}

.footer-section ul li a:hover {
  opacity: 1;
  color: var(--secondary);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.social-links a:hover {
  background-color: var(--secondary);
  transform: translateY(-3px);
}

.newsletter {
  display: flex;
  margin-top: 15px;
}

.newsletter input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
}

.newsletter button {
  background-color: var(--secondary);
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: var(--transition);
}

.newsletter button:hover {
  background-color: #2980b9;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 70px;
    right: -100%;
    background: var(--primary);
    width: 80%;
    height: calc(100vh - 70px);
    transition: 0.3s;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .nav-open {
    right: 0;
  }
  
  .nav ul {
    flex-direction: column;
    padding: 20px;
  }
  
  .nav ul li {
    margin: 15px 0;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .hero .container,
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .hero-stats {
    justify-content: space-between;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .floating-card {
    position: relative;
    margin-bottom: 20px;
  }
  
  .card-1, .card-2, .card-3 {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    transform: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .services-grid,
  .portfolio-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
`;

// إنشاء ملف CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = AppCSS;
document.head.appendChild(styleSheet);

export default App;
