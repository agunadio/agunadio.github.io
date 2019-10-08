$(document).ready(function() {
    var data;
    
    for (var i = 0; i < localStorage.length; i++){
        var pic = document.createElement("img");    
        pic.width = 90;
        pic.height = 90;
        pic.classList.add("pic");

        artistsDiv= document.getElementById("artistsDiv");
        artistDesc = document.createElement("div");
        artistDesc.id = "artistDesc";

        artists = document.createElement("div");
        artists.classList.add("artist");
        artistsDiv.append(artists);

        artistDesc = document.createElement("div");
        artistDesc.id = "artistDesc";

        helper = document.createElement("span");
        helper.class = "helper";

        artistname = document.createElement("h3");
        //artistname.append(name.value);
        artistDesc.append(artistname);

        artistDescription = document.createElement("p");
        //artistDescription.append(aboutArtist.value)
        artistDesc.append(artistDescription);

        deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteArtist");
        
        deleteButton.innerText = "Delete";
        //deleteButton.onclick = deleteRow(this.id);
        //localStorage.clear();

	var dataString = [];
	var key = localStorage.key(i);
    console.log("key: " + key);
    deleteButton.id = key;
	data = JSON.parse(localStorage.getItem(key));

	data.forEach(element => {
		dataString.push(JSON.stringify(element));
	});

    artistNameNode = dataString[0].replace(/["]/g, ''); //removing all "
    artistNameDesc = dataString[1].replace(/["]/g, ''); //removing all "
    pic.src = dataString[2].replace(/["]/g, '');  //removing all "
    
    deleteButton.onclick = deleteRow;

    artistname.append(artistNameNode);
    artistDescription.append(artistNameDesc);
    artists.append(artistDesc);
	artists.append(helper);
	artists.append(pic);
	artists.append(artistDesc);
	artists.append(deleteButton);
}

});


function add() {
	var x = document.getElementById("addDiv");
	if(x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function addToList(){
	var maxChar = 40;

	/*
    var pic = new Image(90,90);
	pic.id = "pic";
*/
	var name = document.getElementById("name");
	var aboutArtist = document.getElementById("aboutArtist");
	var artistUrl = document.getElementById("artistUrl");

	if (name.value.length > maxChar) {
        name.value = name.value.slice(0, maxChar);
	}

	if (aboutArtist.value.length > maxChar) {
        aboutArtist.value = aboutArtist.value.slice(0, maxChar);
	}

    //pic.src = artistUrl.value;
    
    artists = document.getElementsByClassName("artist");
	localStorage.setItem(name.value, JSON.stringify([name.value, aboutArtist.value, artistUrl.value ]));
    //artists.append(pic);
	

    /*
	
*/
	document.getElementById('addDiv').style.display = "none";
	document.getElementById("name").value = '';
	document.getElementById("aboutArtist").value = '';
    document.getElementById("artistUrl").value = '';	
    
    window.location.reload(false); 
}

function deleteRow(){
    var row = $(this).closest('div');
    localStorage.removeItem(this.id);
    
    row.remove();
    

}

function search(){
    document.getElementById("artistsDiv").innerHTML = "";

    searchValue = document.getElementById("searchBarInput").value.toLowerCase();
    console.log("SEARRRRRCHHHHHHHHHHHH: " + searchValue);

    for (var i = 0; i < localStorage.length; i++){
	    var dataString = [];
        var key = localStorage.key(i);
        keyString = JSON.stringify(key).replace(/["]/g, '').toLowerCase();

        if (keyString.includes(searchValue)){
            var pic = document.createElement("img");    
            pic.width = 90;
            pic.height = 90;
            pic.classList.add("pic");

            artistsDiv= document.getElementById("artistsDiv");
            artistDesc = document.createElement("div");
            artistDesc.id = "artistDesc";

            artists = document.createElement("div");
            artists.classList.add("artist");
            artistsDiv.append(artists);

            artistDesc = document.createElement("div");
            artistDesc.id = "artistDesc";

            helper = document.createElement("span");
            helper.class = "helper";

            artistname = document.createElement("h3");
            //artistname.append(name.value);
            artistDesc.append(artistname);

            artistDescription = document.createElement("p");
            //artistDescription.append(aboutArtist.value)
            artistDesc.append(artistDescription);

            deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteArtist");
            deleteButton.id = key;
            
            deleteButton.innerText = "Delete";
            data = JSON.parse(localStorage.getItem(key));
            data.forEach(element => {
                dataString.push(JSON.stringify(element));
            });

            artistNameNode = dataString[0].replace(/["]/g, ''); //removing all "
            artistNameDesc = dataString[1].replace(/["]/g, ''); //removing all "
            pic.src = dataString[2].replace(/["]/g, '');  //removing all "
            
            deleteButton.onclick = deleteRow;

            artistname.append(artistNameNode);
            artistDescription.append(artistNameDesc);
            artists.append(artistDesc);
            artists.append(helper);
            artists.append(pic);
            artists.append(artistDesc);
            artists.append(deleteButton);

        }

        


    }

}