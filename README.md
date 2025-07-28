# The Three Across

![alt text](<Screenshots/Screenshot 2024-07-01 at 19-00-45 The Three Across.png>)


## Getting Started

This will be the document specifically for development perspective. Curating the details about the technologies used. 


### Backend


As the project is content is based a CMS Content Management System is required. Here we are using [Strapi](https://strapi.io/) an open source headless CMS containing features like:
- Create Content-type
- REST API

[Repository](https://codeberg.org/Organization-Projects/three_across_backend)

#### Getting started:

1. Create Admin user
2. Create API Token
3. Create Content-type and it's content.


For getting all the packages:

```bash
$ yarn 
```

For starting the project in development:
```bash
$ yarn develop
```

The strapi CMS runs in to mode:
1. Development
    - We can create new content-type.
2. Production
    - We can on create content for existing content-type.


####  Data migration:

Read section "Seeding the Data" from [here](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi).



### Frontend

Nextjs with Typescript is used to develop the frontend. 

- Node : v20+
- React: v18+

Content rendered to the frontend are rendered directly using Server side component which further request the backend for data. 


### Getting Started:

1. Create `.env.local` file 

```bash
$ cp .env.example .env.local
```


2. Media access from Strapi, for this do check the file `/next.config.mjs`.

3. Development:

For getting all the packages:

```bash
$ yarn 
```

For starting the project in development:
```bash
$ yarn dev
```

# check
