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
        roadScore: 83,
        date: '5-14'
    }, {
        homeTeam: ROC,
        homeScore: 106,
        roadTeam: WAR,
        roadScore: 119,
        date: '5-15'
    }, {
        homeTeam: CEL,
        homeScore: 107,
        roadTeam: CAV,
        roadScore: 94,
        date: '5-16'
    }, {
        homeTeam: ROC,
        homeScore: 127,
        roadTeam: WAR,
        roadScore: 105,
        date: '5-17'
    }, {
        homeTeam: CAV,
        homeScore: 116,
        roadTeam: CEL,
        roadScore: 86,
        date: '5-20'
    }, {
        homeTeam: WAR,
        homeScore: 126,
        roadTeam: ROC,
        roadScore: 85,
        date: '5-21'
    }, {
        homeTeam: CAV,
        homeScore: 111,
        roadTeam: CEL,
        roadScore: 102,
        date: '5-22'
    }, {
        homeTeam: WAR,
        homeScore: 92,
        roadTeam: ROC,
        roadScore: 95,
        date: '5-23'
    }, {
        homeTeam: CEL,
        homeScore: 96,
        roadTeam: CAV,
        roadScore: 83,
        date: '5-24'
    }, {
        homeTeam: ROC,
        homeScore: 98,
        roadTeam: WAR,
        roadScore: 94,
        date: '5-25'
    }, {
        homeTeam: CAV,
        homeScore: 109,
        roadTeam: CEL,
        roadScore: 99,
        date: '5-26'
    }, {
        homeTeam: WAR,
        homeScore: 115,
        roadTeam: ROC,
        roadScore: 86,
        date: '5-27'
    }, {
        homeTeam: CEL,
        homeScore: 79,
        roadTeam: CAV,
        roadScore: 87,
        date: '5-28'
    }, {
        homeTeam: ROC,
        homeScore: 92,
        roadTeam: WAR,
        roadScore: 101,
        date: '5-29'
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

    $scope.lostTeam = [CEL, ROC];

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

    $scope.isTeamLost = function(team) {
        return $scope.lostTeam.indexOf(team) >= 0;
    }
});