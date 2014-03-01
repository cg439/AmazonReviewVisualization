Amazon Review Visualization
=========================

A few JavaScript scripts which help visualize the reviews for a product to allow easier perusal of the reviews as well as a better way to compare similar products based on distribution of reviews.

AmazonScraper.js handles the scraping of the Amazon product reviews and parsing them into a json file which is loaded by the script within Visualization.html

The Visualization.html handles the rendering of the visualization for the review data. 
Essentially it maps out reviews where the x coordinate represents the date the review was uploaded, while the y coordinate represents the rating. Circles were chosen because the circle radius can represent how helpful that review was to others, allowing for easy and simple comparison of reviews. This allows one to easily view the various reviews for a given review rating, and find the most helpful review in that group. It also allows one to see the distribution of reviews over time, as one can look for a pattern in the number and quantity of reviews at all levels from beginning to end. 

A slider exists to allow one to filter out reviews who aren't as helpful as other reviews. Similarly, functionality exists to click a circle and actually view the text of that review.

There are a few bugs that are being worked out on the project, related to parsing of text values that contain quotations within in the JSON, the ability to view reviews in a more appealing format to the user, and possible changes to the schema of the visualization itself.

For example, perhaps it might be more useful to represent each circle's radius simply by the review rating, and use the helpfulness of that review as its y coordinate. Thus allowing one to look merely at the top of the graph at any timepoint to find the most helpful reviews that exist.

A few dependencies exist. The AmazonScraper.js requires node.js as well as the module jsdom. 

How to use: 

1. In AmazonScraper.js, set page to the number of pages of reviews you want to parse for the visualization, keep in mind that each page contains up to ten reviews.

2. Set the unique Amazon id of the product you want to scrape reviews for. 

3. Execute AmazonScraper.js using node and put the output into "data.json" like in the following example
  
node AmazonScraper.js > data.json

4. Open up Visualization.html

5. View Visualization of your reviews


Future things to do: 

1. The possibility of increasing speed of scraping by using cheerio and request rather than jsdom/jquery, currently it can scrape approximately 1,000 reviews every minute

2. Extension of this into one application which asks user for an amazon url, locates the unique Amazon id, parses the reviews, and then visualizes it

3. Comparisons amongst different products

4. Better review popup box

5. Utilize NLP to capture common phrases contained within reviews that describe the product
