app = angular.module('ExampleApp', ['ui.calendar', 'ui.bootstrap', 'ui.bootstrap.datetimepicker']);

app.controller('ExampleController', function ($scope, $log, uiCalendarConfig, $timeout, $http) {
    $scope.renderCalender = function (calendar) {
        console.log($scope.events)
        uiCalendarConfig.calendars.myCalendar.fullCalendar('removeEventSource', $scope.events, true)
    };
    $scope.uiCalendarConfig = uiCalendarConfig;
    $scope.events = [{
        "id": "51c54235fb4c960b37000014",
        "title": "Sample Event",
        "start": "2016-01-26T08:00:00+08:00",
        "end": "2016-01-26T10:00:00+08:00",
        "url": "http://google.com/",
        "allDay": false
    }];

    $scope.eventSources = [$scope.events];

    $scope.calendarConfig = {
        selectable: true,
        selectHelper: true,
        editable: true
    };

    $scope.eventRender = function (event, element, view) {
        element.attr({
            'tooltip': event.title,
            'tooltip-append-to-body': true
        });
        $compile(element)($scope);
    };

    $scope.addEvent = function () {

        //12 - 1617238800000
        //12:30 - 1617240600000
        //3:30 - 1617251400000

        var time2 = $scope.event.startDate.getTime();
        console.log(time2);

        var time3 = $scope.event.endDate.getTime();
        console.log(time3);

        if ($scope.event.startDate.getTime() == '1617235200000' || $scope.event.startDate.getTime() == '1617238800000' ||
            $scope.event.startDate.getTime() == '1617240600000' || $scope.event.startDate.getTime() == '1617251400000')
            window.alert('This slot has been booked already');

        else if ($scope.event.endDate.getTime() == '1617258600000')
            window.alert('Office hour finishes at 5pm');
        else {
            /*Send Email to staff regarding a booking been made*/
            $http.get("/Calendar").success(function (data) {
                console.log('Success');
            })
                .error(function (data) {
                    $scope.Status = "data not found";
                });
            $scope.events.push({
                title: $scope.event.Title,
                start: $scope.event.startDate,
                end: $scope.event.endDate,
                stick: true
            });
            console.log($scope.pendingRequests);
        }
    };
    $scope.showIt = true;
    $scope.showCal = function () {
        $scope.showIt = !$scope.showIt;
        $scope.showIt && $timeout($scope.renderCalender);
    };


});