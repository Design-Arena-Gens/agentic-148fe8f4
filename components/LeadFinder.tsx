"use client";

import { useMemo, useState } from "react";
import {
  buildOutreachSequence,
  generateLeadList,
  getObjectionHandling,
  type LeadInput,
  type PersonaInput
} from "@/lib/lead-engine";

type LeadFinderState = LeadInput;

const defaultState: LeadFinderState = {
  industry: "SaaS",
  persona: "Revenue Operations",
  objective: "Activate outbound pods with LinkedIn",
  tone: "Direct + optimistic",
  callToAction: "Book a 20-minute sprint map call",
  geography: "North America",
  companySize: "201-500"
};

const objectionKeys = ["too busy", "budget locked", "in-house team"] as const;

export function LeadFinder() {
  const [form, setForm] = useState<LeadFinderState>(defaultState);
  const [selectedObjection, setSelectedObjection] =
    useState<(typeof objectionKeys)[number]>("too busy");
  const leads = useMemo(() => generateLeadList(form), [form]);
  const sequence = useMemo(
    () => buildOutreachSequence(form as PersonaInput, leads),
    [form, leads]
  );
  const objection = getObjectionHandling(selectedObjection);

  const update = (
    field: keyof LeadFinderState,
    value: LeadFinderState[typeof field]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="glass-panel p-8 lg:p-12">
      <header className="mb-8 flex flex-col gap-2">
        <span className="text-sm uppercase tracking-widest text-primary-300">
          Lead Gen Autopilot
        </span>
        <h2 className="text-3xl font-semibold text-white xl:text-4xl">
          Identify LinkedIn micro-personas primed to buy
        </h2>
        <p className="max-w-2xl text-slate-300">
          Tune the persona playbook and watch the agent surface warm outreach
          targets, contextual triggers, and a step-by-step engagement sequence.
        </p>
      </header>

      <div className="grid gap-10 xl:grid-cols-[340px,1fr] xl:gap-16">
        <form className="space-y-5">
          <Field
            label="Target Persona"
            value={form.persona}
            onChange={(value) => update("persona", value)}
            placeholder="e.g. Marketing Ops, Head of Demand Gen"
          />
          <Field
            label="Industry Focus"
            value={form.industry}
            onChange={(value) => update("industry", value)}
            placeholder="e.g. SaaS, Fintech, Manufacturing"
          />
          <Field
            label="Primary Objective"
            value={form.objective}
            onChange={(value) => update("objective", value)}
            placeholder="What outcome are you promising?"
          />
          <Field
            label="Tone of Voice"
            value={form.tone}
            onChange={(value) => update("tone", value)}
            placeholder="e.g. Challenger, Empathetic, Bold"
          />
          <Field
            label="Call To Action"
            value={form.callToAction}
            onChange={(value) => update("callToAction", value)}
            placeholder="What do you want them to do?"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Geography"
              value={form.geography ?? ""}
              onChange={(value) => update("geography", value)}
              placeholder="Optional"
            />
            <Field
              label="Company Size (employees)"
              value={form.companySize ?? ""}
              onChange={(value) => update("companySize", value)}
              placeholder="Optional"
            />
          </div>
        </form>

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Priority Connections ({leads.length})
            </h3>
            <p className="mb-5 text-sm text-slate-300">
              Tap into their recent signals to craft a relevant hook.
            </p>

            <div className="grid gap-5 lg:grid-cols-2">
              {leads.map((lead) => (
                <article
                  key={lead.linkedinUrl}
                  className="rounded-2xl border border-primary-500/20 bg-slate-900/60 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {lead.name}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {lead.role} · {lead.company}
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        {lead.headline}
                      </p>
                    </div>
                    <a
                      href={lead.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-primary-400/50 px-3 py-1 text-xs tracking-wide text-primary-200"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="mt-4 space-y-3">
                    <Block
                      title="Talking points"
                      items={lead.talkingPoints}
                    />
                    <Block
                      title="Trigger signals"
                      items={lead.triggerSignals}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary-500/20 via-slate-900/80 to-slate-900/40 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  7-Day Engagement Sprint
                </h3>
                <p className="text-sm text-slate-300">
                  Layered social touches + DM assets pre-baked for your team.
                </p>
              </div>
              <span className="rounded-full bg-primary-500/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-100">
                Auto-generated
              </span>
            </div>

            <ol className="mt-5 space-y-4">
              {sequence.map((step) => (
                <li
                  key={step.day}
                  className="rounded-2xl border border-primary-500/20 bg-slate-900/70 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold uppercase text-primary-200">
                      {step.day}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {step.asset}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-100">{step.message}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <header className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Objection Counter Moves
                </h3>
                <p className="text-sm text-slate-300">
                  Instant snippets your team can drop into voice notes, DMs, or
                  comments.
                </p>
              </div>
              <div className="flex gap-2">
                {objectionKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedObjection(key)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition ${
                      selectedObjection === key
                        ? "bg-primary-500 text-white"
                        : "bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                    type="button"
                  >
                    {key}
                  </button>
                ))}
              </div>
            </header>
            <div className="mt-5 grid gap-4 text-sm text-slate-100 md:grid-cols-3">
              <FieldCard title="Reframe" body={objection.opening} />
              <FieldCard title="Proof" body={objection.proofPoint} />
              <FieldCard title="CTA" body={objection.cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  placeholder,
  onChange
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
      />
    </label>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-200">
        {title}
      </p>
      <ul className="mt-2 space-y-2 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="rounded-xl bg-white/5 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FieldCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-primary-300">
        {title}
      </p>
      <p className="mt-2 text-sm leading-5 text-slate-200">{body}</p>
    </article>
  );
}
