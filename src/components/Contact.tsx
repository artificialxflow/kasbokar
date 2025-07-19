import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'تماس تلفنی',
      content: '+98 21 1234 5678',
      description: 'شنبه تا چهارشنبه، 9 صبح تا 6 عصر'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      content: 'info@consultpro.ir',
      description: 'پاسخ در کمتر از 24 ساعت'
    },
    {
      icon: MapPin,
      title: 'آدرس دفتر',
      content: 'تهران، خیابان ولیعصر، پلاک 123',
      description: 'طبقه 5، واحد 10'
    }
  ];

  const services = [
    'مشاوره استراتژیک',
    'نوآوری و رشد',
    'مدیریت ریسک',
    'بهینه‌سازی فرآیندها',
    'تحول دیجیتال',
    'مشاوره سازمانی'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            تماس با ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آماده همکاری با شما هستیم. درخواست مشاوره رایگان خود را ارسال کنید
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">اطلاعات تماس</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                    <info.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                    <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Cards */}
            <div className="mt-12 space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Clock className="text-green-600 mr-3" size={20} />
                  <h4 className="font-semibold text-gray-800">مشاوره رایگان</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  جلسه مشاوره اولیه 30 دقیقه‌ای کاملاً رایگان
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Users className="text-blue-600 mr-3" size={20} />
                  <h4 className="font-semibold text-gray-800">تیم متخصص</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  مشاوران با بیش از 10 سال تجربه در اختیار شما
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">درخواست مشاوره</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                      placeholder="نام کامل خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      نام شرکت
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                      placeholder="نام شرکت یا سازمان"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      نوع خدمت مورد نیاز
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                    >
                      <option value="">انتخاب کنید</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    پیام شما *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors resize-none"
                    placeholder="لطفاً توضیح مختصری از نیازها و اهداف خود ارائه دهید..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  ارسال درخواست
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;