// Data
  var experienceData = [
    {
      "company_name": "Comstar",
      "designation": "Software Engineer",
      "company_intro": "",
      "my_experience": "It was my first job. I didn't know what Ruby on Rails is prior to joining. I was just so enthusiastic about software development that I didn't care what tools I was going to use. During my time here, I worked on TutorChatLive, Medijean and SmarterSkin. Technologies used were RoR, JS, AngularJS.",
      "company_url": "http://comstar.com.pk/",
      "from": "Jan 2013",
      "to": "May 2014",
      iconUrl: "images/clients/comstarLogo.png",
    },
    {
      "company_name": "Activa Financial",
      "designation": "Lead Software Engineer",
      "company_intro": "",
      "my_experience": "At first, I started working for Activa Financial as a consultant, while I was still working at Comstar. It later turned out my 2nd full time job. I was leading the in-house product which was AlertParent. Primarily worked on RoR, JS, PhoneGap (iOS, Android & WindowsPhone). Publishing apps on the app store was something I did for the first time. Even worked on Adobe ColdFusion briefly.",
      "company_url": "http://www.activafinancial.com/",
      "from": "May 2014",
      "to": "Feb 2015",
      iconUrl: "images/clients/activa-logo.png",
    },
    {
      "company_name": "10Pearls",
      "designation": "Senior Software Developer",
      "company_intro": "10Pearls is an award-winning digital development company, helping business with user research and design, product development and technology acceleration. We specialize in mobile & web apps, enterprise solutions, cyber security, big data, IoT, cloud and devops. We help our clients design, build, and launch innovative digital products that engage customers and drive revenue. Companies rely on 10Pearls to help them stay competitive in today’s digital economy. We design, build, and support digital products that deliver results. We believe in co-creation, working with our clients as one-team. Our process is collaborative, transparent, and proactive. Our development process follows a continuous cycle-build, measure, learn, and improve. We strive to maximize efficiency, minimize surprises, and increase speed to market. We fuel business acceleration through digital, providing highly compelling customer experiences that drive businesses forward.",
      "my_experience": "My third and longest job to date. Technologies which I worked on here are RoR, JS, AngularJS 1 & 2, React/Redux/Flux.",
      "company_url": "https://10pearls.com/",
      "from": "Feb 2015",
      "to": "Oct 2017",
      iconUrl: "images/clients/10P.png",
    },
    {
      "company_name": "CreativeChaos",
      "designation": "Associate Principal Software Engineer",
      "company_intro": "We are Lean. We are Agile. We enable clients in 20 countries to outperform the competition and stay ahead of the innovation curve. Headquartered in San Francisco with delivery capabilities across the globe Founded in 2000. 400+ full time associates globally. We use creativity, passion, and our experience in technology to help our clients make smart decisions 1200+ successful projects across multiple industry verticals. 450+ customers globally. 60% business from Fortune 500 customers. We love working with startups to help create scalable platforms and remarkable digital assets Technology partners and investors in 15+ startups.",
      "my_experience": "I've just started working here as the senior most Ruby guy. Looking forward to great things.",
      "company_url": "http://www.csquareonline.com",
      "from": "Oct 2017",
      "to": "Current",
      iconUrl: "images/clients/cc-logo.png",
    },
  ]
  var educationData = [
    {
      "name": "Bachelors of Computer Science",
      "institute_name": "Sir Syed University of Engineering & Technology",
      "description": "The aim of the degree is twofold: firstly to create well-rounded computer scientists who will fulfill the demand for computer science researchers and software developers in Pakistan and secondly to nurture entrepreneurship among the young computer scientists to promote innovation at a national level. The emphasis of entrepreneurship in the program will hopefully give birth to new developments in the field of computing.",
      "from": "2010",
      "to": "2014",
    },
    {
      "name": "Ruby on Rails Specialization",
      "institute_name": "The Johns Hopkins University (Coursera)",
      "description": "This Specialization covers the fundamentals of web development with Ruby on Rails. It will cover everything you need to develop your own web application using Ruby on Rails, SQL and NoSQL databases, and HTML/CSS, and Javascript. It will also touch on advanced topics such as security, services using HTTP/RESTful access patterns, and user access and user experience from multiple device platforms.",
      "from": "2016",
      "to": "2017",
    },
    {
      "name": "Introduction to Food and Health",
      "institute_name": "Stanford University (Coursera)",
      "description": "Around the world, we find ourselves facing global epidemics of obesity, Type 2 Diabetes and other predominantly diet-related diseases. To address these public health crises, we urgently need to explore innovative strategies for promoting healthful eating. In this course, learners will be given the information and practical skills they need to begin optimizing the way they eat. This course will shift the focus away from reductionist discussions about nutrients and move, instead, towards practical discussions about real food.",
      "from": "2016",
      "to": "2016",
    },
  ]
  var projectsData = [
    {
      name: "Tutor Chat Live",
      thumbImageUrl: "images/portfolio/tutorchatliveorg-square.png",
      imageUrl: "images/portfolio/tutorchatliveorg.png",
      url: "http://www.tutorchatlive.org/",
      filters: "ruby-on-rails js",
      info: "TutorChatLive (TCL) is a 501(c)(3) organization that connects volunteer tutors with middle and high school students through a customized, real-time chat platform on our website.",
      iconUrl: "images/clients/tutorchatlive.gif",
    },
    {
      name: "SmarterSkin Dermatology",
      thumbImageUrl: "images/portfolio/smarter-skin-1.png",
      imageUrl: "images/portfolio/smarter-skin-2.png",
      url: "http://www.smarterskindermatology.com/",
      filters: "ruby-on-rails angular-js",
      info: "The average wait time to see a dermatologist is approximately 4-6 weeks throughout the United States and even longer in certain areas. We understand the stress and anxiety of waiting, as well as the unnecessary inconvenience of taking time off of work/school for your appointments. At SmarterSkin, the patient comes first. The service was started by a group of Dermatologists that believe that technology in health care should be embraced. Given the increasing number of patients and shortage of dermatologists, we believe teledermatology allows for access to those who may otherwise have difficulties.",
      iconUrl: "images/clients/smarterskin.png",
    },
    {
      name: "Medijean",
      thumbImageUrl: "images/portfolio/medijean3square.png",
      imageUrl: "images/portfolio/medijean3.png",
      url: "http://www.medijean.com/",
      filters: "ruby-on-rails js",
      iconUrl: "images/clients/medijean.png",
    },
    {
      name: "AlertParent",
      thumbImageUrl: "images/portfolio/alertparent-square-3.png",
      imageUrl: "images/portfolio/alertparent.png",
      url: "http://alertparent.org/",
      filters: "ruby-on-rails js phonegap",
      info: "AlertParent is a cloud-based system offering a centralized interface that allows non-technical school administrators to self-administer and manage time-sensitive communications to parents, students, and teachers. Powered by Activa, AlertParent works by sending an alert to iPhone and Android Smartphones. AlertParent allows school administrator(s) to send a message to ten or tens of thousands of people within minutes, without having to call anyone. Messages can be initiated from anywhere via the web or net-connected phone. The AlertParent web interface allows Administrators to setup accounts, classes, subjects, teachers, and groups, send advisories, manage subscribers, and view reports. Because AlertParent is completely web-based, it will not clog up your own IT infrastructure, nor will it require many man-hours to install, integrate, and operate.",
    },
    {
      name: "NovoEd",
      thumbImageUrl: "images/portfolio/novoed-square.png",
      imageUrl: "images/portfolio/novoed.png",
      url: "http://www.novoed.com/",
      filters: "ruby-on-rails angular-js",
      info: "NovoEd, Inc. is a software company on a mission to make online education more effective and engaging. NovoEd creates the most engaging online platform for the modern learner. Our solutions enable our customers to more productively train their employees, partners, customers, and students. Founded at Stanford, NovoEd developed technology to make online learning more like great in-person learning. Our first clients were some of the top business schools, including Stanford GSB, Wharton, and UVA Darden. As millennials became a significant part of the workforce, companies began demanding modern learning solutions built for the mobile, social learner. Now, NovoEd serves organizations around the world that need a better way to teach online – whether it’s employee training, partner enablement, executive education, or university programs.",
      iconUrl: "images/clients/novoed.png",
    },
    {
      name: "Telmate",
      thumbImageUrl: "images/portfolio/telmate-square.png",
      imageUrl: "images/portfolio/telmate.png",
      url: "https://www.telmate.com/",
      filters: "ruby-on-rails react-js",
      info: "Telmate was founded in 1998 and started its journey as inmate technology experts under the name Pinnacle Public Services. At the time, Pinnacle was providing excellent service and installation to the leading inmate communications solution providers throughout the Northwest. It was through this experience that we recognized a need in the industry for a superior inmate communications solution; one that provides facilities with uncompromising reliability, cutting-edge technology and security, coupled with prompt customer service and repair. Telmate’s innovative solutions not only improve operational efficiencies, but also cater to the changing needs of the corrections sector. Telmate provides services to facilities of all sizes, ranging from holding cells, city jails, county correctional facilities, state DOCs and federal detention centers. Our largest account houses over 18,000 inmates. Telmate is deployed in over 300 correctional facilities in North America spanning nearly all U.S. states and Canadian provinces. Because of our innovations in inmate phone, video, tablet, and offender tracking solutions, Telmate has been recognized as a leading inmate telecom provider in North America. Unlike our competitors, our growth has been entirely organic and a result of the close relationships we foster with our customers. They alone are the best evidence we’re doing the right thing; it is through them that we get the majority of our new customers. We look forward to the opportunity to serve you in the near future.",
      iconUrl: "images/clients/telmate_logo.png",
    },
    {
      name: "IZEA",
      thumbImageUrl: "images/portfolio/izea-square.png",
      imageUrl: "images/portfolio/izea.png",
      url: "https://izea.com/",
      filters: "ruby-on-rails ember-js",
      info: "IZEAx® is an influencer marketing platform for agencies and brands that automates influencer and content marketing programs. Our platform eliminates time consuming processes, streamlines workflow and provides robust enterprise features designed for high volume execution of campaigns.",
      iconUrl: "images/clients/izea-retina.png",
    },
    {
      name: "DC Taxi",
      thumbImageUrl: "images/portfolio/dctaxi-square.png",
      imageUrl: "images/portfolio/dctaxi.png",
      url: "https://www.dctaxi.com/",
      filters: "ruby-on-rails js",
      info: "We are the taxi drivers of DC. We know the DC streets like the back of our hand. We are insured and vetted by the DC Department of For-Hire Vehicles, have FBI background checks, and an average of 20 years professional driving experience. When you ride with us, you ride with the best drivers in the DC area.",
      iconUrl: "images/clients/taxiapp.png",
    },
    {
      name: "Checkup & Choices",
      thumbImageUrl: "images/portfolio/checkupandchoices-square.png",
      imageUrl: "images/portfolio/checkupandchoices.png",
      url: "http://checkupandchoices.com/",
      filters: "react-js",
      info: "Pioneered by acclaimed clinical researcher, Reid K. Hester, Ph.D., our evidence-based tools are the culmination of years of rigorous research, millions of dollars of National Institutes of Health grants, multiple randomized clinical trials, and peer-reviewed publications. If you’re wondering about your drinking, you’ve come to the right place. Many people question their own alcohol use, and there’s no shortage of opinions out there about how much is too much. CheckUp & Choices is a scientifically proven program designed to help people assess and, if necessary, address their drinking. The program begins with a free, 10 question, clinically validated questionnaire that will provide solid feedback about your drinking, and relevant options for you, should you decide to change your drinking or take a deeper look at why you drink.",
      iconUrl: "images/clients/checkupandchoices-logo-2.png",
    },
    {
      name: "SabihRehmani.com",
      thumbImageUrl: "images/portfolio/sabih-rehmani.png",
      imageUrl: "images/portfolio/sabih-rehmani2.png",
      url: "http://www.sabih-rehmani.com/",
      filters: "ruby-on-rails js",
    },
    {
      name: "LendingHome",
      thumbImageUrl: "images/portfolio/lendinghome-square.png",
      imageUrl: "images/portfolio/lendinghome.png",
      url: "https://www.lendinghome.com/",
      filters: "ruby-on-rails js react-js",
      info: "We all dream of owning a home, but there’s something giving many of us pause—the thought of going through the obstacle course of getting a mortgage. It’s much harder than it should be to get a “home, sweet home” of our own. Why? Because the current process thrives on chaos and confusion. So much so that it leaves homebuyers overwhelmed and stressed out. Should it really be this difficult to put a roof over your head? A roof that you own? No. And that’s why we’re here. We’re out to simplify the complex world of mortgages. We know this is the moment you’ve been saving for. And we know buying a home is much more than a decision you live with—it’s a decision you live in. The path to homeownership is a big deal. So let’s fill it with clarity. With candor. And, in the process, let’s fill you with confidence. Let’s give you some control. We have the expertise and online tools homebuyers need to put them on a path that seamlessly takes them from pre-approval to contract to closing. All with the straightforward information and honest guidance they need to feel involved and empowered along the way. We’re LendingHome. We’re on a mission to revolutionize the world of mortgages and put the power, and the keys, where they belong—in your hands.",
      iconUrl: "images/clients/lh-logo-2.png",
    },
  ]
  var certifiatesData = [
    {
      name: "ES6: Udemy",
      imagePath: "images/certificates/sarmad_sabih_es6_certificate.jpg",
    },
    {
      name: "Strategic Visions Workshop",
      imagePath: "images/certificates/sarmad_sabih_timelenders_workshop_certificate.jpeg",
    },
    {
      name: "SPA with AngularJS: Coursera",
      imagePath: "images/certificates/sarmad_sabih_coursera_angular_js_certificate.jpg",
    },
    {
      name: "Ruby on Rails, Web Services & MongoDB: Coursera",
      imagePath: "images/certificates/sarmad_sabih_coursera_ruby_on_rails_web_services_mongo_db_certificate.jpg",
    },
    {
      name: "Ruby on Rails: Coursera",
      imagePath: "images/certificates/sarmad_sabih_ruby_on_rails_certificate.jpg",
    },
    {
      name: "HTML, CSS & JS: Coursera",
      imagePath: "images/certificates/sarmad_sabih_coursera_html_css_js_certificate.jpg",
    },
    {
      name: "Rails, ActiveRecord & ActionPack: Coursera",
      imagePath: "images/certificates/sarmad_sabih_rails_active_record_and_action_pack_certificate.jpg",
    },
    {
      name: "NodeJS: SitePoint",
      imagePath: "images/certificates/sarmad_sabih_nodejs_certficate.jpg",
    },
    {
      name: "Ruby: SitePoint",
      imagePath: "images/certificates/sarmad_sabih_ruby_certificate.jpg",
    },
    {
      name: "Morernizr 3",
      imagePath: "images/certificates/sarmad_sabih_modernizr_3_certificate.jpg",
    },
    {
      name: "Microsoft Specialist",
      imagePath: "images/certificates/sarmad_sabih_ms_specialist_2.jpg",
    },
    {
      name: "Microsoft Certified Solutions Developer",
      imagePath: "images/certificates/sarmad_sabih_mcsd.jpg",
    },
    {
      name: "Microsoft Certified Professional",
      imagePath: "images/certificates/sarmad_sabih_mcp.jpg",
    },
    {
      name: "Microsoft Specialist",
      imagePath: "images/certificates/sarmad_sabih_ms_specialist.jpeg",
    },
    {
      name: "ASP.NET App Development",
      imagePath: "images/certificates/sarmad_sabih_ms_asp_net_application_development.jpeg",
    },
    {
      name: "SQL Server Database Development",
      imagePath: "images/certificates/sarmad_sabih_ms_sql_database_development.jpeg",
    },
    {
      name: ".NET Application Development",
      imagePath: "images/certificates/sarmad_sabih_ms_net_application_development_foundation.jpeg",
    },
    {
      name: "IT Fair 7th Semester",
      imagePath: "images/certificates/sarmad_sabih_it_fair_7th_semester.jpeg",
    },
    {
      name: "IT Fair 5th Semester",
      imagePath: "images/certificates/sarmad_sabih_it_fair_5th_semester.jpeg",
    },
    {
      name: "IT Fair 1st Semester",
      imagePath: "images/certificates/sarmad_sabih_it_fair_1st_semester.jpeg",
    },
  ];
  var facebookEmbeds = [
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fumerufaq%2Fposts%2F10208123152823787&width=500" width="500" height="664" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsyedsarmadsabih%2Fposts%2F10155877146981727&width=500" width="500" height="502" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10154369785121727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="337" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10152011858356727%26set%3Da.493398561726.268594.709951726%26type%3D3&width=500" width="500" height="614" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsyedsarmadsabih%2Fposts%2F10152956057966727&width=500" width="500" height="595" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10152001056356727%26set%3Da.10152001008011727.1073741834.709951726%26type%3D3&width=500" width="500" height="338" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10152008143061727%26set%3Da.10150435598781727.352615.709951726%26type%3D3&width=500" width="500" height="444" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153258708271727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="338" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153258708306727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="338" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153368386501727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="472" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153368386486727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="594" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsyedsarmadsabih%2Fposts%2F10153553863431727&width=500" width="500" height="452" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153297355521727%26set%3Da.493398561726.268594.709951726%26type%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
  ]
  var interestEmbeds = [
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkarachibodybuilding%2Fposts%2F471265096396593&width=500" width="500" height="626" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153324922171727%26set%3Dp.10153324922171727%26type%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsyedsarmadsabih%2Fposts%2F10153027198366727&width=500" width="500" height="503" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153175533426727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="502" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153651794211727%26set%3Da.10150435598781727.352615.709951726%26type%3D3&width=500" width="500" height="486" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153186064381727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="361" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153929946996727%26set%3Da.10153175535171727.1073741849.709951726%26type%3D3&width=500" width="500" height="337" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsyedsarmadsabih%2Fposts%2F10153332867156727&width=500" width="500" height="499" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153700886491727%26set%3Da.10153699129616727.1073741853.709951726%26type%3D3&width=500" width="500" height="501" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153711573436727%26set%3Da.10153699129616727.1073741853.709951726%26type%3D3&width=500" width="500" height="473" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153709553151727%26set%3Da.10153699129616727.1073741853.709951726%26type%3D3&width=500" width="500" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153707076131727%26set%3Da.10153699129616727.1073741853.709951726%26type%3D3&width=500" width="500" height="502" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
  ];

  var blogs = [
    {
      source: "Medium",
      date: "May 27, 2016",
      title: "Why I enjoy losing out in quizzes to my 6 years...",
      url: "https://medium.com/@sarmadsabih/why-i-enjoy-losing-out-in-quizzes-to-my-6-years-younger-sister-b7a2c442c31e",
      preview: "My younger sister has just beaten the sh** out of me in a quiz app. I’m a Senior Software Engineer at one of the best software houses in Pakistan. And my 6 years younger sister has...",
      image: "images/blogs/sarmad_sabih_losing_in_quizzes_to_sister.jpeg",
    },
    {
      source: "SitePoint",
      date: "June 20, 2016",
      title: "DRY Up Your Model Validations Tests",
      url: "https://www.sitepoint.com/quick-tip-dry-up-your-model-validations-tests/",
      preview: "I was working on an application and needed to test the models, which is a pretty normal practice. I had to repeat validation tests for each field and each model resulting in lots of duplicated...",
      image: "images/blogs/sarmad_sabih_dry_model_validation.jpg",
    },
    {
      source: "SitePoint",
      date: "June 27, 2016",
      title: "Deliver the Mail with Amazon SES and Rails",
      url: "https://www.sitepoint.com/deliver-the-mail-with-amazon-ses-and-rails/",
      preview: "Amazon Simple Email Service (Amazon SES) is a cost-effective email service built on the reliable and scalable infrastructure that Amazon.com developed to serve its own customer...",
      image: "images/blogs/sarmad_sabih_ses_with_rails.png",
    },
    {
      source: "SitePoint",
      date: "October 24, 2016",
      title: "Continuous Deployment of Rails with SemaphoreCI",
      url: "https://www.sitepoint.com/continous-deployment-of-rails-with-semaphoreci/",
      preview: "Our goal today is to setup a Rails project which uses Semaphore CI to test the project and then deploy automatically to an Amazon EC2 server using Capistrano. We’ll be using Nginx, Puma...",
      image: "images/blogs/sarmad_sabih_ci_semaphore_rails.png",
    },
    {
      source: "SitePoint",
      date: "September 12, 2016",
      title: "10 Ruby on Rails Best Practices",
      url: "https://www.sitepoint.com/10-ruby-on-rails-best-practices-3/",
      preview: "Ruby on Rails is a web application framework, we all know that. Rails makes us more productive and lets us focus on the task at hand rather than the technology. But sticking to best...",
      image: "images/blogs/sarmad_sabih_10_ror_best_practices.jpeg",
    },
    {
      source: "Medium",
      date: "Nov 14, 2016",
      title: "60 Miles",
      url: "https://www.sitepoint.com/10-ruby-on-rails-best-practices-3/",
      preview: "Life, what seems like is no more than a 60–70 Miles journey on average, that too if you’re lucky. A journey where everybody starts at “zero” and travels the way ahead to their last breathe. People...",
      image: "images/blogs/sarmad_sabih_60miles.jpeg",
    },
    {
      source: "Medium",
      date: "May 18, 2017",
      title: "Law & order in Pakistan: son of Provincial Assembly...",
      url: "https://medium.com/@sarmadsabih/law-order-in-pakistan-son-of-provincial-assembly-speaker-allegedly-kills-man-while-drunk-driving-11d11d9421cb",
      preview: "Son of Agha Siraj Durrani – Speaker of Sindh Assembly (Provincial assembly of Pakistan) got himself involved in an accident last night while allegedly being drunk which took the life of a man.",
      image: "images/blogs/sarmad_sabih_law_and_order_pakistan.jpg",
    },
    {
      source: "Medium",
      date: "Jun 10, 2017",
      title: "The All-Seeing",
      url: "https://medium.com/@sarmadsabih/the-all-seeing-76b0104dfe53",
      preview: "Who could have imagined back in the day that we’d be able to record our whole life digitally. Many of the things we do on the Internet are recorded somewhere.",
      image: "images/blogs/sarmad_sabih_all_seeing.jpg",
    },
    {
      source: "Medium",
      date: "Aug 1, 2017",
      title: "Cost Of A Balanced Life And Afterlife",
      url: "https://medium.com/@sarmadsabih/cost-of-a-balanced-life-and-after-life-2fe704086dda",
      preview: "I’m seeing people in the west like DHH talking more and more about a balanced life, taking on the likes of Apple and Microsoft. Their sleep deprivation antics are damaging people and setting...",
      image: "images/blogs/sarmad_sabih_cost_of_balanced_life.jpg",
    },
    {
      source: "Medium",
      date: "Sep 8, 2017",
      title: "My 10Pearls Journey",
      url: "https://medium.com/@sarmadsabih/my-10pearls-journey-b6b78f6c9e1",
      preview: "I’ve resigned from the post of Senior Software Developer at TenPearls and currently serving the notice period. I want to reflect on what a wonderful journey it was of about 2.5 years.",
      image: "images/blogs/sarmad_sabih_10pearls_journey.jpg",
    },
    {
      source: "Medium",
      date: "Sep 27, 2017",
      title: "A Brief Guide To Learning Ruby on Rails",
      url: "https://medium.com/@sarmadsabih/a-brief-guide-to-learning-ruby-on-rails-b5c0e32acabb",
      preview: "I was tasked to compile a brief yet comprehensive guide to help newbies learn Ruby on Rails at 10Pearls, and I came up with this. I haven’t spent much time on it, though I feel this...",
      image: "images/blogs/sarmad_sabih_learning_ror.jpg",
    },
    {
      source: "Medium",
      date: "Nov 26, 2017",
      title: "My Bad Experience With Upwork",
      url: "https://medium.com/@sarmadsabih/my-bad-experience-with-upwork-a19909925d6e",
      preview: "I’m Ruby on Rails senior software engineer. I get a lot of work requests through LinkedIn and that’s normal for people in our field. I got a client through LinkedIn who wanted my help...",
      image: "images/blogs/sarmad_sabih_my_bad_experience_with_upwork.jpg",
    },
    {
      source: "Medium",
      date: "Mar 26, 2018",
      title: "The Myth Of “Lack Of Commitment” In Software...",
      url: "https://medium.com/@sarmadsabih/the-myth-of-lack-of-commitment-in-software-industry-of-developing-countries-17e62af10402",
      preview: "Employers and managers expect employees to go the extra mile. Primarily because it is a logical thing for anyone doing what they love. In the field of software it is perceived that the...",
      image: "images/blogs/sarmad_sabih_the_myth_of_lack_of_commitment_in_software_industry_of_developing_countries.jpg",
    },
  ]
// Data

$(document).ready(function(){
  function renderExperience() {
    var returnHtml = ""
    $.each(experienceData.reverse(), function(index, experience) {
      returnHtml += "<!-- single experience -->";
      returnHtml += "<div class='experience-content'>";
      returnHtml += "<span class='period-experience'>" + experience.from + " - " + experience.to + "</span>";
      returnHtml += "<h3 class='specialty-name'>" + experience.designation + "</h3>";
      returnHtml += "<h3 class='company-name'><a href='" + experience.company_url + "' target='_blank'>" + experience.company_name + "</a></h3>";
      if(experience.company_intro) {
        returnHtml += "<p class='prg-experience'><b>Company: </b>" + experience.company_intro + "</p>"
      }
      if(experience.my_experience) {
        returnHtml += "<p class='prg-experience'><b>My Experience: </b>" + experience.my_experience + "</p>"
      }
      returnHtml += "</div>"
      returnHtml += "<!-- / single experience -->"
    });
    $(".all-experience").html(returnHtml);
  };

  function renderEducation() {
    var returnHtml = ""
    $.each(educationData, function(index, education) {
      returnHtml += "<!-- single education -->";
      returnHtml += "<div class='col-sm-4'>";
      returnHtml += "<div class='education-content'>";
      returnHtml += "<div class='period'>";
      returnHtml += "<h3>" + education.from + " - " + education.to + "</h3>";
      returnHtml += "</div>";
      returnHtml += "<ul class='ul-education'>";
      returnHtml += "<li class='li-specialty'>";
      returnHtml += "<div class='specialty'>";
      returnHtml += "<span class='education-icon'><i class='fa fa-file-text'></i></span>";
      returnHtml += "<span class='specialty-name'>" + education.name + "</span>";
      returnHtml += "</div>";
      returnHtml += "</li>";
      returnHtml += "<li class='li-university'>";
      returnHtml += "<div class='university'>";
      returnHtml += "<span class='education-icon'><i class='fa fa-university'></i></span>";
      returnHtml += "<span class='university-name'>" + education.institute_name + "</span>";
      returnHtml += "</div></li></ul>";
      returnHtml += "<p class='prg-education'>" + education.description + "</p>";
      returnHtml += "</div></div><!-- / single education -->";
    });
    $(".all-education").html(returnHtml);
  };

  function renderProjects() {
    var returnHtml = "";
    $.each(projectsData, function(index, project) {
      returnHtml += "<!-- single work --><div class='col-sm-6'><div class='item-portfolio " + project.filters + "'><div class='item-overlay'>";
      returnHtml += "<div class='item-content'><span class='icon-search'>";
      returnHtml += "<a class='work-popup' href='" + project.imageUrl + "' data-group='1'><i class='fa fa-search' aria-hidden='true'></i></a>";
      returnHtml += "</span><span class='icon-plus'>";
      returnHtml += "<a href='" + project.url + "' target='_blank'><i class='fa fa-plus' aria-hidden='true'></i></a>";
      returnHtml += "</span><h3>" + project.name + "</h3></div></div><img src='" + project.thumbImageUrl + "' alt=''>";
      returnHtml += "</div></div><!-- / single work -->"
    });
    $(".all-projects").html(returnHtml);
  };

  function renderClients() {
    var returnHtml = "";
    $.each(experienceData.concat(projectsData), function(index, client) {
      if(client.iconUrl){
        returnHtml += "<div class='col-md-2 col-xs-6'>";
        returnHtml += "<img src='" + client.iconUrl + "' class='img-responsive' />";
        returnHtml += "</div>";
      }
    });
    $(".clients").html(returnHtml);
  };

  function renderCertificates() {
    var returnHtml = "";
    var clearFix = 0;
    $.each(certifiatesData, function(index, certificate) {
      clearFix += 1;
      returnHtml += "<div class='col-sm-4'>"
      returnHtml += "<div class='item-portfolio'>"
      returnHtml += "<div class='item-overlay'>"
      returnHtml += "<div class='item-content'>"
      returnHtml += "<span class='icon-search'>"
      returnHtml += "<a class='work-popup' href='" + certificate.imagePath + "' data-group='1'><i class='fa fa-search' aria-hidden='true'></i></a>"
      returnHtml += "</span>"
      returnHtml += "<h3>" + certificate.name + "</h3>"
      returnHtml += "</div>"
      returnHtml += "</div>"
      returnHtml += "<img src='" + certificate.imagePath + "' alt=''>"
      returnHtml += "</div>"
      returnHtml += "</div>"
      if(clearFix === 3) {
        returnHtml += "<div class='clearfix'></div>";
        clearFix = 0;
      }
    });
    $(".certificates").html(returnHtml);
  };

  function renderFacebookEmbeds() {
    var returnHtml = "";
    var clearFix = 0;
    $.each(facebookEmbeds, function(index, post) {
      clearFix += 1;
      returnHtml += '<div class="col-md-6 col-xs-12">';
      returnHtml += post;
      returnHtml += '</div>';
      if(clearFix === 2) {
        returnHtml += "<div class='clearfix'></div>";
        clearFix = 0;
      }
    });
    $("#facebook .row").html(returnHtml);
  };

  function renderInterestEmbeds() {
    var returnHtml = "";
    var clearFix = 0;
    $.each(interestEmbeds, function(index, post) {
      clearFix += 1;
      returnHtml += '<div class="col-md-6 col-xs-12">';
      returnHtml += post;
      returnHtml += '</div>';
      if(clearFix === 2) {
        returnHtml += "<div class='clearfix'></div>";
        clearFix = 0;
      }
    });
    $("#interests .interest-embeds").html(returnHtml);
  };

  function renderBlogs() {
    var returnHtml = "";
    $.each(blogs.reverse(), function(index, blog) {
      returnHtml += '<div class="col-sm-6">';
      returnHtml += '<div class="blog-content">';
      returnHtml += '<img src="' + blog.image + '" alt="">';
      returnHtml += '<div class="blog-detail">';
      returnHtml += '<h4>' + blog.source + '</h4>';
      returnHtml += "<h3><a href='" + blog.url + "' target='_blank'>" + blog.title + "</a></h3>";
      returnHtml += '<ul class="ul-detail">';
      returnHtml += '<li><i class="fa fa-calendar-check-o"></i>' + blog.date + '</li>';
      returnHtml += '</ul>';
      returnHtml += '<p>' + blog.preview + '</p>';
      returnHtml += "<a href='" + blog.url + "'><span class='read-more'>READ MORE</span></a>";
      returnHtml += '</div>';
      returnHtml += '</div>';
      returnHtml += '</div>';
    });
    $(".blogs").html(returnHtml);
  };



  renderExperience();
  renderEducation();
  renderProjects();
  renderClients();
  renderCertificates();
  renderFacebookEmbeds();
  renderInterestEmbeds();
  renderBlogs();
});
