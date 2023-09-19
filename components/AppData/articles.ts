const ARTICLE_DATA = [
  // {
  //   title: 'Building Empathy in Code: How to Craft User-Centric Applications',
  //   description:
  //     'In the realm of software development, there exists a fundamental but often overlooked principle...',
  //   link:
  //     'https://dev.to/sajeeb_me/building-empathy-in-code-how-to-craft-user-centric-applications-2dan',
  //   imageUrl:
  //     'https://i.ibb.co/dfPjn7Y/Building-Empathy-in-Code-How-to-Craft-User-Centric-Applications.png',
  //   type: ['article'],
  // },
  // {
  //   title: 'Building Empathy in Code: How to Craft User-Centric Applications',
  //   description:
  //     'In the realm of software development, there exists a fundamental but often overlooked principle...',
  //   link:
  //     'https://dev.to/sajeeb_me/building-empathy-in-code-how-to-craft-user-centric-applications-2dan',
  //   imageUrl:
  //     'https://i.ibb.co/dfPjn7Y/Building-Empathy-in-Code-How-to-Craft-User-Centric-Applications.png',
  //   type: ['article'],
  // },
  // {
  //   title: 'Mastering Version Control: Best Practices with Git for Development Teams',
  //   description:
  //     'Version control is the backbone of effective software development, and Git stands at the forefront...',
  //   link:
  //     'https://dev.to/sajeeb_me/mastering-version-control-best-practices-with-git-for-development-teams-1meo',
  //   imageUrl:
  //     'https://i.ibb.co/9bJvDQ2/Mastering-Version-Control-Best-Practices-with-Git-for-Development-Teams.png',
  //   type: ['article'],
  // },
  // {
  //   title: 'Mastering Frontend Design: UI/UX Principles for Full Stack Engineers',
  //   description:
  //     "As a full stack engineer, it's important to have a solid grasp of frontend design and UI/UX principles...",
  //   link:
  //     'https://dev.to/sajeeb_me/mastering-frontend-design-uiux-principles-for-full-stack-engineers-1386',
  //   imageUrl:
  //     'https://i.ibb.co/PtMCMwW/Mastering-Frontend-Design-UIUX-Principles-for-Full-Stack-Engineers.png',
  //   type: ['article'],
  // },
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
  // {
  //   title: 'What are these things called generator functions* ?',
  //   description:
  //     'In this lessons, we are going to explore one really great new ishhhh that was introduced int...',
  //   link:
  //     'https://dev.to/code_wonders/what-are-these-things-called-generator-functions-58nn',
  //   imageUrl: 'https://i.ibb.co/wc3m88r/cloud.png',
  //   type: ['article'],
  // },
  // {
  //   title: 'Let’s Create a Blog with React & Node @code_wonders',
  //   description: '',
  //   link:
  //     'https://medium.com/@codewonders/lets-create-a-blog-with-react-node-code-wonders-33978ed45e59',
  //   imageUrl: 'https://i.ibb.co/YT0XHgH/imageedit-7360658824.png',
  //   type: ['article'],
  // },
  // {
  //   title: 'Minimalism in Programming',
  //   description:
  //     'I’m 32, and I’ve been programming actively for over 16 years at this...',
  //   link: 'https://pointersgonewild.com/2018/02/18/minimalism-in-programming/',
  //   imageUrl: 'https://i.ibb.co/59sw2qV/code-wallpapers-30652-6650776.png',
  //   type: ['reading'],
  // },
  // {
  //   title: 'Accessible Icon Buttons',
  //   description: 'Freelance Front-End Web UI/UX Developer - Lebanon',
  //   link: 'https://www.sarasoueidan.com/blog/accessible-icon-buttons/',
  //   imageUrl:
  //     'https://i.ibb.co/mFkMHPZ/Screen-Shot-2019-11-25-at-1-38-58-AM.png',
  //   type: ['reading'],
  // },
  // {
  //   title: 'Reducing Motion to Improve Accessibility',
  //   description:
  //     'Hey friends! In this post, I am going to walk you through a newer medi...',
  //   link:
  //     'https://www.a11ywithlindsey.com/blog/reducing-motion-improve-accessibility',
  //   imageUrl:
  //     'https://i.ibb.co/Jm2f3rY/Dream-Host-Accessibility-Tips-750x498.jpg',
  //   type: ['reading'],
  // },
  // {
  //   title: 'Smoother & sharper shadows with layered box-shadows',
  //   description: '',
  //   link: 'https://tobiasahlin.com/blog/layered-smooth-box-shadows/',
  //   imageUrl:
  //     'https://i.ibb.co/MSMpWQL/Screen-Shot-2019-11-25-at-1-49-51-AM.png',
  //   type: ['reading'],
  // },
  // {
  //   title: 'Don’t be a Junior Developer: The Roadmap',
  //   description: '',
  //   link:
  //     'https://zerotomastery.io/blog/dont-be-a-junior-developer-the-roadmap',
  //   imageUrl: 'https://i.ibb.co/t2wy0Qg/279547.jpg',
  //   type: ['reading'],
  // },
  // {
  //   title: 'Go Beyond: A Story of Failure',
  //   description:
  //     'Today, I want to share my story in hopes that it might inspire others to achieve their dream jo...',
  //   link: 'https://zerotomastery.io/blog/go-beyond-a-story-of-failure/',
  //   imageUrl: 'https://i.ibb.co/g7Xj6Jt/fear-failure-blog-x2.png',
  //   type: ['reading'],
  // },
  // {
  //   title: 'A Modern CSS Reset',
  //   description: 'I think about and enjoy very boring CSS stuf...',
  //   link: 'https://hankchizljaw.com/wrote/a-modern-css-reset/',
  //   imageUrl: 'https://i.ibb.co/RPkXPLN/css-declaration-small.png',
  //   type: ['reading'],
  // },
  // {
  //   title: 'Usability & Web Accessibility',
  //   description: '',
  //   link: 'https://usability.yale.edu/web-accessibility/articles',
  //   imageUrl:
  //     'https://i.ibb.co/1MQyX2F/Handicapped-Wheelchair-Accessible-Sticker.png',
  //   type: ['reading'],
  // },
  // {
  //   title: 'DevEd',
  //   description: '',
  //   link: 'https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q',
  //   imageUrl:
  //     'https://i.ibb.co/3sKzk4K/Screen-Shot-2019-11-25-at-2-09-11-AM.png',
  //   type: ['video'],
  // },
  // {
  //   title: 'Traversy',
  //   description: '',
  //   link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
  //   imageUrl: 'https://i.ibb.co/tXBtHdk/images.png',
  //   type: ['video'],
  // },
  // {
  //   title: 'Tech Lead',
  //   description: '',
  //   link: 'https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw',
  //   imageUrl:
  //     'https://i.ibb.co/qpRtXXg/Screen-Shot-2019-11-25-at-2-16-57-AM.png',
  //   type: ['video'],
  // },
  // {
  //   title: 'Joma Tech',
  //   description: '',
  //   link: 'https://www.youtube.com/channel/UCV0qA-eDDICsRR9rPcnG7tw',
  //   imageUrl:
  //     'https://i.ibb.co/X8XM7gH/Screen-Shot-2019-11-25-at-2-15-33-AM.png',
  //   type: ['video'],
  // },
];

export default ARTICLE_DATA;
