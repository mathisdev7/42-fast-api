# FortyTwo API Client

A simplified client for interacting with the 42 API. This project aims to provide an easy-to-use interface to manage OAuth2 tokens and make authenticated API requests. Development started on **October 20, 2024**, and it is currently in progress.

## Features

- Automatically retrieves and manages OAuth2 tokens.
- Simplified API requests for GET and POST methods.
- Customizable logging for API requests.
- TypeScript support with typed responses.

## Installation

To install the package, run:

```bash
npm install 42-fast-api
```

## Usage

Start by creating a `.env` file with your `UID` and `SECRET` from the 42 API:

```
UID=your_client_id
SECRET=your_client_secret
```

Example of how to use the client:

```typescript
import { FortyTwoAPI } from "./src/api";

if (!process.env.UID || !process.env.SECRET) {
  throw new Error("Please provide UID and SECRET in .env file");
}

const api = new FortyTwoAPI({
  uid: process.env.UID,
  secret: process.env.SECRET,
  logRequests: true,
  baseUrl: "https://api.intra.42.fr",
});

(async () => {
  try {
    await api.init();
    const userId = await api.getUserIdByLogin("example_login");
    console.log(userId);

    const userData = await api.getUserData(userId);
    console.table(userData.projects_users);
  } catch (error) {
    console.error(error);
  }
})();
```

## API

### `init()`

Initializes the client and retrieves the access token.

### `getUserIdByLogin(login: string): Promise<string>`

Fetches the user ID for a given login.

### `getUserData(userId: string): Promise<UserData>`

Retrieves detailed data for a user by ID.

### `getCampusList(): Promise<any>`

Returns a list of all campuses from the API.

## Logging

You can enable request logging by setting `logRequests` to `true` in the constructor.

## Development

This project is still in development. Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the MIT License.
