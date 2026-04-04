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
];

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug) || null;
}