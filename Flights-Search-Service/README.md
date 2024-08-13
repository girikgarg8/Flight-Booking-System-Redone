This is a base NodeJS project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src` : Inside the src folder, all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Let's take a look inside the `src` folder: 

- `config` : In this folder anything and everything regarding any configurations or setup of a library or module wil be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to set up logging library that can help to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` : In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` : They are going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` : they are kind of the last middleware, as post them we call the business layer to exceute the business logic. In controllers we just receive the incoming reqests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` : this folder contains all the logic using which we interact with the DB by writing queries, all the raw SQL queries or ORM queries will go here.

- `services` : contains the business logic and interacts with repositories for data from database

- `utils` : contains helper methods, error classes etc.

**Setup the project**

- Download this template from Github and open it in your favourite text editor.

- Go inside the src folder and execute the following command:

```
npm install 
```

- In the root directory create a `.env` file and add the following environment variables :

```
    PORT = <port number of your choice>
```

Example:

```
    PORT = 3000
```

- Go inside the `src` folder and execute the following command:

```
npx sequelize init
```

- By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

- If you're setting up the development environment, then write the username and password of the db, and in dialect mention the DBMS you are using, for example: MySQL, MariaDB etc

- If you're setting up test or prod environment, make sure to also replace the host with the hosted DB URL.

- To run the server execute

```
npm run dev
```

[High Level Design document of Project and ER Diagram for Flights Search Service](https://docs.google.com/document/d/1A9gxC_yAv5PjGRjSUjR9ZEMupgWYKVwAQ9CjN0yMENc/edit?usp=sharing)