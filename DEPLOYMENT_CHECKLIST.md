# GitHub Pages Deployment Checklist

## ✅ Build Verification (LOCAL)
- [x] Built HTML references: `/Hugsberry-website/assets/index-*.js` (NOT index.tsx)
- [x] Built HTML references: `/Hugsberry-website/images/Logo.svg` (with base path)
- [x] No `index.tsx` in built HTML (verified: 0 matches)
- [x] Vite base path set to: `/Hugsberry-website/`
- [x] All images use `getAssetPath()` helper

## 🔍 Troubleshooting Steps

### 1. Verify Correct URL
**❌ WRONG:** `https://abinalyas.github.io/`  
**✅ CORRECT:** `https://abinalyas.github.io/Hugsberry-website/`

### 2. Check Deployed HTML
1. Visit: `https://abinalyas.github.io/Hugsberry-website/`
2. Right-click → "View Page Source"
3. Search for `index.tsx` - should NOT exist
4. Search for `assets/index-` - should see bundled JS
5. Search for `Logo.svg` - should see `/Hugsberry-website/images/Logo.svg`

### 3. Clear Browser Cache
- **Hard Refresh:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Or:** Clear all cached files in browser settings
- **Or:** Use Incognito/Private mode

### 4. Verify Deployment
1. Go to: https://github.com/abinalyas/Hugsberry-website/actions
2. Check latest workflow completed successfully
3. Wait 2-3 minutes after completion

## 📝 Expected Built HTML
```html
<script type="module" crossorigin src="/Hugsberry-website/assets/index-*.js"></script>
<link rel="stylesheet" crossorigin href="/Hugsberry-website/assets/index-*.css">
<link rel="icon" href="/Hugsberry-website/images/Logo.svg">
```

## ❌ What Should NOT Be in Deployed HTML
- `src="/index.tsx"` ❌
- `src="index.tsx"` ❌
- `href="/images/Logo.svg"` ❌ (should be `/Hugsberry-website/images/Logo.svg`)
