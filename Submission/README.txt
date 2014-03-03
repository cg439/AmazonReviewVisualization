Please load up a web server in same directory and do not edit data.json at all. 
data.json is the only json file loaded in the visualization, and it is loaded using d3.
The other files are provided as the original data that was transformed and reduced into data.json
The AmazonScraper.js file is provided to show how amazon data was scraped and parsed into JSON. 
Please keep in mind that to use it you need to have node.js installed on your machine and also need the module jsdom 
which can be installed using npm. At the same time, the scraper on it's own only outputs to console, so you must force the output
to a text file as shown below, while also setting the relevant fields in the script to actually scrape Amazon review data.
node AmazonScraper.js > file_name.json
Otherwise, please enjoy the visualization.