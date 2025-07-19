import React from 'react';
import { Calendar, User, ArrowLeft, TrendingUp, Lightbulb, Globe } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'آینده تحول دیجیتال در کسب‌وکارهای ایرانی',
      excerpt: 'بررسی روندها و فرصت‌های پیش روی کسب‌وکارها در عصر دیجیتال و نقش فناوری‌های نوظهور',
      author: 'دکتر احمد محمدی',
      date: '15 اسفند 1402',
      category: 'تحول دیجیتال',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Globe,
      readTime: '5 دقیقه مطالعه'
    },
    {
      id: 2,
      title: 'استراتژی‌های پایداری برای شرکت‌های متوسط',
      excerpt: 'راهکارهای عملی برای پیاده‌سازی اصول پایداری در کسب‌وکارهای کوچک و متوسط',
      author: 'مریم کریمی',
      date: '10 اسفند 1402',
      category: 'پایداری',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Lightbulb,
      readTime: '7 دقیقه مطالعه'
    },
    {
      id: 3,
      title: 'مدیریت تغییر در دوران بحران',
      excerpt: 'نحوه رهبری سازمان‌ها در شرایط بحرانی و ایجاد تاب‌آوری در برابر تغییرات غیرمنتظره',
      author: 'علی رضایی',
      date: '5 اسفند 1402',
      category: 'مدیریت',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      readTime: '6 دقیقه مطالعه'
    }
  ];

  const categories = ['همه مقالات', 'تحول دیجیتال', 'پایداری', 'مدیریت', 'نوآوری', 'استراتژی'];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            مقالات و بینش‌ها
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخرین تحلیل‌ها، روندها و بینش‌های تخصصی در حوزه کسب‌وکار و مدیریت
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  <post.icon className="text-blue-600" size={20} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  ادامه مطالعه
                  <ArrowLeft size={16} className="mr-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">عضویت در خبرنامه</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            از آخرین مقالات، تحلیل‌ها و بینش‌های ما در حوزه کسب‌وکار مطلع شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="آدرس ایمیل شما"
              className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;