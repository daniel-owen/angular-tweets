// var searchTweets = [];
// var trumpTweets = [];
// var hillaryTweets = [];

function Tweet(title, userName, postContent, img, postTime){
	this.title = title;
	this.userName = userName;
	this.postContent = postContent;
	this.img = img;
	this.postTime = postTime;
}

Tweet.prototype.getTimeSince = function(theDate){
	// console.log(theDate);
	// put in a bunch of logic to figure out the largest denomination of time
	// var timeSince = (theDate - this.postTime) / 1000;
	// if(timeSince > secondsInAYear){
	// 	var textToPost = Math.floor(timeSince/secondsInAYear);
	// }
	return (theDate - this.postTime) / 1000;
};

// Tweet.prototype.company = "Twitter";

// var tweet1 = new Tweet('This is the title', 'dc4life', 'this is some content', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', '1471351423825');
// var tweet2 = new Tweet('This is the title2', 'dc4life', 'this is some content for 2nd post', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', '1471351424825');

// // console.log(tweet1.getTimeSince(Date.now()));
// // console.log(tweet1.getTimeSince(Date.now()));

// tweets.push(tweet1);
// tweets.push(tweet2);

// console.log(tweets);