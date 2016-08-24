function changePage(clicked_id) {
	var id = clicked_id;
	switch(id) {
		case "colors":
			window.location.assign("Colors.html")
			break;
		case "shapes":
			window.location.assign("Shapes.html")
			break;
		case "body":
			window.location.assign("Body.html")
			break;
		case "family":
			window.location.assign("Family.html")
			break;
		case "food":
			window.location.assign("Food.html")
			break;			
		default:
			window.location.assign("Day2-button.html")
	}
}