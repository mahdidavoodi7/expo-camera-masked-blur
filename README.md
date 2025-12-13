# Camera Mask Effect

https://github.com/user-attachments/assets/bd38e8e9-1fa2-45ac-a552-c1407895033a

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
