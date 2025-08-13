function updateTime() {
	let londonElement = document.querySelector("#london");
	let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
	let londonTime = moment().tz("London");
  
	londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

	let newyorkElement = document.querySelector("#newyork");
	let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
	let newyorkTime = moment().tz("New York");
  
	newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
  newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]A[</small>]");

	let joburgElement = document.querySelector("#joburg");
	let joburgDateElement = joburgElement.querySelector(".date");
  let joburgTimeElement = joburgElement.querySelector(".time");
	let joburgTime = moment().tz("Johannesburg");
	
	joburgDateElement.innerHTML = joburgTime.format("MMMM Do YYYY");
	joburgTimeElement.innerHTML = joburgTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
