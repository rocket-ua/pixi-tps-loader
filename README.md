# PIXI-TPS-LOADER
Automatically downloads all the associated sprite sheets created with the TexturePacker multipack, just specify any one of the created sprite lists to load.
___
## How to use
To load sprite sheets, just connect the library to the project as follows:
```javascript
import * as PIXI from "pixi.js";
import "pixi-tps-loader";
```
Load any of the sprite sheets with the PIXI Loader. All related sprite sheets will be load automatically.
## For example
You have a lot of related sprite sheets
```javascript
game-1.json
game-2.json
game-3.json
...
game-N.json
```
Download one of them
```javascript
PIXI.Loader.shared.add("./assets/game-1.json");
PIXI.Loader.shared.load()
```
All other related linked sprite lists will be loaded automatically.
___
### Contacts
Telegram [@rocket_ua](https://t.me/rocket_ua)
