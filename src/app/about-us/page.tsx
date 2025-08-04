import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MobileMenu from "@/components/MobileMenu";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Users,
  Award,
  Clock,
  Shield
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="/">
                <img
                  src="https://ext.same-assets.com/372196903/2895836441.png"
                  alt="PDL Haulage Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#0b496d] font-medium">Home</a>
              <a href="/#services" className="text-gray-700 hover:text-[#0b496d] font-medium">Our Services</a>
              <a href="/about-us" className="text-[#0b496d] font-medium">About Us</a>
              <a href="/#contact" className="text-gray-700 hover:text-[#0b496d] font-medium">Contact Us</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-[#8394a3]">
                <Mail className="h-4 w-4" />
                <span>Email info@pdlhaulageltd.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8394a3]">
                <Phone className="h-4 w-4" />
                <span>Call Us 087 9885435</span>
              </div>
            </div>

            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 73, 109, 0.8), rgba(11, 73, 109, 0.8)), url('https://ext.same-assets.com/372196903/1749919668.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About PDL Haulage Ltd</h1>
          <p className="text-xl mb-8">Your trusted partner in bulk powder transport since 2016</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Established in 2016, PDL Haulage Ltd has quickly become a trusted name in bulk powder transport across Ireland and the UK. We specialize in the safe and efficient transportation of dry bulk materials including cement, GGBS, limestone, and sand.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our commitment to excellence, safety, and reliability has made us the preferred choice for construction companies, manufacturers, and infrastructure projects throughout the region.
              </p>
              <p className="text-gray-600 text-lg">
                Based in Drumcar, Dunleer, Co. Louth, we operate a modern fleet of specialized Feldbinder rear-steer belly tankers, equipped with the latest technology to ensure safe and efficient deliveries.
              </p>
            </div>

            <div>
              <img
                src="https://ext.same-assets.com/372196903/1749919668.jpeg"
                alt="PDL Haulage Fleet"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PDL Haulage?</h2>
            <p className="text-gray-600 text-lg">We deliver excellence through experience, technology, and commitment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#0b496d] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Established 2016</h3>
                <p className="text-gray-600">
                  Years of experience in bulk powder transport across Ireland and the UK
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#0d73c3] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Safety First</h3>
                <p className="text-gray-600">
                  Advanced safety features including 360° cameras and pedestrian warning systems
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#34a49c] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Modern Fleet</h3>
                <p className="text-gray-600">
                  Specialized Feldbinder rear-steer belly tankers with capacities up to 40m³
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#8394a3] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Team</h3>
                <p className="text-gray-600">
                  Professional drivers and logistics team committed to reliable service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/372196903/953932251.png"
                alt="PDL Haulage Truck"
                className="w-full max-w-lg mx-auto"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Fleet Technology</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our Feldbinder bulk powder tankers are equipped with cutting-edge technology to ensure safe and efficient transport of your materials.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High Capacity</h4>
                    <p className="text-gray-600">Tank capacities from 38m³ to 40m³ with GVW up to 46 tonnes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rear-Steer Technology</h4>
                    <p className="text-gray-600">Hydraulic steering systems for restricted access sites</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety Systems</h4>
                    <p className="text-gray-600">360° cameras and pedestrian audible warning systems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#34a49c] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Chassis Compressors</h4>
                    <p className="text-gray-600">Fitted on tractor units for optimal performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#0b496d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Contact us today for reliable bulk powder transport services across Ireland and the UK
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#0d73c3] hover:bg-white hover:text-[#0b496d] text-white px-8 py-3 text-lg rounded-md transition-colors"
            >
              <a href="/#contact">Get A Free Quote</a>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0b496d] px-8 py-3 text-lg rounded-md transition-colors"
            >
              <a href="tel:0879885435">Call Us Now</a>
            </Button>
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