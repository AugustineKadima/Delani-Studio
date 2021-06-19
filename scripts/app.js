$(document).ready(function () {
    $("div#design").click(function(event) {
        event.preventDefault();
        $("div#design").toggle()
        $("p#designText").toggle()

    })

    $("p#designText").click(function(event) {
        event.preventDefault();
       
        $("p#designText").toggle()
        $("div#design").toggle()

    })
});

$(document).ready(function () {
    $("div#development").click(function(event) {
        event.preventDefault();

        $("div#development").toggle()
        $("p#developmentText").toggle()

    })

    $("p#developmentText").click(function(event) {
        event.preventDefault();

        $("div#development").toggle()
        $("p#developmentText").toggle()

    })
});

$(document).ready(function () {
    $("div#productManagement").click(function(event) {
        event.preventDefault();

        $("div#productManagement").toggle()
        $("p#productManagementText").toggle()
        
    })

    $("p#productManagementText").click(function(event) {
        event.preventDefault();

        $("div#productManagement").toggle()
        $("p#productManagementText").toggle()
        
    })
});