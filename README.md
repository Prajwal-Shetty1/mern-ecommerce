# E-Commerce Platform 🛒

This is my learning journey of building an e-commerce platform step by step.

###  1  
- Learned how to create a **React project setup**,- Added **React Router DOM** and understood why it is used for navigation between pages.
- - Created basic **pages** like Home, Collection, About, Contact, Product , Cart, Login, PlaceOrdered, Orders.
###  2  
-Added **Company logo** in the navbar.
- Built a **Navbar** with links for Home, Collection, About, and Contact.
- Added **Profile icon** in the navbar,Implemented a **Dropdown menu** that shows MyProfile, Orders, and Logout options when clicking the profile.
  Added a **Cart icon** with a number badge (10) near the logo.Added a **search icon** and **menu icon** in the navbar.
###  3
-**Sidebar Menu (Mobile)**          
Menu icon opens links: HOME, COLLECTION, ABOUT, CONTACT.
BACK button closes the menu.
-**Hero Section**
Banner with text on left and image on right.
-**ShopContext (Global Store)**
Stores products, currency, delivery_cost.
Provides data to all components using React Context.
-**LatestCollection Component**
Uses useContext to get products from ShopContext.

### 4
1.Created ProductItem component to show product image, name, and price.
2.Made Title component to display headings.
3.Built LatestCollection to show the 10 newest products.
4.Built BestSeller to show top 5 best-selling products.
5.Used ShopContext to get product data and currency.
6.Used React Router (Link) to go to product details page.

### 5
- Created **OurPolicy** section with icons, headings, and descriptions for exchange, return, and support policies.
- Built **NewsletterBox** component with a subscription form that prevents page refresh and takes email input.
- Developed **Footer** with company info, contact details, and copyright text.
- Styled components: added font, colors, image sizes, text alignment, list styling, and spacing.

### 6
- Fixed mobile view sizes for OurPolicy.jsx, NewsletterBox.jsx, and Footer.jsx to look proper on small screens.
- Created a responsive Collection page in React.
- Learned how to use useState and useEffect to detect screen size (mobile or desktop).
- Implemented conditional rendering — filters are always visible on desktop, but toggle on mobile.
- Improved understanding of window resizing and event listeners in React.