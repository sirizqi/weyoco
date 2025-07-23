# 📦 Campaign CRUD API

A simple and scalable REST API built with **Node.js**, **Express.js**, and **MongoDB Atlas** to manage marketing campaign posts. Ideal for backend systems of marketing platforms or campaign managers.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete campaigns
- 🧠 MongoDB Atlas for cloud-ready scalability
- ⚙️ RESTful structure with clean MVC pattern
- 🔐 Environment config using `.env`
- 📂 Organized folder structure

---

## 📁 Folder Structure
campaign-crud-api/
├── controllers/ # API logic
├── models/ # Mongoose schemas
├── routes/ # API endpoints
├── app.js # App entry point
├── .env # Environment secrets (excluded from git)
├── .gitignore
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/campaign-crud-api.git
cd campaign-crud-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a .env file in the root directory:
```bash
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/campaignDB?retryWrites=true&w=majority
PORT=5000
```

### 4. Run the App
```bash
npm run dev
```

📬 API Endpoints
Method|Endpoint|Description
GET|/api/campaigns|Get all campaigns
GET|/api/campaigns/:id|Get campaign by ID
POST|/api/campaigns|Create a new campaign
PUT|/api/campaigns/:id|Update a campaign
DELETE|/api/campaigns/:id|Delete a campaign

Sample POST request body:

```json
{
  "title": "This is Campaign",
  "objective": "Increase awareness and collect leads",
  "status": "draft",
  "startDate": "2025-08-01",
  "endDate": "2025-08-31"
}
```

🧠 AI Usage Disclosure
This project includes code generated using ChatGPT and GitHub Copilot for scaffolding purposes. All code has been manually reviewed, optimized, and structured for clarity and production-readiness.

📃 License
None

👨‍💻 Author
Made with ❤️ by siRizqi
