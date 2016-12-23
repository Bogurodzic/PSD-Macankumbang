var categories = document.getElementById("works-categories").children,
	catLength = categories.length

for(var i=0; i<catLength; i++){
	
	var category = categories[i];

	category.addEventListener("click", function(e){

		e.preventDefault();

		var categoryAttr = this.getAttribute("data-filter");

		filterPortfolio(categoryAttr);

	});

}

var portfolio = document.querySelector(".works-portfolio").children;

function filterPortfolio(attrToFilter){

	showAll();

	[].forEach.call(portfolio, function(element){

		var elementAttr = element.getAttribute("data-filter");

		if (attrToFilter === "All"){
			showAll();
			return;
		}

		if (attrToFilter !== elementAttr){
			element.style.display = "none";
			element.style.opacity = 0;
		}
	});

}

function showAll(){

	[].forEach.call(portfolio, function(element){
		element.style.display = "block";
		element.style.opacity = 1;
	});

}