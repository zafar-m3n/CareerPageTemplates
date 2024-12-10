const heroText = {
  title: "Cleveri Careers",
  subheading: "Join the Future of Hiring with Cleveri",
  description:
    "Be part of a team revolutionizing recruitment. At Cleveri, we’re passionate about transforming how businesses hire through AI-driven precision, seamless workflows, and human insights. If you're ready to innovate, grow, and make an impact, discover your next career opportunity with us today.",
};

const stats = [
  {
    id: 1,
    stat: "Skilled Candidates Hired",
    value: "10K+",
  },
  {
    id: 2,
    stat: "Local Businesses Helped",
    value: "30",
  },
  {
    id: 3,
    stat: "Faster Hiring",
    value: "45%",
  },
];

const benefits = [
  {
    id: 1,
    title: "Flexible Work Options",
    description:
      "Choose where and how you work—remotely, in-office, or hybrid—to fit your lifestyle and needs.",
  },
  {
    id: 2,
    title: "Growth Opportunities",
    description:
      "Access training, and mentorship programs designed to help you excel and advance your career.",
  },
  {
    id: 3,
    title: "Healthy Work-Life Balance",
    description:
      "Prioritize your well-being with supportive policies, flexible hours, and dedicated time off to recharge.",
  },
  {
    id: 4,
    title: "Competitive Salary",
    description:
      "Earn what you deserve with a salary package that reflects your skills, experience, and contributions.",
  },
];

const values = [
  {
    id: 1,
    value: "Trust and Openness",
    description:
      "We enable fluidity of information, give and receive feedback, and refrain from micromanaging teams.",
  },
  {
    id: 2,
    value: "Courageous Honesty",
    description:
      "We don’t have hidden agendas, we’re honest with ourselves and others, and discuss successes and failures openly.",
  },
  {
    id: 3,
    value: "Purpose and Passion",
    description:
      "We nurture a culture of meritocracy where performance and meaningful contribution are valued and rewarded.",
  },
  {
    id: 4,
    value: "One Team",
    description:
      "We don’t have space for ‘jerks’ - we respect each other, even if we disagree, and focus on solutions instead of pointing fingers.",
  },
];

const howToApply = [
  {
    id: 1,
    title: "Submit Your Application",
    description:
      "Find the role that matches your skills and submit your application online. Be sure to include your resume, portfolio (if applicable), and a cover letter showcasing your interest in joining Cleveri.",
  },
  {
    id: 2,
    title: "Initial Screening",
    description:
      "Our recruitment team will review your application to assess your qualifications and alignment with the role. If shortlisted, you'll be contacted for an initial conversation about your background and career goals.",
  },
  {
    id: 3,
    title: "Interview Process",
    description:
      "Participate in interviews designed to evaluate your skills, cultural fit, and problem-solving abilities. Depending on the role, this may include technical assessments or case studies.",
  },
  {
    id: 4,
    title: "Decision and Offer",
    description:
      "Once the interviews are complete, we’ll review your application holistically. If selected, you’ll receive an offer outlining your role, responsibilities, and next steps to join the Cleveri team.",
  },
];

const interviewProcess = [
  {
    id: 1,
    description: [
      "Each candidate goes through an independent pre-employment assessment",
      "Candidates are assessed with the help of Cleveri’s own AI",
    ],
  },
  {
    id: 2,
    description: [
      "Candidates with higher evaluations proceed to this stage and meet senior leads.",
      "Meet the HR team to discuss employee benefits and work culture.",
    ],
  },
  {
    id: 3,
    description: [
      "Meet the Founder and CEO.",
      "This conversation will focus on culture and your role in upkeeping what’s important to us.",
    ],
  },
];

const departments = [
  { value: "business", label: "Business" },
  { value: "digital", label: "Creative" },
  { value: "engineering", label: "Engineering" },
  { value: "finance", label: "Finance" },
  { value: "hr", label: "HR & Admin" },
  { value: "information_tech", label: "Information Technology" },
  { value: "marketing", label: "Marketing & Sales" },
  { value: "operations", label: "Operations" },
  { value: "production", label: "Production" },
  { value: "research_and_development", label: "Research and Development" },
];

const seniority = [
  { value: "entry-level", label: "Entry level" },
  { value: "associate", label: "Associate" },
  { value: "mid-level", label: "Mid Level" },
  { value: "manager-level", label: "Manager Level" },
  { value: "seniour-manager-level", label: "Senior Manager Level" },
  { value: "director", label: "Director Level" },
  { value: "executive", label: "Executive" },
];

const jobType = [
  { value: "fulltime", label: "Full Time" },
  { value: "parttime", label: "Part Time" },
  { value: "temporary", label: "Temporary Job" },
  { value: "internship", label: "Internship" },
  { value: "volunteer", label: "Volunteer" },
  { value: "hybrid", label: "Hybrid Work" },
  { value: "remote", label: "Remote Work" },
  { value: "short_term_work", label: "Short Term Work" },
];

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    department: "Engineering",
    jobType: "Full-time",
    seniority: "Junior",
    location: "Pamankada Office",
    posted: 3,
  },
  {
    id: 2,
    title: "Marketing Manager",
    department: "Marketing",
    jobType: "Full-time",
    seniority: "Senior",
    location: "Nugegoda Office",
    posted: 5,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    jobType: "Full-time",
    seniority: "Mid-level",
    location: "Pamankada Office",
    posted: 7,
  },
  {
    id: 4,
    title: "Frontend Developer",
    department: "Engineering",
    jobType: "Contract",
    seniority: "Junior",
    location: "Nugegoda Office",
    posted: 2,
  },
  {
    id: 5,
    title: "HR Specialist",
    department: "Human Resources",
    jobType: "Full-time",
    seniority: "Mid-level",
    location: "Pamankada Office",
    posted: 6,
  },
  // {
  //   id: 6,
  //   title: "UX/UI Designer",
  //   department: "Design",
  //   jobType: "Full-time",
  //   seniority: "Senior",
  //   location: "Nugegoda Office",
  //   posted: 10,
  // },
  // {
  //   id: 7,
  //   title: "Quality Assurance Engineer",
  //   department: "Engineering",
  //   jobType: "Full-time",
  //   seniority: "Mid-level",
  //   location: "Pamankada Office",
  //   posted: 1,
  // },
  // {
  //   id: 8,
  //   title: "Product Manager",
  //   department: "Product",
  //   jobType: "Full-time",
  //   seniority: "Senior",
  //   location: "Nugegoda Office",
  //   posted: 14,
  // },
  // {
  //   id: 9,
  //   title: "Technical Support Engineer",
  //   department: "Support",
  //   jobType: "Full-time",
  //   seniority: "Junior",
  //   location: "Pamankada Office",
  //   posted: 8,
  // },
  // {
  //   id: 10,
  //   title: "Cloud Engineer",
  //   department: "Engineering",
  //   jobType: "Full-time",
  //   seniority: "Mid-level",
  //   location: "Nugegoda Office",
  //   posted: 4,
  // },
];

const employeeTestimonials = [
  {
    id: 1,
    name: "John Carter",
    testimonial:
      "Working at Cleveri has been an incredible journey. The engineering team thrives on collaboration and cutting-edge technology, which makes every day exciting. I love how my ideas are valued and how we solve complex problems together to build impactful solutions.",
    job: "Senior Software Engineer",
    pic: "/john.png",
  },
  {
    id: 2,
    name: "Emily Ramirez",
    testimonial:
      "Cleveri is a place where creativity meets strategy. In the marketing department, we’re constantly innovating to tell stories that connect with our audience. The supportive environment and opportunities to grow professionally have made this an amazing place to work.",
    job: "Marketing Strategist",
    pic: "/emily.png",
  },
  {
    id: 3,
    name: "Daniel Lee",
    testimonial:
      "At Cleveri, we’re not just building products; we’re shaping the future of recruitment. The work is challenging but equally rewarding, and the team’s commitment to excellence motivates me to bring my best self to every project.",
    job: "Backend Software Engineer",
    pic: "/daniel.png",
  },
];

const DynamicValues = {
  heroText,
  stats,
  benefits,
  values,
  howToApply,
  interviewProcess,
  departments,
  seniority,
  jobType,
  employeeTestimonials,
  jobs,
};

export default DynamicValues;
