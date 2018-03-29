$(document).ready(() => {

    $("#scrape-button").on("click", () => {
        console.log("Scraping");
        $.ajax({
            method: "GET",
            url: "/api/scrape"
        }).then((response)=>{
        });
    });

    $('')
});