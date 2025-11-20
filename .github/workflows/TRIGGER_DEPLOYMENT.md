# Trigger New Deployment for Custom Domain

The current deployed version was built with base path `/Hugsberry-website/` instead of `/` for custom domain.

## Solution: Trigger New Deployment

The workflow will automatically detect the `public/CNAME` file and build with base `/` for custom domain.

### Option 1: Push Any Change (Recommended)

Make any small change and push to trigger deployment:

```bash
# Make a small change (or just update a comment)
git add .
git commit -m "Trigger deployment for custom domain with base /"
git push origin main
```

### Option 2: Manually Trigger Workflow

1. Go to: `https://github.com/abinalyas/Hugsberry-website/actions`
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button (top right)
4. Select branch: `main`
5. Click "Run workflow"

### What Happens

1. Workflow checks for `public/CNAME` ✅ (exists)
2. Sets `VITE_BASE=/` for custom domain
3. Builds with base path `/`
4. Assets will be at `/assets/...` instead of `/Hugsberry-website/assets/...`
5. Deploys to GitHub Pages
6. Custom domain will work correctly!

### After Deployment

Wait 2-3 minutes for deployment to complete, then:
- Visit: `https://hugsberry.in`
- Assets should load from `/assets/...`
- No more 404 errors!

