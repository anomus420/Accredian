export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface EdgeItem {
  id: number;
  title: string;
  description: string;
}

export interface DomainItem {
  id: number;
  title: string;
  description: string;
}

export interface SegmentationItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface WhoJoinItem {
  id: number;
  title: string;
  description: string;
}

export interface CatItem {
  id: number;
  title: string;
  description: string;
}

export interface HowItWorksItem {
  id: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  client: string;
  quote: string;
}

export const siteContent = {
  navbar: {
    logo: "accredian",
    tagline: "credentials that matter",
    links: [
      { name: "Home", href: "#home" },
      { name: "Stats", href: "#stats" },
      { name: "Clients", href: "#clients" },
      { name: "Accredian Edge", href: "#edge" },
      { name: "CAT", href: "#cat" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "FAQs", href: "#faqs" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    cta: "Enquire Now",
  },
  hero: {
    eyebrow: "Enterprise Learning Solutions",
    title: "Next-Gen Expertise For Your Enterprise",
    titleHighlighted: {
      expertise: "Expertise",
      enterprise: "Enterprise",
    },
    subtext: "Cultivate high-performance teams through expert learning.",
    checklist: [
      "Tailored Solutions",
      "Industry Insights",
      "Expert Guidance",
    ],
    cta: "Enquire Now",
  },
  stats: {
    title: "Our Track Record",
    subtext: "The Numbers Behind Our Success",
    items: [
      {
        number: 10,
        suffix: "K+",
        label: "Professionals Trained",
        description: "For Exceptional Career Success",
      },
      {
        number: 200,
        suffix: "+",
        label: "Sessions Delivered",
        description: "With Unmatched Learning Excellence",
      },
      {
        number: 5,
        suffix: "K+",
        label: "Active Learners",
        description: "Engaged In Dynamic Courses",
      },
    ] as StatItem[],
  },
  clients: {
    title: "Our Proven Partnerships",
    subtext: "Successful Collaborations With the Industry's Best",
    logos: ["Reliance Industries", "HCL", "IBM", "CRIF", "ADP", "Bayer"],
  },
  accredianEdge: {
    title: "The Accredian Edge",
    subtext: "Key Aspects of Our Strategic Training",
    items: [
      {
        id: 1,
        title: "Tailored Solutions",
        description: "Programs customized to your organization's goals and challenges.",
      },
      {
        id: 2,
        title: "Expert Guidance",
        description: "Learn from industry leaders with real-world success.",
      },
      {
        id: 3,
        title: "Innovative Framework",
        description: "Proprietary methods for impactful, application-driven results.",
      },
      {
        id: 4,
        title: "Advanced Technology",
        description: "State-of-the-art LMS for seamless learning experiences.",
      },
      {
        id: 5,
        title: "Diverse Offerings",
        description: "Courses across industries, skill levels, and emerging fields.",
      },
      {
        id: 6,
        title: "Proven Impact",
        description: "Trusted by leading organizations for measurable ROI.",
      },
      {
        id: 7,
        title: "Flexible Delivery",
        description: "Online and offline options tailored to your needs.",
      },
    ] as EdgeItem[],
  },
  domainExpertise: {
    title: "Our Domain Expertise",
    subtext: "Specialized Programs Designed to Fuel Innovation",
    items: [
      { id: 1, title: "Product & Innovation Hub", description: "Design thinking, agile scaling, and product strategy." },
      { id: 2, title: "Gen-AI Mastery", description: "Prompt engineering, LLMs, and enterprise AI workflows." },
      { id: 3, title: "Leadership Elevation", description: "Strategic foresight, emotional intelligence, and team growth." },
      { id: 4, title: "Tech & Data Insights", description: "Machine learning, analytics, and infrastructure scaling." },
      { id: 5, title: "Operations Excellence", description: "Lean methods, supply chain resilience, and process automation." },
      { id: 6, title: "Digital Enterprise", description: "Cloud migration, digital systems, and tech adoption." },
      { id: 7, title: "Fintech Innovation Lab", description: "Decentralized finance, digital banking, and payments security." },
    ] as DomainItem[],
  },
  courseSegmentation: {
    title: "Tailored Course Segmentation",
    subtext: "Explore Custom-fit Courses Designed to Address Every Professional Focus",
    items: [
      {
        id: 1,
        title: "Program Specific",
        description: "Certificate, Executive, Post Graduate Certificate",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Industry Specific",
        description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Topic Specific",
        description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Level Specific",
        description: "Senior Leadership, Mid-Career Professionals, Freshers",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
      },
    ] as SegmentationItem[],
  },
  whoShouldJoin: {
    title: "Strategic Skill Enhancement",
    subtext: "Upskilling paths customized for corporate roles",
    items: [
      {
        id: 1,
        title: "Tech Professionals",
        description: "Enhance expertise, embrace tech, drive innovation.",
      },
      {
        id: 2,
        title: "Non-Tech Professionals",
        description: "Adapt digitally, collaborate in tech environments.",
      },
      {
        id: 3,
        title: "Emerging Professionals",
        description: "Develop powerful skills for rapid career growth.",
      },
      {
        id: 4,
        title: "Senior Professionals",
        description: "Strengthen leadership, enhance strategic decisions.",
      },
    ] as WhoJoinItem[],
  },
  catFramework: {
    title: "The CAT Framework",
    subtext: "Our Proven Approach to Learning Excellence",
    items: [
      {
        id: 1,
        title: "Concept",
        description: "Foundational knowledge for deep subject understanding.",
      },
      {
        id: 2,
        title: "Application",
        description: "Practical implementation through real-world scenarios.",
      },
      {
        id: 3,
        title: "Tools",
        description: "Resources and techniques for effective skill mastery.",
      },
    ] as CatItem[],
  },
  howItWorks: {
    title: "How We Deliver Results That Matter?",
    subtext: "A Structured Three-Step Approach to Skill Development",
    items: [
      {
        id: 1,
        title: "Skill Gap Analysis",
        description: "Assess team skill gaps and developmental needs.",
      },
      {
        id: 2,
        title: "Customized Training Plan",
        description: "Create a tailored roadmap addressing organizational goals.",
      },
      {
        id: 3,
        title: "Flexible Program Delivery",
        description: "Deliver adaptable programs aligned with industry and organizational needs.",
      },
    ] as HowItWorksItem[],
  },
  faqs: {
    title: "Frequently Asked Questions",
    categories: {
      "About the Course": [
        {
          question: "What types of corporate training programs does Accredian offer?",
          answer: "Accredian offers a wide range of customized corporate training programs covering fields like Product & Innovation, Gen-AI, Data Science, Tech Leadership, Operations, and Fintech.",
        },
        {
          question: "What domain specializations are available?",
          answer: "We specialize in domains including Product Management, Generative AI, Leadership Development, Big Data & Analytics, Operations Management, Digital Transformation, and Fintech.",
        },
        {
          question: "How long is a typical program?",
          answer: "The duration varies depending on your requirements, ranging from short 2-day intensive bootcamps to comprehensive 3-to-6-month executive programs.",
        },
      ],
      "About the Delivery": [
        {
          question: "Is training available online, offline, or hybrid?",
          answer: "Yes, we support flexible delivery models: fully interactive live online classrooms, face-to-face offline bootcamps, and blended hybrid formats.",
        },
        {
          question: "Can programs be delivered on-site at our office?",
          answer: "Absolutely! We can arrange for our expert instructors to conduct the training sessions directly at your corporate premises.",
        },
      ],
      "Miscellaneous": [
        {
          question: "How is pricing determined for enterprise programs?",
          answer: "Pricing is customized based on the program scope, number of candidates, level of customization, and delivery mode. Contact our advisory team for a detailed quote.",
        },
        {
          question: "Do you provide certificates on completion?",
          answer: "Yes, all participants receive co-branded, shareable digital credentials and certificates upon successfully completing the program requirements.",
        },
      ],
    } as Record<string, FaqItem[]>,
  },
  testimonials: {
    title: "What Our Clients Are Saying",
    subtext: "Testimonials from Our Partners",
    items: [
      {
        client: "ADP",
        quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
      },
      {
        client: "Bayer",
        quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
      },
      {
        client: "Reliance Industries",
        quote: "The customized training modules provided by Accredian helped our technical teams align with modern frameworks effortlessly. Highly recommended for scalable corporate learning.",
      },
      {
        client: "HCL Technologies",
        quote: "Accredian's delivery structure, top-tier instructors, and flexible scheduling allowed our global offices to upskill seamlessly without interrupting daily workflows.",
      },
    ] as TestimonialItem[],
  },
  ctaBanner: {
    title: "Want to Learn More About Our Training Solutions?",
    subtitle: "Get Expert Guidance for Your Team's Success!",
    buttonText: "Contact Us",
  },
  footer: {
    logo: "accredian",
    tagline: "credentials that matter",
    office: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
    email: "enterprise@accredian.com",
    copyright: "© 2026 Accredian. A Brand of FullStack Education Pvt Ltd. All Rights Reserved.",
  },
};
