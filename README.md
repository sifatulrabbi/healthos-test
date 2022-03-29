# HealthOS Test

Home page: https://healthos-test.vercel.app  
_**Author**: Md Sifatul Islam Rabbi_

## available routes:

- /login
- /register
- / (if not logged in user will be redirected to /login)
- /orders
  - /orders/:id (directly accessing the route will cause the app to crash)
- /account
- /manage
- /products

## Total completion time

14h 48m _(active development time)_

## Libraries

- `javascript`
- `react`
- `recoil.js` (for state management. minimal and React-ish)
- `react-router-dom` (for managing single page app routes)
- `tailwindCSS`, `postcss`, `autoprefixer` (utility-first CSS framework to speed up dev time)
- `axios` (for http requests)
- `prettier` (for code formatting)

**Backend**: Using `jsonplaceholder` to server mock data. The page data is stored inside `db.json`

## Files/directories

`./src/atoms` Contains all the atoms of Recoil.js  
`./src/components` Contains lower level components/single components of the UI  
`./src/features` Contains all the mid level components (sections) of the UI except page/higher level components  
`./src/hooks` Contains custom hooks  
`./src/pages` Contains page components or higher level components  
`./src/utils` Contains helpers and common functions  
`./src/App.jsx` Contains the `react-router-dom` routings and the pages  
`./src/index.js` Contains the `RecoilRoot` and `BrowserRouter`, highest level component
