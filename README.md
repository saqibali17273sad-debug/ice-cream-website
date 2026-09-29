# 🍦 Ice Cream E-Commerce Website

**Professional ice cream ordering platform with admin management dashboard**

## Features

### Customer Portal
- Browse ice cream flavors with filters
- View detailed product information
- Add items to shopping cart
- Secure checkout process
- Order tracking
- User account management

### Admin Dashboard
- Product management (CRUD operations)
- Inventory management
- Order management and tracking
- Customer management
- Sales analytics & reports
- Admin authentication

### Technical Stack
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Authentication:** JWT
- **Security:** Helmet, CORS, bcryptjs
- **Payments:** Stripe integration ready

## Installation

### Prerequisites
- Node.js v14+
- MongoDB installed locally or Atlas account

### Setup

1. Clone and install:
```bash
git clone https://github.com/saqibali17273sad-debug/ice-cream-website.git
cd ice-cream-website
npm install
```

2. Configure environment:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start the server:
```bash
npm run dev
```

4. Access:
- **Website:** http://localhost:5000
- **Admin:** http://localhost:5000/admin

## API Endpoints

### Products
- `GET /api/products` - List all products
- `POST /api/products` - Add product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (admin)

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin-login` - Admin login

## Project Structure

```
ice-cream-website/
├── models/              # Database schemas
├── routes/              # API routes
├── controllers/         # Route handlers
├── middleware/          # Auth & validation
├── public/              # Frontend files
│   ├── index.html       # Customer website
│   ├── css/
│   ├── js/
│   └── admin/           # Admin dashboard
├── server.js            # Main server file
└── .env                 # Environment variables
```

## Contributing
Contributions welcome! Please create a feature branch and submit a pull request.

## License
MIT License - See LICENSE file for details
