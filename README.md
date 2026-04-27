# Chrome Extension

# Leads Tracker Chrome Extension 🚀

A Chrome Extension designed to track and manage leads in real-time. This project was migrated from a basic frontend script to a modern development workflow using **Vite** and **Firebase**.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Build Tool:** [Vite](https://vitejs.dev/) with [@crxjs/vite-plugin](https://crxjs.dev/)
- **Database:** [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
- **Security:** Environment Variables (.env) to protect sensitive API keys.

## ✨ Key Features
- **Real-time Sync:** Leads are saved and retrieved instantly using Firebase `onValue` listeners.
- **Manifest V3:** Fully compliant with the latest Chrome Extension standards.
- **Optimized Build:** Uses Vite for Hot Module Replacement (HMR) during development and minified assets for production.
- **Secure Configuration:** Implements a `.env` strategy to keep database credentials out of version control.

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- A Firebase project with Realtime Database enabled

### Installation
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/leads-tracker-extension.git](https://github.com/your-username/leads-tracker-extension.git)
   cd leads-tracker-extension