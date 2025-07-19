import React from 'react';
import { Leaf, Cpu, Lightbulb, Shield } from 'lucide-react';

const Approaches = () => {
  const approaches = [
    {
      icon: Leaf,
      title: 'پایداری',
      description: 'توسعه استراتژی‌های کسب‌وکار با رویکرد پایداری زیست‌محیطی و اجتماعی',
      details: [
        'مدیریت پایدار منابع',
        'مسئولیت اجتماعی شرکت‌ها',
        'اهداف توسعه پایدار (SDGs)',
        'گزارش‌دهی ESG'
      ],
      color: 'green'
    },
    {
      icon: Cpu,
      title: 'صنعت 4.0',
      description: 'پیاده‌سازی فناوری‌های انقلاب صنعتی چهارم در کسب‌وکارها',
      details: [
        'اینترنت اشیاء (IoT)',
        'هوش مصنوعی و یادگیری ماشین',
        'اتوماسیون هوشمند',
        'تحلیل داده‌های کلان'
      ],
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'نوآوری',
      description: 'ایجاد فرهنگ نوآوری و توسعه راه‌حل‌های خلاقانه برای چالش‌های کسب‌وکار',
      details: [
        'مدیریت نوآوری باز',
        'طراحی تفکر (Design Thinking)',
        'توسعه محصولات جدید',
        'همکاری با استارتاپ‌ها'
      ],
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'تاب‌آوری',
      description: 'افزایش قدرت تطبیق و مقاومت سازمان‌ها در برابر تغییرات و بحران‌ها',
      details: [
        'مدیریت بحران',
        'برنامه‌ریزی تداوم کسب‌وکار',
        'انعطاف‌پذیری سازمانی',
        'مدیریت تغییر'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100 text-green-600',
        accent: 'text-green-600',
        dot: 'bg-green-600'
      },
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100 text-blue-600',
        accent: 'text-blue-600',
        dot: 'bg-blue-600'
      },
      yellow: {
        bg: 'bg-yellow-50',
        icon: 'bg-yellow-100 text-yellow-600',
        accent: 'text-yellow-600',
        dot: 'bg-yellow-600'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-100 text-purple-600',
        accent: 'text-purple-600',
        dot: 'bg-purple-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="approaches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            رویکردهای ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            چهار رکن اساسی که فلسفه کاری ما را شکل می‌دهند و راه را برای آینده‌ای بهتر هموار می‌کنند
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {approaches.map((approach, index) => {
            const colors = getColorClasses(approach.color);
            return (
              <div key={index} className={`${colors.bg} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className={`flex items-center justify-center w-16 h-16 ${colors.icon} rounded-lg flex-shrink-0`}>
                    <approach.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${colors.accent} mb-4`}>{approach.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{approach.description}</p>
                    <ul className="space-y-3">
                      {approach.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 ${colors.dot} rounded-full mr-3 flex-shrink-0`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              رویکرد یکپارچه ما
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ما این چهار رویکرد را به صورت یکپارچه و هم‌افزا در پروژه‌های خود به کار می‌گیریم. 
              این ترکیب منحصر به فرد، امکان ایجاد راه‌حل‌هایی جامع، نوآورانه و پایدار را فراهم می‌کند 
              که نه تنها نیازهای امروز شما را برآورده می‌سازد، بلکه شما را برای چالش‌های آینده نیز آماده می‌کند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approaches;