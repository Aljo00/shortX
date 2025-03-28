# **ShortX - URL Shortener 🚀**  

ShortX is a **fast and efficient URL shortener** built with **Node.js, Express.js, and MongoDB**, following **Clean Architecture**. It allows users to shorten long links, create custom aliases, generate QR codes, and track link clicks.  

---

## **📌 Features**  
✅ **Shorten Any URL** – Convert long URLs into short, shareable links.  
✅ **Custom Short Links** – Choose your own short alias.  
✅ **QR Code Generation** – Generate QR codes for easy sharing.  
✅ **Click Tracking** – Monitor link usage.  
✅ **REST API Support** – Shorten URLs via API endpoints.  
✅ **Scalable & Secure** – Ensures efficient link management.  

---

## **⚙️ Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Frontend:** EJS, Bootstrap  
- **Short URL Generation:** NanoID / Custom Hashing  
- **Architecture:** Clean Architecture + Class-Based Functions  

---

## **🚀 Getting Started**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/shortx.git
cd shortx
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file and add:  
```sh
MONGO_URI=your_mongo_connection_string  
BASE_URL=http://localhost:5000  
```

### **4️⃣ Run the Application**  
```sh
npm start
```

---

## **📌 API Endpoints**  

| Method | Endpoint          | Description                  |
|--------|------------------|------------------------------|
| POST   | `/shorten`       | Create a short URL           |
| GET    | `/:shortCode`    | Redirect to the original URL |
| GET    | `/analytics/:id` | Get link click analytics     |

---

## **📌 Future Enhancements**  
🔹 **User Authentication** – Users can manage their links.  
🔹 **Link Expiry** – Set expiration dates for links.  
🔹 **Admin Dashboard** – Monitor short link performance.  

---

## **🔗 Live Demo**  
[Coming Soon]  

---

## **💻 Contributions & Issues**  
Feel free to **contribute** or report any **issues**! 🚀  

---
