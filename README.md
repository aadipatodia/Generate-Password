---

# 🔐 Generate-Password

A cross-platform mobile application built with React Native that allows users to generate secure, customizable passwords based on their preferences. Simply choose the desired length and character types, and the app will instantly create a strong password for you.

---

## 📱 Features

- ✅ Generate passwords of any length
- 🔤 Choose character types:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Numbers (0–9)
  - Special characters (!@#$%^&*)
- 🔁 Regenerate passwords with one tap
- 🎨 Clean and intuitive UI
- 📱 Compatible with both Android and iOS

---

## 🖼️ Screenshots

| Home Screen | Password Generated | Options |
|-------------|-------------------|---------|
| ![Home](screenshots/home.png) | ![Generated](screenshots/generated.png) | ![Options](screenshots/options.png) |

> 📌 Place your screenshots in a `screenshots/` folder inside the project root.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or npm
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Xcode (for iOS) or Android Studio (for Android)

### Installation

```bash
git clone https://github.com/aadipatodia/Generate-Password.git
cd Generate-Password
yarn install
```
---

## 📲 Running the App

### iOS
```bash
npx pod-install
npx react-native run-ios
```

### Android
```bash
npx react-native run-android
```

###📁 Project Structure
Generate-Password/
├── android/               # Android native files
├── ios/                   # iOS native files
├── __tests__/             # Unit tests
├── App.tsx                # Main app component
├── index.js               # Entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── ...                    # Other config files


---

## 🛠️ Technologies Used

| Technology     | Purpose                      |
|----------------|------------------------------|
| React Native   | Cross-platform mobile app    |
| TypeScript     | Type safety and tooling      |
| Kotlin         | Android native integration   |
| Objective-C    | iOS native integration       |
| Ruby           | Used in bundler config       |
| Jest           | Testing framework            |

---

## 📌 To-Do

- [ ] Add password strength indicator  
- [ ] Save generated passwords locally  
- [ ] Add dark mode support  
- [ ] Improve accessibility  

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add YourFeature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a pull request  

---

## 📄 License

This project is currently **not licensed**. Please contact the repository owner for usage rights.

---

## 🙋‍♂️ Author

Developed by [aadipatodia](https://github.com/aadipatodia)

---

