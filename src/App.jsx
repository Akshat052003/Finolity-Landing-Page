import React from 'react';
import myImage from './assets/cover.jpg';
import { Menu, X, CheckCircle, ArrowRight, Globe2, Rocket, Users2, LineChart, Phone, Mail, MapPin, Clock, Brain, Code, Shield, Database, Asterisk } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-accent-purple" />,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business processes."
    },
    {
      icon: <Code className="w-12 h-12 text-accent-blue" />,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-pink" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security solutions."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-pink" />,
      title: "Web Development",
      description: "Tailored software solutions can revolutionize your business, streamlining internal processes, enhancing key operations, and delivering innovative customer-facing platforms."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-pink" />,
      title: "Mobile App Development",
      description: "We customize strategies to match your business goals, blending creativity and research for optimal results."
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Cloud Solutions",
      description: "Scale your infrastructure with modern cloud architecture."
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "contact@intelion.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Business Avenue, Tech City, TC 12345"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-10 bg-dark/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <Asterisk className="w-8 h-8 text-accent-blue transform rotate-45" />
              <span className="text-2xl font-bold text-white">Intelion</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-2 rounded-md hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-light border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Services</a>
              <a href="#solutions" className="block px-3 py-2 text-gray-300 hover:text-white">Solutions</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
              <a href="#careers" className="block px-3 py-2 text-gray-300 hover:text-white">Careers</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative pt-24 lg:pt-32 pb-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="gradient-text">Transform Your Business</span>
                <br />
                <span className="text-white">With Digital Innovation</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-xl">
                We help businesses navigate the digital landscape with cutting-edge solutions and expert consulting services. Our innovative approach ensures your success in the digital era.
              </p>
              <div className="mt-10 flex gap-4">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-md hover:opacity-90 transition">
                  Get Started
                </a>
                <a href="#services" className="px-8 py-3 border border-gray-500 text-white rounded-md hover:border-accent-blue transition">
                  Learn More
                </a>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform lg:translate-y-[-20px]">
            <img src={myImage} alt="Digital innovation" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Comprehensive solutions to drive your business forward
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6 rounded-lg hover-gradient">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div id="solutions" className="py-24 bg-gradient-radial from-dark-light to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                <span className="gradient-text">Enterprise Solutions</span>
              </h2>
              <p className="text-lg text-gray-400">
                Our enterprise solutions are designed to help your business scale efficiently and securely.
              </p>
              <div className="mt-8 space-y-4">
                {["Cloud Infrastructure", "Enterprise Software", "Cybersecurity", "Data Analytics"].map((item, index) => (
                  <div key={index} className="flex items-center glass-card p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-accent-blue" />
                    <span className="ml-4 text-lg text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                alt="Enterprise solutions"
                className="rounded-lg shadow-2xl ring-1 ring-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl ring-1 ring-gray-700"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                <span className="gradient-text">Why Choose Intelion?</span>
              </h2>
              <p className="text-lg text-gray-400">
                We combine expertise, innovation, and dedication to deliver exceptional results.
              </p>
              <div className="mt-10">
                <dl className="space-y-10">
                  {[
                    "Expert Team of Professionals",
                    "Cutting-edge Technology Solutions",
                    "Proven Track Record",
                    "Customer-Centric Approach"
                  ].map((feature, index) => (
                    <div key={index} className="relative glass-card p-4 rounded-lg">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-accent-blue to-accent-purple text-white">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <p className="ml-16 text-lg font-medium text-gray-200">{feature}</p>
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div id="careers" className="py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="gradient-text">Join Our Team</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Be part of our innovative team and help shape the future of technology
            </p>
          </div>
          <div className="mt-12">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
                alt="Team culture"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-md hover:opacity-90 transition">
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-gradient-radial from-dark to-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="gradient-text">Ready to Get Started?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Contact us today to discuss how we can help transform your business
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 rounded-lg text-center hover-gradient">
                <div className="flex justify-center text-accent-blue mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.details}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a href="mailto:contact@intelion.com" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-md hover:opacity-90 transition">
              Contact Us
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-light border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Asterisk className="w-6 h-6 text-accent-blue transform rotate-45" />
                <h3 className="text-white text-lg font-bold">Intelion</h3>
              </div>
              <p className="text-gray-400">
                Leading the way in digital transformation and technology consulting services.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Intelion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;