/* Name this external file gallery.js */

/**
 * upDate(previewPic)
 * Triggers on mouseover on any thumbnail image.
 * 1) Logs event occurrence and the previewPic's alt and src to console.
 * 2) Updates the background-image of the div with id "image" to the preview image src.
 * 3) Updates the text content of the div with id "image" to the preview image alt text.
 */
function upDate(previewPic) {
	console.log("upDate triggered!");
	console.log("previewPic alt text: ", previewPic.alt);
	console.log("previewPic source URL: ", previewPic.src);

	var targetImageDiv = document.getElementById("image");
	targetImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
	targetImageDiv.innerHTML = previewPic.alt;
}

/**
 * unDo()
 * Triggers on mouseout when leaving any thumbnail image.
 * 1) Logs event occurrence to console.
 * 2) Resets the background-image of the div with id "image" back to url('').
 * 3) Resets the text of the div with id "image" back to the original prompt text.
 */
function unDo() {
	console.log("unDo triggered!");

	var targetImageDiv = document.getElementById("image");
	targetImageDiv.style.backgroundImage = "url('')";
	targetImageDiv.innerHTML = "Hover over an image below to display here.";
}
