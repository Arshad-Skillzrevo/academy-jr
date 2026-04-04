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
  {
    slug: "ai-explorers",
    title: "AI Explorers",
    subtitle: " Learn Artificial Intelligence the Fun Way",
    description:
      "Students learn how Artificial Intelligence works and build real AI projects using Python, Machine Learning, and Statistics.",
    grade: "8-12",
    lessons: 30,
    activities: "80+",
    durationMonths: 3-4,
    heroImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
        {
          id: "05",
          title: "Artificial Intelligence",
          lectures: [
            {
              num: 32,
              title: " Deep Learning Introduction",
              desc: "Understand neural networks and perceptrons.",
            },
            {
              num: 33,
              title: " Deep Learning Fundamentals",
              desc: "Explore deep learning concepts and applications.",
            },
            {
              num: 34,
              title: "ANN and CNN",
              desc: "Understand artificial neural networks and convolutional neural networks.",
            },
            {
              num: 35,
              title: "RNN, LSTM, GRU",
              desc: "Learn sequence models and time-series analysis.",
            },
            {
              num: 36,
              title: "NLP Basics",
              desc: "Understand natural language processing.",
            },
            {
              num: 37,
              title: "Text Classification",
              desc: "Build models to classify text data.",
            },
            {
              num: 38,
              title: "NLP Project",
              desc: "Perform sentiment analysis on text data.",
            },
          ],
        },
        {
          id: "06",
          title: "Final Capstone Project",
          lectures: [
            {
              num: 39,
              title: "Project Planning",
              desc: "Select datasets and design the final AI project.",
            },
            {
              num: 40,
              title: "Final Capstone Project",
              desc: "Build and present an AI-based project such as a sentiment analysis dashboard.",
            },
          ],
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
        { num: 1, title: "AI Tools Research", desc: "Explore and present AI tools used in daily life." },
        { num: 2, title: "Python Calculator", desc: "Build a simple calculator using Python." },
        { num: 3, title: "Marks Analysis Tool", desc: "Analyze student marks dataset." },
        { num: 4, title: "Dice Simulator", desc: "Create a probability simulation using Python." },
        { num: 5, title: "Data Visualization Dashboard", desc: "Visualize datasets using Python charts." },
        { num: 6, title: "Student Performance Predictor", desc: "Predict student scores using regression models." },
        { num: 7, title: "Email Spam Classifier", desc: "Detect spam emails using Naive Bayes." },
        { num: 8, title: "Customer Segmentation Model", desc: "Group customers using clustering." },
        { num: 9, title: "Sentiment Analysis Tool", desc: "Analyze text sentiment as positive or negative." },
        { num: 10, title: "AI Sentiment Dashboard", desc: "Build a final AI dashboard project." },
      ],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the Artificial Intelligence & Machine Learning Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Solutions. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
        a: "The course duration is 4 months and includes 40 live lectures, each lasting 90 minutes.",
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
    subtitle: "Learn Cloud the Easy Way",
    description:
      "Students learn how modern applications run on the cloud and how to deploy servers, websites, and applications using cloud platforms.",
    grade: "8-12",
    lessons: 17,
    activities: "30+",
    durationMonths: 3,
    heroImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
          items:[
  "Fundamentals of cloud computing",
  "Difference between traditional IT and cloud systems",
  "Cloud service models like IaaS, PaaS, and SaaS",
  "Deploying servers and applications in the cloud",
  "Cloud storage and networking basics",
  "Identity and access management (IAM)",
  "Cloud monitoring, security, and automation",
  "Designing real-world cloud architectures"
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
  "Designing scalable cloud architectures"
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
  "Access to cloud learning resources"
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
              id: "01",
              title: "Cloud Basics",
              lectures: [
                {
                  num: 1,
                  title: "Introduction to Cloud Computing",
                  desc: "Understand cloud computing concepts and the difference between traditional IT infrastructure and cloud systems."
                },
                {
                  num: 2,
                  title: "Cloud Service Models (IaaS)",
                  desc: "Learn the fundamentals of Infrastructure as a Service and explore real-world examples."
                },
                {
                  num: 3,
                  title: "PaaS, SaaS & Deployment Models",
                  desc: "Understand Platform as a Service, Software as a Service, and cloud deployment models."
                },
                {
                  num: 4,
                  title: "Cloud Providers & Pricing",
                  desc: "Explore major cloud providers, regions, and billing dashboards."
                }
              ]
            },
            {
              id: "02",
              title: "Core Cloud Services",
              lectures: [
                {
                  num: 5,
                  title: "Compute Services",
                  desc: "Launch virtual machines and connect to them using SSH."
                },
                {
                  num: 6,
                  title: "Cloud Storage",
                  desc: "Understand object, block, and file storage while hosting a static website."
                },
                {
                  num: 7,
                  title: "Cloud Networking",
                  desc: "Learn about VPC, subnets, and load balancers."
                },
                {
                  num: 8,
                  title: "Identity & Access Management",
                  desc: "Create users, roles, and manage cloud access permissions."
                }
              ]
            },
            {
              id: "03",
              title: "Administration & DevOps",
              lectures: [
                {
                  num: 9,
                  title: "Monitoring & Logging",
                  desc: "Monitor cloud systems and configure alerts."
                },
                {
                  num: 10,
                  title: "Backup & Security",
                  desc: "Understand cloud security basics and configure backup policies."
                },
                {
                  num: 11,
                  title: "Containers & Serverless",
                  desc: "Learn container deployment and serverless computing concepts."
                },
                {
                  num: 12,
                  title: "CI/CD Fundamentals",
                  desc: "Understand Continuous Integration and Continuous Deployment concepts."
                },
                {
                  num: 13,
                  title: "CI/CD Pipeline",
                  desc: "Build a simple automated deployment pipeline."
                }
              ]
            },
            {
              id: "04",
              title: "Projects & Cloud Architecture",
              lectures: [
                {
                  num: 14,
                  title: "Cloud Architecture Design",
                  desc: "Design scalable cloud infrastructure diagrams."
                },
                {
                  num: 15,
                  title: "High Availability & Cost Optimization",
                  desc: "Learn how to design cost-efficient and highly available systems."
                },
                {
                  num: 16,
                  title: "Migration & Security Best Practices",
                  desc: "Understand how organizations migrate applications to the cloud."
                },
                {
                  num: 17,
                  title: "Capstone Project",
                  desc: "Deploy a 3-tier cloud application architecture."
                }
              ]
            }
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
        { num: 1, title: "Cloud Console Exploration", desc: "Explore cloud platform dashboards." },
        { num: 2, title: "Virtual Machine Deployment", desc: "Launch and manage cloud servers." },
        { num: 3, title: "Static Website Hosting", desc: "Host a website using cloud storage." },
        { num: 4, title: "Networking Configuration", desc: "Create VPCs and subnets." },
        { num: 5, title: "IAM Security Setup", desc: "Configure user roles and permissions." },
        { num: 6, title: "Monitoring Setup", desc: "Create alerts for cloud services." },
        { num: 7, title: "CI/CD Pipeline Demo", desc: "Build a simple automated deployment pipeline." },
        { num: 8, title: "Cloud Cost Optimization", desc: "Analyze cloud pricing and cost strategies." },
        { num: 9, title: "Cloud Migration Case Study", desc: "Plan migration of an application to the cloud." },
        { num: 10, title: "Final Cloud Architecture Project", desc: "Deploy a 3-tier cloud application architecture." }
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
  }
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
  }
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
    subtitle: "Build Strong Programming Skills",
    description:
      "Students learn how to code using C++, build logical thinking, and create real-world applications through structured learning and hands-on practice.",
    grade: "9-12",
    lessons: 27,
    activities: "40+",
    durationMonths: 3-4,
    heroImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
          items:[
  "Fundamentals of programming using C++",
  "C++ syntax and program structure",
  "Variables, data types, and operators",
  "Conditional statements and logic building",
  "Loops and problem-solving techniques",
  "Functions (methods) and reusable code",
  "Arrays and string handling",
  "Object-Oriented Programming (OOP) concepts",
  "Debugging and error handling"
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
  "Strong foundation for software development"
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
    id: "01",
    title: "Cloud Basics",
    lectures: [
      {
        num: 1,
        title: "Introduction to Cloud Computing",
        desc: "Understand cloud computing concepts and the difference between traditional IT infrastructure and cloud systems."
      },
      {
        num: 2,
        title: "Cloud Service Models (IaaS)",
        desc: "Learn the fundamentals of Infrastructure as a Service and explore real-world examples."
      },
      {
        num: 3,
        title: "PaaS, SaaS & Deployment Models",
        desc: "Understand Platform as a Service, Software as a Service, and cloud deployment models."
      },
      {
        num: 4,
        title: "Cloud Providers & Pricing",
        desc: "Explore major cloud providers, regions, and billing dashboards."
      }
    ]
  },
  {
    id: "02",
    title: "Core Cloud Services",
    lectures: [
      {
        num: 5,
        title: "Compute Services",
        desc: "Launch virtual machines and connect to them using SSH."
      },
      {
        num: 6,
        title: "Cloud Storage",
        desc: "Understand object, block, and file storage while hosting a static website."
      },
      {
        num: 7,
        title: "Cloud Networking",
        desc: "Learn about VPC, subnets, and load balancers."
      },
      {
        num: 8,
        title: "Identity & Access Management",
        desc: "Create users, roles, and manage cloud access permissions."
      }
    ]
  },
  {
    id: "03",
    title: "Administration & DevOps",
    lectures: [
      {
        num: 9,
        title: "Monitoring & Logging",
        desc: "Monitor cloud systems and configure alerts."
      },
      {
        num: 10,
        title: "Backup & Security",
        desc: "Understand cloud security basics and configure backup policies."
      },
      {
        num: 11,
        title: "Containers & Serverless",
        desc: "Learn container deployment and serverless computing concepts."
      },
      {
        num: 12,
        title: "CI/CD Fundamentals",
        desc: "Understand Continuous Integration and Continuous Deployment concepts."
      },
      {
        num: 13,
        title: "CI/CD Pipeline",
        desc: "Build a simple automated deployment pipeline."
      }
    ]
  },
  {
    id: "04",
    title: "Projects & Cloud Architecture",
    lectures: [
      {
        num: 14,
        title: "Cloud Architecture Design",
        desc: "Design scalable cloud infrastructure diagrams."
      },
      {
        num: 15,
        title: "High Availability & Cost Optimization",
        desc: "Learn how to design cost-efficient and highly available systems."
      },
      {
        num: 16,
        title: "Migration & Security Best Practices",
        desc: "Understand how organizations migrate applications to the cloud."
      },
      {
        num: 17,
        title: "Capstone Project",
        desc: "Deploy a 3-tier cloud application architecture."
      }
    ]
  }
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
  { num: 1, title: "C++ Basics Practice", desc: "Write simple programs to understand syntax, input-output, and variables." },
  { num: 2, title: "Calculator Application", desc: "Build a calculator using operators and conditional logic." },
  { num: 3, title: "Number Guessing Game", desc: "Create an interactive game using loops and logic." },
  { num: 4, title: "Student Management System", desc: "Store and manage student data using arrays and basic operations." },
  { num: 5, title: "Pattern Generator Program", desc: "Generate different patterns using loops to improve logic." },
  { num: 6, title: "Matrix Operations Program", desc: "Perform operations on 2D arrays like addition and multiplication." },
  { num: 7, title: "String Utility Tool", desc: "Perform operations like reverse, palindrome check, and formatting." },
  { num: 8, title: "File Handling Project", desc: "Read and write data using files in C++." },
  { num: 9, title: "Simple Login System", desc: "Create a basic login system using conditions and validation." },
  { num: 10, title: "Quiz Game Application", desc: "Build a quiz game with score tracking and user interaction." }
],
    },

    certificate: {
      heading: "Program Certificate & Learning Recognition",
      description:
        "Students who successfully complete the C++ Programming Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
  }
],

    faqs: [
  {
    q: "Who is this course for?",
    a: "Students of Grade 9–12 interested in learning programming.",
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
    q: "Is C++ useful?",
    a: "Yes, widely used in app development and enterprise systems.",
  }
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
    subtitle: "Power Websites from Behind the Scenes",
    description:
      "A hands-on backend development program where students learn to build APIs, manage databases, implement authentication, and deploy real-world applications using Node.js, Express, and MongoDB.",
    grade: "8-12",
    lessons: 32,
    activities: "60+",
    durationMonths: 4,
    heroImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
        { icon: "📅", label: "4-5-Month Structured Learning Program" },
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
        {
          id: "05",
          title: "Artificial Intelligence",
          lectures: [
            {
              num: 32,
              title: " Deep Learning Introduction",
              desc: "Understand neural networks and perceptrons.",
            },
            {
              num: 33,
              title: " Deep Learning Fundamentals",
              desc: "Explore deep learning concepts and applications.",
            },
            {
              num: 34,
              title: "ANN and CNN",
              desc: "Understand artificial neural networks and convolutional neural networks.",
            },
            {
              num: 35,
              title: "RNN, LSTM, GRU",
              desc: "Learn sequence models and time-series analysis.",
            },
            {
              num: 36,
              title: "NLP Basics",
              desc: "Understand natural language processing.",
            },
            {
              num: 37,
              title: "Text Classification",
              desc: "Build models to classify text data.",
            },
            {
              num: 38,
              title: "NLP Project",
              desc: "Perform sentiment analysis on text data.",
            },
          ],
        },
        {
          id: "06",
          title: "Final Capstone Project",
          lectures: [
            {
              num: 39,
              title: "Project Planning",
              desc: "Select datasets and design the final AI project.",
            },
            {
              num: 40,
              title: "Final Capstone Project",
              desc: "Build and present an AI-based project such as a sentiment analysis dashboard.",
            },
          ],
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
  { num: 1, title: "Basic Node.js Server", desc: "Create a simple server using Node.js and handle HTTP requests." },
  { num: 2, title: "File System Manager", desc: "Build a project to read, write, and manage files using Node.js." },
  { num: 3, title: "Express API Starter", desc: "Create basic APIs using Express framework." },
  { num: 4, title: "Student Management API", desc: "Build a REST API to manage student data with CRUD operations." },
  { num: 5, title: "MongoDB CRUD Application", desc: "Develop an application to perform database operations using MongoDB." },
  { num: 6, title: "User Authentication System", desc: "Implement login and registration system with secure authentication." },
  { num: 7, title: "JWT Secure API", desc: "Protect APIs using JWT-based authentication and authorization." },
  { num: 8, title: "File Upload System", desc: "Create backend functionality to upload and manage files." },
  { num: 9, title: "Frontend-Backend Integration", desc: "Connect frontend application with backend APIs." },
  { num: 10, title: "Final Backend Application", desc: "Design, build, and deploy a complete backend system with APIs, database, and authentication." },
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
    a: "The program is designed for students aged 15–22 years. It is suitable for beginners as well as students who want to explore backend development.",
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
  }
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
];

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug) || null;
}