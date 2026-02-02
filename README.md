# MirageFlix 🎬

MirageFlix is a **performance-focused React application** designed to demonstrate how intentional optimizations can significantly improve user experience in data-heavy interfaces.

The project compares **baseline (slow)** and **optimized** implementations side by side using real-world movie data from the TMDB API.

> ⚠️ **Disclaimer**  
> MirageFlix is a **Netflix-inspired UI concept** created purely for educational and portfolio purposes.  
> It is **not affiliated with, endorsed by, or connected to Netflix** in any way.

---

## ✨ Key Highlights

- Dark-mode, streaming-style UI with custom brand theme
- Real-time search experience
- Cinematic hero banner with integrated search
- Multiple movie rows
- Intentional performance bottlenecks (baseline)
- Optimized rendering using modern React techniques
- Clean architecture for easy comparison and demos

---

## ⚡ Performance Showcase

MirageFlix intentionally includes **two parallel implementations** to highlight performance differences.

### 🐢 Slow (Baseline)

Demonstrates common real-world performance pitfalls:

- Filtering on every keystroke
- No memoization
- Uncontrolled re-renders
- Noticeable typing and interaction lag

### 🚀 Optimized

Applies targeted optimization strategies:

- Deferred input handling
- Memoized computations
- Controlled rendering
- Smooth typing and scrolling experience

You can switch via configuration (toggle provided for visibility).

📖 A detailed breakdown is available in  
[`docs/performance.md`](./docs/performance.md)

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Mantine UI**
- **Tailwind CSS**
- **TMDB API**
- **Tabler Icons**

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Add environment variables

```
Create a .env.local file in the project root:
```

### 3️⃣ Start the development server

```
npm run dev
```

The app will be available at http://localhost:5173 (default Vite port).

## Why MirageFlix?

This project was built to:

-Understand real-world React performance issues
-Practice optimization techniques used in production apps
-Create a portfolio project beyond basic CRUD demos

MirageFlix focuses on intentional slowness first, followed by measured optimizations, mirroring how performance problems are identified and solved in real applications.

### 🔍 Viewing Performance in React Profiler

MirageFlix can be analyzed using the React DevTools Profiler to visually observe render performance differences between the baseline and optimized implementations.

Steps:

1. Install React Developer Tools (Chrome / Edge).
2. Open the app in the browser.
3. Open DevTools → Profiler tab.
4. Click Record.
5. Interact with the app:
   - Type in the search bar
   - Switch between Slow and Optimized modes
6. Stop recording to inspect results.

What to observe:

- Number of render commits
- Render duration of ShowRow
- Clear contrast between slow and optimized behavior

> Note: React Profiler measures render performance, not API/network time.

## Future Improvements

- Virtualized rows for extremely large datasets
- Server-side pagination
- Image loading and caching optimizations

## 👤 Author

Built by **Kanchan Sontakke**  
Frontend Engineer • React Specialist
