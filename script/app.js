const CEL = "celtics";
const CAV = "cavaliers";
const ROC = "rockets";
const WAR = "warriors";

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.gameData = [{
        homeTeam: CEL,
        homeScore: 108,
        roadTeam: CAV,
        roadScore: 83
    }];

    $scope.data = [{
        name: "李好",
        team: CEL
    }, {
        name: "占红来",
        team: CAV
    }, {
        name: "刘家桢",
        team: ROC
    }, {
        name: "王义杰",
        team: WAR
    }, {
        name: "李伟晔",
        team: WAR
    }, {
        name: "王智",
        team: WAR
    }, {
        name: "张巍",
        team: ROC
    }, {
        name: "丁旷",
        team: CAV
    }, {
        name: "刘胜思",
        team: WAR
    }, {
        name: "郑达夫",
        team: CEL
    }, {
        name: "陈璐",
        team: WAR
    }, {
        name: "余自瑞",
        team: ROC
    }, {
        name: "徐江",
        team: WAR
    }, {
        name: "姚文杰",
        team: ROC
    }, {
        name: "陈亮",
        team: WAR
    }, {
        name: "汪大亨",
        team: CAV
    }, {
        name: "熊节",
        team: CEL
    }];

    $scope.getTotalAmount = function () {
    	return $scope.data.length * 10.0;
    }

    $scope.getBonus = function (team) {
    	var totalAmount = $scope.getTotalAmount();

    	var teamCount = $scope.data.filter(function(item) {
    		return item.team === team;
    	}).length;

    	return Math.round(totalAmount * 100 / teamCount) / 100;
    }

    $scope.convert = function(engName) {
        var nameMap = {
            celtics: "凯尔特人",
            cavaliers: "骑士",
            rockets: "火箭",
            warriors: "勇士"
        }
        return nameMap[engName];
    }
});