# 🎗️ PH-Assignment-10 - Fund Raiser Campaign  

🚀 **New Live Link:** [Fund Raiser Campaign](https://ph-assignment-fund-raiser-project.surge.sh/)  
🔗 **Old Live Link:** [Previous Version](https://ph-assignment-fund-raiser-campaign.surge.sh/)  

<div align="center">
  <img height="300" src="https://i.ibb.co.com/MfHz8NH/Ph-A-10-Fund-Raiser-1.png" />
</div>

---

## 📖 Overview  

The **Fund Raiser Campaign** is an online platform designed to facilitate **financial contributions** for various causes like education, healthcare, disaster relief, and innovation. It provides a **secure, user-friendly** interface for campaign creation, donation tracking, and real-time updates. The system integrates **Firebase authentication, MongoDB CRUD operations**, and a fully responsive UI.  

---

## 🎯 Key Features  

✅ **User Authentication** – Firebase-based authentication for secure access.  
✅ **Campaign Management** – Users can create, update, and delete fundraising campaigns.  
✅ **Donation Collection** – Users can receive and track donations in real time.  
✅ **Responsive UI** – Fully optimized for desktop, tablet, and mobile users.  
✅ **Social Media Sharing** – Increase campaign reach through easy social sharing.  
✅ **Transparency & Reports** – Track how funds are utilized with detailed insights.  

---

## 📂 Table of Contents  

- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [API Environment Variables](#api-environment-variables)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  

---

## 🛠️ Installation  

### Prerequisites  
Ensure you have the following installed on your system:  

- **Node.js** (Latest LTS) → [Download](https://nodejs.org/)  
- **npm** (or **yarn**) → Installed with Node.js  
- **Git** → [Download](https://git-scm.com/)  

### Step 1: Clone the Repository  

```sh
git clone https://github.com/Rokon-Khan/ph-assignment-10.git
cd your-repo-folder
```

### Step 2: Install Dependencies  

Using **npm**:  

```sh
npm install
```

or using **yarn**:  

```sh
yarn install
```

---

## ⚙️ Configuration  

### 📄 Create a `.env.local` File  

Create a `.env.local` file in the **root** directory and add the following variables:  

```plaintext
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
VITE_API_URL=your_backend_api_url
```

**🔒 Important:** Do **not** commit the `.env.local` file to Git. Add it to `.gitignore` to keep your credentials secure.  

---

## 🚀 Usage  

### Step 3: Start the Development Server  

```sh
npm run dev
```

The application will be available at **http://localhost:5173/**.  

### Step 4: Build the Project  

To build the project for production:  

```sh
npm run build
```

To preview the production build:  

```sh
npm run preview
```

---

## 📦 Dependencies  

This project uses the following **npm packages**:  

- **React** – Frontend framework  
- **React Router** – Navigation and routing  
- **Firebase** – Authentication and database integration  
- **React Simple Typewriter** – Typing effect for UI  
- **React Awesome Reveal** – Beautiful animations  
- **React Icons** – Icon library for UI elements  
- **Hot Toast** – Notification system  
- **Swiper** – Modern slider component  

Install all dependencies with:  

```sh
npm install
```

---

## 🌍 API Environment Variables  

These are required for backend API communication and third-party integrations.  

| Variable Name               | Description                             |
|-----------------------------|-----------------------------------------|
| `VITE_apiKey`               | Firebase API Key                       |
| `VITE_authDomain`           | Firebase Auth Domain                   |
| `VITE_projectId`            | Firebase Project ID                    |
| `VITE_storageBucket`        | Firebase Storage Bucket                |
| `VITE_messagingSenderId`    | Firebase Messaging Sender ID           |
| `VITE_appId`                | Firebase App ID                        |
| `VITE_API_URL`              | Backend API Base URL                   |

---

## 🛠️ Troubleshooting  

### 1. **Port Already in Use Error**  

If you see `Error: Port 5173 is already in use`, stop the process using:  

```sh
npx kill-port 5173
```

Or specify another port in `package.json`:  

```json
"scripts": {
  "dev": "vite --port 3000"
}
```

### 2. **Backend Not Responding**  

Ensure the backend is running at the specified **`VITE_API_URL`**.  

```sh
cd backend
npm start
```

### 3. **Firebase Authentication Issues**  

- Verify **API keys** are correctly set in `.env.local`.  
- Check **Firebase console** for authentication setup.  
- Ensure **Google Sign-In and Email/Password authentication** are enabled.  

---

## 📜 License  

This project is licensed under the **MIT License**.  
