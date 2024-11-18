const ARTICLE_DATA = [
  {
    title: "The Psychology of User Interfaces: How Design Choices Impact User Behavior",
    description:
      "In the digital age, user interfaces (UI) play a pivotal role in shaping our online experiences.....",
    link:
      "https://dev.to/sajeeb_me/the-psychology-of-user-interfaces-how-design-choices-impact-user-behavior-hc2",
    imageUrl:
      'https://i.ibb.co/7Cpf1bs/The-Psychology-of-User-Interfaces-How-Design-Choices-Impact-User-Behavior.png',
    type: ['article'],
  },
  {
    title: "Designing for Inclusivity: Creating Accessible Web Experiences for All",
    description:
      "In today's digital age, the internet has become an integral part of our lives, connecting people from all walks of life....",
    link:
      "https://www.linkedin.com/pulse/designing-inclusivity-creating-accessible-web-all-sajeeb-das-shuvo-6t67e?utm_source=share&utm_medium=guest_desktop&utm_campaign=copy",
    imageUrl:
      'https://i.ibb.co/kQxXX5c/Designing-for-Inclusivity-Creating-Accessible-Web-Experiences-for-All.png',
    type: ['article'],
  },
  {
    title: "Tech and Wellness: Balancing the Demands of a Full Stack Developer's Life",
    description:
      "In today's fast-paced tech industry, being a full stack developer is both rewarding and demanding...",
    link:
      'https://dev.to/sajeeb_me/tech-and-wellness-balancing-the-demands-of-a-full-stack-developers-life-342a',
    imageUrl:
      'https://i.ibb.co/983WMNs/Tech-and-Wellness-Balancing-the-Demands-of-a-Full-Stack-Developer-s-Life.png',
    type: ['article'],
  },
  {
    title: 'The Sustainable Developer: How to Reduce Your Carbon Footprint in the Tech Industry',
    description:
      "In an age dominated by technology, it's crucial for the tech industry to take responsibility for its environmental impact...",
    link:
      'https://dev.to/sajeeb_me/the-sustainable-developer-how-to-reduce-your-carbon-footprint-in-the-tech-industry-4lik',
    imageUrl:
      'https://i.ibb.co/z6zML9j/The-Sustainable-Developer-How-to-Reduce-Your-Carbon-Footprint-in-the-Tech-Industry.png',
    type: ['article'],
  },
  {
    title: 'Coding as a Language: Breaking Down Barriers for Non-Technical Stakeholders',
    description:
      'In today’s technology-driven world, coding is no longer the exclusive domain of developers...',
    link:
      'https://medium.com/@sdshuvo/coding-as-a-language-breaking-down-barriers-for-non-technical-stakeholders-4251277cfade',
    imageUrl:
      'https://i.ibb.co/Kx6tvLw/Coding-as-a-Language-Breaking-Down-Barriers-for-Non-Technical-Stakeholders.png',
    type: ['article'],
  },
  {
    title: 'The Art of Debugging: Turning Coding Challenges into Creative Problem-Solving Adventures',
    description:
      'Debugging is an art, a skill that every programmer must master on their journey towards becoming a proficient coder...',
    link:
      'https://medium.com/@sdshuvo/the-art-of-debugging-turning-coding-challenges-into-creative-problem-solving-adventures-9cb67baac50e',
    imageUrl:
      'https://i.ibb.co/q5qh535/The-Art-of-Debugging-Turning-Coding-Challenges-into-Creative-Problem-Solving-Adventures.png',
    type: ['article'],
  },
  {
    title: 'Building Empathy in Code: How to Craft User-Centric Applications',
    description:
      'In the realm of software development, there exists a fundamental but often overlooked principle...',
    link:
      'https://dev.to/sajeeb_me/building-empathy-in-code-how-to-craft-user-centric-applications-2dan',
    imageUrl:
      'https://i.ibb.co/dfPjn7Y/Building-Empathy-in-Code-How-to-Craft-User-Centric-Applications.png',
    type: ['article'],
  },
  {
    title: 'Mastering Version Control: Best Practices with Git for Development Teams',
    description:
      'Version control is the backbone of effective software development, and Git stands at the forefront...',
    link:
      'https://dev.to/sajeeb_me/mastering-version-control-best-practices-with-git-for-development-teams-1meo',
    imageUrl:
      'https://i.ibb.co/9bJvDQ2/Mastering-Version-Control-Best-Practices-with-Git-for-Development-Teams.png',
    type: ['article'],
  },
  {
    title: 'Mastering Frontend Design: UI/UX Principles for Full Stack Engineers',
    description:
      "As a full stack engineer, it's important to have a solid grasp of frontend design and UI/UX principles...",
    link:
      'https://dev.to/sajeeb_me/mastering-frontend-design-uiux-principles-for-full-stack-engineers-1386',
    imageUrl:
      'https://i.ibb.co/PtMCMwW/Mastering-Frontend-Design-UIUX-Principles-for-Full-Stack-Engineers.png',
    type: ['article'],
  },
  {
    title: 'Building High-Performance Web Applications with the MERN Stack',
    description:
      'The MERN stack is a popular choice for building modern, high-performance web applications...',
    link:
      'https://dev.to/sajeeb_me/building-high-performance-web-applications-with-the-mern-stack-peg',
    imageUrl:
      'https://i.ibb.co/vk0jmFp/Building-High-Performance-Web-Applications-with-the-MERN-Stack.png',
    type: ['article'],
  },
  {
    title: 'The Art of Code Review: Ensuring Quality in Full Stack Projects',
    description:
      'Code review is an essential practice in software development that helps ensure the quality...',
    link:
      'https://dev.to/sajeeb_me/the-art-of-code-review-ensuring-quality-in-full-stack-projects-21a7',
    imageUrl:
      'https://i.ibb.co/3vrw8vW/The-Art-of-Code-Review-Ensuring-Quality-in-Full-Stack-Projects.png',
    type: ['article'],
  },
  {
    title: 'Next.js vs. React.js: Choosing the Right Framework for Your Web Projects',
    description:
      'Selecting the appropriate framework is essential when creating web apps. Next.js and React...',
    link:
      'https://dev.to/sajeeb_me/nextjs-vs-reactjs-choosing-the-right-framework-for-your-web-projects-1hn',
    imageUrl:
      'https://i.ibb.co/b7SDMLq/Next-js-vs-React-js-Choosing-the-Right-Framework-for-Your-Web-Projects.png',
    type: ['article'],
  },
  {
    title: 'Server-Side Rendering with Next.js: Improving Performance and SEO',
    description:
      'Server-side rendering (SSR) has become an essential technique for building fast...',
    link:
      'https://dev.to/sajeeb_me/server-side-rendering-with-nextjs-improving-performance-and-seo-52bf',
    imageUrl:
      'https://i.ibb.co/BHDbMLs/Server-Side-Rendering-with-Next-js-upload.jpg',
    type: ['article'],
  },
  {
    title: 'A Complete Guide on Using React Native to Create Cross-Platform Mobile Apps',
    description:
      'React Native has revolutionised the quick-moving field of mobile app development by...',
    link:
      'https://dev.to/sajeeb_me/a-complete-guide-on-using-react-native-to-create-cross-platform-mobile-apps-55jh',
    imageUrl:
      'https://i.ibb.co/pR8M07k/A-Complete-Guide-on-Using-React-Native-to-Create-Cross-Platform-Mobile-Apps-upload.jpg',
    type: ['article'],
  },
  {
    title: 'Getting Started with TypeScript: Benefits and Best Practices for JavaScript Developers',
    description:
      'TypeScript has become a strong and well-liked language among JavaScript developers...',
    link:
      'https://dev.to/sajeeb_me/getting-started-with-typescript-benefits-and-best-practices-for-javascript-developers-3p8g',
    imageUrl:
      'https://i.ibb.co/bKvz4qY/Getting-Started-with-Type-Script-upload.jpg',
    type: ['article'],
  },
  {
    title: 'Top 10 skills that Full Stack Engineers in 2023 must possess',
    description:
      'Full Stack Engineers are in high demand as we move into 2023, making this a lucrative...',
    link:
      'https://dev.to/sajeeb_me/top-10-skills-that-full-stack-engineers-in-2023-must-possess-2904',
    imageUrl: 'https://i.ibb.co/Hrf7RS8/Top-10-skills-that-Full-Stack-Engineers-in-2023-must-possess-upload.jpg',
    type: ['article'],
  },
  {
    title: 'Different ways to manage a state in a React application',
    description:
      'Plain JavaScript functions can’t store information that’s why we have to use State...',
    link:
      'https://medium.com/@sdshuvo/different-ways-to-manage-a-state-in-a-react-application-f056be244fa4',
    imageUrl: 'https://i.ibb.co/j3VGCrx/1-Gw-NPv-FQ1i6-XOg-Ei-WHg-Du1g.webp',
    type: ['article'],
  },
  {
    title: 'How will you improve the performance of a React Application?',
    description: 'Improving the performance of a Application is the key of a application who...',
    link: 'https://medium.com/@sdshuvo/how-will-you-improve-the-performance-of-a-react-application-d8240850828c',
    imageUrl:
      'https://i.ibb.co/Rvq0S0s/Screen-Shot-2019-11-25-at-1-28-30-AM.png',
    type: ['article'],
  },
];

export default ARTICLE_DATA;
