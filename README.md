# Super-Traders-Eva

## API Usage

#### Add new user

```http
  POST /api/createUser
```
```json
{
    "name": "user-F"
}
```

#### List Users

```http
  GET /api/users
```
---

#### Add new Share

```http
  POST /api/createShare
```
```json
{
    "shareid": "ACS",
    "rate": 10.22
}
```
#### List Shares

```http
  GET /api/shares
```

#### Delete Share by id

```http
  DELETE /api/deleteShare/ABC
```

---
#### List User Portfolios

```http
  GET /api/getPortfolio/5
```

#### Add new Portfolio
```http
  POST /api/addPortfolio
```
```json
{
    "userid":5,
    "share_id": "CJS",
    "quantity": 0
}
```

---
#### Create a Transaction

```http
  POST /api/trade
```
```json
{
    "buyer_id": 4,
    "seller_id": 5,
    "quantity": 1,
    "share_id": "CJS",
    "sellPrice": 84.52
}
```

### In this app, we can make buy/sell transactions.

we have;
- Users,
- Portfolios,
- Shares,
- Transactions.

What can we do;
- We can create Users,
- We can create Shares,
- We can delete Shares,
- We can create Portfolios,
- We can create transactions between buyer and seller.
- We can see Users,Portfolios,Shares and Transactions.

## also;

- Users make a trade with their shares and set the prices (the last transaction is the new price of the share).
- Users must have enough shares in their portfolios to be able to sell.
- In order for the users to buy the shares, they must first have a portfolio of the share they want to buy.
- The share must exist to make a trade.

## Environment Variables

To run this project you will need to add the following environment variables to your .env file

`DBUSER`

`DBPASSWORD`


