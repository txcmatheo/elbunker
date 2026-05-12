# El Bunker Tracker

Pagina web para rastrear el estado de los participantes de **El Bunker**: vivos, muertos, avatares de Minecraft y estado de stream en Kick.

## Caracteristicas

- Lista de 40 participantes con numeracion continua.
- Panel admin para cambiar el estado: vivo o muerto.
- Busqueda por nombre, numero, usuario de Minecraft o usuario de Kick.
- Avatares de Minecraft con recorte directo desde textura oficial cuando hay UUID disponible.
- Contador de vivos, muertos, creadores y streams en Kick.
- Dia del evento calculado automaticamente del 12 al 17 de mayo.
- Diseno responsive para escritorio, tablet y celular.
- Assets oficiales del logo de El Bunker, Cheese Studio y favicon.

## Estructura

```txt
.
+-- assets/
|   +-- bunker-reference.jpg
|   +-- logo/
+-- index.html
+-- script.js
+-- server.js
+-- styles.css
+-- package.json
+-- README.md
```

## Uso Local

Necesitas Node.js 18 o superior.

```bash
npm start
```

Abre:

```txt
http://127.0.0.1:5500
```

Panel admin:

```txt
http://127.0.0.1:5500/admin
```

La clave por defecto es:

```txt
bunker-admin
```

Para cambiarla:

```powershell
$env:ADMIN_PASSWORD="TU_CLAVE"; npm start
```

Los estados se guardan en `data/status.json`, asi que la pagina publica muestra los cambios hechos desde `/admin`.

Para cambiar el puerto:

```bash
PORT=3000 npm start
```

En Windows PowerShell:

```powershell
$env:PORT="3000"; npm start
```

## Estado De Kick

El frontend intenta consultar:

```txt
/api/kick-live?channel=CANAL
```

El servidor incluye un proxy basico en `server.js`. Para la API oficial de Kick, configura un token:

```powershell
$env:KICK_ACCESS_TOKEN="TU_TOKEN"; npm start
```

Sin token, el servidor intenta un endpoint publico de Kick, pero puede responder bloqueado. En ese caso la UI muestra `Sin senal` en vez de inventar si el streamer esta en vivo.

## Editar Participantes

Los participantes estan en `script.js`, dentro del arreglo `creators`.

Ejemplo:

```js
{
  id: 14,
  name: "Pablots",
  minecraftName: "SoyPablots",
  minecraftUuid: "28cef8a8e41f4eb18cc878c5047c5558",
  skinTexture: "https://textures.minecraft.net/texture/...",
  kickName: "jpablots"
}
```

Campos utiles:

- `name`: nombre visible en la tarjeta.
- `minecraftName`: usuario de Minecraft para cargar avatar.
- `minecraftUuid`: UUID para servicios de avatar.
- `skinTexture`: textura oficial para recorte exacto de cara.
- `kickName`: canal de Kick, sin `https://kick.com/`.

## Verificacion

```bash
npm run check
```

## Creditos

Desarrollado por **CheeseStudio**.

Copyright (c) CheeseStudio 2026.
