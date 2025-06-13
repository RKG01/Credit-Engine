
## 📘 credit-engine – Backend API for Issuing and Tracking Credits

A lightweight REST API built with **Node.js**, **Express**, and **MongoDB** to issue and track “thank-you” credits based on ecosystem interactions.

> ✅ Created as part of a technical assessment for Alatree Ventures.

---

## 🚀 Live API URLs

| Endpoint                                                  | Method | Description                            |
| --------------------------------------------------------- | ------ | -------------------------------------- |
| [`/api/enroll`](https://credit-engine-hwvt.onrender.com/api/enroll) | `POST` | Enroll a user action and award credits |
| `/api/credits/:userId`                                    | `GET`  | Get total credits for a specific user  |

Replace `https://your-app.onrender.com` with your actual Render URL.

---

## 📦 Features

* Issue credits for actions like referrals, tech usage, posts, etc.
* Tracks total credits per user
* MongoDB used to persist user credit data
* Simple, clean modular code structure
* RESTful routes with JSON responses

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (via Mongoose)
* dotenv for config
* Render for deployment

---

## 🔐 Environment Variables

Create a `.env` file in the root folder with the following:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/credit-engine?retryWrites=true&w=majority
PORT=5000
```

Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

---

## 📫 API Usage

### 📌 POST `/api/enroll`

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
  "creditsAwarded": 20,
  "totalCredits": 60
}
```

---

### 📌 GET `/api/credits/:userId`

**Example:** `/api/credits/rahul123`

**Response:**

```json
{
  "userId": "rahul123",
  "totalCredits": 60
}
```

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
npm run start
```





### 💎 Activity Credit Values

| Activity Type  | Credits Awarded |
|----------------|------------------|
| referral       | 30               |
| post           | 15               |
| tech_module    | 25               |
| spend          | 50               |
| coffee_wall    | 10               |

