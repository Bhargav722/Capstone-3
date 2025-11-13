# Vercel Deployment Guide

This guide explains how to deploy the Evara frontend to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Vercel CLI installed (optional): `npm i -g vercel`
3. Your backend API URL

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Select the `frontend/vite` directory as the root directory

3. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.com`
   - For production, use your deployed backend URL
   - Example: `https://cap-3-evara-1.onrender.com`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend/vite
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```

5. **Set Environment Variables**
   ```bash
   vercel env add VITE_API_URL
   # Enter your backend URL when prompted
   ```

6. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://cap-3-evara-1.onrender.com` |

**Important:** 
- Environment variables must be set in Vercel dashboard
- After adding/changing env vars, redeploy the application
- Use different values for Preview and Production environments if needed

## Vercel Configuration

The `vercel.json` file includes:

- **Build Configuration**: Automatically detects Vite framework
- **SPA Routing**: All routes redirect to `index.html` for client-side routing
- **Caching**: Static assets are cached for 1 year
- **Security Headers**: XSS protection, frame options, content type options

## Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificate

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify build command: `npm run build`
- Check build logs in Vercel dashboard

### API Calls Not Working
- Verify `VITE_API_URL` is set correctly in environment variables
- Check CORS settings on your backend
- Ensure backend URL is accessible from the internet

### Routing Issues
- The `vercel.json` rewrites should handle all routes
- If routes don't work, check that rewrites are configured correctly

### Environment Variables Not Working
- Make sure variable name starts with `VITE_`
- Redeploy after adding/changing environment variables
- Check that variables are set for the correct environment (Production/Preview)

## Continuous Deployment

Vercel automatically deploys on every push to your main branch:
- Push to `main` → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment with PR link

## Performance

Vercel automatically:
- Optimizes images
- Minifies JavaScript and CSS
- Enables CDN caching
- Provides edge network distribution

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)

