import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  TerminalSquare,
  Cloud,
  Cpu,
  GitBranch,
  Gauge,
  Boxes,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const socials = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  instagram: "https://www.instagram.com/",
  email: "mailto:hello@example.com",
};

const focusAreas = [
  { title: "Cloud Infrastructure", meta: "AWS · Terraform · EKS", icon: Cloud },
  { title: "CI/CD & Automation", meta: "GitLab CI · Jenkins · Docker", icon: GitBranch },
  { title: "Kubernetes & GitOps", meta: "K8s · Helm · Argo CD", icon: Boxes },
  { title: "Observability & Reliability", meta: "Prometheus · Grafana · HPA", icon: Gauge },
  { title: "AI + DevOps", meta: "RAG · MCP · AI workflows", icon: Sparkles },
];

const timeline = [
  {
    period: "2026 →",
    company: "Clinisys",
    role: "Senior Software Engineer",
    text: "Leveraging my experience to modernize a legacy product and evolve the way it is built, delivered, and maintained.",
  },
 {
    period: "2024 → 2026",
    company: "OpenText",
    role: "Senior Software Engineer",
    text: "Automation, release engineering, CI/CD, Kubernetes workflows and engineering enablement.",
  },
  {
    period: "2021 → 2024",
    company: "OpenText",
    role: "Software Engineer",
    text: "Automation, release engineering, CI/CD, Kubernetes workflows and engineering enablement.",
  },
  {
    period: "2017 → 2021",
    company: "Micro Focus",
    role: "Associate Software Engineer",
    text: "A progression from enterprise engineering into automation and modern DevOps practices.",
  },
  {
    period: "2016 → 2017",
    company: "Novell",
    role: "VMWare Lab Support Engineer",
    text: "The start of the journey that eventually led into DevOps and platform engineering.",
  },
];

const notes = [
  ["KUBERNETES", "Understanding HPA beyond CPU utilization", "Architecture, scaling and the operational details that matter."],
  ["CI/CD", "From Jenkins pipelines to GitLab CI", "Lessons from moving delivery workflows into modern pipelines."],
  ["GITOPS", "Argo CD from first principles", "What the GitOps control loop actually does inside a cluster."],
];

export default function Home() {
  return (
    <main className="page-grid overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07090d]/75 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#top" className="font-mono text-sm font-bold tracking-[0.18em] text-white">SACHIN DAS</Link>
          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#notes" className="hover:text-white">Notes</a>
            <a href="#connect" className="hover:text-white">Contact</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white">LinkedIn <ExternalLink size={13} /></a>
          </nav>
          <details className="relative md:hidden">
            <summary className="flex size-9 list-none cursor-pointer items-center justify-center rounded-lg border border-white/10 text-slate-300">
              <Menu size={18} />
            </summary>
            <div className="glass absolute right-0 top-12 w-48 rounded-2xl p-2 shadow-2xl">
              {[["Work", "#work"], ["Experience", "#experience"], ["About", "#about"], ["Notes", "#notes"], ["Contact", "#connect"]].map(([label, href]) => (
                <a key={label} href={href} className="block rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{label}</a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section id="top" className="container grid min-h-[calc(100vh-64px)] items-center gap-16 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div>
          <div className="eyebrow fade-up">Senior DevOps Engineer</div>
          <h1 className="display mt-6 max-w-3xl text-5xl font-semibold sm:text-6xl lg:text-8xl fade-up delay-1">
            Building reliable <span className="shine">cloud-native systems.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 fade-up delay-2">
            I work across cloud infrastructure, CI/CD automation, Kubernetes, GitOps, observability, and practical AI-powered engineering workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 fade-up delay-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100">Explore my work <ArrowRight size={16} /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white hover:border-white/20">LinkedIn <ExternalLink size={15} /></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs text-slate-500 fade-up delay-3">
            {['AWS','Kubernetes','GitLab CI','Terraform','Helm','Argo CD','Prometheus','AI'].map((item) => <span className="tag rounded-full px-3 py-1.5" key={item}>{item}</span>)}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl float">
          <div className="glass relative overflow-hidden rounded-[28px] p-4">
            <div className="mb-4 flex items-center justify-between px-2 pt-1">
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500"><span className="pulse-dot size-2 rounded-full bg-cyan-300" /> platform-flow.svg</div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">live architecture</span>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#080c12] p-4">
              <svg viewBox="0 0 600 560" role="img" aria-label="Cloud-native platform architecture" className="h-auto w-full">
                <defs>
                  <linearGradient id="nodeGlow" x1="0" x2="1">
                    <stop offset="0%" stopColor="#101827" />
                    <stop offset="100%" stopColor="#132333" />
                  </linearGradient>
                </defs>
                <path d="M300 80 L300 155" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                <path d="M300 225 L180 305" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                <path d="M300 225 L420 305" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                <path d="M180 375 L180 455" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                <path d="M420 375 L420 455" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                <path d="M180 455 L300 500" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                <path d="M420 455 L300 500" stroke="#4b6575" strokeWidth="2" className="line-flow" />
                {[
                  [225, 24, 150, 56, 'CODE', 'Git'],
                  [225, 155, 150, 70, 'DELIVERY', 'GitLab CI'],
                  [85, 305, 190, 70, 'AWS / EKS', 'Kubernetes'],
                  [325, 305, 190, 70, 'GITOPS', 'Argo CD'],
                  [85, 455, 190, 70, 'OBSERVE', 'Prometheus · Grafana'],
                  [325, 455, 190, 70, 'RELIABILITY', 'HPA · alerts'],
                  [225, 500, 150, 50, 'AI LAYER', 'agents · workflows'],
                ].map(([x,y,w,h,title,sub], i) => (
                  <g key={i}>
                    <rect x={x as number} y={y as number} width={w as number} height={h as number} rx="14" fill="url(#nodeGlow)" stroke="#203343" />
                    <text x={(Number(x)+Number(w)/2)} y={(Number(y)+Number(h)/2-4)} textAnchor="middle" fill="#f7f8fb" fontSize="12" fontFamily="Arial" fontWeight="700">{title}</text>
                    <text x={(Number(x)+Number(w)/2)} y={(Number(y)+Number(h)/2+15)} textAnchor="middle" fill="#6f8491" fontSize="10" fontFamily="monospace">{sub}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.07] px-4 py-3 font-mono text-[11px] text-cyan-100 shadow-2xl backdrop-blur-xl">ships → observes → learns</div>
        </div>
      </section>

      <section className="container py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">01 / What I build</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Engineering across the delivery lifecycle.</h2>
          </div>
          <TerminalSquare className="hidden text-cyan-300/70 sm:block" size={34} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map(({ title, meta, icon: Icon }) => (
            <div key={title} className="glass lift rounded-2xl p-5">
              <div className="mb-10 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300"><Icon size={19} /></div>
              <h3 className="font-semibold leading-6">{title}</h3>
              <p className="mt-2 font-mono text-xs leading-5 text-slate-500">{meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="container py-24">
        <div className="eyebrow">02 / Featured work</div>
        <div className="mt-4 grid gap-8 lg:grid-cols-[.84fr_1.16fr] lg:items-stretch">
          <div className="glass rounded-[28px] p-7 sm:p-9">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-600">Flagship project</div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">Cloud-Native DevOps Platform <span className="text-cyan-300">on AWS</span></h2>
            <p className="mt-5 leading-7 text-slate-400">An end-to-end platform built from application development through infrastructure automation, EKS, Helm, observability, autoscaling, GitOps and AI-powered platform engineering.</p>
            <div className="mt-7 flex flex-wrap gap-2 font-mono text-xs text-slate-400">
              {['AWS','Terraform','EKS','Docker','Helm','GitLab CI','Argo CD','Prometheus','Grafana','HPA','AI'].map((x) => <span className="tag rounded-full px-3 py-1.5" key={x}>{x}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black">View case study <ArrowRight size={15}/></Link>
              <a href={socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white hover:border-white/20"><Github size={15}/> GitHub</a>
            </div>
          </div>

          <div className="glass rounded-[28px] p-7 sm:p-9">
            <div className="mb-7 flex items-center justify-between"><span className="font-mono text-xs text-slate-500">platform progression</span><span className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-2.5 py-1 font-mono text-[10px] text-cyan-200">phase-driven</span></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['01','Application','Node.js app'], ['02','Container','Docker + registry'], ['03','Cluster','Kubernetes + EKS'], ['04','Infrastructure','Terraform + AWS'], ['05','Delivery','GitLab CI + Helm'], ['06','Observe','Prometheus + Grafana'], ['07','Reliability','HPA + alerts'], ['08','GitOps','Argo CD'], ['09','AI','Platform Operator'],
              ].map(([n, t, s]) => (
                <div key={n} className="group rounded-2xl border border-white/7 bg-white/[0.025] p-4 transition hover:border-cyan-200/20 hover:bg-cyan-200/[0.03]">
                  <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-cyan-300">{n}</span><ArrowDownRight size={15} className="text-slate-700 group-hover:text-cyan-300" /></div>
                  <div className="mt-5 font-semibold">{t}</div>
                  <div className="mt-1 text-sm text-slate-500">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="container py-24">
        <div className="eyebrow">03 / Experience</div>
        <div className="mt-4 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">A career evolving from enterprise engineering into platform engineering.</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-400">Over a decade of experience across software engineering, DevOps, release engineering, cloud, Kubernetes and automation.</p>
          </div>
          <div className="space-y-3">
            {timeline.map((item, idx) => (
              <div key={item.company} className="glass lift grid gap-5 rounded-2xl p-5 sm:grid-cols-[120px_1fr]">
                <div className="font-mono text-xs text-cyan-300/75">{item.period}</div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-lg font-semibold">{item.company}</h3><span className="text-sm text-slate-500">{item.role}</span></div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container py-24">
        <div className="glass grid gap-10 rounded-[28px] p-7 sm:p-10 lg:grid-cols-[1fr_.7fr] lg:p-12">
          <div>
            <div className="eyebrow">04 / About</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">I like understanding the whole system.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">I&apos;m a DevOps engineer who enjoys taking complex engineering problems, understanding them end to end, and finding ways to make delivery simpler, more automated and more reliable.</p>
            <p className="mt-5 max-w-2xl leading-7 text-slate-500">Outside engineering, there&apos;s usually a long ride, a camera, a new place, or a coffee stop somewhere in the plan.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 self-end">
            {[['10+','years engineering'],['AWS','cloud platform'],['K8s','platform focus'],['AI','current frontier']].map(([n, s]) => <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4" key={s}><div className="text-2xl font-semibold">{n}</div><div className="mt-1 text-xs text-slate-500">{s}</div></div>)}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="eyebrow">05 / AI + DevOps</div>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Where DevOps meets AI.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-400">Practical experiments around AI pipelines, RAG, MCP, AI-assisted troubleshooting and platform engineering — with an emphasis on useful engineering outcomes rather than AI for its own sake.</p>
          </div>
          <div className="glass rounded-[28px] p-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-600">engineering lab</div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {['AI Pipelines','RAG','MCP','Error Simplifier','Agent workflows','Platform Operator'].map((x) => <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4 text-sm" key={x}><Sparkles size={15} className="mb-5 text-cyan-300"/><span className="text-slate-300">{x}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="notes" className="container py-24">
        <div className="flex items-end justify-between gap-8">
          <div><div className="eyebrow">06 / Engineering notes</div><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Things I&apos;m learning, building, breaking and fixing.</h2></div>
          <Link href="/notes" className="hidden items-center gap-2 text-sm text-slate-300 hover:text-white sm:inline-flex">All notes <ArrowRight size={15}/></Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {notes.map(([tag, title, desc]) => <Link href="/notes" key={title} className="glass lift rounded-2xl p-6"><div className="font-mono text-[10px] tracking-[0.18em] text-cyan-300">{tag}</div><h3 className="mt-4 text-lg font-semibold leading-7">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{desc}</p><div className="mt-8 inline-flex items-center gap-1 text-sm text-slate-400">Read note <ArrowRight size={14}/></div></Link>)}
        </div>
      </section>

      <section id="connect" className="container py-24">
        <div className="glass rounded-[28px] p-8 text-center sm:p-12">
          <div className="eyebrow">07 / Connect</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s build something useful.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Interesting engineering problem, cloud-native project or idea? Find me on the platforms below.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm hover:border-white/20"><Linkedin size={16}/> LinkedIn</a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm hover:border-white/20"><Github size={16}/> GitHub</a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm hover:border-white/20"><Instagram size={16}/> Instagram</a>
            <a href={socials.email} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black"><Mail size={16}/> Email</a>
          </div>
        </div>
      </section>

      <footer className="container flex flex-col justify-between gap-4 border-t border-white/5 py-8 text-xs text-slate-600 sm:flex-row sm:items-center">
        <div>© {new Date().getFullYear()} Sachin Das</div>
        <div className="font-mono">cloud-native · automation · ai</div>
      </footer>
    </main>
  );
}
