# supertradersNodeJsApi


This is a Node.js-based API for the Supertraders application. This API allows users to manage their portfolios, trades, and stock data.

## Installation

1. Download or clone a copy of this project to your computer.
2. Open a console window and navigate to the project folder.
3. Run `npm install` to install the project's dependencies.
4. Start the server by running the `npm start` command.

API Documentation

API Documentation
=================

Client
------

POST

/client

Create a new client

Example Request:

POST /client

Example Response (HTTP 201):

{
    "message": "Client added successfully",
    "client": {
        "id": "client-123",
        "username": "john\_doe",
        "balance": 1000.50
    },
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

GET

/client

Get all clients

Example Request:

GET /client

Example Response (HTTP 200):

{
    "clients": \[
        {
            "id": "client-123",
            "username": "john\_doe",
            "balance": 1000.50
        },
        {
            "id": "client-456",
            "username": "jane\_smith",
            "balance": 5000.75
        }
    \],
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

Portfolio
---------

POST

/portfolio

Create a new portfolio

Example Request:

POST /portfolio

Example Response (HTTP 201):

{
    "message": "Portfolio added successfully",
    "portfolio": {
        "id": "portfolio-123",
        "clientId": "client-123",
        "description": "Sample portfolio"
    },
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

GET

/portfolio

Get all portfolios

Example Request:

GET /portfolio

Example Response (HTTP 200):

{
    "portfolios": \[
        {
            "id": "portfolio-123",
            "clientId": "client-123",
            "description": "Sample portfolio"
        },
        {
            "id": "portfolio-456",
            "clientId": "client-456",
            "description": "Another portfolio"
        }
    \],
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

Stock
-----

GET

/stock

Get all stocks

Example Request:

GET /stock

Example Response (HTTP 200):

{
    "stocks": \[
        {
            "id": "stock-123",
            "symbol": "AAPL",
            "price": 150.20
        },
        {
            "id": "stock-456",
            "symbol": "GOOGL",
            "price": 2500.50
        }
    \],
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

POST

/stock

Create a new stock

Example Request:

POST /stock

Example Response (HTTP 201):

{
    "message": "Stock added successfully",
    "stock": {
        "id": "stock-123",
        "symbol": "AAPL",
        "price": 155.50
    },
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

PUT

/stock/{id}

Update the price of a stock

Example Request:

PUT /stock/stock-123

Example Response (HTTP 200):

{
    "message": "Stock updated successfully",
    "stock": {
        "id": "stock-123",
        "symbol": "AAPL",
        "price": 160.50
    },
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
                

Trade
-----

GET

/trade

Get all trades

Example Request:

GET /trade

Example Response (HTTP 200):

{
    "trades": \[
        {
            "id": "trade-123",
            "type": "BUY",
            "totalprice": 100.50,
            "quantity": 10,
            "Portfolio": {
                "id": "portfolio-123",
                "clientId": "client-123",
                "description": "Sample portfolio"
            },
            "Stock": {
                "id": "stock-123",
                "symbol": "AAPL",
                "price": 150.20
            }
        },
        {
            "id": "trade-456",
            "type": "SELL",
            "totalprice": 500.75,
            "quantity": 5,
            "Portfolio": {
                "id": "portfolio-456",
                "clientId": "client-456",
                "description": "Another portfolio"
            },
            "Stock": {
                "id": "stock-456",
                "symbol": "GOOGL",
                "price": 2500.50
            }
        }
    \],
    "success": true
}
                

Example Response (HTTP 500):

{
    "error": "Internal server error",
    "success": false
}
## Usage

Here is an example request for using the API:


## Endpoints

The API supports the following endpoints:

- GET /portfolio
- GET /trade
- GET /stock
- GET /client  

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push the changes to your own fork: `git push origin my-new-feature`.
5. Submit a pull request.

## License

The source code for this project is licensed under the MIT license. See the `LICENSE` file for details.

## Contact

If you have any questions or suggestions, please email us at tanerozer16@gmail.com
