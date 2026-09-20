import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Github, Layers3, Server, Workflow, Activity, Bot } from "lucide-react";

const stages = [
  { n: "01", title: "Application", icon: Server, text: "A Node.js application becomes the workload that everything else is designed to package, deliver and operate." },
  { n: "02", title: "Containerization", icon: Layers3, text: "Docker packages the application and prepares a reproducible artifact for cluster deployment." },
  { n: "03", title: "Infrastructure", icon: Server, text: "Terraform provisions AWS resources and an Amazon EKS foundation with the required access model." },
  { n: "04", title: "Delivery", icon: Workflow, text: "CI/CD drives build, container and Helm workflows while keeping the release path repeatable." },
  { n: "05", title: "Observe", icon: Activity, text: "Prometheus, Grafana, application metrics and cluster metrics make the platform visible." },
  { n: "06", title: "Reliability", icon: Activity, text: "Horizontal Pod Autoscaling adds an operational feedback loop for workload demand." },
  { n: "07", title: "GitOps", icon: Workflow, text: "Argo CD shifts deployment state toward Git as the source of truth and the cluster reconciler." },
  { n: "08", title: "AI", icon: Bot, text: "The current frontier: practical AI agents and operator workflows to improve platform engineering." },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="container py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white"><ArrowLeft size={15}/> Back home</Link>
        <div className="mt-20 max-w-4xl">
          <div className="eyebrow">Featured case study</div>
          <h1 className="display mt-5 text-5xl font-semibold sm:text-7xl">Cloud-Native DevOps Platform <span className="text-cyan-300">on AWS</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">A learning-driven platform built phase by phase to connect application delivery, AWS infrastructure, Kubernetes, Helm, observability, reliability, GitOps and the next layer of AI-assisted platform engineering.</p>
        </div>

        <div className="glass mt-14 rounded-[28px] p-6 sm:p-9">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600">architecture path</div>
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {stages.map(({ n, title, icon: Icon }) => <div key={n} className="rounded-2xl border border-white/8 bg-white/[0.025] p-4"><div className="flex items-center justify-between"><Icon size={17} className="text-cyan-300"/><span className="font-mono text-[10px] text-slate-700">{n}</span></div><div className="mt-7 font-semibold">{title}</div></div>)}
          </div>
        </div>

        <section className="mt-20 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow">The build</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From a local container to a GitOps-managed platform.</h2>
            <p className="mt-5 leading-7 text-slate-400">The project is deliberately phase-driven: each layer solves a concrete platform concern while creating a foundation for the next one.</p>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm hover:border-white/20"><Github size={15}/> Open repository <ArrowRight size={14}/></a>
          </div>
          <div className="space-y-3">
            {stages.map(({ n, title, text }) => <div key={n} className="glass rounded-2xl p-5"><div className="grid gap-4 sm:grid-cols-[46px_1fr]"><div className="font-mono text-xs text-cyan-300">{n}</div><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div></div></div>)}
          </div>
        </section>

        <section className="mt-20 border-t border-white/5 pt-16">
          <div className="eyebrow">Operational outcomes</div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {['Reproducible infrastructure', 'Observable workloads', 'Git-controlled deployments'].map((x) => <div className="glass rounded-2xl p-5" key={x}><CheckCircle2 size={18} className="text-cyan-300"/><div className="mt-6 font-semibold">{x}</div><p className="mt-2 text-sm leading-6 text-slate-500">Designed as a reusable pattern rather than a one-off deployment.</p></div>)}
          </div>
        </section>

        <div className="py-20"><Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={14}/> Back to Sachin Das</Link></div>
      </div>
    </main>
  );
}
