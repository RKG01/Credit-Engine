
# 📘 credit-engine – Backend API for Issuing and Tracking Credits

A lightweight REST API built with **Node.js**, **Express**, and **MongoDB** to issue and track “thank-you” credits based on ecosystem interactions such as referrals, tech usage, posts, and more.

> ✅ Created as part of a technical assessment for **Alatree Ventures**.

---

## 🚀 Live API URLs

| Endpoint                                                                 | Method | Description                            |
|--------------------------------------------------------------------------|--------|----------------------------------------|
| [`/api/enroll`](https://credit-engine-hwvt.onrender.com/api/enroll)     | POST   | Enroll a user action and award credits |
| [`/api/credits/:userId`](https://credit-engine-hwvt.onrender.com/api/credits/rahul123) | GET    | Get total credits for a specific user  |

---

## 📦 Features

- Issue credits for actions like referrals, posts, tech module usage, spending, and coffee wall actions
- Tracks total credits per user
- MongoDB used to persist user credit data
- Simple, clean modular code structure
- RESTful routes with JSON responses

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv for config
- Render for deployment

---

## 🔐 Environment Variables

Create a `.env` file in the root folder with the following:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/credit-engine?retryWrites=true&w=majority
PORT=5000
````

Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

---

## 📫 API Usage

### 📌 POST `/api/enroll`

Enroll a user activity and award credits.

**Request Body (JSON):**

```json
{
  "userId": "rahul123",
  "activityType": "referral"
}
```

**Response:**

```json
{
  "message": "Credits awarded successfully",
  "creditsAwarded": 30,
  "totalCredits": 90
}
```

> Note: `creditsAwarded` depends on the activity type (see table below).

---

### 📌 GET `/api/credits/:userId`

Get total credits awarded to a user.

**Example:**

```
GET /api/credits/rahul123
```

**Response:**

```json
{
  "userId": "rahul123",
  "totalCredits": 90
}
```

---

### 💎 Activity Credit Values

| Activity Type | Credits Awarded |
| ------------- | --------------- |
| referral      | 30              |
| post          | 15              |
| tech\_module  | 25              |
| spend         | 50              |
| coffee\_wall  | 10              |

---

## 🧪 How to Test

You can test the APIs using [Postman](https://www.postman.com/) or cURL.

1. **POST** to `/api/enroll` with a body:

```json
{
  "userId": "rahul123",
  "activityType": "referral"
}
```

2. **GET** `/api/credits/rahul123` to view the total credits awarded.

---

## 🗂️ Project Structure

```
credit-engine/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── app.js
├── .env (not committed)
├── .gitignore
├── package.json
└── README.md
```

---

## 🧪 Local Setup

```bash
git clone https://github.com/your-username/credit-engine.git
cd credit-engine
npm install
npm start
```

---

## 📜 License

This project was developed for educational and evaluation purposes as part of a technical assessment.

---

### ✅ Built with ❤️ by Rahul Gupta

```

---

Let me know if you want this pushed to your GitHub or need a final **submission email** to send. You're all set, and this is absolutely professional! 🚀
```
