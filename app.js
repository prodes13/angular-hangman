var app = angular.module("HangmanApp", []);
app.controller("GameController", ['$scope', function($scope) {

    var words = ["rat", "dog", "cat", "mat", ];
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWord = '';
    $scope.input = {
        letter: ''
    }
    var selectRandomWord = function() {
        var index = Math.round(Math.random()*(words.length-1));
        return words[index];
    }
    console.warn(selectRandomWord());

    var newGame = function() {
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen = [];
        $scope.guesses = 6;
        $scope.displayWord = '';

        selectedWord = selectRandomWord();
        console.log(selectedWord);
    }

    newGame();
    
}]);