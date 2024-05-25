# Infinite.Play

General Assembly Project - Unit 2
Due: 25/05/2024

## Getting Started

## What is Infinite.Play?

Infinite.Play is a digital storefront akin to store.steampowered.com - a market leading digital storefront made as a hub for games. Infinite.Play will be focusing on the storefront only, as emulating other functions and widgets used in Steam is beyond my capabilities at this stage.

This means that Infinite.Play will offer users:
- [x] User sign up and log in
- [x] A storefront/Welcome splash page that will include featured game listings
- [ ] Each listing will show a thumbnail preview with the price tag in the bottom corner for easy scrolling/viewing
- [x] Game details page(s) where each game can have its own detailed page with screenshots, a description, and user reviews
- [x] Users submitting their own reviews/thoughts to the game listing(s)
- [ ] Users adding/removing item(s) from their personal wishlist
- [x] Users submitting their own games to the database
- [ ] Possibly more

## Technologies Used

For Unit 2, we have learned how to utilize Express, using a database (MongoDB), MongooseJS, Render deployment, referencing APIs, OAuth authentication, and testing using node.

Infinite.Play will be making use of 

- [x] Express
- [x] MongooseJS
- [x] Render
- [x] OAuth

At this point in time, I haven't searched for relevant API that I can use. If there are none, then I'll have to create each item in MongoDB for use.

## Wireframe

Link to the [Wireframe on Excalidraw](https://excalidraw.com/#json=kU8JiCQZEsvGkzBT7tOLx,2sgZkutOuq3MqVdvtv2m6A)

## Screenshots

## ERD
User
-----
UserID (PK)
Username
Name
GoogleID
Email
Avatar
WishlistID (FK)
Balance

Game
----
GameID (PK)
Title
Genre
Developer
Price
Description
CopiesSold
WishlistUser
Image
Reviews (embedded)

Wishlist
--------
WishlistID (PK)
UserID (FK)
Games (array of GameID references)

Review (embedded in Game)
------
ReviewID (PK)
Content
Rating
UserID (FK)
Title
UserName
UserAvatar

## Next Steps

Working on this project gave me an amazing opportunity to expand on my ability and knowledge of coding. If there were a time where I came back to this and pushed it to a state where it could be published, then I would definitely work on the carousel to make it fully functional. I dare say that it is the biggest challenge of this entire project - a combination of all tools (HTML, CSS, JS). I would also put time into implementing an api so there wouldn't be a need to manually submit image files for new games or have to use hard-coded methods just to make it look right.

The CSS has a lot to work on as well. I tried to clean it up as best as I could, but there are so many lines and so little time to handle them all. My Trello board still has things in there that I haven't even started yet. They're still sitting in the ice box! But... Skateboard first, then the scooter, then the bike, then the car.