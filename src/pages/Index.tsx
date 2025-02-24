
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Cpu, Database, Globe, Mail, MessageSquare, Phone, Sparkles } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          el.classList.add('animate-fade-in');
          el.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section with enhanced animations */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Innovation at its finest</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Innovative Software Solutions for the Digital Age
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create cutting-edge software solutions that transform businesses and drive success
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="group">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with hover effects */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive software solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', icon: Globe, description: 'Modern and responsive web applications' },
              { title: 'Software Development', icon: Code, description: 'Custom software solutions for your business' },
              { title: 'Database Management', icon: Database, description: 'Efficient data storage and management' },
              { title: 'AI Solutions', icon: Cpu, description: 'Intelligent automation and analytics' },
            ].map((service, index) => (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-300 cursor-pointer
                  ${activeService === index ? 'scale-105 shadow-xl bg-primary/5' : 'hover:shadow-lg hover:translate-y-[-4px]'}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`text-primary mb-4 transition-transform duration-300 ${activeService === index ? 'scale-110' : ''}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with parallax effect */}
      <section id="about" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Eklectic</h2>
              <p className="text-gray-600 mb-6">
                We are a forward-thinking software company dedicated to delivering innovative solutions 
                that help businesses thrive in the digital era. Our team of experts combines technical 
                excellence with creative problem-solving to create exceptional software products.
              </p>
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative scroll-animate opacity-0">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Team working" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with hover animations */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-600">Let's discuss how we can help your business grow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Phone', info: '+216 XX XXX XXX' },
              { icon: Mail, title: 'Email', info: 'contact@eklectic.tn' },
              { icon: MessageSquare, title: 'Live Chat', info: 'Available 24/7' },
            ].map((contact, index) => (
              <Card 
                key={index}
                className="p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg scroll-animate opacity-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <contact.icon className="h-8 w-8 mx-auto mb-4 text-primary transition-transform hover:scale-110 duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with gradient animation */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
              eklectic
            </span>
            <p className="mt-4 text-gray-600">© 2024 Eklectic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
