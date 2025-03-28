# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Sections for projects, resume, and contact information
- Social media integration
- Built with React and Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

1. Update personal information in the components:
   - `src/components/Home.js`: Update your name, title, and skills
   - `src/components/Footer.js`: Update contact information and social media links
   - `src/components/Navbar.js`: Update your name in the navigation bar

2. Add your projects:
   - Create project cards in the Projects section
   - Add project images and descriptions
   - Link to project repositories or live demos

3. Add your resume:
   - Create a PDF version of your resume
   - Add it to the public folder
   - Update the resume link in the Resume component

4. Customize the styling:
   - Modify the Tailwind configuration in `tailwind.config.js`
   - Update the color scheme and other design elements
   - Add custom CSS in `src/index.css`

## Deployment

The site can be deployed to various platforms:

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy the `build` folder to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Technologies Used

- React
- React Router
- Tailwind CSS
- Framer Motion
- PostCSS
- Autoprefixer

## License

This project is licensed under the MIT License - see the LICENSE file for details.
