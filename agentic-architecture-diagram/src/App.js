import { useState } from "react";

const COLORS = {
  bg: "#080c14",
  panel: "#0d1520",
  panelBorder: "#1a2540",
  layer1: "#0a2a1a",
  layer1Border: "#1a5c38",
  layer1Text: "#4ade80",
  layer2: "#0a1a2a",
  layer2Border: "#1a4060",
  layer2Text: "#60c8ff",
  layer3: "#1a1a0a",
  layer3Border: "#4a4010",
  layer3Text: "#fcd34d",
  agentLayer: "#1a0a2a",
  agentBorder: "#4a1a7a",
  agentText: "#c084fc",
  govLayer: "#1a0a0a",
  govBorder: "#5a1a1a",
  govText: "#f87171",
  cyborg: "#ff6b2b",
  cyborgBg: "#1a0c04",
  cyborgBorder: "#ff6b2b",
  cyborgGlow: "rgba(255,107,43,0.15)",
  mutedText: "#4a6080",
  bodyText: "#8aa4c0",
  white: "#e8f0f8",
  flowArrow: "#2a4060",
  flowArrowActive: "#ff6b2b",
};

const layers = [
  {
    id: "data",
    label: "LAYER 1",
    title: "Unified Security Data Lake",
    color: COLORS.layer1,
    border: COLORS.layer1Border,
    accent: COLORS.layer1Text,
    components: [
      "350+ native connectors (multi-cloud, on-prem, SaaS, endpoint, identity)",
      "Structured + semi-structured ingestion: logs, telemetry, IoCs, TTPs",
      "Dual query engines: real-time KQL + historical batch processing",
      "Storage tiers: hot analytics + low-cost long-term retention",
      "Controls: RBAC, encryption at rest (platform or customer-managed keys), data residency",
    ],
    cyborgPoint: {
      label: "Proxy Mode Intercept",
      detail:
        "CyborgDB intercepts at the vectorization step — encrypts embeddings before storage, decrypts only at authorized agent retrieval. Zero platform re-architecture required.",
    },
  },
  {
    id: "graph",
    label: "LAYER 2",
    title: "Security Knowledge Graph",
    color: COLORS.layer2,
    border: COLORS.layer2Border,
    accent: COLORS.layer2Text,
    components: [
      "Entity nodes: users, devices, alerts, apps, IPs, files, cloud resources",
      "Relationship edges: lateral movement paths, privilege escalation, blast radius",
      "Enrichment: posture data, threat intel, identity signals, device health",
      "Output: vectorized security data for semantic + graph-based queries",
      "Feeds from: XDR platform, identity governance, compliance signals",
    ],
    cyborgPoint: {
      label: "Encrypted Semantic Search",
      detail:
        "SOC analysts query 'find incidents similar to this known APT pattern' — CyborgDB runs similarity search over encrypted embeddings. PII, PHI, financial identifiers never decrypted to perform the lookup. Required for HIPAA SOCs and GDPR jurisdictions.",
    },
  },
  {
    id: "mcp",
    label: "LAYER 3",
    title: "Standardized Agent Protocol Server",
    color: COLORS.layer3,
    border: COLORS.layer3Border,
    accent: COLORS.layer3Text,
    components: [
      "Open-standard middleware protocol (MCP-style) for agent access",
      "Capabilities: read context, execute queries, trigger actions, invoke agents",
      "Identity: unique managed identity per agent + RBAC policies",
      "Dev entry points: IDE code-first + no-code visual agent builder",
      "Agent marketplace: vetted partner and third-party agent discovery",
    ],
    cyborgPoint: {
      label: "Multi-Tenant SOC Isolation",
      detail:
        "MSSPs serving a bank, hospital, and defense contractor on one platform face cross-tenant vector leakage risk. CyborgDB provides per-tenant key isolation at the embedding level — cryptographic separation, not just RBAC.",
    },
  },
];

const agentTypes = [
  { label: "Platform-Native Agents", items: ["Phishing triage", "Access policy optimization", "Identity access review", "Adversarial simulation"] },
  { label: "Partner / Third-Party Agents", items: ["Deployed via vetted marketplace", "Pre-certified for regulated industries"] },
  { label: "Custom Agents", items: ["No-code visual builder", "Code-first via protocol SDK", "Deploy to agent workspace"] },
];

const flows = [
  { id: "ingest", label: "Ingest Flow", base: "External sources → Data Lake → Graph enrichment", cyborg: "+ CyborgDB proxy encrypts embeddings at vectorization step" },
  { id: "query", label: "Query Flow", base: "Agent → Protocol Server → Graph → Data Lake → result → Agent", cyborg: "+ CyborgDB executes encrypted similarity search; authorized result only" },
  { id: "action", label: "Action Flow", base: "Agent decision → Protocol Server → SOAR/playbook → Environment change", cyborg: null },
  { id: "governance", label: "Governance Flow", base: "Agent actions → Identity check → RBAC → Audit log", cyborg: "+ CyborgDB cryptographic proof of query isolation (beyond access logging)" },
  { id: "multitenant", label: "Multi-Tenant Flow", base: "MSSP agent request → Protocol Server → vector retrieval → Agent", cyborg: "+ CyborgDB per-tenant key lookup → cryptographically isolated retrieval" },
];

export default function App() {
  const [cyborgOn, setCyborgOn] = useState(true);
  const [expandedLayer, setExpandedLayer] = useState(null);
  const [expandedFlow, setExpandedFlow] = useState(null);

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      fontFamily: "'Courier New', 'Lucida Console', monospace",
      color: COLORS.white,
      padding: "24px",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: COLORS.mutedText, marginBottom: "6px" }}>
              ARCHITECTURE OVERVIEW · AGENTIC SECURITY PLATFORM
            </div>
            <h1 style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "1px",
              color: COLORS.white,
              lineHeight: 1.2,
            }}>
              Encrypted Agentic Security<br />
              <span style={{ color: COLORS.cyborg }}>+ CyborgDB Integration</span>
            </h1>
          </div>
          {/* Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "4px" }}>
            <span style={{ fontSize: "11px", color: COLORS.mutedText, letterSpacing: "2px" }}>CYBORGDB</span>
            <div
              onClick={() => setCyborgOn(v => !v)}
              style={{
                width: "52px", height: "26px",
                background: cyborgOn ? COLORS.cyborg : COLORS.panelBorder,
                borderRadius: "13px",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.3s",
                border: `1px solid ${cyborgOn ? COLORS.cyborg : COLORS.mutedText}`,
              }}
            >
              <div style={{
                position: "absolute",
                top: "3px",
                left: cyborgOn ? "28px" : "3px",
                width: "18px", height: "18px",
                background: "#fff",
                borderRadius: "50%",
                transition: "left 0.3s",
                boxShadow: cyborgOn ? `0 0 8px ${COLORS.cyborg}` : "none",
              }} />
            </div>
            <span style={{ fontSize: "11px", color: cyborgOn ? COLORS.cyborg : COLORS.mutedText, letterSpacing: "1px" }}>
              {cyborgOn ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <p style={{ fontSize: "12px", color: COLORS.bodyText, marginTop: "10px", marginBottom: 0, maxWidth: "640px", lineHeight: "1.6" }}>
          Toggle CyborgDB to reveal encrypted vector database insertion points across the platform.
          Click any layer to expand details.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>

        {/* Agent Layer */}
        <div style={{
          background: COLORS.agentLayer,
          border: `1px solid ${COLORS.agentBorder}`,
          borderRadius: "8px",
          padding: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS.agentText, boxShadow: `0 0 6px ${COLORS.agentText}` }} />
            <span style={{ fontSize: "9px", letterSpacing: "3px", color: COLORS.mutedText }}>AGENT LAYER</span>
            <span style={{ fontSize: "13px", fontWeight: "700", color: COLORS.agentText }}>Autonomous Security Agents</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
            {agentTypes.map(at => (
              <div key={at.label} style={{
                background: "rgba(74,26,122,0.15)",
                border: `1px solid ${COLORS.agentBorder}`,
                borderRadius: "6px",
                padding: "10px",
              }}>
                <div style={{ fontSize: "10px", color: COLORS.agentText, fontWeight: "700", marginBottom: "6px", letterSpacing: "0.5px" }}>{at.label}</div>
                {at.items.map(i => (
                  <div key={i} style={{ fontSize: "10px", color: COLORS.bodyText, marginBottom: "3px", paddingLeft: "8px", borderLeft: `1px solid ${COLORS.agentBorder}` }}>
                    {i}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <FlowArrow label="Agent requests → Protocol Server" />

        {/* Main 3 Layers */}
        {layers.map((layer, idx) => (
          <div key={layer.id}>
            <LayerCard
              layer={layer}
              cyborgOn={cyborgOn}
              expanded={expandedLayer === layer.id}
              onToggle={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
            />
            {idx < layers.length - 1 && <FlowArrow label="Enriched data flows up" />}
          </div>
        ))}

        {/* Governance */}
        <div style={{
          background: COLORS.govLayer,
          border: `1px solid ${COLORS.govBorder}`,
          borderRadius: "8px",
          padding: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS.govText, boxShadow: `0 0 6px ${COLORS.govText}` }} />
            <span style={{ fontSize: "9px", letterSpacing: "3px", color: COLORS.mutedText }}>GOVERNANCE</span>
            <span style={{ fontSize: "13px", fontWeight: "700", color: COLORS.govText }}>Orchestration & Compliance</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px" }}>
            {["Agent Identity Management", "Role-Based Access Control", "Human-in-the-Loop Gates", "Full Audit Trail"].map(item => (
              <div key={item} style={{
                background: "rgba(90,26,26,0.2)",
                border: `1px solid ${COLORS.govBorder}`,
                borderRadius: "4px",
                padding: "8px 10px",
                fontSize: "10px",
                color: COLORS.bodyText,
              }}>{item}</div>
            ))}
            {cyborgOn && (
              <div style={{
                background: COLORS.cyborgBg,
                border: `1px solid ${COLORS.cyborgBorder}`,
                borderRadius: "4px",
                padding: "8px 10px",
                gridColumn: "1 / -1",
                boxShadow: `0 0 10px ${COLORS.cyborgGlow}`,
              }}>
                <div style={{ fontSize: "9px", color: COLORS.cyborg, letterSpacing: "2px", marginBottom: "4px" }}>◈ CYBORGDB</div>
                <div style={{ fontSize: "10px", color: COLORS.white }}>
                  Cryptographic proof of query isolation — extends audit trail from <em style={{ color: COLORS.cyborg }}>who accessed what</em> to <em style={{ color: COLORS.cyborg }}>what data was never exposed</em> during vector search. Closes the regulatory gap between access logging and data exposure assurance.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Flows Section */}
        <div style={{
          background: COLORS.panel,
          border: `1px solid ${COLORS.panelBorder}`,
          borderRadius: "8px",
          padding: "16px",
          marginTop: "4px",
        }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: COLORS.mutedText, marginBottom: "12px" }}>
            ARCHITECTURAL FLOWS
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            {flows.map(flow => (
              <div
                key={flow.id}
                onClick={() => setExpandedFlow(expandedFlow === flow.id ? null : flow.id)}
                style={{
                  background: expandedFlow === flow.id ? "rgba(255,107,43,0.05)" : "rgba(26,37,64,0.4)",
                  border: `1px solid ${expandedFlow === flow.id ? COLORS.cyborgBorder : COLORS.panelBorder}`,
                  borderRadius: "6px",
                  padding: "10px 12px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: COLORS.white, letterSpacing: "0.5px" }}>{flow.label}</span>
                  <span style={{ fontSize: "10px", color: COLORS.mutedText }}>{expandedFlow === flow.id ? "▲" : "▼"}</span>
                </div>
                {expandedFlow === flow.id && (
                  <div style={{ marginTop: "10px" }}>
                    <div style={{ fontSize: "10px", color: COLORS.bodyText, lineHeight: "1.6", marginBottom: "6px" }}>
                      {flow.base}
                    </div>
                    {cyborgOn && flow.cyborg && (
                      <div style={{
                        fontSize: "10px",
                        color: COLORS.cyborg,
                        background: COLORS.cyborgBg,
                        border: `1px solid ${COLORS.cyborgBorder}`,
                        borderRadius: "4px",
                        padding: "8px",
                        lineHeight: "1.6",
                      }}>
                        {flow.cyborg}
                      </div>
                    )}
                    {cyborgOn && !flow.cyborg && (
                      <div style={{ fontSize: "10px", color: COLORS.mutedText, fontStyle: "italic" }}>
                        No CyborgDB touchpoint on this flow
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem */}
        <div style={{
          background: COLORS.panel,
          border: `1px solid ${COLORS.panelBorder}`,
          borderRadius: "8px",
          padding: "16px",
        }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: COLORS.mutedText, marginBottom: "12px" }}>
            INTEGRATION ECOSYSTEM
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              "XDR Platform", "Data Governance Platform", "AI Development Platform",
              "Low-Code Orchestration Studio", "Identity Governance", "Third-Party Connectors (350+)"
            ].map(item => (
              <div key={item} style={{
                fontSize: "10px",
                color: COLORS.bodyText,
                background: "rgba(26,37,64,0.6)",
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: "4px",
                padding: "5px 10px",
              }}>{item}</div>
            ))}
            {cyborgOn && (
              <div style={{
                fontSize: "10px",
                color: COLORS.cyborg,
                background: COLORS.cyborgBg,
                border: `1px solid ${COLORS.cyborgBorder}`,
                borderRadius: "4px",
                padding: "5px 10px",
                boxShadow: `0 0 8px ${COLORS.cyborgGlow}`,
                fontWeight: "700",
              }}>◈ CyborgDB — Encrypted Vector Layer</div>
            )}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ marginTop: "20px", fontSize: "10px", color: COLORS.mutedText, letterSpacing: "1px", textAlign: "center" }}>
        CONFIDENTIAL · FOR PRESENTATION USE ONLY
      </div>
    </div>
  );
}

function LayerCard({ layer, cyborgOn, expanded, onToggle }) {
  return (
    <div
      style={{
        background: layer.color,
        border: `1px solid ${expanded ? layer.accent : layer.border}`,
        borderRadius: "8px",
        overflow: "hidden",
        transition: "border-color 0.2s",
        boxShadow: expanded ? `0 0 16px rgba(${hexToRgb(layer.accent)},0.1)` : "none",
      }}
    >
      {/* Header row */}
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 16px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div style={{
          fontSize: "9px", letterSpacing: "3px",
          color: COLORS.mutedText,
          minWidth: "56px",
        }}>{layer.label}</div>
        <div style={{ width: "1px", height: "20px", background: layer.border }} />
        <div style={{ fontSize: "13px", fontWeight: "700", color: layer.accent, flex: 1 }}>
          {layer.title}
        </div>
        {cyborgOn && (
          <div style={{
            fontSize: "9px", color: COLORS.cyborg,
            background: COLORS.cyborgBg,
            border: `1px solid ${COLORS.cyborgBorder}`,
            borderRadius: "3px",
            padding: "2px 7px",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
          }}>◈ {layer.cyborgPoint.label}</div>
        )}
        <div style={{ fontSize: "10px", color: COLORS.mutedText, marginLeft: "8px" }}>
          {expanded ? "▲" : "▼"}
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ padding: "0 16px 16px 16px", borderTop: `1px solid ${layer.border}` }}>
          <div style={{ paddingTop: "12px", display: "grid", gridTemplateColumns: "1fr", gap: "6px", marginBottom: cyborgOn ? "12px" : "0" }}>
            {layer.components.map(c => (
              <div key={c} style={{
                fontSize: "11px",
                color: COLORS.bodyText,
                paddingLeft: "12px",
                borderLeft: `2px solid ${layer.border}`,
                lineHeight: "1.5",
              }}>{c}</div>
            ))}
          </div>
          {cyborgOn && (
            <div style={{
              background: COLORS.cyborgBg,
              border: `1px solid ${COLORS.cyborgBorder}`,
              borderRadius: "6px",
              padding: "12px",
              boxShadow: `0 0 12px ${COLORS.cyborgGlow}`,
            }}>
              <div style={{ fontSize: "9px", color: COLORS.cyborg, letterSpacing: "2px", marginBottom: "6px", fontWeight: "700" }}>
                ◈ CYBORGDB · {layer.cyborgPoint.label.toUpperCase()}
              </div>
              <div style={{ fontSize: "11px", color: COLORS.white, lineHeight: "1.7" }}>
                {layer.cyborgPoint.detail}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FlowArrow({ label }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "2px 16px",
    }}>
      <div style={{ flex: 1, height: "1px", background: COLORS.flowArrow }} />
      <div style={{ fontSize: "9px", color: COLORS.mutedText, letterSpacing: "1px", whiteSpace: "nowrap" }}>
        ↕ {label}
      </div>
      <div style={{ flex: 1, height: "1px", background: COLORS.flowArrow }} />
    </div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
