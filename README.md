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

- **_Server_** - Run `npm install` inside root followed by `npm start`
- **_App_** - Run `npm install` inside `/app` followed by `npm start`

_This has been built using Node v14.16.0_

---

### **Technologies, Services & Packages used:**

- React
- Redux
- Redux Toolkit
- React Fade In
- Bootstrap
- Express.js
- CORs
- Node Fetch
- Sass
- Heroku
