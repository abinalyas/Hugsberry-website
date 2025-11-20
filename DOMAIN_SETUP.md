# Connect GoDaddy Domain to GitHub Pages

Follow these steps to connect your `hugsberry.in` domain from GoDaddy to GitHub Pages.

## Step 1: Configure DNS in GoDaddy

1. **Log in to GoDaddy**
   - Go to [godaddy.com](https://godaddy.com) and sign in
   - Navigate to "My Products" → Find your domain `hugsberry.in` → Click "DNS"

2. **Add A Records (IPv4)**
   - Click "Add" to create a new record
   - **Type**: `A`
   - **Name**: `@` (or leave blank, represents root domain)
   - **Value**: `185.199.108.153`
   - **TTL**: `600 seconds` (or default)
   - Click "Save"
   
   - **Add 3 more A records** with the same settings but different values:
     - Value: `185.199.109.153`
     - Value: `185.199.110.153`
     - Value: `185.199.111.153`

3. **Add CNAME Record (www subdomain) - Optional but Recommended**
   - Click "Add" to create a new record
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `abinalyas.github.io` (your GitHub username)
   - **TTL**: `600 seconds` (or default)
   - Click "Save"

4. **Remove conflicting records**
   - Remove any existing A records that point to different IPs
   - Remove any CNAME records for `@` (root domain) - root domain cannot have CNAME

## Step 2: Configure Custom Domain in GitHub

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/abinalyas/Hugsberry-website`
   - Click on **Settings** (top menu)
   - Scroll down to **Pages** in the left sidebar

2. **Set Custom Domain**
   - Under "Custom domain", enter: `hugsberry.in`
   - Click "Save"
   - GitHub will automatically create/update the CNAME file (you already have this in your repo)

3. **Enable HTTPS (Recommended)**
   - Check the box for **"Enforce HTTPS"**
   - Note: This may take a few minutes to hours to activate (depends on DNS propagation)

## Step 3: Verify DNS Propagation

1. **Check DNS propagation** (wait 10-60 minutes after making changes)
   - Use a tool like [whatsmydns.net](https://www.whatsmydns.net/#A/hugsberry.in)
   - Check if all 4 A records point to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

2. **Test the domain**
   - Wait 1-2 hours for DNS to fully propagate
   - Visit: `https://hugsberry.in` in your browser
   - It should show your website!

## Step 4: Update Base Path (Already Configured ✅)

Your workflow is already set up to automatically use base path `/` when CNAME exists. After DNS is configured and GitHub recognizes your custom domain:
- The workflow will automatically build with base `/`
- Your website will work at `https://hugsberry.in` (root domain)

## Troubleshooting

### Domain not working after 24 hours?
1. Verify DNS records in GoDaddy match exactly as shown above
2. Check GitHub Pages settings show your custom domain
3. Ensure CNAME file in your repo contains: `hugsberry.in`
4. Wait for DNS propagation (can take up to 48 hours)

### HTTPS not working?
- Wait for GitHub to provision SSL certificate (can take a few hours)
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings
- DNS must be fully propagated first

### Still seeing GitHub Pages URL?
- Clear your browser cache
- Try incognito/private mode
- Check DNS propagation status

## Important Notes

- ⚠️ **DNS changes can take 24-48 hours to fully propagate globally**
- ✅ Your CNAME file already exists in the repo (good!)
- ✅ The workflow automatically detects CNAME and uses base `/`
- ✅ Once DNS is configured, your site will work at `hugsberry.in`

## Current Status

✅ CNAME file exists: `public/CNAME` with `hugsberry.in`
✅ Workflow configured to use base `/` when CNAME detected
⏳ Next step: Configure DNS in GoDaddy (Step 1)

