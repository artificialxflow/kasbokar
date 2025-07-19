import React from 'react';
import { Eye, Target, Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'تعهد به کیفیت',
      description: 'ارائه بالاترین کیفیت خدمات در تمام پروژه‌ها'
    },
    {
      icon: Users,
      title: 'مشارکت فعال',
      description: 'همکاری نزدیک با مشتریان در تمام مراحل'
    },
    {
      icon: Award,
      title: 'تخصص و تجربه',
      description: 'بهره‌گیری از دانش روز و تجربه گسترده'
    },
    {
      icon: Globe,
      title: 'نگرش جهانی',
      description: 'درنظرگیری استانداردها و بهترین شیوه‌های جهانی'
    }
  ];

  const stats = [
    { number: '100+', label: 'پروژه موفق' },
    { number: '50+', label: 'مشتری راضی' },
    { number: '10+', label: 'سال تجربه' },
    { number: '95%', label: 'رضایت مشتری' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            درباره ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شریک موثق شما در مسیر رشد و تحول کسب‌وکار
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">داستان ما</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              با بیش از یک دهه تجربه در حوزه مشاوره کسب‌وکار، ما به عنوان یکی از پیشروان این حوزه در کشور، 
              همواره در کنار کسب‌وکارها بوده‌ایم. تیم ما متشکل از مشاوران با تجربه و متخصصان برجسته است که 
              با بهره‌گیری از آخرین دستاورد‌های علمی و فناوری، راه‌حل‌های نوآورانه و کاربردی ارائه می‌دهند.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              هدف ما کمک به شما برای دستیابی به اهداف کسب‌وکارتان از طریق استراتژی‌های مدروس، 
              فرآیندهای بهینه و رویکردهای پایدار است.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="تیم مشاوره" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Target className="text-blue-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">رسالت ما</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              توانمندسازی کسب‌وکارها برای رشد پایدار و موفقیت بلندمدت از طریق ارائه خدمات مشاوره‌ای 
              تخصصی و راه‌حل‌های نوآورانه که متناسب با نیازها و شرایط منحصر به فرد هر سازمان باشد.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Eye className="text-green-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">چشم‌انداز ما</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              تبدیل شدن به مرجع اصلی مشاوره کسب‌وکار در منطقه و کمک به ایجاد اکوسیستمی از 
              کسب‌وکارهای پیشرو که با بهره‌گیری از فناوری‌های نوین، نقش مهمی در توسعه اقتصادی کشور ایفا کنند.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">ارزش‌های ما</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <value.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">آمار ما</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;