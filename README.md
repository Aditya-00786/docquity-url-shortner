# 🔗 Docquity URL Shortener

A scalable, privacy-compliant URL shortening service built using **Node.js**, **Express**, **MongoDB**, **Redis**, and **Next.js**. Designed for high performance with sub-100ms redirection latency, robust analytics, and deep linking support for mobile apps.

---

## 🚀 Features

- ⚡ **Fast Redirection** – Cache-first lookups via Redis for ultra-low latency
- 📊 **Analytics Tracking** – Time-series event logging with privacy safeguards
- 🔐 **Privacy-First** – GDPR/CCPA compliance with SHA-256 IP hashing & salt rotation
- 📱 **Universal App Linking** – iOS/Android deep linking support
- 📦 **Scalable Architecture** – Stateless backend, sharded DB, and optional auto-scaling
- 🧩 **Custom Aliases** – User-defined short URLs (e.g., `sho.rt/your-brand`)
- 🔁 **Post-install Redirection** – IP-based ephemeral mappings

---

## 🧱 Tech Stack

| Layer     | Tech                                |
|-----------|-------------------------------------|
| Frontend  | React / Next.js                     |
| Backend   | Node.js, Express                    |
| Database  | MongoDB, PostgreSQL/MySQL, Redis    |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya-00786/docquity-url-shortner.git
cd docquity-url-shortener