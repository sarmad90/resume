// Data
  var experience_data = [
    {
      "company_name": "Comstar",
      "designation": "Software Engineer",
      "company_intro": "",
      "my_experience": "It was my first job. I didn't know what Ruby on Rails is prior to joining. I was just so enthusiastic about software development that I didn't care what tools I was going to use. During my time here, I worked on TutorChatLive, Medijean and SmarterSkin. Technologies used were RoR, JS, AngularJS.",
      "company_url": "http://comstar.com.pk/",
      "from": "Jan 2013",
      "to": "May 2014",
    },
    {
      "company_name": "Activa Financial",
      "designation": "Lead Software Engineer",
      "company_intro": "",
      "my_experience": "At first, I started working for Activa Financial as a consultant, while I was still working at Comstar. It later turned out my 2nd full time job. I was leading the in-house product which was AlertParent. Primarily worked on RoR, JS, PhoneGap (iOS, Android & WindowsPhone). Publishing apps on the app store was something I did for the first time. Even worked on Adobe ColdFusion briefly.",
      "company_url": "http://www.activafinancial.com/",
      "from": "May 2014",
      "to": "Feb 2015",
    },
    {
      "company_name": "10Pearls",
      "designation": "Senior Software Developer",
      "company_intro": "10Pearls is an award-winning digital development company, helping business with user research and design, product development and technology acceleration. We specialize in mobile & web apps, enterprise solutions, cyber security, big data, IoT, cloud and devops. We help our clients design, build, and launch innovative digital products that engage customers and drive revenue. Companies rely on 10Pearls to help them stay competitive in today’s digital economy. We design, build, and support digital products that deliver results. We believe in co-creation, working with our clients as one-team. Our process is collaborative, transparent, and proactive. Our development process follows a continuous cycle-build, measure, learn, and improve. We strive to maximize efficiency, minimize surprises, and increase speed to market. We fuel business acceleration through digital, providing highly compelling customer experiences that drive businesses forward.",
      "my_experience": "My third and longest job to date. Technologies which I worked on here are RoR, JS, AngularJS 1 & 2, React/Redux/Flux.",
      "company_url": "https://10pearls.com/",
      "from": "Feb 2015",
      "to": "Oct 2017",
    },
    {
      "company_name": "CreativeChaos",
      "designation": "Associate Principal Software Engineer",
      "company_intro": "We are Lean. We are Agile. We enable clients in 20 countries to outperform the competition and stay ahead of the innovation curve. Headquartered in San Francisco with delivery capabilities across the globe Founded in 2000. 400+ full time associates globally. We use creativity, passion, and our experience in technology to help our clients make smart decisions 1200+ successful projects across multiple industry verticals. 450+ customers globally. 60% business from Fortune 500 customers. We love working with startups to help create scalable platforms and remarkable digital assets Technology partners and investors in 15+ startups.",
      "my_experience": "I've just started working here as the senior most Ruby guy. Looking forward to great things.",
      "company_url": "http://www.csquareonline.com",
      "from": "Oct 2017",
      "to": "Current",
    },
  ]
  var education_data = [
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
  var projects_data = [
    {
      name: "Tutor Chat Live",
      thumbImageUrl: "images/portfolio/tutorchatliveorg-square.png",
      imageUrl: "images/portfolio/tutorchatliveorg.png",
      url: "http://www.tutorchatlive.org/",
      filters: "ruby-on-rails js",
      info: "TutorChatLive (TCL) is a 501(c)(3) organization that connects volunteer tutors with middle and high school students through a customized, real-time chat platform on our website.",
    },
    {
      name: "SmarterSkin Dermatology",
      thumbImageUrl: "images/portfolio/smarter-skin-1.png",
      imageUrl: "images/portfolio/smarter-skin-2.png",
      url: "http://www.smarterskindermatology.com/",
      filters: "ruby-on-rails angular-js",
      info: "The average wait time to see a dermatologist is approximately 4-6 weeks throughout the United States and even longer in certain areas. We understand the stress and anxiety of waiting, as well as the unnecessary inconvenience of taking time off of work/school for your appointments. At SmarterSkin, the patient comes first. The service was started by a group of Dermatologists that believe that technology in health care should be embraced. Given the increasing number of patients and shortage of dermatologists, we believe teledermatology allows for access to those who may otherwise have difficulties.",
    },
    {
      name: "Medijean",
      thumbImageUrl: "images/portfolio/medijean3square.png",
      imageUrl: "images/portfolio/medijean3.png",
      url: "http://www.medijean.com/",
      filters: "ruby-on-rails js",
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
    },
    {
      name: "Telmate",
      thumbImageUrl: "images/portfolio/telmate-square.png",
      imageUrl: "images/portfolio/telmate.png",
      url: "https://www.telmate.com/",
      filters: "ruby-on-rails react-js",
      info: "Telmate was founded in 1998 and started its journey as inmate technology experts under the name Pinnacle Public Services. At the time, Pinnacle was providing excellent service and installation to the leading inmate communications solution providers throughout the Northwest. It was through this experience that we recognized a need in the industry for a superior inmate communications solution; one that provides facilities with uncompromising reliability, cutting-edge technology and security, coupled with prompt customer service and repair. Telmate’s innovative solutions not only improve operational efficiencies, but also cater to the changing needs of the corrections sector. Telmate provides services to facilities of all sizes, ranging from holding cells, city jails, county correctional facilities, state DOCs and federal detention centers. Our largest account houses over 18,000 inmates. Telmate is deployed in over 300 correctional facilities in North America spanning nearly all U.S. states and Canadian provinces. Because of our innovations in inmate phone, video, tablet, and offender tracking solutions, Telmate has been recognized as a leading inmate telecom provider in North America. Unlike our competitors, our growth has been entirely organic and a result of the close relationships we foster with our customers. They alone are the best evidence we’re doing the right thing; it is through them that we get the majority of our new customers. We look forward to the opportunity to serve you in the near future.",
    },
    {
      name: "IZEA",
      thumbImageUrl: "images/portfolio/izea-square.png",
      imageUrl: "images/portfolio/izea.png",
      url: "https://izea.com/",
      filters: "ruby-on-rails ember-js",
      info: "IZEAx® is an influencer marketing platform for agencies and brands that automates influencer and content marketing programs. Our platform eliminates time consuming processes, streamlines workflow and provides robust enterprise features designed for high volume execution of campaigns.",
    },
    {
      name: "DC Taxi",
      thumbImageUrl: "images/portfolio/dctaxi-square.png",
      imageUrl: "images/portfolio/dctaxi.png",
      url: "https://www.dctaxi.com/",
      filters: "ruby-on-rails js",
      info: "We are the taxi drivers of DC. We know the DC streets like the back of our hand. We are insured and vetted by the DC Department of For-Hire Vehicles, have FBI background checks, and an average of 20 years professional driving experience. When you ride with us, you ride with the best drivers in the DC area.",
    },
    {
      name: "Checkup & Choices",
      thumbImageUrl: "images/portfolio/checkupandchoices-square.png",
      imageUrl: "images/portfolio/checkupandchoices.png",
      url: "http://checkupandchoices.com/",
      filters: "react-js",
      info: "Pioneered by acclaimed clinical researcher, Reid K. Hester, Ph.D., our evidence-based tools are the culmination of years of rigorous research, millions of dollars of National Institutes of Health grants, multiple randomized clinical trials, and peer-reviewed publications. If you’re wondering about your drinking, you’ve come to the right place. Many people question their own alcohol use, and there’s no shortage of opinions out there about how much is too much. CheckUp & Choices is a scientifically proven program designed to help people assess and, if necessary, address their drinking. The program begins with a free, 10 question, clinically validated questionnaire that will provide solid feedback about your drinking, and relevant options for you, should you decide to change your drinking or take a deeper look at why you drink.",
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
      info: "We all dream of owning a home, but there’s something giving many of us pause—the thought of going through the obstacle course of getting a mortgage. It’s much harder than it should be to get a “home, sweet home” of our own. Why? Because the current process thrives on chaos and confusion. So much so that it leaves homebuyers overwhelmed and stressed out. Should it really be this difficult to put a roof over your head? A roof that you own? No. And that’s why we’re here. We’re out to simplify the complex world of mortgages. We know this is the moment you’ve been saving for. And we know buying a home is much more than a decision you live with—it’s a decision you live in. The path to homeownership is a big deal. So let’s fill it with clarity. With candor. And, in the process, let’s fill you with confidence. Let’s give you some control. We have the expertise and online tools homebuyers need to put them on a path that seamlessly takes them from pre-approval to contract to closing. All with the straightforward information and honest guidance they need to feel involved and empowered along the way. We’re LendingHome. We’re on a mission to revolutionize the world of mortgages and put the power, and the keys, where they belong—in your hands."
    },
  ]
// Data

$(document).ready(function(){
  function renderExperience() {
    var returnHtml = ""
    $.each(experience_data.reverse(), function(index, experience) {
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
    $.each(education_data, function(index, education) {
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
    $.each(projects_data, function(index, project) {
      returnHtml += "<!-- single work --><div class='col-sm-6'><div class='item-portfolio " + project.filters + "'><div class='item-overlay'>";
      returnHtml += "<div class='item-content'><span class='icon-search'>";
      returnHtml += "<a class='work-popup' href='" + project.imageUrl + "' data-group='1'><i class='fa fa-search' aria-hidden='true'></i></a>";
      returnHtml += "</span><span class='icon-plus'>";
      returnHtml += "<a href='" + project.url + "' target='_blank'><i class='fa fa-plus' aria-hidden='true'></i></a>";
      returnHtml += "</span><h3>" + project.name + "</h3></div></div><img src='" + project.thumbImageUrl + "' alt=''>";
      returnHtml += "</div></div><!-- / single work -->"
    });
    $(".all-projects").html(returnHtml);
  }

  renderExperience();
  renderEducation();
  renderProjects();
});
