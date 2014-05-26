if (Meteor.isClient) {
  Meteor.startup(function(){
<<<<<<< HEAD
    Session.set("current_page","home");
=======
    Session.set("current_page","teste");
>>>>>>> 4babfd60645ba558959ce843b2421d502511e92b
  }),

  Template.page.is_list = function(){
    return Session.equals("current_page", "list");
  },
  Template.page.is_new = function(){
<<<<<<< HEAD
    return Session.equals("current_page", "new_post");
=======
    return Session.equals("current_page", "new");
>>>>>>> 4babfd60645ba558959ce843b2421d502511e92b
  },
  Template.page.is_home = function(){
    return Session.equals("current_page", "home");
  },
<<<<<<< HEAD
=======
  Template.page.is_new_image = function(){
    return Session.equals("current_page", "new_img");
  },
>>>>>>> 4babfd60645ba558959ce843b2421d502511e92b
  Template.page.is_teste = function(){
    return Session.equals("current_page", "teste");
  },

  Template.page.events = {
    'click a#home': function(){
<<<<<<< HEAD
=======

>>>>>>> 4babfd60645ba558959ce843b2421d502511e92b
      Session.set("current_page", "home");
      console.log(Session.get("current_page"));
    },
    'click a#list': function(){

      Session.set("current_page", "list");
      console.log(Session.get("current_page"));
    },
<<<<<<< HEAD
    'click a#new_post': function(){

      Session.set("current_page", "new_post");
=======
    'click a#new': function(){

      Session.set("current_page", "new");
      console.log(Session.get("current_page"));
    },
    'click a#newImg': function(){
      Session.set("current_page", "new_img");
>>>>>>> 4babfd60645ba558959ce843b2421d502511e92b
      console.log(Session.get("current_page"));
    },
    'click a#teste': function(){
      Session.set("current_page", "teste");
      console.log(Session.get("current_page"));
    }
  }
<<<<<<< HEAD
=======

}

if(Meteor.isServer){
  Meteor.startup(function(){
    if (Posts.find().count() === 0){
      Posts.insert ({author: "Me", content: "First!", bgColor: "blue", fColor: "white", size: "3x3", posTop: 5, posLeft: 5, date: new Date});
    }
  });
>>>>>>> 4babfd60645ba558959ce843b2421d502511e92b
}