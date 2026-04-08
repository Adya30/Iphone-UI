# iPhone Web Slicing (Responsive)

Website ini merupakan hasil **slicing UI website iPhone (Apple style)** menggunakan **HTML, CSS, dan JavaScript (DOM)** dengan pendekatan **mobile-first responsive design**.

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3 (External)**
* **JavaScript (Vanilla DOM)**
* **Google Fonts – Poppins**
* **Font Awesome (CDN Icons)**

---

## 🎨 Fonts & Icons

### 🔤 Google Font (Poppins)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

---

### ⭐ Font Awesome

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

## 📱 Responsive Design

| Device               | Layout      |
| -------------------- | ----------- |
| 📱 Mobile            | 1 kolom     |
| 📱 Tablet (≥750px)   | 2 kolom     |
| 💻 Desktop (1000px) | Multi kolom |

---

## 📂 Folder Structure

```
📦 iphone-slicing
├── Assets/
│   └── banner/
|   └── brand/
|   └── faq/
|   └── hero/
|   └── img-slide/
|   └── nav/
├── public
│   └── styles.css
│   └── script.js
├── index.html
```

---

## ✨ Features

* 📱 Mobile-first responsive design
* 🍎 UI mirip Apple (clean & minimal)
* 📦 Card layout (flex & grid)
* 🖼️ Image handling (object-fit & object-position)
* 📌 Navbar toggle (JavaScript DOM)
* 🧭 Footer multi-column
* ⭐ Icon menggunakan Font Awesome

---

## ⚙️ JavaScript (DOM Example)

```javascript
function setupScroll(gridId, btnLeftId, btnRightId, scrollAmount = 200) {
    const grid = document.getElementById(gridId);
    const btnLeft = document.getElementById(btnLeftId);
    const btnRight = document.getElementById(btnRightId);

    if (!grid || !btnLeft || !btnRight) return;

    btnRight.addEventListener('click', () => {
        grid.scrollLeft += scrollAmount;
    });

    btnLeft.addEventListener('click', () => {
        grid.scrollLeft -= scrollAmount;
    });

    grid.addEventListener('scroll', () => {
        if (grid.scrollLeft > 0) {
            btnLeft.classList.add('visible');
        } else {
            btnLeft.classList.remove('visible');
        }

        if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 5) {
            btnRight.classList.remove('visible');
        } else {
            btnRight.classList.add('visible');
        }
    });
}
```
---

## 🎯 Purpose

Project ini dibuat untuk:

* Tugas slicing UI dari website real (Apple)
* Memahami responsive design
* Menggunakan Flexbox & Grid
* Mengelola layout modern tanpa framework

---

## 🚀 Deployment (GitHub Pages)

1. Masuk ke repo di GitHub
2. Klik **Settings**
3. Pilih **Pages**
4. Source: `main` branch
5. Klik **Save**
