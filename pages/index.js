import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home({ photo }) {
  return (
    <div className={`${roboto.className} container mt-28 mx-auto px-4`}>
      <section
        id="home"
        className="flex justify-center items-center md:justify-start"
      >
        <div className="w-96 overflow-hidden border-stone-300 border-4 rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://s3.us-west-2.amazonaws.com/juanchung.net/Juan1.JPG"
            alt="profile_photo"
          />
        </div>
      </section>

      <section className="mt-5 text-xl text-gray-600">
        <p className=""></p>
        <p className="text-sm">[Last Updated: Aug 25, 2023]</p>
        <div className="flex">
          <a
            href="https://s3.us-west-2.amazonaws.com/juanchung.net/RESUME_BCIT_COOP_V1.7.pdf"
            download
            className="hover:text-orange-700 md:hover:text-orange-700"
          >
            Resume Download
          </a>
        </div>
        <p className="text-sm">
          Please note that the PDF provides a summary of the information
          presented in this online resume.
        </p>
      </section>

      <section id="aboutme" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          About Me
        </div>
        <p className="text-xl mb-5 leading-normal text-gray-600">
          Hi, my name is Juan Chung. I'm currently studying at the BCIT CST
          Program. With a proven track record in operations, I am currently
          seeking a new challenge as a software engineer. I possess strong
          skills in various programming languages and have self-taught knowledge
          in cloud computing. My most notable strength is my agile comprehension
          of business processes and organizational structure.
        </p>
        <div className="container bg-stone-100 p-5">
          <ul className="list-disc leading-normal pl-5 text-xl text-gray-600">
            <li>
              Abundant hands-on experience in operations across various
              industries.
            </li>
            <li>
              Capable of quickly understanding clients business processes and
              systems.
            </li>
            <li>
              Strong belief in the importance of collective intelligence and
              motivation for team success in achieving shared goals.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Technical Skills
        </div>

        <ul className="pl-5 list-disc lg:grid lg:grid-cols-4 md:grid-cols-2 gap-2 text-xl text-gray-600">
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML/CSS</li>
          <li>NextJS</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>AWS</li>
          <li>Terraform</li>
          <li>Git</li>
          <li>Agile Methodology</li>
          <li>Quality Assurance</li>
        </ul>
      </section>

      <section id="education" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Education
        </div>

        <ul className="grid grid-cols-3 pl-5 text-xl leading-normal text-gray-600">
          <li className="col-span-2 list-disc">
            British Columbia Institute of Technology |
            <i> Computer Systems Technology Diploma (GPA: 91%)</i>
          </li>
          <li className="col-span-1 text-xl text-right">Jan 2023 - Present</li>
          <li className="col-span-2 text-xl list-disc">
            University of Washington in Seattle |{" "}
            <i>Bachelors Degree in Economics</i>
          </li>
          <li className="col-span-1 text-xl text-right">Sep 2004 - Aug 2010</li>
        </ul>

        <div className="mt-20 mb-5 py-4 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Certifications
        </div>

        <ul className="grid grid-cols-3 pl-5 text-xl leading-normal text-gray-600">
          <li className="col-span-2 list-disc">
            AWS Solutions Architect Associate{" "}
            <span className="text-sm text-orange-700">
              <a href="#certifications">view credential</a>
            </span>
          </li>
          <li className="col-span-1 text-right">In Progress</li>

          <li className="col-span-2 list-disc">
            AWS Cloud Practitioner{" "}
            <span className="text-sm text-orange-700">
              <a
                target="_blank"
                href="https://www.credly.com/badges/3f049aaf-b16f-4760-ba58-6f73162afedc/public_url"
              >
                view credential
              </a>
            </span>
          </li>
          <li className="col-span-1 text-right">Jun 2023</li>

          <li className="col-span-2 list-disc">
            Microsoft Azure Fundamentals{" "}
            <span className="text-sm text-orange-700">
              <a
                target="_blank"
                href="https://www.credly.com/badges/2c4d6872-1494-48e5-ae32-453faa8f30c0/public_url"
              >
                view credential
              </a>
            </span>
          </li>
          <li className="col-span-1 text-right">Jun 2023</li>

          <li className="col-span-2 list-disc">
            Java Programming I, Online Course, University of Helsinki{" "}
            <span className="text-sm text-orange-700">
              <a target="_blank" href="/java.png">
                view credential
              </a>
            </span>
          </li>
          <li className="col-span-1 text-right">Sep - Nov 2022</li>

          <li className="col-span-2 list-disc">
            Crash Course On Python - Google IT Automation with Python Professional Certificate{" "}
            <span className="text-sm text-orange-700">
              <a
                target="_blank"
                href="https://coursera.org/share/5b6cba214c4be2afdca2160fcbc98b9e"
              >
                view credential
              </a>
            </span>
          </li>
          <li className="col-span-1 text-right">Jun - July 2022</li>
        </ul>
      </section>

      <section id="projects" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Projects
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Back-End Developer | How To Make Ramen{" "}
            <span className="text-sm text-gray-600">
              <a
                className="text-orange-700"
                target="_blank"
                href="https://github.com/jchung7v/How-To-Make-Ramen"
              >
                github
              </a>{" "}
            </span>
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Aug 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
            Based on hypothetical client requirements, I implemented a Java program using OOP principles to simulate a robot cooking ramen, 
            emphasizing code reusability and scalability 
            </li>
          </ul>
        </div>
        

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Full Stack Developer | Ask Doctor Brown{" "}
            <span className="text-sm text-gray-600">
              <a
                className="text-orange-700"
                target="_blank"
                href="https://github.com/jchung7v/Doctor-Brown"
              >
                github
              </a>{" "}
              |{" "}
              <a
                className="text-orange-700"
                target="_blank"
                href="https://main.d2ca7ws6kiki2r.amplifyapp.com/"
              >
                output
              </a>
            </span>
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            July - Aug 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Developed a mobile app that intuitively listens to young
              children's questions and responds with age-appropriate text and
              voice answers.
            </li>
            <li>
              Built a web platform with Next.js and Tailwind CSS, hosted on AWS
              Amplify. Integrated the OpenAI API for answers and used AWS Polly
              for AI voice output. Backend operations were managed using Python
              functions on AWS Lambda.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Full Stack Developer | Cloud Resume Challenge{" "}
            <span className="text-sm text-gray-600">
              <a
                className="text-orange-700"
                target="_blank"
                href="https://github.com/jchung7v/My-Resume"
              >
                github
              </a>{" "}
              |{" "}
              <a
                className="text-orange-700"
                target="_blank"
                href="https://juanchung.net"
              >
                output
              </a>
            </span>
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            June - Aug 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Developed a static website resume using Next.js and Tailwind CSS,
              hosted securely on AWS S3 and CloudFront.
            </li>
            <li>
              The application was further enhanced with a AWS Lambda function,
              written in Python, and integrated with DynamoDB.
            </li>
            <li>
              Implemented a robust CI/CD pipeline using GitHub Actions, which
              incorporated comprehensive end-to-end testing with Cypress.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Full Stack Developer | Interactive Story Platform{" "}
            <span className="text-sm text-gray-600">
              <a
                className="text-orange-700"
                target="_blank"
                href="https://github.com/jchung7v/Stories-A-Million"
              >
                github
              </a>{" "}
              |{" "}
              <a
                className="text-orange-700"
                target="_blank"
                href="https://2800-202310-bby-19.vercel.app/"
              >
                output
              </a>
            </span>
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Apr - May 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Developed a community platform that connects writers and readers,
              enabling them to create unique stories with the help of the OpenAI
              API.
            </li>
            <li>
              As a member of 4, utilized Next JS to create API endpoints, and
              used Tailwind CSS to design the user interface and layout of the
              web application.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Full Stack Developer | Quiz Web Apps{" "}
            <span className="text-sm text-gray-600">
              <a
                className="text-orange-700"
                target="_blank"
                href="https://github.com/jchung7v/Quiz-Web-Apps"
              >
                github
              </a>
            </span>
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jan - Apr 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Led a 3-member team in developing a trivia quiz game that educates
              users on pet care during extreme weather events.
            </li>
            <li>
              Championed the full development cycle, from designing the database
              structure to writing code in JavaScript and Node JS to create
              server-side logic such as calculating scores.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Front-End Developer | Imposter Syndrome Self Assessment Web Apps
            (Hackathon){" "}
            <span className="text-sm text-gray-600">
              <a
                className="text-orange-700"
                target="_blank"
                href="https://github.com/jchung7v/Mindscape"
              >
                github
              </a>{" "}
              |{" "}
              <a
                className="text-orange-700"
                target="_blank"
                href="https://hackthebreak-77859.web.app/"
              >
                output
              </a>
            </span>
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Mar 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Developed a self-assessment tool to help users in identifying the
              symptoms and triggers of Imposter Syndrome.
            </li>
            <li>
              In a team of 3, used Bootstrap to design the user interface and
              JavaScript to add interactive elements like form submissions,
              modal pop-ups, and buttons.
            </li>
          </ul>
        </div>
      </section>

      <section id="experience" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          IT Consulting Experience
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Book Publisher, Operations Manager | JoEunSaengGak
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jul 2015 - Oct 2022
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Led a digital transformation team to renovate the outdated website
              and migrate 20 years of data from physical servers to Amazon cloud
              servers.
            </li>
            <li>
              Managed the publication workflow for the monthly magazine while
              sustaining an average subscription retention rate above 90%.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Operations Consultant, Senior Associate | PriceWaterhouseCoopers
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jun 2014 - Jun 2015
          </div>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: SK Hynix Resource Management Project
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              Conducted in-depth interviews with the R&D department of the
              world’s second-largest memory chip maker to design the foundation
              process map of a time-tracking module for managing and tracking
              individual contributions.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Operations Consultant, Associate | Accenture PLC
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Oct 2010 - Mar 2014
          </div>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: KT, SAP ERP(Enterprise Resource Planning) System
            Implementation
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              As a member of the Project Management Office, wrote a daily
              progress report, managed the scheduling of integration tests, and
              participated in training power users for their quick adaptation.
            </li>
          </ul>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: Samsung Electronics, Contract Life-cycle Management
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              Conducted assessment of the internal process and rules of more
              than 30,000 contracts and established an optimized CLM framework
              in collaboration with the internal legal team.
            </li>
          </ul>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: SIMTEC, Procurement Optimization Model Implementation
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              Created an Excel-based automation tool to calculate a safety stock
              level, temporarily replacing the clients legacy system.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
