
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "ORB3GOZO",
  title: "Hi all, I'm Iñigo",
  subTitle: emoji("Master's student in telecommunications engineering with great passion for technology and interested in developing my career in the telecom sector"),
  resumeLink: "https://drive.google.com/file/d/1g8HQsq83sd89f635CYzoec6ho2Yjaa7d/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/i97orbegozo",
  linkedin: "https://www.linkedin.com/in/i%C3%B1igo-orbegozo-torrano/",
  instagram: "https://www.instagram.com/orb3gozo/",
  mail: "orb3gozo@protonmail.com"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "DURING THESE LAST YEARS I HAVE USED VARIOUS TOOLS FOR DIFFERENT PROJECTS RELATED TO THE WORLD OF TELECOMMUNICATIONS AND INFORMATION TECHNOLOGIES.",
  skills: [
    emoji("⚡ These are some of the main programming languages and tools that I have used"),
    emoji("⚡ Other tools: Microsoft Office, Latex, Photoshop, Unity ...")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Universidad Pública de Navarra",
      logo: require("./assets/images/upnaLogo.png"),
      subHeader: "Master's Degree in Telecommunications Engineering",
      duration: "September 2019 - June 2021",
      schooleRef: "http://www.unavarra.es/home",
      courseRef: "http://www.unavarra.es/en/sites/masteres/informatica-y-telecomunicacion/ingenieria-telecomunicacion/presentacion.html",
      desc: "",
      descBullets: [
        "Specialized in Advance Communications"
      ]
    },
    {
      schoolName: "Universidad Pública de Navarra",
      logo: require("./assets/images/upnaLogo.png"),
      subHeader: "Bachelor's degree in Telecommunications Engineering",
      duration: "September 2015 - June 2019",
      schooleRef: "http://www.unavarra.es/home",
      courseRef: "http://www.unavarra.es/en/sites/grados/informatica-y-telecomunicacion/ingenieria-telecomunicacion/plan-de-estudios.html",
      desc: "",
      descBullets: [
        "Mention in Telecommunications Systems",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Network engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Planning and development of networks, equipment and services",
      progressPercentage: "50%"
    },
    {
      Stack: "Hardware Simulation & Design",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Schoolarship",
      company: "Universidad Pública de Navarra",
      companylogo: require("./assets/images/upnaLogo.png"),
      date: "November 2019 – May 2020",
      desc: "Collaboration in a Laser Scalpels project in the Fiber Optic Sensors Research Group",
      descBullets: [
        "Bibliographic research on laser scalpels and fiber structures",
        "Simulations and analysis of fiber optic structures with FIMMWAVE and Matlab"
      ]
    },
    {
      role: "Erasmus+ Student",
      company: "Warsaw University of Technology",
      companylogo: require("./assets/images/wutLogo.png"),
      date: "February 2017 – June 2018",
      desc: "Erasmus+ exchange student for 6 months at the Faculty of Electronics and Information Technology of the Warsaw University of Technology",
      descBullets: [
        "Bachelor's thesis carried out during the stay. Thesis: \"Anonymization and other techniques in Internet of Things devices networks based on MQTT protocol\""
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "i97orbegozo", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};



// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Other Stuff 🏆 "),
  subtitle: "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Check out my Art portfolio",
      subtitle: "I upload some of my drawings, illustrations and photos to this portfolio. I usually do this stuff during my free time as a hobby. I hope do you like it.",
      image: require("./assets/images/ownLogo.png"),
      imageDark: require("./assets/images/ownLogo.png"),
      footerLink: [
        { name: "Art Portfolio", url: "https://www.i97orbegozo.portfoliobox.io" }
      ]
    },
    {
      title: "Character Design for Animation",
      subtitle: "In 2015 I did this summer short course at the University of the Arts of London. It was about how to create unique and interesting characters for animators to bring to life.",
      image: require("./assets/images/ualLogo.png"),
      imageDark: require("./assets/images/ualLogoDark.png"),
      footerLink: [
        { name: "Summer short course link", url: "https://www.arts.ac.uk/subjects/animation-interactive-film-and-sound/short-courses/animation/character-design-for-animation-csm" }
      ]
    },
    {
      title: "Ruta Quetzal 2013",
      subtitle: "The Ruta Quetzal was an educational and cultural exchange program for young people led by the adventurer Miguel de la Quadra Salcedo, whose objective was to consolidate the foundations of the Ibero-American Community of Nations among the youth of all Spanish-speaking countries",
      image: require("./assets/images/rutaQuetzal.png"),
      imageDark: require("./assets/images/rutaQuetzalDark.png"),
      footerLink: [
        { name: "Ruta Quetzal", url: "http://www.rutaquetzal.com/#home" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "",

  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "FOR MORE INFO YOU CAN CONTACT ME AT .",
  email_address: "orb3gozo@protonmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, achievementSection, blogSection, contactInfo };
