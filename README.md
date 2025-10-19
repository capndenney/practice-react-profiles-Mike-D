# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Part 1: Creating the Components
### Set Up a Components Folder
○ Inside the src directory, create a folder named components.
### Create a ProfileCard.jsx File
○ Define a ProfileCard functional component that accepts props for
name, age, and bio.
○ Render the data dynamically using props.
### Create a ProfileContainer.jsx File
○ Create a ProfileContainer functional component.
○ Render multiple instances of ProfileCard with different data for each
profile.
### Export Components
○ Ensure that both ProfileCard and ProfileContainer are exported.
## Combining Components in App.jsx
### Import Components
○ Import ProfileContainer into App.jsx.
### Render the Container
○ Add ProfileContainer inside the App component.
## Styling
### Update App.css
○ Add basic styles to center the content, add spacing, and style each
card. For example:
■ Add a border and padding to each profile card.
■ Use flexbox or grid for alignment.
## Deliverable A functional React app with:
● A ProfileCard component that dynamically displays:
○ A user’s name.
○ Their age.
○ A short bio.
● A ProfileContainer component rendering multiple ProfileCard
components with different data.
## Example Output
When the app runs, you should see:
● A heading for the profile container (e.g., "User Profiles").
● Multiple styled profile cards displaying names, ages, and bios.