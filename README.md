# [JDLT](https://jdlt.co.uk) full-stack developer challenge

## Dependencies
* NPM / Yarn

## Instructions
From the project root folder:
```
$ npm install
```
OR
```
$ yarn
```
Then seed the database with sample data:
```
$ yarn seed
```
To run the server:
```
$ yarn serve:backend
```

To start frontend:
```
$ yarn serve:frontend
```

### Sample data

| Supplier    | Product      | Price (£) |
| ------------|--------------|-----------|
| New Co Ltd  | Small wongle | 5         |
| New Co Ltd  | Large wongle | 8         |
| New Co Ltd  | Super wongle | 12        |
| Old Co Ltd  | Mini wongle  | 4         |
| Old Co Ltd  | Small wongle | 6         |
| Old Co Ltd  | Large wongle | 9         |
| Old Co Ltd  | Super wongle | 13        |


**Minimum deliverables:**
* Selecting suppliers and products in the drop-downs
* A round-trip to a server pulling back prices
* Displaying the returned data in the grid
* Anything else you'd like to show us

## Approach
I tackled the exercise in the following order:

1 - Cloned the repo and made sense of it

2 - Planned the project:
  * Tech I wanted to use - React( incl React Hooks), GraphQL, MongoDB, etc
  * Researched how to use GraphQL and React Hooks
  * Mapped the models, relationships, queries and mutations for the server and UI

3 - Built the server and tested the resolvers with GraphQL playground 

4 - Built the front-end

## Current functionality
* Use of MongoDB database
* GraphQL server with following functionality:
  * Login
  * Register
  * Get a 'product', a 'user' and all 'products'
  * Create 'product'
  * Delete 'product'
* React app consuming GraphQL API with following functionality: 
  * Login
  * Register
  * Index of all products in the database
    * Filter all products by product name
    * Filter all products by supplier
  * Create a new product

## Wins and Blockers

### Wins
* Create a server with GraphQL and Node.js
* Use React Hooks
* Test GraphQL API with Jest
* Use Bootstrap React

### Blockers
* It was the first time I used GrapQL and Jest therefore I have built limited number of query, mutations, tests.
* Error handling and error messages

## Future functionality
* Delete products in the front-end
* Improve error handling and error messages
* Improve UI design and responsiveness 

## What I've learnt (tech & soft skills)
* Exposure to GraphQL, Jest, Bootstrap React and React Hooks
* Stepping back and thinking about what exactly I want to achieve
* Research and find ways to learn new technologies and implement leanrings