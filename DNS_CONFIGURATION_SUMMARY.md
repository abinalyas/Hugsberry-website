# DNS Configuration Summary

## ✅ Correct Configuration

### For A Records (Root Domain - hugsberry.in):
You need **4 A records** pointing to GitHub Pages IP addresses:

| Type | Name | Data/Value | TTL |
|------|------|------------|-----|
| A | @ | `185.199.108.153` | 600 seconds |
| A | @ | `185.199.109.153` | 600 seconds |
| A | @ | `185.199.110.153` | 600 seconds |
| A | @ | `185.199.111.153` | 600 seconds |

### For CNAME (www subdomain - www.hugsberry.in):
Use just the hostname, **NOT** the full URL:

| Type | Name | Data/Value | TTL |
|------|------|------------|-----|
| CNAME | www | `abinalyas.github.io` | 1 Hour |

❌ **WRONG**: `https://abinalyas.github.io/Hugsberry-website/`
❌ **WRONG**: `abinalyas.github.io/Hugsberry-website/`
✅ **CORRECT**: `abinalyas.github.io`

**Why?** 
- CNAME records point to a **hostname/domain**, not a full URL
- GitHub Pages will automatically handle the path routing
- When you configure the custom domain in GitHub, it knows which repository to serve

## 📍 Where the IP Addresses Come From

The IP addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) are:

✅ **Official GitHub Pages IP addresses** from [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

✅ **Current as of 2024** - These are the IPs GitHub uses to serve GitHub Pages sites with custom domains

✅ **Used for redundancy** - Having 4 A records with different IPs ensures:
- Better reliability (if one IP has issues, others still work)
- Faster load times (DNS can choose the closest IP)
- Standard practice for GitHub Pages custom domains

### How GitHub Routes Your Domain

1. Your domain (`hugsberry.in`) points to GitHub's IPs via A records
2. GitHub checks the `CNAME` file in your repo (which contains `hugsberry.in`)
3. GitHub matches your domain to your repository
4. GitHub serves your site from the correct path automatically

**You don't need to specify `/Hugsberry-website/` in DNS** - GitHub handles that automatically when you configure the custom domain in GitHub Pages settings.

## 🔍 Verify Current GitHub Pages IPs

If you want to double-check or get the latest IPs, you can:

1. Check GitHub's documentation:
   - [GitHub Pages Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
   - [GitHub's IP Addresses](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)

2. Test DNS resolution:
   - Visit: [whatsmydns.net/#A/hugsberry.in](https://www.whatsmydns.net/#A/hugsberry.in)
   - Should show the 4 GitHub Pages IPs after configuration

## 📝 Quick Setup Checklist

- [ ] Update A record from `Parked` to `185.199.108.153`
- [ ] Add 3 more A records: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- [ ] Update CNAME `www` to `abinalyas.github.io` (not the full URL!)
- [ ] Configure custom domain in GitHub Pages settings: `hugsberry.in`
- [ ] Wait 10-60 minutes for DNS propagation
- [ ] Test: Visit `https://hugsberry.in`

