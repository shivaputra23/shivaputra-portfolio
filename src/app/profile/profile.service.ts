import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;
  experience:any=this.calculateExperience('2021-12-06','yearsAndMonths')
  totalYears: any= this.calculateExperience('2021-12-06','onlyYears')
  totalMonths:any=this.calculateExperience('2021-12-06','onlyMonths')
  constructor(
    private http: HttpClient
  ) {
   
    
    // Example usage
    console.log(`Software Developer with s${this.experience} of hands-on experience.`);
   }
    calculateExperience(startDate:any,type:any ='yearsAndMonths') {
    const start = new Date(startDate);
    const now = new Date();
  
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    if(type == "yearsAndMonths") return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
    if(type == "onlyYears") return `${years} year${years !== 1 ? 's' : ''}`;
    if(type == "onlyMonths") return `${months} month${months !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
  }

  projects:any = [
    {
      id: 1,
      title: 'Ecommerce application',
      desc: '',
      livedemo: 'https://legalcliq-ecom-app.netlify.app',
      githurl: 'https://github.com/shivaputra23/LegalCliQ_angular.git',
      imgUrl: 'assets/images/legalcliq.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },
    {
      id: 2,
      title: 'Hacker News App Clone using ReactJS ',
      desc: '',
      livedemo: 'https://hacker-news-clone23.herokuapp.com/',
      githurl: 'https://github.com/shivaputra23/Hacker-News-Clone.git',
      imgUrl: 'assets/images/hacker.png',
      tech: 'React JS'
    },
    {
      id: 3,
      title: 'Personal Portfolio Using HTML,CSS,Javascript',
      desc: '',
      livedemo: 'https://shivaputra-profile.herokuapp.com/',
      githurl: 'https://github.com/shivaputra23/Portfolio.git',
      imgUrl: 'assets/images/portfolio2.png',
      tech: 'HTML, CSS, Javascript'
    },
    {
      id: 4,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://shivaputra-portfolio.netlify.app/',
      githurl: 'https://github.com/shivaputra23/shiva-s-portfolio.git',
      imgUrl: 'assets/images/portfolio1.png',
      tech: 'Angular,Bootstrap'
    }
  ]
  about2 = `Software Developer with ${this.experience} of experience in building dynamic, scalable, and responsive web applications. Over the past  ${this.totalYears}, I have gained hands-on experience across the Software Development Life Cycle, delivering high-quality solutions using technologies like Angular, Node.js, JavaScript, TypeScript, MongoDB, and React.`

  about = "I specialize in both front-end and back-end development, with a deep understanding of Angular and React for creating seamless user interfaces. On the back-end, I have built robust, scalable systems using Node.js and MongoDB."
  resumeurl = "https://drive.google.com/file/d/1qRXBntR46TJuWqZg73ooe29y1U3ZpsWj/view?usp=drive_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      "description":"Skilled in building scalable and dynamic single-page applications (SPAs) using Angular, including components, services, and state management.",
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      "description":"Experienced in developing server-side applications using Node.js, handling asynchronous operations, and creating RESTful APIs with Express.js.",
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      "description":"Proficient in modern JavaScript (ES6+), including asynchronous programming (Promises, async/await), closures, and DOM manipulation.",
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'MONOGO DB',
      "description":"MongoDB for NoSQL database management, performing CRUD operations, and utilizing aggregation frameworks.",
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'TYPESCRIPT',
      "description":" Proficient in building robust applications with TypeScript, leveraging static typing, interfaces, and modern OOP features to ensure maintainable and scalable code",
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'Tools & Technologies (Git, GitHub, NPM, Bitbucket)',
      "description":"Experienced in version control with Git, including branching and collaboration, and proficient in package  and script management using NPM.",
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Redis',
      "description":"Experienced in utilizing Redis as an in-memory data store and cache, optimizing performance with its fast data retrieval.",
      'progress': '75%'
    },
    {
      'id': '8',
      'skill': 'REACT JS',
      "description":"Experienced in developing interactive user interfaces with React, utilizing React Hooks, Context API, and functional component architecture.",
      'progress': '75%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'institution': 'Bheema Institute of Technology and Science, Adoni',
      'info': ``
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2016',
      'education': 'Intermediate (10+2)',
      'stream': 'M.P.C',
      'institution': 'Dr. Jyothirmayi Memorial Junior College, Adoni',
      'info': ``
    },
    {
      'id': '3',
      'from_to_year': '2013 - 2014',
      'education': 'S.S.C',
      'stream': '10th standard',
      'institution': 'Z.P.High School, Mantralayam',
      'info': ``
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'SignDesk',
      location: 'Bengaluru, India',
      timeline: 'Dec 2021 to Present',
      role: 'Software Engineer ',
      about:"At SignDesk, I contribute to the development of e-signature platform, using the MEAN stack (MongoDB, Express.js, Angular, Node.js) to build robust solutions that optimize business workflows.",
      work: [
"Designed and implemented complex business logic for seamless module integration, enabling efficient e-signature workflows within the platform.",
"Led the development and integration of e-signature functionalities, significantly enhancing system performance and reliability.",
"Delivered new features on time within Agile sprints, improving platform functionality and enhancing user experience.",
"Optimized key system components to improve scalability and performance, resulting in improved uptime and faster load times.",
"Implemented a centralized error-handling mechanism that streamlined error reporting and reduced bug-fix turnaround time.",
"Managed and delivered multiple critical, time-sensitive projects while maintaining high standards of code quality.",
"Conducted regular code reviews, collaborating with team members to improve overall code quality and reduce errors.",
"In recognition of my contributions, I was awarded the Best Employee of the Quarter and nominated multiple times for my consistent performance and dedication to delivering high-quality solutions."
      ]

    }

  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
