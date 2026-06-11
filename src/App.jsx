import React, { useState, useEffect } from 'react';
import { 
  Briefcase, Search, Heart, MessageSquare, User, 
  ChevronRight, ArrowRight, X, Filter, 
  MapPin, DollarSign, CheckCircle2, ChevronLeft, 
  Sparkles, Share2, RotateCcw, Plus, Trash2, Send, MessageCircle, 
  GraduationCap, Award, Star, Building2, BarChart3, Calendar, Radio, FileText, Zap, Users
} from 'lucide-react';

// --- COMPREHENSIVE 25-VACANCY ENTERPRISE PRODUCTION-GRADE DATA MATRIX ---
const INITIAL_JOBS = [
  { id: 1, title: 'UX/UI Product Designer', company: 'Polymedia', location: 'Novorossiysk', salary: '1000 $', type: 'Full Day', field: 'Design', posted: 'Today', matchScore: 98, verified: true, applicantsCount: 4, description: 'We are seeking an architectural product designer to map out complete user experience lifecycles across cross-platform systems. In this assignment, you will study behavioral user experience maps, propose, protect and implement tactical UI improvements, and generate high-fidelity clickable prototype models to test operational product hypotheses with real client bases. You will collaborate daily with product engineers and lead standard system redesign workflows.', requirements: ['2+ years production UI experience', 'Figma design system and component mastery', 'Proven portfolio of released software products', 'User research and layout mapping background'], benefits: ['Hybrid / remote working flex options', 'Full private healthcare insurance', 'Flexible hours & equipment allowance'] },
  { id: 2, title: 'UX/UI Designer', company: 'Uber', location: 'Moscow', salary: '1800 $', type: 'Full Day', field: 'Design', posted: 'Today', matchScore: 94, verified: true, applicantsCount: 7, description: 'Join our core passenger experience product tier. We lead in the top 3 global developers. Responsibilities include comprehensive transactional system redesigns, setting responsive styling layouts, and active user alignment mapping. You will optimize scalable UI kits, run layout diagnostics over high-scale conversion grids, and build micro-interaction flows alongside frontend engineering teams to elevate consumer rideshare apps.', requirements: ['3+ years in mobile app layouts', 'Framer Motion or interactive prototype insight', 'Strong data visualization skills'], benefits: ['Competitive tech equity options', 'Complimentary catered on-site meals', 'Annual continuous learning tech stipend'] },
  { id: 3, title: 'Frontend Developer', company: 'TechCorp India', location: 'Bangalore', salary: '2500 $', type: 'Full Time', field: 'Tech', posted: 'Yesterday', matchScore: 91, verified: false, applicantsCount: 12, description: 'We are expanding our dashboard engineering squad. In this role, you will build robust consumer web applications and translate design wireframes into clean, reactive, and pixel-perfect frontends using modern JavaScript frameworks. You will analyze client-side rendering speed benchmarks, isolate layout rendering choke points, and implement performance optimizations to deliver fluid 60fps interaction tracks across mobile interfaces.', requirements: ['ReactJS or VueJS core mastery', 'Tailwind CSS fluency and responsive optimization', 'Git workflows and multi-developer environment depth'], benefits: ['Flexible hybrid operational model', 'Annual productivity target bonuses', 'Premium medical coverage for family'] },
  { id: 4, title: 'Product Manager', company: 'Avito', location: 'Sochi', salary: '1200 $', type: 'Full Day', field: 'Management', posted: 'Today', matchScore: 85, verified: true, applicantsCount: 3, description: 'Drive execution strategy for our growth core. This position is responsible for analyzing metric funnels and building tight communication pipelines between the engineering squads, client UI design teams, and executive project management tiers. You will compose actionable product requirement documents, lead sprint prioritization loops, manage milestone roadmaps, and present user growth analytics charts directly to product stakeholders.', requirements: ['Agile / Scrum master certification', 'Product lifecycle funnel tracking analytics knowledge', 'Cross-functional team leadership skill'], benefits: ['Unlimited flexible vacation policies', 'Premium gym & health club memberships', 'Comprehensive mental wellness support options'] },
  { id: 5, title: 'Backend Engineer (Python)', company: 'Frappe Devs', location: 'Remote', salary: '2200 $', type: 'Remote', field: 'Tech', posted: '2 days ago', matchScore: 97, verified: true, applicantsCount: 9, description: 'Help scale open-source configuration systems. You will design and deploy clean database architectural models, custom API wrappers, and complex configuration server tables inside high-performance server structures. Responsibilities include building database schema configurations, handling background execution workers, optimizing query caching layers, and implementing secure token authorization pipelines across custom platform apps.', requirements: ['Advanced Python software architecture mastery', 'Direct Frappe Framework/Bench environment experience', 'Deep MySQL or PostgreSQL query tuning optimization skills'], benefits: ['100% remote asynchronous environment', 'Disruptive 4-day work week operational standard', 'Full home-office hardware budget allowance'] },
  { id: 6, title: 'AI/ML Engineering Specialist', company: 'DeepMind Labs', location: 'Remote', salary: '3500 $', type: 'Remote', field: 'Tech', posted: 'Today', matchScore: 99, verified: true, applicantsCount: 14, description: 'Design, optimize, and deploy high-performance large language transformers. You will focus on scaling fine-tuning runs, creating customized reward functions, optimizing resource quantization layers, and structuring real-time model evaluation frameworks for downstream consumer applications.', requirements: ['Deep PyTorch/TensorFlow expertise', 'CUDA profiling background configurations', 'Distributed model training experience'], benefits: ['Cutting-edge compute allocations', 'Unlimited research material budget', 'Remote work allowances'] },
  { id: 7, title: 'Senior Data Architect', company: 'Yandex', location: 'Belgrade', salary: '2800 $', type: 'Full Day', field: 'Tech', posted: 'Yesterday', matchScore: 93, verified: true, applicantsCount: 8, description: 'Architect multi-petabyte real-time stream ingestion infrastructure pipelines. You will lead database optimization strategies across clustered environments, deploy custom schema definitions, and configure Kafka clusters to support multi-tenant operational query tasks.', requirements: ['Expert ClickHouse / PostgreSQL knowledge', 'Apache Kafka stream optimization background', 'Distributed storage profiling experience'], benefits: [' Relocation hardware packages', 'Stock options incentive structures', 'Premium dental care coverages'] },
  { id: 8, title: 'DevOps / Infrastructure Lead', company: 'SberTech', location: 'Moscow', salary: '2600 $', type: 'Full Day', field: 'Tech', posted: '3 days ago', matchScore: 89, verified: true, applicantsCount: 11, description: 'Manage and secure multi-region Kubernetes infrastructure fabrics. You will construct automated CI/CD pipeline arrays, integrate Prometheus metric collection clusters, configure service meshes, and deploy security isolation modules to satisfy system runtime environments.', requirements: ['Advanced Kubernetes clustering mastery', 'Terraform orchestration profile depth', 'Linux systems internals debugging skills'], benefits: ['Corporate banking privilege tiers', 'Tech hardware purchase allowances', 'Flexible hybrid schedules'] },
  { id: 9, title: 'Growth Operations Director', company: 'Ozon Commerce', location: 'Saint Petersburg', salary: '2100 $', type: 'Full Day', field: 'Operations', posted: 'Today', matchScore: 87, verified: true, applicantsCount: 5, description: 'Optimize logistical fulfillment pipelines and supply chain efficiency maps. You will isolate distribution friction points, automate layout sorting procedures, and synchronize third-party fulfillment endpoints with core transactional tracking engines.', requirements: ['Supply chain logistics analysis background', 'Advanced data extraction and processing fluency', 'Cross-department operations leadership skill'], benefits: ['Performance incentive bonuses', 'Private lifestyle support concierge', 'Gym pass options'] },
  { id: 10, title: 'Lead Content Strategist', company: 'VK Media', location: 'Moscow', salary: '1400 $', type: 'Full Day', field: 'Design', posted: 'Today', matchScore: 90, verified: false, applicantsCount: 6, description: 'Drive creative user engagement strategies across high-traffic digital distribution loops. You will coordinate localized localization plans, formulate product messaging maps, and execute multimedia layout schedules alongside brand asset design squads.', requirements: ['Portfolio of high-engagement campaigns', 'SEO / semantic index modeling index modelling insight', 'Brand positioning matrix background'], benefits: ['Catered team dining provisions', 'Complimentary music event access keys', 'Flexible working models'] },
  { id: 11, title: 'Scrum Agile Project Coordinator', company: 'Tinkoff', location: 'Remote', salary: '1900 $', type: 'Remote', field: 'Management', posted: 'Yesterday', matchScore: 88, verified: true, applicantsCount: 4, description: 'Facilitate iteration planning sprint frameworks across globally distributed engineering teams. You will remove code deployment blockers, track burn-down charts, configure Jira workflows, and manage core delivery alignment goals.', requirements: ['Certified Scrum Professional (CSP)', 'Jira administration optimization experience', 'Strong software delivery risk handling methods'], benefits: ['Full remote workflow setups', 'Continuous professional education keys', 'Stock grant bonuses'] },
  { id: 12, title: 'iOS Native Engineer (Swift)', company: 'Kaspersky Labs', location: 'Novosibirsk', salary: '2400 $', type: 'Full Day', field: 'Tech', posted: '2 days ago', matchScore: 95, verified: true, applicantsCount: 9, description: 'Engineer ultra-secure client-side networking wrappers and responsive layouts for core endpoint security packages. You will minimize thread execution overhead, track rendering frame rates, and deploy multi-layered cryptography assets.', requirements: ['Swift UI and CoreData expert optimization', 'Low-level device memory profiling background', 'Security layer architecture structures'], benefits: ['Top-spec Apple Silicon device hardware', 'Family health care packages', 'On-site technical library access'] },
  { id: 13, title: 'Brand Identity Illustrator', company: 'Miro Studio', location: 'Perm', salary: '1300 $', type: 'Full Day', field: 'Design', posted: '4 days ago', matchScore: 92, verified: true, applicantsCount: 3, description: 'Craft scalable design system vector languages and dynamic interactive canvas layout sets. You will create cohesive graphic styles, build complex icon systems, and collaborate with product teams to align layouts with technical assets.', requirements: ['Mastery of vector illustration systems', 'Motion graphic / asset keyframe animation depth', 'Collaborative design system experience'], benefits: ['Premium digital drawing gear setups', 'Annual creative seminar allowances', 'Unlimited vacation standard option'] },
  { id: 14, title: 'Cybersecurity Threat Hunter', company: 'BI.ZONE', location: 'Moscow', salary: '3100 $', type: 'Full Day', field: 'Tech', posted: 'Today', matchScore: 96, verified: true, applicantsCount: 7, description: 'Monitor high-volume server cluster telemetries to isolate and neutralize complex system vectors. You will dissect binary payloads, engineer custom alert rule charts, and run continuous defensive configuration code drops.', requirements: ['Reverse engineering and binary unpacking skill', 'Deep SIEM / log architecture mastery', 'Network kernel profiling background'], benefits: ['Dedicated isolated lab infrastructure', 'High-value bug bounty commissions', 'Premium mental fitness access'] },
  { id: 15, title: 'VP of Product Engineering', company: 'Lamoda Group', location: 'Moscow', salary: '3400 $', type: 'Full Day', field: 'Management', posted: 'Yesterday', matchScore: 84, verified: true, applicantsCount: 5, description: 'Supervise organizational execution frameworks across frontend, mobile, and system infrastructure divisions. You will allocate budget pools, design delivery metrics, and drive technology architecture selections.', requirements: ['8+ years leading cross-functional engineering teams', 'Microservice system layout alignment vision', 'Executive stakeholder communications experience'], benefits: ['Corporate equity ownership packages', 'Private executive medical tiers', 'Annual global transport passes'] },
  { id: 16, title: 'Customer Experience Operations Manager', company: 'Megafon', location: 'Samara', salary: '1100 $', type: 'Full Day', field: 'Operations', posted: '3 days ago', matchScore: 86, verified: false, applicantsCount: 8, description: 'Analyze telecommunication support funnel performance indicators to mitigate active churn patterns. You will design escalation templates, configure speech analytics engines, and implement target resolution standards.', requirements: ['CRM tracking systems architecture knowledge', 'Data extraction query formulation fluency', 'Team operational leadership background'], benefits: ['Unlimited cellular communications access', 'Quarterly performance metric awards', 'Hybrid flex structures'] },
  { id: 17, title: 'Motion Experience Designer', company: 'Zeptolab', location: 'Remote', salary: '1700 $', type: 'Remote', field: 'Design', posted: 'Today', matchScore: 91, verified: true, applicantsCount: 15, description: 'Animate intuitive behavioral interface tracks and rewarding micro-interactions across high-retention gameplay layers. You will profile layout performance footprints to maintain solid frame execution rates.', requirements: ['Expert Framer Motion and After Effects depth', 'Mobile interface interaction layout mapping', 'Performance profile budget handling skills'], benefits: ['Flexible async scheduling tracks', 'Complimentary continuous education courses', 'Home office gear updates'] },
  { id: 18, title: 'Golang Distributed Systems Specialist', company: 'Alfa-Bank', location: 'Yekaterinburg', salary: '2700 $', type: 'Full Day', field: 'Tech', posted: 'Yesterday', matchScore: 94, verified: true, applicantsCount: 10, description: 'Construct low-latency distributed ledger transaction processing pipelines. You will optimize memory garbage collection routines, structure high-throughput state machines, and patch custom consensus adapters.', requirements: ['Advanced Go optimization techniques', 'High-scale concurrency runtime debugging depth', 'gRPC and Protocol Buffers fluency'], benefits: ['Top banking industry pension tiers', 'Annual target performance rewards', 'Comprehensive dental plans'] },
  { id: 19, title: 'Strategic Product Analyst', company: 'Magnit Tech', location: 'Krasnodar', salary: '1500 $', type: 'Full Day', field: 'Management', posted: '5 days ago', matchScore: 89, verified: true, applicantsCount: 6, description: 'Model behavioral retention patterns across consumer grocery checkout configurations. You will conduct multi-variable statistical evaluation loops and build automated dashboards for inventory projections.', requirements: ['Advanced mathematical statistics background', 'SQL data modeling / Python analysis tools fluency', 'A/B hypothesis framework generation skill'], benefits: ['Corporate lifestyle network privileges', 'Subsidized health food access plans', 'Flexible hybrid arrangements'] },
  { id: 20, title: 'Site Reliability Engineer', company: 'HeadHunter', location: 'Sochi', salary: '2300 $', type: 'Full Day', field: 'Tech', posted: 'Today', matchScore: 93, verified: true, applicantsCount: 4, description: 'Maintain maximum availability parameters for job placement traffic grids. You will manage configuration discovery networks, build deployment fallbacks, and optimize high-volume database caches.', requirements: ['Linux system kernel diagnostic mastery', 'Advanced scripting configuration languages depth', 'High-availability infrastructure setup background'], benefits: ['Subsidized seaside resort allowances', 'Premium workspace setup allocations', 'Annual certification grants'] },
  { id: 21, title: 'Lead Content / Design Manager', company: 'Skyeng', location: 'Remote', salary: '1400 $', type: 'Remote', field: 'Design', posted: 'Yesterday', matchScore: 87, verified: true, applicantsCount: 9, description: 'Direct UI copy patterns and layout visual components across online learning interaction spaces. You will run layout comprehension audits to maintain pedagogical interaction objectives.', requirements: ['UX writing / interactive asset configuration portfolio', 'Design system alignment methodologies background', 'Educational interface wireframing depth'], benefits: ['Complimentary language certification sets', 'Flexible remote operational flexibility', 'Equipment update allowances'] },
  { id: 22, title: 'Cloud Infrastructure Architect', company: 'MTS Web Services', location: 'Nizhny Novgorod', salary: '2900 $', type: 'Full Day', field: 'Tech', posted: '2 days ago', matchScore: 96, verified: true, applicantsCount: 3, description: 'Engineer high-isolation hypervisor networks and public cloud architecture blocks. You will deploy SDN configurations, optimize packet processing tracks, and patch security boundary layers.', requirements: ['OpenStack or equivalent hypervisor design depth', 'Software-defined networking (SDN) profiling skill', 'Linux virtualization internals knowledge'], benefits: ['High-tier telecom package access grants', 'On-site health maintenance amenities', 'Equity incentive matrices'] },
  { id: 23, title: 'Data Pipeline Specialist', company: 'Lenta Tech', location: 'Saint Petersburg', salary: '1600 $', type: 'Full Day', field: 'Tech', posted: 'Today', matchScore: 91, verified: false, applicantsCount: 12, description: 'Maintain transactional data synchronization tracks across unified data lake systems. You will build extraction loops, clean messy telemetry records, and structure metric schemas for downstream consumption.', requirements: ['Apache Spark / Airflow job setup depth', 'Data lake storage optimization background', 'Advanced SQL query profiling capability'], benefits: ['Corporate product purchase discounts', 'Family health tracking resources', 'Flexible hybrid options'] },
  { id: 24, title: 'E-Commerce Delivery Coordinator', company: 'Wildberries', location: 'Moscow', salary: '1800 $', type: 'Full Day', field: 'Operations', posted: '3 days ago', matchScore: 85, verified: true, applicantsCount: 19, description: 'Optimize automated tracking networks and logistical cross-dock routing procedures to ensure on-time delivery. You will monitor routing maps and rebalance package distribution weights.', requirements: ['Operations research / route planning backgrounds', 'High-volume incident tracking configuration skill', 'Dynamic workflow queue management experience'], benefits: ['Performance target bonus metrics', 'Corporate fitness program memberships', 'Flexible holiday structures'] },
  { id: 25, title: 'AI Safety & Alignment Auditor', company: 'Sber AI', location: 'Moscow', salary: '3200 $', type: 'Full Day', field: 'Tech', posted: 'Today', matchScore: 97, verified: true, applicantsCount: 6, description: 'Conduct automated verification audits against proprietary machine learning weights to mitigate risk vectors. You will craft adversarially engineered data benchmarks and model tracking reports.', requirements: ['Machine learning output validation depth', 'Adversarial fine-tuning evaluation background', 'Model security compliance mapping skill'], benefits: ['High-priority compute pipeline passes', 'Annual technology publication grants', 'Premium medical insurance'] }
];

const CAROUSEL_SLIDES = [
  { tag: "CAREER ACCELERATOR", title: "Land Your True Next Dream Role.", desc: "Curated verified vacancies updated live every 30s.", gradient: "from-indigo-600 via-indigo-700 to-purple-800" },
  { tag: "MARKET INSIGHTS", title: "Tech Tiers Scaling Rapidly", desc: "Average software engineer base grew 14% this quarter globally.", gradient: "from-emerald-600 via-teal-700 to-cyan-800" },
  { tag: "AI CAPABILITIES", title: "Smart Skill Mapping Engine Active", desc: "Upload structural portfolios to get verified profile highlights instantly.", gradient: "from-purple-600 via-pink-700 to-rose-800" }
];

const MOCK_TALENT = [
  { id: 10, name: "Alexei Volkov", role: "Senior Frontend Engineer", location: "Moscow", match: 96, skills: "React, Node.js, TypeScript", education: "Bauman MSTU", category: "Tech" },
  { id: 11, name: "Priya Sharma", role: "UX Product Researcher", location: "Bangalore", match: 92, skills: "Figma, User Interviews, Analytics", education: "IIT Bombay", category: "Design" },
  { id: 12, name: "Dmitry Petrov", role: "Python Backend Architect", location: "Remote", match: 95, skills: "Python, Django, PostgreSQL", education: "SPbSU", category: "Tech" },
  { id: 13, name: "Elena Rostova", role: "Product Analytics Lead", location: "Sochi", match: 88, skills: "SQL, Python, A/B Testing", education: "HSE Moscow", category: "Management" },
  { id: 14, name: "Sanjay Nair", role: "DevOps Infrastructure Lead", location: "Bangalore", match: 94, skills: "Kubernetes, Terraform, AWS", education: "BITS Pilani", category: "Tech" },
  { id: 15, name: "Anna Kuznetsova", role: "Motion Graphic Designer", location: "Remote", match: 91, skills: "After Effects, Figma, Motion", education: "SPbUFT", category: "Design" }
];

export default function App() {
  const [currentFlow, setCurrentFlow] = useState('onboarding'); 
  const [activeTab, setActiveTab] = useState('catalog');
  const [isLoading, setIsLoading] = useState(false);
  const [activeJobRoute, setActiveJobRoute] = useState(null); 
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [profileView, setProfileView] = useState('menu');
  const [carouselIdx, setCarouselIdx] = useState(0);

  const [isAppliedSuccess, setIsAppliedSuccess] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '']);
  const [userRole, setUserRole] = useState('Candidate'); 

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFieldFilter, setSelectedFieldFilter] = useState('All'); 
  const [salaryCap, setSalaryCap] = useState(3500);

  const [masterJobList, setMasterJobList] = useState(INITIAL_JOBS);
  const [favorites, setFavorites] = useState([2]); 
  const [shortlistedTalentIds, setShortlistedTalentIds] = useState([10, 13]); 
  
  const [responses, setResponses] = useState([
    { id: 1, job: INITIAL_JOBS[0], candidateName: 'Maria Nekrasova', status: 'Invite', date: 'Today', selectedResumeId: 1, messages: [{ sender: 'hr', text: 'Hello Maria, we loved your UX portfolio. Can you talk on Thursday at 3 PM?' }] },
    { id: 2, job: INITIAL_JOBS[1], candidateName: 'Maria Nekrasova', status: 'Wait', date: 'Yesterday', selectedResumeId: 1, messages: [{ sender: 'system', text: 'Application successfully received by Ubers hiring system.' }] },
    { id: 3, job: INITIAL_JOBS[5], candidateName: 'Alexei Volkov', status: 'Interview', date: 'Today', selectedResumeId: 2, messages: [{ sender: 'hr', text: 'Your transformer scaling optimization logic looks amazing. Let us do a tech run.' }] },
    { id: 4, job: INITIAL_JOBS[3], candidateName: 'Dmitry Petrov', status: 'Review', date: '2 days ago', selectedResumeId: 2, messages: [{ sender: 'system', text: 'Automated AI processing score matched at 95% efficiency parameters.' }] }
  ]);
  const [responseFilter, setResponseFilter] = useState('Invite');
  const [recruiterPipelineFilter, setRecruiterPipelineFilter] = useState('Review'); 

  const [sourcingCategoryFilter, setSourcingCategoryFilter] = useState('All');
  const [selectedHiringDeskField, setSelectedHiringDeskField] = useState('All');

  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostCompany, setNewPostCompany] = useState('');
  const [newPostSalary, setNewPostSalary] = useState('2000 $');
  const [newPostDesc, setNewPostDesc] = useState('');
  const [isPostSuccess, setIsPostSuccess] = useState(false);

  const [activeChatSession, setActiveChatSession] = useState(null); 
  const [chatInputText, setChatInputText] = useState('');

  // --- EXTENDED CANDIDATE RESUME ASSETS ---
  const [resumes, setResumes] = useState([
    { id: 1, title: 'UX/UI Product Designer Master Profile', skills: 'Figma, Prototypes, User Testing, Design Systems' },
    { id: 2, title: 'Junior Frontend Architecture sheet', skills: 'React, Tailwind CSS, JavaScript, TypeScript' },
    { id: 3, title: 'Data Analytics & Strategy Briefing', skills: 'Python, SQL, Tableau, Predictive Modeling' }
  ]);
  const [selectedActiveResumeId, setSelectedActiveResumeId] = useState(1);
  const [newTitle, setNewTitle] = useState('');
  const [newSkills, setNewSkills] = useState('');

  const [tickets, setTickets] = useState([
    { id: 481, topic: 'Verification Matrix Issue', desc: 'My account state shows verified but layout counter displays zero.', status: 'Open' }
  ]);
  const [ticketDesc, setTicketDesc] = useState('');

  useEffect(() => {
    if (activeTab !== 'catalog' || currentFlow !== 'app' || activeJobRoute) return;
    const interval = setInterval(() => {
      setCarouselIdx((prevIdx) => (prevIdx + 1) % CAROUSEL_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeTab, currentFlow, activeJobRoute]);

  const triggerTabShift = (tabName) => {
    setIsLoading(true);
    setActiveJobRoute(null); 
    setActiveChatSession(null);
    setIsFilterDropdownOpen(false); 
    setActiveTab(tabName);
    setTimeout(() => { setIsLoading(false); }, 400);
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otpCode];
    newOtp[index] = value.substring(value.length - 1);
    setOtpCode(newOtp);
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setCurrentFlow('app');
    triggerTabShift('catalog');
  };

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation(); 
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const toggleTalentShortlist = (id, e) => {
    if (e) e.stopPropagation();
    if (shortlistedTalentIds.includes(id)) {
      setShortlistedTalentIds(shortlistedTalentIds.filter(tid => tid !== id));
    } else {
      setShortlistedTalentIds([...shortlistedTalentIds, id]);
    }
  };

  const handleSelectTalentChat = (talentItem) => {
    const simulatedJobRef = { id: talentItem.id, title: talentItem.role, company: "Sourced Lead" };
    const matchedSession = responses.find(r => r.candidateName === talentItem.name);
    
    if (matchedSession) {
      setActiveChatSession(matchedSession);
    } else {
      const freshRecruiterSession = {
        id: Date.now(),
        job: simulatedJobRef,
        candidateName: talentItem.name,
        status: 'Review',
        date: 'Today',
        messages: [{ sender: 'hr', text: `Hello ${talentItem.name.split(' ')[0]}, we reviewed your credentials from the sourcing board and would love to connect.` }]
      };
      setResponses([freshRecruiterSession, ...responses]);
      setActiveChatSession(freshRecruiterSession);
    }
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedFieldFilter('All');
    setSalaryCap(3500);
    setIsFilterDropdownOpen(false);
  };

  const handleCreateResume = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const freshResume = { id: Date.now(), title: newTitle, skills: newSkills || 'General Skills' };
    setResumes([...resumes, freshResume]);
    setNewTitle(''); setNewSkills('');
  };

  const handleDeleteResume = (id) => { 
    setResumes(resumes.filter(r => r.id !== id)); 
    if(selectedActiveResumeId === id && resumes.length > 1) {
      setSelectedActiveResumeId(resumes[0].id);
    }
  };

  const handleDirectJobApply = (jobItem) => {
    setIsAppliedSuccess(true);
    if (!responses.some(r => r.job.id === jobItem.id)) {
      setResponses([{ 
        id: Date.now(), 
        job: jobItem, 
        candidateName: 'Maria Nekrasova',
        status: 'Wait', 
        date: 'Today', 
        selectedResumeId: selectedActiveResumeId,
        messages: [{ sender: 'system', text: 'Application successfully sent with your attached resume.' }] 
      }, ...responses]);
    }
    setTimeout(() => {
      setIsAppliedSuccess(false);
      setActiveJobRoute(null);
      triggerTabShift('responses');
      setResponseFilter('Wait');
    }, 1200);
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInputText.trim()) return;
    const senderTag = userRole === 'Candidate' ? 'candidate' : 'hr';
    const updatedResponses = responses.map(r => {
      if (r.id === activeChatSession.id) {
        return { ...r, messages: [...r.messages, { sender: senderTag, text: chatInputText }] };
      }
      return r;
    });
    setResponses(updatedResponses);
    const foundSession = updatedResponses.find(r => r.id === activeChatSession.id);
    setActiveChatSession(foundSession);
    setChatInputText('');
  };

  const handleRecruiterPostJob = (e) => {
    e.preventDefault();
    if (!newPostTitle || !newPostCompany) return;
    const customJob = {
      id: masterJobList.length + 1,
      title: newPostTitle,
      company: newPostCompany,
      salary: newPostSalary,
      location: 'Remote',
      type: 'Remote',
      field: 'Tech',
      posted: 'Today',
      matchScore: 95,
      verified: true,
      applicantsCount: 0,
      description: newPostDesc || 'No custom details cataloged.'
    };
    setMasterJobList([customJob, ...masterJobList]);
    setNewPostTitle(''); setNewPostCompany(''); setNewPostDesc('');
    setIsPostSuccess(true);
    setTimeout(() => {
      setIsPostSuccess(false);
      setProfileView('menu');
    }, 1200);
  };

  const filteredJobs = masterJobList.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const targetField = userRole === 'Candidate' ? selectedFieldFilter : selectedHiringDeskField;
    const matchesField = targetField === 'All' || job.field === targetField;
    const salaryNum = parseInt(job.salary.replace(/[^0-9]/g, ''), 10) || 1000;
    return matchesSearch && matchesField && (salaryNum <= salaryCap);
  });

  const CatalogSkeleton = () => (
    <div className="space-y-4 animate-pulse p-5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white border p-4 rounded-2xl space-y-3">
          <div className="h-4 bg-slate-200 rounded w-1/3" />
          <div className="h-3 bg-slate-200 rounded w-3/4" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 flex justify-center items-start font-sans antialiased selection:bg-indigo-500/30">
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="w-full min-h-screen bg-white flex flex-col relative max-w-xl mx-auto sm:border-x sm:border-slate-100">
        
        {currentFlow === 'onboarding' && (
          <div className="flex-1 flex flex-col justify-between p-6 overflow-y-auto no-scrollbar pt-12">
            <div className="flex justify-between items-center">
              {onboardingStep > 1 ? (
                <button onClick={() => setOnboardingStep(onboardingStep - 1)} className="p-2 text-slate-400"><ChevronLeft className="w-6 h-6" /></button>
              ) : <div className="w-9" />}
              <button onClick={() => { setCurrentFlow('app'); triggerTabShift('catalog'); }} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-indigo-500">Skip Setup</button>
            </div>

            <div className="flex-1 flex flex-col justify-center my-4">
              {onboardingStep === 1 && (
                <div className="space-y-6 text-center">
                  <div className="relative w-24 h-24 mx-auto bg-indigo-50 border rounded-3xl flex items-center justify-center"><Briefcase className="w-10 h-10 text-indigo-600" /></div>
                  <div className="space-y-2">
                    <h1 className="text-3xl font-black tracking-tight">CareerHub</h1>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto">Discover vetted, real-time vacancies matched to your precise skillset via smart AI workflows.</p>
                  </div>
                </div>
              )}

              {onboardingStep === 2 && (
                <div className="space-y-6 text-center">
                  <div className="relative w-24 h-24 mx-auto bg-purple-50 rounded-3xl flex items-center justify-center"><Sparkles className="w-10 h-10 text-purple-500" /></div>
                  <h1 className="text-2xl font-black tracking-tight">Define Your Persona</h1>
                  <div className="bg-slate-100 p-1 rounded-xl flex max-w-xs mx-auto border">
                    {['Candidate', 'HR Recruiter'].map((role) => (
                      <button key={role} onClick={() => setUserRole(role)} className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${userRole === role ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400'}`}>{role}</button>
                    ))}
                  </div>
                </div>
              )}

              {onboardingStep === 3 && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-black">Secure Sign-In</h1>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-sm font-bold text-slate-400">+7</span>
                    <input type="tel" placeholder="918 63 73 807" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-sm font-semibold text-slate-900" />
                  </div>
                  <button onClick={() => setOnboardingStep(4)} disabled={!phoneNumber} className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center space-x-2"><span>Request Access OTP</span> <ArrowRight className="w-4 h-4" /></button>
                </div>
              )}

              {onboardingStep === 4 && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-black text-center">Verify Code</h1>
                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div className="flex justify-center space-x-3">
                      {[0, 1, 2, 3].map((idx) => (
                        <input key={idx} id={`otp-${idx}`} type="text" maxLength="1" onChange={(e) => handleOtpChange(idx, e.target.value)} className="w-14 h-14 bg-slate-50 text-center text-xl font-black rounded-xl border border-slate-200 text-slate-900" />
                      ))}
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl text-sm">Confirm & Authenticate</button>
                  </form>
                </div>
              )}
            </div>

            {onboardingStep <= 2 && (
              <div className="space-y-4">
                <button onClick={() => setOnboardingStep(onboardingStep + 1)} className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl text-sm">Continue</button>
              </div>
            )}
          </div>
        )}

        {currentFlow === 'app' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto pb-24 space-y-4 no-scrollbar">
              
              {activeJobRoute ? (
                <div className="p-5 space-y-5 animate-fadeIn pt-6">
                  {isAppliedSuccess && (
                    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex flex-col justify-center items-center text-center p-6 animate-fadeIn">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3"><CheckCircle2 className="w-10 h-10" /></div>
                      <h3 className="text-lg font-black text-slate-900">Application Transmitted!</h3>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <button onClick={() => setActiveJobRoute(null)} className="p-2 bg-slate-100 text-slate-600 rounded-xl flex items-center space-x-1 text-xs font-bold"><ChevronLeft className="w-4 h-4" /><span>Back to list</span></button>
                    <button className="p-2 bg-slate-100 text-slate-400 rounded-xl"><Share2 className="w-4 h-4" /></button>
                  </div>

                  <div className="bg-white border border-slate-100 p-5 rounded-2xl flex items-center space-x-4 shadow-sm">
                    <div className="w-14 h-14 bg-indigo-50 font-black text-indigo-600 rounded-2xl flex items-center justify-center text-base">{activeJobRoute.company.substring(0,2).toUpperCase()}</div>
                    <div>
                      <h2 className="text-lg font-black leading-tight">{activeJobRoute.title}</h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs font-bold text-indigo-500">{activeJobRoute.company}</span>
                        <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-bold">{activeJobRoute.field}</span>
                      </div>
                    </div>
                  </div>

                  {/* --- CANDIDATE ATTACHED RESUME SELECTOR MATRIX (ONLY WHEN VIEWING DETAILS) --- */}
                  {userRole === 'Candidate' && (
                    <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl space-y-2">
                      <span className="text-[9px] uppercase font-black text-slate-400 flex items-center"><FileText className="w-3 h-3 mr-1" /> Choose Attached Portfolio Asset</span>
                      <div className="space-y-1.5">
                        {resumes.map(r => (
                          <div key={r.id} onClick={() => setSelectedActiveResumeId(r.id)} className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${selectedActiveResumeId === r.id ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-700'}`}>
                            {r.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-2xl space-y-2 text-xs font-bold">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase font-black text-slate-400">AI Compatibility Radar</span>
                      <span className="text-indigo-600 font-extrabold bg-indigo-50 px-2 py-0.5 rounded text-[11px]">{activeJobRoute.matchScore}% Match Rate</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{ width: `${activeJobRoute.matchScore}%` }} />
                    </div>
                  </div>

                  <div className="space-y-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <h3 className="text-[10px] uppercase font-black text-slate-400">Position Scope:</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{activeJobRoute.description}</p>
                  </div>

                  {userRole === 'Candidate' && (
                    <div className="pt-2 flex space-x-2 text-xs font-bold">
                      <button onClick={() => toggleFavorite(activeJobRoute.id)} className={`px-4 py-3.5 rounded-xl border transition-all ${favorites.includes(activeJobRoute.id) ? 'bg-rose-50 border-rose-100 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>{favorites.includes(activeJobRoute.id) ? 'Saved' : 'Save'}</button>
                      <button onClick={() => handleDirectJobApply(activeJobRoute)} className="flex-1 bg-indigo-600 text-white rounded-xl py-3.5 text-center font-black flex items-center justify-center space-x-1"><Zap className="w-3.5 h-3.5 fill-current" /><span>Apply With Selected Profile</span></button>
                    </div>
                  )}
                </div>

              ) : activeChatSession ? (
                <div className="p-4 flex flex-col h-[calc(100vh-70px)] justify-between animate-fadeIn pt-6">
                  <div className="space-y-3">
                    <button onClick={() => setActiveChatSession(null)} className="text-xs font-bold flex items-center text-slate-600 bg-slate-100 px-3 py-2 rounded-xl self-start"><ChevronLeft className="w-4 h-4" /><span>Back</span></button>
                    <div className="border p-3 rounded-2xl bg-white flex items-center justify-between shadow-xs">
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{activeChatSession.job.title}</h4>
                        <p className="text-[10px] text-slate-400 font-medium">{userRole === 'Candidate' ? 'Recruiter Channel' : `Applicant: ${activeChatSession.candidateName}`}</p>
                      </div>
                      <span className="text-[9px] bg-indigo-50 text-indigo-600 font-black px-2 py-0.5 rounded uppercase">{userRole}</span>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto my-4 space-y-3 pr-1 no-scrollbar text-xs">
                    {activeChatSession.messages.map((m, i) => {
                      const isMe = (userRole === 'Candidate' && m.sender === 'candidate') || (userRole === 'HR Recruiter' && m.sender === 'hr');
                      return (
                        <div key={i} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                          <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed font-semibold ${isMe ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'}`}>
                            {m.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="flex space-x-2 border-t pt-3 bg-white pb-4">
                    <input type="text" placeholder="Type response messages..." value={chatInputText} onChange={(e) => setChatInputText(e.target.value)} className="flex-1 bg-slate-50 border rounded-xl px-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900" />
                    <button onClick={handleSendChatMessage} className="bg-indigo-600 text-white p-3 rounded-xl shadow-md"><Send className="w-4 h-4" /></button>
                  </form>
                </div>

              ) : (
                <>
                  {activeTab === 'catalog' && (
                    <div className="animate-fadeIn">
                      {userRole === 'Candidate' ? (
                        <div className="w-full h-36 relative overflow-hidden flex select-none">
                          {CAROUSEL_SLIDES.map((slide, index) => (
                            <div key={index} className={`w-full h-full flex items-center px-6 text-white bg-gradient-to-br ${slide.gradient} absolute inset-0 transition-transform duration-700 ease-in-out`} style={{ transform: `translateX(${(index - carouselIdx) * 100}%)` }}>
                              <div className="space-y-1 relative z-10 max-w-[280px] animate-fadeIn pt-4">
                                <span className="text-[8px] bg-white/20 text-white font-extrabold uppercase px-2 py-0.5 rounded-md">{slide.tag}</span>
                                <h3 className="text-sm font-black tracking-tight">{slide.title}</h3>
                                <p className="text-[10px] text-slate-100 font-medium leading-tight opacity-90">{slide.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 pt-8 space-y-4 shadow-md">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Enterprise Board Room</span>
                            </div>
                            <span className="text-[10px] bg-white/10 text-indigo-300 font-black px-2.5 py-1 rounded-md">Live Platform Monitoring</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 pt-1">
                            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                              <div className="flex justify-between items-center text-slate-400"><span className="text-[10px] font-black uppercase">Active Channels</span><Radio className="w-3.5 h-3.5 text-indigo-400" /></div>
                              <p className="textxl font-black mt-1">{masterJobList.length} Vacancies</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                              <div className="flex justify-between items-center text-slate-400"><span className="text-[10px] font-black uppercase">Pipeline Flow</span><Users className="w-3.5 h-3.5 text-emerald-400" /></div>
                              <p className="text-xl font-black mt-1">{responses.length} Candidates</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="px-4 space-y-4 pt-4">
                        <div className="space-y-0.5">
                          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{userRole === 'Candidate' ? 'Good evening' : 'Polymedia Hiring Admin'}</span>
                          <h2 className="text-2xl font-black tracking-tight">{userRole === 'Candidate' ? 'Find Your Dream Job' : 'Hiring Desk Console'}</h2>
                        </div>

                        <div className="relative z-30">
                          <div className="flex items-center bg-slate-50 rounded-2xl p-1 px-3 border border-slate-200/60">
                            <Search className="w-4 h-4 text-slate-400 mr-2" />
                            <input type="text" placeholder={userRole === 'Candidate' ? "Search title, tech stack..." : "Search corporate vacancy catalog maps..."} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 bg-transparent text-xs font-semibold py-3.5 focus:outline-none text-slate-900" />
                            <button onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)} className={`p-2 rounded-xl transition-all ${isFilterDropdownOpen ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}><Filter className="w-4 h-4" /></button>
                          </div>

                          {isFilterDropdownOpen && (
                            <div className="absolute right-0 left-0 top-14 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 space-y-4 animate-fadeIn text-xs font-bold">
                              <div className="flex justify-between items-center"><span className="text-[10px] text-slate-400 uppercase font-black">Segment Filters</span><button onClick={resetAllFilters} className="text-rose-500 flex items-center space-x-1 text-[11px]"><RotateCcw className="w-3 h-3" /><span>Reset Configurations</span></button></div>
                              <div className="border-t border-slate-100" />
                              <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-wider text-slate-400">Department Categorization</label>
                                <div className="flex flex-wrap gap-1.5">
                                  {['All', 'Tech', 'Design', 'Management', 'Operations'].map((field) => (
                                    <button key={field} onClick={() => userRole === 'Candidate' ? setSelectedFieldFilter(field) : setSelectedHiringDeskField(field)} className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold ${(userRole === 'Candidate' ? selectedFieldFilter : selectedHiringDeskField) === field ? 'bg-slate-950 text-white border-slate-950' : 'bg-slate-50 text-slate-600 border-slate-200/60'}`}>{field}</button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          {filteredJobs.map((job) => (
                            <div key={job.id} onClick={() => setActiveJobRoute(job)} className="bg-white border border-slate-100 p-4 rounded-2xl space-y-3 cursor-pointer hover:border-indigo-400/60 active:scale-[0.99] transition-all group shadow-xs">
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="text-[11px] text-slate-400 font-bold block">{job.company}</span>
                                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-500 transition-colors">{job.title}</h4>
                                </div>
                                {userRole === 'Candidate' ? (
                                  <button onClick={(e) => toggleFavorite(job.id, e)} className={`p-2 rounded-xl transition-all ${favorites.includes(job.id) ? 'text-rose-500 bg-rose-50' : 'text-slate-400 bg-slate-50'}`}><Heart className={`w-3.5 h-3.5 ${favorites.includes(job.id) ? 'fill-current' : ''}`} /></button>
                                ) : (
                                  <div className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-2.5 py-1 rounded-md">{job.applicantsCount || 0} Applicants</div>
                                )}
                              </div>
                              <div className="flex justify-between items-center text-[11px] font-bold text-slate-500">
                                <span className="bg-slate-50 px-2.5 py-1 rounded-lg flex items-center"><MapPin className="w-3 h-3 mr-1 text-slate-400" />{job.location}</span>
                                <span className="text-indigo-500 font-bold bg-indigo-50 px-2 py-0.5 rounded text-[10px]">{job.salary}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'favourites' && (
                    <div className="p-4 space-y-4 no-scrollbar pt-6 animate-fadeIn">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight">{userRole === 'Candidate' ? 'Bookmarks' : 'Talent Sourcing Board'}</h2>
                        <p className="text-xs text-slate-400 font-medium">{userRole === 'Candidate' ? 'Your pinned and saved vacancy tracking sheets.' : 'Shortlisted exceptional candidate profile cards earmarked for review.'}</p>
                      </div>

                      {userRole === 'HR Recruiter' && (
                        <div className="flex space-x-1 overflow-x-auto no-scrollbar py-1">
                          {['All', 'Tech', 'Design', 'Management'].map((cat) => (
                            <button key={cat} onClick={() => setSourcingCategoryFilter(cat)} className={`px-4 py-1.5 text-xs font-bold rounded-full border shrink-0 transition-all ${sourcingCategoryFilter === cat ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>{cat}</button>
                          ))}
                        </div>
                      )}

                      <div className="space-y-3">
                        {userRole === 'Candidate' ? (
                          masterJobList.filter(j => favorites.includes(j.id)).map(job => (
                            <div key={job.id} onClick={() => setActiveJobRoute(job)} className="bg-white border border-slate-100 p-4 rounded-2xl flex justify-between items-center cursor-pointer shadow-xs">
                              <div><h4 className="text-xs font-bold text-slate-800">{job.title}</h4><span className="text-[11px] text-slate-400">{job.company} • {job.salary}</span></div>
                              <button onClick={(e) => { e.stopPropagation(); toggleFavorite(job.id); }} className="text-rose-500 p-1"><X className="w-4 h-4" /></button>
                            </div>
                          ))
                        ) : (
                          MOCK_TALENT
                            .filter(t => sourcingCategoryFilter === 'All' || t.category === sourcingCategoryFilter)
                            .map(talent => (
                              <div key={talent.id} onClick={() => handleSelectTalentChat(talent)} className={`bg-white border p-4 rounded-2xl space-y-3 shadow-xs cursor-pointer hover:border-indigo-400/80 transition-all ${shortlistedTalentIds.includes(talent.id) ? 'border-indigo-400 bg-indigo-50/10' : 'border-slate-100'}`}>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="text-sm font-black text-slate-800">{talent.name}</h4>
                                    <p className="text-xs font-bold text-indigo-600 mt-0.5">{talent.role} • {talent.location}</p>
                                  </div>
                                  <button onClick={(e) => toggleTalentShortlist(talent.id, e)} className={`p-2 rounded-xl ${shortlistedTalentIds.includes(talent.id) ? 'text-amber-500 bg-amber-50' : 'text-slate-400 bg-slate-50'}`}><Star className="w-3.5 h-3.5 fill-current" /></button>
                                </div>
                                <p className="text-[11px] text-slate-500 font-medium">Skills: <span className="text-slate-700 font-bold">{talent.skills}</span></p>
                                <div className="border-t pt-2 flex justify-between text-[10px] text-slate-400 font-bold">
                                  <span>Education: {talent.education}</span>
                                  <span className="text-indigo-600 bg-indigo-50 px-2 rounded font-black">{talent.match}% Compatibility</span>
                                </div>
                              </div>
                            ))
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'responses' && (
                    <div className="p-4 space-y-4 no-scrollbar pt-6 animate-fadeIn">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight">{userRole === 'Candidate' ? 'Applications Tracker' : 'Recruitment Pipeline Hub'}</h2>
                        <p className="text-xs text-slate-400 font-medium">Click on any notification card to open the interactive messaging module screens.</p>
                      </div>
                      
                      <div className="bg-slate-100 p-1 rounded-xl flex border border-slate-200">
                        {(userRole === 'Candidate' ? ['Invite', 'Wait', 'Denial'] : ['Review', 'Interview', 'Hired']).map((t) => (
                          <button key={t} onClick={() => userRole === 'Candidate' ? setResponseFilter(t) : setRecruiterPipelineFilter(t)} className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${(userRole === 'Candidate' ? responseFilter : recruiterPipelineFilter) === t ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400'}`}>{t}</button>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {responses
                          .filter(r => userRole === 'Candidate' ? (r.status === responseFilter) : (r.status === recruiterPipelineFilter || (recruiterPipelineFilter === 'Review' && r.status === 'Wait')))
                          .map(resp => (
                            <div key={resp.id} onClick={() => setActiveChatSession(resp)} className="bg-white border border-slate-100 p-4 rounded-2xl space-y-3 cursor-pointer hover:border-indigo-400 transition-all shadow-xs group">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="text-xs font-black text-slate-800">{resp.job.title}</h4>
                                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">{userRole === 'Candidate' ? resp.job.company : `Candidate: ${resp.candidateName}`}</span>
                                </div>
                                <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-black ${resp.status === 'Invite' || resp.status === 'Interview' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{resp.status}</span>
                              </div>
                              
                              {resp.messages && resp.messages.length > 0 && (
                                <div className="bg-slate-50 p-2 rounded-xl text-[11px] text-slate-500 italic truncate font-medium border border-slate-100 flex items-center">
                                  <MessageSquare className="w-3 h-3 mr-1 text-indigo-400 shrink-0" />
                                  <span>"{resp.messages[resp.messages.length - 1].text}"</span>
                                </div>
                              )}

                              <div className="border-t border-slate-50 pt-2 flex justify-between items-center text-[10px] font-bold text-slate-400">
                                <span className="flex items-center text-indigo-500"><MessageCircle className="w-3.5 h-3.5 mr-1" />{resp.messages.length} Correspondence Records</span>
                                <span>Open Thread →</span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'profile' && (
                    <div className="p-4 space-y-5 animate-fadeIn no-scrollbar pt-6">
                      {profileView === 'resumes' ? (
                        <div className="space-y-4">
                          <button onClick={() => setProfileView('menu')} className="text-xs font-bold flex items-center text-indigo-600 bg-indigo-50 px-3 py-2 rounded-xl"><ChevronLeft className="w-4 h-4" /><span>Back</span></button>
                          
                          {userRole === 'Candidate' ? (
                            <>
                              <div className="bg-indigo-600 text-white p-4 rounded-2xl space-y-1 shadow-sm">
                                <span className="text-[8px] bg-white/20 px-2 py-0.5 rounded font-black uppercase tracking-wider">Active Portfolio Selection</span>
                                <h3 className="text-sm font-black truncate">{resumes.find(r => r.id === selectedActiveResumeId)?.title || 'No active choices registered'}</h3>
                              </div>
                              <form onSubmit={handleCreateResume} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-3 text-xs font-semibold">
                                <input type="text" placeholder="Resume Title / Role Target" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full bg-white border p-2.5 rounded-xl outline-none" />
                                <input type="text" placeholder="Core Technical Stack Skills" value={newSkills} onChange={(e) => setNewSkills(e.target.value)} className="w-full bg-white border p-2.5 rounded-xl outline-none" />
                                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl"><Plus className="w-4 h-4 inline mr-1" />Append Profile</button>
                              </form>
                              {resumes.map(res => (
                                <div key={res.id} onClick={() => setSelectedActiveResumeId(res.id)} className={`border p-3.5 rounded-2xl flex justify-between items-center cursor-pointer transition-all ${selectedActiveResumeId === res.id ? 'bg-indigo-50/40 border-indigo-400 shadow-xs' : 'bg-white border-slate-100'}`}>
                                  <div><h4 className="text-xs font-black text-slate-800">{res.title}</h4><p className="text-[11px] text-slate-400">{res.skills}</p></div>
                                  <button onClick={(e) => { e.stopPropagation(); handleDeleteResume(res.id); }} className="text-slate-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                                </div>
                              ))}
                            </>
                          ) : (
                            <div className="space-y-4 animate-fadeIn">
                              <div><h2 className="text-xl font-black">Publish New Vacancy</h2><p className="text-xs text-slate-400">Broadcast fresh positions directly across the live marketplace grids.</p></div>
                              <form onSubmit={handleRecruiterPostJob} className="bg-slate-50 border p-4 rounded-2xl space-y-3 text-xs font-semibold shadow-xs">
                                {isPostSuccess && <div className="bg-emerald-50 text-emerald-600 p-2 border rounded-xl text-center font-black">Vacancy Broadcast Successfully Live!</div>}
                                <input type="text" placeholder="Job Role Title" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} className="w-full bg-white border p-3 rounded-xl outline-none" required />
                                <input type="text" placeholder="Company Brand Sub-Division" value={newPostCompany} onChange={(e) => setNewPostCompany(e.target.value)} className="w-full bg-white border p-3 rounded-xl outline-none" required />
                                <input type="text" placeholder="Financial Remuneration Package ($ Tiers)" value={newPostSalary} onChange={(e) => setNewPostSalary(e.target.value)} className="w-full bg-white border p-3 rounded-xl outline-none" />
                                <textarea rows="3" placeholder="Input complete occupational scope assignments details..." value={newPostDesc} onChange={(e) => setNewPostDesc(e.target.value)} className="w-full bg-white border p-3 rounded-xl outline-none" />
                                <button type="submit" className="w-full bg-indigo-600 text-white font-black py-3 rounded-xl text-center shadow-lg shadow-indigo-600/20">Broadcast Vacancy Active</button>
                              </form>
                            </div>
                          )}
                        </div>

                      ) : profileView === 'support' ? (
                        <div className="space-y-4">
                          <button onClick={() => setProfileView('menu')} className="text-xs font-bold flex items-center text-indigo-600 bg-indigo-50 px-3 py-2 rounded-xl"><ChevronLeft className="w-4 h-4" /><span>Back</span></button>
                          <h2 className="text-xl font-black">Support Desk</h2>
                          <form onSubmit={(e) => e.preventDefault()} className="bg-slate-50 border p-4 rounded-2xl space-y-3 text-xs font-semibold">
                            <textarea rows="3" placeholder="Describe issue parameters..." value={ticketDesc} onChange={(e) => setTicketDesc(e.target.value)} className="w-full bg-white border p-2.5 rounded-xl outline-none" />
                            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl"><Send className="w-3.5 h-3.5 inline mr-1" />Submit Ticket</button>
                          </form>
                        </div>
                      ) : (
                        <>
                          <div className="flex flex-col items-center text-center space-y-2 pt-2">
                            {userRole === 'Candidate' ? (
                              <>
                                <div className="w-20 h-20 bg-slate-100 rounded-full border-2 border-white shadow-md overflow-hidden flex items-center justify-center">
                                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-400 mt-2 fill-current"><circle cx="50" cy="35" r="20" /><path d="M10,85 C10,65 30,60 50,60 C70,60 90,65 90,85 Z" /></svg>
                                </div>
                                <div><h3 className="text-base font-black text-slate-800">Maria Nekrasova</h3><p className="text-[11px] text-slate-400 font-semibold">{phoneNumber || '+7 918 637-38-07'}</p></div>
                              </>
                            ) : (
                              <>
                                <div className="w-20 h-20 bg-indigo-600 rounded-2xl border-2 border-white shadow-md flex items-center justify-center text-white font-black text-2xl tracking-tighter"><Building2 className="w-10 h-10" /></div>
                                <div><h3 className="text-base font-black text-slate-800">Polymedia Corporate Desk</h3><p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider text-indigo-600">Enterprise Operations</p></div>
                              </>
                            )}
                          </div>

                          <div className="grid grid-cols-3 gap-2.5 text-center">
                            {userRole === 'Candidate' ? (
                              <>
                                <div className="bg-slate-50 border p-3 rounded-xl"><span className="text-[18px] font-black text-slate-800">{responses.length}</span><span className="text-[9px] text-slate-400 block font-bold uppercase mt-0.5">Applied</span></div>
                                <div className="bg-indigo-50/60 border p-3 rounded-xl"><span className="text-[18px] font-black text-indigo-600">98%</span><span className="text-[9px] text-indigo-400 block font-bold uppercase mt-0.5">Top Match</span></div>
                                <div className="bg-slate-50 border p-3 rounded-xl"><span className="text-[18px] font-black text-slate-800">{favorites.length}</span><span className="text-[9px] text-slate-400 block font-bold uppercase mt-0.5">Saved</span></div>
                              </>
                            ) : (
                              <>
                                <div className="bg-slate-50 border p-3 rounded-xl"><span className="text-[18px] font-black text-slate-800">{masterJobList.length}</span><span className="text-[9px] text-slate-400 block font-bold uppercase mt-0.5">Live Posts</span></div>
                                <div className="bg-indigo-50/60 border p-3 rounded-xl"><span className="text-[18px] font-black text-indigo-600">25</span><span className="text-[9px] text-indigo-400 block font-bold uppercase mt-0.5">Total Pool</span></div>
                                <div className="bg-slate-50 border p-3 rounded-xl"><span className="text-[18px] font-black text-slate-800">{shortlistedTalentIds.length}</span><span className="text-[9px] text-slate-400 block font-bold uppercase mt-0.5">Sourced</span></div>
                              </>
                            )}
                          </div>

                          {/* --- DYNAMIC APPLICANT METRICS FOR CANDIDATE INTELLIGENCE --- */}
                          {userRole === 'Candidate' && (
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-3 text-xs">
                              <span className="text-[9px] uppercase font-black text-slate-400 block tracking-wider">Candidate Funnel Performance Matrix</span>
                              <div className="space-y-2">
                                <div className="flex justify-between items-center"><span className="text-slate-500 font-bold flex items-center"><BarChart3 className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Recruiter Response Rate</span><span className="font-extrabold text-slate-800">75% Engagement</span></div>
                                <div className="flex justify-between items-center"><span className="text-slate-500 font-bold flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-purple-500" /> Active Interview Channels</span><span className="font-extrabold text-emerald-600">1 Scheduled</span></div>
                              </div>
                            </div>
                          )}

                          {userRole === 'HR Recruiter' && (
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-3 text-xs">
                              <span className="text-[9px] uppercase font-black text-slate-400 block tracking-wider">Enterprise Performance Summary Matrix</span>
                              <div className="space-y-2">
                                <div className="flex justify-between items-center"><span className="text-slate-500 font-bold flex items-center"><BarChart3 className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Pipeline Convergence Rate</span><span className="font-extrabold text-slate-800">84.2% Efficiency</span></div>
                                <div className="flex justify-between items-center"><span className="text-slate-500 font-bold flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-purple-500" /> Average Selection Velocity</span><span className="font-extrabold text-slate-800">4.5 Days / Post</span></div>
                              </div>
                            </div>
                          )}

                          <div className="bg-slate-50/80 border p-4 rounded-xl space-y-2.5 text-xs font-semibold">
                            <span className="text-[9px] uppercase font-black text-slate-400 block tracking-wider">{userRole === 'Candidate' ? 'Candidate Overview' : 'Corporate Identity Parameters'}</span>
                            <p className="text-[11px] text-slate-500 leading-normal font-medium">
                              {userRole === 'Candidate' 
                                ? 'Higher Education Degree (HSE Moscow) based in Sochi, Russia specialized in interactive system design libraries.' 
                                : 'Polymedia systems integration branch office tracking core technical engineering resource allocations globally.'}
                            </p>
                          </div>

                          <div className="space-y-1">
                            <div className="border rounded-2xl divide-y bg-white overflow-hidden text-xs font-bold">
                              <div onClick={() => setProfileView('resumes')} className="p-3.5 flex justify-between items-center hover:bg-slate-50 cursor-pointer group">
                                <span className="text-slate-700">{userRole === 'Candidate' ? 'My Resumes & Portfolios Asset Manager' : 'Broadcast New Vacancy App Post'}</span>
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                              </div>
                              <div onClick={() => setProfileView('support')} className="p-3.5 flex justify-between items-center hover:bg-slate-50 cursor-pointer"><span className="text-slate-700">Help & Support Desk Matrix</span><ChevronRight className="w-4 h-4 text-slate-400" /></div>
                            </div>
                          </div>

                          <button onClick={() => { setCurrentFlow('onboarding'); setOnboardingStep(2); }} className="w-full bg-indigo-50 text-indigo-600 py-3 rounded-xl font-bold text-xs border border-indigo-100 shadow-xs">Swap Account Persona View</button>
                        </>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* --- FIXED MOBILE FOOTER NAVIGATION BAR --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 pb-safe px-4 py-3 flex justify-between items-center z-50 select-none max-w-xl mx-auto">
              <button onClick={() => triggerTabShift('catalog')} className={`flex flex-col items-center flex-1 space-y-0.5 ${activeTab === 'catalog' && !activeJobRoute ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}><Search className="w-5 h-5 stroke-[2.2]" /><span className="text-[10px] tracking-tight">{userRole === 'Candidate' ? 'Catalog' : 'Hiring Desk'}</span></button>
              <button onClick={() => triggerTabShift('favourites')} className={`flex flex-col items-center flex-1 space-y-0.5 ${activeTab === 'favourites' ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}><Heart className="w-5 h-5 stroke-[2.2]" /><span className="text-[10px] tracking-tight">{userRole === 'Candidate' ? 'Bookmarks' : 'Sourcing'}</span></button>
              <button onClick={() => triggerTabShift('responses')} className={`flex flex-col items-center flex-1 space-y-0.5 ${activeTab === 'responses' ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}><MessageSquare className="w-5 h-5 stroke-[2.2]" /><span className="text-[10px] tracking-tight">Messages</span></button>
              <button onClick={() => triggerTabShift('profile')} className={`flex flex-col items-center flex-1 space-y-0.5 ${activeTab === 'profile' ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}><User className="w-5 h-5 stroke-[2.2]" /><span className="text-[10px] tracking-tight">{userRole === 'Candidate' ? 'Profile' : 'Dashboard'}</span></button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
