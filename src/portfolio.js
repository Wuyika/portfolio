/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {
  FlutterIcon,
  AndroidIcon,
  IOSAppleIcon,
  SwiftIcon,
  FirebaseIcon,
  KotlinIcon,
  GitHubIcon,
  CodemagicIcon,
  DartIcon,
  GitLabIcon
} from "./assets/icons/icons";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Wuyika Serge Kevin",
  title: "Hello, I'm Kevin",
  subTitle: emoji(
    "Results-oriented Mobile Software Engineer with over 4 years of experience developinghigh-performance iOS and Android applications using Flutter. Passionate about leveragingtechnology to solve real-world problems and enhance user satisfaction."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Wuyika",
  linkedin: "https://www.linkedin.com/in/wuyika-serge-kevin/",
  gmail: "kevinwuyika@gmail.com",
  gitlab: "https://gitlab.com/Wuyika",
  twitter: "https://x.com/sergekevin11",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Mobile Software Engineer with expertise in Flutter",
  skills: [
    emoji(
      "⚡ Building responsive and performant mobile applications using Flutter"
    ),
    emoji("⚡ Implementing state management solutions like BLOC and Riverpod"),
    emoji(
      "⚡ Integrating RESTful APIs and third-party libraries for enhanced functionality"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  // <FlutterIcon width={50} height={50} />
  //             <DartIcon width={50} height={50} />
  //             <AndroidIcon width={50} height={50} />
  //             <KotlinIcon width={50} height={50} />
  //             <CodemagicIcon width={50} height={50} />
  //             <FirebaseIcon width={50} height={50} />
  //             <SwiftIcon width={50} height={50} />
  //             <GitHubIcon width={50} height={50} />
  //             <GitLabIcon width={50} height={50} />
  softwareSkills: [
    {
      skillName: "Flutter",
      icon: <FlutterIcon width={50} height={50} />
    },
    {
      skillName: "Dart",
      icon: <DartIcon width={50} height={50} />
    },
    {
      skillName: "Android",
      icon: <AndroidIcon width={50} height={50} />
    },
    {
      skillName: "iOS",
      icon: <IOSAppleIcon width={50} height={50} />
    },
    {
      skillName: "Kotlin",
      icon: <KotlinIcon width={50} height={50} />
    },
    {
      skillName: "Swift",
      icon: <SwiftIcon width={50} height={50} />
    },
    {
      skillName: "GitHub",
      icon: <GitHubIcon width={50} height={50} />
    },
    {
      skillName: "GitLab",
      icon: <GitLabIcon width={50} height={50} />
    },
    {
      skillName: "Firebase",
      icon: <FirebaseIcon width={50} height={50} />
    },
    {
      skillName: "Codemagic",
      icon: <CodemagicIcon width={50} height={50} />
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Buea",
      logo: require("./assets/images/buea.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "October 2018 - June 2022",
      desc: "Graduated with Honours. Specialized in Mobile Application Development and Software Engineering Principles.",
      descBullets: [
        "Applied strong understanding of software development life cycles (SDLC) and agile methodologies.",
        "Developed mobile applications as part of coursework and personal projects.",
        "Participated in hackathons and coding competitions."
      ]
    },
    {
      schoolName: "Imagine Foundation e.V.",
      logo: require("./assets/images/imagine.png"),
      subHeader: "Career Coaching and Development Program",
      duration: "December 2024 - April 2025",
      desc: "A program designed to equip international tech professionals with the skills to improve job applications, gain market insights, prepare for interviews, and receive personalized coaching to boost job opportunities abroad.",
      descBullets: [
        "Gained insights into international job markets and hiring practices.",
        "Enhanced job application materials and interview skills through personalized coaching.",
        "Developed a strong professional network with peers and mentors in the tech industry."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "90%"
    },
    {
      Stack: "Dart",
      progressPercentage: "90%"
    },
    {
      Stack: "Android Development",
      progressPercentage: "75%"
    },
    {
      Stack: "State Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Kotlin Multiplatform with Compose",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Engineer",
      company: "WhileSmart",
      companylogo: require("./assets/images/whilesmart.png"),
      date: "Sep 2024 – Present",
      desc: ""
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Mobile Software Engineer",
      company: "Camsol Services GmbH",
      companylogo: require("./assets/images/camsol.png"),
      date: "Aug 2022 – Mar 2025",
      desc: "Developed and maintained high-performance mobile applications using Flutter, ensuring optimal user experience and performance.",
      descBullets: [
        "Configured CI/CD pipelines in Codemagic for automated testing, build optimization, and deployment of test APKs, enhancing workflow efficiency and reliability.",
        "Developed and implemented pixel-perfect UIs from Figma designs using Flutter, achieving 100% accuracy in UI testing with zero reported discrepancies.",
        "Implemented efficient state management and code optimization using the Flutter BLoC pattern, enhancing user engagement and interactivity by 40% through improved performance and responsiveness.",
        "Implemented a custom calendar view for users to view tasks for the highlighted week."
      ]
    },
    {
      role: "Software Engineer",
      company: "Zinger Systems Ltd",
      companylogo: require("./assets/images/zinger.png"),
      date: "Aug 2021 – Sep 2024",
      desc: "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gasvisor.png"),
      projectName: "GasVisor",
      projectDesc:
        "With our IoT & PropTech solution GasVisor, we are digitalising the gas market, because with the help of our Ki-based to-do list, users can change gas cylinders ahead of idle running for the first time and reorder them automatically based on consumption. \nWith GasVisor, the future of gas management is here!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gasvisor.eu/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Meta Android/iOS Developer",
      subtitle:
        "Completed Meta's Android/iOS Developer Professional Certificate",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+237-653548653",
  email_address: "kevinwuyika@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sergekevin11", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
