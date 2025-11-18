FinTrack is the early-stage MVP of a future full-scale personal finance platform.  
Right now, the project includes **JWT authentication** and a **lightweight dashboard** that appears after a successful sign-in.

---

## **🚨 Current Project Status (What’s Actually Built)**

### ✅ **JWT Authentication**

* User signup (`/api/auth/signup`)
* User login (`/api/auth/login`)
* Password hashing (bcrypt)
* JWT token generation
* Protected routes using middleware
* Role support scaffolding (not yet exposed)

### ✅ **Basic Dashboard After Login**

* Redirects to dashboard upon successful authentication
* Dashboard shows user info fetched from protected API
* Placeholder widgets for budgeting/insights

### ❌ **Not Built Yet (Planned)**

* Budget + category management
* Expense & income timelines
* Insights/AI-driven nudges
* Savings goals & automation
* Multi-profile support
* Payment integrations

---

## **🧱 System Architecture (Current MVP)**

```
Frontend → Backend (JWT Auth API) → Database
```

### **Frontend (Built)**

* React + Vite
* Vanilla CSS (custom themes)

### **Backend (Built)**

* Node.js
* Express.js
* JWT Authentication
* Basic protected route logic

### **Database**

* PostgreSQL 

---

## **⚙️ Features (MVP)**

### **🔐 Authentication**

* Signup with email + password
* Login with JWT
* Token stored securely in frontend
* Middleware checks `Authorization` header
* Access to dashboard only with valid token

### **📌 Dashboard**

* Simple UI shell
* Fetches user profile from backend
* Only accessible after authentication

---

## **📡 API Routes (Current Implementation)**

### **Auth**

| Endpoint           | Method | Description         | Access |
| ------------------ | ------ | ------------------- | ------ |
| `/api/auth/signup` | POST   | Register new user   | Public |
| `/api/auth/login`  | POST   | Login + receive JWT | Public |

### **Protected Example Route**

| Endpoint            | Method | Description                      | Access    |
| ------------------- | ------ | -------------------------------- | --------- |
| `/api/user/profile` | GET    | Returns user info if token valid | Protected |

---

## **🧰 Tech Stack**

| Layer    | Tech                                       |
| -------- | ------------------------------------------ |
| Frontend | React (Vite), Vanilla CSS                  |
| Backend  | Node.js, Express.js                        |
| Auth     | JWT, bcrypt                                |
| DB       | PostgreSQL                                 |
| Hosting  | Vercel / Render                            |

---

## **🚀 Future Roadmap**

Prioritized upgrades for a fuller FinTrack experience:

* Budget + goal creation flows
* Category-based analytics and trends
* Recurring reminders for bills/savings
* Import/export (CSV, Plaid, etc.)
* Admin tooling & audit logs
* AI-driven recommendations

---

## **📄 Installation & Setup**

### **Backend**

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in `backend/` before starting the server:

```
DATABASE_URL="postgresql://neondb_owner:***@ep-fancy-violet-a451g6ba-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
SECRET_KEY="replace-with-a-strong-random-string"
```

The `DATABASE_URL` above is already configured for Neon; feel free to swap it with your own Neon connection string. `SECRET_KEY` powers JWT signing—keep it private and change it in production.

### **Frontend**

```bash
cd frontend/vite
npm install
npm run dev
```

---

Frontend: https://fintrack-app.vercel.app/  
Backend: https://fintrack-api.onrender.com
