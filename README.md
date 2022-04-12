# **Connex One React Technical Test - Luke Spoor**

Following the instructions I have created a small app which gets comics from [xkcd.com](https://xkcd.com/). On page load, the app will retrieve the latest comic. You can use the input field to enter an ID and request a specific comic, this field will only accept numbers. You can also retrieve a random comic.

Using Express.js I have then created a server to handle API calls within React, this helps to prevent any CORs issues. I have created three different endpoints.

- `/api/latest`
- `/api/random`
- `/api/:id | /app/2000`

The app has then been deployed to Heroku and can be viewed here:

### [Live app](https://luke-connex-task.herokuapp.com/)

---

## **Running Locally**

#### Server - Within the root run `npm install` followed by `npm start`

#### App - Within the /app folder run `npm install` followed by `npm start`

---

### **Technologies, Services & Packages used:**

- React
- Redux
- Redux Toolkit
- Bootstrap
- Express.js
- Heroku
