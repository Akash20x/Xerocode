# Project: Xerocode

- A landing page for Xerocode where user can join their exclusive waitlist for their upcoming product.
- This application is a feature-rich web platform designed to collect, store and update mail data from users.

#### Live Demo: https://akash-xerocode.vercel.app/

## Technologies used: 
* Next.js 13 
* NextAuth
* CSS Modules
* MongoDB Database
* Deployed on Vercel

## Features:
### 1. User Registration and Authentication:
   * Users can easily register and create an account by providing their email and setting a secure password.
   * Convenient email-based login for authenticated access.
   * Seamless integration with Google authentication for user convenience.
     
### 2. Join Waitlist via Email:
   * Users have the option to join the waitlist by providing their email address.
   * Joining the waitlist is accessible both for registered users and guests.

### 3. Admin
   * Admin can view a comprehensive list of all waitlist email addresses.
   * Check stats - total users and total waitlist emails
   * Test Credentials for admin:     
      - email: admin@gmail.com
      - Password: admin
      
### 4. User Management:
   * For registered users who have joined the waitlist, they can conveniently view
     and manage their waitlist email entries.

### 5. Search Functionality
   * Both users and admin can filter and find specific email entries within their respective
     waitlist tables in the dashboard.

     
### 6. Security
   * Password is hashed before storing in the MongoDB database using bcrypt.
   * Email validation

     
### 7. Dashboard
   * Users and admins can view waitlist data in the dashboard


## Getting Started

1. Clone the project: 

```bash
git clone https://github.com/Akash20x/Xerocode.git
```

2. Install the dependencies: 

```bash
npm install
```

3. Set up a MongoDB database and configure certain environment variables stored in a .env file in your project's root directory.

   
```bash
MONGO_URI
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
NEXTAUTH_SECRET
NEXTAUTH_URL
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

