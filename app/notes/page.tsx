import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  { tag: "KUBERNETES", title: "Understanding HPA beyond CPU utilization", text: "A practical look at autoscaling, signals and the operational questions that matter.", date: "Coming soon" },
  { tag: "CI/CD", title: "From Jenkins pipelines to GitLab CI", text: "Patterns for moving complex delivery workflows while keeping releases understandable.", date: "Coming soon" },
  { tag: "GITOPS", title: "Argo CD from first principles", text: "The controller, the desired state and what GitOps looks like from inside a cluster.", date: "Coming soon" },
  { tag: "AWS", title: "Building an EKS platform with Terraform", text: "The infrastructure decisions behind a repeatable AWS Kubernetes foundation.", date: "Coming soon" },
  { tag: "OBSERVABILITY", title: "Making Kubernetes easier to see", text: "Prometheus, Grafana and useful signals for operating workloads day to day.", date: "Coming soon" },
  { tag: "AI + DEVOPS", title: "Building an AI-powered error simplifier", text: "Exploring how AI can translate noisy engineering failures into actionable context.", date: "Coming soon" },
];

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <div className="container py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white"><ArrowLeft size={15}/> Back home</Link>
        <div className="mt-20 max-w-3xl">
          <div className="eyebrow">Engineering notes</div>
          <h1 className="display mt-5 text-5xl font-semibold sm:text-7xl">Learning in public, one system at a time.</h1>
          <p className="mt-7 text-lg leading-8 text-slate-400">Technical notes from cloud, Kubernetes, CI/CD, GitOps, observability and AI experiments. This section is intentionally ready for your future writing rather than filled with placeholder articles.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <article key={post.title} className="glass lift rounded-[24px] p-6"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.18em] text-cyan-300">{post.tag}</span><BookOpen size={16} className="text-slate-700"/></div><h2 className="mt-6 text-xl font-semibold leading-7">{post.title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{post.text}</p><div className="mt-8 flex items-center justify-between"><span className="font-mono text-[10px] text-slate-700">{post.date}</span><span className="inline-flex items-center gap-1 text-sm text-slate-400">Preview <ArrowRight size={13}/></span></div></article>)}
        </div>

        <div className="py-20"><Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={14}/> Back to portfolio</Link></div>
      </div>
    </main>
  );
}
