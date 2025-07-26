const blogs = [
  {
    id: "1",
    slug: "summer-grooming-tips",
    title: "5 Essential Summer Grooming Tips for Your Dog",
    date: "June 15, 2023",
    author: "Dr. Sarah Johnson",
    likes: 76,
    image: "/home/news.jpg",
    category: "Grooming",
    content: `
      Keeping your dog well-groomed in the summer is crucial for their health. Here are five key tips:

      1. Brush regularly to remove excess fur and help your dog stay cool.
      2. Bathe only when necessary using gentle dog shampoo.
      3. Trim the hair around your dog’s paws to avoid dirt accumulation.
      4. Keep ears clean and dry to avoid infections.
      5. Never shave double-coated breeds — it can damage their natural insulation.

      Regular grooming not only ensures your dog looks great but also prevents many health issues. Stay consistent and consult a vet for breed-specific grooming tips.
    `,
    reviews: [
      {
        id: 1,
        date: "May 15, 2023",
        comment: "This article was extremely helpful for my golden retriever's summer care!",
        likes: 5,
      },
      {
        id: 2,
        date: "April 28, 2023",
        comment: "Great tips, especially about not shaving double-coated breeds.",
        likes: 3,
      },
      {
        id: 3,
        date: "June 2, 2023",
        comment: "I've been following these grooming tips and my dog looks and feels much better!",
        likes: 4,
      },
    ],
  },
  {
    id: "2",
    slug: "pet-nutrition-guide-2023",
    title: "The Ultimate Guide to Pet Nutrition in 2023",
    date: "May 28, 2023",
    author: "Dr. Michael Chen",
    likes: 637,
    image: "/home/news (1).jpg",
    category: "Health",
    content: `
      Nutrition is a foundation of pet health. In this guide, we explore:
      
      - Choosing the right food for your pet's breed and age
      - Reading ingredient labels correctly
      - Avoiding common dietary mistakes
      - Incorporating supplements (when needed)

      Give your furry friend the diet they deserve in 2023!
    `,
    reviews: [
      {
        id: 1,
        date: "May 29, 2023",
        comment: "Really informative, I finally understand what to feed my aging Labrador!",
        likes: 6,
      },
      {
        id: 2,
        date: "May 30, 2023",
        comment: "The label-reading tip was eye-opening.",
        likes: 2,
      },
    ],
  },
  {
    id: "3",
    slug: "training-anxious-pets",
    title: "New Techniques for Training Anxious Pets",
    date: "April 10, 2023",
    author: "Amanda Rodriguez",
    likes: 312,
    image: "/home/news (2).jpg",
    category: "Training",
    content: `
      Anxious pets can be a challenge. This article outlines:
      
      - How to spot early signs of anxiety
      - Tools and routines to reduce stress
      - Training methods backed by science
      - When to involve a professional trainer

      Help your pet feel calm and confident.
    `,
    reviews: [
      {
        id: 1,
        date: "April 12, 2023",
        comment: "Worked wonders on my anxious cat. Thank you!",
        likes: 3,
      },
      {
        id: 2,
        date: "April 15, 2023",
        comment: "Very practical and easy to implement advice.",
        likes: 4,
      },
    ],
  },
  {
    id: "4",
    slug: "summer-toys-for-dogs",
    title: "Top 5 Summer Toys Every Dog Will Love",
    date: "July 2, 2023",
    author: "Lindsay Marks",
    likes: 102,
    image: "/home/news.jpg",
    category: "Grooming",
    content: `
      Keep your dog active and cool with these fun summer toys:
      
      - Floating water frisbees
      - Treat-dispensing frozen toys
      - Cooling chew bones
      - Backyard sprinklers
      - Soft tug-of-war ropes

      Make summer playtime safe and exciting!
    `,
    reviews: [
      {
        id: 1,
        date: "July 3, 2023",
        comment: "I bought 3 of these toys already!",
        likes: 1,
      },
    ],
  },
  {
    id: "5",
    slug: "dental-care-for-pets",
    title: "How to Keep Your Pet’s Teeth Healthy",
    date: "March 14, 2023",
    author: "Dr. Priya Kumar",
    likes: 342,
    image: "/home/news (1).jpg",
    category: "Health",
    content: `
      Dental hygiene is often overlooked. Learn about:
      
      - Brushing your pet’s teeth at home
      - Choosing safe dental treats
      - Spotting signs of oral disease
      - Vet-approved cleaning routines

      A clean mouth means a healthier pet!
    `,
    reviews: [
      {
        id: 1,
        date: "March 15, 2023",
        comment: "My dog had bleeding gums, and this helped so much.",
        likes: 4,
      },
    ],
  },
  {
    id: "6",
    slug: "clicker-training-dogs",
    title: "Clicker Training: A Positive Approach",
    date: "February 1, 2023",
    author: "Jake Thompson",
    likes: 3,
    image: "/home/news (2).jpg",
    category: "Training",
    content: `
      Clicker training is a powerful and fun technique for dogs:
      
      - Learn how clickers build positive reinforcement
      - Step-by-step training examples
      - Best breeds for clicker success

      Start building great behavior today!
    `,
    reviews: [
      {
        id: 1,
        date: "February 3, 2023",
        comment: "I just ordered a clicker after reading this.",
        likes: 2,
      },
    ],
  },
  {
    id: "7",
    slug: "grooming-tools-guide",
    title: "The Best Grooming Tools for Every Dog Breed",
    date: "January 22, 2023",
    author: "Emily Nguyen",
    likes: 634,
    image: "/home/news.jpg",
    category: "Grooming",
    content: `
      Different dogs need different tools. This guide includes:
      
      - Brushes for long vs short coats
      - Nail clippers and grinders
      - Shampoo types for skin conditions
      - DIY grooming vs professional help

      Groom smart and keep tails wagging!
    `,
    reviews: [
      {
        id: 1,
        date: "January 23, 2023",
        comment: "Perfect breakdown of grooming tool options!",
        likes: 3,
      },
    ],
  },
  {
    id: "8",
    slug: "hydration-tips-for-pets",
    title: "Hydration Tips to Beat the Summer Heat",
    date: "June 5, 2023",
    author: "Dr. Alex Stone",
    likes: 123,
    image: "/home/news (1).jpg",
    category: "Health",
    content: `
      Hydration keeps pets healthy in warm weather:
      
      - Water bowls vs pet fountains
      - Flavoring water safely
      - Recognizing dehydration symptoms
      - Travel hydration tricks

      Keep your companion cool and refreshed!
    `,
    reviews: [
      {
        id: 1,
        date: "June 6, 2023",
        comment: "Hydration tips saved my pup during heatwave.",
        likes: 2,
      },
    ],
  },
  {
    id: "9",
    slug: "leash-training-secrets",
    title: "Leash Training Secrets for a Calm Walk",
    date: "May 9, 2023",
    author: "Nina Patel",
    likes: 183,
    image: "/home/news (2).jpg",
    category: "Training",
    content: `
      Tired of being pulled around? Try these tips:
      
      - Choosing the right leash and harness
      - Teaching heel command basics
      - Rewards and consistency techniques
      - Correcting leash reactivity

      Walking your dog should be fun, not frustrating.
    `,
    reviews: [
      {
        id: 1,
        date: "May 10, 2023",
        comment: "The 'heel' command technique really worked!",
        likes: 3,
      },
    ],
  },
];

export default blogs;
