"use client";

import { useMemo, useState } from "react";
import type { PersonaInput } from "@/lib/lead-engine";
import {
  craftPostRecipe,
  designDiagram,
  type DiagramConnection,
  type DiagramNode
} from "@/lib/content-engine";
import { DiagramCanvas } from "./diagram-canvas";

const defaultPersona: PersonaInput = {
  industry: "Revenue Tech",
  persona: "Demand Gen Leaders",
  objective: "Ship a viral carousel per week",
  tone: "Conversational challenger",
  callToAction: "Book a visual jam session"
};

export function PostComposer() {
  const [input, setInput] = useState<PersonaInput>(defaultPersona);
  const recipe = useMemo(() => craftPostRecipe(input), [input]);
  const diagram = useMemo(() => designDiagram(recipe), [recipe]);

  const update = (field: keyof PersonaInput, value: string) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  const postBody = buildPost(recipe, input);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postBody);
    } catch {
      // ignore clipboard exceptions
    }
  };

  return (
    <section className="glass-panel p-8 lg:p-12">
      <header className="mb-10 flex flex-col gap-2">
        <span className="text-sm uppercase tracking-widest text-primary-300">
          Viral Post Lab
        </span>
        <h2 className="text-3xl font-semibold text-white xl:text-4xl">
          Spin up LinkedIn posts with diagram-native storylines
        </h2>
        <p className="max-w-2xl text-slate-300">
          Define the narrative vibe and we auto-generate hooks, proof, and a
          diagram blueprint you can ship straight into a carousel or video post.
        </p>
      </header>

      <div className="grid gap-10 xl:grid-cols-[320px,1fr] xl:gap-14">
        <form className="space-y-5">
          <Field
            label="Target Persona"
            value={input.persona}
            onChange={(value) => update("persona", value)}
          />
          <Field
            label="Industry Angle"
            value={input.industry}
            onChange={(value) => update("industry", value)}
          />
          <Field
            label="North Star Objective"
            value={input.objective}
            onChange={(value) => update("objective", value)}
          />
          <Field
            label="Tone & Voice"
            value={input.tone}
            onChange={(value) => update("tone", value)}
          />
          <Field
            label="Call To Action"
            value={input.callToAction}
            onChange={(value) => update("callToAction", value)}
          />
        </form>

        <div className="space-y-8">
          <article className="rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-500/10 via-slate-900/90 to-slate-900/60 p-6 shadow-brand">
            <header className="flex items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Campaign Narrative
                </h3>
                <p className="text-sm text-slate-300">
                  Drop into a post, carousel, or scripted narrative.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-full border border-primary-500 bg-primary-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-100 transition hover:bg-primary-500/40"
              >
                Copy post
              </button>
            </header>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-100">
              <p className="text-lg font-semibold text-primary-100">
                {recipe.hook}
              </p>
              {recipe.narrative.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="font-medium text-accent">{recipe.callToAction}</p>
              <p className="text-sm text-slate-400">
                {recipe.hashtags.join("  ")}
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Diagram Blueprint
                </h3>
                <p className="text-sm text-slate-400">
                  Translate this into Figma, FigJam, or Whimsical in minutes.
                </p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                {recipe.visual.title}
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr,1fr]">
              <DiagramCanvas
                nodes={diagram.nodes}
                connections={diagram.connections}
              />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-wide text-primary-200">
                  Why it works
                </p>
                <p className="mt-3 leading-6">{recipe.visual.description}</p>
                <ul className="mt-4 space-y-2">
                  <li className="rounded-xl bg-white/5 px-3 py-2">
                    Highlight {diagram.nodes.filter((node) => node.accent).length} accent
                    nodes with brand gradients.
                  </li>
                  <li className="rounded-xl bg-white/5 px-3 py-2">
                    Animate the path {diagram.connections.length} → loop in the
                    carousel to show compounding momentum.
                  </li>
                  <li className="rounded-xl bg-white/5 px-3 py-2">
                    Layer customer logos or metrics into the Momentum node to
                    build proof fast.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
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
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
      />
    </label>
  );
}

function buildPost(recipe: ReturnType<typeof craftPostRecipe>, input: PersonaInput) {
  return [
    recipe.hook,
    "",
    `🚨 What ${input.persona} teams are feeling: ${recipe.narrative[0]}`,
    `🔬 Our angle: ${recipe.narrative[1]}`,
    `🧠 Visual proof: ${recipe.visual.title} → ${recipe.narrative[2]}`,
    "",
    `CTA: ${recipe.callToAction}`,
    "",
    `${recipe.hashtags.join(" ")}`
  ].join("\n");
}
