## Description
A minimalist NestJS application to test Docker
## Installation the app

```bash
$ npm install
```

Installation required :
- package-lock.json
- package.json
- tsconfig.build.json
- src/

## Running the app

```bash
$ npm run start
```

## Configuration
Configuration with environnement variables

| Name         | Description                        | Defaut | 
|---           |---                                 |---     |
| `PORT`       | Port of the application            | `3000` |
| `LOCALE`     | Define the language                | `en`   |
| `DATA_FOLDER`| Folder where visits will be stored | `data` |