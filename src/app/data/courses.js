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
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
    durationMonths: 3 - 4,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
          id: "01",
          title: "Cloud Basics",
          lectures: [
            {
              num: 1,
              title: "Introduction to Cloud Computing",
              desc: "Understand cloud computing concepts and the difference between traditional IT infrastructure and cloud systems.",
            },
            {
              num: 2,
              title: "Cloud Service Models (IaaS)",
              desc: "Learn the fundamentals of Infrastructure as a Service and explore real-world examples.",
            },
            {
              num: 3,
              title: "PaaS, SaaS & Deployment Models",
              desc: "Understand Platform as a Service, Software as a Service, and cloud deployment models.",
            },
            {
              num: 4,
              title: "Cloud Providers & Pricing",
              desc: "Explore major cloud providers, regions, and billing dashboards.",
            },
          ],
        },
        {
          id: "02",
          title: "Core Cloud Services",
          lectures: [
            {
              num: 5,
              title: "Compute Services",
              desc: "Launch virtual machines and connect to them using SSH.",
            },
            {
              num: 6,
              title: "Cloud Storage",
              desc: "Understand object, block, and file storage while hosting a static website.",
            },
            {
              num: 7,
              title: "Cloud Networking",
              desc: "Learn about VPC, subnets, and load balancers.",
            },
            {
              num: 8,
              title: "Identity & Access Management",
              desc: "Create users, roles, and manage cloud access permissions.",
            },
          ],
        },
        {
          id: "03",
          title: "Administration & DevOps",
          lectures: [
            {
              num: 9,
              title: "Monitoring & Logging",
              desc: "Monitor cloud systems and configure alerts.",
            },
            {
              num: 10,
              title: "Backup & Security",
              desc: "Understand cloud security basics and configure backup policies.",
            },
            {
              num: 11,
              title: "Containers & Serverless",
              desc: "Learn container deployment and serverless computing concepts.",
            },
            {
              num: 12,
              title: "CI/CD Fundamentals",
              desc: "Understand Continuous Integration and Continuous Deployment concepts.",
            },
            {
              num: 13,
              title: "CI/CD Pipeline",
              desc: "Build a simple automated deployment pipeline.",
            },
          ],
        },
        {
          id: "04",
          title: "Projects & Cloud Architecture",
          lectures: [
            {
              num: 14,
              title: "Cloud Architecture Design",
              desc: "Design scalable cloud infrastructure diagrams.",
            },
            {
              num: 15,
              title: "High Availability & Cost Optimization",
              desc: "Learn how to design cost-efficient and highly available systems.",
            },
            {
              num: 16,
              title: "Migration & Security Best Practices",
              desc: "Understand how organizations migrate applications to the cloud.",
            },
            {
              num: 17,
              title: "Capstone Project",
              desc: "Deploy a 3-tier cloud application architecture.",
            },
          ],
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
    subtitle: "Build Strong Programming Skills",
    description:
      "Students learn how to code using C++, build logical thinking, and create real-world applications through structured learning and hands-on practice.",
    grade: "9-12",
    lessons: 27,
    activities: "40+",
    durationMonths: 3 - 4,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
          id: "01",
          title: "Cloud Basics",
          lectures: [
            {
              num: 1,
              title: "Introduction to Cloud Computing",
              desc: "Understand cloud computing concepts and the difference between traditional IT infrastructure and cloud systems.",
            },
            {
              num: 2,
              title: "Cloud Service Models (IaaS)",
              desc: "Learn the fundamentals of Infrastructure as a Service and explore real-world examples.",
            },
            {
              num: 3,
              title: "PaaS, SaaS & Deployment Models",
              desc: "Understand Platform as a Service, Software as a Service, and cloud deployment models.",
            },
            {
              num: 4,
              title: "Cloud Providers & Pricing",
              desc: "Explore major cloud providers, regions, and billing dashboards.",
            },
          ],
        },
        {
          id: "02",
          title: "Core Cloud Services",
          lectures: [
            {
              num: 5,
              title: "Compute Services",
              desc: "Launch virtual machines and connect to them using SSH.",
            },
            {
              num: 6,
              title: "Cloud Storage",
              desc: "Understand object, block, and file storage while hosting a static website.",
            },
            {
              num: 7,
              title: "Cloud Networking",
              desc: "Learn about VPC, subnets, and load balancers.",
            },
            {
              num: 8,
              title: "Identity & Access Management",
              desc: "Create users, roles, and manage cloud access permissions.",
            },
          ],
        },
        {
          id: "03",
          title: "Administration & DevOps",
          lectures: [
            {
              num: 9,
              title: "Monitoring & Logging",
              desc: "Monitor cloud systems and configure alerts.",
            },
            {
              num: 10,
              title: "Backup & Security",
              desc: "Understand cloud security basics and configure backup policies.",
            },
            {
              num: 11,
              title: "Containers & Serverless",
              desc: "Learn container deployment and serverless computing concepts.",
            },
            {
              num: 12,
              title: "CI/CD Fundamentals",
              desc: "Understand Continuous Integration and Continuous Deployment concepts.",
            },
            {
              num: 13,
              title: "CI/CD Pipeline",
              desc: "Build a simple automated deployment pipeline.",
            },
          ],
        },
        {
          id: "04",
          title: "Projects & Cloud Architecture",
          lectures: [
            {
              num: 14,
              title: "Cloud Architecture Design",
              desc: "Design scalable cloud infrastructure diagrams.",
            },
            {
              num: 15,
              title: "High Availability & Cost Optimization",
              desc: "Learn how to design cost-efficient and highly available systems.",
            },
            {
              num: 16,
              title: "Migration & Security Best Practices",
              desc: "Understand how organizations migrate applications to the cloud.",
            },
            {
              num: 17,
              title: "Capstone Project",
              desc: "Deploy a 3-tier cloud application architecture.",
            },
          ],
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
      },
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
    subtitle: "Power Websites from Behind the Scenes",
    description:
      "A hands-on backend development program where students learn to build APIs, manage databases, implement authentication, and deploy real-world applications using Node.js, Express, and MongoDB.",
    grade: "8-12",
    lessons: 32,
    activities: "60+",
    durationMonths: 4,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
    subtitle: "Become a Digital Protector",
    description:
      "Students learn how hackers think, how cyber attacks work, and how to protect systems, networks, and online accounts.",
    grade: "8-12",
    lessons: 21,
    activities: "50+",
    durationMonths: 3,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
          id: "01",
          title: "Cyber Awareness & Digital Safety",
          lectures: [
            {
              num: 1,
              title: "Introduction to Cyber Security",
              desc: "Understand the importance of cyber security and explore real-world cyber incidents.",
            },
            {
              num: 2,
              title: "Cyber Threats",
              desc: "Learn about malware, phishing, and social engineering attacks.",
            },
            {
              num: 3,
              title: "Digital Footprint",
              desc: "Understand how online activity leaves digital traces and how to protect privacy.",
            },
            {
              num: 4,
              title: "Safe Browsing",
              desc: "Learn secure browsing practices and safe downloads.",
            },
            {
              num: 5,
              title: "Social Media Safety",
              desc: "Identify risks of oversharing and detect fake profiles.",
            },
            {
              num: 6,
              title: "Cyber Laws",
              desc: "Understand legal aspects of cyber security and online behavior.",
            },
          ],
        },
        {
          id: "02",
          title: "Cyber Security Fundamentals",
          lectures: [
            {
              num: 7,
              title: "Networking Fundamentals",
              desc: "Learn about network devices and how networks operate.",
            },
            {
              num: 8,
              title: "Internet Communication",
              desc: "Understand IP, DNS, HTTP, and network ports.",
            },
            {
              num: 9,
              title: "Operating Systems Security",
              desc: "Explore the role of operating systems in cyber security.",
            },
            {
              num: 10,
              title: "Linux Basics",
              desc: "Learn basic Linux commands and terminal usage.",
            },
            {
              num: 11,
              title: "Cryptography Basics",
              desc: "Understand encryption and how data is protected.",
            },
            {
              num: 12,
              title: "Encryption vs Hashing",
              desc: "Learn differences between encryption and hashing techniques.",
            },
            {
              num: 13,
              title: "CIA Triad",
              desc: "Understand the core principles of cyber security: Confidentiality, Integrity, and Availability.",
            },
            {
              num: 14,
              title: "Risk and Vulnerabilities",
              desc: "Identify system weaknesses and potential risks.",
            },
          ],
        },
        {
          id: "03",
          title: "Ethical Hacking & Security Tools",
          lectures: [
            {
              num: 15,
              title: "Ethical Hacking Lifecycle",
              desc: "Understand the steps used in ethical hacking from reconnaissance to reporting.",
            },
            {
              num: 16,
              title: "Footprinting",
              desc: "Learn information gathering techniques.",
            },
            {
              num: 17,
              title: "Network Scanning",
              desc: "Understand port scanning and network discovery.",
            },
            {
              num: 18,
              title: "Vulnerability Assessment",
              desc: "Identify weaknesses in systems and networks.",
            },
            {
              num: 19,
              title: "Web Security",
              desc: "Explore common web vulnerabilities and security practices.",
            },
            {
              num: 20,
              title: "SQL Injection",
              desc: "Understand injection attacks and prevention techniques.",
            },
            {
              num: 21,
              title: "Cross-Site Scripting (XSS)",
              desc: "Learn about browser-based attacks and protection methods.",
            },
            {
              num: 22,
              title: "Wireless Security",
              desc: "Understand Wi-Fi security risks and protection techniques.",
            },
            {
              num: 23,
              title: "Social Engineering",
              desc: "Learn how attackers manipulate human behavior.",
            },
          ],
        },
        {
          id: "04",
          title: "Cyber Range & Real-World Practice",
          lectures: [
            {
              num: 24,
              title: "Capture The Flag (CTF) Challenges",
              desc: "Solve cybersecurity puzzles and hands-on security labs.",
            },
            {
              num: 25,
              title: "Incident Response",
              desc: "Understand steps taken after a cyber attack.",
            },
            {
              num: 26,
              title: "Log Analysis",
              desc: "Analyze security logs to identify suspicious activities.",
            },
            {
              num: 27,
              title: "Threat Hunting",
              desc: "Learn proactive techniques to detect cyber threats.",
            },
            {
              num: 28,
              title: "Secure Configuration",
              desc: "Understand system hardening and secure setup.",
            },
            {
              num: 29,
              title: "SOC Workflow",
              desc: "Learn how Security Operations Centers monitor threats.",
            },
            {
              num: 30,
              title: "Capstone Project",
              desc: "Perform a security audit and present a cybersecurity defense plan.",
            },
          ],
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
        "Students who successfully complete the Cyber Security Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
        a: "The course duration is 3 months with 30 live lectures.",
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
    subtitle: "Learn Data Analytics the Fun Way",
    description:
      "Students learn how to analyze data, discover insights, and create dashboards using Excel, Python, SQL, and Power BI.",
    grade: "8-12",
    lessons: 27,
    activities: "50+",
    durationMonths: 3 - 4,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
          id: "01",
          title: "Data Literacy",
          lectures: [
            {
              num: 1,
              title: "What is Data?",
              desc: "Understand what data is, explore different types of data, and identify examples of data in daily life.",
            },
            {
              num: 2,
              title: "Data Around Us",
              desc: "Explore how data is used in social media, sports, business, and everyday applications.",
            },
            {
              num: 3,
              title: "Data vs Information",
              desc: "Understand the difference between raw data and meaningful insights.",
            },
            {
              num: 4,
              title: "Descriptive Statistics",
              desc: "Learn basic statistical concepts used to summarize data.",
            },
            {
              num: 5,
              title: "Dataset Understanding",
              desc: "Understand how datasets are structured and how to read data tables.",
            },
            {
              num: 6,
              title: "Mini Data Analysis Activity",
              desc: "Analyze a dataset and discuss insights in groups.",
            },
          ],
        },
        {
          id: "02",
          title: "Excel for Data Analysis",
          lectures: [
            {
              num: 7,
              title: "Excel Introduction",
              desc: "Learn the Excel interface and basic spreadsheet operations.",
            },
            {
              num: 8,
              title: "Data Entry and Formatting",
              desc: "Organize and format datasets.",
            },
            {
              num: 9,
              title: "Basic Formulas",
              desc: "Use formulas like SUM and AVERAGE to analyze data.",
            },
            {
              num: 10,
              title: "Functions and IF Statements",
              desc: "Apply functions like COUNT, MIN, MAX, and logical IF.",
            },
            {
              num: 11,
              title: "Sorting and Filtering",
              desc: "Organize and clean datasets.",
            },
            {
              num: 12,
              title: "Conditional Formatting",
              desc: "Highlight patterns and important values in datasets.",
            },
            {
              num: 13,
              title: "Data Visualization with Charts",
              desc: "Create bar charts and pie charts.",
            },
            {
              num: 14,
              title: "Pivot Tables",
              desc: "Summarize large datasets using pivot tables.",
            },
            {
              num: 15,
              title: "Mini Dashboard Creation",
              desc: "Combine charts and tables into a dashboard.",
            },
            {
              num: 16,
              title: "Excel Analysis Project",
              desc: "Create a sales analysis dashboard.",
            },
          ],
        },
        {
          id: "03",
          title: "Python for Data Analysis",
          lectures: [
            {
              num: 17,
              title: "Python Introduction",
              desc: "Learn why Python is widely used for data analysis.",
            },
            {
              num: 18,
              title: "Variables and Operators",
              desc: "Write simple programs using variables and operators.",
            },
            {
              num: 19,
              title: "Conditions",
              desc: "Build logic using if–else statements.",
            },
            {
              num: 20,
              title: "Loops",
              desc: "Automate repetitive tasks using loops.",
            },
            {
              num: 21,
              title: "Python Data Structures",
              desc: "Work with lists, dictionaries, tuples, and sets.",
            },
            {
              num: 22,
              title: "NumPy Fundamentals",
              desc: "Perform numerical operations using NumPy.",
            },
            {
              num: 23,
              title: "Pandas Introduction",
              desc: "Load and explore datasets using Pandas.",
            },
            {
              num: 24,
              title: "Data Analysis Basics",
              desc: "Analyze datasets and calculate insights.",
            },
            {
              num: 25,
              title: "Data Visualization",
              desc: "Create charts using Python libraries.",
            },
            {
              num: 26,
              title: "Python Analysis Project",
              desc: "Perform dataset analysis and present insights.",
            },
            {
              num: 27,
              title: "Data Cleaning (EDA)",
              desc: "Fix data types and prepare datasets.",
            },
            {
              num: 28,
              title: "Exploratory Data Analysis",
              desc: "Analyze patterns and feature distributions.",
            },
          ],
        },
        {
          id: "04",
          title: "SQL for Data Analysis",
          lectures: [
            {
              num: 29,
              title: "Database Concepts",
              desc: "Understand tables, rows, columns, and relational databases.",
            },
            {
              num: 30,
              title: "SQL Basics",
              desc: "Write basic SQL queries using SELECT, INSERT, DELETE, and WHERE.",
            },
            {
              num: 31,
              title: "Sorting and Aggregation",
              desc: "Use ORDER BY, COUNT, and GROUP BY.",
            },
            {
              num: 32,
              title: "SQL Joins",
              desc: "Combine multiple tables using JOIN operations.",
            },
            {
              num: 33,
              title: "SQL Dataset Practice",
              desc: "Practice queries and solve SQL challenges.",
            },
          ],
        },
        {
          id: "05",
          title: "Power BI",
          lectures: [
            {
              num: 34,
              title: "Power BI Introduction",
              desc: "Understand business intelligence and Power BI interface.",
            },
            {
              num: 35,
              title: "Importing Data",
              desc: "Load datasets from Excel into Power BI.",
            },
            {
              num: 36,
              title: "Data Visualization",
              desc: "Create charts and visualizations.",
            },
            {
              num: 37,
              title: "Filters and Interactions",
              desc: "Add filters to create interactive dashboards.",
            },
            {
              num: 38,
              title: "Dashboard Design",
              desc: "Combine multiple visuals into a dashboard.",
            },
            {
              num: 39,
              title: "Data Cleaning in Power BI",
              desc: "Transform and prepare data.",
            },
            {
              num: 40,
              title: "KPI Metrics",
              desc: "Design business metrics and indicators.",
            },
            {
              num: 41,
              title: "Dashboard Project",
              desc: "Build a complete analysis dashboard.",
            },
          ],
        },
        {
          id: "06",
          title: "Final Capstone Project",
          lectures: [
            {
              num: 42,
              title: "Dataset Selection",
              desc: "Choose a dataset and define project goals.",
            },
            {
              num: 43,
              title: "Data Cleaning",
              desc: "Prepare datasets for analysis.",
            },
            {
              num: 44,
              title: "Data Analysis",
              desc: "Analyze data using Excel and SQL.",
            },
            {
              num: 45,
              title: "Dashboard Development",
              desc: "Build a Power BI dashboard.",
            },
            {
              num: 46,
              title: "Presentation Preparation",
              desc: "Prepare and explain insights.",
            },
            {
              num: 47,
              title: "Final Project Demo",
              desc: "Present the final analysis dashboard.",
            },
          ],
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
        "Students who successfully complete the Data Analysis Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
        a: "The course duration is 4 months with 47 live lectures.",
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
        a: "Yes. Students will receive a Certificate of Completion from SkillzRevo Solutions.",
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
    subtitle:
      "Learn Generative AI & Build Smart Applications for Kids and Teens",
    description:
      "An interactive, project-based program where students explore AI, create chatbots, generate images, and build real-world applications using cutting-edge Generative AI tools.",
    grade: "8-12",
    lessons: 20,
    activities: "60+",
    durationMonths: 3 - 4,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
        "Students who successfully complete the GenAI Explorer Program will receive an official Certificate of Completion by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
        "Students who successfully complete the Artificial Intelligence & Machine Learning Foundations Program will receive an official Certificate of Completion issued by SkillzRevo Academy Junior. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
        a: "The program is designed for kids and teens aged 10–16 years. It is beginner-friendly and does not require any prior coding or technical knowledge.",
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
    subtitle: "Code Like a Pro",
    description:
      "Students learn how to code using Python, build real-world programs, and develop strong problem-solving skills through hands-on practice.",
    grade: "8-12",
    lessons: 22,
    activities: "40+",
    durationMonths: 3 - 4,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
        "The Python Programming Foundations Program is designed to introduce students to coding in a fun and practical way. Students will learn how to write programs, solve problems, and build real-world applications using Python.The course is structured into multiple modules covering programming basics, logic building, object-oriented concepts, and project development. With hands-on practice and guided sessions, students will gain confidence in coding and develop skills required for future technologies like AI and Data Science.By the end of the program, students will build their own projects and present them as a final showcase.",
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
        "Students who successfully complete the Python Programming Program will receive an official Certificate of Completion by SkillzRevo Academy Juinor. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
        a: "Students of Grade 9–12 who want to learn coding from scratch.",
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
    subtitle: "Design Websites the Fun Way",
    description:
      " A complete hands-on program where students learn how to design, develop, and deploy modern websites and applications using HTML, CSS, JavaScript, and Angular.",
    grade: "8-12",
    lessons: 35,
    activities: "70+",
    durationMonths: 5 - 6,
    heroImage:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&q=80",
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
        "Students who successfully complete the UI Creators Program will receive an official Certificate of Completion. This certificate validates their skills in UI Creators, project building, and practical implementation. This certificate recognizes the student's successful completion of the program, including participation in hands-on activities, assignments, assessments, and the final website project.",
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
];

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug) || null;
}
