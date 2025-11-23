"use client";

import {
  type DiagramConnection,
  type DiagramNode
} from "@/lib/content-engine";

type Props = {
  nodes: DiagramNode[];
  connections: DiagramConnection[];
};

export function DiagramCanvas({ nodes, connections }: Props) {
  const width = 640;
  const height = 280;

  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-3xl border border-primary-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-primary-950/60 p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full w-full"
        role="img"
        aria-label="Diagram blueprint"
      >
        <defs>
          <linearGradient id="nodeAccent" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map((connection) => {
          const from = nodes.find((node) => node.id === connection.from);
          const to = nodes.find((node) => node.id === connection.to);
          if (!from || !to) return null;
          const midX = (from.x + to.x) / 2;
          const path = `M ${from.x} ${from.y} Q ${midX} ${from.y - 40} ${to.x} ${to.y}`;

          return (
            <g key={`${connection.from}-${connection.to}`}>
              <path
                d={path}
                fill="none"
                stroke="url(#nodeAccent)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeOpacity={0.5}
              />
              <circle
                cx={to.x}
                cy={to.y}
                r={4}
                fill="url(#nodeAccent)"
                filter="url(#glow)"
              />
            </g>
          );
        })}

        {nodes.map((node) => (
          <g key={node.id} transform={`translate(${node.x - 60}, ${node.y - 30})`}>
            <rect
              width="120"
              height="60"
              rx="16"
              ry="16"
              fill={node.accent ? "url(#nodeAccent)" : "rgba(15,23,42,0.7)"}
              stroke="rgba(148,163,184,0.3)"
              strokeWidth="1"
              filter={node.accent ? "url(#glow)" : undefined}
            />
            <text
              x="60"
              y="32"
              fill={node.accent ? "#0f172a" : "#e2e8f0"}
              textAnchor="middle"
              fontSize="12"
              fontWeight={node.accent ? 700 : 500}
              style={{ letterSpacing: "0.06em" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
