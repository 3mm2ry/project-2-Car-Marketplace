# Car Marketplace

## Overview

Car Marketplace is a web application where users can list their cars for sale and browse cars listed by other users.

Users can create an account, add their cars, edit or delete their listings, view car details, and leave reviews on cars.

## Screenshots

Screenshots of the application will be added after the project is completed.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- JavaScript
- HTML
- CSS
- Git & GitHub

## Getting Started

1. Clone the repository.
2. Install the required dependencies.
3. Create a `.env` file.
4. Add the MongoDB connection string and session secret.
5. Run the application locally.

## User Stories

### Authentication

- As a user, I want to create an account so that I can use the marketplace.
- As a user, I want to log in so that I can manage my car listings.
- As a user, I want to log out so that my account remains secure.

### Cars

- As a user, I want to view all available cars so that I can find a car to buy.
- As a user, I want to view the details of a car so that I can learn more about it.
- As a user, I want to add a car listing so that I can sell my car.
- As a user, I want to edit my car listing so that I can update its information.
- As a user, I want to delete my car listing so that I can remove a car I am no longer selling.

### Reviews

- As a user, I want to leave a review on a car so that I can share my experience.
- As a user, I want to view reviews on a car so that I can see other users' opinions.
- As a user, I want to delete my own review so that I can remove a review I no longer want.

## Database Design

The application uses three main models:

### User

- username
- password

### Car

- brand
- model
- year
- price
- mileage
- description
- owner

### Review

- reviewBody
- rating
- creator
- car

### Relationships

- A User can own many Cars.
- A User can write many Reviews.
- A Car can have many Reviews.
- Each Car belongs to one User.
- Each Review belongs to one User and one Car.

## Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | / | Home page |
| GET | /cars | List all cars |
| GET | /cars/new | New car form |
| POST | /cars | Create car |
| GET | /cars/:id | View car |
| GET | /cars/:id/edit | Edit car form |
| PUT | /cars/:id | Update car |
| DELETE | /cars/:id | Delete car |
| POST | /cars/:id/reviews | Create review |
| DELETE | /cars/:id/reviews/:reviewId | Delete review |

## Features

- User authentication
- Create car listings
- View all car listings
- View individual car details
- Edit car listings
- Delete car listings
- Add reviews
- Delete reviews
- User ownership of car listings

## Future Enhancements

- Search for cars
- Filter cars by brand and price
- Upload car images
- Add favorites
- Add messaging between buyers and sellers
- Add advanced car filters

## Credits

