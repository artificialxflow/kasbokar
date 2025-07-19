import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'خانه',
    'درباره ما',
    'خدمات',
    'رویکردها',
    'مقالات',
    'تماس با ما'
  ];

  const services = [
    'مشاوره استراتژیک',
    'نوآوری و رشد',
    'مدیریت ریسک',
    'بهینه‌سازی فرآیندها',
    'تحول دیجیتال',
    'مشاوره سازمانی'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">ConsultPro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              شریک موثق شما در مسیر رشد و تحول کسب‌وکار. با بیش از یک دهه تجربه، 
              ما به شما کمک می‌کنیم تا اهداف خود را محقق سازید.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدمات ما</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">اطلاعات تماس</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+98 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@consultpro.ir</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  تهران، خیابان ولیعصر، پلاک 123
                  <br />
                  طبقه 5، واحد 10
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-center md:text-right mb-4 md:mb-0">
            © 1403 ConsultPro. تمامی حقوق محفوظ است.
          </p>
          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              شرایط استفاده
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              کوکی‌ها
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;