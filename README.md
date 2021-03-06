# ReceiptGenius
RiskGenius Interview Project

## Project Overview
A simple prototype that collects receipts for an expense report. The prototype includes a header and grid of receipts that responds to different screen sizes. [FontAwesome](https://fontawesome.com/) is used for icons and [Muli](https://fonts.google.com/specimen/Muli) is used as the webfont.

## Task Todo List

![Mockup](https://raw.githubusercontent.com/HermiteBai/ReceiptGenius/master/materials/Mockup.png)

- [x] 0 : Add task list to README
- [x] 1 : Setup frontend project
- [x] 2 : Setup backend project
- [x] 3 : Setup Database
- [x] 4 : Add header
- [x] 5 : Add grid of receipts
- [x] 6 : Add title and icon
- [x] 7 : Header: Add button for add receipt
- [x] 8 : Header: Total amount of receipt
- [x] 9 : Grid: Receipt component
- [x] 10 : Grid: Button to remove receipt
- [x] 11 : Add Receipt: Dialog to upload receipt
- [x] 12 : Backend: Add Receipt
- [x] 13 : Backend: Remove Receipt
- [x] 14 : Backend: Get all Receipt
- [x] 15 : Integration: AJAX

## Dependency
- node.js@v10.15.3
- npm@6.4.1
- react@15.4.2
- express@4.17.0
- mongojs@2.6.0
- typescript@3.4.5
- antd@3.19.0
- react-stack-grid@0.7.1
- axios@0.19.0

## Usage

#### Setup MongoDB Server

~~~~
mongod --port <database port> #Default to be 5000
~~~~

#### Setup Backend Server

+ Modify host and port in `server/api/app.js` for database
+ Modify port `const port = <backend port>`

~~~~
node app.js
~~~~

#### Frontend Config

+ Modify host and port in `app/config.js`

~~~~
npm start
~~~~
