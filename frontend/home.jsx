// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Truck, Wrench, Settings, Disc, BarChart3, ShieldCheck, Calendar, CheckCircle2, Award, Globe2, ArrowRight, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(true);
  const [navVisible, setNavVisible] = useState(true);
const lastScrollY = useRef(0);
const handleNavLinkClick = (sectionId) => {
  scrollToSection(sectionId);
  setMenuOpen(false); // Cierra el menú automáticamente al hacer clic en una sección
};
  const [currentSlide, setCurrentSlide] = useState(0);
const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Regresa al inicio
      videoRef.current.play().catch(error => console.log("Error al reiniciar loop:", error));
    }
  };
  const slides = [
    {
      title: "Excelencia en Servicios Petroleros",
      subtitle: "Soluciones integrales para la industria energética",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop"
    },
    {
      title: "Tecnología de Punta",
      subtitle: "Innovación y eficiencia en cada operación",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop"
    },
    {
      title: "Compromiso con la Seguridad",
      subtitle: "Estándares internacionales en cada proyecto",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&h=900&fit=crop"
    }
  ];
  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 1. Siempre mostrar el navbar si estamos muy arriba (en la sección de inicio)
    if (currentScrollY < 100) {
      setNavVisible(true);
    } 
    // 2. Si bajamos, ocultamos el nav. Si subimos, lo mostramos.
    else if (currentScrollY > lastScrollY.current) {
      setNavVisible(false); // Bajando -> Ocultar
    } else {
      setNavVisible(true);  // Subiendo -> Mostrar
    }

    // Guardamos la posición actual para la próxima comparación
    lastScrollY.current = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);

  // Limpieza del evento al desmontar el componente
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    } 
  };

  return (
<div className="app">
    {/* Navbar con clase condicional para ocultarse */}
    <nav className={`navbar 
      ${activeSection !== 'inicio' ? 'navbar-scrolled' : ''} 
      ${navVisible ? 'nav-show' : 'nav-hidden'}`}
    >
      <div className="logo">
        <span className="logo-icon"></span>
        <span className="logo-text">PetroServ</span>
      </div>
      
      {/* Tu botón hamburguesa y lista ul se mantienen exactamente igual... */}
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <li><a href="#inicio" onClick={() => handleNavLinkClick('inicio')}>Inicio</a></li>
        <li><a href="#servicios" onClick={() => handleNavLinkClick('servicios')}>Servicios</a></li>
        <li><a href="#trayectoria" onClick={() => handleNavLinkClick('trayectoria')}>Trayectoria</a></li>
        <li><a href="#clientes" onClick={() => handleNavLinkClick('clientes')}>Clientes</a></li>
        <li><a href="#noticias" onClick={() => handleNavLinkClick('noticias')}>Noticias</a></li>
        <li><a href="#contacto" onClick={() => handleNavLinkClick('contacto')}>Contacto</a></li>
      </ul>
    </nav>

<section id="inicio" className="banner-video-section">
      {/* Elemento de Video de Fondo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="banner-video-bg"
      >
        <source src="/videos/industrial-background.mp4" type="video/mp4" />
        {/* Puedes añadir un fallback de imagen aquí por si el video no carga */}
        Tu navegador no soporta videos en segundo plano.
      </video>

      {/* Capa de superposición para oscurecer el video y mejorar contraste */}
      <div className="banner-video-overlay"></div>

      {/* Contenido principal fijo */}
      <div className="banner-content">
        <h1 className="banner-title">
          Innovación y Potencia en la Industria Petrolera
        </h1>
        <p className="banner-subtitle">
          Soluciones de alta ingeniería, transporte especializado y soporte operativo con estándares globales.
        </p>
        <div className="banner-buttons">
          <button className="cta-button primary" onClick={() => scrollToSection('servicios')}>
            Nuestros Servicios
          </button>
          <button className="cta-button secondary" onClick={() => scrollToSection('contacto')}>
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  

    <section id="servicios" className="services-section">
      <div className="section-header">
        <span className="section-badge">Nuestro Expertise</span>
        <h2>Servicios Especializados</h2>
        <p className="section-description">
          Ofrecemos soluciones completas para la industria petrolera con los más altos estándares de calidad.
        </p>
      </div>

      <div className="services-grid">
        {/* Tarjeta 1 */}
        <div className="service-card-3d">
          <div className="card-content">
            <div className="service-icon-wrapper">
              <Truck className="service-icon-svg" size={32} />
            </div>
            <h3>Transporte Especializado</h3>
            <p>Flota de vehículos para transporte de equipos, tuberías y materiales peligrosos con certificación ISO 28000.</p>
            <ul className="service-features">
              <li>Transporte terrestre y marítimo</li>
              <li>Monitoreo GPS en tiempo real</li>
              <li>Seguros internacionales</li>
            </ul>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="service-card-3d">
          <div className="card-content">
            <div className="service-icon-wrapper">
              <Wrench className="service-icon-svg" size={32} />
            </div>
            <h3>Mantenimiento Industrial</h3>
            <p>Mantenimiento preventivo y correctivo de bombas, compresores, turbinas y sistemas de perforación.</p>
            <ul className="service-features">
              <li>Mantenimiento predictivo</li>
              <li>Reparación de equipos</li>
              <li>Refacciones originales</li>
            </ul>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="service-card-3d">
          <div className="card-content">
            <div className="service-icon-wrapper">
              <Settings className="service-icon-svg" size={32} />
            </div>
            <h3>Calibración de Válvulas</h3>
            <p>Calibración certificada de válvulas de seguridad, alivio y control con trazabilidad NIST.</p>
            <ul className="service-features">
              <li>Válvulas de seguridad API</li>
              <li>Válvulas de control</li>
              <li>Certificación ISO 17025</li>
            </ul>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="service-card-3d">
          <div className="card-content">
            <div className="service-icon-wrapper">
              <Disc className="service-icon-svg" size={32} />
            </div>
            <h3>Perforación Direccional</h3>
            <p>Servicios de perforación direccional y horizontal con tecnología de última generación.</p>
            <ul className="service-features">
              <li>Perforación horizontal</li>
              <li>Medición mientras perforas</li>
              <li>Navegación geológica</li>
            </ul>
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="service-card-3d">
          <div className="card-content">
            <div className="service-icon-wrapper">
              <BarChart3 className="service-icon-svg" size={32} />
            </div>
            <h3>Ingeniería de Yacimientos</h3>
            <p>Estudios de caracterización, simulación y optimización de producción de yacimientos.</p>
            <ul className="service-features">
              <li>Simulación numérica</li>
              <li>Análisis PVT</li>
              <li>Optimización de producción</li>
            </ul>
          </div>
        </div>

        {/* Tarjeta 6 */}
        <div className="service-card-3d">
          <div className="card-content">
            <div className="service-icon-wrapper">
              <ShieldCheck className="service-icon-svg" size={32} />
            </div>
            <h3>Seguridad Industrial</h3>
            <p>Consultoría en seguridad, análisis de riesgos y capacitación en normas API y OSHA.</p>
            <ul className="service-features">
              <li>Auditorías de seguridad</li>
              <li>Planes de emergencia</li>
              <li>Capacitación certificada</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  

    <section id="trayectoria" className="trajectory-section">
      <div className="trajectory-bg"></div>
      
      <div className="section-header light">
        <span className="section-badge">Nuestra Historia</span>
        <h2>25 Años de Excelencia</h2>
      </div>

      <div className="stats-container">
        {/* Estadísticas 1 */}
        <div className="stat-item-3d">
          <div className="stat-icon-wrapper">
            <Calendar className="stat-icon-svg" size={28} />
          </div>
          <div className="stat-info">
            <span className="stat-number" data-target="25">25+</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
        </div>

        {/* Estadísticas 2 */}
        <div className="stat-item-3d">
          <div className="stat-icon-wrapper">
            <CheckCircle2 className="stat-icon-svg" size={28} />
          </div>
          <div className="stat-info">
            <span className="stat-number" data-target="500">500+</span>
            <span className="stat-label">Proyectos completados</span>
          </div>
        </div>

        {/* Estadísticas 3 */}
        <div className="stat-item-3d">
          <div className="stat-icon-wrapper">
            <Award className="stat-icon-svg" size={28} />
          </div>
          <div className="stat-info">
            <span className="stat-number" data-target="98">98%</span>
            <span className="stat-label">Tasa de satisfacción</span>
          </div>
        </div>

        {/* Estadísticas 4 */}
        <div className="stat-item-3d">
          <div className="stat-icon-wrapper">
            <Globe2 className="stat-icon-svg" size={28} />
          </div>
          <div className="stat-info">
            <span className="stat-number" data-target="15">15</span>
            <span className="stat-label">Países con operaciones</span>
          </div>
        </div>
        </div>
</section>


<section id="clientes" className="clients-section">
      <div className="section-header">
        <span className="section-badge">Alianzas Estratégicas</span>
        <h2>Empresas mundiales que confían en nosotros</h2>
      </div>
      
      <div className="clients-grid-3d">
        {/* Cliente 1: Chevron */}
        <div className="client-card-3d">
          <div className="client-card-inner">
            <div className="client-logo-container">
              <img 
                src="/images/logos/chevron1.png" 
                alt="Logo Chevron" 
                className="client-real-logo logo-chevron"
              />
            </div>
            <span className="client-brand-name">Chevron</span>
          </div>
        </div>

        {/* Cliente 2: SLB */}
        <div className="client-card-3d">
          <div className="client-card-inner">
            <div className="client-logo-container">
              <img 
                src="/images/logos/slb1.png" 
                alt="Logo SLB Schlumberger" 
                className="client-real-logo logo-slb"
              />
            </div>
            <span className="client-brand-name">SLB Global</span>
          </div>
        </div>

        {/* Cliente 3: BP */}
        <div className="client-card-3d">
          <div className="client-card-inner">
            <div className="client-logo-container">
              <img 
                src="/images/logos/bp.png" 
                alt="Logo BP" 
                className="client-real-logo logo-bp"
              />
            </div>
            <span className="client-brand-name">BP Energy</span>
          </div>
        </div>

        {/* Cliente 4: Halliburton */}
        <div className="client-card-3d">
          <div className="client-card-inner">
            <div className="client-logo-container">
              <img 
                src="/images/logos/halliburton.png" 
                alt="Logo Halliburton" 
                className="client-real-logo logo-halliburton"
              />
            </div>
            <span className="client-brand-name">Halliburton</span>
          </div>
        </div>

 
      </div>
    </section>
  

   <section id="noticias" className="news-section">
      <div className="section-header">
        <span className="section-badge">Actualidad</span>
        <h2>Noticias Recientes</h2>
      </div>

      <div className="news-grid-3d">
        {/* Noticia 1: Destacada (Featured) */}
        <div className="news-card-3d featured">
          <div className="news-image-wrapper">
            <div 
              className="news-image" 
              style={{backgroundImage: "url('https://centralmunicipal.mx/wp-content/uploads/2022/12/IMG-20221227-WA0012-750x536.jpg')"}}
            ></div>
          </div>
          <div className="news-card-content">
            <div className="news-meta">
              <span className="news-category">Contratos</span>
              <span className="news-date">
                <Calendar size={14} className="meta-icon" /> 15 Mar 2026
              </span>
            </div>
            <h3>Nuevo contrato de mantenimiento en el Golfo de México</h3>
            <p>PetroServ firma acuerdo por 3 años para mantenimiento integral y soporte de plataformas marinas en la región.</p>
            <a href="#" className="news-link">
              <span>Leer artículo</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>
          </div>
        </div>

        {/* Noticia 2: Estándar */}
        <div className="news-card-3d">
          <div className="news-image-wrapper">
            <div 
              className="news-image" 
              style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661604351507-8ef091e6c93c?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
            ></div>
          </div>
          <div className="news-card-content">
            <div className="news-meta">
              <span className="news-category font-blue">Certificaciones</span>
              <span className="news-date">
                <Calendar size={14} className="meta-icon" /> 28 Feb 2026
              </span>
            </div>
            <h3>Certificación ISO 45001 en seguridad laboral</h3>
            <p>Obtenemos la máxima certificación internacional en gestión de seguridad y salud ocupacional para operaciones de alto riesgo.</p>
            <a href="#" className="news-link">
              <span>Leer artículo</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>
          </div>
        </div>

        {/* Noticia 3: Estándar */}
        <div className="news-card-3d">
          <div className="news-image-wrapper">
            <div 
              className="news-image" 
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop')"}}
            ></div>
          </div>
          <div className="news-card-content">
            <div className="news-meta">
              <span className="news-category font-green">Expansión</span>
              <span className="news-date">
                <Calendar size={14} className="meta-icon" /> 10 Ene 2026
              </span>
            </div>
            <h3>Inauguración de nueva base operativa en Texas</h3>
            <p>Ampliamos nuestra infraestructura en Norteamérica con un centro logístico estratégico para soporte de taladros.</p>
            <a href="#" className="news-link">
              <span>Leer artículo</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>

      {/* Contacto */}
      <section id="contacto" className="contact-section">
        <div className="contact-bg"></div>
        <div className="section-header light">
          <span className="section-badge">Comunicación</span>
          <h2>Contáctanos</h2>
        </div>
        
        <div className="contact-container">
          <div className="contact-info-grid">
            {/* Tarjeta Dirección */}
            <div className="info-card-3d">
              <div className="info-icon-wrapper">
                <MapPin size={22} className="info-icon-svg" />
              </div>
              <div className="info-text">
                <h4>Dirección</h4>
                <p>Av. Petrolera 1234, Houston, TX 77001</p>
              </div>
            </div>

            {/* Tarjeta Teléfono */}
            <div className="info-card-3d">
              <div className="info-icon-wrapper">
                <Phone size={22} className="info-icon-svg" />
              </div>
              <div className="info-text">
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Tarjeta Email */}
            <div className="info-card-3d">
              <div className="info-icon-wrapper">
                <Mail size={22} className="info-icon-svg" />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>info@petroserv.com</p>
              </div>
            </div>

            {/* Tarjeta Horario */}
            <div className="info-card-3d">
              <div className="info-icon-wrapper">
                <Clock size={22} className="info-icon-svg" />
              </div>
              <div className="info-text">
                <h4>Horario</h4>
                <p>Lun - Vie: 8:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Formulario Industrial Moderno */}
          <form className="contact-form-3d" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="input-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email corporativo" required />
              </div>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Asunto" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Detalles del requerimiento o mensaje..." rows="5" required></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              <span>Enviar mensaje</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer Corporativo */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-brand-block">
            <h4>PetroServ</h4>
            <p>EFundados en 1999, hemos consolidado más de dos décadas de trayectoria basadas en la excelencia y la innovación técnica. Nos especializamos en brindar servicios petroleros de primer nivel e ingeniería de operaciones avanzada, optimizando cada proceso para garantizar la máxima eficiencia, seguridad y rentabilidad en cada proyecto.</p>
          </div>
          
          <div className="footer-links-block">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
              <li><a href="#servicios" onClick={() => scrollToSection('servicios')}>Servicios</a></li>
              <li><a href="#trayectoria" onClick={() => scrollToSection('trayectoria')}>Trayectoria</a></li>
              <li><a href="#contacto" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-social-block">
            <h4>Canales Oficiales</h4>
            <div className="social-links-grid">
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="X (Twittericon)">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Facebookicon">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PetroServ - Todos los derechos reservados. Infraestructura tecnológica industrial.</p>
        </div>
      </footer>
    </div>
    
  );
};

export default App;
