function update(elem)
{
	if (elem.classList.contains("active")) return;
	var active = document.querySelector(".active");
	document.getElementById(active.id + "_p").style.display = "none";
	active.classList.remove("active");
	document.getElementById(elem.id + "_p").style.display = "block";
	elem.classList.add("active");
}
