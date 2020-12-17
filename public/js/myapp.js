const myApp = angular.module('myApp', []);
/** 
  * HeadController
  * is responsible for header content
  */
myApp.controller('HeadController', ['$scope', function($scope) {
    let author = 'Marcin Goryca';
    $scope.author = author.toUpperCase();
    $scope.tabAuthor = author;
    $scope.title = 'Aspiring Graphics Designer / Frontend Developer';

    let mottoArray = ['Against the tide!',
                      'You never stop learning',
                      'Look deep into nature, and then you will understand everything better. - Albert Einstein',
                      'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A.Edison',
                      'It does not matter how slowly you go as long as you do not stop. - Confucius',
                      'Never, never, never give up. - Winston Churchil',
                      'The way to get started is to quit talking and begin doing. - Walt Disney',
                      'What the hell?',
                      'What the fuck?',
                      'Keep fingers crossed',
                      'May the force be with you',
                      'In Space no one can hear you scream...'
                     ];

    let index = Math.floor(Math.random() * mottoArray.length);
    $scope.motto = mottoArray[index];
}]);
/**
 * SocialController
 * is responsible for contact information
 */
myApp.controller('SocialController', ['$scope', function($scope) {
    $scope.mobile = '+48 501 498 569';
    $scope.github = { title: 'Github', address: 'https://github.com/marcingoryca' };
    $scope.skype = { title: 'Skype', address: 'marcin-goryca' };
    $scope.mail = { title: 'Email', address: 'marcin.goryca@gmail.com' };
    $scope.facebook = { title: 'Facebook', address: 'https://www.facebook.com/profile.php?id=100008162109092' };
    $scope.youtube = { title: 'Youtube', address: 'https://www.youtube.com/channel/UCBFafz1o-J6-pjd-IRRI8Hw' };
    $scope.instagram = { title: 'Instagram', address: 'https://www.instagram.com/marcingoryca/' };
    $scope.twitter = { title: 'Twitter', address: 'https://twitter.com/MarcinGoryca' };
}]);
/**
 * DesignerController
 * is responsible for graphics projects
 */
myApp.controller('DesignerController', ['$scope', function($scope) {
    $scope.graphics = [
        "2D",
        "3D"
    ];
}]);
/**
 * DevController
 * is responsible for programming projects
 */
myApp.controller('DevController', ['$scope', function($scope) {
    $scope.tools = [
        "C++ (Visual Studio), Qt",
        "PHP (Laravel)",
        "JavaScript (Angular, ReactJS, jQuery)",
        "HTML / CSS (Foundation, Bootstrap)"
    ];
}]);
/**
 * LearnController
 * is responsible for learning content
 */
myApp.controller('LearnController', ['$scope', function($scope) {
    $scope.list = [
        { title : 'C++', address : 'http://marcingoryca.pl/dev/cpp' },
        { title : 'C#', address : 'http://marcingoryca.pl/dev/cs' },
        { title : 'JavaScript', address : 'http://marcingoryca.pl/dev/js' },
        { title : 'TypeScript', address : 'http://marcingoryca.pl/dev/ts' },
        { title : 'CSS', address : 'http://marcingoryca.pl/dev/css' },
        { title : 'HTML', address : 'http://marcingoryca.pl/dev/html' },
        { title : 'PHP', address : 'http://marcingoryca.pl/dev/php' },
        { title : 'Unity Engine', address : 'http://marcingoryca.pl/dev/unity3d' },
        { title : 'Unreal Engine', address : 'http://marcingoryca.pl/dev/unreal'},
        { title : 'Software Engineering', address: 'http://marcingoryca.pl/dev/se' }
    ];
}]);
/**
 * ProjectsController
 * is responsible for common/actual projects
 */
myApp.controller('ProjectsController', ['$scope', function($scope) {
    $scope.projects = [
        { title : 'Laura, multimedia engine', address : "http://marcingoryca.pl/laura" },
        { title : 'Lena language learning platform', address : "http://marcingoryca.pl/lena" }
    ];
}]);
/**
 * TriviaController
 * is responsible for hobbies projects
 */
myApp.controller('TriviaController', ['$scope', function($scope) {
    $scope.trivia = [
        { title: 'Youtube Channel', address: 'https://www.youtube.com/channel/UCBFafz1o-J6-pjd-IRRI8Hw/featured?view_as=public',
          icon: 'fab fa-youtube', color: 'red' },
        { title: 'Twitter', address: 'https://twitter.com/marcingoryca', 
          icon: 'fab fa-twitter' }
    ];
}]);
/**
 * Update Controller
 * 
 */
myApp.controller('UpdateController', ['$scope', function($scope) {
    let d = new Date();
    const msg = 'Work in Progress...(not)';
    $scope.updateDate = d.getDate() + "" + (d.getMonth()+1) + "" + d.getFullYear() + " => " + msg;
}]);
