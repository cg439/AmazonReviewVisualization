Amazon Review Visualization
=========================
My group had to do a visualization for our Data Mining course, so we decided on visualizing the average product reviews for 4th generate video game consoles on a monthly basis using Amazon product reviews data. 
The steps we followed were:

1. We used a scraper to scrape the data from Amazon using DOM manipulation to scrape the date of reviews as well as their rating. This was outputted to individual 'console'.json for wii, xboxone, and ps4.

2. We then aggregated this data on a monthly basis and computed an average product rating for each console for each month. We also kept track of how many reviews this average was computed on, to account for differences in review volume. This was outputted to data.json.

3. We loaded the data.json file and then visualized it in index.html using D3 and JavaScript.

For details about our logic and conclusions based on the visualization, please see Project1WriteUp.pdf.

A few dependencies exist. The AmazonScraper.js requires node.js as well as the module jsdom. 

How to use: 

1. In AmazonScraper.js, set page to the number of pages of reviews you want to parse for the visualization, keep in mind that each page contains up to ten reviews.

2. Set the unique Amazon id of the product you want to scrape reviews for. 

3. Execute AmazonScraper.js using node and put the output into "data.json" like in the following example
  
node AmazonScraper.js > data.json


To view the Visualization:

1. Run a webserver in the same directory as data.json and index.html. Python has a built in server accessible using "python -m SimpleHTTPServer".

2. Open index.html


Future things to do: 

1. The possibility of increasing speed of scraping by using cheerio and request rather than jsdom/jquery, currently it can scrape approximately 1,000 reviews every minute

2. Extension of this into one application which asks user for an amazon url, locates the unique Amazon id, parses the reviews, and then visualizes it

3. Utilize NLP to capture common phrases contained within reviews that describe the product
