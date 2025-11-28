# Portfolio

A modern, responsive personal portfolio website built with React, showcasing projects, skills, and professional information.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth animations
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Multi-page Navigation**: Home, Projects, Contact, and Blog sections
- **Contact Form**: Integrated contact functionality using EmailJS
- **Project Showcase**: Dedicated section to display personal projects with images
- **Tech Stack Display**: Visual representation of technical skills
- **Blog Integration**: Space for sharing thoughts and insights

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React, React Icons
- **Email Service**: EmailJS
- **Development**: ESLint for code linting

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
Portfolio/
├── public/
│   ├── icons/          # Favicon and logo
│   ├── logo/           # Technology logos
│   └── project-images/ # Project screenshots
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── pages/          # Main page components
│   │   └── blogs/      # Blog-related components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── eslint.config.js    # ESLint configuration
```

## Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue or submit a pull request.


