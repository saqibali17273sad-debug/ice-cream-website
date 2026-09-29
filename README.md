# Sweet Scoop - Ice Cream E-Commerce Website

🍦 Professional ice cream ordering platform with admin management dashboard.

## Live Demo
[View Live Site](https://saqibali17273sad-debug.github.io/ice-cream-website/)

## Features

### Customer Portal
- ✨ Browse premium ice cream flavors
- 🔍 Filter by category and search
- 🛒 Shopping cart with real-time updates
- 💳 Checkout with shipping calculation
- 📱 Fully responsive design

### Admin Dashboard
- 📊 Sales analytics and stats
- 📦 Product management (add, edit, delete)
- 📋 Order tracking and status updates
- 👥 Customer insights
- 🔐 Secure admin login

## Quick Start

### View Online
Visit: https://saqibali17273sad-debug.github.io/ice-cream-website/

### Run Locally
```bash
# Clone the repository
git clone https://github.com/saqibali17273sad-debug/ice-cream-website.git
cd ice-cream-website

# Start a local server
python -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000/

## Admin Access

**Login URL:** http://localhost:8000/admin/login (or /admin/login on live site)

**Demo Credentials:**
- Email: `admin@sweetscoop.com`
- Password: `password123`

## Technology Stack

**Frontend:**
- HTML5 + CSS3 + Vanilla JavaScript
- Responsive design (mobile-first)
- Local storage for cart & orders

**Admin Panel:**
- Pure JavaScript (no framework)
- Real-time product & order management
- Professional dashboard UI

**Future Enhancements:**
- Node.js + Express backend
- MongoDB database
- JWT authentication
- Stripe payment integration
- User accounts

## Project Structure

```
ice-cream-website/
├── public/
│   ├── index.html              # Customer homepage
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   └── app.js              # Customer app logic
│   └── admin/
│       ├── login.html          # Admin login page
│       ├── login.css           # Login styles
│       ├── login.js            # Login logic
│       ├── dashboard.html      # Admin dashboard
│       ├── dashboard.css       # Dashboard styles
│       └── dashboard.js        # Dashboard logic
├── models/                     # Database schemas (backend)
├── routes/                     # API routes (backend)
├── middleware/                 # Auth & validation (backend)
├── server.js                   # Express server (backend)
├── package.json                # Dependencies
├── .env.example                # Environment template
└── README.md                   # Documentation
```

## Features Walkthrough

### Customer Site
1. **Browse Flavors** - View 8 signature ice cream flavors
2. **Filter & Search** - Find by category or flavor name
3. **Add to Cart** - Click any product to add to cart
4. **View Cart** - Side panel shows cart items and total
5. **Checkout** - Enter shipping info and payment method
6. **Order Confirmation** - Order saved to local storage

### Admin Dashboard
1. **Login** - Secure authentication with demo credentials
2. **Overview** - View key metrics and recent orders
3. **Products** - Add/edit/delete ice cream flavors
4. **Orders** - Manage order status (Pending → Delivered)
5. **Customers** - View customer order history
6. **Inventory** - Track stock levels

## Data Storage

Currently uses browser **localStorage** for demo purposes:
- Products catalog
- Shopping carts
- Orders
- Admin settings

Data persists until browser cache is cleared.

## Customization

### Change Colors
Edit `/public/css/styles.css` CSS variables:
```css
:root {
  --primary: #ff7aa2;        /* Main brand color */
  --secondary: #f7d8a9;      /* Accent color */
  --text: #171717;           /* Text color */
  /* ... more colors ... */
}
```

### Add New Products
Edit `/public/admin/dashboard.js` `defaultProducts` array:
```javascript
const defaultProducts = [
  {
    id: 'p1',
    name: 'Your Flavor',
    price: 10.50,
    // ... more fields
  }
];
```

### Change Business Info
Update footer in `/public/index.html`

## Deployment

### GitHub Pages (Current)
Already deployed! Visit:
https://saqibali17273sad-debug.github.io/ice-cream-website/

### Deploy Your Own Fork
1. Fork this repository
2. Go to repo settings → Pages
3. Select branch: `main`, folder: `/` (root)
4. Save
5. Your preview: `https://YOUR-USERNAME.github.io/ice-cream-website/`

### Upgrade to Full Backend
To add a Node.js backend with database:
1. Install dependencies: `npm install`
2. Configure MongoDB connection in `.env`
3. Start server: `npm run dev`
4. Deploy to Vercel, Render, or Railway

## Next Steps

- [ ] Add user accounts and authentication
- [ ] Connect to MongoDB database
- [ ] Implement Stripe payments
- [ ] Add order email notifications
- [ ] Build customer account dashboard
- [ ] Add image upload for products
- [ ] Implement search analytics
- [ ] Add review/rating system

## Contributing

Contributions are welcome! Fork the repo and submit a pull request.

## License

MIT License - See LICENSE file

## Contact

📧 Email: hello@sweetscoop.com  
📍 Location: Los Angeles, CA  
🕐 Hours: Mon-Fri 11am-10pm, Sat-Sun 10am-11pm

---

**Made with ❤️ for ice cream lovers everywhere** 🍦
