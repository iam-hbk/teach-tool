export type CompetencyLink = {
  title: string
  link: string
  color: string
}

export type CompetencyGroup = {
  title: string
  color: string
  link: string
  subSegments: CompetencyLink[]
}

export const competencyGroups: CompetencyGroup[] = [
  {
    title: "Teaching",
    color: "#0553B6",
    link: "/competencies/teaching",
    subSegments: [
      {
        title: "Teaching Philosophy",
        link: "/competencies/teaching/your-teaching-philosophy",
        color: "#0553B6",
      },
      {
        title: "Postgrad Supervision",
        link: "/competencies/teaching/supervision-skills",
        color: "#1C6CD9",
      },
      {
        title: "Learning Programmes",
        link: "/competencies/teaching/designing-learning-programmes-and-modules",
        color: "#3385FC",
      },
      {
        title: "Work Integrated Learning",
        link: "/competencies/teaching/work-integrated-learning",
        color: "#4A9DFF",
      },
      {
        title: "Contact and Online-based Teaching",
        link: "/competencies/teaching/contact-and-online-based-teaching",
        color: "#62B5FF",
      },
      {
        title: "Work & Personal Management",
        link: "/competencies/teaching/work-and-personal-management",
        color: "#79CDFF",
      },
      {
        title: "Tutors",
        link: "/competencies/teaching/tutors",
        color: "#91E5FF",
      },
    ],
  },
  {
    title: "Assessments",
    color: "#D0411F",
    link: "/competencies/assessments",
    subSegments: [
      {
        title: "Designing & Developing Assessments",
        link: "/competencies/assessments/designing-and-developing-assessments",
        color: "#D0411F",
      },
      {
        title: "Assessment Methods & Activities",
        link: "/competencies/assessments/assessment-methods-and-activities",
        color: "#D55A3C",
      },
      {
        title: "Plan Conduct & Manage The Assessment Process",
        link: "/competencies/assessments/planning-conducting-and-managing-assessments",
        color: "#DA735A",
      },
      {
        title: "Moderation",
        link: "/competencies/assessments/moderation",
        color: "#DF8C77",
      },
    ],
  },
  {
    title: "Expertise",
    color: "#4EAA55",
    link: "/competencies/expertise",
    subSegments: [
      {
        title: "Subject Matter Expertise",
        link: "/competencies/expertise/subject-matter-expertise",
        color: "#5EB566",
      },
      {
        title: "Work Related Experience & Partnerships",
        link: "/competencies/expertise/work-related-experience-and-partnerships",
        color: "#6EC078",
      },
      {
        title: "Research Knowledge & Skills",
        link: "/competencies/expertise/research-knowledge-and-skills",
        color: "#7ECB89",
      },
    ],
  },
  {
    title: "Commitment",
    color: "#6C4388",
    link: "/competencies/commitment-caring",
    subSegments: [
      {
        title: "Personal Growth",
        link: "/competencies/commitment-caring/personal-growth",
        color: "#6C4388",
      },
      {
        title: "Student support",
        link: "/competencies/commitment-caring/student-support",
        color: "#7B5B9A",
      },
      {
        title: "Colleagues",
        link: "/competencies/commitment-caring/colleagues",
        color: "#998ABF",
      },
      {
        title: "Professional Bodies",
        link: "/competencies/commitment-caring/professional-bodies",
        color: "#A8A1D1",
      },
      {
        title: "Organisation / Industry",
        link: "/competencies/commitment-caring/organisation-industry",
        color: "#B7B9E4",
      },
    ],
  },
  {
    title: "Higher Education",
    color: "#2C2A2B",
    link: "/competencies/higher-education",
    subSegments: [
      {
        title: "Departmental",
        link: "/competencies/higher-education/departmental",
        color: "#454344",
      },
      {
        title: "College Faculty",
        link: "/competencies/higher-education/college-faculty",
        color: "#5E5C5D",
      },
      {
        title: "University of Johannesburg",
        link: "/competencies/higher-education/uj",
        color: "#777576",
      },
      {
        title: "South African Universities",
        link: "/competencies/higher-education/south-african-universities",
        color: "#908E8F",
      },
      {
        title: "Council on Higher Education & SAQA",
        link: "/competencies/higher-education/well-being",
        color: "#A9A7A8",
      },
      {
        title: "Africa and International Context",
        link: "/competencies/higher-education/africa-and-international-context",
        color: "#C2C0C1",
      },
    ],
  },
]
