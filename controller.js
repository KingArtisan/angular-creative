angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);

function mainCtrl ($scope) {

  $scope.users = [];

  $scope.generateTitle = function (user) {
    $scope.titleForm.content = randomizeTitle(user.name);
    
    user.name = '';
  };
  
  $scope.addTitle = function (title) {
    $scope.users.push({ 
      name: title.content
    });
  };
  
  function randomizeTitle (subjectName) {
    var i = Math.floor(Math.random() * 50);
    var message = "";
    
    switch(i){
      case 0: message = "This analysis of "+subjectName+" will make you cry";
        break;
      case 1: message = "10 reasons you should invest in "+subjectName;
        break;
      case 2: message = "This is why "+subjectName+" is taking the sheep industry by storm";
        break;
      case 3: message = subjectName+" can't stop laughing at this";
        break;
      case 4: message = "Twitter reacts to "+subjectName;
        break;
      case 5: message = "Top 7 songs about "+subjectName+"! Number 5 will shock you!";
        break;
      case 6: message = subjectName+" uses this to keep smooth skin! Doctors hate it!";
        break;
      case 7: message = "13 stunning photos of "+subjectName+" that will make you swoon";
        break;
      case 8: message = "People are freaking out about "+subjectName+", and here's why";
        break;
      case 9: message = subjectName+" saved "+randomizeSubject()+" from drowning. But what happened next?";
        break;
      case 10: message = "This is what happens when "+subjectName+" sees "+randomizeSubject();
        break;
      case 11: message = subjectName+" is freaking out about this";
        break;
      case 12: message = randomizeSubject()+" reacts to "+subjectName;
        break;
      case 13: message = "Only 2 in 600 know about "+subjectName+"'s big secret";
        break;
      case 14: message = subjectName+" has 500 dogs thanks to this one trick";
        break;
      case 15: message = "This will make you buy "+subjectName+" lunch";
        break;
      case 16: message = "This is why "+subjectName+" is too cute for words";
        break;
      case 17: message = "What "+subjectName+" did will melt your heart";
        break;
      case 18: message = subjectName+" trips on a loose tire. What happens next will SHOCK you";
        break;
      case 19: message = "Parents are freaking out about "+subjectName;
        break;
      case 20: message = "This is why wolves love "+subjectName;
        break;
      case 21: message = subjectName+" did what???";
        break;
      case 22: message = "You won't believe what "+subjectName+" did!";
        break;
      case 23: message = subjectName+"! You won't believe!";
        break;
      case 24: message = "500 things "+subjectName+" did wrong yesterday";
        break;
      case 25: message = "Top 34 things "+subjectName+" likes to eat at 3:00";
        break;  
      case 26: message = subjectName+" is furious thanks to this one trick";
        break;
      case 27: message = "WE NEED TO TALK ABOUT "+subjectName;
        break;
      case 28: message = "77 things about "+subjectName+" that will make you angry!";
        break;
      case 29: message = "Horrifying: "+subjectName+" spent 5 million dollars on this one thing";
        break;
      case 30: message = subjectName+" said this about penguins";
        break;
      case 31: message = "14 reasons why "+subjectName+" is guilty of enjoying baseball";
        break;
      case 32: message = "Top 27 ways to misspell "+subjectName;
        break;
      case 33: message = subjectName+" is freaking out about twitter! 10 exclusive photos!";
        break;
      case 34: message = "Watch the reaction "+subjectName+" had to "+randomizeSubject()+"! Amazing!";
        break;
      case 35: message = subjectName+" is freaking out about "+randomizeSubject()+" 10 exclusive photos!";
        break;
      case 36: message = subjectName+" had this to say about "+randomizeSubject();
        break;
      case 37: message = randomizeSubject()+" says "+subjectName+" is guilty! Insider info!";
        break;
      case 38: message = "49 exclusive photos of "+subjectName+" and "+randomizeSubject()+"! Number 12 will make you lose faith in humanity!";
        break;
      case 39: message = subjectName+" took 17 things from "+randomizeSubject()+"! WATCH THE VIDEO!";
        break;
      case 40: message = randomizeSubject()+" and "+randomizeSubject()+" met "+subjectName+" in London for a secret meeting! 12 shocking photos!";
        break;
      case 41: message = "You won't believe! "+subjectName+" and "+randomizeSubject()+" knew about THIS!";
        break;
      case 42: message = subjectName+" tripped "+randomizeSubject()+"! What happens next will shock you!";
        break;
      case 43: message = subjectName+" tripped "+randomizeSubject()+"! What happens next will shock you!";
        break;
      case 44: message = "17 photos taken by "+randomizeSubject()+" of "+subjectName+"! Number 14 is AMAZING!";
        break;
      case 45: message = subjectName+" hates "+randomizeSubject()+" because of THIS";
        break
      case 46: message = "This moving story about "+subjectName+" will make you change your mind about "+randomizeSubject();
        break;
      case 47: message = "Why "+subjectName+" says you should invest in "+randomizeSubject();
        break
      case 48: message = subjectName+" cried tears of joy! 7 secret photos!";
        break
      case 49: message = "This speech from "+subjectName+" will give you goosebumps";
        break
      case 50: message = "What happens when "+subjectName+" meets "+randomizeSubject()+"? You won't believe!";
        break
    }
    
    return message.toUpperCase();
  }
  
  function randomizeSubject(){
     var j = Math.floor(Math.random() * 50);
     
     switch (j) {
      case 0: return "Donald Trump";
      case 1: return "Nancy Pelosi";
      case 2: return "The Supreme Court";
      case 3: return "Angela Merkel";
      case 4: return "A Penguin";
      case 5: return "Dr. Phil";
      case 6: return "Papa John";
      case 7: return "CNN";
      case 8: return "Fox News";
      case 9: return "Twitter";
      case 10: return "Facebook";
      case 11: return "Mark Zuckerberg";
      case 12: return "Ronald Reagan";
      case 13: return "Fortnite";
      case 14: return "this mother";
      case 15: return "Charles Darwin";
      case 16: return "Zeus";
      case 17: return "Youtube";
      case 18: return "Canada";
      case 19: return "China";
      case 20: return "This teen";
      case 21: return "Steven";
      case 22: return "This sentient tiger";
      case 23: return "a washing machine";
      case 24: return "this university";
      case 25: return "Batman";
      case 26: return "The Internet";
      case 27: return "Wikipedia";
      case 28: return "Gabe Newell";
      case 29: return "Github";
      case 30: return "Walmart";
      case 31: return "The UN";
      case 32: return "Your dog";
      case 33: return "The guy next to you";
      case 34: return "A pirate";
      case 35: return "an elephant";
      case 36: return "Japan";
      case 37: return "England";
      case 38: return "The Queen";
      case 39: return "The Fun Police";
      case 40: return "Delta Airlines";
      case 41: return "Emperor Palpatine";
      case 42: return "Barack Obama";
      case 43: return "Apple";
      case 44: return "Bill Gates";
      case 45: return "Microsoft";
      case 46: return "Linus Torvalds";
      case 47: return "This chimpanzee";
      case 48: return "Abraham Lincoln";
      case 49: return "Disney";
      case 50: return "Thor";
     }
  }
}

function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<h5>{{user.name}}</h5>'
    ),
  };
}