# amazon-clone

__Username:__ test

__Password:__ amazonclone

__Accepted Credit Card:__ 4242 4242 4242 4242 (Any CVC, Any future expiry date, Any zip code)

__Declined Credit Card:__ 4000 0000 0000 9995 (Any CVC, Any future expiry date, Any zip code)

__Credit Card (Authentication Required):__ 4000 0025 0000 3155 (Any CVC, Any future expiry date, Any zip code)

This is a basic clone of the Amazon Official Website! Feel free to use the login details provided above to access and preview the website. Alternatively, you can also make your own account for the website by clicking on "Create Account"!

__Note:__ If you create an account, you will receive a confirmation code through the email you provide to confirm the account. 

__Features__:
1. User Account management: Account creation, Logging in, Changing username, Changing password, Changing user address (for delivery), Changing account type (Basic: Regular shopping; Seller: Regular shopping plus ability to add products to the marketplace), Signing out. 
2. Products: See all available products in the market, search based on product category. Product attributes can be viewed by clicking on the product, and include name, description, price, and quantity available.
3. Cart: Add products to your cart if interested. Increase or decrease the required quantity of the product. Remove products from your cart. Shows the total price of all the products and quantites of the products in your cart. 
4. Checkout: Pay for the total amount of products in your cart with a debit/credit card (implemented with a Stripe API). Test card numbers for this feature are provided above, and depending on what card is used, the payment for the order will either be accepted, declined, or open a third-party authentication window. 
5. Order history: View all of the orders you have made and the dates and times in which they were made. 
6. 404 page for false rounting
7. (*__For Seller Accounts__*) Add a product: Add a product that can be bought by others. Provide the name, description of the product, acceptable image, product category (add a category if you dont find a suitable category for your product), price and quantity availabe. Effective error handling for unsupported inputs and formats. 

__Improvements__
1. Adding an algorithm that recommends products based on your cart and order history. 
2. Adding a working search bar to search for products. 
3. Adding wishlists to allow users store products that they are interested in.
4. Adding recommendations for other products based on the current product. 
5. Adding product types and variations (e.g. color, hardware specs, sizes, etc)

__Bugs__
1. Product images fail to load sometimes (Especially after logging in)
2. Unconfirmed accounts can still log in to the website by going back to the login page after signing up.
3. Small lags in loading content.
