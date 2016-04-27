    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                controller  : 'mainController'
            })

            .when('/volume', {
                templateUrl : 'pages/teste1.html'
            })

            .when('/inicial', {
                templateUrl : 'pages/tela_inicial.html'
            })

            .when('/internet', {
                templateUrl : 'pages/menu/internet.html'
            })

            .when('/resets', {
                templateUrl : 'pages/menu/resets.html',
                controller  : 'resetsController'
            })

            .when('/sams', {
                templateUrl : 'pages/menu/sams.html',
                controller  : 'samsController'
            })

            .when('/next', {
                templateUrl : 'pages/qualidade_foto.html',
                controller  : 'sistemaNextController'
            })

            // route for the contact page
            .when('/ligar', {
                templateUrl : 'pages/teste.html'
            });
        });



        // create the controller and inject Angular's $scope
        scotchApp.controller('resetsController', function($scope) {

            $('select.dropdown')
            .dropdown()
            ;
            
            $("#resets").change(function(){

                var input = $("#resets").val();

                if(input === "5_0"){
                    $("#5_0").show();
                    $("#5_1").hide();
                    $("#6_0").hide();
                }
                if(input === "5_1"){
                    $("#5_0").hide();
                    $("#5_1").show();
                    $("#6_0").hide();
                }
                if(input === "6_0"){
                    $("#5_0").hide();
                    $("#5_1").hide();
                    $("#6_0").show();
                }


            })

        });

        // create the controller and inject Angular's $scope
        scotchApp.controller('sistemaNextController', function($scope) {

            var start = 1;


            var qt = $(".tb").length;


            $( document ).ready(function() {

              $(".texto .ui.label:visible").html("Passo " + start);

          });

            $scope.next = function() {
              ++start;

              if(start <= 1){
                $("#btn_prev").attr("disabled", "true");
                $(".texto .ui.label:visible").html("Passo " + start);
            }
            if(start > 1){

                $("#btn_prev").removeAttr("disabled");
                if(start === qt){
                  $("#btn_next").attr("disabled", "true");
              }
              $(".tb:visible").next(".tb").show();
              $(".texto .ui.label:visible").html("Passo " + start);
              $(".tb:visible").prev(".tb").hide();
              console.log(start);
          }
      };

      $scope.prev = function() {
          --start;

          if(start === 1){
            $("#btn_prev").attr("disabled", "true");
            $("#btn_next").removeAttr("disabled");
            $(".tb:visible").hide();
            $(".tb").first().show();
            $(".texto .ui.label:visible").html("Passo " + start);
            console.log(start);
        }
        if(start > 1){
            $("#btn_next").removeAttr("disabled");
            if(start === qt){
                $("#btn_next").attr("disabled", "true");
            }
            $(".tb:visible").prev(".tb").show();
            $(".texto .ui.label:visible").html("Passo " + start);
            $(".tb:visible").next(".tb").hide();
            console.log(start);
        }
    };


});

        // create the controller and inject Angular's $scope
        scotchApp.controller('mainController', function($scope) {

            var corCache = localStorage.getItem("cor");

            $("#top_menu").css("background-color", corCache);


            $("h1").css("color", corCache);

            $("#persAzul").click(function(){
                $("#top_menu").css("background-color", "#2185d0");
                $("h1").css("color", "#2185d0");

                localStorage.setItem("cor", "#2185d0");
            })

            $("#persLaranja").click(function(){
                $("#top_menu").css("background-color", "#f2711c");
                $("h1").css("color", "#f2711c");

                localStorage.setItem("cor", "#f2711c");
            })
            $("#persRosa").click(function(){
                $("#top_menu").css("background-color", "#e03997");
                $("h1").css("color", "#e03997");

                localStorage.setItem("cor", "#e03997");
            })


        });


