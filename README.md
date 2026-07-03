# 3D T-Rex Run

3D browser runner built with Three.js. Dodge cactus, jump over obstacles, duck under birds, and keep your score climbing as the pace increases.

Live demo: https://3d-trex.vercel.app/

## Run

Use the local dev server:

```powershell
node dev-server.cjs
```

Open:

```text
http://127.0.0.1:4173/
```

## Controls

- `Space` or left click: jump
- `ArrowDown` or right click: duck / fast drop
- `R`: restart
- Tap buttons on mobile: jump / duck
- Tap the 3D sign to start or restart

## Main Files

- [`index.html`](./index.html): game, UI, and Three.js scene
- [`assets/tyrannosaurus_rex.glb`](./assets/tyrannosaurus_rex.glb): dinosaur model
- [`dev-server.cjs`](./dev-server.cjs): tiny local static server

## Notes

- Score and best score are stored in `localStorage`.
- The game uses Web Audio for simple effects and browser font loading for the UI and 3D menu sign.
