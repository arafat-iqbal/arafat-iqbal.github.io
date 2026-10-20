import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  BookOpen,
  Code2,
  ExternalLink,
  Award,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Download,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const getAssetPath = (path: string) => `${basePath}${path}`;

export default function Home() {
  const researchInterests = [
    "Deep Learning",
    "Computer Vision",
    "Medical Image Analysis",
    "Natural Language Processing",
    "Federated Continual Learning",
    "LLM Safety & Middleware",
    "Environmental Data Science",
    "Precision Agriculture",
    "Human–Computer Interaction",
  ];

  const publications = [
    {
      title:
        "Privacy-Preserving Federated Continual Learning for Multi-Domain Medical Imaging Under Non-IID Skew",
      status: "Manuscript Under Review",
      year: "2026",
      tags: ["Federated Learning", "Continual Learning", "Medical AI", "Non-IID Skew"],
      summary:
        "Formulated an end-to-end privacy-preserving federated continual learning framework to mitigate catastrophic forgetting and severe inter-site domain shifts in distributed clinical environments without raw patient data transfer. Evaluated systematically across multi-center medical imaging benchmarks under non-IID client partitions, achieving resilient convergence and diagnostic stability.",
    },
    {
      title:
        "PIDM: A Middleware Framework for Detecting Prompt Injection Attacks in Multi-Agent LLM Pipelines",
      status: "Manuscript Under Review",
      year: "2026",
      tags: ["LLM Security", "Multi-Agent AI", "Prompt Injection", "Middleware"],
      summary:
        "Architected a modular middleware security layer that intercepts, inspects, and neutralizes direct and indirect prompt injection attacks across inter-agent LLM communication pipelines. Developed real-time payload sanitization and semantic policy-checking mechanisms, safeguarding multi-agent collaboration with minimal latency.",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer",
      organization: "Craftsmen IT",
      location: "Dhaka, Bangladesh",
      period: "Feb 2025 – Present",
      bullets: [
        "Architecting and delivering full-stack enterprise SaaS platforms, high-concurrency microservices, and cloud-native backend workflows.",
        "Engineering high-performance REST APIs, database optimizations, containerized microservices, and automated CI/CD deployment pipelines on AWS infrastructure.",
      ],
    },
    {
      role: "Research Assistant",
      organization:
        "Dept. of Computer Science & Engineering, International Islamic University Chittagong",
      location: "Chittagong, Bangladesh",
      period: "Mar 2026 – Present",
      bullets: [
        "Conducting computational AI and vision research under the supervision of Dr. Mohammed Mahmudur Rahman.",
        "Leading dataset curation, experimental design, architectural benchmarking, and paper preparation across clinical medical imaging and environmental monitoring domains.",
      ],
    },
    {
      role: "Undergraduate Teaching Assistant",
      organization: "International Islamic University Chittagong",
      location: "Chittagong, Bangladesh",
      period: "Jun 2022 – Dec 2024",
      bullets: [
        "Mentored 150+ undergraduate students across core courses including Data Structures, Algorithms, and Object-Oriented Programming.",
        "Conducted laboratory problem-solving clinics, designed programming assessments, and assisted faculty with examinations and capstone project reviews.",
      ],
    },
  ];

  const projects = [
    {
      title: "Alainstar ERP & E-Commerce",
      category: "Enterprise Full-Stack",
      period: "Jan 2026 – Present",
      tech: ["Next.js", "Laravel", "PostgreSQL", "Docker", "CI/CD", "AWS"],
      description:
        "Engineered a custom enterprise ERP and e-commerce platform for a prominent UAE-based auto parts dealer. Automated multi-warehouse inventory tracking, order dispatch pipelines, and high-volume catalog lookup REST APIs to eliminate operational bottlenecks and cut latency.",
    },
    {
      title: "freemail.ai",
      category: "High-Throughput Systems",
      period: "May 2025 – Jul 2026",
      tech: ["Python", "Postfix", "Redis", "REST APIs", "Docker"],
      description:
        "Architected a disposable temporary email platform featuring dynamic multi-domain SMTP routing and auto-purge storage. Engineered high-speed, thread-safe REST APIs handling real-time high-concurrency web traffic.",
    },
    {
      title: "Bengali Isolated Number Recognition via Air-Writing",
      category: "Undergraduate Thesis",
      period: "Nov 2024",
      tech: ["Python", "OpenCV", "CNN", "AlexNet", "HCI"],
      description:
        "Developed a camera-based touchless gesture recognition system recognizing Bengali air-written digits via real-time motion tracking and trajectory-to-image conversion. Trained deep CNN and AlexNet models on 85,000 samples, reaching 98% accuracy as an assistive tool for hearing-impaired users.",
    },
    {
      title: "Brain Tumor Detection & Classification on MRI Scans",
      category: "Medical AI Research",
      period: "Manuscript in Prep",
      tech: ["DenseNet", "EfficientNetV4", "MobileNetV2", "Grad-CAM"],
      description:
        "Constructed an automated multi-class classification pipeline on brain MRI scans achieving up to 99% accuracy with an ensemble architecture. Integrated Grad-CAM interpretability visualizations to highlight tumor boundaries and support clinical explainability.",
    },
    {
      title: "Real-Time Air Pollution Monitoring in Chittagong",
      category: "Environmental Data Science",
      period: "Manuscript in Prep",
      tech: ["CNN", "XGBoost", "SVM", "Random Forest"],
      description:
        "Engineered an environmental predictive framework analyzing PM2.5, PM10, and NOx readings across urban zones in Chittagong, achieving 99% accuracy to uncover localized hotspots and support municipal policy.",
    },
    {
      title: "Crop Disease Detection with Vision Transformers",
      category: "Precision Agriculture",
      period: "Ongoing Research",
      tech: ["Vision Transformer (ViT)", "EfficientNetB4", "Attention (ECA, CBAM)"],
      description:
        "Developing an ensemble deep learning pipeline integrating CNN backbones with Vision Transformers and spatial/channel attention mechanisms, achieving 98% accuracy across multi-crop leaf pathologies.",
    },
  ];

  const skillCategories = [
    {
      name: "Programming & Frameworks",
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
        "C/C++",
        "Next.js",
        "Laravel",
        "React",
        "Node.js",
      ],
    },
    {
      name: "Machine Learning & AI",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Hugging Face",
        "OpenCV",
        "Vision Transformers",
        "Grad-CAM",
        "Pandas",
        "NumPy",
      ],
    },
    {
      name: "Cloud, DevOps & Systems",
      items: [
        "Docker",
        "AWS Services",
        "CI/CD Pipelines",
        "Git/GitHub",
        "Linux (Ubuntu)",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Postfix",
        "REST APIs",
      ],
    },
    {
      name: "Tools, Design & Management",
      items: [
        "LaTeX",
        "Tableau",
        "Power BI",
        "Figma",
        "Postman",
        "Jira",
        "Trello",
        "Agile/Scrum",
        "System Architecture",
      ],
    },
  ];

  const leadership = [
    {
      role: "General Secretary",
      subRole: "Former Membership Coordinator",
      org: "IEEE RAS Robotics and Automation Society (IIUC)",
      location: "Chittagong, Bangladesh",
      description:
        "Oversaw society operations, directed robotics and automation workshops, coordinated technical projects, and spearheaded competitive technical events.",
    },
    {
      role: "Event Secretary & Executive Member",
      subRole: "Computer Club & Data Science Community",
      org: "IIUC Computer Club & IIUC Data Science Community",
      location: "Chittagong, Bangladesh",
      description:
        "Organized intra-university programming contests, data science seminars, hands-on ML workshops, and technical seminars for student researchers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-[#18181b] dark:text-[#fafafa] selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* Top Minimalist Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fafafa]/80 dark:bg-[#09090b]/80 border-b border-neutral-200/70 dark:border-neutral-800/70">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <Link
            href="/"
            className="font-medium tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition"
          >
            Arafat Iqbal
          </Link>
          <nav className="flex items-center gap-5 text-neutral-600 dark:text-neutral-400">
            <a
              href="#about"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition hidden sm:inline-block"
            >
              About
            </a>
            <a
              href="#publications"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              Research
            </a>
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition hidden sm:inline-block"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition hidden md:inline-block"
            >
              Skills
            </a>
            <a
              href={getAssetPath("/arafat_cv.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 text-xs font-medium hover:opacity-90 transition"
            >
              <FileText className="w-3.5 h-3.5" />
              CV (PDF)
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* Hero Section */}
        <section id="about" className="space-y-6">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Software Engineer &amp; AI Researcher
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                Arafat Iqbal
              </h1>
              <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
                Software Engineer at <span className="text-neutral-900 dark:text-neutral-200 font-medium">Craftsmen IT</span> and Research Assistant at{" "}
                <span className="text-neutral-900 dark:text-neutral-200 font-medium">IIUC</span>. Focused on Deep Learning, Computer Vision, Distributed Systems, and Federated Learning architectures.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Chittagong &amp; Dhaka, Bangladesh
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <a
                    href="mailto:arafatsh397@gmail.com"
                    className="hover:underline text-neutral-800 dark:text-neutral-200"
                  >
                    arafatsh397@gmail.com
                  </a>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  +8801533396164
                </span>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={getAssetPath("/arafta.jpeg")}
                  alt="Arafat Iqbal"
                  width={200}
                  height={200}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Quick CTA Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:arafatsh397@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href={getAssetPath("/arafat_cv.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition shadow-sm"
            >
              <Download className="w-4 h-4 text-neutral-500" />
              Download CV
            </a>
            <a
              href="https://github.com/sharafat397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-neutral-500" />
              GitHub
            </a>
          </div>

          {/* Research Interest Tags */}
          <div className="pt-4 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Research Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-normal bg-neutral-100/90 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Publications & Manuscripts Section */}
        <section id="publications" className="space-y-6 scroll-mt-20">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-neutral-500" />
              Publications &amp; Manuscripts Under Review
            </h2>
            <span className="text-xs text-neutral-400 font-mono">2026</span>
          </div>

          <div className="space-y-5">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/50 space-y-3 transition hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                    {pub.title}
                  </h3>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                      {pub.status}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{pub.year}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pub.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pub.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-200/70 dark:border-neutral-800/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-6 scroll-mt-20">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-neutral-500" />
              Professional &amp; Academic Experience
            </h2>
          </div>

          <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`space-y-2.5 ${idx !== 0 ? "pt-6" : ""} pb-6`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-medium text-neutral-950 dark:text-neutral-50">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {exp.organization} &middot;{" "}
                      <span className="text-neutral-500">{exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-neutral-400 mt-1">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6 scroll-mt-20">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
              <Layers className="w-5 h-5 text-neutral-500" />
              Selected Engineering &amp; Research Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/40 flex flex-col justify-between space-y-3 transition hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {proj.period}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-neutral-950 dark:text-neutral-50 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="space-y-6 scroll-mt-20">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-neutral-500" />
              Technical Skills &amp; Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/30 space-y-2.5"
              >
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded text-xs bg-neutral-100/80 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 text-neutral-800 dark:text-neutral-200 font-normal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* Education */}
          <section className="space-y-4">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-2.5">
              <h2 className="text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-neutral-500" />
                Education
              </h2>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/30 space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  International Islamic University Chittagong
                </h3>
                <span className="text-xs font-mono text-neutral-400">2020 – 2025</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Bachelor of Science in Computer Science and Engineering
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                <span className="font-medium">CGPA:</span> 3.29 / 4.00
                <span className="text-neutral-300 dark:text-neutral-700">&bull;</span>
                <span className="text-neutral-500">Chittagong, Bangladesh</span>
              </div>
            </div>
          </section>

          {/* Leadership & Activities */}
          <section className="space-y-4">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-2.5">
              <h2 className="text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
                <Award className="w-4 h-4 text-neutral-500" />
                Leadership &amp; Activities
              </h2>
            </div>
            <div className="space-y-3">
              {leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/30 space-y-1.5"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.org}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 py-8 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Arafat Iqbal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sharafat397"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:arafatsh397@gmail.com"
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
            >
              Email
            </a>
            <a
              href={getAssetPath("/arafat_cv.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
            >
              Curriculum Vitae
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
