mkdir ShopNest
cd ShopNest

# إنشاء مجلدين رئيسيين

mkdir backend frontend

# الدخول إلى مجلد الباك إند

cd backend

# ملفات أساسية

touch server.js
touch .env
touch .gitignore

# إعدادات الاتصال بقاعدة البيانات

mkdir config
touch config/db.js

# الموديلات

mkdir models
touch models/User.js
touch models/Product.js
touch models/Order.js

# الكنترولر

mkdir controllers
touch controllers/authController.js
touch controllers/userController.js
touch controllers/productController.js
touch controllers/orderController.js

# الراوتر

mkdir routes
touch routes/authRoutes.js
touch routes/userRoutes.js
touch routes/productRoutes.js
touch routes/orderRoutes.js

# ميدل وير للحماية والأدوار

mkdir middleware
touch middleware/authMiddleware.js
touch middleware/roleMiddleware.js

# الأدوات المساعدة

mkdir utils
touch utils/generateToken.js
touch utils/validators.js
touch utils/hashing.js
touch utils/jwt.js

# 🛒 ShopNest Backend

## 📦 Backend Dependencies

```bash
npm init -y

# تثبيت الحزم الأساسية (dependencies)
npm install express dotenv cors mongoose helmet morgan bcryptjs jsonwebtoken cookie-parser express-validator

# تثبيت أدوات التطوير (devDependencies)
npm install -D nodemon eslint
```
