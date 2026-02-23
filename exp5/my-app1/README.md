# 🚀 Experiment 5 – Lazy Loading in React (Vite)

## 📌 Objective
To implement Lazy Loading in React using `React.lazy()` and `Suspense` to improve performance and enable code splitting.

---

## 🛠 Technologies Used
- React
- Vite
- JavaScript (ES6)
- React.lazy()
- Suspense

---

## 📂 Project Structure

src/
├── components/
│ ├── Heading.jsx
│ ├── MyProfile.jsx
│ ├── Projects.jsx
│ └── Skills.jsx
└── App.jsx


---

## ⚙️ Implementation Details

- Components are loaded dynamically using:
  ```js
  const MyProfile = lazy(() => import("./components/MyProfile"));

 ![dashboard](exp5\my-app1\screnshot\dashboard.png)
![loading](exp5\my-app1\screnshot\loading.png)
![router](exp5\my-app1\screnshot\router loading.png)