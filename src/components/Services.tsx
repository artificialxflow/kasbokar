import React from 'react';
import { BarChart3, Lightbulb, Shield, Zap, Globe, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'مشاوره استراتژیک',
      description: 'طراحی و اجرای استراتژی‌های کسب‌وکار برای دستیابی به اهداف بلندمدت شما',
      features: ['تحلیل بازار', 'برنامه‌ریزی استراتژیک', 'مدیریت تغییر']
    },
    {
      icon: Lightbulb,
      title: 'نوآوری و رشد',
      description: 'ایجاد فرهنگ نوآوری و توسعه محصولات و خدمات جدید',
      features: ['تحقیق و توسعه', 'مدیریت نوآوری', 'استراتژی رشد']
    },
    {
      icon: Shield,
      title: 'مدیریت ریسک',
      description: 'شناسایی، ارزیابی و کنترل ریسک‌های کسب‌وکار',
      features: ['ارزیابی ریسک', 'برنامه‌ریزی اضطراری', 'تاب‌آوری سازمانی']
    },
    {
      icon: Zap,
      title: 'بهینه‌سازی فرآیندها',
      description: 'بهبود کارایی و اثربخشی فرآیندهای کسب‌وکار',
      features: ['تحلیل فرآیند', 'اتوماسیون', 'بهبود مستمر']
    },
    {
      icon: Globe,
      title: 'تحول دیجیتال',
      description: 'راهنمایی در مسیر دیجیتالی شدن و بهره‌گیری از فناوری‌های نوین',
      features: ['استراتژی دیجیتال', 'پیاده‌سازی فناوری', 'تغییر فرهنگ سازمانی']
    },
    {
      icon: Settings,
      title: 'مشاوره سازمانی',
      description: 'توسعه ساختار سازمانی مناسب و بهبود عملکرد تیم‌ها',
      features: ['طراحی سازمان', 'توسعه رهبری', 'بهبود عملکرد']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            خدمات تخصصی ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعه‌ای جامع از خدمات مشاوره کسب‌وکار که شما را در مسیر موفقیت یاری می‌کند
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;