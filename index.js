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

	var pic = new Image(90,90);
	pic.id = "pic";


	var name = document.getElementById("name");
	var aboutArtist = document.getElementById("aboutArtist");
	var artistUrl = document.getElementById("artistUrl");

	if (name.value.length > maxChar) {
        name.value = name.value.slice(0, maxChar);
	}

	if (aboutArtist.value.length > maxChar) {
        aboutArtist.value = aboutArtist.value.slice(0, maxChar);
	}

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
	artistname.append(name.value);
	artistDesc.append(artistname);

	artistDescription = document.createElement("p");
	artistDescription.append(aboutArtist.value)
	artistDesc.append(artistDescription);

	deleteButton = document.createElement("button");
	deleteButton.classList.add("deleteArtist");
	deleteButton.innerText = "Delete";
	deleteButton.onclick = deleteRow;

	pic.src = artistUrl.value;

	artists.append(artistDesc);
	artists.append(helper);
	artists.append(pic);
	artists.append(artistDesc);
	artists.append(deleteButton);

	document.getElementById('addDiv').style.display = "none";
	document.getElementById("name").value = '';
	document.getElementById("aboutArtist").value = '';
	document.getElementById("artistUrl").value = '';

	
}

function deleteRow(){
	var row = $(this).closest('div');
	row.remove();
}