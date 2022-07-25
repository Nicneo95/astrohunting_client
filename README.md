# astrohunting 
# URL to live website
[https://astrohunting.netlify.app/](https://astrohunting.netlify.app/)
# Summary
###  Community for anyone who is interested in Astrography
Learn astrophotography and take pictures of the wonders of the universe! Shoot the stars and constellations, Moon, planets, comets, nebulas, galaxies, eclipses, meteor showers and conjunctions!

You will find examples of all the different kinds of astrophotography here, tips for how to take astrophotos, and techniques for processing them to produce beautiful images.
### Context and Justification
This project aims to provide a platform where users can input there experience and technique use in creating their astrohunting sightings.
# 5 Planes of Design 
## Target audience group:
### People who are interested in astrography. 
**Age:** 18 above  

**Occupation:** Students, Working Adults anyone who want to pick up astrography as a hobby.

**IT/Photography Literacy Level:** Able to use computers with varying proficiency. Basic understanding of photography elements.

**Goals:** 
Share experiences about image created. 
The type of equipment used and how image is being process. 
Provide a knowledge sharing platform.

**Considerations:**
Consistent display of information for users and provide a search function for them to find the type of astrography that they are interested in.

## UI/UX:
### User Stories
- As someone who is keen in learning and picking up astrography as a hobby. I would like to know what are the equipment used and how experience astrographer take their images. 
Acceptance Criteria
Able to pick up some tips shared by communities

## Content & Features:

### Webpages

- ### Home 
A way to access all 3 webpages from the landing page.

- ### Browse
Collections of all posts created by community and a search function for users to streamline the information they wish to find.

- ### Create Post
A form page for anyone who wants to create a new post. By providing all the information required.

## Design

### Color Palette
![alt text]()

The choice of color was primarily based on black which associated with the dark sky, while white represent the stars. Purple add mystery, and can even symbolise creativity for the webpage.

### Font Palette

The following choices of font were made. 

Navbar: ``font-family: 'Dreamscape'``

Body: ``font-family: 'Libre Baskerville', regular;``

### Technologies Used

## Used in all 3 sites in various ways
- HTML5
- CSS3
- JavaScript
- Bootstrap v5
- React
- MongoDB
- Axios
- Express
- Cors
- Yup

## Used in production
- Visual Studio Code
- Git
- GitHub
- Netlify
- Heroku

# Features
Features | Descriptions
-------- | -------------
Browse all post created | Showing all post created by the community in card form.
View details of post created | Users can click on the individual post and will display all the information (e.g., equipment, location, processing data etc...).
Search post | Users can search for post based on various criteria. The search will occur as the users type into the inputs or check/uncheck the checkboxes.
Add new post | Users can add a new post through the create post page.
Manage post | Users can edit/delete the post.

## Limitations and future implementations
Limitations | Future Implementations to Resolve Limitations
----------- | -------------
Anyone can edit/delete post not belonging to them | Create a user authentication where users can only edit/delete post belonging to them.
Images are "uploaded" by providing a working URL of an image and only one image can be "uploaded" for each listing. | Implement an image upload system to allow users to upload multiple image files from the web application. Then display all the images that were uploaded on the frontend web application.
Browse page gets longer when more post are being created | Implement pagination 


# TEST CASES
| #  | Test Description | Test Steps | Expected Result |
| ------------- | ------------- | ------------- | ------------- |
|  | In home.html | In home.html | In home.html |
|  | Prerequisite: The user is at search bar of the home page |  |  |
| 1 | Able to search for ticker symbol of company | 1) Enter the ticker symbol into the textbox as aapl <br/> 2) Click the find icon or enter | Page will be redirect to stock-analysis.html <br/> <ul> <li> Company information should be display on side bar </li> <li> Default 1 day synchronise chart should load |
|  | In stock-analysis.html | In stock-analysis.html | In stock-analysis.html |
| 2 | Company earning and revenues chart should render | 1) Click on earning button at side bar | Expected to see reported and estimated EPS bar chart |
| 3 | Company debt to assets chart should render | 1) Click on financials button at side bar | Expected to see assets and liabilities bar chart with Debt to Assets show as line graph |
|  | Prerequisite: The user is at synchronise chart |  |  |
| 4 | Synchronise chart able to render the different time series selected base on the radio button selected | 1) Click on 1W radio button | Chart label date should show date frequency + 7 days (DD MMM) from left to right |
|  | In market-maps.html | In market-maps.html | In market-maps.html |
| 5 | Able to display the different tree chart selected in the side button | 1) Click on Australia at the side bar | Tableau chart show render |
|  | Prerequisite: The user is at Australia tree chart |  |  |
| 6 | Able to select the sector user wish to display | 1) Unclick the all checkbox <br/> 2) Select consumer staples checkbox | Expected to only see compaines in consumer staples sector |
| 7 | Hightlight textbox searching for company | 1) Click on the highlight checkbox <br/> 2) Select AGL Energy Limited | Box should be highlighted |

# Deployment
Hosted on Netlify free plan, without database. All dependencies are delivered via CDN. 
To deploy, fork this code, link your Github account with netlify, and make this repo a site. 

# Dependencies
- Bootstrap v5.1
- Axios
- Animate.css
- Yup
- React-bootstrap
- React-bootstrap-icons
- React-dom
- React-on-screen

# CREDITS AND ACKNOWLEDGMENT
- Visual Studio Code
- Git
- GitHub
- Netlify
- HTML5
- CSS3
- JavaScript
- Bootstrap v5.1
- Axios
- PedroTech YouTube channel
- Content/Picture from [https://welcome.astrobin.com/](https://welcome.astrobin.com/)
