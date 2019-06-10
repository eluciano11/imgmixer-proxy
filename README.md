# ImgMixer Proxy

This project serves as a proxy to communicate between your client application and the Unsplash API. By using this proxy you won't have to expose your Unsplash `APP_KEY` and `SECRET_KEY` on your client.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app that's found on the build directory.<br>
By default the app will use [http://localhost:8000](http://localhost:8000).

If you want to change the port you can specify it on your .env file.

### `yarn run start:watch`

Runs the app in the development mode and restarts the server everytime something in the src directory changes.<br>
By default the app will use [http://localhost:8000](http://localhost:8000).

If you want to change the port you can specify it on your `.env` file.

### `yarn build`

Cleans up the build directory and compiles the application.

### `yarn run compile`

Compiles your application with TypeScript and outputs the result to the build directory.

## Environment Variables

You can specify your API keys and environment variables on a `.env` file that's located on the root of your application.

Example:

```
PORT=8000
UNSPLASH_APP_KEY=SOME_APP_KEY
UNSPLASH_SECRET_KEY=SOME_SECRET_KEY
CLIENT_URL=http://localhost:3000
```
