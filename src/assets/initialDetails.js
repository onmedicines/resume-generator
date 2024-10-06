const initialIntro = "Passionate and detail-oriented web developer with a strong foundation in front-end and back-end technologies. Experienced in creating responsive, user-friendly websites and applications. Dedicated to continuous learning and delivering innovative, efficient digital solutions.";
const initialPersonalDetails = {
  fullName: "James Taylor",
  github: "github.com/jamestaylor",
  linkedin: "linkedin.com/in/james-taylor-dev",
  email: "jamestaylor.dev@gmail.com",
  phoneNumber: 9876543210,
  cityAndCountry: "Toronto, Canada",
};

const initialEducationDetails = [
  {
    id: 0,
    institute: "University of Toronto",
    qualification: "Bachelors of Computer Science",
    start: "2018",
    end: "2022",
    location: "Toronto, Ontario",
  },
  {
    id: 1,
    institute: "McGill University",
    qualification: "Master of Computer Science",
    start: "2023",
    end: "2025",
    location: "Montreal, Quebec",
  },
];

const initialSkillSet = ["HTML", "CSS", "JavaScript", "React", "Node.js", "GraphQL"];

const initialProjects = [
  {
    id: 462389101,
    projectName: "Task Management App",
    technologiesUsed: ["React", "Node.js", "MongoDB", "GraphQL"],
    description: "Developed a robust task management application that enables users to create, assign, and track tasks with ease. The app allows real-time collaboration, ensuring team members are notified of task updates. Built with a responsive UI using React, the app features a drag-and-drop interface for task assignment. Integration with MongoDB and GraphQL allows for efficient querying and data management, making the app highly scalable and performance-efficient. The app includes custom notifications, user roles, and a comprehensive dashboard for tracking task progress.",
    start: "January 2024",
    end: "March 2024",
  },
  {
    id: 562342999,
    projectName: "Personal Blog Website",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Created a responsive personal blog platform where users can publish, edit, and delete their own articles. The project includes a fully-fledged content management system (CMS) for users to manage their blog posts effortlessly. The front-end was built using React for a seamless user experience, while custom JavaScript logic handles functionalities such as comment moderation, likes, and article categorization. The website supports multiple languages and implements SEO best practices to increase visibility on search engines. The project focuses on clean, maintainable code and user-friendly design.",
    start: "April 2024",
    end: "May 2024",
  },
  {
    id: 987654321,
    projectName: "E-commerce Platform",
    technologiesUsed: ["React", "Express.js", "PostgreSQL", "Node.js"],
    description:
      "Developed a feature-rich e-commerce platform that supports a complete end-to-end shopping experience. The platform allows users to browse through a variety of products, add them to a shopping cart, and proceed through a secure checkout process. Built with React on the front-end and Node.js with Express on the back-end, the platform includes features like user authentication, payment integration with Stripe, and a highly optimized PostgreSQL database for managing product inventories. The system is designed to handle high traffic with efficient database queries and responsive UI components for mobile and desktop users.",
    start: "June 2024",
    end: "August 2024",
  },
];

export { initialIntro, initialEducationDetails, initialPersonalDetails, initialSkillSet, initialProjects };
