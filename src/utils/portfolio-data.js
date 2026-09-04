import CyberDevItkPress from '@/assets/CyberDevItkPress.png'
import ShoeSenseAI from '@/assets/ShoeSenseAI.jpeg'
import web_margasari from '@/assets/web_margasari.png'
import KasHub from '@/assets/KasHub.png'
import Portofolio from '@/assets/Portofolio.png'
import ComplianceManagement from '@/assets/ComplianceManagement.png'
import CarMonitor from '@/assets/CarMonitor.png'

export const portfolioData = {
  personal: {
    name: 'Anugrah Alian',
    title: ['Informatics Student', 'Network Engineer Enthusiast', 'Cyber Security Learner'],
    email: 'alianputratama@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'Balikpapan, Indonesia',
    bio: 'Passionate about network engineering and cybersecurity. Dedicated to building secure, robust infrastructure for the digital world.',
  },
  social: {
    github: 'https://github.com/Alian13',
    linkedin: 'https://linkedin.com/in/anugrahalianputratama',
    instagram: 'https://instagram.com/anugrah_alian',
    twitter: 'https://twitter.com',
  },
  about: {
    university: 'University Name',
    degree: 'Bachelor of Informatics',
    // gpa: '3.3/4.0',
    description:
      'Passionate learner with expertise in network design, security protocols, and infrastructure management. Experienced with enterprise-level networking and cybersecurity tools.',
  },
  skills: {
    networking: ['OSPF', 'BGP', 'MPLS', 'VPN', 'Firewall Configuration', 'Load Balancing'],
    security: [
      'Penetration Testing',
      'Network Security',
      'Vulnerability Assessment',
      'Incident Response',
      'Security Policies',
    ],
    programming: ['Python', 'JavaScript', 'Go', 'Bash', 'C++', 'SQL'],
    tools: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Kali Linux', 'MikroTik', 'Cisco IOS'],
  },
  certifications: [
    {
      id: 1,
      title:
        'Skema Sertifikasi KKNI Level II pada Kompetensi Keahlian Teknik Komputer dan Jaringan',
      issuer: 'BNSP',
      date: '2023',
    },
    {
      id: 2,
      title: 'MTCNA (MikroTik Certified Network Associate)',
      issuer: 'ID-Network',
      date: '2023',
    },
    {
      id: 3,
      title: 'Smart Light: From Lasers to Quantum Communication',
      issuer: 'MOOC 2026 - Institut Teknologi Bandung',
      date: '2026',
    },
    {
      id: 4,
      title: 'Machine Learning',
      issuer: 'MOOC 2026 - Institut Teknologi Bandung',
      date: '2026',
    },
  ],
  projects: [
    {
      id: 7, // sesuaikan urutan, taruh paling atas karena project terbaru
      title: 'Car Monitor',
      description:
        'A vehicle monitoring and scheduling web application built for PLN operational fleet management. Enables staff to book vehicle usage schedules, track which vehicles are currently in use, and monitor fuel consumption reports to identify efficient versus wasteful vehicle usage.',
      image: CarMonitor, // ganti fallback ini setelah asset screenshot tersedia
      technologies: ['Vue.js'], // tambahkan sisanya sendiri
      requirements: [
        'Vehicle usage booking and scheduling system',
        'Real-time monitoring of vehicles currently in use',
        'Fuel consumption reporting and tracking',
        'Fleet efficiency analysis (fuel-efficient vs fuel-wasteful usage)',
        'Role-based access for staff and fleet administrators',
        'Booking history and usage logs',
        'Responsive and mobile-friendly interface',
      ],
    },
    {
      id: 6,
      title: 'Compliance Management Office',
      description:
        'A web-based compliance evidence management system developed for ULP (Unit Layanan Pelanggan) and subordinate units under UID (Unit Induk Distribusi) at PT PLN. Replaces the previous manual, Google Drive-based process with a centralized platform for uploading, monitoring, and tracking mandatory compliance evidence in real time, improving visibility and accountability across units.',
      image: ComplianceManagement, // ganti fallback ini setelah asset screenshot tersedia
      technologies: ['Vue.js', 'Laravel'], // tambahkan sisanya sendiri // ganti dengan demo/github jika ada link publik
      requirements: [
        'Centralized compliance evidence upload and storage',
        'Real-time tracking and monitoring of mandatory evidence submissions',
        'Role-based access for ULP and subordinate units under UID',
        'Submission status dashboard and reporting',
        'Deadline and compliance reminder notifications',
        'Document categorization and search',
        'Audit trail for evidence submission history',
        'Responsive and user-friendly interface',
      ],
    },
    {
      id: 5, // sesuaikan
      title: 'Anugrah Alian - Personal Portofolio Website',
      description:
        'Designed and developed a world-class personal portofolio website with a premium dark cyber aesthetic, featuring glassmorphism UI, smooth GSAP animations, and an interactive network topology background. Built to showcase professional experience, certifications, and projects in the network engineering and cybersecurity domain.',
      image: Portofolio, // import sesuai path asset kamu
      technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'GSAP', 'Pinia', 'Vue Router'],
      github: 'https://github.com/Alian13/Web_Portofolio', // ganti
      demo: 'https://alian13.github.io/Web_Portofolio/', // ganti
      requirements: [
        'Hero section with typewriter effect',
        'About Me section with statistics',
        'Certifications showcase',
        'Featured projects gallery',
        'Experience timeline',
        'Contact form',
        'Interactive network topology background',
        'Glassmorphism dark cyber UI theme',
        'GSAP scroll-triggered animations',
        'Fully responsive mobile-first layout',
        'SEO and accessibility optimized',
      ],
    },
    {
      id: 4,
      title: 'KasHub - UMKM Financial Management System',
      description:
        'A modern web-based financial management system designed for Micro, Small, and Medium Enterprises (MSMEs) to streamline inventory management, transaction recording, financial reporting, and business analytics through a user-friendly dashboard.',
      image: KasHub,
      technologies: ['Vue 3', 'Vite', 'Pinia', 'Vue Router', 'Tailwind CSS', 'Axios', 'jsPDF'],
      github: 'https://github.com/Alian13/KasHub',
      //status: 'In Progress',
      requirements: [
        'Role-based authentication and authorization (RBAC)',
        'Real-time financial dashboard and analytics',
        'Inventory and stock management system',
        'Transaction recording and monitoring',
        'Financial reporting with PDF export',
        'Notification center and alert management',
        'Session timeout and inactivity protection',
        'Responsive and mobile-friendly interface',
      ],
    },
    {
      id: 3,
      title: 'Web Application Penetration Testing',
      description:
        'Conducting authorized penetration testing to identify, validate, and document security vulnerabilities in web applications, followed by risk assessment and remediation recommendations.',
      image: CyberDevItkPress,
      technologies: ['Burp Suite', 'Linux', 'Nikto', 'Dorking'],
      // status: 'In Progress',
      requirements: [
        'Reconnaissance and attack surface mapping',
        'Vulnerability discovery and validation',
        'OWASP Top 10 security assessment',
        'Authentication and session testing',
        'Security misconfiguration analysis',
        'Technical reporting and remediation guidance',
      ],
    },
    {
      id: 2,
      title: 'Website of Marga Sari Subdistrict, Balikpapan City',
      description:
        'Developed a Digital Archiving and Social Complaint Management System for Margasari Village, Balikpapan, as part of the Student Social Innovation Program. The system improves service accessibility, transparency, and administrative efficiency through a user-friendly, human-centered design for residents, RT leaders, and village staff.',
      image: web_margasari,
      technologies: ['Laravel 10', 'Blade', 'PHP 8', 'Javascript', 'MySQL', 'Bootstrap 5'],
      github: 'https://github.com/Miftahul-Fauzi-Rifai/Website-Kelurahan-Margasari',
      demo: 'https://margasari-balikpapan.id/',
      requirements: [
        'Complaint submission and tracking system',
        'Digital document and archive management',
        'Role-based authentication and authorization',
        'Real-time complaint status monitoring',
        'Secure file upload and storage',
        'Dashboard analytics and reporting',
        'Google Maps API integration',
        'Responsive and user-friendly interface',
        'Database-driven public service platform',
        'Human-centered design implementation',
      ],
    },
    {
      id: 1,
      title: 'ShoeSense AI',
      description:
        'AI-powered web application that analyzes shoe cleanliness levels and identifies shoe materials using a Convolutional Neural Network (CNN) model. Users can upload images or capture photos directly for real-time analysis and classification.',
      image: ShoeSenseAI,
      technologies: ['Vue 3', 'Vite', 'Flask', 'Tensorflow', 'Keras', 'CNN Multilabel Model'],
      github: 'https://github.com/Alian13/ShoeSense-AI',
      requirements: [
        'Shoe image upload and camera capture',
        'AI-powered cleanliness assessment',
        'Shoe material detection and classification',
        'CNN-based multi-label prediction',
        'Real-time image analysis',
        'Computer vision processing pipeline',
        'Responsive web application',
        'Flask API integration',
      ],
    },
  ],
  experience: [
    {
      title: 'Informatics Intern',
      company: 'PT PLN (Persero) Unit Induk Pembangunan Kalimantan Bagian Timur',
      date: 'Present - Aug 2026',
      description:
        'Participating in web application development and digital transformation initiatives.',
      highlights: ['To be updated upon internship completion'],
    },
    {
      id: 5,
      title: 'Algorithm and Programming Practicum Assistant Coordinator',
      company: 'Institut Teknologi Kalimantan',
      date: 'Feb 2026 - Jun 2026',
      description:
        'Assisted students in programming practicum sessions and coordinated teaching assistants across multiple classes.',
      highlights: [
        'Guided students in algorithm and programming concepts',
        'Assisted with debugging and code troubleshooting',
        'Managed and coordinated practicum assistants',
        'Organized practicum schedules and activities',
        'Collaborated with lecturers in planning and monitoring practicum sessions',
      ],
    },
    {
      id: 4,
      title: 'Computer Network Practicum Assistant',
      company: 'Institut Teknologi Kalimantan',
      date: 'Apr 2026 - Jun 2026',
      description:
        'Assisted students during computer network practicum sessions and provided guidance on MikroTik networking concepts based on MTCNA and MTCRE curricula.',
      highlights: [
        'Guided students in MikroTik RouterOS configuration and management',
        'Assisted with network troubleshooting and connectivity issues',
        'Explained routing concepts including static and dynamic routing',
        'Supported practical activities related to MTCNA and MTCRE topics',
        'Reviewed and evaluated student laboratory assignments',
      ],
    },
    {
      id: 3,
      title: 'Algorithm and Programming Practicum Assistant',
      company: 'Institut Teknologi Kalimantan',
      date: 'Sep 2025 - Now',
      description:
        'Assisted students during programming practicum sessions and provided guidance on Python programming concepts.',
      highlights: [
        'Guided students in Python programming exercises',
        'Assisted with debugging and code troubleshooting',
        'Provided support using Visual Studio Code development tools',
        'Reviewed and evaluated practical assignments',
        'Explained programming concepts and best practices',
      ],
    },
    {
      id: 2,
      title: 'Network Engineering Intern',
      company: 'PT PLN Icon Plus',
      date: '2023',
      description:
        'Supported network infrastructure operations and maintenance to ensure reliable connectivity and service performance.',
      highlights: [
        'Assisted in troubleshooting network connectivity issues',
        'Monitored network performance and service quality',
        'Supported wireless network deployment and maintenance',
        'Collaborated with engineering teams on operational tasks',
        'Documented technical findings and maintenance activities',
      ],
    },
    {
      id: 1,
      title: 'Network Engineer Intern',
      company: 'PT Karunia Armada Indonesia',
      date: '2022',
      description: 'Managed network infrastructure, Computer Networking, and Troubleshooting',
      highlights: [
        'Troubleshot computer hardware and software issues',
        'Performed computer maintenance and system optimization',
        'Assisted users with network and system troubleshooting',
      ],
    },
  ],
}
