$(document).ready(() => {

    $("#scrape-button").on("click", () => {
        console.log("Scraping");
        $.ajax({
            method: "GET",
            url: "/api/scrape"
        }).then((response)=>{
            console.log(response);
            //window.location = "/saved";
        });
    });
});