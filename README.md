# Omega Petrotech - Corporate Website

เว็บไซต์องค์กร (Corporate Website) นำเสนอข้อมูลบริษัท แผนงานเชิงกลยุทธ์ (Strategic Roadmap) โครงสร้างการดำเนินงานโลจิสติกส์ และผลิตภัณฑ์พลังงาน พร้อมรองรับการแสดงผล 2 ภาษาแบบไร้รอยต่อ

## ✨ Features (จุดเด่นของโปรเจกต์)

* **Bilingual Support (i18n):** รองรับภาษาไทย (TH) และภาษาอังกฤษ (EN) พร้อมระบบสลับภาษาอัตโนมัติตาม URL (เช่น `/th/products`, `/en/products`)
* **Modern & Responsive UI:** ออกแบบและจัดสไตล์ด้วย **Tailwind CSS** เพื่อให้แสดงผลได้อย่างสวยงามในทุกขนาดหน้าจอ
* **Type-Safe:** พัฒนาด้วย **TypeScript** เพื่อลดข้อผิดพลาดในการเขียนโค้ดและช่วยให้บำรุงรักษาง่ายขึ้น
* **SEO Optimized:** ใช้ความสามารถของ Nuxt 3 ในการทำ Server-Side Rendering (SSR) เพื่อให้เป็นมิตรกับ Search Engine
* **Smooth Animations:** มีการใส่ Scroll Reveal และ Hover Effects เพื่อเพิ่มประสบการณ์ใช้งาน (UX) ที่ดี

## 🛠️ Tech Stack (เทคโนโลยีที่ใช้)

* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Internationalization:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/)
* **Icons:** Google Material Symbols

## 📂 Folder Structure (โครงสร้างไฟล์เบื้องต้น)
├── components/       # UI Components ต่างๆ ที่ใช้ซ้ำได้ (เช่น Card, Button)
├── layouts/          # โครงสร้างหน้าเว็บหลัก (เช่น Header, Footer)
├── pages/            # หน้าเว็บแต่ละหน้า (Home, Products, Contact ฯลฯ)
├── public/           # ไฟล์รูปภาพ (เช่น logo_w.png) และไฟล์ Static อื่นๆ
├── locales/          # ไฟล์แปลภาษา (en.json, th.json)
└── nuxt.config.ts    # ไฟล์ตั้งค่าหลักของ Nuxt และ Modules

# Omega Petrotech - Corporate Website

เว็บไซต์องค์กร (Corporate Website) นำเสนอข้อมูลบริษัท แผนงานเชิงกลยุทธ์ (Strategic Roadmap) โครงสร้างการดำเนินงานโลจิสติกส์ และผลิตภัณฑ์พลังงาน พร้อมรองรับการแสดงผล 2 ภาษาแบบไร้รอยต่อ

## ✨ Features (จุดเด่นของโปรเจกต์)

* **Bilingual Support (i18n):** รองรับภาษาไทย (TH) และภาษาอังกฤษ (EN) พร้อมระบบสลับภาษาอัตโนมัติตาม URL (เช่น `/th/products`, `/en/products`)
* **Modern & Responsive UI:** ออกแบบและจัดสไตล์ด้วย **Tailwind CSS** เพื่อให้แสดงผลได้อย่างสวยงามในทุกขนาดหน้าจอ
* **Type-Safe:** พัฒนาด้วย **TypeScript** เพื่อลดข้อผิดพลาดในการเขียนโค้ดและช่วยให้บำรุงรักษาง่ายขึ้น
* **SEO Optimized:** ใช้ความสามารถของ Nuxt 3 ในการทำ Server-Side Rendering (SSR) เพื่อให้เป็นมิตรกับ Search Engine
* **Smooth Animations:** มีการใส่ Scroll Reveal และ Hover Effects เพื่อเพิ่มประสบการณ์ใช้งาน (UX) ที่ดี

## 🛠️ Tech Stack (เทคโนโลยีที่ใช้)

* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Internationalization:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/)

---

## 🚀 Setup & Installation

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install

## Development Server
Start the development server on `http://localhost:3000`:
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev

## Production
Build the application for production:

# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build


Locally preview production build:

# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview