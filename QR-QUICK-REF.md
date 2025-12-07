# 🚀 Quick Setup - QR Code & Menu System

## ✅ What's New

1. **`/menu.html`** - Your digital menu page (shows 3 menu images)
2. **`/qr-menu.html`** - QR code generator (automatically creates QR pointing to menu)
3. **Updated navigation** - Added "Full Menu" link

---

## 🎯 How to Use

### For Customers
1. Go to `yourdomain.com/qr-menu.html` 
2. Scan the QR code with phone
3. Menu opens automatically

### For You (Admin)
1. Update menu images in `images/menu/` folder
2. Edit descriptions in `menu.html`
3. Done! QR code automatically updates

---

## 📱 Testing Locally

```bash
# Start local server
python3 -m http.server 8000

# Or use VS Code Live Server extension

# Open in browser:
http://localhost:8000/qr-menu.html
```

---

## 🖼️ Update Menu Images

Replace these files in `images/menu/`:
- `coffee_menu.png`
- `tea_menu.png`
- `cake_menu.jpg`

Keep the same filenames OR update paths in `menu.html`.

---

## 🎨 Customize Menu Page

Edit `menu.html`:

```html
<!-- Change title -->
<h3 class="menu-card-title">Your Menu Name</h3>

<!-- Change description -->
<p class="menu-card-description">
    Your description here
</p>

<!-- Change badge -->
<div class="menu-badge">Your Badge</div>
```

---

## 📏 Responsive Design

Automatically adapts to:
- 💻 Desktop (3 columns)
- 📱 Tablet (2 columns)
- 📱 Mobile (1 column)

No extra work needed!

---

## 🔧 Customize QR Code

Edit `qr-menu.html` (bottom of file):

```javascript
colorDark: "#2A1C14",  // Change QR color (brand colors work!)
width: 300,            // Change size
height: 300,
```

---

## 📤 Deploy

Same as before:
```bash
vercel
```

QR code will automatically work on your live domain!

---

## ✨ Key Features

✅ **Auto-generating QR code** - No manual creation needed  
✅ **Responsive menu page** - Works on all devices  
✅ **Brand-matched design** - Café de Source colors throughout  
✅ **Easy to update** - Just replace images  
✅ **No backend needed** - Pure HTML/CSS/JS  

---

## 🆘 Common Issues

**QR not generating?**
- Check internet (QRCode.js loads from CDN)
- Open browser console (F12) for errors

**Menu images broken?**
- Verify files exist in `images/menu/`
- Check file names match exactly

**QR points to localhost?**
- Normal during local testing
- Deploy to production for live URL

---

## 📚 Full Documentation

See `QR-MENU-GUIDE.md` for:
- Detailed customization
- Advanced features
- Printing QR codes
- Performance tips

---

**You're all set! ☕🎉**
