
Copied

Skip to content
Using Gmail with screen readers
Conversations
0.03 GB of 15 GB used
Terms · Privacy · Program Policies
Last account activity: 5 hours ago
Details
# Server for Cart System

### Pre-requisites
* node
* npm
* mongoDB collection
* stripe payment setup for key

### Local Setup
1. Clone the repository
`git clone https://github.com/Zaahiid/`

2. Navigate to the directory
`cd flder-name`

3. Install dependencies
`npm install`
4. Create MongoDB collection
    Create MongoDB collection for stroring Data and add it's URL to .env file

### Start the app

Run the following command in root directory

`npm start`

Now the running app should be available at `http://localhost:3000/`

### API Documentation

1. Products
   1.1 Create Product
    - Method `Post`
    - path `http://localhost:3000/api/v1/product`
    
   1.2 Update Product
    - Method `Patch`
    - path `http://localhost:3000/api/v1/product`

    1.3 Get all Product
    - Method `Get`
    - path `http://localhost:3000/api/v1/product`
    
    1.4 Delete Product
    - Method `Delete`
    - path `http://localhost:3000/api/v1/product`
2. Orders
    2.1 Get all Orders
    - Method `Get`
    - path `http://localhost:3000/api/v1/order`
    
    2.1 Create Order
    - Method `Post`
    - path `http://localhost:3000/api/v1/order`
    
document.md
Displaying document.md.