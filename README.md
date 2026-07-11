# Camera Mask Effect

Your camera feed as a living background, shining through the UI itself. The text and
avatars are cutouts, and the world moves behind them.

A free drop from **Motionary**. The whole flock lives at **https://motionary.dev**.

https://github.com/user-attachments/assets/bd38e8e9-1fa2-45ac-a552-c1407895033a

## How it works

`expo-camera` renders the live feed at the very back, and
`@react-native-masked-view/masked-view` flips the usual layering: the user list isn't
drawn on top of the camera, it IS the mask, so the feed only shows through the glyphs
and avatars. `expo-blur` frosts everything outside the cutouts, and a small hook
(`hooks/useCamera.ts`) handles the permission dance so a denial gets a proper screen
instead of a crash.

## Use it

Run the whole demo:

```sh
npm install
npx expo run:ios
```

Or steal just the effect: copy `components/` and `hooks/useCamera.ts` into your project
and install the peer deps (`expo-camera`, `expo-blur`,
`@react-native-masked-view/masked-view`). That's it, it's built to be stolen from.

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

## Want the rest?

The paid catalog is at
[motionary.dev](https://motionary.dev?utm_source=github&utm_medium=readme&utm_campaign=free_drop):
the ChatGPT attachments menu, Apple Music lyrics, Flip Calendar, and every drop that
comes next. Single drops around $10, or the Lifetime All-Access pass: one payment,
every drop, every future drop.

## Want a drop that doesn't exist yet?

Open an issue and describe the interaction. The most-requested ones get built.

## License

MIT. Use it in anything, ship it, sell your app, no strings. If it saves you a day, a
star helps other devs find this. 🐦‍⬛

Built by [@mehdi_made](https://x.com/mehdi_made)
