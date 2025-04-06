# Mobile App Boilerplate

A modern React Native mobile application boilerplate built with Expo SDK 52, featuring TypeScript, Tailwind CSS, shadcn/ui components, and Supabase integration.

## 🚀 Features

- ⚡️ Expo SDK 52
- 📱 React Native 0.76.9
- 🔄 Expo Router for navigation
- 🎨 Tailwind CSS with NativeWind
- 📦 shadcn/ui components
- 🔒 Supabase integration
- 📝 TypeScript support
- 🎯 Modern UI components with Radix UI
- 📸 Camera and Image Picker support
- 🔄 Reanimated animations

## 📋 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd android-expo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example` and add your Supabase credentials:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## 📱 Running the App

- **iOS**: Press `i` in the terminal or run `npm run ios`
- **Android**: Press `a` in the terminal or run `npm run android`
- **Web**: Press `w` in the terminal or run `npm run web`

## 🏗️ Project Structure

```
android-expo/
├── app/              # Expo Router app directory
├── assets/           # Static assets
├── components/       # Reusable components
├── lib/             # Utility functions and configurations
├── types/           # TypeScript type definitions
└── ...
```

## 🎨 Styling

This project uses Tailwind CSS with NativeWind for styling. The configuration can be found in `tailwind.config.js`.

## 🔧 Configuration

- `app.config.js` - Expo configuration
- `babel.config.js` - Babel configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 📚 Dependencies

Key dependencies include:
- Expo SDK 52
- React Native
- Expo Router
- NativeWind (Tailwind CSS)
- Supabase
- Radix UI components
- React Navigation
- Reanimated

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Expo team for the amazing framework
- Tailwind CSS team
- Supabase team
- shadcn/ui for the component inspiration
