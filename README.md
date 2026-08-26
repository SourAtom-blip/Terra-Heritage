# Beacon Land Holdings

Land investment marketing site and lead-capture backend, built with Next.js (App Router) and MongoDB. Deploys to Vercel with zero configuration beyond environment variables.

## Stack

- **Frontend:** Next.js 14 (App Router), React 18, Tailwind CSS — tokens matched to `DESIGN.md` (colors, typography, spacing, radii).
- **Backend:** Next.js Route Handlers (`app/api/leads/route.js`) acting as serverless API endpoints on Vercel.
- **Database:** MongoDB (via Mongoose) — stores land-seller lead submissions.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services / What We Do
- `/contact` — Contact (lead form)
- `/faq` — Frequently Asked Questions
- `/privacy-policy`, `/terms-of-service` — Legal

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in MONGODB_URI
npm run dev
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `MONGODB_URI` | Yes | MongoDB Atlas connection string. Leads cannot be saved without it. |
| `ADMIN_API_KEY` | No | If set, enables `GET /api/leads` (with `Authorization: Bearer <key>`) to list submitted leads. |

### Setting up MongoDB Atlas

1. Create a free cluster at https://www.mongodb.com/cloud/atlas.
2. Create a database user and allow network access (or `0.0.0.0/0` for Vercel's dynamic IPs).
3. Copy the connection string, replace `<password>`, and set it as `MONGODB_URI`.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel — it will auto-detect Next.js, no build settings needed.
3. In Project Settings → Environment Variables, add `MONGODB_URI` (and optionally `ADMIN_API_KEY`).
4. Deploy.

## API

### `POST /api/leads`

Accepts a JSON body with `firstName`, `lastName`, `email`, `propertyAddress`, `acreage` (required) and `phone`, `apn`, `reason`, `details` (optional). Returns `201` on success, `400` on validation errors, `500` on database errors.

### `GET /api/leads`

Requires `Authorization: Bearer <ADMIN_API_KEY>`. Returns all stored leads, newest first.
