
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Cpu, Database, Globe, Mail, MessageSquare, Phone } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Innovative Software Solutions for the Digital Age
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create cutting-edge software solutions that transform businesses and drive success
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Eklectic</h2>
              <p className="text-gray-600 mb-6">
                We are a forward-thinking software company dedicated to delivering innovative solutions 
                that help businesses thrive in the digital era. Our team of experts combines technical 
                excellence with creative problem-solving to create exceptional software products.
              </p>
              <Button variant="outline">Learn More About Us</Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Team working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-600">Let's discuss how we can help your business grow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+216 XX XXX XXX</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@eklectic.tn</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Available 24/7</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
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
