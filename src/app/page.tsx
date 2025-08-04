"use client";

import { useState } from "react";
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  X,
  CheckCircle,
  Truck,
  Settings,
  Handshake
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/372196903/2895836441.png"
                alt="PDL Haulage Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#0b496d] font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-[#0b496d] font-medium">Our Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#0b496d] font-medium">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-[#0b496d] font-medium">Contact Us</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-[#8394a3]">
                <span>Email info@pdlhaulageltd.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8394a3]">
                <Phone className="h-4 w-4" />
                <span>Call Us 087 9885435</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={toggleMobileMenu}
        />
        
        {/* Mobile navigation panel */}
        <div className="w-64 bg-white h-full ml-auto shadow-lg relative">
          {/* Close button */}
          <div className="flex justify-end p-4 border-b">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile navigation links */}
          <nav className="p-4">
            <div className="space-y-4">
              <a 
                href="#home" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Our Services
              </a>
              <a 
                href="#about" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-[#0b496d] font-medium py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </div>
            
            {/* Mobile contact info */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-2 text-[#8394a3] text-sm">
                <Mail className="h-4 w-4" />
                <span>info@pdlhaulageltd.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8394a3] text-sm">
                <Phone className="h-4 w-4" />
                <span>087 9885435</span>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 73, 109, 0.8), rgba(11, 73, 109, 0.8)), url('https://ext.same-assets.com/372196903/3727887360.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">PDL Haulage Ltd</h1>
          <h2 className="text-2xl md:text-3xl mb-4">Bulk Powder Transport Services</h2>
          <p className="text-xl mb-8">Established 2016 | Serving Ireland & the UK</p>
          <Button
            className="bg-[#0d73c3] hover:bg-[#0b496d] text-white px-8 py-3 text-lg rounded-md"
          >
            Get A Free Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#8394a3] text-sm font-medium uppercase tracking-wide mb-2">Services</p>
            <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#8394a3] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <img
                    src="https://ext.same-assets.com/372196903/2984870009.png"
                    alt="Bulk Transport"
                    className="w-8 h-8 text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Specialist Bulk Powder Transport</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide efficient and reliable transport of dry bulk materials such as <strong>cement, GGBS, limestone, and sand</strong> across <strong>Ireland and the UK</strong>. Our modern fleet is designed specifically for powder haulage, ensuring safe and timely deliveries every time.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <img
                    src="https://ext.same-assets.com/372196903/2442549069.png"
                    alt="High Capacity"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">High-Capacity Rear Steer Tankers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Feldbinder rear-steer belly tankers</strong> are equipped for sites with restricted access, thanks to advanced <strong>hydraulic steering systems</strong>. With <strong>tank capacities from 38m³ to 40m³</strong> and the ability to carry up to <strong>46 tonnes GVW</strong>, we offer a higher load volume than standard rigid tankers.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <img
                    src="https://ext.same-assets.com/372196903/1444858161.png"
                    alt="Flexible Solutions"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Flexible Haulage Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate on a <strong>spot hire</strong> basis for short-term needs, while also offering <strong>long-term contracts</strong> for ongoing projects. Whether it's a one-off job or part of a major construction contract, we tailor our transport services to meet your operational requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-[#0b496d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-80 h-80 opacity-20"
              style={{
                backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="white"/>
                      </pattern>
                    </defs>
                    <path d="M100 50 Q120 30 140 40 Q160 50 180 45 Q200 40 220 50 Q240 60 260 55 Q280 50 300 60 L300 80 Q290 85 280 80 Q270 75 260 80 Q250 85 240 80 Q230 75 220 80 Q210 85 200 80 Q190 75 180 80 Q170 85 160 80 Q150 75 140 80 Q130 85 120 80 Q110 75 100 80 Z" fill="url(#dots)"/>
                  </svg>
                `)})`
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-8">Your Safety is Important to Us</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Our drivers at PDL should ensure that they reach out to management if they need help or assistance on site at any time. Drivers should take a record of the site telephone and have it to hand if needed. Please remember that site teams are there to help and under no circumstances should drivers put themselves at risk.
              </p>
              <p>
                Ensure to feedback any issues or concerns that you have to PDL management or logistics manager.
              </p>
              <p>
                At the forefront of environmental and safety standards, our nationwide haulier network delivery of products where they need to be, when they need to be. Logistics play a critical part of driving some of the Ireland's construction projects forward, keeping PDL Haulage at the heart of construction.
              </p>
            </div>
            <Button
              className="mt-8 bg-[#0d73c3] hover:bg-white hover:text-[#0b496d] text-white px-8 py-3 text-lg rounded-md transition-colors"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Fleet Technology Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#8394a3] text-sm font-medium uppercase tracking-wide mb-2">About Us</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Advanced Fleet Technology</h2>
              <p className="text-gray-600 text-lg mb-6">
                Each of our <strong>Feldbinder bulk powder tankers</strong> is equipped with cutting-edge safety and performance features to ensure the safe delivery of your materials. Key features include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#34a49c] mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>360-degree safety cameras</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#34a49c] mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Pedestrian audible warning systems</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#34a49c] mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>In-chassis compressors</strong> fitted on the tractor unit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#34a49c] mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Specialised rear-steer belly tankers</strong> with hydraulic steering for restricted access sites</span>
                </li>
              </ul>

              <p className="text-gray-600 mb-4">
                These state-of-the-art tankers offer a <strong>greater payload capacity (GVW of up to 46 tonnes)</strong> compared to standard rigid tankers, providing clients with better cost-efficiency and delivery flexibility.
              </p>

              <p className="text-gray-600">
                <strong>Tank capacities range from 38m³ to 40m³</strong>, making them ideal for large-volume material transport in the construction, manufacturing, and infrastructure sectors.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://ext.same-assets.com/372196903/1749919668.jpeg"
                alt="PDL Fleet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Materials Section */}
      <section
        className="py-20 bg-[#8394a3] text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(131, 148, 163, 0.9), rgba(131, 148, 163, 0.9)), url('https://ext.same-assets.com/372196903/953932251.png')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/372196903/953932251.png"
                alt="PDL Truck"
                className="w-full max-w-lg"
              />
            </div>

            <div>
              <p className="text-white/80 text-sm font-medium uppercase tracking-wide mb-2">Features</p>
              <h2 className="text-4xl font-bold mb-6">Specialised Bulk Powder Transport</h2>
              <p className="text-lg mb-8">We transport a wide range of bulk powder materials, including:</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] flex-shrink-0" />
                  <span className="text-lg font-medium">Cement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] flex-shrink-0" />
                  <span className="text-lg font-medium">GGBS (Ground Granulated Blast-furnace Slag)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] flex-shrink-0" />
                  <span className="text-lg font-medium">Limestone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] flex-shrink-0" />
                  <span className="text-lg font-medium">Sand</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] flex-shrink-0" />
                  <span className="text-lg font-medium">Other dry bulk materials upon request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0b496d] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">We're Here To Help!</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Name"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Address"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-transparent border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <Button
                className="bg-[#0d73c3] hover:bg-white hover:text-[#0b496d] text-white px-8 py-3 rounded-md transition-colors"
              >
                Send Messages
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-[#0d73c3] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office</h3>
                    <p className="text-white/80">
                      PDL Haulage Ltd,<br />
                      Drumcar, Dunleer, Co. Louth
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="h-6 w-6 text-[#0d73c3] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-white/80">
                      087 9885435 / 087 6945727
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-[#0d73c3] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-white/80">
                      info@pdlhaulageltd.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d73c3] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="hover:text-white/80">Cookies Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white/80">Privacy Statement</a>
              <span>|</span>
              <a href="#" className="hover:text-white/80">Terms & Conditions</a>
            </div>

            <div className="text-sm text-white/80">
              © PDL Haulage LTD 2016 – 2025
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-4 text-center">
            <p className="text-sm text-white/60">
              Designed and Developed by Flo Web Design
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
