"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const gradients = [
  "from-primary-500/40 via-slate-900/90 to-slate-950",
  "from-primary-400/50 via-slate-900/90 to-slate-950",
  "from-slate-900 via-primary-600/20 to-slate-950"
];

export function Hero() {
  const [activeGradient, setActiveGradient] = useState(gradients[0]);

  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/70 p-8 lg:p-12">
      <motion.div
        className={`absolute inset-0 -z-10 animate-pulse bg-gradient-to-br ${activeGradient} opacity-60 blur-3xl`}
      />
      <header className="max-w-3xl space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-100">
          LinkedIn Creator Agent
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          Generate leads, narrative diagrams, and viral posts in one creator HQ.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Activate a full-funnel LinkedIn motion in minutes. We mine buying
          signals, script the outreach, and draft diagram-worthy posts that
          convert lurkers into pipeline.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="#lead-engine"
          className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-brand transition hover:bg-primary-400"
          onMouseEnter={() => setActiveGradient(gradients[1])}
        >
          Generate Pipeline
        </Link>
        <Link
          href="#post-lab"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:bg-white/10"
          onMouseEnter={() => setActiveGradient(gradients[2])}
        >
          Craft Viral Posts
        </Link>
      </div>

      <dl className="mt-12 grid gap-6 text-sm text-slate-200 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <dt className="text-xs uppercase tracking-widest text-primary-300">
              {stat.label}
            </dt>
            <dd className="mt-3 text-2xl font-semibold text-white">{stat.value}</dd>
            <p className="mt-2 text-xs text-slate-400">{stat.caption}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}

const stats = [
  {
    label: "Deals influenced",
    value: "$7.2M",
    caption: "Attributed pipeline sparked by our creator agent assets."
  },
  {
    label: "Campaign velocity",
    value: "8x faster",
    caption: "From persona research to shippable diagrams in under an hour."
  },
  {
    label: "Engagement lift",
    value: "310%",
    caption: "Average uplift on LinkedIn thought leadership within two weeks."
  }
];
