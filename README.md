# iPhone Web Slicing

Website ini merupakan hasil **slicing UI website iPhone (Apple style)** menggunakan **HTML, CSS, dan JavaScript (DOM)** dengan pendekatan **mobile-first responsive design** dan menggunakan **aos animation dari github**.

---
# Screenshot

<p align="center">
  <img src="Assets/windows.png" width="30%" align="top" />
  <img src="Assets/tablet.png" width="20%" align="top" />
  <img src="Assets/mobile.png" width="20%" align="top" />
</p>
---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3 (External)**
* **JavaScript (Vanilla DOM)**
* **Google Fonts – Poppins**
* **Font Awesome (CDN Icons)**
* **Aos Animation Github**

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
* 📌 Navbar toggle (JavaScript DOM)
* 🧭 Footer multi-column
* ⭐ Icon menggunakan Font Awesome

---

## ⚙️ JavaScript (Contoh DOM)

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
