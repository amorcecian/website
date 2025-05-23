import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const resumeData = {
  name: "Aram Christian Morcecian",
  contact: {
    phone: "+54 911 6941 8682",
    email: "amorcecian@gmail.com",
    location: "Buenos Aires, Argentina",
    linkedin: "http://linkedin.com/in/aram-morcecian",
  },
  summary: "Experienced Data Architect with over a decade in IT and 5 years specializing in data engineering. Expertise in building scalable cloud data infrastructures and driving data-driven decisions through innovative analytics solutions.",
  skills: [
    "SQL", "Python", "AWS", "GCP", "Azure", "Serverless Computing", "Event Streaming", 
    "AWS Kinesis", "SQS", "SNS", "dbt", "AWS Glue Studio", "PDI", "Apache Airflow", 
    "Kafka", "Snowflake", "Redshift", "BigQuery", "Power BI", "Tableau", "Terraform", "GitHub Actions"
  ],
  experience: [
    {
      company: "Allurion Technologies",
      period: "08/2021 – Present",
      title: "Senior Data Engineer – Technical Lead",
      responsibilities: [
        "Led the design and maintenance of AWS-based data infrastructure.",
        "Led cross-functional teams in data integration projects across Marketing, Product, and Analytics.",
        "Developed Python APIs and AWS Glue pipelines (Python and PySpark) for data integration.",
        "Developed ETL jobs using dbt.",
        "Implemented serverless architecture solutions using AWS Lambda and API Gateway.",
        "Designed scalable analytics architecture in Snowflake.",
        "Architected real-time streaming data pipelines using Kafka and AWS Kinesis.",
        "Utilized AWS services (Athena, Lambda, API Gateway) for efficient data processing.",
        "Integrated data from GCP (BigQuery, Cloud Storage, Google Analytics) and Azure (Power BI).",
      ],
    },
    {
      company: "Globant",
      period: "10/2020 – 08/2021",
      title: "Data Architect",
      responsibilities: [
        "Implemented data solutions using the Hadoop framework and AWS services.",
        "Designed scalable SQL and NoSQL databases for analytics projects.",
        "Developed event-driven architectures using messaging services (SNS/SQS).",
        "Created and maintained technical documentation for enterprise data initiatives.",
      ],
    },
    {
      company: "ExxonMobil GBG",
      period: "06/2019 – 10/2020",
      title: "Data Engineer",
      responsibilities: [
        "Conducted ETL processes using Python and SQL.",
        "Developed and maintained APIs for data access.",
        "Created interactive dashboards using Power BI and Tableau.",
        "Collaboratively worked within an Agile framework to enhance project delivery.",
      ],
    },
     {
      company: "Buenos Aires City Government",
      period: "06/2015 – 05/2019",
      roles: [
        {
          title: "Data Integrator Specialist",
          period: "01/2018 – 05/2019",
          responsibilities: [
            "Used PDI (Pentaho Data Integrator) to collect data from monitoring systems (e.g., Cisco Meraki, PRTG, Nagios).",
            "Parsed and manipulated JSON and XML files, ensuring clean and unified datasets.",
            "Loaded data into databases to support visualization teams.",
          ],
        },
        {
          title: "Ssr. Database Administrator",
          period: "06/2015 – 05/2019",
          responsibilities: [
            "Managed databases across technologies such as Oracle, MySQL, PostgreSQL, and SQL Server.",
            "Handled backup and recovery operations (RMAN), database migrations, and disaster recovery implementations.",
            "Performed patch applications and server monitoring for optimal performance.",
          ],
        },
      ]
    },
    {
      company: "Snappy Bits",
      period: "04/2014 – 08/2017",
      title: "Data Consultant",
      responsibilities: [
        "Specialized in Oracle database performance tuning and BI solutions.",
        "Developed ETL processes and data models to improve data management.",
      ],
    },
    {
      company: "Kenaz IT",
      period: "05/2012 – 07/2014",
      title: "IT Support Lead",
      responsibilities: [
        "Led a team of 3–6 IT support staff.",
        "Administered SQL Server and Windows systems, including file servers, DNS, and Exchange 2010.",
      ],
    },
    {
      company: "MR Ingeniería Informática",
      period: "04/2010 – 03/2012",
      title: "IT Support Analyst",
      responsibilities: [
        "Provided Level 3 IT support and maintained Windows systems.",
        "Ensured server and network stability for business continuity.",
      ],
    },
  ],
  education: [
    {
      degree: "Engineer's Degree, Software Engineering",
      institution: "Universidad Argentina de la Empresa (UADE)",
      year: "2020",
    },
    {
      degree: "Bachelor's Degree, IT Analyst",
      institution: "Universidad Argentina de la Empresa (UADE)",
      year: "2017",
    },
    {
      degree: "High School Diploma, Telecommunications Oriented Electronic Technician",
      institution: "Instituto Industrial Luis A. Huergo",
      year: "2011",
    },
  ],
  certifications: [
    {
      name: "Apache Airflow Fundamentals",
      date: "March 2021",
    },
    {
      name: "Oracle Database 12c New Features for Administrators",
      date: "2017",
    },
  ],
};

const SectionTitle = ({ title }) => (
  <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-6">{title}</h2>
);

const ContactItem = ({ icon: Icon, text, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-2 transition-colors duration-300">
    <Icon size={16} />
    <span>{text}</span>
  </a>
);

export default function Home() {
  return (
    <Layout title={`${resumeData.name} | Data Architect & Engineer`}>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12">
        {/* Header Section */}
        <header className="text-center mb-10 border-b border-gray-200 dark:border-gray-700 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">{resumeData.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center text-sm mt-6">
            <ContactItem icon={Phone} text={resumeData.contact.phone} href={`tel:${resumeData.contact.phone}`} />
            <ContactItem icon={Mail} text={resumeData.contact.email} href={`mailto:${resumeData.contact.email}`} />
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={16} />
              <span>{resumeData.contact.location}</span>
            </div>
            <ContactItem icon={Linkedin} text="LinkedIn Profile" href={resumeData.contact.linkedin} />
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <SectionTitle title="Skills" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {resumeData.skills.map((skill) => (
              <div key={skill} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-10">
          <SectionTitle title="Work Experience" />
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{job.period}</p>
              {job.title && <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">{job.title}</h4>}
              {job.responsibilities && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 pl-4">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              )}
              {job.roles && job.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                   <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-1">{role.title}</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{role.period}</p>
                   <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 pl-4">
                    {role.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                    ))}
                    </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <SectionTitle title="Education" />
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section>
          <SectionTitle title="Certifications" />
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
} 