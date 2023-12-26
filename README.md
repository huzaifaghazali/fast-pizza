# Fast Pizza

Fast Pizza is a simple React and Redux-based web application for ordering pizzas online. It is designed to be straightforward, requiring no user accounts or logins. Users can quickly input their names, select pizzas from a dynamic menu loaded from an API, add items to a cart, and place orders with additional options such as priority marking.

## Pictures

## Features

- User-friendly interface for ordering pizzas.
- No user accounts or logins required.
- Dynamic pizza menu loaded from an API.
- Cart functionality to add multiple pizzas before ordering.
- Order information collection (name, phone number, address).
- Optional GPS location for easier delivery.
- Priority marking for orders with an additional 20% of the cart price.
- Payment on delivery (no payment processing in the app).
- Unique order IDs displayed for order tracking.
- Ability to mark an order as "priority" even after it has been placed.

## Tech Stack

- React
- Redux
- Tailwind CSS
- Vite

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/huzaifaghazali/fast-pizza.git
   cd fast-pizza
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ``` 

## Configuration

- The pizza menu is loaded dynamically from the API. Ensure that the API endpoint is configured correctly in the application.

## Usage

1. Open the application in a web browser.
2. Input your name.
3. Select pizzas from the menu and add them to your cart.
4. Provide order details (name, phone number, address, and optional GPS location).
5. Mark the order as "priority" if desired.
6. Place the order.
7. Payment will be collected on delivery.