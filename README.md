# Mofucat
Mofucat-Discord-Community

## Website

A modern, responsive website for the Mofucat Discord Community.

### Features
- Homepage with community highlights
- About page describing the community
- Contact page for inquiries
- Responsive design for all devices
- Discord-themed color scheme

### Local Development

To run the website locally:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080
```

Then visit `http://localhost:8080` in your browser.

### Deployment to Netlify

#### Option 1: Connect Git Repository
1. Log in to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select this repository
4. Netlify will automatically detect the `netlify.toml` configuration
5. Click "Deploy site"

#### Option 2: Drag and Drop
1. Log in to [Netlify](https://www.netlify.com/)
2. Go to the Sites page
3. Drag and drop the repository folder into the deploy area
4. Your site will be deployed instantly

#### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Configuration

The `netlify.toml` file includes:
- Build settings (publish directory set to root)
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- 404 redirect handling

### Project Structure
```
.
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── netlify.toml        # Netlify configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```
