//Code is written by Anand MV

Msgs = new Meteor.Collection("msgs");
if (Meteor.isClient) {
  Template.pusher.greeting = function () {
    return "Welcome to pusher.";
  };
   Template.pusher.msgs = function () {
    return Msgs.find({});
  };
	 
 
   Template.pusher.events({
    'click #pushit' : function () {
		var namer=$('#name').val();
		var msgr=$('#mesage').val();
		var messge_b_snd="<p>"+namer+" : "+msgr+"</p>";
			console.log(messge_b_snd);
			Session.set("user", namer);
			Msgs.insert({name: namer, msg: msgr});
	}
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	if (Msgs.find().count() === 0) {
      var names = "Pusher";
	  var msgsss = "Welcome";
        Msgs.insert({name: names, msg: msgsss});
    }
  });
}
