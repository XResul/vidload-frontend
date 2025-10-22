# 🎬 VidLoad – YouTube Dashboard App (Next.js + Tailwind CSS)

VidLoad, kullanıcıların video içeriklerini modern bir arayüzde görüntüleyebileceği, dinamik ve tamamen responsive bir web uygulamasıdır.  
Next.js 14 ve Tailwind CSS kullanılarak geliştirilmiştir.

---

## 🚀 Özellikler

- ⚡ **Next.js 14 (App Router)** yapısı ile optimize edilmiş sayfa yükleme
- 🎨 **Tailwind CSS** ile tamamen responsive, modern tasarım
- 🧭 **Sidebar & Navbar** yapısı (dinamik genişleme / daraltma)
- 📺 **VideoCard bileşeni** – YouTube benzeri kart tasarımı
- 🧩 **Component tabanlı yapı** – kolay geliştirme ve ölçeklendirme
- 🌓 Gelecekte **AI destekli video öneri sistemi** (OpenAI API ile uyumlu altyapı)

---


## 🧱 Proje Yapısı



/app
├── components/
│ ├── Layout/
│ │ ├── Navbar.tsx
│ │ ├── Sidebar.tsx
│ │ └── NavItem.tsx
│ ├── Video/
│ │ └── VideoCard.tsx
│ └── ...
│
├── page.tsx # Ana sayfa (Video grid)
├── layout.tsx # Global layout (Navbar + Sidebar)


---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|-----------|
| **Next.js 14** | React tabanlı tam-stack framework |
| **Tailwind CSS** | Modern, utility-first CSS framework |
| **Lucide Icons** | Hafif ve sade SVG ikon seti |
| **TypeScript** | Tip güvenliği ve hata önleme |
| **Vercel** | Ücretsiz ve hızlı deploy ortamı |

---

## ⚙️ Kurulum ve Çalıştırma

### Depoyu klonla
```bash
git clone https://github.com/XResul/vidload.git
 

Gerekli paketleri yükle
npm install
# veya
yarn install

Build Alma (Production)
npm run build
npm start
