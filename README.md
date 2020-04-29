# #100DaysOfCode

### Book review app

During the days to come, I'll make it an effort to write some lines of code everyday. So here it is, my attempt to code for the coming 100 days.

#### About the app

The app will be a full-stack app and currently I'm writing the backend for the app.
The tech stack I'll be using are:

- Apollo server
- MongoDB (Mongoose)
- Apollo client (Probably, haven't decided)
- React (Probably, haven't decided)

I'm planning to divide the app into two parts - Admin section and the public section. The admin section will probably consist of a dashboard wherein an admin can view all the users, books, authors etc and there will be certain admin priveleges, like deleting, editing a book, user, etc.
A normal user can view the book, leave a review etc.

#### Install

- `git clone git@bitbucket.org:abeidahmed/book-review-app.git`
- `cd book-review-app`
- `npm install`
- Create a `.env` file in the root of the app with the following key value pairs:
  - `MONGO_URI=your_mongodb_uri`
  - `AUTH_SECRET_KEY=secretkey`

* Start the server `npm run dev`. Go to `localhost:4000`
