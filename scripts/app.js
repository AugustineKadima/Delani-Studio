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
        
    })
});

$(document).ready(function () {
    $("div#productManagement").click(function(event) {
        event.preventDefault();
        
    })
});