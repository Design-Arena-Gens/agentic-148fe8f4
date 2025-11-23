import { Hero } from "@/components/Hero";
import { LeadFinder } from "@/components/LeadFinder";
import { PostComposer } from "@/components/PostComposer";
import Link from "next/link";

const navigatorTiles = [
  {
    title: "Persona Sprints",
    description:
      "AI-mapped LinkedIn personas with high-intent triggers, ready for your sales pod.",
    metric: "12 net-new plays",
    href: "#lead-engine"
  },
  {
    title: "Viral Diagram Lab",
    description:
      "Blueprint diagram sequences and swipeable carousels tailored to your buyers.",
    metric: "5 launch-ready stories",
    href: "#post-lab"
  },
  {
    title: "Engagement Scorecards",
    description:
      "Real-time scoring of comments, reposts, and DM replies tied to each asset.",
    metric: "Live dashboards",
    href: "#scorecards"
  }
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-12 lg:gap-24 lg:px-12 xl:py-16">
      <Hero />

      <section className="glass-panel p-6 md:p-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-200">
              Operating system
            </p>
            <h2 className="text-2xl font-semibold text-white lg:text-3xl">
              Map the motion, spin the creative, fuel the follow-up.
            </h2>
          </div>
          <Link
            href="#post-lab"
            className="rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:bg-white/10"
          >
            Explore the lab
          </Link>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {navigatorTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-primary-500/40 hover:shadow-brand"
            >
              <p className="text-xs uppercase tracking-widest text-primary-200">
                {tile.metric}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {tile.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{tile.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div id="lead-engine">
        <LeadFinder />
      </div>

      <div id="post-lab">
        <PostComposer />
      </div>

      <section
        id="scorecards"
        className="glass-panel grid gap-6 p-8 md:grid-cols-[1.2fr,1fr] lg:p-12"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-200">
            Pipeline telemetry
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Keep the flywheel accountable
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Every post, diagram, and outreach move feeds a live dashboard that
            spotlights where engagement converts into pipeline. Plug it into
            your RevOps workspace or share a viewer link with leadership.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
              🔁 Comment heatmaps show which CTAs sparked DM replies.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
              🚀 Diagram leaderboard surfaces assets driving follow-on meetings.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
              📊 Integrations with HubSpot, Clay, and Mutiny keep data flowing.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-primary-500/20 bg-slate-950/80 p-6">
          <h3 className="text-lg font-semibold text-white">
            Weekly momentum snapshot
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-slate-200">
            <Card metric="+214%" label="LinkedIn saves" caption="Carousels starring your Momentum Loop diagram." />
            <Card metric="62" label="Warm conversations" caption="DM threads tagged as pipeline-ready." />
            <Card metric="37%" label="Lead-to-demo" caption="Meetings booked from diagram-enabled sequences." />
          </div>
        </div>
      </section>

      <footer className="pb-10 text-center text-xs text-slate-500">
        Built for LinkedIn-first revenue teams · Ship story-driven assets · Win
        the scroll.
      </footer>
    </main>
  );
}

function Card({
  metric,
  label,
  caption
}: {
  metric: string;
  label: string;
  caption: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-2xl font-semibold text-primary-100">{metric}</p>
      <p className="text-xs uppercase tracking-widest text-slate-300">{label}</p>
      <p className="mt-2 text-xs text-slate-400">{caption}</p>
    </div>
  );
}
