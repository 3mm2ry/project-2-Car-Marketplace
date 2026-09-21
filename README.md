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
- Multer
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
- As a user, I want to upload an image of my car so that buyers can see it.
- As a user, I want to edit my car listing so that I can update its information.
- As a user, I want to delete my car listing so that I can remove a car I am no longer selling.

### Reviews

- As a user, I want to leave a review on a car so that I can share my experience.
- As a user, I want to view reviews on a car so that I can see other users' opinions.
- As a user, I want to delete my own review so that I can remove a review I no longer want.

## Database Design

The application uses three main models:

### User

- `_id`
- `username`
- `password`

### CarListing

- `_id`
- `streetAddress`
- `brand`
- `model`
- `year`
- `price`
- `mileage`
- `description`
- `image`
- `owner`

### Review

- `_id`
- `reviewBody`
- `rating`
- `creator`
- `carListing`

### Relationships

- A User can own many CarListings.
- A User can write many Reviews.
- A CarListing can have many Reviews.
- Each CarListing belongs to one User.
- Each Review belongs to one User and one CarListing.

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/car-listings` | List all car listings |
| GET | `/car-listings/new` | New car listing form |
| POST | `/car-listings` | Create car listing |
| GET | `/car-listings/:id` | View car listing |
| GET | `/car-listings/:id/edit` | Edit car listing form |
| PUT | `/car-listings/:id` | Update car listing |
| DELETE | `/car-listings/:id` | Delete car listing |
| POST | `/car-listings/:id/reviews` | Create review |
| DELETE | `/car-listings/:id/reviews/:reviewId` | Delete review |

## Features

- User authentication
- Create car listings
- Upload car images
- View all car listings
- View individual car details
- Edit car listings
- Delete car listings
- Add reviews
- Delete reviews
- User ownership of car listings
- Store car images in the `public/uploads` directory

## Future Enhancements

- Search for cars
- Filter cars by brand and price
- Add favorites
- Add messaging between buyers and sellers
- Add advanced car filters

## Credits