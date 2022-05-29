// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Thapani",
  middleName: "",
  lastName: "Sawaengsri",
  message: "Application developer by profession. Educator at heart.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tsaw8",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/thapanisawaengsri/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/thapani_profile.jpg"),
  imageSize: 375,
  message:
    "My name is Thapani Sawaengsri and I am a self-taught developer. Driven by curiosoity and seeking to make a positive impact, I enjoy creating software that eases challenges people face on a daily basis. I am also passionate about data science and volunteering. In my spare time, I mentor high school girls to get them excited about STEM.",
  resume: "https://docs.google.com/document/d/18S83ETa6-98fYK2OGtNs_Sm7uataYOVot_hr-wTXs8A/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tsaw8", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: [
    "Twitter_Bot_Classifier",
    "Product_Recommender",
    "House-Price-Predictor"
  ],
};

// Leadership SECTION
//const leadership = {
  //show: false,
  //heading: "Leadership",
 // message:
  //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
 // images: [
  //  { 
  //    img: require("../editable-stuff/hashirshoaeb.png"), 
  //    label: "First slide label", 
 //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
 //   },
 //   { 
 //     img: require("../editable-stuff/hashirshoaeb.png"), 
 //     label: "Second slide label", 
 //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
 //  },
 // ],
 // imageSize: {
 //   width:"615",
//    height:"450"
 // }
//};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Appian SAIL", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 70 },
    { name: "Python", value: 70 },
    { name: "Java", value: 50 },
    { name: "HTML/CSS", value:65 },
    { name: "JavaScript", value: 50 },
    { name: "Django", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 70 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 85 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Data Science opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "thapani.sawaengsri@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Application Developer',// Here Add Company Name
      companylogo: require('../assets/img/Bull-U.png'),
      date: 'December 2019 – Present',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills,  getInTouch, experiences };
