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
![dashboard](https://github.com/ArnavMishra786/fullstack/blob/ae92540517fe2cd8fb9211ab07ed076ee4aade5e/exp5/my-app1/screnshot/dashboard.png)
![loading](https://github.com/ArnavMishra786/fullstack/blob/8803cc9bb30760f9e5b4f03abdaa2698c3fdf7c4/exp5/my-app1/screnshot/loading.png)
![router](https://github.com/ArnavMishra786/fullstack/blob/2eed53f15160c939ab0f44e9ce1b9169e548d337/exp5/my-app1/screnshot/router%20loading.png)
