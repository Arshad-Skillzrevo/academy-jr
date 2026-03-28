export const courses = [
  {
    slug: "web-development-for-kids",
    title: "Fun Web Development Course for Kids",
    subtitle: "Create Your First Website",
    description:
      "Students learn how to design, build, and launch their own websites with HTML, CSS, and JavaScript.",
    grade: "9-12",
    lessons: 30,
    activities: "60+",
    durationMonths: 3,
    heroImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Web Development Journey",
      subtitle:
        "Learn the fundamentals of website development and start building creative, interactive websites using modern web technologies.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of how websites and the internet work",
            "Building web pages using HTML & CSS",
            "Adding images, videos, and multimedia to websites",
            "Designing responsive layouts",
            "Making websites interactive using JavaScript",
            "Understanding basic backend concepts",
            "Connecting frontend with APIs",
            "Building real-world website projects",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Website development fundamentals",
            "Creative thinking & design skills",
            "Frontend development using HTML, CSS, JavaScript",
            "Problem-solving and logical thinking",
            "Understanding APIs and backend basics",
            "Using developer tools like VS Code & GitHub",
            "Deploying and hosting websites",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Web Development Course Certificate",
            "Hands-on project portfolio",
            "Practical coding experience",
            "Access to learning resources and coding community",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Web Development Foundations Program is a beginner-friendly course designed to help students understand how websites are built and how the internet works. The program provides a structured learning path where students progress from basic web concepts to building interactive websites using modern technologies. Structured into 6 modules, the course includes hands-on activities, assignments, assessments, and project-based learning to help students apply their knowledge practically. By the end of the program, students will build and present their own interactive website project, demonstrating their understanding of core web development concepts.",
      highlights: [
        { icon: "🎓", label: "30 Live Instructor-Led Lectures" },
        { icon: "📅", label: "3-Month Structured Learning Program" },
        { icon: "📦", label: "6 Modules Covering Web Development" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Website Project Presentation" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "01",
          title: "Internet & Web Fundamentals",
          lectures: [
            {
              num: 1,
              title: "Internet & Website Basics",
              desc: "Understand what the internet is, how browsers work, and explore real website examples.",
            },
            {
              num: 2,
              title: "Types of Websites",
              desc: "Learn the difference between static and dynamic websites and identify different website types.",
            },
            {
              num: 3,
              title: "How the Web Works",
              desc: "Understand domains, hosting, and how HTTP requests work in simple terms.",
            },
            {
              num: 4,
              title: "Developer Tools Setup",
              desc: "Install and set up tools like VS Code and learn how to inspect websites using browser developer tools.",
            },
            {
              num: 5,
              title: "Website Planning",
              desc: "Plan your first website by deciding pages, layouts, and design ideas.",
            },
          ],
        },
        {
          id: "02",
          title: "HTML (Website Structure)",
          lectures: [
            {
              num: 6,
              title: "HTML Introduction",
              desc: "Learn HTML basics and create your first webpage.",
            },
            {
              num: 7,
              title: "Text & Media Elements",
              desc: "Add headings, paragraphs, images, and links to webpages.",
            },
            {
              num: 8,
              title: "Lists & Tables",
              desc: "Create structured content using lists and tables.",
            },
            {
              num: 9,
              title: "Forms",
              desc: "Build interactive forms with input fields and buttons.",
            },
            {
              num: 10,
              title: "Semantic HTML",
              desc: "Use modern HTML tags like header, footer, and section to structure webpages.",
            },
          ],
        },
        {
          id: "03",
          title: "CSS (Design & Layout)",
          lectures: [
            {
              num: 11,
              title: "CSS Basics",
              desc: "Style webpages using colors, fonts, and selectors.",
            },
            {
              num: 12,
              title: "Box Model",
              desc: "Understand margins, padding, and borders to control layouts.",
            },
            {
              num: 13,
              title: "Flexbox Layout",
              desc: "Create flexible layouts and navigation bars using Flexbox.",
            },
            {
              num: 14,
              title: "Responsive Design Basics",
              desc: "Learn how websites adapt to different screen sizes.",
            },
            {
              num: 15,
              title: "CSS Effects",
              desc: "Add hover effects, shadows, and transitions.",
            },
            {
              num: 16,
              title: "Mini Project",
              desc: "Build a portfolio-style website using HTML and CSS.",
            },
          ],
        },
        {
          id: "04",
          title: "JavaScript Fundamentals",
          lectures: [
            {
              num: 17,
              title: "Introduction to JavaScript",
              desc: "Learn how JavaScript adds interactivity to websites.",
            },
            {
              num: 18,
              title: "Variables & Alerts",
              desc: "Use variables and create pop-up interactions.",
            },
            {
              num: 19,
              title: "Conditions",
              desc: "Write logic using if–else statements.",
            },
            {
              num: 20,
              title: "Functions",
              desc: "Create reusable blocks of code.",
            },
            {
              num: 21,
              title: "Events",
              desc: "Respond to user actions like clicks and hovers.",
            },
            {
              num: 22,
              title: "Loops",
              desc: "Automate repetitive tasks using loops.",
            },
          ],
        },
        {
          id: "05",
          title: "DOM & Interactive Projects",
          lectures: [
            {
              num: 23,
              title: "DOM Basics",
              desc: "Learn how to access and modify webpage elements using JavaScript.",
            },
            {
              num: 24,
              title: "Form Validation",
              desc: "Validate user inputs in forms.",
            },
            {
              num: 25,
              title: "Dynamic Styling",
              desc: "Change website styles dynamically using JavaScript.",
            },
            {
              num: 26,
              title: "Image Slider Project",
              desc: "Build an interactive image slider.",
            },
            {
              num: 27,
              title: "To-Do List App",
              desc: "Create a task management application.",
            },
            {
              num: 28,
              title: "Quiz Website",
              desc: "Develop an interactive quiz application.",
            },
          ],
        },
        {
          id: "06",
          title: "Final Website Project",
          lectures: [
            {
              num: 29,
              title: "Planning & Design",
              desc: "Plan and design your final website project.",
            },
            {
              num: 30,
              title: "Interactivity & Final Demo",
              desc: "Add JavaScript features, test your website, and present your final project.",
            },
          ],
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Our Web Development Foundations program focuses on practical learning through interactive coding activities and real-world projects. Students will apply the concepts they learn in class by building creative webpages, interactive applications, and mini projects.",
      activities: [
        "Website Analysis Activity",
        "Website Planning Activity",
        "Personal Introduction Webpage",
        "School Timetable Webpage",
        "Feedback Form Creation",
        "CSS Card Design",
        "Navigation Bar Layout",
        "Button Animation Activity",
        "JavaScript Welcome Popup",
        "Color Changer Tool",
        "Login Form Validation",
        "Theme Switcher",
      ],
      capstoneProjects: [
        { num: 1, title: "Personal Introduction Webpage", desc: "Create a simple webpage introducing yourself with text, images, and links." },
        { num: 2, title: "Favorite Website Layout", desc: "Recreate the layout of a popular website to understand webpage structure." },
        { num: 3, title: "School Timetable Page", desc: "Design a timetable webpage using HTML tables." },
        { num: 4, title: "Feedback Form", desc: "Build a feedback form with multiple input fields and buttons." },
        { num: 5, title: "Blog Layout Page", desc: "Create a blog-style webpage with header, content, and footer sections." },
        { num: 6, title: "Portfolio Website", desc: "Build a personal portfolio showcasing projects and skills." },
        { num: 7, title: "Navigation Bar Design", desc: "Create a responsive navigation bar using Flexbox." },
        { num: 8, title: "Product Card UI", desc: "Design attractive product cards using CSS box model and styling." },
        { num: 9, title: "Responsive Landing Page", desc: "Build a landing page that works on desktop and mobile screens." },
        { num: 10, title: "Image Gallery Website", desc: "Create a gallery webpage displaying multiple images with styling." },
        { num: 11, title: "Color Changer Tool", desc: "Build a tool that dynamically changes webpage colors using JavaScript." },
        { num: 12, title: "JavaScript Calculator", desc: "Create a simple calculator using JavaScript logic." },
        { num: 13, title: "To-Do List Application", desc: "Develop a task management app where users can add or remove tasks." },
        { num: 14, title: "Quiz Website", desc: "Build an interactive quiz application with scoring functionality." },
        { num: 15, title: "Image Slider Project", desc: "Create an interactive image slider using DOM manipulation." },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Web Development Foundations Program will receive an official Certificate of Completion issued by Skillzrevo Solutions. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final website project",
      ],
    },

    reviews: [
      {
        name: "Aarav Sharma",
        rating: 5,
        text: "The course was very interesting and easy to understand. I learned how to create my own website using HTML, CSS, and JavaScript. The projects and activities made learning fun.",
        avatar: "AS",
      },
      {
        name: "Riya Gupta",
        rating: 5,
        text: "This program helped me understand how websites work. The instructors explained everything step by step, and the hands-on projects made it easy to practice coding.",
        avatar: "RG",
      },
      {
        name: "Kabir Verma",
        rating: 5,
        text: "I really enjoyed building my first website. The classes were interactive and the assignments helped me improve my coding skills.",
        avatar: "KV",
      },
      {
        name: "Ananya Singh",
        rating: 5,
        text: "A great course for beginners who want to start learning web development. I especially liked the mini projects like the To-Do app and quiz website.",
        avatar: "AN",
      },
      {
        name: "Vihaan Mehta",
        rating: 5,
        text: "The course structure is very well designed. Each module builds on the previous one, which makes it easy to understand web development concepts.",
        avatar: "VM",
      },
      {
        name: "Myra Kapoor",
        rating: 5,
        text: "I learned how to design and build webpages from scratch. The final project helped me create my own interactive website.",
        avatar: "MK",
      },
    ],

    faqs: [
      {
        q: "Who is this course designed for?",
        a: "This course is designed for beginners, especially students who want to start learning web development and understand how websites are built.",
      },
      {
        q: "Do students need prior coding experience?",
        a: "No prior coding experience is required. The course starts from the basics and gradually introduces students to web development concepts.",
      },
      {
        q: "What topics will students learn in this course?",
        a: "Students will learn web development fundamentals including HTML, CSS, JavaScript basics, DOM manipulation, and website development concepts.",
      },
      {
        q: "How long is the course?",
        a: "The course duration is 3 months and includes 30 live lectures, each lasting 90 minutes.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "The course includes live instructor-led classes, and students also receive access to recorded lectures for revision and practice.",
      },
      {
        q: "Will students work on projects during the course?",
        a: "Yes. Students will complete multiple hands-on activities, mini projects, and a final website project during the course.",
      },
      {
        q: "What tools will students use during the course?",
        a: "Students will use tools such as VS Code, web browsers, and developer tools to build and test websites.",
      },
      {
        q: "Will students receive a certificate after completing the course?",
        a: "Yes. Students who successfully complete the course will receive a Certificate of Completion issued by Skillzrevo Solutions.",
      },
      {
        q: "What is the class schedule?",
        a: "Classes are available in weekend and weekday batches, allowing students to choose a schedule that fits their availability.",
      },
      {
        q: "How can students enroll in the course?",
        a: "Students can enroll by registering through the website or booking a free demo class to learn more about the program.",
      },
    ],

    recommendedCourses: [
      {
        title: "Python for Kids",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "6-10",
        slug: "python-for-kids",
        icon: "🐍",
      },
      {
        title: "AI & Machine Learning Basics",
        desc: "Explore the world of Artificial Intelligence and build smart apps.",
        grade: "9-12",
        slug: "ai-ml-basics",
        icon: "🤖",
      },
      {
        title: "Game Development with Scratch",
        desc: "Design and build your own games using Scratch programming.",
        grade: "5-8",
        slug: "game-dev-scratch",
        icon: "🎮",
      },
    ],
  },
];

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug) || null;
}