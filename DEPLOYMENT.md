# Deployment checklist

## Before publishing

1. Replace the placeholder URLs in `app/page.tsx`:
   - LinkedIn
   - GitHub
   - Instagram
   - Email
2. Replace the GitHub links on the case-study page with the actual repository URL.
3. Add a profile photo only if you decide it improves the brand direction.
4. Add your final domain and metadata in `app/layout.tsx`.

## Suggested first deployment

Use Vercel for the first public iteration. The application is a standard Next.js App Router project.

## Later DevOps deployment

A second deployment path can package the site as a container and run it through your existing AWS/EKS + GitOps learning environment as an additional portfolio demonstration.
