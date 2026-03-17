var target = document.getElementById("esContent");
var newLoadingElement = document.createElement("div");
newLoadingElement.id = "loading";
newLoadingElement.innerHTML = '<div id="loading-center"><div id="loading-center-absolute"><div class="object" id="object_one"></div><div class="object" id="object_two"></div><div class="object" id="object_three"></div><div class="object" id="object_four"></div></div><div id="loading-text">Loading : 0%</div></div>';

target.addEventListener("esAppInfoInit",function(e){
	var appInfoSource = e.detail.appInfoSource;
	var loadingElement = appInfoSource.loadingElement;
	if (loadingElement.parentElement){
		loadingElement.parentElement.removeChild(loadingElement);
		target.appendChild(newLoadingElement);
		var rect = target.getBoundingClientRect();
		newLoadingElement.style.width = rect.width + "px";
		newLoadingElement.style.height = rect.height + "px";
	}
});

target.addEventListener("esLoadProgress",function(e){	
	var loadingText = document.getElementById("loading-text");
	var progress = e.detail.progress >>0;
	if(loadingText){
		loadingText.innerText= "Loading : " + progress + "%";
	}
});

target.addEventListener("esLoadComplete",function(e){
	if (newLoadingElement.parentElement)
		newLoadingElement.parentElement.removeChild(newLoadingElement);
});