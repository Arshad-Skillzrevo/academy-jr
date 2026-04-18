export const courses = [
  {
    id: "web",
    slug: "web-wizards",
    cat: "web",
    title: "Web Wizards",
    type: "single",
    price: 29500,
    subtitle: "Build Websites the Fun Way",
    description:
      "Students learn how to design, build, and launch their own websites with HTML, CSS, and JavaScript.",
    lessons: 25,
    age: "12-18",
    grade: "8-12",
    durationMonths: "3 - 4",
    durationWeeks: "11",
    durationClasses: "45-60",
    activities: "40+",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=640&h=400&fit=crop&q=80",
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
        { icon: "🎓", label: "25 Live Instructor-Led Lectures" },
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
          id: "m1",
          title: "Internet & Web Fundamentals",
          description:
            "Understand internet basics, how websites work, and plan your own website using real-world concepts.",
          outcomes: [
            "Understand internet, websites & types",
            "Learn how web works (domain, hosting, HTTP)",
            "Plan website structure & layout",
          ],
          language: "Basic Web Concepts",
          platform: "Browser + VS Code",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m2",
          title: "HTML (Website Structure)",
          description:
            "Learn to build structured web pages using HTML elements and create multiple practical pages.",
          outcomes: [
            "Understand HTML structure & tags",
            "Create pages with text & media",
            "Build lists & tables",
            "Create forms for user input",
            "Use semantic HTML layout",
          ],
          language: "HTML",
          platform: "VS Code",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m3",
          title: "CSS (Design & Layout)",
          description:
            "Design visually appealing and responsive websites using CSS styling and layout techniques.",
          outcomes: [
            "Apply styling using colors & fonts",
            "Understand spacing using box model",
            "Create layouts using Flexbox",
            "Build responsive designs",
            "Add animations & effects",
          ],
          language: "CSS",
          platform: "VS Code",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m4",
          title: "JavaScript Fundamentals",
          description:
            "Learn programming basics and add interactivity to web pages using JavaScript.",
          outcomes: [
            "Understand variables & basic JavaScript",
            "Apply conditions & functions",
            "Work with events & loops",
            "Build interactive logic-based features",
          ],
          language: "JavaScript",
          platform: "Browser + VS Code",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m5",
          title: "DOM & Interactive Projects",
          description:
            "Control and update web pages dynamically using DOM and build real-world applications.",
          outcomes: [
            "Manipulate webpage elements using DOM",
            "Implement form validation",
            "Create dynamic styling & UI features",
            "Build To-Do and interactive apps",
            "Develop quiz-based applications",
          ],
          language: "JavaScript (DOM)",
          platform: "Browser + VS Code",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m6",
          title: "Final Website Project",
          description:
            "Apply all your learning to design, build, and present a complete interactive website project from scratch.",
          outcomes: [
            "Plan and design a complete website (idea, layout, wireframe)",
            "Build a fully functional website using HTML, CSS & JavaScript",
            "Present your project with proper explanation and real-world use",
          ],
          language: "HTML + CSS + JavaScript",
          platform: "VS Code + Browser",
          lessons: 3,
          activities: "10+",
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
        {
          num: 1,
          title: "Personal Introduction Webpage",
          desc: "Create a simple webpage introducing yourself with text, images, and links.",
        },
        {
          num: 2,
          title: "Favorite Website Layout",
          desc: "Recreate the layout of a popular website to understand webpage structure.",
        },
        {
          num: 3,
          title: "School Timetable Page",
          desc: "Design a timetable webpage using HTML tables.",
        },
        {
          num: 4,
          title: "Feedback Form",
          desc: "Build a feedback form with multiple input fields and buttons.",
        },
        {
          num: 5,
          title: "Blog Layout Page",
          desc: "Create a blog-style webpage with header, content, and footer sections.",
        },
        {
          num: 6,
          title: "Portfolio Website",
          desc: "Build a personal portfolio showcasing projects and skills.",
        },
        {
          num: 7,
          title: "Navigation Bar Design",
          desc: "Create a responsive navigation bar using Flexbox.",
        },
        {
          num: 8,
          title: "Product Card UI",
          desc: "Design attractive product cards using CSS box model and styling.",
        },
        {
          num: 9,
          title: "Responsive Landing Page",
          desc: "Build a landing page that works on desktop and mobile screens.",
        },
        {
          num: 10,
          title: "Image Gallery Website",
          desc: "Create a gallery webpage displaying multiple images with styling.",
        },
        {
          num: 11,
          title: "Color Changer Tool",
          desc: "Build a tool that dynamically changes webpage colors using JavaScript.",
        },
        {
          num: 12,
          title: "JavaScript Calculator",
          desc: "Create a simple calculator using JavaScript logic.",
        },
        {
          num: 13,
          title: "To-Do List Application",
          desc: "Develop a task management app where users can add or remove tasks.",
        },
        {
          num: 14,
          title: "Quiz Website",
          desc: "Build an interactive quiz application with scoring functionality.",
        },
        {
          num: 15,
          title: "Image Slider Project",
          desc: "Create an interactive image slider using DOM manipulation.",
        },
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
        a: "The course duration is 4 months and includes 25 live lectures, each lasting 45-60 minutes.",
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
        a: "Yes. Students who successfully complete the course will receive a Certificate of Completion issued by Skillzrevo Academy Junior",
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
  {
    slug: "ai-explorers",
    title: "AI Explorers",
    id: "aiml",
    cat: "aiml",
    type: "single",
    price: 35400,
    subtitle: " Learn Artificial Intelligence the Fun Way",
    description:
      "Students learn how Artificial Intelligence works and build real AI projects using Python, Machine Learning, and Statistics.",

    lessons: 30,
    age: "12-18",
    grade: "8-12",
    durationMonths: "3 - 4",
    durationWeeks: "15",
    durationClasses: "45-60",
    activities: "80+",

    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your AI & Machine Learning Journey",
      subtitle:
        "Learn the fundamentals of Artificial Intelligence and Machine Learning and start building smart applications using Python, data analysis, and machine learning techniques.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of Artificial Intelligence and Machine Learning",
            "Understanding how AI systems learn from data",
            "Python programming for AI and data analysis",
            "Data visualization and basic statistics",
            "Building Machine Learning models",
            "Understanding algorithms like regression, clustering, and classification",
            " Introduction to Deep Learning and Neural Networks",
            "Building real-world AI projects",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Artificial Intelligence fundamentals",
            "Python programming skills",
            "Data analysis and visualization",
            "Logical thinking and problem solving",
            "Machine Learning model understanding",
            "Working with datasets using Pandas and NumPy",
            "AI project development skills",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            " AI & Machine Learning Course Certificate",
            "Hands-on AI project portfolio",
            "Real coding experience with Python",
            "Access to learning resources and coding community",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Artificial Intelligence & Machine Learning Foundations Program is a beginner-friendly course designed to introduce students to the world of AI and data-driven technologies. Students will explore how AI works in real life, learn Python programming, analyze datasets, and build machine learning models. The program follows a structured learning path where students move from basic AI concepts to building real AI projects. Structured into 6 modules, the course includes hands-on activities, assignments, assessments, and capstone projects that help students apply their knowledge in practical scenarios.By the end of the program, students will build and present their own AI-based project, demonstrating their understanding of machine learning concepts and data analysis techniques.",
      highlights: [
        { icon: "🎓", label: "30 Live Instructor-Led Lectures" },
        { icon: "📅", label: "4-Month Structured Learning Program" },
        { icon: "📦", label: "6 Modules Covering AI & Machine Learning" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final AI Project Presentation" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "AI Around Us",
          description:
            "Understand what AI is, how it is used in daily life, and how machines learn from data.",
          outcomes: [
            "Understand AI concepts and real-life applications",
            "Explain how AI learns using data and basic ML ideas",
          ],
          language: "AI Concepts",
          platform: "Classroom + Activities",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m2",
          title: "Python for AI",
          description:
            "Learn Python programming and use it for data handling, analysis, and visualization.",
          outcomes: [
            "Understand Python basics and environment setup",
            "Write programs using variables, input, and operators",
            "Apply conditions and loops for problem-solving",
            "Work with data structures (list, tuple, dictionary, set)",
            "Use NumPy for numerical operations",
            "Analyze datasets using Pandas",
            "Perform data cleaning using EDA techniques",
            "Visualize data for insights",
          ],
          language: "Python (NumPy, Pandas)",
          platform: "Jupyter Notebook / VS Code",
          lessons: 8,
          activities: "20+",
        },
        {
          id: "m3",
          title: "Statistics for AI",
          description:
            "Understand statistical concepts required for data analysis and machine learning.",
          outcomes: [
            "Understand basic statistical concepts (mean, median, mode)",
            "Apply descriptive statistics for data analysis",
            "Perform data cleaning and visualization using EDA",
            "Understand hypothesis testing fundamentals",
          ],
          language: "Statistics + Python",
          platform: "Jupyter Notebook",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m4",
          title: "Machine Learning",
          description:
            "Learn core machine learning algorithms and build predictive models.",
          outcomes: [
            "Understand machine learning concepts and types",
            "Explore ML concepts through guided discussion",
            "Build regression models for prediction",
            "Apply classification using logistic regression",
            "Understand decision tree logic and structure",
            "Apply Naive Bayes for classification problems",
            "Evaluate models using validation techniques",
            "Understand clustering concepts",
            "Explore association and pattern discovery",
          ],
          language: "Python (ML Basics)",
          platform: "Jupyter Notebook",
          lessons: 9,
          activities: "20+",
        },
        {
          id: "m5",
          title: "Advanced AI (Deep Learning & NLP)",
          description:
            "Explore advanced AI concepts including deep learning and natural language processing.",
          outcomes: [
            "Understand deep learning fundamentals and concepts",
            "Explore deep learning applications and working",
            "Understand ANN, CNN, and RNN architectures",
            "Learn fundamentals of Natural Language Processing",
            "Apply text processing and sentiment analysis",
            "Explore advanced NLP concepts (NER, BERT, speech recognition)",
          ],
          language: "Python (AI/Deep Learning)",
          platform: "Jupyter Notebook",
          lessons: 6,
          activities: "15+",
        },
        {
          id: "m6",
          title: "Capstone AI Projects",
          description:
            "Apply all AI, ML, and Python skills to build real-world intelligent applications.",
          outcomes: [
            "Build predictive models for real-world problems",
            "Perform sentiment analysis using NLP techniques",
            "Present AI-based solutions with proper explanation",
          ],
          language: "Python + Machine Learning + NLP",
          platform: "Jupyter Notebook",
          lessons: 1,
          activities: "10+",
        },
      ],
    },
    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Our AI & Machine Learning program focuses on practical learning through coding activities and AI projects. Students apply their knowledge by analyzing datasets, building machine learning models, and developing AI-powered applications.These activities help students develop problem-solving skills, analytical thinking, and real-world AI development experience.",
      activities: [
        "AI Tools Exploration",
        "Students explore popular AI tools and discuss real-world AI applications.",
        "Dataset Exploration Activity",
        "Students analyze datasets and identify patterns.",
        "Python Coding Exercises",
        "Students practice programming through small coding tasks.",
        "Data Visualization Activity",
        "Students create charts and graphs from datasets.",
        "Machine Learning Model Practice",
        "Students train simple ML models and analyze predictions.",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "AI Tools Research",
          desc: "Explore and present AI tools used in daily life.",
        },
        {
          num: 2,
          title: "Python Calculator",
          desc: "Build a simple calculator using Python.",
        },
        {
          num: 3,
          title: "Marks Analysis Tool",
          desc: "Analyze student marks dataset.",
        },
        {
          num: 4,
          title: "Dice Simulator",
          desc: "Create a probability simulation using Python.",
        },
        {
          num: 5,
          title: "Data Visualization Dashboard",
          desc: "Visualize datasets using Python charts.",
        },
        {
          num: 6,
          title: "Student Performance Predictor",
          desc: "Predict student scores using regression models.",
        },
        {
          num: 7,
          title: "Email Spam Classifier",
          desc: "Detect spam emails using Naive Bayes.",
        },
        {
          num: 8,
          title: "Customer Segmentation Model",
          desc: "Group customers using clustering.",
        },
        {
          num: 9,
          title: "Sentiment Analysis Tool",
          desc: "Analyze text sentiment as positive or negative.",
        },
        {
          num: 10,
          title: "AI Sentiment Dashboard",
          desc: "Build a final AI dashboard project.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Artificial Intelligence & Machine Learning Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior . This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final AI Explorers project. ",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final AI project",
      ],
    },
    reviews: [
      {
        name: "Abhi Sharma",
        rating: 5,
        text: "The AI course was very exciting. I learned how machines learn from data and built my first machine learning project.",
        avatar: "AS",
      },
      {
        name: "Riya Gupta",
        rating: 5,
        text: "The instructors explained AI concepts in a very simple way. Python projects helped me understand machine learning better.",
        avatar: "RG",
      },
      {
        name: "Kabir Verma",
        rating: 5,
        text: "I really enjoyed building the student performance prediction project. The course made AI easy to understand.",
        avatar: "KV",
      },
      {
        name: "Ananya Singh",
        rating: 5,
        text: "A great beginner course for students who want to explore Artificial Intelligence and Python programming.",
        avatar: "AN",
      },
      {
        name: "Vihaan Mehta",
        rating: 5,
        text: "The modules are very well structured and the projects helped me understand machine learning practically.",
        avatar: "VM",
      },
      {
        name: "Myra Kapoor",
        rating: 5,
        text: "The final AI project helped me build a sentiment analysis tool. It was a great learning experience.",
        avatar: "MK",
      },
    ],
    faqs: [
      {
        q: "Who is this course designed for?",
        a: " This course is designed for beginners, especially students who want to start learning Artificial Intelligence and Machine Learning.",
      },
      {
        q: "Do students need prior coding experience?",
        a: "No prior coding experience is required. The course starts with Python basics.",
      },
      {
        q: "What topics will students learn in this course?",
        a: " Students will learn Python programming, statistics, data analysis, machine learning algorithms, and AI concepts.",
      },
      {
        q: "How long is the course?",
        a: "The course duration is 4 months and includes 30 live lectures, each lasting 45-60 minutes.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "The course includes live instructor-led classes, and students also receive access to recorded lectures for revision and practice.",
      },
      {
        q: "Will students work on projects during the course?",
        a: "Yes. Students will complete multiple hands-on activities, mini projects, and a final AI Explorers project during the course.",
      },
      {
        q: "What tools will students use during the course?",
        a: "Students will use tools such as VS Code, Python, Jupyter Notebook, NumPy, Pandas, and visualization tools.",
      },
      {
        q: "Will students receive a certificate after completing the course?",
        a: "Yes. Students who successfully complete the course will receive a Certificate of Completion issued by Skillzrevo Academy Junior.",
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
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "",
      },
    ],
  },
  {
    slug: "cloud-champions",
    title: "Cloud Champions",
    id: "cloud",
    cat: "cloud",
    type: "single",
    price: 20060,
    subtitle: "Learn Cloud the Easy Way",
    description:
      "Students learn how modern applications run on the cloud and how to deploy servers, websites, and applications using cloud platforms.",
    lessons: 21,
    age: "12-18",
    grade: "8-12",
    durationMonths: "3 - 4",
    durationWeeks: "11",
    durationClasses: "45-60",
    activities: "40+",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=400&fit=crop&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Cloud Computing Journey",
      subtitle:
        "Learn how cloud computing powers modern websites, apps, and digital services while building hands-on projects using cloud platforms",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of cloud computing",
            "Difference between traditional IT and cloud systems",
            "Cloud service models like IaaS, PaaS, and SaaS",
            "Deploying servers and applications in the cloud",
            "Cloud storage and networking basics",
            "Identity and access management (IAM)",
            "Cloud monitoring, security, and automation",
            "Designing real-world cloud architectures",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Cloud computing fundamentals",
            "Deploying servers and applications in the cloud",
            "Understanding cloud networking and storage",
            "Managing users and permissions",
            "Monitoring cloud systems",
            "Basic DevOps and CI/CD concepts",
            "Designing scalable cloud architectures",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            " Cloud Computing Foundations Certificate",
            "Hands-on cloud projects and labs",
            "Real experience with cloud platforms",
            "Access to cloud learning resources",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Cloud Computing Foundations Program introduces students to the technology that powers modern digital services. Students will learn how companies host websites, store data, and run applications using cloud platforms. The course covers cloud infrastructure, computing services, storage, networking, and DevOps basics.Structured into 4 modules, the program includes hands-on labs, real-world cloud deployments, and practical exercises that help students understand how cloud platforms operate. By the end of the program, students will deploy a complete cloud-based application architecture as their final project.",
      highlights: [
        { icon: "🎓", label: "17 Live Instructor-Led Lectures" },
        { icon: "📅", label: "3-Month Structured Learning Program" },
        { icon: "📦", label: "4 Modules Covering Cloud Computing Concepts" },
        { icon: "🛠️", label: "Hands-on Cloud Labs and Projects" },
        { icon: "🖥️", label: "Final Cloud Architecture Capstone Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Cloud Basics",
          description:
            "Understand cloud computing fundamentals and core concepts.",
          outcomes: [
            "Understand cloud computing and its benefits",
            "Differentiate service and deployment models",
            "Identify cloud providers, regions, and pricing basics",
            "Explore cloud console and billing dashboard",
          ],
          language: "Cloud Concepts",
          platform: "AWS",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m2",
          title: "Core Services",
          description:
            "Learn essential cloud services for compute, storage, networking, and access control.",
          outcomes: [
            "Launch and manage virtual machines",
            "Work with different storage services",
            "Configure networking (VPC, subnet, load balancer)",
            "Manage identity and access using IAM",
          ],
          language: "Cloud Services",
          platform: "AWS & Services",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m3",
          title: "Administration & DevOps",
          description:
            "Manage cloud systems with monitoring, security, and DevOps practices.",
          outcomes: [
            "Monitor systems and configure alerts",
            "Implement backup and basic security",
            "Understand containers and serverless computing",
            "Learn CI/CD fundamentals and pipelines",
            "Build simple CI/CD pipeline",
          ],
          language: "DevOps Basics",
          platform: "AWS / Docker / GitHub",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m4",
          title: "Projects & Architecture",
          description:
            "Design cloud architectures and build real-world applications.",
          outcomes: [
            "Design scalable cloud architecture",
            "Optimize cost and ensure high availability",
            "Apply migration and security best practices",
            "Build and deploy complete cloud application",
          ],
          language: "Cloud Architecture",
          platform: "AWS",
          lessons: 4,
          activities: "10+",
        },
      ],
    },
    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "The Cloud Computing Foundations program focuses on hands-on cloud labs and deployment activities where students build and manage cloud infrastructure.Students will learn how to deploy servers, configure networking, host websites, and design scalable cloud systems.",
      activities: [
        "Cloud Console Exploration",
        "Virtual Machine Deployment",
        "Static Website Hosting",
        "Networking Setup",
        "Cloud Monitoring Setup",
        "Architecture Design Activity",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Cloud Console Exploration",
          desc: "Explore cloud platform dashboards.",
        },
        {
          num: 2,
          title: "Virtual Machine Deployment",
          desc: "Launch and manage cloud servers.",
        },
        {
          num: 3,
          title: "Static Website Hosting",
          desc: "Host a website using cloud storage.",
        },
        {
          num: 4,
          title: "Networking Configuration",
          desc: "Create VPCs and subnets.",
        },
        {
          num: 5,
          title: "IAM Security Setup",
          desc: "Configure user roles and permissions.",
        },
        {
          num: 6,
          title: "Monitoring Setup",
          desc: "Create alerts for cloud services.",
        },
        {
          num: 7,
          title: "CI/CD Pipeline Demo",
          desc: "Build a simple automated deployment pipeline.",
        },
        {
          num: 8,
          title: "Cloud Cost Optimization",
          desc: "Analyze cloud pricing and cost strategies.",
        },
        {
          num: 9,
          title: "Cloud Migration Case Study",
          desc: "Plan migration of an application to the cloud.",
        },
        {
          num: 10,
          title: "Final Cloud Architecture Project",
          desc: "Deploy a 3-tier cloud application architecture.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Cyber Security Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Complete the final cloud architecture project",
      ],
    },

    reviews: [
      {
        name: "Arnav Khanna",
        rating: 5,
        text: "The cloud computing course helped me understand how websites and apps run on cloud platforms.",
        avatar: "AK",
      },
      {
        name: "Tanya Mehra",
        rating: 5,
        text: "Launching my first cloud server was very exciting. The hands-on labs were very helpful.",
        avatar: "TM",
      },
      {
        name: "Karan Shah",
        rating: 5,
        text: "I liked learning about virtual machines and cloud networking.",
        avatar: "KS",
      },
      {
        name: "Ritika Malhotra",
        rating: 5,
        text: "The instructors explained cloud concepts in a simple way and the projects made learning practical.",
        avatar: "RM",
      },
      {
        name: "Aditya Jain",
        rating: 5,
        text: "The final cloud architecture project helped me understand how real applications run in the cloud.",
        avatar: "AJ",
      },
      {
        name: "Meera Bansal",
        rating: 5,
        text: "Hosting a website on the cloud was my favorite activity in this course.",
        avatar: "MB",
      },
    ],

    faqs: [
      {
        q: "Who is this course designed for?",
        a: "This course is designed for beginners who want to learn cloud computing and how modern applications run on the cloud.",
      },
      {
        q: "Do students need coding experience?",
        a: "No prior coding experience is required.",
      },
      {
        q: "What will students learn in this course?",
        a: "Students will learn cloud computing fundamentals, cloud services, deployment, and cloud architecture design.",
      },
      {
        q: "How long is the course?",
        a: "The course duration is 2 months with 17 live lectures.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live instructor-led and recorded sessions are available for revision.",
      },
      {
        q: "Will students perform hands-on labs?",
        a: "Yes. Students will deploy servers, host websites, and configure cloud services.",
      },
      {
        q: "What platforms will students use?",
        a: "Students will work with cloud platforms and cloud dashboards.",
      },
      {
        q: "Will students receive a certificate?",
        a: "Yes. Students will receive a Certificate of Completion from SkillzRevo Solutions.",
      },
      {
        q: "What is the class schedule?",
        a: "Weekend and weekday batches are available.",
      },
      {
        q: "How can students enroll?",
        a: "Students can enroll through the website or by booking a free demo class.",
      },
    ],

    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "🐍",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "*",
      },
      {
        title: "Java Juniors",
        desc: "Design and build your own Java App",
        grade: "8-12",
        slug: "java-juniors",
        icon: "*",
      },
    ],
  },
  {
    slug: "cpp-coders",
    title: "C++ Coders",
    id: "prog",
    cat: "prog",
    type: "single",
    price: 31860,
    subtitle: "Build Strong Programming Skills",
    description:
      "Students learn how to code using C++, build logical thinking, and create real-world applications through structured learning and hands-on practice.",
    lessons: 27,
    age: "12-18",
    grade: "8-12",
    durationMonths: "3 - 4",
    durationWeeks: "14",
    durationClasses: "45-60",
    activities: "55+",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your C++ Programming Journey",
      subtitle:
        " Learn one of the most powerful and widely used programming languages used in apps, software, and enterprise systems while building strong problem-solving skills.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of programming using C++",
            "C++ syntax and program structure",
            "Variables, data types, and operators",
            "Conditional statements and logic building",
            "Loops and problem-solving techniques",
            "Functions (methods) and reusable code",
            "Arrays and string handling",
            "Object-Oriented Programming (OOP) concepts",
            "Debugging and error handling",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Strong logical thinking and problem-solving",
            "Writing structured and efficient C++ code",
            "Understanding object-oriented programming",
            "Building real-world programs and applications",
            "Debugging and fixing errors",
            "Preparing foundation for advanced technologies",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "C++ Programming Certificate",
            "Hands-on coding experience",
            "Mini projects & real-world applications",
            "Strong foundation for software development",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The C++ Programming Foundations Program is designed to help students learn coding from scratch using C++. It focuses on building strong programming fundamentals, logic, and problem-solving skills.Students will learn how to write structured programs, understand object-oriented programming, and build real-world applications. The course includes hands-on practice, coding exercises, and projects.By the end of the program, students will be able to build complete C++ applications and present their final projects.",
      highlights: [
        { icon: "🎓", label: "27 Live Instructor-Led Lectures" },
        { icon: "📅", label: "4-Month Structured Learning Program" },
        { icon: "📦", label: "10 Modules Covering C++ programming Concepts" },
        { icon: "🛠️", label: "Beginner to Intermediate Level" },
        { icon: "🖥️", label: "Final C++ programming Capstone Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "C++ Foundations",
          description: "Learn programming basics and get started with C++.",
          outcomes: [
            "Understand programming concepts and C++ basics",
            "Write first program using input/output",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m2",
          title: "Variables & Operators",
          description: "Work with data types and perform operations in C++.",
          outcomes: [
            "Use variables and data types",
            "Apply operators in programs",
            "Perform type casting and expressions",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m3",
          title: "Decision Making",
          description: "Implement logic using conditional statements.",
          outcomes: [
            "Apply if-else conditions",
            "Use switch-case statements",
            "Solve complex conditions using nested logic",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m4",
          title: "Loops",
          description: "Automate repetitive tasks using loops.",
          outcomes: ["Use loops for iteration", "Compare loop types and logic"],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m5",
          title: "Functions",
          description: "Write modular and reusable code using functions.",
          outcomes: [
            "Understand function structure",
            "Use parameters and return values",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m6",
          title: "Arrays & Strings",
          description: "Work with collections of data and text.",
          outcomes: [
            "Use arrays for data storage",
            "Work with 2D arrays",
            "Apply string operations",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m7",
          title: "OOP Core",
          description: "Learn object-oriented programming concepts in C++.",
          outcomes: [
            "Create classes and objects",
            "Apply encapsulation",
            "Use inheritance for reusability",
            "Understand polymorphism",
            "Apply abstraction concepts",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m8",
          title: "Exception Handling",
          description: "Handle runtime errors effectively.",
          outcomes: [
            "Handle exceptions using try-catch",
            "Implement custom exceptions",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m9",
          title: "File Handling",
          description: "Store and manage data using files.",
          outcomes: ["Read and write files", "Build file-based applications"],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m10",
          title: "Capstone Projects",
          description: "Build and present complete C++ applications.",
          outcomes: [
            "Build console-based applications",
            "Apply OOP concepts in projects",
            "Present final project",
          ],
          language: "C++",
          platform: "VS Code / Code::Blocks",
          lessons: 3,
          activities: "5+",
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will build multiple programs and applications to strengthen their understanding of C++.",
      activities: [
        "Writing First C++ Program",
        "Logic Building Exercises",
        "Loop-Based Problem Solving",
        "Function-Based Programs",
        "String & List Manipulation",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "C++ Basics Practice",
          desc: "Write simple programs to understand syntax, input-output, and variables.",
        },
        {
          num: 2,
          title: "Calculator Application",
          desc: "Build a calculator using operators and conditional logic.",
        },
        {
          num: 3,
          title: "Number Guessing Game",
          desc: "Create an interactive game using loops and logic.",
        },
        {
          num: 4,
          title: "Student Management System",
          desc: "Store and manage student data using arrays and basic operations.",
        },
        {
          num: 5,
          title: "Pattern Generator Program",
          desc: "Generate different patterns using loops to improve logic.",
        },
        {
          num: 6,
          title: "Matrix Operations Program",
          desc: "Perform operations on 2D arrays like addition and multiplication.",
        },
        {
          num: 7,
          title: "String Utility Tool",
          desc: "Perform operations like reverse, palindrome check, and formatting.",
        },
        {
          num: 8,
          title: "File Handling Project",
          desc: "Read and write data using files in C++.",
        },
        {
          num: 9,
          title: "Simple Login System",
          desc: "Create a basic login system using conditions and validation.",
        },
        {
          num: 10,
          title: "Quiz Game Application",
          desc: "Build a quiz game with score tracking and user interaction.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the C++ Programming Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final C++ project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Complete the final C++ programming project",
      ],
    },

    reviews: [
      {
        name: "Arnav Khanna",
        rating: 5,
        text: "C++ course helped me understand programming basics clearly.",
        avatar: "AK",
      },
      {
        name: "Tanya Mehra",
        rating: 5,
        text: "Building my first C++ application was exciting!",
        avatar: "TM",
      },
      {
        name: "Karan Shah",
        rating: 5,
        text: "OOP concepts became very easy to understand.",
        avatar: "KS",
      },
      {
        name: "Ritika Malhotra",
        rating: 5,
        text: "Teaching style is very simple and practical.",
        avatar: "RM",
      },
      {
        name: "Aditya Jain",
        rating: 5,
        text: "The final project helped me gain real confidence.",
        avatar: "AJ",
      },
      {
        name: "Meera Bansal",
        rating: 5,
        text: "I enjoyed building projects and learning C++.",
        avatar: "MB",
      },
    ],

    faqs: [
      {
        q: "Who is this course for?",
        a: "Students of Grade 8–12 interested in learning programming.",
      },
      {
        q: "Do I need prior coding knowledge?",
        a: "No, this course starts from the basics.",
      },
      {
        q: "What will I learn?",
        a: "C++ programming, OOP, logic building, and project development.",
      },
      {
        q: "Course duration?",
        a: "3–4 months structured program.",
      },
      {
        q: "Live or recorded classes?",
        a: "Live + recorded sessions.",
      },
      {
        q: "Are there projects?",
        a: "Yes, multiple mini + final project.",
      },
      {
        q: "Will I get a certificate?",
        a: "Yes.",
      },
      {
        q: "Is C++ useful?",
        a: "Yes, widely used in app development and enterprise systems.",
      },
    ],
    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "🐍",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "*",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "*",
      },
    ],
  },
  {
    slug: "code-builders",
    title: "Code Builders",
    id: "web",
    cat: "web",
    type: "single",
    price: 37760,
    subtitle: "Power Websites from Behind the Scenes",
    description:
      "A hands-on backend development program where students learn to build APIs, manage databases, implement authentication, and deploy real-world applications using Node.js, Express, and MongoDB.",
    lessons: 32,
    age: "12-18",
    grade: "8-12",
    durationMonths: "3 - 4",
    durationWeeks: "16",
    durationClasses: "45-60",
    activities: "60+",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=400&fit=crop&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Backend Development Journey",
      subtitle:
        "Learn how the server-side of applications works and gain the skills to build scalable and secure backend systems. This program helps students understand APIs, databases, authentication, and deployment through real-world projects.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Understanding backend development and client-server architecture",
            "Working with Node.js and server-side JavaScript",
            "Building APIs using Express framework",
            "Designing RESTful services and handling CRUD operations",
            "Working with databases like MongoDB",
            "Integrating backend with frontend applications",
            "Implementing authentication using JWT",
            "Handling file uploads and API integrations",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Backend Development & API Building",
            "Server-side Programming with Node.js",
            "Database Management (MongoDB)",
            "REST API Design & Implementation",
            "Authentication & Security Concepts",
            "Debugging & Error Handling",
            "System Design Basics",
            "Project Building & Presentation Skills",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Build scalable backend systems and APIs",
            "Create and manage databases effectively",
            "Develop secure authentication systems",
            "Integrate frontend with backend services",
            "Deploy live backend applications",
            "Work on real-world projects with industry practices",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "This Backend Development Program is designed to help students master server-side programming and application logic. Starting from backend fundamentals, students gradually learn Node.js, Express framework, REST APIs, and database integration.The program emphasizes practical learning, where students build multiple APIs and backend systems throughout the course. By the end, students will develop and deploy a complete backend project with authentication, database integration, and real-world functionality.",
      highlights: [
        { icon: "🎓", label: "32 Live Instructor-Led Lectures" },
        { icon: "📅", label: "3-4-Month Structured Learning Program" },
        { icon: "📦", label: "11 Modules Covering Under Code Builders" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Back-End Project Presentation" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Backend Fundamentals",
          description:
            "Understand backend development, internet working, and Node.js basics.",
          outcomes: [
            "Understand backend vs frontend and client-server model",
            "Learn HTTP, APIs, and request-response cycle",
            "Setup Node.js and run first backend program",
          ],
          language: "JavaScript (Node.js)",
          platform: "VS Code",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m2",
          title: "Node Basics",
          description: "Learn core Node.js concepts and build basic servers.",
          outcomes: [
            "Work with Node.js core modules and file system",
            "Understand event loop and asynchronous behavior",
            "Handle HTTP requests and responses",
          ],
          language: "JavaScript",
          platform: "Node.js",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m3",
          title: "Express Framework",
          description: "Build scalable backend using Express.js framework.",
          outcomes: [
            "Setup Express application",
            "Create routes and APIs",
            "Use route parameters",
            "Implement middleware logic",
          ],
          language: "JavaScript",
          platform: "Node.js / Express",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m4",
          title: "REST API",
          description: "Design and build RESTful APIs for applications.",
          outcomes: [
            "Work with JSON APIs",
            "Design RESTful architecture",
            "Implement CRUD operations",
          ],
          language: "JavaScript",
          platform: "Node.js / Postman",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m5",
          title: "Database Basics",
          description:
            "Understand database concepts and perform CRUD operations.",
          outcomes: [
            "Understand SQL vs NoSQL concepts",
            "Work with MongoDB collections",
            "Perform CRUD operations in database",
          ],
          language: "Database (NoSQL)",
          platform: "MongoDB",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m6",
          title: "Node + MongoDB",
          description: "Integrate backend with database using Mongoose.",
          outcomes: [
            "Connect Node.js with MongoDB",
            "Design schemas using Mongoose",
            "Build APIs with database integration",
          ],
          language: "JavaScript",
          platform: "Node.js / MongoDB",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m7",
          title: "Authentication",
          description: "Implement secure login and authentication systems.",
          outcomes: [
            "Understand authentication and password security",
            "Implement JWT-based authentication and protected routes",
          ],
          language: "JavaScript",
          platform: "Node.js",
          lessons: 2,
          activities: "4+",
        },
        {
          id: "m8",
          title: "Backend Logic",
          description:
            "Improve backend reliability with validation and error handling.",
          outcomes: [
            "Validate user input",
            "Handle errors and manage environment variables",
          ],
          language: "JavaScript",
          platform: "Node.js",
          lessons: 2,
          activities: "4+",
        },
        {
          id: "m9",
          title: "Backend Integration",
          description: "Connect frontend with backend and manage file uploads.",
          outcomes: [
            "Integrate frontend with backend APIs",
            "Handle CORS and file uploads",
          ],
          language: "JavaScript",
          platform: "Angular / Node.js",
          lessons: 2,
          activities: "4+",
        },
        {
          id: "m10",
          title: "Deployment",
          description:
            "Deploy backend applications and manage cloud databases.",
          outcomes: [
            "Understand deployment process",
            "Deploy Node.js applications",
            "Connect to cloud databases",
          ],
          language: "Node",
          platform: "Any Hosting Platforms",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m11",
          title: "Capstone Project",
          description: "Build and deploy a complete backend system.",
          outcomes: [
            "Design backend architecture",
            "Integrate database and authentication",
            "Test APIs and deploy project",
            "Present final project",
          ],
          language: "Full Backend Stack",
          platform: "Node.js",
          lessons: 4,
          activities: "10+",
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students who successfully complete the Code Builders Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate validates their practical skills in backend development, API building, and database management. Throughout the program, students actively participate in hands-on activities, assignments, and real-world backend projects, culminating in a final backend application built using Node.js, Express, and MongoDB.",
      activities: [
        "Understand how backend systems work and explore client-server architecture",
        "Build basic servers using Node.js and handle HTTP requests",
        "Create RESTful APIs using Express framework",
        "Work with databases and perform CRUD operations using MongoDB",
        "Implement authentication systems using JWT for secure access",
        "Handle real-world backend features like file uploads and API integration",
        "Debug, test, and optimize backend applications",
        "Work on complete backend projects from API development to deployment",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Basic Node.js Server",
          desc: "Create a simple server using Node.js and handle HTTP requests.",
        },
        {
          num: 2,
          title: "File System Manager",
          desc: "Build a project to read, write, and manage files using Node.js.",
        },
        {
          num: 3,
          title: "Express API Starter",
          desc: "Create basic APIs using Express framework.",
        },
        {
          num: 4,
          title: "Student Management API",
          desc: "Build a REST API to manage student data with CRUD operations.",
        },
        {
          num: 5,
          title: "MongoDB CRUD Application",
          desc: "Develop an application to perform database operations using MongoDB.",
        },
        {
          num: 6,
          title: "User Authentication System",
          desc: "Implement login and registration system with secure authentication.",
        },
        {
          num: 7,
          title: "JWT Secure API",
          desc: "Protect APIs using JWT-based authentication and authorization.",
        },
        {
          num: 8,
          title: "File Upload System",
          desc: "Create backend functionality to upload and manage files.",
        },
        {
          num: 9,
          title: "Frontend-Backend Integration",
          desc: "Connect frontend application with backend APIs.",
        },
        {
          num: 10,
          title: "Final Backend Application",
          desc: "Design, build, and deploy a complete backend system with APIs, database, and authentication.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Code Builders Program will receive an official Certificate of Completion. This certificate showcases their expertise in backend development, including API design, database integration, and authentication systems. It reflects their hands-on learning journey through assignments, real-world projects, and the successful development and deployment of a complete backend application.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final Code Builder project",
      ],
    },

    reviews: [
      {
        name: "Arjun Mehra",
        rating: 5,
        text: "The Code Builders course was amazing. I learned how to build APIs and understand how backend systems work.",
        avatar: "AM",
      },
      {
        name: "Sneha Verma",
        rating: 5,
        text: "The instructors explained backend concepts in a very simple way. I really enjoyed working with Node.js and databases.",
        avatar: "SV",
      },
      {
        name: "Rohit Yadav",
        rating: 5,
        text: "Building my own backend API was the best part. This course made server-side coding easy and interesting.",
        avatar: "RY",
      },
      {
        name: "Kavya Singh",
        rating: 5,
        text: "A perfect beginner-friendly course to understand backend development and real-world applications.",
        avatar: "KS",
      },
      {
        name: "Aditya Kapoor",
        rating: 5,
        text: "The projects were very practical. I built authentication systems, APIs, and learned database integration.",
        avatar: "AK",
      },
      {
        name: "Neha Joshi",
        rating: 5,
        text: "The final project helped me build a complete backend application with database and authentication. Great experience!",
        avatar: "NJ",
      },
    ],
    faqs: [
      {
        q: "What is this Code Builders course about?",
        a: "This course teaches students how to build backend systems, APIs, and databases in a fun and practical way. Students learn Node.js, Express, and MongoDB while working on real-world backend projects.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students aged 12–18 years. It is suitable for beginners as well as students who want to explore backend development.",
      },
      {
        q: "Does my child need coding experience?",
        a: "Basic understanding of JavaScript is helpful but not required. The course starts from fundamentals and gradually moves to advanced backend concepts.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to build APIs, database-driven applications, authentication systems, and a complete backend application as their final project.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This program focuses on real-world backend development, including API building, database integration, authentication systems, and deployment, instead of just theoretical coding.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will students work on?",
        a: "Students will work on projects like REST APIs, CRUD applications, authentication systems, file upload systems, and a final backend application project.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed to start from basics and gradually build up to advanced backend development concepts.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, VS Code, Node.js, and MongoDB. All tools used are free.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive a Certificate of Completion after successfully finishing the course and submitting their final backend project.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build strong logical thinking, backend development skills, and a foundation for full-stack development and future tech careers.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if a student misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],
    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "",
      },
    ],
  },
  {
    slug: "cyber-heroes",
    title: "Cyber Heroes",
    id: "cyber",
    cat: "cyber",
    type: "single",
    price: 24780,
    subtitle: "Become a Digital Protector",
    description:
      "Students learn how hackers think, how cyber attacks work, and how to protect systems, networks, and online accounts.",
    lessons: 21,
    age: "12-18",
    grade: "8-12",
    durationMonths: "2 - 3",
    durationWeeks: "11",
    durationClasses: "45-60",
    activities: "40+",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=400&fit=crop&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Cyber Security Journey",
      subtitle:
        " Learn the fundamentals of cyber security and digital safety while exploring ethical hacking concepts, security tools, and real-world cyber attack scenarios.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of cyber security and digital safety",
            "Understanding cyber threats and online risks",
            "Safe browsing and password security practices",
            "Networking basics and internet communication",
            "Introduction to Linux and security tools",
            "Cryptography and data protection techniques",
            "Ethical hacking concepts and vulnerability assessment",
            "Real-world cyber security practices and simulations",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Cyber security awareness and digital safety",
            "Understanding cyber threats and attacks",
            "Basic networking knowledge",
            "Linux command-line skills",
            "Security analysis and risk identification",
            "Ethical hacking fundamentals",
            "Incident response and cyber defense skills",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Cyber Security Foundations Certificate",
            "Hands-on security labs and exercises",
            "Real-world cyber attack simulations",
            "Access to cybersecurity learning resources",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Cyber Security Foundations Program is designed to introduce students to the exciting world of cyber security and ethical hacking. Students will learn how cyber attacks happen, how hackers exploit vulnerabilities, and how security professionals protect systems and networks. The program focuses on digital safety, ethical hacking fundamentals, networking concepts, and real-world cyber defense practices.Structured into 4 modules, the course includes interactive activities, hands-on labs, security simulations, and capstone projects that help students understand cyber threats and how to defend against them. By the end of the program, students will complete a cyber security capstone project, where they will analyze security risks and implement protection strategies.",
      highlights: [
        { icon: "🎓", label: "21 Live Instructor-Led Lectures" },
        { icon: "📅", label: "3-Month Structured Learning Program" },
        { icon: "📦", label: "4 Modules Covering Cyber Security Concepts" },
        { icon: "🛠️", label: "Hands-on Security Labs and Activities" },
        { icon: "🖥️", label: "Final Cyber Security Project Presentation" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Cyber Awareness & Digital Safety",
          description:
            "Learn how to stay safe online and understand common cyber threats.",
          outcomes: [
            "Understand importance of cyber security",
            "Identify common cyber threats",
            "Practice safe browsing and privacy protection",
            "Understand social media safety and cyber laws",
          ],
          language: "Cyber Concepts",
          platform: "Classroom + Browser",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m2",
          title: "Cyber Security Fundamentals",
          description:
            "Build strong foundational knowledge of networking and security concepts.",
          outcomes: [
            "Understand networking basics and devices",
            "Learn internet communication (IP, DNS, HTTP)",
            "Explore OS security and Linux basics",
            "Understand cryptography fundamentals",
            "Differentiate encryption vs hashing",
            "Apply CIA triad and identify vulnerabilities",
          ],
          language: "Networking + Security",
          platform: "Lab + Simulation Tools",
          lessons: 6,
          activities: "10+",
        },
        {
          id: "m3",
          title: "Ethical Hacking & Security Tools",
          description:
            "Learn ethical hacking concepts and use tools to identify vulnerabilities.",
          outcomes: [
            "Understand ethical hacking lifecycle",
            "Perform footprinting and network scanning",
            "Identify vulnerabilities in systems",
            "Understand web security and SQL injection",
            "Learn XSS, malware, and wireless security",
            "Understand social engineering attacks",
          ],
          language: "Cyber Security Tools",
          platform: "Kali Linux Lab",
          lessons: 6,
          activities: "10+",
        },
        {
          id: "m4",
          title: "Cyber Range & Real-World Practice",
          description:
            "Apply cybersecurity skills in real-world scenarios and simulations.",
          outcomes: [
            "Solve security challenges using CTF",
            "Perform incident response and log analysis",
            "Apply threat hunting and system hardening",
            "Understand SOC workflow and monitoring",
            "Build and present a security project",
          ],
          language: "Practical Cyber Security",
          platform: "Cyber Labs",
          lessons: 5,
          activities: "10+",
        },
      ],
    },
    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "The Cyber Security Foundations program focuses on interactive labs, security simulations, and real-world cyber defense exercises.Students will learn to identify threats, analyze vulnerabilities, and implement basic security practices through hands-on activities.",
      activities: [
        "Phishing Detection Activity",
        "Password Security Workshop",
        "Digital Footprint Audit",
        "Network Diagram Activity",
        "Encryption Activity",
        "Cyber Attack Simulation",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Phishing Email Detection",
          desc: "Identify phishing emails and suspicious links.",
        },
        {
          num: 2,
          title: "Password Security Audit",
          desc: "Analyze password strength and security practices.",
        },
        {
          num: 3,
          title: "Network Security Diagram",
          desc: "Design a simple secure network.",
        },
        {
          num: 4,
          title: "Encryption Demo Project",
          desc: "Implement basic encryption methods.",
        },
        {
          num: 5,
          title: "Vulnerability Assessment",
          desc: "Identify security weaknesses in systems.",
        },
        {
          num: 6,
          title: "Web Security Analysis",
          desc: "Analyze website security features.",
        },
        {
          num: 7,
          title: "Wi-Fi Security Checklist",
          desc: "Evaluate wireless network security.",
        },
        {
          num: 8,
          title: "Incident Response Simulation",
          desc: "Respond to a simulated cyber attack.",
        },
        {
          num: 9,
          title: "Security Log Investigation",
          desc: "Analyze system logs to detect threats.",
        },
        {
          num: 10,
          title: "Cyber Security Audit Project",
          desc: "Conduct a security audit and present protection strategies.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Cyber Security Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final Cyber Heroes project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Complete the final cyber security project",
      ],
    },

    reviews: [
      {
        name: "Arjun Patel",
        rating: 5,
        text: "The cyber security course was very interesting. I learned how hackers attack systems and how to protect my online accounts.",
        avatar: "AP",
      },
      {
        name: "Aditi Sharma",
        rating: 5,
        text: "I liked activities like phishing detection and password security. The classes were easy to understand and very practical.",
        avatar: "AS",
      },
      {
        name: "Rohan Mehta",
        rating: 5,
        text: "The ethical hacking concepts and Linux basics were very exciting. I enjoyed the hands-on labs and cyber challenges.",
        avatar: "RM",
      },
      {
        name: "Sneha Kapoor",
        rating: 5,
        text: "This course helped me understand how to stay safe online and protect personal data from cyber threats.",
        avatar: "SK",
      },
      {
        name: "Dev Verma",
        rating: 5,
        text: "The instructors explained networking and security concepts very clearly. The practical exercises made learning fun.",
        avatar: "DV",
      },
      {
        name: "Ishaan Gupta",
        rating: 5,
        text: "The cyber security simulations and projects helped me understand how security professionals work.",
        avatar: "IG",
      },
    ],

    faqs: [
      {
        q: "Who is this course designed for?",
        a: "This course is designed for beginners who want to learn cyber security and digital safety.",
      },
      {
        q: "Do students need prior technical knowledge?",
        a: "No prior technical knowledge is required.",
      },
      {
        q: "What topics will students learn?",
        a: "Students will learn cyber security basics, networking, Linux, ethical hacking concepts, and digital safety.",
      },
      {
        q: "How long is the course?",
        a: "The course duration is 3 months with 21 live lectures.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are conducted live and recorded lectures are also available.",
      },
      {
        q: "Will students perform hands-on labs?",
        a: "Yes. Students will participate in security labs and simulations.",
      },
      {
        q: "What tools will students use?",
        a: "Students will use basic networking tools, Linux terminal, and security labs.",
      },
      {
        q: "Will students receive a certificate?",
        a: "Yes. Students will receive a Certificate of Completion from SkillzRevo Academy Junior.",
      },
      {
        q: "What is the class schedule?",
        a: "Weekend and weekday batches are available.",
      },
      {
        q: "How can students enroll?",
        a: "Students can enroll through the website or by booking a free demo class.",
      },
    ],

    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "🐍",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "*",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "*",
      },
    ],
  },
  {
    slug: "da-detectives",
    title: "Data Detectives",
    id: "aiml",
    cat: "aiml",
    type: "single",
    price: 31860,
    subtitle: "Learn Data Analytics the Fun Way",
    description:
      "Students learn how to analyze data, discover insights, and create dashboards using Excel, Python, SQL, and Power BI.",
    lessons: 27,
    age: "12-18",
    grade: "8-12",
    durationMonths: "3 - 4",
    durationWeeks: "14",
    durationClasses: "45-60",
    activities: "50+",
    heroImage:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Data Analytics Journey",
      subtitle:
        "Learn how to understand data, analyze information, and create meaningful insights using modern data Analysis tools like Excel, Python, SQL, and Power BI.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of Data and Data Analysis",
            "Understanding different types of data and datasets",
            "Data analysis using Microsoft Excel",
            "Python programming for data analysis",
            "Working with databases using SQL",
            "Data visualization and dashboard creation",
            "Business insights and decision-making using data",
            "Building real-world analysis projects",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Data analysis and interpretation",
            "Spreadsheet skills using Excel",
            "Python programming for analysis",
            "Database querying using SQL",
            "Data visualization skills",
            "Dashboard building using Power BI",
            "Analytical thinking and problem solving",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Data Analysis Foundations Certificate",
            "Hands-on analysis project portfolio",
            "Real experience with industry tools",
            "Access to learning resources and coding community",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Data Analysis Foundations Program is designed to introduce students to the world of data analysis and data-driven decision making. Students will learn how data is collected, analyzed, and transformed into meaningful insights. The course introduces modern Analysis tools such as Excel, Python, SQL, and Power BI, which are widely used in industry. Structured into 6 modules, the program combines theory with practical exercises, assignments, and projects that help students build real-world Analysis skills.By the end of the course, students will build and present their own data Analysis dashboard project, demonstrating their ability to analyze data and communicate insights effectively.",
      highlights: [
        { icon: "🎓", label: "27 Live Instructor-Led Lectures" },
        { icon: "📅", label: "4-Month Structured Learning Program" },
        { icon: "📦", label: "6 Modules Covering Data Analysis Tools" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Data Analysis Dashboard Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Data Literacy",
          description:
            "Understand the basics of data, how it is used in real life, and learn to interpret datasets.",
          outcomes: [
            "Identify types of data and real-world data usage",
            "Differentiate data vs information using basic statistics",
            "Analyze and interpret datasets effectively",
          ],
          language: "Data Concepts",
          platform: "Classroom + Activities",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m2",
          title: "Microsoft Excel",
          description:
            "Learn to organize, analyze, and visualize data using Microsoft Excel.",
          outcomes: [
            "Enter, format, and manage data in Excel",
            "Apply formulas and logical functions (SUM, IF, etc.)",
            "Organize data using sorting and filtering",
            "Highlight insights using conditional formatting",
            "Create charts and pivot tables for analysis",
          ],
          language: "Excel",
          platform: "Microsoft Excel",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m3",
          title: "Python for Data Analysis",
          description:
            "Learn Python programming and use it for data analysis and visualization.",
          outcomes: [
            "Understand Python basics and environment setup",
            "Write programs using variables, operators, and input",
            "Apply conditions and loops for problem-solving",
            "Work with data structures (list, tuple, dictionary, set)",
            "Use NumPy for numerical operations",
            "Analyze datasets using Pandas",
            "Perform data cleaning and EDA",
            "Visualize data for insights",
          ],
          language: "Python (NumPy, Pandas)",
          platform: "Jupyter Notebook / VS Code",
          lessons: 8,
          activities: "20+",
        },
        {
          id: "m4",
          title: "SQL",
          description:
            "Learn database concepts and perform data operations using SQL queries.",
          outcomes: [
            "Understand database structure and SQL basics",
            "Retrieve and manipulate data using SQL queries",
            "Apply sorting and aggregation functions",
            "Use joins to combine multiple tables",
            "Practice SQL queries through real datasets",
          ],
          language: "SQL",
          platform: "MySQL / SQLite",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m5",
          title: "Power BI",
          description:
            "Create interactive dashboards and reports using Power BI.",
          outcomes: [
            "Understand Power BI interface and import data",
            "Clean and transform data for visualization",
            "Create interactive charts and filters",
            "Design KPIs and build complete reports",
          ],
          language: "Power BI",
          platform: "Power BI Desktop",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m6",
          title: "Capstone Data Projects",
          description:
            "Apply all skills to build real-world data analysis and dashboard projects.",
          outcomes: [
            "Build interactive dashboards using Power BI & Excel",
            "Perform complete dataset analysis using Python",
            "Combine tools to create and present real-world data projects",
          ],
          language: "Python + Excel + Power BI",
          platform: "Jupyter + Excel + Power BI",
          lessons: 3,
          activities: "10+",
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "The Data Analysis Foundations program focuses on practical learning through real data analysis projects. Students will work with datasets, perform analysis, and build dashboards to visualize insights.These activities help students develop analytical thinking, problem-solving skills, and real-world data Analysis experience.",
      activities: [
        "Data Identification Activity",
        "Dataset Exploration Activity",
        "Excel Analysis Activity",
        "Data Visualization Activity",
        "Dashboard Design Activity",
        "SQL Query Practice",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Data Classification Activity",
          desc: "Identify and classify different types of data.",
        },
        {
          num: 2,
          title: "Marks Analysis Dashboard",
          desc: "Analyze student performance using Excel.",
        },
        {
          num: 3,
          title: "Sales Analysis Dashboard",
          desc: "Create a sales analysis dashboard in Excel.",
        },
        {
          num: 4,
          title: "Python Dataset Analysis",
          desc: "Analyze datasets using Python.",
        },
        {
          num: 5,
          title: "Data Visualization Charts",
          desc: "Create graphs using Python.",
        },
        {
          num: 6,
          title: "SQL Database Analysis",
          desc: "Retrieve insights from datasets using SQL queries.",
        },
        {
          num: 7,
          title: "Customer Analysis Dashboard",
          desc: "Analyze customer data.",
        },
        {
          num: 8,
          title: "Power BI Sales Dashboard",
          desc: "Create an interactive sales dashboard.",
        },
        {
          num: 9,
          title: "Marketing Analysis Dashboard",
          desc: "Analyze marketing campaign performance.",
        },
        {
          num: 10,
          title: "Final Data Analysis Dashboard",
          desc: "Develop a complete analysis dashboard as the final capstone project.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Data Analysis Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final Data Detective project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Build and present the final Analysis dashboard",
      ],
    },

    reviews: [
      {
        name: "Abhishek Sharma",
        rating: 5,
        text: "This course helped me understand how data works and how to analyze it using Excel and Python.",
        avatar: "AS",
      },
      {
        name: "Rajat Gupta",
        rating: 5,
        text: "The dashboards and visualization activities made learning data analysis very interesting.",
        avatar: "RG",
      },
      {
        name: "Sanu Verma",
        rating: 5,
        text: "I enjoyed working with datasets and building dashboards in Power BI.",
        avatar: "SV",
      },
      {
        name: "Amit Singh",
        rating: 5,
        text: "The course structure is easy to follow and the projects helped me learn data analysis step by step.",
        avatar: "AS",
      },
      {
        name: "Vibhor Mehta",
        rating: 5,
        text: "I learned Excel, Python, and SQL in a very simple way. The projects made learning practical.",
        avatar: "VM",
      },
      {
        name: "Mansi Kapoor",
        rating: 5,
        text: "The final dashboard project helped me understand how data analysis is used in real businesses.",
        avatar: "MK",
      },
    ],

    faqs: [
      {
        q: "Who is this course designed for?",
        a: "This course is designed for beginners who want to learn data analysis and understand how data is used for decision making.",
      },
      {
        q: "Do students need prior coding experience?",
        a: "No prior coding experience is required. The course starts with basic concepts.",
      },
      {
        q: "What tools will students learn?",
        a: "Students will learn Excel, Python, SQL, and Power BI.",
      },
      {
        q: "How long is the course?",
        a: "The course duration is 4 months with 27 live lectures.",
      },
      {
        q: "Are classes live or recorded?",
        a: "Classes are conducted live and students also get recorded lectures.",
      },
      {
        q: "Will students build projects?",
        a: "Yes. Students will build multiple analysis projects and a final dashboard project.",
      },
      {
        q: "What skills will students gain?",
        a: "Students will learn data analysis, visualization, dashboard building, and analytical thinking.",
      },
      {
        q: "Will students receive a certificate?",
        a: "Yes. Students will receive a Certificate of Completion from SkillzRevo Academy Junior.",
      },
      {
        q: "What is the class schedule?",
        a: "Weekend and weekday batches are available.",
      },
      {
        q: "How can students enroll?",
        a: "Students can enroll through the website or book a free demo class.",
      },
    ],

    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "🐍",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "*",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "*",
      },
    ],
  },
  {
    slug: "genai-explorers",
    title: "GenAI Explorers",
    id: "aiml",
    cat: "aiml",
    type: "single",
    price: 23600,
    subtitle:
      "Learn Generative AI & Build Smart Applications for Kids and Teens",
    description:
      "An interactive, project-based program where students explore AI, create chatbots, generate images, and build real-world applications using cutting-edge Generative AI tools.",
    lessons: 20,
    age: "12-18",
    grade: "8-12",
    durationMonths: "2 - 3",
    durationWeeks: "10",
    durationClasses: "45-60",
    activities: "50+",
    heroImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=400&fit=crop&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Generative AI Journey",
      subtitle:
        "Discover the power of Artificial Intelligence and learn how to create content, chatbots, and smart applications. This program helps students build creativity, logical thinking, and future-ready tech skills through hands-on learning.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Introduction to Artificial Intelligence, Machine Learning, and Generative AI",
            "Understanding how AI systems learn from data",
            "Writing effective prompts to get better AI results",
            "Building AI chatbots with personality and context",
            "Creating images and designs using AI tools",
            "Developing AI-powered apps without coding",
            "Basics of voice AI and multimodal systems",
            "Understanding ethical AI usage and safety practices",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Critical Thinking & Problem Solving",
            "Prompt Engineering & Communication with AI",
            "Chatbot Development Skills",
            "Creative Design using AI Tools",
            "No-Code App Development",
            "Voice & Multimodal AI Interaction",
            "Content Creation & Storytelling",
            "Analytical Thinking & Optimization",
            "Ethical AI Awareness",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Build your own AI-powered chatbot",
            "Create stunning AI-generated images and designs",
            "Develop real-world AI applications without coding",
            "Design a personal AI content portfolio",
            "Understand how to use AI safely and responsibly",
            "Complete a capstone project to showcase your skills",
            "Gain confidence in using future technologies",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "This Generative AI Program for Kids & Teens is designed to introduce students to the world of AI through interactive lessons and real-world projects. The curriculum starts with the basics of AI and gradually moves towards advanced concepts like prompt engineering, chatbot creation, image generation, and no-code app development.Students will work on exciting projects, explore powerful AI tools, and finally build a complete AI solution as part of their capstone project. The program focuses on learning by doing, ensuring students not only understand concepts but also apply them creatively.",
      highlights: [
        { icon: "🎓", label: "20 Live Instructor-Led Lectures" },
        { icon: "📅", label: "3-Month Structured Learning Program" },
        { icon: "📦", label: "9 Modules Covering Gen AI" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Gen-AI Project Presentation" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Introduction to AI & GenAI",
          description:
            "Understand the basics of AI and Generative AI and explore how they are used in real life.",
          outcomes: [
            "Understand AI, ML, and Generative AI concepts",
            "Identify real-life AI applications in daily life",
          ],
          language: "AI Concepts",
          platform: "AI Tools",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m2",
          title: "Prompt Engineering",
          description:
            "Learn how to effectively communicate with AI using structured prompts.",
          outcomes: [
            "Understand prompts and their importance",
            "Differentiate between good and bad prompts",
            "Create structured and advanced prompts",
          ],
          language: "Prompt Design",
          platform: "AI Chat Tools",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m3",
          title: "AI Chatbots",
          description:
            "Build and customize chatbots with personality and contextual understanding.",
          outcomes: [
            "Understand chatbot fundamentals",
            "Build a functional chatbot",
            "Improve chatbot responses using context",
          ],
          language: "AI Tools",
          platform: "Chatbot Platforms",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m4",
          title: "AI Image Generation",
          description:
            "Create visual content using AI-powered image generation tools.",
          outcomes: [
            "Understand text-to-image generation",
            "Create creative visuals using prompts",
          ],
          language: "Image AI Tools",
          platform: "Image Generators",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m5",
          title: "AI Applications (No-Code)",
          description: "Build AI-powered applications using no-code tools.",
          outcomes: [
            "Understand AI app use cases",
            "Build AI-based applications",
            "Improve app outputs and performance",
          ],
          language: "No-Code Tools",
          platform: "AI App Builders",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m6",
          title: "Generative AI for Content",
          description:
            "Use AI tools to generate content like blogs, captions, and scripts.",
          outcomes: [
            "Create written content using AI",
            "Build a content portfolio",
          ],
          language: "AI Writing Tools",
          platform: "Content Tools",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m7",
          title: "Voice & Multimodal AI",
          description: "Explore voice-based AI and multimodal systems.",
          outcomes: [
            "Understand voice AI basics",
            "Build simple multimodal applications",
          ],
          language: "Voice AI",
          platform: "Multimodal Tools",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m8",
          title: "AI Ethics & Safety",
          description: "Learn responsible AI usage and ethical considerations.",
          outcomes: ["Understand AI risks, bias, and safety"],
          language: "AI Ethics",
          platform: "Discussion-Based",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m9",
          title: "Capstone AI Project",
          description:
            "Plan, build, and present a complete AI-powered project.",
          outcomes: [
            "Plan and design AI project",
            "Build and test solution",
            "Present final project",
          ],
          language: "AI Tools + GenAI",
          platform: "Mixed Tools",
          lessons: 2,
          activities: "10+",
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "The GenAI Explorer Program focuses on interactive, hands-on learning with real-world Generative AI tools and applications. Students will explore how to create content, build AI-powered solutions, and improve outputs using prompt engineering techniques. Through practical activities and mini projects, learners will develop creativity, problem-solving skills, and a strong foundation in modern AI technologies.",
      activities: [
        "Explore popular Generative AI tools like ChatGPT, DALL·E, and others",
        "Write creative prompts to generate text, images, and ideas",
        "Build your own AI chatbot with personality and context",
        "Generate stunning AI images using text-to-image tools",
        "Create blogs, captions, and stories using AI tools.",
        "Improve AI outputs by refining prompts (Prompt Engineering practice)",
        "Work on real-world mini projects using Generative AI.",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "AI Tools Research",
          desc: "Explore and present AI tools used in daily life.",
        },
        {
          num: 2,
          title: "Python Calculator",
          desc: "Build a simple calculator using Python.",
        },
        {
          num: 3,
          title: "Marks Analysis Tool",
          desc: "Analyze student marks dataset.",
        },
        {
          num: 4,
          title: "Dice Simulator",
          desc: "Create a probability simulation using Python.",
        },
        {
          num: 5,
          title: "Data Visualization Dashboard",
          desc: "Visualize datasets using Python charts.",
        },
        {
          num: 6,
          title: "Student Performance Predictor",
          desc: "Predict student scores using regression models.",
        },
        {
          num: 7,
          title: "Email Spam Classifier",
          desc: "Detect spam emails using Naive Bayes.",
        },
        {
          num: 8,
          title: "Customer Segmentation Model",
          desc: "Group customers using clustering.",
        },
        {
          num: 9,
          title: "Sentiment Analysis Tool",
          desc: "Analyze text sentiment as positive or negative.",
        },
        {
          num: 10,
          title: "AI Sentiment Dashboard",
          desc: "Build a final AI dashboard project.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Artificial Intelligence & Machine Learning Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final Gen AI project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final GenAI explorer project",
      ],
    },

    reviews: [
      {
        name: "Abhi Sharma",
        rating: 5,
        text: "The Generative AI course was super fun. I learned how to create chatbots and generate images using AI tools.",
        avatar: "AS",
      },
      {
        name: "Riya Gupta",
        rating: 5,
        text: "The instructors made AI very easy to understand. I loved creating stories, captions, and designs using AI.",
        avatar: "RG",
      },
      {
        name: "Kabir Verma",
        rating: 5,
        text: "Building my own AI chatbot was the best part. This course made Generative AI simple and exciting.",
        avatar: "KV",
      },
      {
        name: "Ananya Singh",
        rating: 5,
        text: "A perfect beginner course for kids to explore Generative AI, creativity, and real-world AI tools.",
        avatar: "AN",
      },
      {
        name: "Vihaan Mehta",
        rating: 5,
        text: "The projects were amazing. I created AI posters, comics, and even a small AI app. Learned a lot!",
        avatar: "VM",
      },
      {
        name: "Myra Kapoor",
        rating: 5,
        text: "The final AI project helped me build my own AI application. It was a very creative and fun experience.",
        avatar: "MK",
      },
    ],
    faqs: [
      {
        q: "What is this Generative AI course about?",
        a: "This course introduces kids to Artificial Intelligence and Generative AI in a fun and interactive way. Students will learn how to create chatbots, generate images, build AI apps, and develop creative content using modern AI tools.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for kids and teens aged 12–18 years. It is beginner-friendly and does not require any prior coding or technical knowledge.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No, not at all. This course is designed for beginners. Students will learn using no-code tools and simple concepts, making it easy to understand and apply.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to build AI chatbots, create AI-generated images and designs, develop simple AI-powered applications, generate blogs and scripts using AI, and complete a final capstone project.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "Unlike traditional coding classes, this program focuses on creativity and technology, real-world AI tools, hands-on projects instead of theory, and future-ready skills like prompt engineering and AI application building.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will kids work on?",
        a: "Students will work on fun and practical projects like AI chatbots with personality, AI-generated posters and comics, AI-based quiz or recommendation apps, voice assistant basics, and a final capstone AI project.",
      },
      {
        q: "Is this course safe for kids?",
        a: "Yes, completely. We include a dedicated module on AI Ethics and Safety, where students learn responsible AI usage, privacy, and avoiding misuse.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, an internet connection, and access to free AI tools provided during the course. No paid software is required.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive a Certificate of Completion after successfully finishing the course and submitting their final project.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build future-ready AI skills, improve creativity and logical thinking, gain confidence with technology, and prepare for careers in AI and innovation.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if my child misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],
    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-development-basics",
        icon: "",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "",
      },
    ],
  },
  {
    slug: "python-pros",
    title: "Python Pros",
    id: "prog",
    cat: "prog",
    type: "single",
    price: 25960,
    subtitle: "Code Like a Pro",
    description:
      "Students learn how to code using Python, build real-world programs, and develop strong problem-solving skills through hands-on practice.",
    lessons: 22,
    age: "12-18",
    grade: "8-12",
    durationMonths: "2 - 3",
    durationWeeks: "11",
    durationClasses: "45-60",
    activities: "50+",
    heroImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop&sat=-20&exp=-20",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Python Programming Journey",
      subtitle:
        "Learn one of the world’s most popular programming languages and build real-world applications, games, and projects while developing logical thinking.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of programming using Python",
            "Writing your first Python programs",
            "Variables, data types, and operators",
            "Conditional statements and decision making",
            "Loops and logic building",
            "Functions and reusable code",
            "Working with lists and strings",
            "Object-Oriented Programming (OOP) basics",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Strong problem-solving skills",
            "Logical thinking and coding mindset",
            "Writing clean and structured Python code",
            "Building mini projects and applications",
            "Understanding OOP concepts",
            "Debugging and fixing errors",
            "Working with real-world coding scenarios",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Python Programming Certificate",
            "Hands-on coding experience",
            "Mini projects & real-world applications",
            "Strong foundation for future tech careers",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Python Programming Foundations Program is designed to introduce students to coding in a fun and practical way. Students will learn how to write programs, solve problems, and build real-world applications using Python.The course is structured into multiple modules covering programming basics, logic building, object-oriented concepts, and project development. With hands-on practice and guided sessions, students will gain confidence in coding and develop skills required for future technologies like AI and Data Science.By the end of the program, students will build their own projects and present them as a showcase.",
      highlights: [
        { icon: "🎓", label: "22 Live Instructor-Led Lectures" },
        { icon: "📅", label: "3-Month Structured Learning Program" },
        { icon: "📦", label: "13 Modules Covering AI & Machine Learning" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Mini Projects + Final Projec" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Python Foundations",
          description:
            "Learn basics of programming and get started with Python.",
          outcomes: [
            "Understand programming concepts",
            "Setup Python and run first program",
            "Work with variables, data types, and input/output",
          ],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m2",
          title: "Operators & Conditions",
          description:
            "Apply logic using operators and decision-making statements.",
          outcomes: [
            "Use operators for calculations and comparisons",
            "Apply conditional logic using if-else",
          ],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m3",
          title: "Loops",
          description: "Automate repetitive tasks using loops.",
          outcomes: ["Use loops for iteration and problem solving"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m4",
          title: "Functions",
          description: "Write reusable code using functions.",
          outcomes: [
            "Create and use functions with parameters",
            "Build reusable programs",
          ],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m5",
          title: "Lists & Tuple",
          description: "Store and manipulate collections of data.",
          outcomes: ["Work with lists and tuples for data storage"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m6",
          title: "Dict & Set",
          description: "Manage structured and unique data collections.",
          outcomes: ["Use dictionaries and sets effectively"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m7",
          title: "Strings",
          description: "Manipulate and process text data.",
          outcomes: ["Apply string operations and methods"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m8",
          title: "OOP (Object-Oriented Programming)",
          description: "Understand object-oriented concepts in Python.",
          outcomes: [
            "Create classes and objects",
            "Use constructors and methods",
            "Apply encapsulation concepts",
          ],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 3,
          activities: "5+",
        },
        {
          id: "m9",
          title: "File Handling",
          description: "Work with files to store and manage data.",
          outcomes: ["Read and write files", "Build file-based programs"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m10",
          title: "Libraries & Projects",
          description: "Use Python libraries to build fun applications.",
          outcomes: ["Use built-in libraries for real-world programs"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m11",
          title: "Debugging",
          description: "Identify and fix errors in code.",
          outcomes: ["Debug common coding errors"],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 1,
          activities: "2+",
        },
        {
          id: "m12",
          title: "Exception Handling",
          description: "Handle errors gracefully in programs.",
          outcomes: [
            "Use try-except for error handling",
            "Implement finally and custom exceptions",
          ],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m13",
          title: "Capstone Project",
          description: "Build and present a complete Python project.",
          outcomes: [
            "Integrate concepts into final project",
            "Present working application",
          ],
          language: "Python",
          platform: "VS Code / Jupyter",
          lessons: 2,
          activities: "10+",
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will build multiple mini projects and real-world programs to strengthen their understanding.",
      activities: [
        "Writing First Python Program",
        "Logic Building Exercises",
        "Loop-Based Problem Solving",
        "Function-Based Programs",
        "String & List Manipulation",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Python Basics Practice",
          desc: "Write simple programs to understand syntax, input-output, and variables.",
        },
        {
          num: 2,
          title: "Calculator Program",
          desc: "Build a basic calculator using operators and conditional statements.",
        },
        {
          num: 3,
          title: "Number Guessing Game",
          desc: "Create an interactive game using loops and random library.",
        },
        {
          num: 4,
          title: "Multiplication Table Generator",
          desc: "Generate tables using loops and logic building.",
        },
        {
          num: 5,
          title: "Student Data Manager",
          desc: "Store and manage student details using lists and basic operations.",
        },
        {
          num: 6,
          title: "String Manipulation Tool",
          desc: "Perform operations like reverse, count, and formatting on strings.",
        },
        {
          num: 7,
          title: "Function-Based Programs",
          desc: "Build reusable programs using functions and parameters.",
        },
        {
          num: 8,
          title: "File Handling Project",
          desc: "Create programs to read, write, and store data in files.",
        },
        {
          num: 9,
          title: "Password Generator",
          desc: "Generate secure random passwords using Python libraries.",
        },
        {
          num: 10,
          title: "Quiz Game Application",
          desc: "Build a quiz game with score tracking using conditions and loops.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Python Programming Program will receive an official Certificate of Completion by SkillzRevo Academy Juinor. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final Python project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final Python programming project",
      ],
    },

    reviews: [
      {
        name: "Arnav Khanna",
        rating: 5,
        text: "Python course helped me understand coding from scratch.",
        avatar: "AK",
      },
      {
        name: "Tanya Mehra",
        rating: 5,
        text: "Making my first game in Python was amazing!",
        avatar: "TM",
      },
      {
        name: "Karan Shah",
        rating: 5,
        text: "Loops and logic building became very easy after this course.",
        avatar: "KS",
      },
      {
        name: "Ritika Malhotra",
        rating: 5,
        text: "The teaching style is simple and easy to understand.",
        avatar: "RM",
      },
      {
        name: "Aditya Jain",
        rating: 5,
        text: "The final project gave me real confidence in coding.",
        avatar: "AJ",
      },
      {
        name: "Meera Bansal",
        rating: 5,
        text: "I loved building mini programs and games.",
        avatar: "MB",
      },
    ],

    faqs: [
      {
        q: "Who is this course for?",
        a: "Students of Grade 8–12 who want to learn coding from scratch.",
      },
      {
        q: "Do I need prior coding knowledge?",
        a: "No, this course starts from basics.",
      },
      {
        q: "What will I learn?",
        a: "Python programming, logic building, OOP, and project development.",
      },
      {
        q: "Course duration?",
        a: "2–3 months with structured sessions.",
      },
      {
        q: "Live or recorded classes?",
        a: "Live classes + recorded access.",
      },
      {
        q: "Will there be projects?",
        a: "Yes, multiple mini projects + final project.",
      },
      {
        q: "Will I get a certificate?",
        a: "Yes, after completion.",
      },
      {
        q: "Is Python useful for future?",
        a: "Yes, Python is widely used in AI, Data Science, and Web Development.",
      },
    ],

    recommendedCourses: [
      {
        title: "Data detectives",
        desc: "Learn Data Analytics the Fun Way",
        grade: "8-12",
        slug: "data -detectives",
        icon: "*",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-development-basics",
        icon: "*",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "*",
      },
    ],
  },
  {
    slug: "ui-creators",
    title: "UI Creators",
    id: "web",
    cat: "web",
    price: 41300,
    type: "single",
    subtitle: "Design Websites the Fun Way",
    description:
      " A complete hands-on program where students learn how to design, develop, and deploy modern websites and applications using HTML, CSS, JavaScript, and Angular.",
    lessons: 35,
    age: "12-18",
    grade: "8-12",
    durationMonths: "4 - 5",
    durationWeeks: "18",
    durationClasses: "45-60",
    activities: "70+",
    heroImage:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Web Development Journey",
      subtitle:
        "Step into the world of web development and learn how websites and applications are built from scratch. This program focuses on practical learning, helping students build strong foundations in frontend development, logic building, and real-world application development.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of Internet, Websites & How Web Works",
            "Building structured web pages using HTML",
            "Designing modern UI using CSS & responsive layouts:",
            "Programming basics using JavaScript",
            "Creating interactive features using DOM manipulation",
            "Building real-world projects like forms, to-do apps & quiz apps",
            "Understanding frontend frameworks like Angular",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Website Design & Development Skills",
            "Problem Solving & Logical Thinking",
            "Frontend Development (HTML, CSS, JavaScript)",
            "UI/UX Design Basics",
            "Responsive Web Design",
            "JavaScript Programming & DOM Handling",
            "Framework Skills (Angular Basics)",
            "Project Building & Presentation Skills",
            " Debugging & Optimization",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Build fully functional websites from scratch",
            "Create responsive and interactive web pages",
            "Develop real-world projects like portfolio, to-do app & quiz app",
            "Understand how modern web applications work",
            "Build and deploy an Angular-based application",
            "Create a complete end-to-end project",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "This Web Development Program is designed to help students learn how to build websites and web applications step by step. Starting from basic internet concepts, students gradually move towards advanced topics like JavaScript programming, DOM manipulation, and Angular framework.The program focuses on hands-on learning, where students work on multiple projects in each module. By the end of the program, students will build a complete web application as their final capstone project, gaining practical exposure to real-world development.",
      highlights: [
        { icon: "🎓", label: "35 Live Instructor-Led Lectures" },
        { icon: "📅", label: "5-Month Structured Learning Program" },
        { icon: "📦", label: "8 Modules Covering Under UI Creators" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Front-End Project Presentation" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Internet & Web Fundamentals",
          description:
            "Understand internet basics, how websites work, and plan your own website using real-world concepts.",
          outcomes: [
            "Understand internet, websites & types",
            "Learn how web works (domain, hosting, HTTP)",
            "Plan website structure & layout",
          ],
          language: "Basic Web Concepts",
          platform: "Browser + VS Code",
          lessons: 3,
          activities: "8+",
        },
        {
          id: "m2",
          title: "HTML (Website Structure)",
          description:
            "Learn to build structured web pages using HTML elements and create multiple practical pages.",
          outcomes: [
            "Understand HTML structure & tags",
            "Create pages with text & media",
            "Build lists & tables",
            "Create forms for user input",
            "Use semantic HTML layout",
          ],
          language: "HTML",
          platform: "VS Code",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m3",
          title: "CSS (Design & Layout)",
          description:
            "Design visually appealing and responsive websites using CSS styling and layout techniques.",
          outcomes: [
            "Apply styling using colors & fonts",
            "Understand spacing using box model",
            "Create layouts using Flexbox",
            "Build responsive designs",
            "Add animations & effects",
          ],
          language: "CSS",
          platform: "VS Code",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m4",
          title: "JavaScript Fundamentals",
          description:
            "Learn programming basics and add interactivity to web pages using JavaScript.",
          outcomes: [
            "Understand variables & basic JavaScript",
            "Apply conditions & functions",
            "Work with events & loops",
            "Build interactive logic-based features",
          ],
          language: "JavaScript",
          platform: "Browser + VS Code",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m5",
          title: "DOM & Interactive Projects",
          description:
            "Control and update web pages dynamically using DOM and build real-world applications.",
          outcomes: [
            "Manipulate webpage elements using DOM",
            "Implement form validation",
            "Create dynamic styling & UI features",
            "Build To-Do and interactive apps",
            "Develop quiz-based applications",
          ],
          language: "JavaScript (DOM)",
          platform: "Browser + VS Code",
          lessons: 5,
          activities: "10+",
        },
        {
          id: "m6",
          title: "Final Website Project",
          description:
            "Apply all your learning to design, build, and present a complete interactive website project from scratch.",
          outcomes: [
            "Plan and design a complete website (idea, layout, wireframe)",
            "Build a fully functional website using HTML, CSS & JavaScript",
            "Present your project with proper explanation and real-world use",
          ],
          language: "HTML + CSS + JavaScript",
          platform: "VS Code + Browser",
          lessons: 3,
          activities: "10+",
        },
        {
          id: "m7",
          title: "Angular Framework Basics",
          description:
            "Learn modern frontend development using Angular and build dynamic web applications.",
          outcomes: [
            "Understand Angular structure & components",
            "Work with data binding and directives",
            "Implement routing and services",
            "Handle forms and API integration",
          ],
          language: "Angular (TypeScript)",
          platform: "VS Code + Browser",
          lessons: 7,
          activities: "15+",
        },
        {
          id: "m8",
          title: "Final Project & Application Development",
          description:
            "Apply all concepts to build and present a complete real-world web application.",
          outcomes: [
            "Plan and design full application architecture",
            "Build a complete project using HTML, CSS, JS & Angular",
            "Present project with proper explanation and demo",
          ],
          language: "Angular (TypeScript)",
          platform: "VS Code + Browser",
          lessons: 3,
          activities: "10+",
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students who successfully complete the UI Creator Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate validates their practical skills in designing and developing modern websites. Throughout the program, students actively participate in hands-on activities, assignments, and real-world projects, culminating in a final web application project built using HTML, CSS, JavaScript, and Angular.",
      activities: [
        "Understand how websites work and explore real-world website structures",
        "Build structured web pages using HTML elements",
        "Design modern and responsive layouts using CSS",
        "Create interactive features using JavaScript (events, functions, DOM)",
        "Develop real-world mini projects like forms, to-do apps, and quiz apps",
        "Practice debugging and improving website performance",
        "Work on complete website projects from design to development",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Basic Web Page",
          desc: "Create a simple web page using HTML with text and images.",
        },
        {
          num: 2,
          title: "Personal Portfolio Website",
          desc: "Design a personal portfolio to showcase profile and skills.",
        },
        {
          num: 3,
          title: "Blog Page Layout",
          desc: "Build a structured blog page using HTML and CSS.",
        },
        {
          num: 4,
          title: "Responsive Navigation Bar",
          desc: "Create a responsive navbar using CSS Flexbox.",
        },
        {
          num: 5,
          title: "Styled Form with Validation",
          desc: "Design and validate a user input form using JavaScript.",
        },
        {
          num: 6,
          title: "To-Do List Application",
          desc: "Develop a dynamic to-do app using JavaScript and DOM.",
        },
        {
          num: 7,
          title: "Quiz Application",
          desc: "Build an interactive quiz app with scoring system.",
        },
        {
          num: 8,
          title: "Image Slider Project",
          desc: "Create an image slider with next/previous controls.",
        },
        {
          num: 9,
          title: "Angular Mini Application",
          desc: "Develop a basic Angular app with components and routing.",
        },
        {
          num: 10,
          title: "Final Web Application Project",
          desc: "Design and build a complete web application from scratch.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the UI Creators Program will receive an official Certificate of Completion. This certificate validates their skills in UI Creators, project building, and practical implementation. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final UI Creators project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final UI Creators project",
      ],
    },

    reviews: [
      {
        name: "Abhi Sharma",
        rating: 5,
        text: "The UI Creator course was really fun. I learned how to build my own website using HTML, CSS, and JavaScript.",
        avatar: "AS",
      },
      {
        name: "Riya Gupta",
        rating: 5,
        text: "The instructors made web development very easy to understand. I loved designing web pages and adding styles.",
        avatar: "RG",
      },
      {
        name: "Kabir Verma",
        rating: 5,
        text: "Building my own portfolio website was the best part. This course made coding simple and exciting.",
        avatar: "KV",
      },
      {
        name: "Ananya Singh",
        rating: 5,
        text: "A perfect beginner course for kids to learn website design and development in a practical way.",
        avatar: "AN",
      },
      {
        name: "Vihaan Mehta",
        rating: 5,
        text: "The projects were amazing. I built a to-do app, quiz app, and a responsive website. Learned a lot!",
        avatar: "VM",
      },
      {
        name: "Myra Kapoor",
        rating: 5,
        text: "The final project helped me create a complete website from scratch. It was a great learning experience.",
        avatar: "MK",
      },
    ],

    faqs: [
      {
        q: "What is this UI Creator course about?",
        a: "This course teaches kids how to design and develop websites and web applications in a fun and interactive way. Students learn HTML, CSS, JavaScript, and Angular while building real-world projects.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students aged 12–18 years. It is beginner-friendly and suitable for both beginners and those with basic knowledge.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No, prior coding experience is not required. The course starts from the basics and gradually moves to advanced concepts.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to build responsive websites, portfolio sites, to-do apps, quiz applications, and a complete web application as their final project.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This program focuses on practical learning, real-world projects, modern tools, and step-by-step development, helping students build actual websites instead of just learning theory.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will kids work on?",
        a: "Students will work on projects like personal portfolio websites, blog pages, responsive layouts, to-do apps, quiz apps, and a final capstone web application.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed for beginners and gradually builds up to advanced concepts in web development.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, a browser, and free tools like VS Code. No paid software is required.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive a Certificate of Completion after successfully finishing the course and submitting their final project.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build strong problem-solving skills, creativity, and a solid foundation in web development, preparing them for future tech careers.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if my child misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],

    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "",
      },
    ],
  },
  {
    slug: "java-juniors",
    title: "Java Juniors",
    id: "prog",
    cat: "prog",
    type: "single",
    price: 28320,
    subtitle: "Start Your Coding Journey",
    description:
      "Students learn how to code using Java, build logical thinking, and create real-world applications through structured learning and hands-on practice.",
    lessons: 24,
    age: "12-18",
    grade: "8-12",
    durationMonths: "2 - 3",
    durationWeeks: "12",
    durationClasses: "45-60",
    activities: "60+",
    heroImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Java Programming Journey",
      subtitle:
        " Learn one of the most powerful and widely used programming languages used in apps, software, and enterprise systems while building strong problem-solving skills.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of programming using Java",
            "Java syntax and program structure",
            "Variables, data types, and operators",
            "Conditional statements and logic building",
            "Loops and problem-solving techniques",
            "Functions (methods) and reusable code",
            "Arrays and string handling",
            "Object-Oriented Programming (OOP) concepts",
            "Debugging and error handling",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Strong logical thinking and problem-solving",
            "Writing structured and efficient Java code",
            "Understanding object-oriented programming",
            "Building real-world programs and applications",
            "Debugging and fixing errors",
            "Preparing foundation for advanced technologies",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Java Programming Certificate",
            "Hands-on coding experience",
            "Mini projects & real-world applications",
            "Strong foundation for software development",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Java Programming Foundations Program is designed to help students learn coding from scratch using Java. It focuses on building strong programming fundamentals, logic, and problem-solving skills. Students will learn how to write structured programs, understand object-oriented programming, and build real-world applications. The course includes hands-on practice, coding exercises, and projects. By the end of the program, students will be able to build complete Java applications and present their final projects.",
      highlights: [
        { icon: "🎓", label: "24 Live Instructor-Led Lectures" },
        { icon: "📅", label: "4-Month Structured Learning Program" },
        { icon: "📦", label: "10 Modules Covering Java programming Concepts" },
        { icon: "🛠️", label: "Beginner to Intermediate Level" },
        { icon: "🖥️", label: "Final Java programming Capstone Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "m1",
          title: "Java Foundations",
          description:
            "Learn programming basics and get started with Java development.",
          outcomes: [
            "Understand programming concepts",
            "Setup Java environment and run first program",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m2",
          title: "Variables & Operators",
          description: "Work with data types and perform operations in Java.",
          outcomes: [
            "Use variables and data types",
            "Apply operators in programs",
            "Perform type casting and input/output",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 3,
          activities: "6+",
        },
        {
          id: "m3",
          title: "Decision Making",
          description: "Implement logic using conditional statements.",
          outcomes: [
            "Apply if-else and switch statements",
            "Solve problems using nested conditions",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m4",
          title: "Loops",
          description: "Automate repetitive tasks using loops.",
          outcomes: [
            "Use for loop for iteration",
            "Apply while loop logic",
            "Compare loops using do-while",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 3,
          activities: "6+",
        },
        {
          id: "m5",
          title: "Arrays & Strings",
          description: "Work with collections and text data in Java.",
          outcomes: [
            "Use arrays for data storage",
            "Work with 2D arrays",
            "Apply string operations",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m6",
          title: "OOP Core",
          description: "Learn object-oriented programming concepts in Java.",
          outcomes: [
            "Create classes and objects",
            "Apply encapsulation",
            "Use inheritance",
            "Understand polymorphism and abstraction",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 4,
          activities: "10+",
        },
        {
          id: "m7",
          title: "Collections",
          description: "Manage dynamic data using Java collections framework.",
          outcomes: [
            "Use ArrayList for dynamic data",
            "Understand collections framework (List, Set, Map)",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m8",
          title: "Exception Handling",
          description: "Handle runtime errors effectively.",
          outcomes: [
            "Handle exceptions using try-catch",
            "Implement multiple and custom exceptions",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m9",
          title: "File Handling",
          description: "Store and manage data using files in Java.",
          outcomes: ["Read and write files", "Build file-based applications"],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "5+",
        },
        {
          id: "m10",
          title: "Capstone Project",
          description: "Build and present a complete Java application.",
          outcomes: [
            "Integrate concepts into a real-world project",
            "Build and test application",
            "Present final project",
          ],
          language: "Java",
          platform: "VS Code / IntelliJ IDEA",
          lessons: 2,
          activities: "10+",
        },
      ],
    },
    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will build multiple programs and applications to strengthen their understanding of Java.",
      activities: [
        "Writing First Java Program",
        "Logic Building Exercises",
        "Loop-Based Problem Solving",
        "Function-Based Programs",
        "String & List Manipulation",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Java Basics Practice",
          desc: "Write simple programs to understand syntax, input-output, and variables.",
        },
        {
          num: 2,
          title: "Calculator Application",
          desc: "Build a calculator using operators and conditional logic.",
        },
        {
          num: 3,
          title: "Number Guessing Game",
          desc: "Create an interactive game using loops and logic.",
        },
        {
          num: 4,
          title: "Student Management System",
          desc: "Store and manage student data using arrays and basic operations.",
        },
        {
          num: 5,
          title: "Pattern Generator Program",
          desc: "Generate different patterns using loops to improve logic.",
        },
        {
          num: 6,
          title: "Matrix Operations Program",
          desc: "Perform operations on 2D arrays like addition and multiplication.",
        },
        {
          num: 7,
          title: "String Utility Tool",
          desc: "Perform operations like reverse, palindrome check, and formatting.",
        },
        {
          num: 8,
          title: "File Handling Project",
          desc: "Read and write data using files in Java.",
        },
        {
          num: 9,
          title: "Simple Login System",
          desc: "Create a basic login system using conditions and validation.",
        },
        {
          num: 10,
          title: "Quiz Game Application",
          desc: "Build a quiz game with score tracking and user interaction.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Java Programming Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final Java Programming project.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Complete the final Java programming project",
      ],
    },

    reviews: [
      {
        name: "Arnav Khanna",
        rating: 5,
        text: "Java course helped me understand programming basics clearly.",
        avatar: "AK",
      },
      {
        name: "Tanya Mehra",
        rating: 5,
        text: "Building my first Java application was exciting!",
        avatar: "TM",
      },
      {
        name: "Karan Shah",
        rating: 5,
        text: "OOP concepts became very easy to understand.",
        avatar: "KS",
      },
      {
        name: "Ritika Malhotra",
        rating: 5,
        text: "Teaching style is very simple and practical.",
        avatar: "RM",
      },
      {
        name: "Aditya Jain",
        rating: 5,
        text: "The final project helped me gain real confidence.",
        avatar: "AJ",
      },
      {
        name: "Meera Bansal",
        rating: 5,
        text: "I enjoyed building projects and learning Java.",
        avatar: "MB",
      },
    ],

    faqs: [
      {
        q: "Who is this course for?",
        a: "Students of Grade 8–12 interested in learning programming.",
      },
      {
        q: "Do I need prior coding knowledge?",
        a: "No, this course starts from the basics.",
      },
      {
        q: "What will I learn?",
        a: "Java programming, OOP, logic building, and project development.",
      },
      {
        q: "Course duration?",
        a: "2–3 months structured program.",
      },
      {
        q: "Live or recorded classes?",
        a: "Live + recorded sessions.",
      },
      {
        q: "Are there projects?",
        a: "Yes, multiple mini + final project.",
      },
      {
        q: "Will I get a certificate?",
        a: "Yes.",
      },
      {
        q: "Is Java useful?",
        a: "Yes, widely used in app development and enterprise systems.",
      },
    ],

    recommendedCourses: [
      {
        title: "Python Pros",
        desc: "Learn programming fundamentals with Python through fun projects.",
        grade: "8-12",
        slug: "python-pros",
        icon: "🐍",
      },
      {
        title: "Web Wizards",
        desc: "Explore the world of  and build smart apps.",
        grade: "8-12",
        slug: "web-wizards",
        icon: "*",
      },
      {
        title: "Cloud Champions",
        desc: "Design and build your own Cloud Application",
        grade: "8-12",
        slug: "cloud-champions",
        icon: "*",
      },
    ],
  },

  // bundle course
  {
    slug: "full-stack-cloud-creators",
    title: "Full Stack Cloud Creators",
    type: "bundle",
    subtitle: "Build, Deploy & Scale Applications",
    description:
      "Students learn how to design websites, build backend systems, and deploy applications on the cloud using modern technologies.",
    lessons: 84,
    age: "12-18",
    grade: "8-12",
    durationMonths: "11 - 12",
    durationWeeks: "43",
    durationClasses: "45-60",
    activities: "150+",
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Full Stack Development Journey",
      subtitle:
        "Students learn frontend, backend, and cloud computing in one complete program. Build real-world applications from scratch and deploy them using modern tools and technologies.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of Internet & Web Development",
            "Frontend Development using HTML, CSS, JavaScript & Angular",
            "Backend Development using Node.js & Express",
            "API Development & Database Integration (MongoDB)",
            "Authentication & Security (JWT)",
            "Cloud Computing & Deployment (AWS Basics)",
            "DevOps & CI/CD Fundamentals",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Full Stack Development Skills",
            "Frontend UI/UX Development",
            "Backend API Development",
            "Database Management",
            "Cloud Deployment & Hosting",
            "Problem Solving & Logical Thinking",
            "Debugging & Optimization",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Web Development Certificate",
            "Backend Development Certificate",
            "Cloud Computing Certificate",
            "15+ Real-world Projects",
            "Complete Full Stack Application",
            "Industry-ready Skills",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Full Stack Cloud Creators Program is designed to provide students with a complete learning path in frontend development, backend development, and cloud computing. Throughout the program, students learn how to build modern websites, develop scalable backend systems, and deploy applications on the cloud using industry-relevant tools and technologies. The course follows a structured, project-based approach, enabling students to gain practical experience through real-world applications. By the end of the program, students will be able to develop full stack applications, integrate APIs and databases, deploy projects on cloud platforms, and present a complete end-to-end capstone project with confidence.",
      highlights: [
        { icon: "🎓", label: "84 Live Instructor-Led Sessions" },
        { icon: "📅", label: "11–12 Month Structured Learning Program" },
        { icon: "📚", label: "Comprehensive Curriculum Across 23 Modules" },
        {
          icon: "💻",
          label:
            "3-in-1 Learning (UI Creators + Code Builders + Cloud Champions)",
        },
        { icon: "🛠️", label: "Hands-on Projects & Real-World Applications" },
        { icon: "🚀", label: "Final Capstone Project" },
        { icon: "🕐", label: "Flexible Weekend & Weekday Batches" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "01",
          title: "AI Around Us",
          lectures: [
            {
              num: 1,
              title: "What is AI?",
              desc: "Understand what Artificial Intelligence is, how AI differs from human intelligence, and explore AI applications used in daily life.",
            },
            {
              num: 2,
              title: "How AI Learns",
              desc: "Learn how machines learn from data using machine learning concepts, recommendation systems, and bias in AI.",
            },
          ],
        },
        {
          id: "02",
          title: "Python for AI",
          lectures: [
            {
              num: 3,
              title: "Python Introduction",
              desc: "Understand why Python is used in AI and set up the development environment.",
            },
            {
              num: 4,
              title: "Variables and Operators",
              desc: "Learn Python variables, user input, and basic operators through coding exercises.",
            },
            {
              num: 5,
              title: "Conditions",
              desc: "Understand if-else logic and build small decision-based programs.",
            },
            {
              num: 6,
              title: "Loops",
              desc: "Use loops to automate repetitive tasks and build simple programs.",
            },
            {
              num: 7,
              title: "Data Structures",
              desc: "Work with lists, dictionaries, tuples, and sets.",
            },
            {
              num: 8,
              title: "NumPy Fundamentals",
              desc: "Understand arrays and numerical computing using NumPy.",
            },
            {
              num: 9,
              title: "Pandas Introduction",
              desc: "Load datasets and explore tabular data using Pandas.",
            },
            {
              num: 10,
              title: "Data Analysis Basics",
              desc: "Analyze datasets and extract insights.",
            },
            {
              num: 11,
              title: "Data Visualization",
              desc: "Create simple charts and graphs using Python.",
            },
            {
              num: 12,
              title: "Python Mini Project",
              desc: "Analyze a dataset and present insights.",
            },
          ],
        },
        {
          id: "03",
          title: "Statistics for AI",
          lectures: [
            {
              num: 13,
              title: "Introduction to Statistics",
              desc: "Understand descriptive and inferential statistics.[-",
            },
            {
              num: 14,
              title: "Mean, Median, Mode",
              desc: "Analyze datasets using measures of central tendency.",
            },
            {
              num: 15,
              title: "Probability Basics",
              desc: "Understand probability through real-world examples.",
            },
            {
              num: 16,
              title: "Correlation",
              desc: "Learn how relationships between variables work.",
            },
            {
              num: 17,
              title: "Data Cleaning & EDA",
              desc: "Perform data type corrections and data exploration.",
            },
            {
              num: 18,
              title: "Visualization for Analysis",
              desc: "Visualize data patterns and trends.",
            },
            {
              num: 19,
              title: "Hypothesis Testing",
              desc: "Understand the basics of hypothesis testing.",
            },
          ],
        },
        {
          id: "04",
          title: "Machine Learning",
          lectures: [
            {
              num: 20,
              title: "Introduction to Machine Learning",
              desc: "Understand how machine learning models work.",
            },
            {
              num: 21,
              title: "Types of Machine Learning",
              desc: "Learn supervised and unsupervised learning.",
            },
            {
              num: 22,
              title: "Linear Regression",
              desc: "Build models to predict numerical values.",
            },
            {
              num: 23,
              title: "Logistic Regression",
              desc: "Understand classification problems.",
            },
            {
              num: 24,
              title: "Decision Trees",
              desc: "Learn tree-based models for prediction.",
            },
            {
              num: 25,
              title: "Model Validation",
              desc: "Understand train-test split and evaluation.",
            },
            {
              num: 26,
              title: "Clustering",
              desc: "Group data using clustering algorithms.",
            },
            {
              num: 27,
              title: "Elbow Method",
              desc: "Visualize clusters and determine optimal groups.",
            },
            {
              num: 28,
              title: "Market Basket Analysis",
              desc: "Discover relationships between products.",
            },
            {
              num: 29,
              title: "Association Rules",
              desc: "Generate frequent itemsets and rules.",
            },
            {
              num: 30,
              title: "Naive Bayes Classifier",
              desc: "Build a simple email spam classifier.",
            },
            {
              num: 31,
              title: "Mini ML Project",
              desc: "Develop a student performance prediction model.",
            },
          ],
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will work on real-world projects covering frontend, backend, and cloud technologies, gaining practical experience in building and deploying modern applications. Upon successful completion of the Full Stack Cloud Creators Program, students will receive an official Certificate of Completion by SkillzRevo Academy Junior, validating their expertise in full stack development and cloud computing. Throughout the program, students actively participate in hands-on activities, assignments, and real-world projects, culminating in a final capstone project where they design, develop, and deploy a complete full stack application using industry-relevant tools and technologies.",
      activities: [
        "Understand how websites and web applications work in real-world environments",
        "Build and design responsive user interfaces using HTML, CSS, and JavaScript",
        "Develop interactive features using JavaScript and modern frontend frameworks",
        "Create backend servers and APIs using Node.js and Express",
        "Work with databases and perform CRUD operations using MongoDB",
        "Implement authentication and secure applications using JWT",
        "Integrate frontend and backend to build complete full stack applications",
        "Deploy and manage applications on cloud platforms using modern tools",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Basic Website",
          desc: "Create a simple website using HTML, CSS, and basic layout design.",
        },
        {
          num: 2,
          title: "Responsive Portfolio Website",
          desc: "Design a personal portfolio website with responsive layout.",
        },
        {
          num: 3,
          title: "JavaScript To-Do App",
          desc: "Build an interactive to-do list application using JavaScript and DOM.",
        },
        {
          num: 4,
          title: "Quiz Web Application",
          desc: "Create a quiz app with scoring and dynamic features.",
        },
        {
          num: 5,
          title: "Backend API Project",
          desc: "Develop REST APIs using Node.js and Express.",
        },
        {
          num: 6,
          title: "Database CRUD Application",
          desc: "Build an application with MongoDB to perform CRUD operations.",
        },
        {
          num: 7,
          title: "Authentication System",
          desc: "Implement login and registration with JWT-based authentication.",
        },
        {
          num: 8,
          title: "File Upload System",
          desc: "Create backend functionality for file uploads and management.",
        },
        {
          num: 9,
          title: "Cloud Deployment Project",
          desc: "Deploy a web application on cloud platforms using modern tools.",
        },
        {
          num: 10,
          title: "Final Full Stack Application",
          desc: "Design, build, and deploy a complete full stack application integrating frontend, backend, database, and cloud.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Full Stack Cloud Creators Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate showcases their expertise in frontend development, backend development, and cloud computing. It reflects their hands-on learning journey through real-world projects, API development, database integration, and the successful creation and deployment of complete full stack applications as part of the final capstone project.",
      requirements: [
        "Attend the required live sessions",
        "Complete coding assignments and practice exercises in frontend, backend, and cloud concepts",
        "Actively participate in hands-on activities and full stack projects",
        "Successfully build and present the final full stack cloud capstone project",
      ],
    },

    reviews: [
      {
        name: "Arjun Mehta",
        rating: 5,
        text: "The Full Stack Cloud Creators course was amazing. I learned how to build complete websites and deploy them on the cloud.",
        avatar: "AM",
      },
      {
        name: "Sneha Kapoor",
        rating: 5,
        text: "The instructors made frontend, backend, and cloud concepts very easy to understand. I really enjoyed building real-world applications.",
        avatar: "SK",
      },
      {
        name: "Rohit Sharma",
        rating: 5,
        text: "Building APIs and connecting them with the frontend was the best part. This course made full stack development simple and practical.",
        avatar: "RS",
      },
      {
        name: "Kavya Verma",
        rating: 5,
        text: "A perfect course for students who want to learn complete web development from basics to advanced with real projects.",
        avatar: "KV",
      },
      {
        name: "Aditya Jain",
        rating: 5,
        text: "The projects were very engaging. I built full stack apps, worked with databases, and learned cloud deployment.",
        avatar: "AJ",
      },
      {
        name: "Neha Singh",
        rating: 5,
        text: "The final project helped me build and deploy a complete application. It gave me real confidence in full stack development.",
        avatar: "NS",
      },
    ],
    faqs: [
      {
        q: "What is this Full Stack Cloud Creators course about?",
        a: "This course teaches students how to design, build, and deploy complete web applications using frontend, backend, and cloud technologies. Students learn full stack development through real-world projects.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students from Grade 8–12. It is beginner-friendly and suitable for anyone who wants to learn web development from scratch.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No prior coding experience is required. The course starts from basics like HTML, CSS, and JavaScript and gradually moves to backend and cloud concepts.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to build complete web applications, develop APIs, work with databases, and deploy applications on cloud platforms.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This program provides end-to-end learning including frontend, backend, and cloud deployment, focusing on real-world applications instead of just theoretical coding.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will students work on?",
        a: "Students will work on projects like portfolio websites, web apps, APIs, authentication systems, database applications, and cloud deployment projects, along with a final capstone project.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed for beginners and gradually builds up to advanced full stack and cloud development skills.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, a browser, VS Code, Node.js, and MongoDB. All tools used are free.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive a Certificate of Completion after successfully finishing the course and submitting their final project.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build strong development skills, understand real-world applications, and prepare for careers in full stack development and software engineering.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if a student misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],
    recommendedCourses: [
      {
        title: "Programming Masters",
        desc: "Learn programming fundamentals with Python, Java and C++ through fun projects.",
        grade: "8-12",
        slug: "programming-masters",
        icon: "",
      },
      {
        title: "AI Innovators",
        desc: "Discover the power of Artificial Intelligence and build smart applications that solve real-world problems.",
        grade: "8-12",
        slug: "ai-innovators",
        icon: "",
      },
      {
        title: "Tech Titans",
        desc: "Learn coding, build websites, and explore cyber security in a fun and practical way.",
        grade: "8-12",
        slug: "tech-titans",
        icon: "",
      },
    ],
  },
  {
    slug: "data-ai-innovators",
    title: "Data & AI Innovators",
    type: "bundle",
    subtitle: "Become a Future Tech Pro",
    description:
      "Students learn how to code, analyze data, and build AI-powered applications using Python, Machine Learning, SQL, Excel, and Power BI.",
    lessons: 79,
    age: "12-18",
    grade: "8-12",
    durationMonths: "9 - 11",
    durationWeeks: "40",
    durationClasses: "45-60",
    activities: "160+",
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Complete Tech Journey",
      subtitle:
        " Learn Python programming, Data Analytics, and Artificial Intelligence in one structured program. Build real-world projects, dashboards, and AI models while developing strong problem-solving and analytical skills.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Fundamentals of Programming using Python",
            "Data Analysis using Excel, SQL & Python",
            "Data Visualization & Dashboard Creation (Power BI)",
            "Machine Learning & AI Concepts",
            "Working with datasets using Pandas & NumPy",
            "Statistics & Data Interpretation",
            "Building AI models (Regression, Classification, Clustering)",
            "Deep Learning & NLP Basics",
            "Real-world Projects across Python, Data & AI",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Strong coding & programming skills",
            "Data analysis and interpretation",
            "Dashboard creation & data visualization",
            "Machine Learning fundamentals",
            "Logical thinking & problem solving",
            "Database querying using SQL",
            "AI model understanding",
            "Real-world project development",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Python Programming Certificate",
            "Data Analytics Certificate",
            "AI & Machine Learning Certificate",
            "10+ Real-world Projects Portfolio",
            "Industry-level tool experience",
            "Access to coding & learning community",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Data & AI Innovators Program is designed to provide students with a complete learning path in Python programming, Data Analytics, and Artificial Intelligence. Throughout the program, students learn how to work with real-world data, create powerful dashboards, and build intelligent AI models using tools like Python, Excel, SQL, and Power BI. The course follows a structured, hands-on approach focused on real-world applications. By the end of the program, students will be able to analyze complex datasets, develop data-driven insights, build machine learning models, and present a comprehensive capstone project that showcases their skills in both data analytics and AI.",
      highlights: [
        { icon: "🎓", label: "79 Live Instructor-Led Sessions" },
        { icon: "📅", label: "9–11 Month Structured Learning Program" },
        { icon: "📚", label: "Comprehensive Curriculum Across 25+ Modules" },
        { icon: "💻", label: "3-in-1 Learning (Python + Data Analytics + AI)" },
        { icon: "🛠️", label: "Hands-on Projects & Real-World Applications" },
        { icon: "🚀", label: "Final Capstone Project" },
        { icon: "🕐", label: "Flexible Weekend & Weekday Batches" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "01",
          title: "AI Around Us",
          lectures: [
            {
              num: 1,
              title: "What is AI?",
              desc: "Understand what Artificial Intelligence is, how AI differs from human intelligence, and explore AI applications used in daily life.",
            },
            {
              num: 2,
              title: "How AI Learns",
              desc: "Learn how machines learn from data using machine learning concepts, recommendation systems, and bias in AI.",
            },
          ],
        },
        {
          id: "02",
          title: "Python for AI",
          lectures: [
            {
              num: 3,
              title: "Python Introduction",
              desc: "Understand why Python is used in AI and set up the development environment.",
            },
            {
              num: 4,
              title: "Variables and Operators",
              desc: "Learn Python variables, user input, and basic operators through coding exercises.",
            },
            {
              num: 5,
              title: "Conditions",
              desc: "Understand if-else logic and build small decision-based programs.",
            },
            {
              num: 6,
              title: "Loops",
              desc: "Use loops to automate repetitive tasks and build simple programs.",
            },
            {
              num: 7,
              title: "Data Structures",
              desc: "Work with lists, dictionaries, tuples, and sets.",
            },
            {
              num: 8,
              title: "NumPy Fundamentals",
              desc: "Understand arrays and numerical computing using NumPy.",
            },
            {
              num: 9,
              title: "Pandas Introduction",
              desc: "Load datasets and explore tabular data using Pandas.",
            },
            {
              num: 10,
              title: "Data Analysis Basics",
              desc: "Analyze datasets and extract insights.",
            },
            {
              num: 11,
              title: "Data Visualization",
              desc: "Create simple charts and graphs using Python.",
            },
            {
              num: 12,
              title: "Python Mini Project",
              desc: "Analyze a dataset and present insights.",
            },
          ],
        },
        {
          id: "03",
          title: "Statistics for AI",
          lectures: [
            {
              num: 13,
              title: "Introduction to Statistics",
              desc: "Understand descriptive and inferential statistics.[-",
            },
            {
              num: 14,
              title: "Mean, Median, Mode",
              desc: "Analyze datasets using measures of central tendency.",
            },
            {
              num: 15,
              title: "Probability Basics",
              desc: "Understand probability through real-world examples.",
            },
            {
              num: 16,
              title: "Correlation",
              desc: "Learn how relationships between variables work.",
            },
            {
              num: 17,
              title: "Data Cleaning & EDA",
              desc: "Perform data type corrections and data exploration.",
            },
            {
              num: 18,
              title: "Visualization for Analysis",
              desc: "Visualize data patterns and trends.",
            },
            {
              num: 19,
              title: "Hypothesis Testing",
              desc: "Understand the basics of hypothesis testing.",
            },
          ],
        },
        {
          id: "04",
          title: "Machine Learning",
          lectures: [
            {
              num: 20,
              title: "Introduction to Machine Learning",
              desc: "Understand how machine learning models work.",
            },
            {
              num: 21,
              title: "Types of Machine Learning",
              desc: "Learn supervised and unsupervised learning.",
            },
            {
              num: 22,
              title: "Linear Regression",
              desc: "Build models to predict numerical values.",
            },
            {
              num: 23,
              title: "Logistic Regression",
              desc: "Understand classification problems.",
            },
            {
              num: 24,
              title: "Decision Trees",
              desc: "Learn tree-based models for prediction.",
            },
            {
              num: 25,
              title: "Model Validation",
              desc: "Understand train-test split and evaluation.",
            },
            {
              num: 26,
              title: "Clustering",
              desc: "Group data using clustering algorithms.",
            },
            {
              num: 27,
              title: "Elbow Method",
              desc: "Visualize clusters and determine optimal groups.",
            },
            {
              num: 28,
              title: "Market Basket Analysis",
              desc: "Discover relationships between products.",
            },
            {
              num: 29,
              title: "Association Rules",
              desc: "Generate frequent itemsets and rules.",
            },
            {
              num: 30,
              title: "Naive Bayes Classifier",
              desc: "Build a simple email spam classifier.",
            },
            {
              num: 31,
              title: "Mini ML Project",
              desc: "Develop a student performance prediction model.",
            },
          ],
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will work on real-world projects across Python programming, Data Analytics, and Artificial Intelligence, gaining practical experience in analyzing data, building dashboards, and developing intelligent models. Upon successful completion of the Data & AI Innovators Program, students will receive an official Certificate of Completion by SkillzRevo Academy Junior, validating their expertise in data analysis, programming, and AI development. Throughout the program, students actively participate in hands-on activities, assignments, and real-world projects, culminating in a final capstone project where they analyze real datasets, create interactive dashboards, and build AI models using industry-relevant tools such as Python, Excel, SQL, and Power BI.",
      activities: [
        "Build a strong foundation in Python programming through hands-on coding",
        "Work with real-world datasets to understand data cleaning and analysis",
        "Analyze and interpret data using Excel, SQL, and Python",
        "Create interactive dashboards and visualizations using Power BI",
        "Develop machine learning models for real-world problem solving",
        "Understand statistical concepts and data-driven decision making",
        "Explore data storytelling and visualization techniques",
        "Build complete data and AI projects using modern tools and technologies",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Python Basics Project",
          desc: "Write simple Python programs using variables, input/output, and logic.",
        },
        {
          num: 2,
          title: "Calculator & Mini Apps",
          desc: "Build small applications like calculators using Python.",
        },
        {
          num: 3,
          title: "Excel Sales Dashboard",
          desc: "Analyze sales data and create dashboards using Excel.",
        },
        {
          num: 4,
          title: "SQL Data Insights Project",
          desc: "Query and analyze datasets using SQL.",
        },
        {
          num: 5,
          title: "Python Data Analysis Project",
          desc: "Work with datasets using Pandas and NumPy for analysis.",
        },
        {
          num: 6,
          title: "Data Visualization Dashboard",
          desc: "Create interactive charts and dashboards using Power BI.",
        },
        {
          num: 7,
          title: "Customer Segmentation Model",
          desc: "Use clustering techniques to group customers.",
        },
        {
          num: 8,
          title: "Student Performance Predictor",
          desc: "Build a machine learning model to predict student scores.",
        },
        {
          num: 9,
          title: "Email Spam Classifier",
          desc: "Develop a classification model to detect spam emails.",
        },
        {
          num: 10,
          title: "Final Data & AI Capstone Project",
          desc: "Analyze real-world datasets, build dashboards, and develop AI models in a complete end-to-end project.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Data & AI Innovators Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate showcases their expertise in Python programming, Data Analytics, and Artificial Intelligence. It reflects their hands-on learning journey through real-world projects, data analysis, dashboard creation, and the successful development of AI models as part of the final capstone project.",
      requirements: [
        "Attend the required live sessions",
        "Complete assignments and practice exercises in Python, data analytics, and AI concepts",
        "Actively participate in hands-on activities, datasets, and dashboard projects",
        "Successfully build and present the final Data & AI capstone project",
      ],
    },
    reviews: [
      {
        name: "Aarav Gupta",
        rating: 5,
        text: "The Data & AI Innovators course was amazing. I learned Python and worked on real datasets to build meaningful insights.",
        avatar: "AG",
      },
      {
        name: "Ishika Sharma",
        rating: 5,
        text: "The instructors made data analytics and AI very easy to understand. I loved creating dashboards and analyzing data.",
        avatar: "IS",
      },
      {
        name: "Vivaan Mehta",
        rating: 5,
        text: "Working with Excel, SQL, and Power BI was the best part. I learned how to turn data into useful insights.",
        avatar: "VM",
      },
      {
        name: "Ananya Verma",
        rating: 5,
        text: "A perfect course for students who want to learn data science, coding, and AI in a practical way.",
        avatar: "AV",
      },
      {
        name: "Reyansh Kapoor",
        rating: 5,
        text: "The projects were very engaging. I built dashboards, worked on data analysis, and created machine learning models.",
        avatar: "RK",
      },
      {
        name: "Diya Singh",
        rating: 5,
        text: "The final project helped me combine data analysis and AI into one complete solution. It was a great learning experience!",
        avatar: "DS",
      },
    ],
    faqs: [
      {
        q: "What is this Data & AI Innovators course about?",
        a: "This course teaches students Python programming, Data Analytics, and Artificial Intelligence in a practical and engaging way. Students learn to analyze data, build dashboards, and develop AI models through real-world projects.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students from Grade 9–12. It is beginner-friendly and suitable for students who want to explore data science and AI from scratch.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No prior coding experience is required. The course starts from Python basics and gradually moves to data analytics and AI concepts.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to analyze real-world datasets, create dashboards, build machine learning models, and complete a final data and AI capstone project.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This program combines coding with data analytics and AI, focusing on real-world projects like dashboards, data insights, and machine learning models instead of just basic programming.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will students work on?",
        a: "Students will work on projects like data dashboards, SQL data analysis, Python data projects, machine learning models, and a final capstone project.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed for beginners and gradually builds up to intermediate-level skills in Python, data analytics, and AI.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, Python, Excel, SQL, and Power BI. All tools used are free.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive certificates for Python Programming, Data Analytics, and Artificial Intelligence after successfully completing the course.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build data-driven thinking, analytical skills, and AI knowledge, preparing them for future careers in data science, analytics, and AI.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if a student misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],
    recommendedCourses: [
      {
        title: "Programming Masters",
        desc: "Learn programming fundamentals with Python, Java and C++ through fun projects.",
        grade: "8-12",
        slug: "programming-masters",
        icon: "",
      },
      {
        title: "AI Innovators",
        desc: "Discover the power of Artificial Intelligence and build smart applications that solve real-world problems.",
        grade: "8-12",
        slug: "ai-innovators",
        icon: "",
      },
      {
        title: "Tech Titans",
        desc: "Learn coding, build websites, and explore cyber security in a fun and practical way.",
        grade: "8-12",
        slug: "tech-titans",
        icon: "",
      },
    ],
  },
  {
    slug: "ai-innovators",
    title: "AI Innovators",
    type: "bundle",
    subtitle: "Code, Create & Build the Future with AI",
    description:
      "Students learn Python programming, Artificial Intelligence, Machine Learning, and Generative AI to build smart applications, chatbots, and real-world AI projects.",
    lessons: 72,
    age: "12-18",
    grade: "8-12",
    durationMonths: "8 - 10",
    durationWeeks: "36",
    durationClasses: "45-60",
    activities: "150+",
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your AI & Programming Journey",
      subtitle:
        "Students learn Python programming, Artificial Intelligence, Machine Learning, and Generative AI to build smart applications, chatbots, and real-world AI projects.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Python programming fundamentals",
            "Data analysis and visualization",
            "Machine Learning concepts and algorithms",
            "Artificial Intelligence fundamentals",
            "Generative AI tools and applications",
            "Prompt engineering techniques",
            "Chatbot development",
            "AI image and content creation",
            "Deep learning and NLP basics",
            "Building real-world AI applications",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Strong coding and logical thinking",
            "AI and Machine Learning fundamentals",
            "Data analysis and visualization skills",
            "Prompt engineering & AI communication",
            "Chatbot and AI app development",
            "Creative design using AI tools",
            "Problem-solving and analytical thinking",
            "Real-world project development",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Python Programming Certificate",
            "AI & Machine Learning Certificate",
            "Generative AI Certificate",
            "10+ AI Projects Portfolio",
            "Hands-on coding & AI experience",
            "Future-ready tech skills",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The AI Innovators Bundle Program is designed to provide students with a complete learning path in Python Programming, Artificial Intelligence, and Generative AI. Throughout the program, students learn coding from scratch using Python, understand how AI systems work, build machine learning models, and create AI-powered applications and chatbots.The course follows a structured approach with hands-on projects and real-world applications, ensuring practical and engaging learning. By the end of the program, students will be able to build AI models and applications, develop chatbots and AI tools, create AI-generated content, and confidently present a final capstone project.",
      highlights: [
        { icon: "🎓", label: "72 Live Instructor-Led Lectures" },
        { icon: "📅", label: "8-10-Month Structured Learning Program" },
        { icon: "📦", label: "28 Modules Covering Under Programming Masters" },
        {
          icon: "🛠️",
          label: "3-in-1 Learning (Python, AI Explorers, Gen AI Explorer)",
        },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Capstone Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "01",
          title: "AI Around Us",
          lectures: [
            {
              num: 1,
              title: "What is AI?",
              desc: "Understand what Artificial Intelligence is, how AI differs from human intelligence, and explore AI applications used in daily life.",
            },
            {
              num: 2,
              title: "How AI Learns",
              desc: "Learn how machines learn from data using machine learning concepts, recommendation systems, and bias in AI.",
            },
          ],
        },
        {
          id: "02",
          title: "Python for AI",
          lectures: [
            {
              num: 3,
              title: "Python Introduction",
              desc: "Understand why Python is used in AI and set up the development environment.",
            },
            {
              num: 4,
              title: "Variables and Operators",
              desc: "Learn Python variables, user input, and basic operators through coding exercises.",
            },
            {
              num: 5,
              title: "Conditions",
              desc: "Understand if-else logic and build small decision-based programs.",
            },
            {
              num: 6,
              title: "Loops",
              desc: "Use loops to automate repetitive tasks and build simple programs.",
            },
            {
              num: 7,
              title: "Data Structures",
              desc: "Work with lists, dictionaries, tuples, and sets.",
            },
            {
              num: 8,
              title: "NumPy Fundamentals",
              desc: "Understand arrays and numerical computing using NumPy.",
            },
            {
              num: 9,
              title: "Pandas Introduction",
              desc: "Load datasets and explore tabular data using Pandas.",
            },
            {
              num: 10,
              title: "Data Analysis Basics",
              desc: "Analyze datasets and extract insights.",
            },
            {
              num: 11,
              title: "Data Visualization",
              desc: "Create simple charts and graphs using Python.",
            },
            {
              num: 12,
              title: "Python Mini Project",
              desc: "Analyze a dataset and present insights.",
            },
          ],
        },
        {
          id: "03",
          title: "Statistics for AI",
          lectures: [
            {
              num: 13,
              title: "Introduction to Statistics",
              desc: "Understand descriptive and inferential statistics.[-",
            },
            {
              num: 14,
              title: "Mean, Median, Mode",
              desc: "Analyze datasets using measures of central tendency.",
            },
            {
              num: 15,
              title: "Probability Basics",
              desc: "Understand probability through real-world examples.",
            },
            {
              num: 16,
              title: "Correlation",
              desc: "Learn how relationships between variables work.",
            },
            {
              num: 17,
              title: "Data Cleaning & EDA",
              desc: "Perform data type corrections and data exploration.",
            },
            {
              num: 18,
              title: "Visualization for Analysis",
              desc: "Visualize data patterns and trends.",
            },
            {
              num: 19,
              title: "Hypothesis Testing",
              desc: "Understand the basics of hypothesis testing.",
            },
          ],
        },
        {
          id: "04",
          title: "Machine Learning",
          lectures: [
            {
              num: 20,
              title: "Introduction to Machine Learning",
              desc: "Understand how machine learning models work.",
            },
            {
              num: 21,
              title: "Types of Machine Learning",
              desc: "Learn supervised and unsupervised learning.",
            },
            {
              num: 22,
              title: "Linear Regression",
              desc: "Build models to predict numerical values.",
            },
            {
              num: 23,
              title: "Logistic Regression",
              desc: "Understand classification problems.",
            },
            {
              num: 24,
              title: "Decision Trees",
              desc: "Learn tree-based models for prediction.",
            },
            {
              num: 25,
              title: "Model Validation",
              desc: "Understand train-test split and evaluation.",
            },
            {
              num: 26,
              title: "Clustering",
              desc: "Group data using clustering algorithms.",
            },
            {
              num: 27,
              title: "Elbow Method",
              desc: "Visualize clusters and determine optimal groups.",
            },
            {
              num: 28,
              title: "Market Basket Analysis",
              desc: "Discover relationships between products.",
            },
            {
              num: 29,
              title: "Association Rules",
              desc: "Generate frequent itemsets and rules.",
            },
            {
              num: 30,
              title: "Naive Bayes Classifier",
              desc: "Build a simple email spam classifier.",
            },
            {
              num: 31,
              title: "Mini ML Project",
              desc: "Develop a student performance prediction model.",
            },
          ],
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will work on exciting real-world projects across Python programming, Artificial Intelligence, Machine Learning, and Generative AI, gaining strong technical and creative skills. Upon successful completion of the AI Innovators Program, students will receive an official Certificate of Completion by SkillzRevo Academy Junior, recognizing their expertise in AI, programming, and intelligent application development. Throughout the journey, students engage in hands-on coding exercises, assignments, and project-based learning, leading to a final capstone project that showcases their ability to build AI models, develop chatbots, and create smart applications using real-world data and AI tools.",
      activities: [
        "Learn Python programming and build a strong coding foundation",
        "Explore datasets and understand how AI systems learn from data",
        "Perform data analysis and create visualizations using charts and graphs",
        "Build basic machine learning models for prediction and classification",
        "Understand and apply deep learning and NLP concepts",
        "Create AI chatbots using prompt engineering and AI tools",
        "Generate images, text, and content using Generative AI tools",
        "Work on real-world AI projects combining Python, ML, and GenAI concepts",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Python Basics Project",
          desc: "Write simple Python programs using variables, input/output, and basic logic.",
        },
        {
          num: 2,
          title: "Calculator & Mini Apps",
          desc: "Build small applications like calculators using Python.",
        },
        {
          num: 3,
          title: "Data Analysis Project",
          desc: "Analyze datasets and extract meaningful insights using Python.",
        },
        {
          num: 4,
          title: "Data Visualization Dashboard",
          desc: "Create charts and graphs to visualize real-world data.",
        },
        {
          num: 5,
          title: "Student Performance Predictor",
          desc: "Build a machine learning model to predict student scores.",
        },
        {
          num: 6,
          title: "Email Spam Classifier",
          desc: "Develop a classification model to detect spam emails.",
        },
        {
          num: 7,
          title: "Sentiment Analysis Tool",
          desc: "Analyze text data to identify positive or negative sentiment.",
        },
        {
          num: 8,
          title: "AI Chatbot Project",
          desc: "Create an intelligent chatbot using AI tools and prompt engineering.",
        },
        {
          num: 9,
          title: "AI Image & Content Generator",
          desc: "Generate images, text, and creative content using Generative AI tools.",
        },
        {
          num: 10,
          title: "Final AI Capstone Project",
          desc: "Design and build a complete AI-powered application combining Python, Machine Learning, and Generative AI.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the AI Innovators Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate showcases their expertise in Python, Artificial Intelligence, Machine Learning, and Generative AI. It reflects their hands-on learning journey through real-world projects, AI model development, and the successful creation of intelligent applications and a final capstone project.",
      requirements: [
        "Attend the required live sessions",
        "Complete coding assignments and practice exercises in Python and AI concepts",
        "Actively participate in hands-on activities and AI projects",
        "Successfully build and present the final AI capstone project",
      ],
    },

    reviews: [
      {
        name: "Ayaan Khan",
        rating: 5,
        text: "The AI Innovators course was amazing. I learned Python and built my first AI project with real-world data.",
        avatar: "AK",
      },
      {
        name: "Riya Malhotra",
        rating: 5,
        text: "The instructors made AI and machine learning very easy to understand. I loved creating chatbots and AI tools.",
        avatar: "RM",
      },
      {
        name: "Kabir Arora",
        rating: 5,
        text: "Building machine learning models and working on datasets was the best part. It really improved my understanding of AI.",
        avatar: "KA",
      },
      {
        name: "Anaya Gupta",
        rating: 5,
        text: "A perfect course for beginners who want to explore AI, coding, and real-world applications in a simple way.",
        avatar: "AG",
      },
      {
        name: "Vihaan Sharma",
        rating: 5,
        text: "The projects were very exciting. I built chatbots, worked on data analysis, and created AI-generated content.",
        avatar: "VS",
      },
      {
        name: "Meher Kapoor",
        rating: 5,
        text: "The final AI project helped me combine everything I learned into one smart application. It was a great experience!",
        avatar: "MK",
      },
    ],
    faqs: [
      {
        q: "What is this AI Innovators course about?",
        a: "This course teaches students Python programming, Artificial Intelligence, Machine Learning, and Generative AI in a practical and engaging way. Students learn to build AI models, chatbots, and smart applications through real-world projects.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students from Grade 8–12. It is beginner-friendly and suitable for students who want to explore AI and coding from scratch.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No prior coding experience is required. The course starts from Python basics and gradually moves to AI and machine learning concepts.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to build AI models, create chatbots, develop AI-powered applications, generate AI content, and complete a final capstone project.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This program combines coding with Artificial Intelligence and Generative AI, focusing on real-world projects like chatbots, ML models, and AI applications instead of just basic programming.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will students work on?",
        a: "Students will work on projects like AI chatbots, data analysis dashboards, machine learning models, sentiment analysis tools, and AI-generated content projects, along with a final capstone project.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed for beginners and gradually builds up to intermediate-level skills in Python, AI, and machine learning.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, Python, and access to AI tools and platforms. All tools used are free.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive certificates for Python Programming, Artificial Intelligence & Machine Learning, and Generative AI after successfully completing the course.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build future-ready skills in AI, improve logical thinking, and prepare for careers in data science, AI development, and technology.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if a student misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],
    recommendedCourses: [
      {
        title: "Programming Masters",
        desc: "Learn programming fundamentals with Python, Java and C++ through fun projects.",
        grade: "8-12",
        slug: "programming-masters",
        icon: "",
      },
      {
        title: "AI Innovators",
        desc: "Discover the power of Artificial Intelligence and build smart applications that solve real-world problems.",
        grade: "8-12",
        slug: "ai-innovators",
        icon: "",
      },
      {
        title: "Full Stack Cloud Creators",
        desc: "Design, build, and deploy full-stack cloud applications using modern technologies.",
        grade: "8-12",
        slug: "full-stack-cloud-creators",
        icon: "",
      },
    ],
  },
  {
    slug: "programming-masters",
    title: "Programming Masters",
    type: "bundle",
    subtitle: "Code Like a Pro in 3 Languages",
    description:
      "Students learn how to code using Python, Java, and C++, build strong logic, and develop real-world applications through hands-on practice.",
    lessons: 73,
    age: "12-18",
    grade: "8-12",
    durationMonths: "8 - 10",
    durationWeeks: "37",
    durationClasses: "45-60",
    activities: "160+",
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your AI & Programming Journey",
      subtitle:
        "Learn Python, Machine Learning, and Generative AI in one powerful program. Build real-world AI projects, chatbots, and smart applications while developing strong logical and creative skills.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Programming fundamentals using Python, Java & C++",
            "Writing structured and efficient code",
            "Variables, data types, and operators",
            "Conditional statements and logic building",
            "Loops and problem-solving techniques",
            "Functions and reusable programming",
            "Arrays, strings, and data handling",
            "Object-Oriented Programming (OOP) concepts",
            "File handling and debugging",
            "Building real-world applications",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Strong logical thinking and problem-solving",
            "Multi-language programming expertise",
            "Writing clean and optimized code",
            "Understanding OOP concepts deeply",
            "Debugging and error handling",
            "Building real-world applications",
            "Foundation for software development careers",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Python Programming Certificate",
            "Java Programming Certificate",
            "C++ Programming Certificate",
            "10+ Real-world Projects",
            "Hands-on coding experience",
            "Strong programming foundation",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Programming Masters Bundle Program is designed to provide students with a complete foundation in coding using Python, Java, and C++. Throughout the program, students learn coding from scratch, build strong problem-solving skills, and gain an understanding of multiple programming paradigms that prepare them for future careers in software development. The course follows a structured learning path with hands-on coding, projects, and real-world applications, ensuring a practical and engaging learning experience. By the end of the program, students will be able to build applications in Python, Java, and C++, understand object-oriented programming and core programming logic in depth, develop multiple real-world projects, and confidently present a final capstone project.",
      highlights: [
        { icon: "🎓", label: "73 Live Instructor-Led Lectures" },
        { icon: "📅", label: "8-10-Month Structured Learning Program" },
        { icon: "📦", label: "33 Modules Covering Under Programming Masters" },
        { icon: "💻", label: "3-in-1 Learning (Python + Java + C++)" },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🚀", label: "Final Capstone Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "01",
          title: "AI Around Us",
          lectures: [
            {
              num: 1,
              title: "What is AI?",
              desc: "Understand what Artificial Intelligence is, how AI differs from human intelligence, and explore AI applications used in daily life.",
            },
            {
              num: 2,
              title: "How AI Learns",
              desc: "Learn how machines learn from data using machine learning concepts, recommendation systems, and bias in AI.",
            },
          ],
        },
        {
          id: "02",
          title: "Python for AI",
          lectures: [
            {
              num: 3,
              title: "Python Introduction",
              desc: "Understand why Python is used in AI and set up the development environment.",
            },
            {
              num: 4,
              title: "Variables and Operators",
              desc: "Learn Python variables, user input, and basic operators through coding exercises.",
            },
            {
              num: 5,
              title: "Conditions",
              desc: "Understand if-else logic and build small decision-based programs.",
            },
            {
              num: 6,
              title: "Loops",
              desc: "Use loops to automate repetitive tasks and build simple programs.",
            },
            {
              num: 7,
              title: "Data Structures",
              desc: "Work with lists, dictionaries, tuples, and sets.",
            },
            {
              num: 8,
              title: "NumPy Fundamentals",
              desc: "Understand arrays and numerical computing using NumPy.",
            },
            {
              num: 9,
              title: "Pandas Introduction",
              desc: "Load datasets and explore tabular data using Pandas.",
            },
            {
              num: 10,
              title: "Data Analysis Basics",
              desc: "Analyze datasets and extract insights.",
            },
            {
              num: 11,
              title: "Data Visualization",
              desc: "Create simple charts and graphs using Python.",
            },
            {
              num: 12,
              title: "Python Mini Project",
              desc: "Analyze a dataset and present insights.",
            },
          ],
        },
        {
          id: "03",
          title: "Statistics for AI",
          lectures: [
            {
              num: 13,
              title: "Introduction to Statistics",
              desc: "Understand descriptive and inferential statistics.[-",
            },
            {
              num: 14,
              title: "Mean, Median, Mode",
              desc: "Analyze datasets using measures of central tendency.",
            },
            {
              num: 15,
              title: "Probability Basics",
              desc: "Understand probability through real-world examples.",
            },
            {
              num: 16,
              title: "Correlation",
              desc: "Learn how relationships between variables work.",
            },
            {
              num: 17,
              title: "Data Cleaning & EDA",
              desc: "Perform data type corrections and data exploration.",
            },
            {
              num: 18,
              title: "Visualization for Analysis",
              desc: "Visualize data patterns and trends.",
            },
            {
              num: 19,
              title: "Hypothesis Testing",
              desc: "Understand the basics of hypothesis testing.",
            },
          ],
        },
        {
          id: "04",
          title: "Machine Learning",
          lectures: [
            {
              num: 20,
              title: "Introduction to Machine Learning",
              desc: "Understand how machine learning models work.",
            },
            {
              num: 21,
              title: "Types of Machine Learning",
              desc: "Learn supervised and unsupervised learning.",
            },
            {
              num: 22,
              title: "Linear Regression",
              desc: "Build models to predict numerical values.",
            },
            {
              num: 23,
              title: "Logistic Regression",
              desc: "Understand classification problems.",
            },
            {
              num: 24,
              title: "Decision Trees",
              desc: "Learn tree-based models for prediction.",
            },
            {
              num: 25,
              title: "Model Validation",
              desc: "Understand train-test split and evaluation.",
            },
            {
              num: 26,
              title: "Clustering",
              desc: "Group data using clustering algorithms.",
            },
            {
              num: 27,
              title: "Elbow Method",
              desc: "Visualize clusters and determine optimal groups.",
            },
            {
              num: 28,
              title: "Market Basket Analysis",
              desc: "Discover relationships between products.",
            },
            {
              num: 29,
              title: "Association Rules",
              desc: "Generate frequent itemsets and rules.",
            },
            {
              num: 30,
              title: "Naive Bayes Classifier",
              desc: "Build a simple email spam classifier.",
            },
            {
              num: 31,
              title: "Mini ML Project",
              desc: "Develop a student performance prediction model.",
            },
          ],
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will work on exciting real-world projects across Python, Java, and C++ programming, gaining strong coding skills and practical exposure to multiple programming languages. Upon successful completion of the Programming Masters Program, students will receive an official Certificate of Completion by SkillzRevo Academy Junior, recognizing their expertise in programming, problem-solving, and software development. Throughout the journey, students engage in hands-on coding exercises, assignments, and project-based learning, leading to a final capstone project that showcases their ability to build applications, apply programming logic, and solve real-world problems using multiple languages.",
      activities: [
        "Understand programming fundamentals and explore how code works in real-world applications",
        "Write programs using Python, Java, and C++ with proper syntax and structure",
        "Build strong logic using conditions, loops, and problem-solving exercises",
        "Create functions and reusable code for efficient programming",
        "Work with arrays, strings, and data structures across multiple languages",
        "Learn object-oriented programming concepts like classes, objects, inheritance, and polymorphism",
        "Debug and fix errors to improve code performance and efficiency",
        "Work on real-world projects using Python, Java, and C++ programming",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Basic Programs",
          desc: "Write simple programs in Python, Java, and C++ using variables and input/output.",
        },
        {
          num: 2,
          title: "Calculator Application",
          desc: "Build a calculator using programming logic and operations.",
        },
        {
          num: 3,
          title: "Number Guessing Game",
          desc: "Create a game using conditions and loops.",
        },
        {
          num: 4,
          title: "Pattern Generator",
          desc: "Develop pattern-based programs using loops and logic.",
        },
        {
          num: 5,
          title: "String Utility Tool",
          desc: "Build programs to manipulate and process strings.",
        },
        {
          num: 6,
          title: "Array-Based Programs",
          desc: "Solve real-world problems using arrays and data structures.",
        },
        {
          num: 7,
          title: "File Handling Project",
          desc: "Create applications to read, write, and manage files.",
        },
        {
          num: 8,
          title: "OOP-Based Application",
          desc: "Develop a project using object-oriented programming concepts.",
        },
        {
          num: 9,
          title: "Mini Game or Utility App",
          desc: "Build a small game or utility application using programming logic.",
        },
        {
          num: 10,
          title: "Final Multi-Language Project",
          desc: "Design and build a complete application using Python, Java, or C++ with strong logic and real-world use cases.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Programming Masters Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate recognizes their expertise in Python, Java, and C++ programming, along with strong problem-solving and logical thinking skills. It highlights their practical experience gained through hands-on coding, real-world projects, and the successful development of a comprehensive capstone project using multiple programming languages.",
      requirements: [
        "Attend the required live sessions",
        "Complete coding assignments and practice exercises in Python, Java, and C++",
        "Actively participate in hands-on activities",
        "Successfully build and present the final multi-language capstone project",
      ],
    },

    reviews: [
      {
        name: "Rohan Khanna",
        rating: 5,
        text: "The Programming Masters course was excellent. I learned Python, Java, and C++ in a very simple and structured way.",
        avatar: "RK",
      },
      {
        name: "Sanya Mehta",
        rating: 5,
        text: "The instructors made coding easy to understand. I really enjoyed building programs and improving my logic.",
        avatar: "SM",
      },
      {
        name: "Kunal Verma",
        rating: 5,
        text: "Learning multiple programming languages in one course was the best part. My problem-solving skills improved a lot.",
        avatar: "KV",
      },
      {
        name: "Priya Sharma",
        rating: 5,
        text: "A perfect course for beginners who want to learn coding deeply and build a strong foundation.",
        avatar: "PS",
      },
      {
        name: "Devansh Gupta",
        rating: 5,
        text: "The projects were very interesting. I built games, tools, and applications using different programming languages.",
        avatar: "DG",
      },
      {
        name: "Anushka Jain",
        rating: 5,
        text: "The final project helped me apply everything I learned in Python, Java, and C++. It was a great learning experience!",
        avatar: "AJ",
      },
    ],
    faqs: [
      {
        q: "What is this Programming Masters course about?",
        a: "This course teaches students Python, Java, and C++ programming in a structured and practical way. Students build strong coding fundamentals, improve logic, and create real-world applications using multiple languages.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students from Grade 8–12. It is beginner-friendly and ideal for students who want to learn programming from scratch.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No prior coding experience is required. The course starts from basics and gradually moves to advanced programming concepts.",
      },
      {
        q: "Why learn three programming languages in one course?",
        a: "Learning Python, Java, and C++ helps students build strong logic, understand different programming styles, and become more confident coders.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "Students will be able to build programs, solve logic-based problems, create applications, and develop projects using Python, Java, and C++.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This course focuses on logic building and multi-language learning, helping students master programming concepts instead of learning just one language.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, and recorded sessions are also provided for revision.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will students work on?",
        a: "Students will work on projects like calculators, games, data-based programs, and real-world applications, along with a final capstone project.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed for beginners and gradually builds up to advanced-level programming skills.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, and tools like VS Code, Python, Java, and C++ compilers. All tools used are free.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive a Certificate of Completion after successfully completing the Programming Masters course.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course builds strong programming and problem-solving skills, which are essential for careers in software development, AI, and technology.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents will receive regular updates, project reviews, and final project presentations to track progress.",
      },
      {
        q: "What if a student misses a class?",
        a: "Recorded sessions and support materials will be provided so students can catch up easily.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the course before enrolling.",
      },
    ],

    recommendedCourses: [
      {
        title: "Tech Titans",
        desc: "Master web development, Python programming, and cyber security by building real-world projects.",
        grade: "8-12",
        slug: "tech-titans",
        icon: "",
      },
      {
        title: "AI Innovators",
        desc: "Discover the power of Artificial Intelligence and build smart applications that solve real-world problems.",
        grade: "8-12",
        slug: "ai-innovators",
        icon: "",
      },
      {
        title: "Full Stack Cloud Creators",
        desc: "Design, build, and deploy full-stack cloud applications using modern technologies.",
        grade: "8-12",
        slug: "full-stack-cloud-creators",
        icon: "",
      },
    ],
  },
  {
    slug: "tech-titans",
    title: "Tech Titans",
    type: "bundle",
    subtitle: "Become a Complete Tech Expert",
    description:
      "Students learn how to build websites, write Python programs, and protect systems using cybersecurity skills.",
    lessons: 68,
    age: "12-18",
    grade: "8-12",
    durationMonths: "8 - 10",
    durationWeeks: "35",
    durationClasses: "45-60",
    activities: "140+",
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
    color: "#1d8fff",

    journeySection: {
      heading: "Start Your Complete Tech Journey",
      subtitle:
        "Learn Web Development, Python Programming, and Cyber Security in one powerful program. Build websites, develop applications, and understand how to protect systems from cyber threats.",
      cards: [
        {
          icon: "📚",
          title: "What You'll Learn",
          type: "checklist",
          items: [
            "Website development using HTML, CSS & JavaScript",
            "Python programming from basics to advanced",
            "Understanding how the internet and websites work",
            "Cyber security fundamentals and digital safety",
            "Networking basics and system security",
            "JavaScript interactivity & DOM manipulation",
            "Ethical hacking concepts and cyber attack understanding",
            "Building real-world projects across all domains",
          ],
        },
        {
          icon: "🚀",
          title: "Skills You'll Gain",
          type: "bullets",
          items: [
            "Frontend development skills",
            "Strong programming & coding logic",
            "Cyber security awareness and protection skills",
            "Problem-solving and analytical thinking",
            "Website design and deployment",
            "Python application development",
            "Understanding of cyber threats and defense",
            "Real-world project building",
          ],
        },
        {
          icon: "🏆",
          title: "What You'll Achieve",
          type: "trophy",
          items: [
            "Web Development Certificate",
            "Python Programming Certificate",
            "Cyber Security Certificate",
            "10+ Real-world Projects",
            "Hands-on coding & security experience",
            "Access to learning community",
          ],
        },
      ],
    },

    programOverview: {
      heading: "Program Overview",
      description:
        "The Complete Tech Bundle Program is designed to provide students with a strong foundation in Web Development, Python Programming, and Cyber Security. Throughout the program, students learn how to build websites from scratch, develop real-world Python applications, and understand cyber threats along with essential digital safety practices. The course is carefully structured into multiple modules that combine coding, development, and security skills through hands-on projects and practical learning. By the end of the program, students will be able to build interactive websites, create Python-based applications, perform basic cyber security analysis, and confidently present a complete capstone project.",
      highlights: [
        { icon: "🎓", label: "68 Live Instructor-Led Lectures" },
        { icon: "📅", label: "8-10-Month Structured Learning Program" },
        { icon: "📦", label: "22 Modules Covering Under Tech Titans" },
        {
          icon: "🛠️",
          label: "3-in-1 Learning (Web + Python + Cyber Security)",
        },
        { icon: "🛠️", label: "Hands-on Activities and Real Projects" },
        { icon: "🖥️", label: "Final Capstone Project" },
        { icon: "🕐", label: "Weekend & Weekday Batch Options" },
      ],
    },

    curriculum: {
      heading: "Course Delivery Plan",
      modules: [
        {
          id: "01",
          title: "AI Around Us",
          lectures: [
            {
              num: 1,
              title: "What is AI?",
              desc: "Understand what Artificial Intelligence is, how AI differs from human intelligence, and explore AI applications used in daily life.",
            },
            {
              num: 2,
              title: "How AI Learns",
              desc: "Learn how machines learn from data using machine learning concepts, recommendation systems, and bias in AI.",
            },
          ],
        },
        {
          id: "02",
          title: "Python for AI",
          lectures: [
            {
              num: 3,
              title: "Python Introduction",
              desc: "Understand why Python is used in AI and set up the development environment.",
            },
            {
              num: 4,
              title: "Variables and Operators",
              desc: "Learn Python variables, user input, and basic operators through coding exercises.",
            },
            {
              num: 5,
              title: "Conditions",
              desc: "Understand if-else logic and build small decision-based programs.",
            },
            {
              num: 6,
              title: "Loops",
              desc: "Use loops to automate repetitive tasks and build simple programs.",
            },
            {
              num: 7,
              title: "Data Structures",
              desc: "Work with lists, dictionaries, tuples, and sets.",
            },
            {
              num: 8,
              title: "NumPy Fundamentals",
              desc: "Understand arrays and numerical computing using NumPy.",
            },
            {
              num: 9,
              title: "Pandas Introduction",
              desc: "Load datasets and explore tabular data using Pandas.",
            },
            {
              num: 10,
              title: "Data Analysis Basics",
              desc: "Analyze datasets and extract insights.",
            },
            {
              num: 11,
              title: "Data Visualization",
              desc: "Create simple charts and graphs using Python.",
            },
            {
              num: 12,
              title: "Python Mini Project",
              desc: "Analyze a dataset and present insights.",
            },
          ],
        },
        {
          id: "03",
          title: "Statistics for AI",
          lectures: [
            {
              num: 13,
              title: "Introduction to Statistics",
              desc: "Understand descriptive and inferential statistics.[-",
            },
            {
              num: 14,
              title: "Mean, Median, Mode",
              desc: "Analyze datasets using measures of central tendency.",
            },
            {
              num: 15,
              title: "Probability Basics",
              desc: "Understand probability through real-world examples.",
            },
            {
              num: 16,
              title: "Correlation",
              desc: "Learn how relationships between variables work.",
            },
            {
              num: 17,
              title: "Data Cleaning & EDA",
              desc: "Perform data type corrections and data exploration.",
            },
            {
              num: 18,
              title: "Visualization for Analysis",
              desc: "Visualize data patterns and trends.",
            },
            {
              num: 19,
              title: "Hypothesis Testing",
              desc: "Understand the basics of hypothesis testing.",
            },
          ],
        },
        {
          id: "04",
          title: "Machine Learning",
          lectures: [
            {
              num: 20,
              title: "Introduction to Machine Learning",
              desc: "Understand how machine learning models work.",
            },
            {
              num: 21,
              title: "Types of Machine Learning",
              desc: "Learn supervised and unsupervised learning.",
            },
            {
              num: 22,
              title: "Linear Regression",
              desc: "Build models to predict numerical values.",
            },
            {
              num: 23,
              title: "Logistic Regression",
              desc: "Understand classification problems.",
            },
            {
              num: 24,
              title: "Decision Trees",
              desc: "Learn tree-based models for prediction.",
            },
            {
              num: 25,
              title: "Model Validation",
              desc: "Understand train-test split and evaluation.",
            },
            {
              num: 26,
              title: "Clustering",
              desc: "Group data using clustering algorithms.",
            },
            {
              num: 27,
              title: "Elbow Method",
              desc: "Visualize clusters and determine optimal groups.",
            },
            {
              num: 28,
              title: "Market Basket Analysis",
              desc: "Discover relationships between products.",
            },
            {
              num: 29,
              title: "Association Rules",
              desc: "Generate frequent itemsets and rules.",
            },
            {
              num: 30,
              title: "Naive Bayes Classifier",
              desc: "Build a simple email spam classifier.",
            },
            {
              num: 31,
              title: "Mini ML Project",
              desc: "Develop a student performance prediction model.",
            },
          ],
        },
      ],
    },

    projects: {
      heading: "Hands-on Activities & Student Projects",
      description:
        "Students will work on exciting real-world projects across web development, Python programming, and cybersecurity, gaining practical exposure to multiple technology domains. Upon successful completion of the Tech Titans Program, students will receive an official Certificate of Completion by SkillzRevo Academy Junior, recognizing their skills in coding, development, and digital security. Throughout the journey, students engage in hands-on activities, assignments, and project-based learning, leading to a final capstone project that showcases their ability to build applications and understand system security in real-world scenarios.",
      activities: [
        "Understand how websites and the internet work and explore real-world web structures",
        "Build and design responsive web pages using HTML, CSS, and JavaScript",
        "Create interactive web features like forms, to-do apps, and quiz applications",
        "Learn Python programming by building logical programs and mini applications",
        "Work with data structures, functions, and real-world Python use cases",
        "Understand cyber security fundamentals, digital safety, and common cyber threats",
        "Perform basic security analysis and explore ethical hacking concepts",
        "Work on real-world projects combining web development, Python, and cyber security",
      ],
      capstoneProjects: [
        {
          num: 1,
          title: "Basic Web Page",
          desc: "Create a simple website using HTML and CSS with text and images.",
        },
        {
          num: 2,
          title: "Personal Portfolio Website",
          desc: "Design a personal portfolio to showcase profile and projects.",
        },
        {
          num: 3,
          title: "JavaScript To-Do App",
          desc: "Build an interactive to-do application using JavaScript and DOM.",
        },
        {
          num: 4,
          title: "Quiz Web Application",
          desc: "Create a quiz app with questions, answers, and scoring system.",
        },
        {
          num: 5,
          title: "Python Calculator",
          desc: "Develop a calculator using Python with basic operations.",
        },
        {
          num: 6,
          title: "Python Mini Game",
          desc: "Build a simple game using Python logic and conditions.",
        },
        {
          num: 7,
          title: "File Handling System",
          desc: "Create a Python project to read, write, and manage files.",
        },
        {
          num: 8,
          title: "Password Generator Tool",
          desc: "Build a secure password generator using Python.",
        },
        {
          num: 9,
          title: "Phishing Detection Project",
          desc: "Understand and simulate phishing detection techniques.",
        },
        {
          num: 10,
          title: "Final Tech Project",
          desc: "Design and build a complete project combining web development, Python, and cyber security concepts.",
        },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Tech Titans Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate recognizes their multi-domain expertise in web development, Python programming, and cyber security. It highlights their practical experience gained through hands-on activities, real-world projects, and the successful development of a comprehensive capstone project integrating coding, application development, and system security.",
      requirements: [
        "Attend the required live sessions",
        "Complete all assignments and assessments",
        "Actively participate in hands-on activities",
        "Successfully build and present the final Tech Titans project",
      ],
    },

    reviews: [
      {
        name: "Aarav Sharma",
        rating: 5,
        text: "The Tech Titans course was amazing. I learned how to build websites, code in Python, and understand cyber security basics.",
        avatar: "AS",
      },
      {
        name: "Ishita Verma",
        rating: 5,
        text: "The instructors made everything very easy to understand. I enjoyed both coding and learning about digital security.",
        avatar: "IV",
      },
      {
        name: "Vivaan Gupta",
        rating: 5,
        text: "Building websites and Python projects was really fun. The cyber security part was also very interesting.",
        avatar: "VG",
      },
      {
        name: "Anika Singh",
        rating: 5,
        text: "A perfect course for students who want to learn coding and technology in a practical and easy way.",
        avatar: "AS",
      },
      {
        name: "Reyansh Mehta",
        rating: 5,
        text: "The projects were very engaging. I built apps, worked on Python, and learned how to stay safe online.",
        avatar: "RM",
      },
      {
        name: "Diya Kapoor",
        rating: 5,
        text: "The final project helped me combine everything I learned into one complete application. It was a great experience!",
        avatar: "DK",
      },
    ],
    faqs: [
      {
        q: "What is this Tech Titans course about?",
        a: "This course teaches students web development, Python programming, and cyber security in a fun and practical way. Students learn to build websites, develop applications, and understand digital safety through real-world projects.",
      },
      {
        q: "Who is this program suitable for?",
        a: "The program is designed for students from Grade 8–12. It is beginner-friendly and suitable for students who want to learn coding and technology from scratch.",
      },
      {
        q: "Does my child need coding experience?",
        a: "No prior coding experience is required. The course starts from basics and gradually moves to intermediate-level concepts.",
      },
      {
        q: "What will my child be able to build after this course?",
        a: "By the end of the program, students will be able to build websites, create Python applications, perform basic cyber security analysis, and complete a final capstone project combining all skills.",
      },
      {
        q: "How is this course different from regular coding classes?",
        a: "This program offers a complete learning experience by combining web development, programming, and cyber security, focusing on practical projects instead of just theory.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and instructor-led, allowing students to interact, ask questions, and participate in activities in real time.",
      },
      {
        q: "How many students are there in one batch?",
        a: "We maintain small batch sizes to ensure personalized attention and better learning for every student.",
      },
      {
        q: "What kind of projects will students work on?",
        a: "Students will work on projects like portfolio websites, JavaScript apps, Python programs, password generators, and basic cyber security analysis projects, along with a final capstone project.",
      },
      {
        q: "Is this course suitable for beginners?",
        a: "Yes, the course is designed for beginners and gradually builds up to intermediate-level skills across all three domains.",
      },
      {
        q: "What tools or software are required?",
        a: "Students will need a laptop or desktop, internet connection, browser, VS Code, Python, and basic security tools. All tools used are free.",
      },
      {
        q: "Will my child get a certificate?",
        a: "Yes, students will receive certificates for Web Development, Python Programming, and Cyber Security after successfully completing the course.",
      },
      {
        q: "How will this course help my child in the future?",
        a: "This course helps students build strong coding skills, problem-solving ability, and awareness of digital security, preparing them for future careers in technology.",
      },
      {
        q: "Can parents track their child’s progress?",
        a: "Yes, parents can track progress through regular updates, project reviews, and final project presentations.",
      },
      {
        q: "What if a student misses a class?",
        a: "Recorded sessions or support materials will be provided so students can catch up easily without missing important content.",
      },
      {
        q: "Is there a demo class available?",
        a: "Yes, you can book a free demo class to experience the teaching style and course structure before enrolling.",
      },
    ],
    recommendedCourses: [
      {
        title: "Programming Masters",
        desc: "Learn programming fundamentals with Python, Java and C++ through fun projects.",
        grade: "8-12",
        slug: "programming-masters",
        icon: "",
      },
      {
        title: "AI Innovators",
        desc: "Discover the power of Artificial Intelligence and build smart applications that solve real-world problems.",
        grade: "8-12",
        slug: "ai-innovators",
        icon: "",
      },
      {
        title: "Full Stack Cloud Creators",
        desc: "Design, build, and deploy full-stack cloud applications using modern technologies.",
        grade: "8-12",
        slug: "full-stack-cloud-creators",
        icon: "",
      },
    ],
  },
];

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug) || null;
}
export const getSingleCourseBySlug = (slug) =>
  courses.find((c) => c.slug === slug && c.type === "single");

export const getBundleBySlug = (slug) =>
  courses.find((c) => c.slug === slug && c.type === "bundle");
