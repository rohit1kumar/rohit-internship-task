# API
## Project structure

    myapi/
    ├─ controller/
    │  ├─ contact.js
    │  ├─ user.js
    ├─ db/
    │  ├─ connect.js
    ├─ middleware/
    │  ├─ auth.js
    ├─ modals/
    │  ├─ Contact.js
    │  ├─ User.js
    ├─ node_modules/
    ├─ routes/
    │  ├─ contact.js
    │  ├─ user.js
    ├─ .gitignore
    ├─ package-lock.json
    ├─ package.json
    ├─ README.md
    ├─ server.js

## Requirements

For development, you will need Node.js and MongoDB 

### Node
- #### Node installation

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.


### MongoDB
- #### MongoDB installation

   Go on [official Mongodb website](https://Mongodb.com/) and download the installer. 

---

## Getting Stated

### Clone the repository
    $ git clone https://github.com/rohit1kumar/vouch-interhship-task.git
        

### Install dependencies
    $ cd myapi
    $ npm install

### Run mongoDB
    $ mongod

### Build and run the project
    $ npm start

### Add environment variables
    PORT=3000
    MONGO_URL=mongodb://localhost:27017/apidb
    JWT_SECRET=secret

### Navigate to base URL
    http://localhost:3000/api


## API endpoints

    User Endpoint : /user

    Contact Endpoint : /contact(s) 