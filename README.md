# Rolya
A simple mock demo real-estate front-end landing page website.

## DISCLAIMER:
This is a demo website created for presentation purposes only and does not represent a real business.

## To run this project:
1. Clone this repository `git clone https://github.com/khianvictorycalderon/Rolya.git`
2. Run `npm install`
3. Run `npm run dev`

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install tailwindcss @tailwindcss/vite`
- `npm install -D @types/node`
- `npm install -D gh-pages`

## Configuration Dependencies
- Update `vite.config.ts`:
  ```
  import tailwindcss from '@tailwindcss/vite'

  plugins: [
    tailwindcss()
  ]
  ```
- Update `package.json`:
  ```
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
  ```