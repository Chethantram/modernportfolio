import fashionThumb from "../images/fashion.png";
import wealthThumb from "../images/wealth.png";
import lmsThumb from "../images/lms.png";
import blogThumb from "../images/blog.png";
import quizThumb from "../images/quiz.png";
import foodThumb from "../images/fooddelivary.png";

const projects = [
  {
    id: 0,
    title:
      "1. Personalized Fashion Styling Engine with Image-Based Virtual Fitting",
    description:
      "Developed an AI-powered virtual fashion stylist that provides personalized outfit recommendations based on user preferences and images. The app uses machine learning, natural language processing, and computer vision to analyze styles and suggest outfits. Built with the MERN stack and FastAPI, it offers a responsive and user-friendly interface with features like style matching, trend analysis, and feedback-based recommendation refinement.",
    techStack:
      "React.js, Node.js, Express.js, MongoDB, Python, FastAPI, Hugging Face Model, Scikit-Learn, Tailwind CSS.",
    github: "https://github.com/Chethantram/FashionStylist",
    demo: null,
    image: fashionThumb,
  },
  {
    id: 1,
    title: "2. AI WealthTrack – Personal Finance Tracker Web Application",
    description:
      "Designed and developed a full-stack personal finance tracker using Next.js 14, enabling users to manage and visualize their income, expenses, and budgets efficiently. Implemented Clerk for secure user authentication, Prisma ORM with Supabase for structured data handling, and Inngest to schedule background jobs like recurring payments and reminders.",
    techStack:
      "Next.js, Node.js, Express.js, MongoDB, Arcjet, Inngest, Prisma ORM, Supabase, Tailwind CSS, Recharts, Resend.",
    github: "https://github.com/Chethantram/personal-finance-tracker",
    demo: "https://ai-personal-finance-tracker-321r6a2wb.vercel.app/",
    image: wealthThumb,
  },
  {
    id: 2,
    title:
      "3. Smart Educational Assessment Tool with Firebase Authentication and Cloud Storage",
    description:
      "Developed an AI-driven quiz generator that automatically converts PDFs into customizable quizzes with adjustable difficulty, language options, and question count. Integrated Firebase Authentication and Cloud Storage for secure user login, profile management, and real-time quiz performance tracking.",
    techStack: "Next.js, Firebase, Gemini API, MongoDB, Tailwind CSS.",
    github: "https://github.com/Chethantram/quiz-forge-ai",
    demo: "https://quiz-forge-ai-ten.vercel.app/",
    image: quizThumb,
  },
  {
    id: 3,
    title: "4. E-LearnHub – Full-Stack Learning Management System",
    description:
      "Developed a full-stack Learning Management System (LMS) enabling instructors to create and manage online courses, and students to enroll, track progress, and access learning content. Implemented secure user authentication and role-based authorization, integrated Stripe for seamless payment processing, and used Cloudinary for dynamic media uploads.",
    techStack:
      "React.js, Node.js, Express.js, MongoDB, Redux, Stripe, Cloudinary, Tailwind CSS.",
    github: "https://github.com/Chethantram/lms-Elearning",
    demo: null,
    image: lmsThumb,
  },
  {
    id: 4,
    title: "5. BlogSphere – Full-Stack Blogging Platform",
    description:
      "Built a responsive blogging platform using Next.js, MongoDB, Clerk, and Tailwind CSS. Integrated user authentication and implemented category-based blog filtering and RESTful APIs to fetch and display blog content dynamically.",
    techStack: "Next.js, Node.js, Express.js, MongoDB, Tailwind CSS.",
    github: "https://github.com/Chethantram/BlogSphere-",
    demo: "https://blog-sphere-orpin.vercel.app/",
    image: blogThumb,
  },
  {
    id: 5,
    title: "6. QuickBite – Food Delivery Web Application",
    description:
      "Designed and developed a full-stack food delivery platform with Stripe integration for secure online payments. Built a dedicated admin panel to add/delete menu items, manage orders, and monitor platform activity.",
    techStack: "React.js, Node.js, Express.js, MongoDB, Stripe, Tailwind CSS.",
    github: "https://github.com/Chethantram/FoodDelivary",
    demo: null,
    image: foodThumb,
  },
];

export default projects;
