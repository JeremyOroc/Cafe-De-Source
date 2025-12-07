# 📱 QR Code & Menu System Documentation

## ✨ New Features Added

### 1. Dynamic QR Code Generation ✅
- **Page**: `qr-menu.html`
- **Library**: QRCode.js (loaded from CDN)
- **Functionality**: Automatically generates QR code pointing to `/menu` page
- **Customization**: QR code uses brand colors (dark chocolate brown)

### 2. Dedicated Menu Page ✅
- **URL**: `/menu` or `/menu.html`
- **Features**: 
  - Displays 3 menu images from `/images/menu/`
  - Fully responsive (desktop, tablet, mobile)
  - Matches Café de Source theme perfectly
  - Beautiful hover effects and card design

---

## 📁 Menu Images

Your menu page displays these images:
- `images/menu/coffee_menu.png` - Coffee Menu
- `images/menu/tea_menu.png` - Tea Selection
- `images/menu/cake_menu.jpg` - Cakes & Pastries

### How to Replace Menu Images

1. Create your menu images (recommended size: 1200x900px or 4:3 ratio)
2. Save them in `images/menu/` folder
3. Replace the existing files OR update the image paths in `menu.html`

---

## 🔧 How the QR Code System Works

### Automatic URL Detection
The QR code automatically generates based on your domain:

```javascript
// When deployed to: https://cafe-de-source.com
// QR code will point to: https://cafe-de-source.com/menu.html

// When testing locally: http://localhost:3000
// QR code will point to: http://localhost:3000/menu.html
```

### QR Code Customization

In `qr-menu.html`, you can customize:

```javascript
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: menuUrl,              // URL to encode
    width: 300,                 // QR code width
    height: 300,                // QR code height
    colorDark: "#2A1C14",       // Dark chocolate brown (brand color)
    colorLight: "#ffffff",      // White background
    correctLevel: QRCode.CorrectLevel.H // High error correction
});
```

**Color Options**:
- `colorDark`: Change to any brand color (e.g., `"#C4493A"` for café red)
- `colorLight`: Usually keep white for scannability

**Size Options**:
- Desktop: 300x300px (default)
- Mobile: 250x250px (automatically adjusted)

---

## 📱 Testing the QR Code

### Local Testing

1. **Start a local server**:
   ```bash
   # Option 1: Python
   python3 -m http.server 8000
   
   # Option 2: Node.js (if you have it)
   npx serve
   
   # Option 3: VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

2. **Open QR page**:
   ```
   http://localhost:8000/qr-menu.html
   ```

3. **Test the QR code**:
   - Open your phone's camera app
   - Point it at the QR code on screen
   - Tap the notification to verify it opens the menu page

### Production Testing

After deploying to Vercel/Netlify:
```
https://your-domain.com/qr-menu.html
```

The QR code will automatically point to:
```
https://your-domain.com/menu.html
```

---

## 🎨 Menu Page Customization

### Update Menu Descriptions

Edit `menu.html` around lines 185-245:

```html
<h3 class="menu-card-title">Coffee Menu</h3>
<p class="menu-card-description">
    Your custom description here
</p>
<div class="menu-badge">Your Badge Text</div>
```

### Add More Menu Categories

To add a 4th category (e.g., Breakfast):

```html
<div class="col-lg-4 col-md-6 col-12">
    <div class="menu-image-card">
        <div class="menu-image-wrapper">
            <img src="images/menu/breakfast_menu.jpg" alt="Breakfast Menu" class="menu-image">
            <div class="menu-image-overlay"></div>
        </div>
        <div class="menu-card-content">
            <h3 class="menu-card-title">Breakfast</h3>
            <p class="menu-card-description">
                Start your day with our delicious breakfast options...
            </p>
            <div class="menu-badge">All Day</div>
        </div>
    </div>
</div>
```

---

## 📐 Responsive Design

### Breakpoints

The menu page is fully responsive:

| Device | Width | Layout |
|--------|-------|--------|
| **Desktop** | 1200px+ | 3 columns (all cards in one row) |
| **Tablet** | 768px - 1199px | 2 columns |
| **Mobile** | < 768px | 1 column (stacked) |

### Font Scaling

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Page Title (h1) | 56px | 42px | 32px |
| Section Title (h2) | 40px | 32px | 28px |
| Card Title (h3) | 28px | 24px | 22px |

---

## 🔗 Navigation Updates

The main navigation now includes:
- **Full Menu** - Links to `/menu.html`
- **QR Menu** - Links to `/qr-menu.html`

Users can access the menu in three ways:
1. Click "Full Menu" in navigation
2. Scan QR code from `/qr-menu.html`
3. Direct URL: `yourdomain.com/menu.html`

---

## 🎯 Use Cases

### 1. In-Store Display
- Display `qr-menu.html` on a tablet/screen at entrance
- Customers scan to view menu on their phones
- No physical menus needed!

### 2. Table Tents
- Print the QR code (right-click → Save As)
- Add to table tent cards
- Customers scan at their table

### 3. Social Media
- Share `menu.html` link directly
- "Check out our menu: cafe-de-source.com/menu"

### 4. Email Signatures
- Include QR code in marketing emails
- Link directly to menu page

---

## 🖨️ Printing the QR Code

### Option 1: Screenshot
1. Open `qr-menu.html` in browser
2. Right-click the QR code → "Save Image As"
3. Save as PNG
4. Print at high resolution (300 DPI minimum)

### Option 2: Generate Static QR
If you need a downloadable QR code:
1. Open browser console on `qr-menu.html` (F12)
2. Run this code:
```javascript
var canvas = document.querySelector('#qrcode canvas');
var image = canvas.toDataURL("image/png");
var link = document.createElement('a');
link.download = 'cafe-menu-qr-code.png';
link.href = image;
link.click();
```

---

## ⚙️ Advanced Customization

### Change QR Code Error Correction

Higher error correction = more reliable scanning, but larger QR code:

```javascript
correctLevel: QRCode.CorrectLevel.H  // High (default) - 30% recovery
correctLevel: QRCode.CorrectLevel.M  // Medium - 15% recovery
correctLevel: QRCode.CorrectLevel.L  // Low - 7% recovery
```

Recommendation: Keep it at **H** (High) for best results.

### Make QR Code Link to External URL

If you want to link to an external menu (e.g., Google Drive, Canva):

```javascript
var menuUrl = "https://your-external-menu-link.com";
```

### Add Logo to QR Code Center

For a more branded QR code, you can add your logo:

```javascript
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: menuUrl,
    width: 300,
    height: 300,
    colorDark: "#2A1C14",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// After QR is generated, overlay logo (requires additional code)
```

Note: This requires custom implementation or using a different QR library.

---

## 🐛 Troubleshooting

### QR Code Not Generating

**Issue**: QR code div is empty
- **Solution**: Check browser console (F12) for errors
- **Check**: QRCode.js library is loading from CDN
- **Verify**: Internet connection is active

### QR Code Points to Wrong URL

**Issue**: QR scans to localhost instead of live domain
- **Solution**: Deploy to production first
- **Alternative**: Manually set URL in script:
  ```javascript
  var menuUrl = "https://your-domain.com/menu.html";
  ```

### Menu Images Not Loading

**Issue**: Images show broken icon
- **Check**: Image files exist in `images/menu/` folder
- **Check**: File names match exactly (case-sensitive)
- **Verify**: Image paths in HTML are correct

### Mobile Menu Cards Look Wrong

**Issue**: Cards don't stack properly on mobile
- **Clear**: Browser cache and hard refresh
- **Check**: Bootstrap CSS is loading
- **Verify**: Viewport meta tag is present

---

## 📊 Performance Tips

### Optimize Menu Images

Before uploading menu images:
1. Resize to 1200x900px (4:3 ratio)
2. Compress using [TinyPNG](https://tinypng.com)
3. Save as JPG (photos) or PNG (graphics with text)
4. Target file size: under 200KB each

### Lazy Loading (Optional)

Add to menu images for faster page load:
```html
<img src="images/menu/coffee_menu.png" 
     alt="Coffee Menu" 
     class="menu-image"
     loading="lazy">
```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Replace menu images with your actual menu photos
- [ ] Update menu descriptions in `menu.html`
- [ ] Test QR code generation locally
- [ ] Verify menu page is responsive on mobile
- [ ] Test navigation links work
- [ ] Print QR code for in-store use

After deploying:
- [ ] Scan QR code with phone to verify it works
- [ ] Check menu page loads on mobile device
- [ ] Verify all menu images display correctly
- [ ] Test on different browsers (Chrome, Safari, Firefox)

---

## 🎉 Summary

You now have a complete digital menu system:
- ✅ Dynamic QR code generator
- ✅ Beautiful menu page with 3 categories
- ✅ Fully responsive design
- ✅ Matches Café de Source branding
- ✅ Easy to update and customize
- ✅ Ready for production use

**Scan, view, enjoy! ☕**
