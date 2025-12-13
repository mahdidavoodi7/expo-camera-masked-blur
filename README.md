# Camera Mask Effect
<video src="https://github.com/mahdidavoodi7/expo-camera-masked-blur/video.mp4" controls loop muted width="720">Your browser does not support the video tag.</video>

A React Native app that uses your camera feed as a dynamic background behind a frosted glass UI. The text and user list act as a mask, revealing the live camera through them.

## What it does

- Shows a list of users with a blurred camera background
- The UI elements (text, avatars) act as cutouts showing the camera feed
- Handles camera permissions gracefully

## Tech

- Expo Camera
- Expo Blur
- React Native Masked View

## Run it

```sh
npm install
npx expo run:ios
```

## Structure

```
hooks/useCamera.ts      # Camera permission hook
components/
  Camera.tsx            # Main camera view
  MaskContent.tsx       # The masked UI overlay
  UserRow.tsx           # User list item
  PermissionState.tsx   # Permission request screens
constants/camera.ts     # Config values
utils/user.ts           # Random user generation
```

## License

MIT
