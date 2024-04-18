# CS' Web Template

My react template featuring these technologies to start with;

#### Client

The client is built with react and vite, and makes use of several dependencies listed below;

- React Router
- React Icons
- React Aria
- Axios
- Styled Components

Project structure;

```
├── ...configuration/deployment
└── src
    ├── ../configuration
    ├── index.html
    ├── package.json
    ├── assets
    ├── components
    ├── contexts
    ├   ├── AuthContext.tsx
    ├   └── index.ts
    ├── pages
    ├   ├── HomePage.tsx
    ├   └── NotFound.tsx
    ├── queries
    ├   └── FetchAuthSession.tsx
    ├── styles
    ├   └── index.css
    └── utils
        ├── api-v1.ts
        ├── types.ts
        └── constants.ts
```

By default an authorisation context has been created for use in session related data. It utilises react query to fetch the api for to validate a users session

#### Api Packages

- Not implemented yet.

---

### Installation

`git clone <repository>`

Changes that can be made to current setup;

- Personalise `client -> package.json` name and description
- Change development `api -> .env.development` and production `.env` environment variables
- Adjust `docker-compose` and `docker-compose-production` to your liking
- Change `LICENCE` if needed, by default it is **MIT**
- Change deployment env variables in `.env` for **deploy.sh**\
- <span style="color:#aa0000">Remove `.example` from env files.</span>
