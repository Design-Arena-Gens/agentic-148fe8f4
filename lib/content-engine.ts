import type { PersonaInput } from "./lead-engine";

const hookOpeners = [
  "The LinkedIn post that pulled 4 enterprise demos in 48 hours:",
  "We turned a quiet founder story into a viral carousel. Here's the playbook:",
  "Your buyers are scrolling. Give them the diagram that stops the scroll:",
  "This storyline made CFOs binge our entire carousel series:"
];

const narrativeAngles = [
  "Break down the hidden friction your persona is feeling right now.",
  "Add a diagram that makes the transformation obvious at a glance.",
  "Stack a punchy proof-point, then invite them into a next step they can act on today.",
  "Tilt the story around a before/after motion that maps back to their KPIs."
];

const visualMotifs = [
  {
    title: "Signal Density Radar",
    description:
      "Polar radar that maps attention, trust, and urgency. Use to show how you rebalance a funnel."
  },
  {
    title: "Momentum Loop",
    description:
      "3-stage flywheel diagram with animated arrows highlighting compounding growth across pods."
  },
  {
    title: "Persona Activation Grid",
    description:
      "2x2 matrix contrasting low/high desire vs low/high intent. Drop logos or quotes into each quadrant."
  },
  {
    title: "Tempo Timeline",
    description:
      "Horizontal timeline with spotlight nodes for key client wins and social proof beats."
  }
];

const closingInvites = [
  "Drop 'VISUAL' in the comments and I’ll send the Figma-ready canvas.",
  "DM me 'PLAYBOOK' and I’ll share the exact diagram we used.",
  "Want the Carousel outline? I’ve got a Notion template—just ask.",
  "Comment 'YES' and I’ll share the raw files to remix with your team."
];

export type PostRecipe = {
  hook: string;
  narrative: string[];
  callToAction: string;
  visual: (typeof visualMotifs)[number];
  hashtags: string[];
};

export function craftPostRecipe(input: PersonaInput): PostRecipe {
  const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  const personaTag = slugifyTag(input.persona);
  const industryTag = slugifyTag(input.industry);
  const objectiveTag = slugifyTag(input.objective);

  return {
    hook: random(hookOpeners).replace(
      "LinkedIn",
      input.industry.toLowerCase().includes("linkedin") ? "LinkedIn" : "LinkedIn"
    ),
    narrative: [
      `Pain: ${input.persona} leaders keep flagging ${input.objective.toLowerCase()} as their #1 blocker.`,
      random(narrativeAngles),
      `Overlay our diagram motif to dramatize the journey—${input.tone} tone, ${input.callToAction} CTA.`
    ],
    callToAction: random(closingInvites),
    visual: random(visualMotifs),
    hashtags: [
      `#${personaTag}`,
      `#${industryTag}`,
      `#${objectiveTag}`,
      "#LinkedInCreator",
      "#VisualStorytelling"
    ]
  };
}

function slugifyTag(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .replace(/^\d+/, "")
    .replace(/^$/, "growth");
}

export type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  accent?: boolean;
};

export type DiagramConnection = {
  from: string;
  to: string;
};

export function designDiagram(
  recipe: PostRecipe
): { nodes: DiagramNode[]; connections: DiagramConnection[] } {
  const nodes: DiagramNode[] = [
    {
      id: "persona",
      label: recipe.hashtags[0].replace("#", ""),
      x: 80,
      y: 120,
      accent: true
    },
    {
      id: "problem",
      label: "Pain Signal",
      x: 240,
      y: 40
    },
    {
      id: "visual",
      label: recipe.visual.title,
      x: 240,
      y: 200,
      accent: true
    },
    {
      id: "moment",
      label: "Momentum Moment",
      x: 400,
      y: 120
    },
    {
      id: "cta",
      label: recipe.callToAction.replace(/DM me|Drop|Comment/gi, "").trim(),
      x: 560,
      y: 120,
      accent: true
    }
  ];

  const connections: DiagramConnection[] = [
    { from: "persona", to: "problem" },
    { from: "problem", to: "visual" },
    { from: "visual", to: "moment" },
    { from: "moment", to: "cta" },
    { from: "persona", to: "visual" }
  ];

  return { nodes, connections };
}
