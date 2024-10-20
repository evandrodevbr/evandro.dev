import Image from 'next/image'
import Link from 'next/link'
import { Mail, MoveRight, Pencil, Smartphone, Layout, Code, Database, Server, Cloud, Cpu, Terminal, Palette, Zap } from 'lucide-react'

const services = [
  {
    icon: <Pencil className="h-6 w-6" />,
    title: 'UX & UI',
    description: 'Designing intuitive and efficient interfaces for web and mobile applications, with a focus on user experience and visual appeal. Leveraging Photoshop skills to create engaging designs that resonate with the target audience.'
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Web & Mobile App',
    description: 'Transforming ideas into exceptional web and mobile experiences using full-stack development skills. Building responsive, scalable applications with a focus on performance optimization and seamless user interactions.'
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Design & Creative',
    description: 'Crafting visually stunning designs that connect with your audience, utilizing graphic design expertise and creative problem-solving. Developing brand identities and marketing materials that effectively communicate your message.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Development',
    description: 'Bringing your vision to life with clean and efficient code. Expertise in full-stack development, API design, database optimization, and integration of cutting-edge technologies like IoT and renewable energy systems.'
  },
]

const companies = [
  { name: 'Apolo Energia', logo: '/apolo_energia.png' },
  { name: 'Terabyte', logo: '/terabyte.png' },
  { name: 'Pichau', logo: '/pichau.png' },
  { name: 'iWill', logo: '/iwill.png' },
]

const techCategories = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    technologies: [
      { name: "React", logo: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
      { name: "Bootstrap", logo: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" },
      { name: "CSS3", logo: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
      { name: "HTML5", logo: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
      { name: "JavaScript", logo: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
      { name: "TypeScript", logo: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" },
      { name: "Sass", logo: "https://profilinator.rishav.dev/skills-assets/sass-original.svg" },
      { name: "Chart.js", logo: "https://profilinator.rishav.dev/skills-assets/logo-title.svg" },
      { name: "Next.js", logo: "https://profilinator.rishav.dev/skills-assets/nextjs.png" }
    ]
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      { name: "Node.js", logo: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
      { name: "Express.js", logo: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
      { name: "PHP", logo: "https://profilinator.rishav.dev/skills-assets/php-original.svg" },
      { name: "Python", logo: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
      { name: "Java", logo: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" },
      { name: "Kotlin", logo: "https://profilinator.rishav.dev/skills-assets/kotlinlang-icon.svg" },
      { name: "Flask", logo: "https://profilinator.rishav.dev/skills-assets/flask.png" },
      { name: "Prisma", logo: "https://profilinator.rishav.dev/skills-assets/prisma.png" }
    ]
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      { name: "MySQL", logo: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
      { name: "MongoDB", logo: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
      { name: "Firebase", logo: "https://profilinator.rishav.dev/skills-assets/firebase.png" }
    ]
  },
  {
    name: "Infrastructure & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    technologies: [
      { name: "AWS", logo: "https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", logo: "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" },
      { name: "Nginx", logo: "https://profilinator.rishav.dev/skills-assets/nginx-original.svg" },
      { name: "Linux", logo: "https://profilinator.rishav.dev/skills-assets/linux-original.svg" },
      { name: "Git", logo: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
      { name: "XAMPP", logo: "https://profilinator.rishav.dev/skills-assets/xampp.png" }
    ]
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    technologies: [
      { name: "Android", logo: "https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg" },
      { name: "Kotlin", logo: "https://profilinator.rishav.dev/skills-assets/kotlinlang-icon.svg" }
    ]
  },
  {
    name: "Programming Languages",
    icon: <Cpu className="h-6 w-6" />,
    technologies: [
      { name: "C++", logo: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" },
      { name: "C", logo: "https://profilinator.rishav.dev/skills-assets/c-original.svg" },
      { name: "Python", logo: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
      { name: "Java", logo: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" }
    ]
  },
  {
    name: "Scripting & Shell",
    icon: <Terminal className="h-6 w-6" />,
    technologies: [
      { name: "Bash", logo: "https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" },
      { name: "PowerShell", logo: "https://profilinator.rishav.dev/skills-assets/powershell.png" }
    ]
  },
  {
    name: "CMS & E-commerce",
    icon: <Palette className="h-6 w-6" />,
    technologies: [
      { name: "WordPress", logo: "https://profilinator.rishav.dev/skills-assets/wordpress.png" },
      { name: "WooCommerce", logo: "https://profilinator.rishav.dev/skills-assets/woocommerce.png" }
    ]
  },
  {
    name: "Design & Prototyping",
    icon: <Palette className="h-6 w-6" />,
    technologies: [
      { name: "Figma", logo: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg" }
    ]
  },
  {
    name: "IoT & Hardware",
    icon: <Zap className="h-6 w-6" />,
    technologies: [
      { name: "Raspberry Pi", logo: "https://profilinator.rishav.dev/skills-assets/raspberrypi.png" },
      { name: "Arduino", logo: "https://profilinator.rishav.dev/skills-assets/arduino.png" }
    ]
  },
  {
    name: "Machine Learning",
    icon: <Cpu className="h-6 w-6" />,
    technologies: [
      { name: "PyTorch", logo: "https://profilinator.rishav.dev/skills-assets/pytorch-icon.svg" }
    ]
  }
]

function InfiniteLogoScroll() {
  return (
    <div className="logo-scroll-container">
      <div className="logo-scroll">
        {[...companies, ...companies].map((company, index) => (
          <div key={`${company.name}-${index}`} className="logo-item">
            <Image
              src={company.logo}
              alt={company.name}
              width={100}
              height={50}
              className="max-h-16 w-auto rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="mailto:evandrofonsecajunior@gmail.com" className="text-sm hover:text-blue-400 transition-colors">
          Send-me an email
        </Link>
        <nav className="space-x-4">
          <Link href="https://www.linkedin.com/in/evandro-fonseca-junior-0969aa1b0/" target='_blank' className="text-sm hover:text-blue-400 transition-colors">LinkedIn</Link>
          <Link href="https://www.instagram.com/evandro.dev.br/" target='_blank' className="text-sm hover:text-blue-400 transition-colors">Instagram</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <div className="mb-6">
            <Image
              src="/edev.jpeg"
              alt="Evandro Fonseca Junior"
              width={230}
              height={230}
              className="rounded-md mx-auto"
            />
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className='text-blue-400'>Evandro </span>👋
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Building <span className="text-blue-300">digital</span><br />
            products, <span className="text-blue-300">brands</span>, and<br />
            experience.
          </h2>
          <Link href={"https://github.com/evandrodevbr?tab=repositories"} target='_blank'>
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
              My Projects
              <MoveRight className="inline-block ml-2 h-4 w-4" />
            </button>
          </Link>
        </section>

        <section className="py-20">
          <div className="w-full max-w-5xl mx-auto">
            <InfiniteLogoScroll />
          </div>
        </section>

        <section className="py-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Collaborate with <span className="text-blue-400">brands and agencies</span> to<br />
            create impactful results.
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-zinc-900 p-6 rounded-lg">
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                <h4 className="text-white text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Technologies I've <span className="text-blue-400">Worked With</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category) => (
              <div key={category.name} className="bg-zinc-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {category.icon}
                  </div>
                  <h4 className="text-white text-xl font-bold">{category.name}</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center">
                      <div className="w-12 h-12 relative">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <span className="text-xs text-gray-300 mt-2 text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Tell me about your<br />
            next project
          </h3>
          <Link href={"https://www.linkedin.com/in/evandro-fonseca-junior-0969aa1b0/"} target='_blank'>
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
              Get in Touch
              <Mail className="inline-block ml-2 h-4 w-4" />
            </button>
          </Link>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Evandro Fonseca Junior. All rights reserved.
        Site design inspired by Kawsar designer.
        Permission is granted to use and adapt this site's design elements.
        Any third-party content may be subject to its own license terms.
      </footer>
    </div>
  )
}