var users_joined = {};
var west_side = [];
 	east_side = [];

window.new_user_joined = function(name) {
	if (name in users_joined){return;
	}else{
		users_joined[name] = name;
		console.log(users_joined)
}}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	if ('west_side'.length<='east_side'.length) {
		west_side.push (users_joined);
	}

	else if ('west_side'.length<'east_side'.length) {
 		'east_side'.push (users_joined)
	}
 		else {false}

	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");
    console.log(west_side);
    console.log(east_side)
}


// assign_to_chatroom and you'll place each user in data structure to chatroom. include button element each user

// Hints

// In the assign_to_chatroom function, you'll go through your users_joined data structure, pulling out users in order of appearance and inserting them into the DOM via jQuery
// To keep both containers equally full, you could:
// Create a variable that tells you which container you're going to use next, then when you've used it, point the variable to the other container
// Create a boolean variable that when true, indicates using one container and when false, indicates you should use the other. Change the boolean every time a student is assigned.