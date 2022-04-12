# Connex One React Technical Test - Luke Spoor

Following the instructions I have succesfully created a small app which gets comics from [xkcd.com](https://xkcd.com/) On load, the app will retrieve the latest comic, you can use the form to enter an ID and request a specific comic, this field will only accept numbers. You can also retrieve a random comic.

Using Express.js I have then created a server to handle API calls within React, this helps prevent any CORs issues. I have created three different endpoints. This has then been deployed to Heroku.

- `/api/latest`
- `/api/random`
- `/api/:id | /app/2000`

### [Live app]()

---

### Technologies, Services & Packages used:

- React
- Redux
- Redux Toolkit
- Bootstrap
- Express.js
- Heroku
