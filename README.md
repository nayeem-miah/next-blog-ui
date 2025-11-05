
# 📝 Next.js Blog Project

A modern blog built with **Next.js 14 (App Router)**, featuring SSR, SSG, authentication with NextAuth, and dynamic data handling.

---

## 🚀 Setup

### 1. Clone & Install
```bash
git clone https://github.com/nayeem-miah/next-blog-ui.git
cd next-blog-ui
npm install
````

### 2. Run the Dev Server

```bash
npm run dev
```

---

## ⚙️ Core Concepts

### ✅ SSR (Server-Side Rendering)

* Fetches data on every request.
* Keeps data always up to date.

### ✅ SSG (Static Site Generation)

* Pre-generates pages at build time.
* Best for static content (blogs).

### ✅ generateStaticParams

* Pre-generates dynamic routes for blog posts.

### ✅ Metadata

* Improves SEO and social sharing.

### ✅ Server Actions

* Handle form submissions directly on the server.

### ✅ revalidateTag

* Refreshes cached data after mutations.

### ✅ Route Handler

* Create backend APIs inside your Next.js app.

---

## 🔐 Authentication (NextAuth)

### Steps:

1. `npm install next-auth`
2. Create `/src/app/api/[...nextauth]/route.ts`
3. Create `/src/helpers/authOptions.ts`
4. Add Google credentials from [Google Cloud Console](https://console.cloud.google.com/)
5. Use `useSession()`, `signIn()`, and `signOut()` for login/logout.
6. Protect routes using NextAuth middleware.

---

## 📦 Environment Variables

Create a `.env.local` file:

```
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_secret
```

---

## 💡 Features

* SSR & SSG rendering
* NextAuth authentication (Google)
* SEO-friendly metadata
* Dynamic routes using generateStaticParams
* Route Handlers (API endpoints)
* Automatic revalidation
* Server Actions (form submission on server)

## 🧩 Detailed Explanation next blog ui

### 🟢 1. **SSR (Server-Side Rendering)**

**SSR** means the HTML of a page is generated on the server for every request.

```tsx
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}
```

✅ **Use Case:** When data changes frequently and must always be up to date — e.g., dashboard, admin pages, or live data.

---

### 🟢 2. **SSG (Static Site Generation)**

**SSG** builds static HTML pages at build time, serving the same version to all users.

```tsx
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();
  return { props: { posts }, revalidate: 10 };
}
```

✅ **Use Case:** For pages with data that rarely changes — e.g., blog posts or documentation.

---

### 🟢 3. **generateStaticParams**

Used for **dynamic routes** (like `/blog/[slug]`) to pre-generate static paths during build time.

```tsx
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((res) => res.json());
  return posts.map((post: any) => ({ slug: post.slug }));
}
```

✅ **Use Case:** To statically generate each post page for faster loading and SEO.

---

### 🟢 4. **Metadata**

Used to add SEO-friendly titles, descriptions, and other meta information per page.

```tsx
export const metadata = {
  title: "Next.js Blog - Home",
  description: "A modern blog built with Next.js 14",
};
```

✅ **Use Case:** SEO optimization and better social sharing previews.

---

### 🟢 5. **Server Actions**

A **Server Action** is a feature in Next.js that allows you to handle form submissions or backend logic directly on the server — without writing a separate API route.

```tsx
"use server";

export async function submitForm(data: FormData) {
  const name = data.get("name");
  console.log("Server received:", name);
}
```

✅ **Use Case:** Simplifies form handling (no need for an API endpoint).

---

### 🟢 6. **revalidateTag**

`revalidateTag` allows you to manually revalidate cached data by a tag.

```tsx
import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("posts");
  return Response.json({ message: "Cache revalidated" });
}
```

✅ **Use Case:** When you update data (like adding a new post) and want to refresh pages using that data.

---

### 🟢 7. **Route Handler**

In Next.js App Router, you can create server-side APIs using route handlers.

**Example:**
`/src/app/api/posts/route.ts`

```tsx
import { NextResponse } from "next/server";

export async function GET() {
  const posts = [{ id: 1, title: "Hello Next.js" }];
  return NextResponse.json(posts);
}
```

✅ **Use Case:** Creating custom API routes inside your Next.js app.

---

### 🟢 8. **NextAuth (Authentication)**

#### Steps:

1. **Install NextAuth**

   ```bash
   npm install next-auth
   ```

2. **Create Auth Route**
   `/src/app/api/[...nextauth]/route.ts`

   ```tsx
   import NextAuth from "next-auth";
   import { authOptions } from "@/helpers/authOptions";

   const handler = NextAuth(authOptions);
   export { handler as GET, handler as POST };
   ```

3. **Create Helper**
   `/src/helpers/authOptions.ts`

   ```tsx
   import GoogleProvider from "next-auth/providers/google";

   export const authOptions = {
     providers: [
       GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
       }),
     ],
     secret: process.env.NEXTAUTH_SECRET,
   };
   ```

4. **Setup Google Login**

   * Go to [Google Cloud Console](https://console.cloud.google.com/)
   * Create a **new project**
   * Get **Client ID** and **Client Secret**
   * Add them to `.env.local`:

     ```
     GOOGLE_CLIENT_ID=your_client_id
     GOOGLE_CLIENT_SECRET=your_client_secret
     NEXTAUTH_SECRET=your_secret
     ```

5. **Session Handling**

   ```tsx
   import { getServerSession } from "next-auth";
   import { useSession, signIn, signOut } from "next-auth/react";
   ```

6. **Middleware**
   Add middleware for protected routes:

   ```tsx
   // /src/middleware.ts
   export { default } from "next-auth/middleware";

   export const config = {
     matcher: ["/dashboard/:path*"],
   };
   ```

✅ **Use Case:** Secure login system with Google and other providers.

