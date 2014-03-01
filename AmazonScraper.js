var jsdom = require('jsdom');

//example ASIN
var id = "B00CU0NSCU",
    page = 1;

var scrape = function() {
	var temp = "";
    jsdom.env(
        "http://www.amazon.com/product-reviews/" + id + 
        "/? ie=UTF8&showViewpoints=0&pageNumber=" + page +
        "&sortBy=bySubmissionRankDescending",
        ["http://code.jquery.com/jquery.js"],
        function (errors, window) {
            var $ = window.jQuery;  
            var productReviews = $('#productReviews');
			if(productReviews.length > 0){
				productReviews.find('td').children('div:lt(10)').each(function() {
					var starRating = $(this).find('span:first').text();
					if(starRating != ""){
					var helpful = $(this).find('span:first').parent().prev().text();
					var date = $(this).find('span:first').next().find('nobr').text();
					var title = $(this).find('span:first').next().find('b').text();
					var reviewerName = $(this).children().next().find('a:first').find('span').text();

					var reviewBlock = $(this).find("[class='reviewText']").text();
					var review = $.trim(reviewBlock);
					$(this).children().remove();
					
				
				//   console.log('-----------------------');
				//  console.log('Title: ' + title  + '\nDate: ' + date + '\nHelpfulness:' + $.trim(helpful) + '\nReviewer:' + reviewerName + '\nRating: ' + starRating + '\nReview:' + review + '\n\n');
				  temp += parseReview(title, date, helpful, starRating, review);
				  }
            });}
			console.log(temp);
            window.close();
        }
    )        
};

var parseReview = function (title, date, helpful, rating, review){
var output = "{ ";
//output += '"title": "' + title +'", ';
output += '"date": "' + date +'", ';
var begin = helpful.indexOf("of");
var end = helpful.indexOf("people");
var impact = parseFloat(helpful.substring(begin+3, end-1));
var helpful = parseFloat(helpful.substring(0, begin-1));
var helpfulRatio = helpful/impact;
output += '"impact": ' + impact + ', "helpful": ' + helpfulRatio + ', ';
output += '"rating": ' + rating.substring(0,1);
//output += '"review": "' + review.replace('"', '');
output +=  ' } , ';
return output;
}

var parse = function(str) {
if(str.indexOf("Title:") != -1)
	return '"title": "' + str.trim(str.substring(6))+'", ';
else if(str.indexOf("Date:") != -1)
	return '"date": "' + str.trim(str.substring(5)) +'", ';
else if(str.indexOf("Helpfulness:") != -1){
	var output = "";
	var temp = str.trim(str.substring(12));
	var begin = temp.indexOf("of");
	var end = temp.indexOf("people");
	var impact = temp.substring(begin+3, end-1);
	var helpful = temp.substring(0, begin-1);
	var helpfulRatio = parseInt(helpful)/parseFloat(impact);
	return '"impact" : ' + impact + ', "helpful" : ' + helpfulRatio + ', ';
}
else if(str.indexOf("Rating:") != -1)
	return '"rating" : ' + str.substring(8,9) + ', ';
else if(str.indexOf("Review:") != -1)
	return '"review" : "' + str.substring(7) + '" } , '
else if(str.indexOf("-----------------------") != -1)
	return "{";
else
	return "";
}

console.log('{ "Reviews": ['); 

while(page < 20){ 
scrape();
page++;
}