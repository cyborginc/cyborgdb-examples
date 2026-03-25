# Deploy to Vercel Instructions

## Quick Deploy

1. **Visit Vercel Dashboard**
   - Go to https://vercel.com/dashboard
   - Click "Add New Project"

2. **Import Repository**
   - Select "Import Git Repository"
   - Choose `cyborginc/cyborgdb-examples`
   - Click "Import"

3. **Configure Project**
   - **Root Directory**: Set to `agentic-architecture-diagram`
   - **Framework Preset**: Will auto-detect as Create React App
   - **Build Settings**: Already configured via `vercel.json`

4. **Deploy**
   - Click "Deploy"
   - Wait ~2 minutes for build to complete

5. **Get Your URL**
   - Your app will be available at: `https://[your-project-name].vercel.app`
   - Example: `https://cyborgdb-agentic-diagram.vercel.app`

## Embed in Webflow

Once deployed, add this to your Webflow blog post using an Embed block:

```html
<div style="width:100%; border-radius:12px; overflow:hidden; box-shadow:0 4px 32px rgba(0,0,0,0.4);">
  <iframe
    src="https://[your-vercel-url].vercel.app"
    width="100%"
    height="820"
    frameborder="0"
    scrolling="no"
    title="CyborgDB Agentic Security Architecture"
    loading="lazy"
    style="display:block; border:none;"
  ></iframe>
</div>
```

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `diagram.cyborgdb.com`)
3. Follow DNS configuration instructions

## Environment Variables (Not Required)

This demo doesn't require any environment variables.

## Updates

To update the diagram:
1. Make changes in the GitHub repo
2. Vercel will auto-deploy on push to main branch
3. Changes appear in ~90 seconds