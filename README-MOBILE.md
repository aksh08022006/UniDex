# CampusPerks Mobile App

This directory contains the React Native mobile application for CampusPerks.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Navigate to the mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (macOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

#### Android
```bash
npm run android
```

#### iOS (macOS only)
```bash
npm run ios
```

### Development

- Start the Metro bundler:
```bash
npm start
```

- Run on specific device:
```bash
npm run android -- --deviceId=<device_id>
npm run ios -- --simulator="iPhone 15"
```

## Project Structure

- `App.tsx` - Main application component with navigation
- `components/` - Reusable React Native components
- `screens/` - Individual screen components
- `navigation/` - Navigation configuration
- `styles/` - Shared styles and themes

## Next Steps

1. Set up proper React Native development environment
2. Migrate web components to React Native equivalents
3. Implement mobile-specific features (camera, push notifications)
4. Configure build processes for app stores
