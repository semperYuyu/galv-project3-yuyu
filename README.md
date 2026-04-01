# Visual API

### Frontend

#### Vite

#### React

### Backend

#### PostgreSQL

#### Express

#### Bcrypt

### Database

#### Users

#### Pokemon

#### Pokemon_food

#### Type

##### Future implementations include the usage of more than just the first two tables

### Features

##### GUI Application to send API calls

##### A Pokemon :D

##### Light/Dark Mode

### CMDs

##### Frontend - npm run dev

##### Backend

###### database: docker run --rm --name pg-docker \ -e POSTGRES_PASSWORD=docker \ -d \ -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib postgresql \ postgres ; docker exec -it pg-docker bash ; psql -U postgres ; CREATE DATABASE yuyu_db ;

###### server: npx knex migrate:latest ; npx knex seed:run ; npm start
