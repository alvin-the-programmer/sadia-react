## Setup

Spin up the api backend in dev mode. Defaults to localhost:3001.

```
$ cd backend
$ npm install
$ npm run dev
```

Deploy the react app dev server. Defaults to localhost:3000.

```
$ cd frontend
$ npm install
$ npm start
```

## API Reference

| URL           | VERB | DESCRIPTION                                          |
| ------------- | ---- | ---------------------------------------------------- |
| /             | GET  | hello world check                                    |
| /api/messages | GET  | show all messages                                    |
| /api/messages | POST | create a message, body should include alias and text |
