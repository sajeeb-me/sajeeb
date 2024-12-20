const PROJECTS_DATA = [
  {
    title: 'CalSajeeb',
    description: 'A robust scheduling tool to make appointment scheduling and management easier',
    about: 'Easy Scheduling: Set your availability and share booking links with clients effortlessly. //Automated Reminders: Reduce no-shows with automated email and SMS reminders. //Calendar Integration: Sync with Google Calendar, Outlook, and other popular calendar services. //Customizable Booking Pages: Personalize your booking pages to match your brand. //Client Management: Keep track of client details and appointment history in one place. //Time Zone Detection: Automatically adjust for different time zones to avoid scheduling conflicts. ',
    link: 'https://calsajeeb.vercel.app/',
    imageUrl: '/projects/calsajeeb.png',
    github: "https://github.com/sajeeb-me/calsajeeb",
    type: ['project', 'open-source', 'tools'],
    technologies: ['Next.js', 'Prisma', 'Nylas', 'NextAuth', 'Zod', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'HonestEcho',
    description: 'A feedback platform that allows users to provide anonymous feedback',
    about: 'Anonymous messaging: Users can send and receive messages without revealing their identity. //User authentication: Secure user registration and login system using NextAuth and Zod. //Real-time updates: Messages are delivered instantly. //User-friendly interface: Intuitive and responsive design for a seamless user experience.',
    link: 'https://honestecho.vercel.app/',
    imageUrl: '/projects/honestecho.png',
    github: "https://github.com/sajeeb-me/HonestEcho",
    type: ['project', 'open-source', 'tools'],
    technologies: ['Next.js', 'NextAuth', 'Zod', 'OpenAI', 'Resend', 'Mongoose', 'MongoDB', 'React Hook Form', 'Axios'],
  },
  {
    title: 'AutoMent',
    description: 'Full-stack responsive application for Car Dealers to manage stocks',
    about: 'Landing page designed for showcasing and updating new inventories. //Developed a User portal for managing, updating, and adding Inventories. //Stored data at MongoDB. //In Home route you will get the overview about our site. //You wil find total Six sections there. Header, Banner (where Title, Image and one Button included), Your Inventories (user will find first 6 inventories here and also user will get one update button to update inventories and at below Manage inventories button included to manage all inventories), Statistic (user will get total sells, users, stocks, this year sells here), Most popular (here user will get the most popular car from inventories) and Footer. //In Blogs section you will find the answers of 4 Questions',
    link: 'https://automent-4fd77.web.app',
    imageUrl: 'https://i.ibb.co/0FFywnS/automent.gif',
    github: "https://github.com/sdshuvo98/automent-client",
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'Firebase', 'Tailwind CSS', 'React Hook Form'],
  },
  {
    title: 'Carts',
    description: 'Mobile responsive website for Car Parts Manufacturers',
    about: 'Implemented card payment method, email notification, and MongoDB data storage. //Developed admin portal to manage orders and products, add products, and grant admin access. //Created a user portal for managing profiles, orders, and payments. //Admin credentials are provided in the README.md file on the client-side GitHub link.',
    github: "https://github.com/sdshuvo98/carts-client",
    link: 'https://carts-68435.web.app',
    imageUrl: 'https://i.ibb.co/TBLNnVb/carts.gif',
    type: ['project'],
    technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'Mailgun'],
  },
  {
    title: 'CoinKinbo',
    description: 'Full-Stack mobile responsive website for Cryptocurrency Sellers',
    about: 'Successfully implemented card payment method and ContextAPI, resulting in a streamlined user experience and improved data security. //Developed admin portal for efficient management of orders and user roles. //Admin credentials are provided in the README.me file on the Client Site Github link. //Created a user portal with features for profile management, order tracking, and secure payments. //All data is stored securely in MongoDB, ensuring scalability and reliability for the platform.',
    link: 'https://coinkinbo-bd.web.app',
    github: "https://github.com/sdshuvo98/CoinKinbo.com",
    imageUrl: 'https://i.ibb.co/9cJCq6H/coin-kinbo.gif',
    type: ['project', 'open-source', 'tools'],
    technologies: ["React", 'Node', 'MongoDB', 'Firebase', 'Stripe', 'ContextAPI', 'React Query'],
  },
  {
    title: 'Traveeel',
    description: 'Enjoy your travel with Traveeel.',
    about: 'In Home section you will get the overview about our site. You will get Our packages section here and from that section you can select the best package for you. //In Our Packages section you wil find a Book now button which will take you to the Checkout page. And then you can confirm your Booking From there. //The Checkout section is Protected route. So, you have to be Logged in first otherwise it will take you to Login route first. //In Blogs section you will find the answers of your 3 Questions. //In About section you will get the information about me.',
    link: 'https://traveeel-7ce5d.web.app',
    github: "https://github.com/sdshuvo98/traveeel",
    imageUrl: 'https://i.ibb.co/2YJYQzY/Traveeel.jpg',
    type: ['others', 'project'],
    technologies: ['React', 'Javascript', 'Tailwind'],
  },
  {
    title: 'Positive Energy',
    github: "https://github.com/sdshuvo98/positive-energy",
    description: 'For all Soft Drinks lover who always love to check a product before having it.',
    about: 'In Home section you will find product picture and title. Then after scrolling this page you will find our customer reviews. //In Reviews section you will find what our customer say about our Product. //In Dashboard you will find the 3 charts where our Last 6 months Summary explained. //In Blog section you will find the answers of your 3 Questions.',
    link: 'https://positive-energy-review.netlify.app',
    imageUrl: 'https://i.ibb.co/wW9HK6t/Positive-Energy.jpg',
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'Context API', 'Javascript'],
  },
  {
    title: 'Passionate Traveler',
    description: 'Passionate Travelers who are always Confused which place will be the Best option to Travel.',
    about: "In navbar you will find our Logo in left side and options in right side. //In Body section you will see the top selected places of Countries available for Travel on the left side. You will find a Button to select places.  And on Right side you will find your selected Places list on Wish List.  //On this section you can get the best Travel place by clicking BEST 1 TO TRAVEL button.  Note: you can choose max 4 countries.",
    link: 'https://passionate-traveller.netlify.app',
    github: "https://github.com/sdshuvo98/passionate-traveller",
    imageUrl: 'https://i.ibb.co/smqVzrG/Passionate-Traveler.jpg',
    type: ['others', 'project'],
    technologies: ['React', 'Javascript'],
  },
];

export default PROJECTS_DATA;
