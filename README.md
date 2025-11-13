Evara is the early-stage MVP of a future full-scale event management platform.
Right now, the project includes **JWT authentication** and a **basic user dashboard after login**.
The goal is to gradually expand into vendor management, event planning, and AI-driven recommendations.

---

## **🚨 Current Project Status (What’s Actually Built)**

### ✅ **JWT Authentication**

* User signup (`/api/auth/signup`)
* User login (`/api/auth/login`)
* Password hashing (bcrypt)
* JWT token generation
* Protected routes using middleware
* Role support structure (future use)

### ✅ **Basic Dashboard After Login**

* Redirects to dashboard upon successful authentication
* Dashboard shows user info fetched from protected API
* Basic navigation layout created

### ❌ **Not Built Yet (Planned)**

* Vendor system
* Venue system
* Event booking
* Sorting / filtering logic
* Admin panel
* Payments
* AI integrations

---

## **🧱 System Architecture (Current MVP)**

```
Frontend → Backend (JWT Auth API) → Database
```

### **Frontend (Built)**

* React.js
* TailwindCSS

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

* Simple UI
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
| Frontend | React.js, TailwindCSS                      |
| Backend  | Node.js, Express.js                        |
| Auth     | JWT, bcrypt                                |
| DB       | PostgreSQL                                 |
| Hosting  | Vercel / Render                            |

---

## **🚀 Future Roadmap**

You haven't built these yet, but they are your planned next steps:

* Vendor & Venue CRUD
* Event booking system
* Search, sort, filter
* Pagination
* Admin dashboard
* Vendor dashboard
* Payment integration
* AI-based recommendations

---

## **📄 Installation & Setup**

### **Backend**

```bash
cd backend
npm install
npm run dev
```

### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

---


Frontend :- https://cap-3-evara.vercel.app/
backend :- https://cap-3-evara-1.onrender.com


