# CyborgDB — Agentic Security Architecture Diagram
## Vercel Deploy → Webflow Embed

An interactive architecture diagram demonstrating CyborgDB's integration within an agentic security platform. Toggle CyborgDB features on/off to see encryption touchpoints across the data pipeline.

## Features

- **Interactive Layers**: Click on any layer to expand details about its components
- **CyborgDB Toggle**: Switch CyborgDB on/off to highlight encryption insertion points
- **Architectural Flows**: Explore different data flows and their CyborgDB integration points
- **Security Focus**: Demonstrates encrypted vector database capabilities for SOC, MSSP, and regulated environments

## Key Components

### Layer 1: Unified Security Data Lake
- 350+ native connectors
- Dual query engines
- CyborgDB proxy mode intercept for embedding encryption

### Layer 2: Security Knowledge Graph  
- Entity and relationship mapping
- Encrypted semantic search capabilities
- PII/PHI protection without decryption

### Layer 3: Standardized Agent Protocol Server
- MCP-style middleware protocol
- Multi-tenant SOC isolation
- Per-tenant cryptographic key separation

---

## STEP 1: Deploy on Vercel

This demo is already configured for Vercel deployment with `vercel.json`.

1. Push to GitHub repository
2. Go to https://vercel.com → "Add New Project"
3. Import `cyborgdb-examples` repository
4. Select `agentic-architecture-diagram` as the root directory
5. Click **Deploy**
6. Your app will be available at: `https://your-project.vercel.app`

---

## STEP 2: Embed in Webflow

In your Webflow blog post, add an **Embed block** and paste:

```html
<div style="width:100%; border-radius:12px; overflow:hidden; box-shadow:0 4px 32px rgba(0,0,0,0.4);">
  <iframe
    src="https://YOUR-PROJECT.vercel.app"
    width="100%"
    height="820"
    frameborder="0"
    scrolling="no"
    title="CyborgDB Agentic Security Architecture — Interactive Diagram"
    loading="lazy"
    style="display:block; border:none;"
  ></iframe>
</div>
```

**Replace** `YOUR-PROJECT.vercel.app` with your actual Vercel URL.

### Responsive height tip
If you want the iframe to auto-size on mobile, add this script
to your Webflow page's **Before </body> tag** custom code:

```html
<script>
  window.addEventListener('message', function(e) {
    var iframe = document.querySelector('iframe[title*="CyborgDB"]');
    if (iframe && e.data && e.data.height) {
      iframe.style.height = e.data.height + 'px';
    }
  });
</script>
```

---

## STEP 4: Webflow SEO fields (CMS Collection)

Fill these in the Webflow CMS blog post entry:

| Field | Value |
|---|---|
| **Title** | Encrypted Vector Search for Agentic Security Operations |
| **Slug** | encrypted-vector-search-agentic-soc |
| **Meta description** | How CyborgDB enables encrypted semantic similarity search inside agentic security platforms — without re-architecting the surrounding stack. Built for HIPAA, GDPR, and multi-tenant MSSP environments. |
| **OG Image** | Screenshot of diagram with CyborgDB toggle ON (1200×630px) |
| **Tags** | encrypted-ai, agentic-security, SOC, HIPAA, vector-database, MSSP |

---

## STEP 5: LinkedIn Insight Tag (if not already on Webflow site)

Site Settings → Custom Code → **Head code**:

```html
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt=""
src="https://px.ads.linkedin.com/collect/?pid=YOUR_PARTNER_ID&fmt=gif" />
</noscript>
```

---

## Updates

To update the diagram (new content, design tweaks):
1. Edit `src/App.js`
2. `git push` — Netlify auto-redeploys in ~90 seconds
3. Webflow iframe pulls the latest automatically — no Webflow republish needed
