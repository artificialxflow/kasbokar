import React from 'react';
import { ArrowLeft, Target, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          آینده کسب‌وکار شما
          <br />
          <span className="text-blue-300">با ما رقم بخورد</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          مشاوره تخصصی در حوزه کسب‌وکار با رویکردی نوآورانه، پایدار و متمرکز بر نتایج.
          شریک موثق شما در مسیر رشد و تحول دیجیتال.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            مشاوره رایگان
            <ArrowLeft size={20} />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            بیشتر بدانید
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Target className="text-blue-300 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">استراتژی هدفمند</h3>
            <p className="text-blue-100">برنامه‌ریزی دقیق برای دستیابی به اهداف کسب‌وکار</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="text-blue-300 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">رشد پایدار</h3>
            <p className="text-blue-100">ایجاد مزیت رقابتی با رویکرد پایداری و نوآوری</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="text-blue-300 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">تیم متخصص</h3>
            <p className="text-blue-100">همراهی مشاوران با تجربه در تمام مراحل</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;