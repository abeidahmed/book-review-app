# #100DaysOfCode

### Book review app

During the days to come, I'll make it an effort to write some lines of code everyday. So here it is, my attempt to code for the coming 100 days.

#### About the app

The app will be a full-stack app with jwt token authentication and more.
The tech stack I'll be using are:

- Apollo server
- MongoDB (Mongoose)
- Apollo client (Probably, haven't decided)
- React
- Tailwindcss

I'm planning to divide the app into two parts - Admin section and the public section. The admin section will probably consist of a dashboard wherein an admin can view all the users, books, authors etc and there will be certain admin priveleges, like deleting, editing a book, user, etc.
A normal user can view the book, leave a review etc.

#### Install

- Clone the repo
- `cd book-review-app`
- `npm install`
- Create a `.env` file in the root of the app with the following key value pairs:
  - `MONGO_URI=your_mongodb_uri`
  - `AUTH_SECRET_KEY=secretkey`
- `npm run dev` to start the backend server
- `cd client`
- `npm install`
- `npm start` to start the react-app
