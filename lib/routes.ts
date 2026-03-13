export const ROUTES = {
  home: "/",
  competencies: "/competencies",
  resources: "/resources",
  forum: "/forum",
  dashboard: "/dashboard",
  profile: "/profile",
  commitmentCaring: "/commitment-caring",
  teaching: {
    base: "/competencies/teaching",
    philosophy: "/competencies/teaching/your-teaching-philosophy",
    supervision: "/competencies/teaching/supervision-skills",
    learningProgrammes:
      "/competencies/teaching/designing-learning-programmes-and-modules",
    workIntegratedLearning: "/competencies/teaching/work-integrated-learning",
    contactAndOnline:
      "/competencies/teaching/contact-and-online-based-teaching",
    workAndPersonalManagement:
      "/competencies/teaching/work-and-personal-management",
    tutors: "/competencies/teaching/tutors",
  },
} as const
