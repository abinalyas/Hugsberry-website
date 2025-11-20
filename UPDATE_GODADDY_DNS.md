# Update GoDaddy DNS Configuration

I can see your current DNS setup. You need to update the A record that currently says "Parked".

## Step 1: Edit the Existing A Record

1. **Find the A record** with:
   - Type: `A`
   - Name: `@`
   - Data: `Parked`

2. **Click the Edit icon** (pencil icon) on that row

3. **Update it to point to GitHub Pages**:
   - **Type**: `A` (keep as is)
   - **Name**: `@` (keep as is)
   - **Data/Value**: Change from `Parked` to `185.199.108.153`
   - **TTL**: `600 seconds` (or `1 Hour` is fine)
   - Click **Save**

## Step 2: Add 3 More A Records

You need 4 total A records pointing to different GitHub Pages IPs for redundancy.

1. **Click "Add" or "+" button** to create a new record

2. **Add A Record #2**:
   - **Type**: `A`
   - **Name**: `@`
   - **Data/Value**: `185.199.109.153`
   - **TTL**: `600 seconds` or `1 Hour`
   - Click **Save**

3. **Add A Record #3**:
   - **Type**: `A`
   - **Name**: `@`
   - **Data/Value**: `185.199.110.153`
   - **TTL**: `600 seconds` or `1 Hour`
   - Click **Save**

4. **Add A Record #4**:
   - **Type**: `A`
   - **Name**: `@`
   - **Data/Value**: `185.199.111.153`
   - **TTL**: `600 seconds` or `1 Hour`
   - Click **Save**

## Step 3: Update www CNAME (Optional but Recommended)

Your current www CNAME points to `hugsberry.in.` - you can optionally update it:

1. **Find the CNAME record** with:
   - Type: `CNAME`
   - Name: `www`
   - Data: `hugsberry.in.`

2. **Click Edit** (pencil icon)

3. **Update it to**:
   - **Type**: `CNAME` (keep as is)
   - **Name**: `www` (keep as is)
   - **Data/Value**: Change to `abinalyas.github.io` (your GitHub username)
   - **TTL**: `1 Hour` (keep as is)
   - Click **Save**

   *Note: Or you can leave it as `hugsberry.in.` - it will redirect to your root domain, which is also fine.*

## Step 4: Leave These Records Alone ✅

**DO NOT DELETE or EDIT these records:**
- NS records (nameservers) - needed for DNS to work
- CNAME `_domainconnect` - needed for domain connection
- SOA record - required DNS record
- TXT `_dmarc` - email security (optional but fine to keep)

## Final DNS Setup Should Look Like:

✅ 4x A records for `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

✅ 1x CNAME for `www`:
   - `abinalyas.github.io` (or `hugsberry.in.` if you prefer)

✅ NS records (keep as is)
✅ Other records (keep as is)

## After Making Changes:

1. **Wait 10-60 minutes** for DNS propagation
2. **Configure GitHub Pages custom domain**:
   - Go to: `https://github.com/abinalyas/Hugsberry-website/settings/pages`
   - Under "Custom domain", enter: `hugsberry.in`
   - Click "Save"
   - Check "Enforce HTTPS" (may take a few hours to activate)

3. **Check DNS propagation**:
   - Visit: [whatsmydns.net/#A/hugsberry.in](https://www.whatsmydns.net/#A/hugsberry.in)
   - Should show the 4 GitHub Pages IPs

4. **Test your domain**:
   - Visit: `https://hugsberry.in`
   - Should load your website!

## Troubleshooting:

- If it doesn't work after 24 hours, double-check all 4 A records are correct
- Make sure you removed/deleted the "Parked" A record and replaced it with GitHub IPs
- Verify GitHub Pages settings show your custom domain

