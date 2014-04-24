Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Meteor.startup(function(){
    Session.set("current_page","home");
  }),
  Template.post_list.posts = function(){
    return Posts.find({}, {sort: {date: -1}});
  },
  Template.screen.posts = function(){
    return Posts.find({}, {sort: {date: -1}});
  },
  Template.page.is_list = function(){
    return Session.equals("current_page", "list");
  },
  Template.page.is_new = function(){
    return Session.equals("current_page", "new");
  },
  Template.page.is_home = function(){
    return Session.equals("current_page", "home");
  },

  Template.page.events = {
    'click a#home': function(){

      Session.set("current_page", "home");
      console.log(Session.get("current_page"));
    },
    'click a#list': function(){

      Session.set("current_page", "list");
      console.log(Session.get("current_page"));
    },
    'click a#new': function(){

      Session.set("current_page", "new");
      console.log(Session.get("current_page"));
    }
  },

  Template.new_post.preview = function(){
      author = $('textarea[name=author]').val().split("\n").join("<br/>");  
      content = $('textarea[name=content]').val().split("\n").join("<br/>");
      bgColor = document.getElementById("bColor").value;
      fontColor = document.getElementById("fColor").value;
      size = document.getElementById("size").value;
  },
  Template.new_post.events ={
    'click button.submit': function(){
      author = $('textarea[name=author]').val().split("\n").join("<br/>");  
      content = $('textarea[name=content]').val().split("\n").join("<br/>");
      bgColor = document.getElementById("bColor").value;
      fontColor = document.getElementById("fColor").value;
      size = document.getElementById("size").value;
      posTop = document.getElementById("posTop").value;
      posLeft = document.getElementById("posLeft").value;

      if ( author == ""){
        author = "Anonymous";
      }
      if ( content != "" ){
        Posts.insert ({author: author, content: content, bgColor: bgColor, fColor: fontColor, size: size, posTop: posTop, posLeft: posLeft,date: new Date});
        alert("Post created!");
        Session.set("current_page", "home");
      }
      else{
        alert("Digite o conteúdo do post");
      }
    }
  },
  Template.post_info.events = {
    'click .btn-danger': function(){
      Posts.remove(this._id);
    }
  }
  /*
  Template.post.rendered = function(){
    console.log('rendered');
    $('.draggable').length();
  }
  */
}

if(Meteor.isServer){
  Meteor.startup(function(){
    if (Posts.find().count() === 0){
      Posts.insert ({author: "Me", content: "First!", bgColor: "blue", fColor: "white", size: "3x3", posTop: "1", posLeft:"1", date: new Date});
    }
  });
}