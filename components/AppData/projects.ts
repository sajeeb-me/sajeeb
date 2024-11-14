/**
small size:
https://i.ibb.co/0FFywnS/automent.gif
https://i.ibb.co/9cJCq6H/coin-kinbo.gif
https://i.ibb.co/XpsCqKc/traveeel.gif
https://i.ibb.co/TBLNnVb/carts.gif
https://i.ibb.co/6WHm54V/positive-energy.gif
https://i.ibb.co/r5K1hJk/passionate-traveller.gif

large size:
https://i.ibb.co/k3QPf7Q/automent-min.gif
https://i.ibb.co/NFhMJ1G/coin-kinbo-min.gif
https://i.ibb.co/mXyBKtb/traveeel-min.gif
https://i.ibb.co/8sKwLq0/carts-min.gif
https://i.ibb.co/B2DyhKj/positive-energy-min.gif
https://i.ibb.co/B2C2sK9/passionate-traveller-min.gif


image:
https://i.ibb.co/2YJYQzY/Traveeel.jpg
https://i.ibb.co/smqVzrG/Passionate-Traveler.jpg
https://i.ibb.co/wW9HK6t/Positive-Energy.jpg
 */

const PROJECTS_DATA = [
  {
    title: 'CalSajeeb',
    description: 'A robust scheduling tool to make appointment scheduling and management easier',
    about: 'Easy Scheduling: Set your availability and share booking links with clients effortlessly. //Automated Reminders: Reduce no-shows with automated email and SMS reminders. //Calendar Integration: Sync with Google Calendar, Outlook, and other popular calendar services. //Customizable Booking Pages: Personalize your booking pages to match your brand. //Client Management: Keep track of client details and appointment history in one place. //Time Zone Detection: Automatically adjust for different time zones to avoid scheduling conflicts. ',
    link: 'https://calsajeeb.vercel.app/',
    imageUrl: '../../public/projects/calsajeeb.png',
    github: "https://github.com/sajeeb-me/calsajeeb",
    type: ['project', 'open-source', 'tools'],
    technologies: ['Next.js', 'Prisma', 'Nylas', 'NextAuth', 'Zod', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'HonestEcho',
    description: 'A feedback platform that allows users to provide anonymous feedback',
    about: 'Anonymous messaging: Users can send and receive messages without revealing their identity. //User authentication: Secure user registration and login system using NextAuth and Zod. //Real-time updates: Messages are delivered instantly. //User-friendly interface: Intuitive and responsive design for a seamless user experience.',
    link: 'https://honestecho.vercel.app/',
    imageUrl: '/../public/projects/honestecho.png',
    github: "https://github.com/sajeeb-me/HonestEcho",
    type: ['project', 'open-source', 'tools'],
    technologies: ['Next.js', 'NextAuth', 'Zod', 'OpenAI', 'Resend', 'Mongoose', 'MongoDB', 'React Hook Form', 'Axios'],
  },
  {
    title: 'AutoMent',
    description: 'Full-stack responsive application for Car Dealers to manage stocks',
    about: 'Landing page designed for showcasing and updating new inventories. Developed a User portal for managing, updating, and adding Inventories. Stored data at MongoDB. In Home route you will get the overview about our site. You wil find total Six sections there. Header, Banner (where Title, Image and one Button included), Your Inventories (user will find first 6 inventories here and also user will get one update button to update inventories and at below Manage inventories button included to manage all inventories), Statistic (user will get total sells, users, stocks, this year sells here), Most popular (here user will get the most popular car from inventories) and Footer. In Blogs section you will find the answers of 4 Questions',
    link: 'https://automent-4fd77.web.app',
    imageUrl: 'https://i.ibb.co/0FFywnS/automent.gif',
    github: "https://github.com/sdshuvo98/automent-client",
    // github: {
    //   clientSide: "https://github.com/sdshuvo98/automent-client",
    //   serverSide: "https://github.com/sdshuvo98/automent-server"
    // },
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'Firebase', 'Tailwind CSS', 'React Hook Form'],
  },
  {
    title: 'CoinKinbo',
    description: 'Full-Stack mobile responsive website for Cryptocurrency Sellers',
    about: 'Successfully implemented card payment method and ContextAPI, resulting in a streamlined user experience and improved data security. Developed admin portal for efficient management of orders and user roles. Admin credentials are provided in the README.me file on the Client Site Github link. Created a user portal with features for profile management, order tracking, and secure payments. All data is stored securely in MongoDB, ensuring scalability and reliability for the platform.',
    link: 'https://coinkinbo-bd.web.app',
    github: "https://github.com/sdshuvo98/CoinKinbo.com",
    // github: {
    //   clientSide: "https://github.com/sdshuvo98/CoinKinbo.com",
    //   serverSide: "https://github.com/sdshuvo98/CoinKinbo.server"
    // },
    imageUrl: 'https://i.ibb.co/9cJCq6H/coin-kinbo.gif',
    type: ['project', 'open-source', 'tools'],
    technologies: ["React", 'Node', 'MongoDB', 'Firebase', 'Stripe', 'ContextAPI', 'React Query'],
  },
  {
    title: 'Traveeel',
    description: 'Enjoy your travel with Traveeel.',
    about: 'In Home section you will get the overview about our site. Your will get Our packages section here and from that section you can select the best package for you. In Our Packages section you wil find a Book now button which will take you to the Checkout page. And then you can confirm your Booking From there. The Checkout section is Protected route. So, you have to be Logged in first otherwise it will take you to Login route first. In Blogs section you will find the answers of your 3 Questions. In About section you will get the information about me.',
    link: 'https://traveeel-7ce5d.web.app',
    github: "https://github.com/sdshuvo98/traveeel",
    // github: { main: 'https://github.com/sdshuvo98/traveeel' },
    imageUrl: 'https://i.ibb.co/2YJYQzY/Traveeel.jpg',
    type: ['others', 'project'],
    technologies: ['React', 'Javascript', 'Tailwind'],
  },
  {
    title: 'Carts',
    description: 'Mobile responsive website for Car Parts Manufacturers',
    about: 'Implemented card payment method, email notification, and MongoDB data storage. Developed admin portal to manage orders and products, add products, and grant admin access. Created a user portal for managing profiles, orders, and payments. Admin credentials are provided in the README.md file on the client-side GitHub link.',
    github: "https://github.com/sdshuvo98/carts-client",
    // github: {
    //   clientSide: "https://github.com/sdshuvo98/carts-client",
    //   serverSide: "https://github.com/sdshuvo98/carts-server"
    // },
    link: 'https://carts-68435.web.app',
    imageUrl: 'https://i.ibb.co/TBLNnVb/carts.gif',
    type: ['project'],
    technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'Mailgun'],
  },
  {
    title: 'Positive Energy',
    github: "https://github.com/sdshuvo98/positive-energy",
    // github: { main: 'https://github.com/sdshuvo98/positive-energy' },
    description: 'For all Soft Drinks lover who always love to check a product before having it.',
    about: 'In Home section you will find product picture and title. Then after scrolling this page you will find our customer reviews. In Reviews section you will find what our customer say about our Product. In Dashboard you will find the 3 charts where our Last 6 months Summary explained. In Blog section you will find the answers of your 3 Questions.',
    link: 'https://positive-energy-review.netlify.app',
    imageUrl: 'https://i.ibb.co/wW9HK6t/Positive-Energy.jpg',
    type: ['project', 'open-source', 'tools'],
    technologies: ['React', 'Context API', 'Javascript'],
  },
  {
    title: 'Passionate Traveler',
    description: 'Passionate Travelers who are always Confused which place will be the Best option to Travel.',
    about: "In navbar you will find our Logo in left side and options in right side. In Body section you will see the top selected places of Countries available for Travel on the left side. You will find a Button to select places.  And on Right side you will find your selected Places list on Wish List.  On this section you can get the best Travel place by clicking BEST 1 TO TRAVEL button.  Note: you can choose max 4 countries.",
    link: 'https://passionate-traveller.netlify.app',
    github: "https://github.com/sdshuvo98/passionate-traveller",
    // github: { main: 'https://github.com/sdshuvo98/passionate-traveller' },
    imageUrl: 'https://i.ibb.co/smqVzrG/Passionate-Traveler.jpg',
    type: ['others', 'project'],
    technologies: ['React', 'Javascript'],
  },

  // {
  //   title: 'Zeedas',
  //   description: 'Engineering Team On Steroid.',
  //   about:
  //     'Zeedas is an advanced product management tool that allows you to manage and track the speed and accuracy of developers from anywhere in the world to meet your software needs.',
  //   link: 'https://zeedas.com',
  //   imageUrl:
  //     'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
  //   type: ['others', 'project'],
  //   technologies: ['Vuejs', 'Vuex', 'Javascript', 'CSS3 & Sass'],
  // },
  // {
  //   title: 'Nester Verify',
  //   description:
  //     'An online web application for address and guarantor verification',
  //   about:
  //     'Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.',
  //   link: 'https://nesterverify.com',
  //   imageUrl:
  //     'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
  //   type: ['project'],
  //   technologies: ['Vue', 'Vuex', 'Javascript', 'CSS3 & Sass'],
  // },
  // {
  //   title: 'Clinified',
  //   description: 'Accessing healthcare will never be the same again',
  //   about:
  //     'Clinified is your personal assistant working for you 24/7. Better manage your practice and build your online reputation. With our integrated end-to-end solution, you are able to improve your online presence and devote time to what really matters: your patients. Today, the entire healthcare system in Africa is fundamentally broken, complicated, and frustrating. Clinified wants to change this by transforming how you access and experience healthcare, with a focus on high quality and improved outcomes.',
  //   link: 'https://clinified.com/',
  //   imageUrl:
  //     'https://i.ibb.co/ZhmzLdv/Screenshot-2020-05-04-at-4-26-10-AM.png',
  //   type: ['project'],
  //   technologies: ['Nuxt', 'Vue', 'Javascript', 'A11y'],
  // },
  // {
  //   title: 'Nester Pod',
  //   description: 'Manage All Your Logistics in One Place.',
  //   about:
  //     "Delivery Tracking and Management. Organize, coordinate and monitor all aspects of your parcel delivery in a convenient and efficient way. Drivers, courier companies, field staff, and carriers can now receive instant pickup and delivery requests at any location through our app and edit and capture customers' delivery information on the go.",
  //   link: 'https://nesterpod.com',
  //   imageUrl:
  //     'https://i.ibb.co/nfnG7F6/Screen-Shot-2019-11-23-at-2-17-06-PM.png',
  //   type: ['others', 'project'],
  //   technologies: ['Vuejs', 'Vuex', 'Javascript', 'Sass', 'A11y'],
  // },
  // {
  //   title: 'Bloverse',
  //   description:
  //     'A content creation platform fostering a global community of engaged and insightful individuals.',
  //   link: 'https://www.bloverse.com/',
  //   about:
  //     'Bloverse is a content creation platform fostering a global community of engaged and insightful individuals. A global community of engaged and insightful individuals revolutionizing the creation and consumption of content ',
  //   imageUrl:
  //     'https://i.ibb.co/s5ppyjx/Screen-Shot-2019-11-23-at-2-17-57-PM.png',
  //   type: ['others'],
  //   technologies: ['Vuejs', 'Vuex', 'Javascript', 'TypeScript', 'CSS3 & Sass'],
  // },
  // {
  //   title: 'Opus Insights',
  //   description:
  //     'A forecasting platform for farmers  that bring intelligent insights to agricultural supply chains.',
  //   about:
  //     'Opus Insights is a forecasting platform for farmers that bring intelligent insights to agricultural supply chains, and automated alerts on weather changing. AI-powered and smart map.',
  //   link: 'https://opusinsight.netlify.app',
  //   github: 'https://github.com/adenekan41/opus',
  //   imageUrl: 'https://i.ibb.co/zFT3HQR/Screen-Recording-2020-05-06-at-1.gif',
  //   type: ['others', 'project'],
  //   technologies: ['React', 'Context API', 'Javascript', 'HTML & CSS'],
  // },

  // {
  //   title: 'Lentora',
  //   description: 'Learn a New Skill, Boost Your Career',
  //   about:
  //     'Learn Anything at Your Own Pace. Get lifetime access to hundreds of top-quality professional and vocational courses/programs. Learn at your own pace. Improve your career and business growth with relevant skills.',
  //   link: 'http://lentora.com/',
  //   imageUrl:
  //     'https://i.ibb.co/ykQmbVw/Screen-Shot-2019-11-23-at-2-20-17-PM.png',
  //   type: ['others', 'project'],
  //   technologies: ['Nuxt', 'Vue', 'Javascript', 'Vuex', 'A11y'],
  // },

  // {
  //   title: 'Truegiven',
  //   description: 'Addressing current and future workforce needs.',
  //   about:
  //     'True Given helps people gain more control of their finances by connecting people to organizations providing direct and immediate assistance to families and individuals who desperately require a modest helping hand. Our specific focus is how the aid will benefit children, older adults, and other vulnerable members of our community. True Given offers peace of mind.',
  //   link: 'https://truegiven.com',
  //   imageUrl:
  //     'https://i.ibb.co/LnCz8Vx/Screen-Shot-2019-11-23-at-2-24-07-PM.png',
  //   type: ['project'],
  //   technologies: ['HTML', 'CSS', 'Javascript', 'Compiled HTML'],
  // },
  // {
  //   title: 'Freespace',
  //   description: '100% Anonymously tell the world your mind.',
  //   about:
  //     'Freespace can be utilized as your own safe place where you can freely un-conceal your thoughts and emotions without any apprehensions. Freespace requires no log-in, your IP address is not tracked and we do not leave any cache files on your browser or SERVER.  This is to assure our users that we give utmost importance to their privacy and anonymity.  Keeping this in mind, we have also ensured that no comment section is available for the posts.  This is to further protect the writer of the post and to ensure no negative interactions or cyberbullying takes place.  We are hopeful that this will further encourage our users to share openly and to read stories of others, who are just like them or might be different but can still connect and learn at a certain level.',
  //   link: 'https://freespaace.com',
  //   imageUrl: 'https://i.ibb.co/q5ZDjLd/image.png',
  //   type: ['others', 'project'],
  //   technologies: ['React', 'Redux', 'Javascript', 'Firebase'],
  // },
  // {
  //   title: 'Liveizy',
  //   description: 'Manage all your properties in one place.',
  //   about:
  //     'We reduce the cost of living and help you meet your most important living expectations by increasing easy access to all the necessary resources needed to improve living standards.',
  //   link: 'https://liveizy.com',
  //   imageUrl:
  //     'https://i.ibb.co/PxwbV5m/Screen-Shot-2019-11-24-at-11-36-52-PM-1.png',
  //   type: ['others', 'project'],
  //   technologies: ['HTML', '11ty', 'Javascript', 'CSS & Sass'],
  // },
  // {
  //   title: 'Farmhub360',
  //   description:
  //     'Our goal is to help Customers to get fresh foods within the shortest possible time.',
  //   about:
  //     'Farmershub360 is a platform that allows farmers around the world to be able to showcase their farm produce to the customer or to distributors that can buy directly from the farmers. Farmerhub360.com is an online portal available 24/7 to internet customers, It is a virtual online market place facilitation easy buying and selling of farm products such as Livestock, Aquaculture, Crops, Farm Equipments and Farm services such as Veterinary Doctors e.t.c',
  //   link: 'https://farmhub360.com',
  //   imageUrl:
  //     'https://i.ibb.co/XWjV6k0/Screen-Shot-2019-11-23-at-2-25-40-PM.png',
  //   type: ['project'],
  //   technologies: ['Vuejs', 'Vuex', 'Javascript', 'Nodejs'],
  // },

  // {
  //   title: 'DrugStoc',
  //   description: 'Empowering Pharmacies Toward a Healthier Africa.',
  //   link:
  //     'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
  //   about:
  //     'Drugstoc makes use of unmatched technology, supply chain innovation, financial solutions, and product knowledge to unlock access to medications in emerging Economies.',
  //   imageUrl:
  //     'https://i.ibb.co/mC4z0c4/Screenshot-2021-11-30-at-3-12-33-AM.png',
  //   type: ['project', 'others'],
  //   technologies: ['Nextjs (React)', 'Javascript'],
  // },
  // {
  //   title: 'EmptyCarafes',
  //   description: 'Experience remorse writing at its amazing peak.',
  //   about:
  //     'Empty Carafes is a content platform which allows readers to engage in a wide range of dynamic and innovative ideas expressed through different art forms.',
  //   link: 'https://emptycarafes.io',
  //   imageUrl: 'https://i.ibb.co/0CLmWNj/Dribbble-shot-HD-ss-1.png',
  //   type: ['others', 'project'],
  //   technologies: ['HTML', '11ty', 'Javascript', 'CSS & Sass', 'A11y'],
  // },

  // {
  //   title: '70Shops',
  //   description:
  //     'Helps business owners create an eCommerce platform for their businesses.',
  //   about:
  //     "We are introducing a set of tools that will help grow the merchants' businesses in Africa especially. Our tools will be able to effectively manage the general operations of these merchants and provide them with analytical data to help streamline the growth of their businesses.",
  //   link: 'https://70shops.com',
  //   imageUrl:
  //     'https://i.ibb.co/q939Wxd/Screen-Shot-2019-11-23-at-2-27-08-PM.png',
  //   type: ['others', 'project'],
  //   technologies: ['HTML', '11ty', 'Javascript', 'CSS & Sass', 'A11y'],
  // },

  // {
  //   title: 'Bellza',
  //   description:
  //     'Discover & access to on-demand Information leisure and utility over the world from your chrome.',
  //   about:
  //     'Bellza, a chrome extension, will open up an era of high customization for the new tab pages of your Chrome and Firefox. Common websites can be added to Speed Dial in one step and displayed with icons; the customizable search engines, select HD wallpapers and widgets like Weather, Notes, Bookmarks, To-do List, History, Gmail Notifier, etc. can increase your productivity.',
  //   link: 'https://chrome.google.com/webstore/detail/bellza-always-informed/fhnmdmmmdclgjnjlbodahlcmabjnngde',
  //   imageUrl: 'https://i.ibb.co/W6859mc/ezgif-com-optimize.gif',
  //   type: ['tools'],
  //   technologies: ['Vue', 'javascript', 'HTML & CSS'],
  // },
  // {
  //   title: 'Atara Pay',
  //   description: 'Buy and Sell Anywhere with Zero Risk',
  //   about:
  //     'AtaraPay is an online escrow service promoted by TrustPay Technologies Limited. We are the first company to create online escrow supported by technology to allow users to accept or reject items purchased at the point of delivery. Our solution protects buyers’ funds but goes the extra step to specifically protect merchants from a logistics perspective.',
  //   link: 'https://atarapay.com',
  //   imageUrl:
  //     'https://i.ibb.co/dk7bZ9L/Screen-Shot-2019-11-23-at-3-16-38-PM.png',
  //   type: ['portfolio', 'project'],
  //   technologies: ['Vuejs', 'Vuex', 'Javascript', 'Nodejs'],
  // },

  // {
  //   title: 'Urley',
  //   description: 'A cross-platform utility library to work with URLs',
  //   link: 'https://urley.netlify.com',
  //   github: 'https://github.com/adenekan41/urley',
  //   about:
  //     'Urley, A cross-platform utility library to work with URLs. Urely has a collection of handy helpers to use when working with URLs, with just a few imports you are set.',
  //   imageUrl: 'https://i.ibb.co/FDh7T07/image.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Typescript', 'Rollup'],
  // },
  // {
  //   title: 'Eze Wholesale',
  //   description: 'Buy & sell iPhones in wholesale quantities.',
  //   link: 'https://ezewholesale.com',
  //   about:
  //     'Eze connects electronics traders from all around the globe, enabling access to invaluable resources that improve the day-to-day lives of people everywhere.',
  //   imageUrl:
  //     'https://i.ibb.co/Kyn18dm/Screenshot-2021-11-30-at-3-08-36-AM.png',
  //   type: ['project', 'others'],
  //   technologies: ['Nextjs (React)', 'AWS', 'D3', 'Javascript', 'MobX'],
  // },

  // {
  //   title: 'Developp',
  //   description: 'Test engineers on their skills and competence.',
  //   link: 'https://testing.tunga.io',
  //   about: 'Test Engineers on their skills and competence.',
  //   imageUrl:
  //     'https://i.ibb.co/PQXmbwK/Screenshot-2021-11-30-at-3-22-24-AM.png',
  //   type: ['project', 'others'],
  //   technologies: ['React', 'Redux', 'Javascript'],
  // },
  // {
  //   title: 'Minimal Peace',
  //   description: 'A UI/UX designer of over 5+ years experience portfolio',
  //   about:
  //     'Adenekan Peace is a lover of pure human design derived from critical research and detailed implementation of compiled results. With a hot cup of coffee every morning and a chilled pet bottle of soda by noon, I tackle my daily design challenges hoping one day the experience being implemented in my designs can change the world. Yeah, I almost forgot my pack of Maryland cookies and the smooth feel of soft jazz music that takes me to another planet which charges my brain to its climax.',
  //   link: 'https://minimalpeace.com/',
  //   github: 'https://github.com/adenekan41/minimal-peace',
  //   imageUrl: 'https://i.ibb.co/zs38X9q/Screen-Recording-2020-05-06-at-4-1.gif',
  //   type: ['project', 'others'],
  //   technologies: ['Gatsby', 'React', 'javascript'],
  // },
  // {
  //   title: 'Codewonders Helpers',
  //   description:
  //     'A Small Helpers Utility Functions For Javascript Development.',
  //   about:
  //     'This is a small helpers utility function for javascript development. Here are the regular functions I use in my development feel free to contribute.',
  //   link: 'https://www.npmjs.com/package/codewonders-helpers',
  //   github: 'https://github.com/adenekan41/helpers',
  //   imageUrl: 'https://i.ibb.co/QpZjSmP/Group-14-1.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Rollup'],
  // },
  // {
  //   title: 'Unit Css',
  //   description: '💪 A CLI tool to convert units in your CSS file',
  //   about:
  //     'Unitcss A CLI tool to convert CSS units in your file helps you swiftly convert units/measurements in your file or folders. Using unitcss on files provides an easy way of changing measurement from px to rem or rem to px or even px to em with only a few commands in your terminal.',
  //   link: 'https://www.npmjs.com/package/unitcss',
  //   github: 'https://github.com/adenekan41/unit-css',
  //   imageUrl: 'https://i.ibb.co/X2f8nWf/unitcsss.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Rollup', 'CLI'],
  // },
  // {
  //   title: 'Helix',
  //   description:
  //     '🌄 A minimal monochrome theme for Vscode ~ 🎑 A light notion like theme for VScode.',
  //   about:
  //     'A Visual Studio Code theme for the notion and silent cool theme lovers out there. Fine-tuned for those of us who like to have the article creation feel. ✨The light theme of this color theme was inspired by notion and the dark theme was inspired by Sarah Drasner. cool right ?',
  //   link:
  //     'https://marketplace.visualstudio.com/items?itemName=codewonders.helix&ssr=false',
  //   github: 'https://github.com/adenekan41/helix',
  //   imageUrl:
  //     'https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['JSON', 'CLI'],
  // },
  // {
  //   title: 'Compiled HTML',
  //   description:
  //     'A small project to make writing HTML faster and better and now components based with js',
  //   about:
  //     'Getting familiar with the template and you want to use some helper functions in your HTML file like import sidebar components or generate head components differently for each files @, Prefix to the world just import using them the following ways.',
  //   link: 'https://www.npmjs.com/package/generator-compiled-html',
  //   github: 'https://github.com/adenekan41/generator-compiled-html',
  //   imageUrl: 'https://i.ibb.co/kQvnBG2/Group-5-2-1.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Gulp'],
  // },
  // {
  //   title: 'Overstateful',
  //   description:
  //     'A small state management with less setup and super scalability in your react app.',
  //   about:
  //     'A small state management with less setup and super scalability in your react app. with over-stateful, all you need is this, less documentation required to get you going',
  //   link: 'https://www.npmjs.com/package/over-stateful',
  //   github: 'https://github.com/adenekan41/over-stateful',
  //   imageUrl:
  //     'https://i.ibb.co/YT6fXLB/Screenshot-2020-05-04-at-4-41-05-AM.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Rollup', 'React'],
  // },
  // {
  //   title: 'Broadstate',
  //   about:
  //     'Have you ever tried to move the value of a state from a child to the parent without using large state management tools like Redux, Mobx e.t.c? Broadstate is an easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
  //   description:
  //     'Easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
  //   link: 'https://www.npmjs.com/package/broad-state',
  //   github: 'https://github.com/adenekan41/broad-state',
  //   imageUrl: 'https://i.ibb.co/GVdt9Jq/Dribbble-Shot-HD-3broad.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Rollup', 'React'],
  // },
  // {
  //   title: 'Aim Scroll',
  //   about:
  //     'Have you ever tried to add a feature to an element when the user scrolls to a certain extent ? or even tried the popular scroll aesthetic of adding a box-shadow to your navbar when the user scrolls up? Aimscroll is a painless utility library to handle scroll positions and methods in React.',
  //   description:
  //     'Painless utility library to handle scroll positions and methods in react.',
  //   link: 'https://www.npmjs.com/package/aimscroll',
  //   github: 'https://github.com/adenekan41/aimscroll',
  //   imageUrl: 'https://i.ibb.co/1X27zFt/Group-6.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Javascript', 'Rollup', 'React'],
  // },
  // {
  //   title: 'Use Responsive Query',
  //   about:
  //     ' An extremely powerful but easy-to-use hook for listening to media events in React. URQ creates an experience of a javascript-like reactive accommodation for your react application.',
  //   description:
  //     'An extremely powerful but easy to use hook for listening to media events in react.',
  //   link: 'https://www.npmjs.com/package/use-responsive-query',
  //   github: 'https://github.com/adenekan41/use-responsive-query',
  //   imageUrl: 'https://i.ibb.co/CPK4YzL/Group-38dd.png',
  //   type: ['open-source', 'tools'],
  //   technologies: ['Typescript', 'Rollup', 'React'],
  // },
];

export default PROJECTS_DATA;
