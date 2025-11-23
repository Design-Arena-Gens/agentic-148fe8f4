export type PersonaInput = {
  industry: string;
  persona: string;
  objective: string;
  tone: string;
  callToAction: string;
};

export type LeadInput = PersonaInput & {
  geography?: string;
  companySize?: string;
};

export type Lead = {
  name: string;
  role: string;
  company: string;
  companySize: string;
  geography: string;
  industry: string;
  linkedinUrl: string;
  headline: string;
  talkingPoints: string[];
  triggerSignals: string[];
};

const leadDatabase: Lead[] = [
  {
    name: "Priya Kapoor",
    role: "Head of Revenue Operations",
    company: "ScaleRoute",
    companySize: "201-500",
    geography: "San Francisco, CA",
    industry: "SaaS",
    linkedinUrl: "https://linkedin.com/in/priya-kapoor",
    headline: "Building predictable revenue engines for PLG SaaS teams",
    talkingPoints: [
      "Championed roll-out of RevOps automation stack",
      "Experimenting with SDR-to-AE handoff playbooks",
      "Actively hiring GTM ops specialists"
    ],
    triggerSignals: [
      "Spoke on RevOps automation at SaaStr Europa",
      "Shared post about data-driven inbound routing challenges last week"
    ]
  },
  {
    name: "Jakob Müller",
    role: "VP Demand Generation",
    company: "NordPulse",
    companySize: "501-1000",
    geography: "Berlin, Germany",
    industry: "Manufacturing Tech",
    linkedinUrl: "https://linkedin.com/in/jakob-muller",
    headline: "Scaling ABM pods across EMEA | Martech nerd",
    talkingPoints: [
      "Piloting product-qualified lead motions",
      "Recently migrated to HubSpot with custom intent scoring",
      "Collaborates with partner marketing on co-branded webinars"
    ],
    triggerSignals: [
      "Posted about intent scoring gaps in EMEA manufacturing verticals",
      "Commented on a RevOps influencer debating attribution models"
    ]
  },
  {
    name: "Amanda Ross",
    role: "Chief Marketing Officer",
    company: "CloudHarbor",
    companySize: "51-200",
    geography: "Austin, TX",
    industry: "Cloud Security",
    linkedinUrl: "https://linkedin.com/in/amanda-ross",
    headline: "Driving trust for high-stakes cybersecurity buyers",
    talkingPoints: [
      "Building thought leadership pipeline for fractional CISOs",
      "Sourcing partners for co-marketed executive roundtables",
      "Looking for narrative design support"
    ],
    triggerSignals: [
      "Shared post about storytelling frameworks for technical buyers",
      "Hosting a live AMA on revising LinkedIn paid strategy"
    ]
  },
  {
    name: "Kenji Watanabe",
    role: "Director of Product Marketing",
    company: "InsightGrid",
    companySize: "101-250",
    geography: "Tokyo, Japan",
    industry: "AI Analytics",
    linkedinUrl: "https://linkedin.com/in/kenji-watanabe",
    headline: "Translating AI innovation into revenue outcomes",
    talkingPoints: [
      "Running go-to-market sprints around customer data lakes",
      "Seeking case study collaborations in APAC",
      "Interested in bite-sized diagrams for executive decks"
    ],
    triggerSignals: [
      "Commented on a visual storytelling post around AI decision hubs",
      "Shared product update featuring predictive pipeline diagrams"
    ]
  },
  {
    name: "Lucía Fernández",
    role: "Growth Marketing Lead",
    company: "StriveLogistics",
    companySize: "201-500",
    geography: "Mexico City, Mexico",
    industry: "Logistics Tech",
    linkedinUrl: "https://linkedin.com/in/lucia-fernandez",
    headline: "Building cross-border demand engines for logistics innovators",
    talkingPoints: [
      "Launching multilingual content syndication program",
      "Hiring freelance designers for narrative assets",
      "Aligning sales and growth teams on LinkedIn social selling"
    ],
    triggerSignals: [
      "Asked followers for examples of high-performing LinkedIn carousels",
      "Reacted to post about LATAM logistics tech funding trends"
    ]
  },
  {
    name: "Marcus Bell",
    role: "Head of Partnerships",
    company: "VentureWave",
    companySize: "51-200",
    geography: "London, United Kingdom",
    industry: "Venture Capital",
    linkedinUrl: "https://linkedin.com/in/marcus-bell",
    headline: "Operator-turned-VC connecting corporate innovation arcs",
    talkingPoints: [
      "Co-creating founder spotlight series with portfolio companies",
      "Searching for GTM enablement frameworks for B2B marketplaces",
      "Advocating for co-sell plays between partners"
    ],
    triggerSignals: [
      "Hosting a LinkedIn Live on partnership flywheels next month",
      "Shared insights on storytelling for venture ecosystem builders"
    ]
  },
  {
    name: "Nia Johnson",
    role: "Director of Customer Advocacy",
    company: "SentientOps",
    companySize: "1001-5000",
    geography: "Atlanta, GA",
    industry: "AI Ops",
    linkedinUrl: "https://linkedin.com/in/nia-johnson",
    headline: "Activating customer voices for AI-first operations teams",
    talkingPoints: [
      "Developing podcast series focused on automation leaders",
      "Looking for visual frameworks that explain ROI fast",
      "Refining customer win-backs via LinkedIn prospector pods"
    ],
    triggerSignals: [
      "Posted about integrating advocacy content into social selling",
      "Commented on thread about diagram-first storytelling"
    ]
  },
  {
    name: "Francesco Conti",
    role: "Head of Sales",
    company: "DeepMotive",
    companySize: "501-1000",
    geography: "Milan, Italy",
    industry: "Autonomous Mobility",
    linkedinUrl: "https://linkedin.com/in/francesco-conti",
    headline: "Closing enterprise mobility deals with visual value stories",
    talkingPoints: [
      "Implementing narrative-led demo environments",
      "Searching for co-marketing partners in EU mobility space",
      "Aligning outbound teams around micro-persona playbooks"
    ],
    triggerSignals: [
      "Shared breakdown of his top-performing carousel on fleet analytics",
      "Liked a post about using diagrams to compress technical messaging"
    ]
  }
];

const objectionHandlingPlaybook: Record<
  string,
  { opening: string; proofPoint: string; cta: string }
> = {
  "too busy": {
    opening:
      "Scheduling time tends to be tough for revenue leaders who are already running high-velocity plays.",
    proofPoint:
      "We bake micro-assets that slot into the exact flows your team already uses, so it actually saves them time.",
    cta: "Can I send over a 2-slide overview that your team can remix immediately?"
  },
  "budget locked": {
    opening:
      "Budgets are tight everywhere, which is why teams are consolidating vendors and prioritizing revenue-critical outputs.",
    proofPoint:
      "Our hybrid model replaces both copy and design retainer spend while adding LinkedIn net-new pipeline coverage.",
    cta: "Would testing a single campaign sprint with mutual KPIs be workable for you?"
  },
  "in-house team": {
    opening:
      "Having internal talent is a huge advantage—it means we can ship assets that plug into their roadmap on day one.",
    proofPoint:
      "Teams like CloudHarbor and NordPulse keep their core strategy in-house and lean on us for fast-turn narrative visuals.",
    cta: "Worth co-building a diagram concept so your team can judge fit against existing workflows?"
  }
};

export function generateLeadList(input: LeadInput): Lead[] {
  const personaMatch = input.persona.toLowerCase();
  const industryMatch = input.industry.toLowerCase();
  const geographyMatch = input.geography?.toLowerCase() ?? "";

  return leadDatabase
    .filter((lead) => {
      const personaScore = lead.role.toLowerCase().includes(personaMatch)
        ? 2
        : lead.headline.toLowerCase().includes(personaMatch)
        ? 1
        : 0;
      const industryScore = lead.industry.toLowerCase().includes(industryMatch)
        ? 2
        : lead.headline.toLowerCase().includes(industryMatch)
        ? 1
        : 0;

      const geographyScore = geographyMatch
        ? lead.geography.toLowerCase().includes(geographyMatch)
          ? 1
          : 0
        : 1;

      const companySizeScore = input.companySize
        ? lead.companySize === input.companySize
          ? 1
          : 0
        : 1;

      const score =
        personaScore * 2 +
        industryScore * 1.5 +
        geographyScore +
        companySizeScore;
      return score >= 3.5;
    })
    .map((lead) => ({
      ...lead,
      talkingPoints: personalizeTalkingPoints(lead, input.objective)
    }));
}

function personalizeTalkingPoints(lead: Lead, objective: string) {
  const objectiveTokens = objective.toLowerCase().split(/\s+/);
  const base = lead.talkingPoints.slice(0, 2);
  const tailored = objectiveTokens
    .map((token) => {
      if (token.includes("webinar")) {
        return "Suggested co-create a LinkedIn Live masterclass using our carousel templates.";
      }
      if (token.includes("funnel")) {
        return "Position alignment call around diagramming their hand-off to reduce funnel friction.";
      }
      if (token.includes("abm") || token.includes("account")) {
        return "Offer a multi-threaded micro-playbook for account pods with diagram snippets.";
      }
      if (token.includes("demand")) {
        return "Highlight performance boosters proven with demand gen, emphasizing viral visuals.";
      }
      return undefined;
    })
    .filter(Boolean) as string[];

  return [...new Set([...base, ...tailored])];
}

export function buildOutreachSequence(
  input: PersonaInput,
  leads: Lead[]
): { day: string; asset: string; message: string }[] {
  return [
    {
      day: "Day 0",
      asset: "Connection request",
      message: `Hey {{firstName}}, loved your take on ${input.objective}. We built a visual that might amplify it for ${input.persona} teams. Up to connect?`
    },
    {
      day: "Day 2",
      asset: "Voice note + micro-diagram",
      message: `{{firstName}}, recorded a 45-second walkthrough on how ${input.industry} leaders add visual proof to their LinkedIn plays. Want the snippet?`
    },
    {
      day: "Day 4",
      asset: "Carousel drop",
      message: `Sharing a carousel we co-built with ${leads[0]?.company ?? "a top brand"} that sparked ${Math.floor(Math.random() * 350 + 180)} demo-driven reactions. Could be a fit for your ${input.callToAction}.`
    },
    {
      day: "Day 7",
      asset: "Event invite",
      message: `Hosting an invite-only LinkedIn Jam Session on ${input.objective} for ${input.persona} leaders. Have room for another sharp mind—want the backstage link?`
    }
  ];
}

export function getObjectionHandling(
  key: keyof typeof objectionHandlingPlaybook
) {
  return objectionHandlingPlaybook[key];
}
