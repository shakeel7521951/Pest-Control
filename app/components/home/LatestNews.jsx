"use client";
import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      image: "/home/news.jpg",
      title: "5 Essential Summer Grooming Tips for Your Dog",
      excerpt:
        "Learn how to keep your dog cool and comfortable during the hot summer months with these professional grooming tips.",
      date: "June 15, 2023",
      author: "Dr. Sarah Johnson",
      category: "Grooming",
    },
    {
      id: 2,
      image: "/home/news.jpg",
      title: "The Ultimate Guide to Pet Nutrition in 2023",
      excerpt:
        "Discover the latest research on pet nutrition and how to choose the best diet for your furry friend's specific needs.",
      date: "May 28, 2023",
      author: "Dr. Michael Chen",
      category: "Health",
    },
    {
      id: 3,
      image: "/home/news.jpg",
      title: "New Techniques for Training Anxious Pets",
      excerpt:
        "Innovative methods to help your anxious pet feel more comfortable and behave better in stressful situations.",
      date: "April 10, 2023",
      author: "Amanda Rodriguez",
      category: "Training",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#f9f9f9]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
            Latest <span className="text-[#7BAE4B]">News</span> & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest pet care tips, news, and updates from
            our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-58 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#7BAE4B] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </div>
              </div>

              <div className="p-6 pt-2">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1 text-[#7BAE4B]" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-1 text-[#7BAE4B]" />
                    {article.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1E2A38] mb-3 hover:text-[#7BAE4B] transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <button className="text-[#7BAE4B] font-semibold flex items-center hover:text-[#679640] transition-colors duration-200">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#7BAE4B] hover:bg-[#679640] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
            View All News Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
