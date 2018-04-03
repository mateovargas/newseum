$(document).ready(() => {

    $("#scrape-button").on("click", () => {
        console.log("Scraping");
        $.ajax({
            method: "GET",
            url: "/api/scrape"
        }).then((response)=>{
        });
    });

    
    $(".navbar-nav li").click(function () {
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });

    $(".addNote").on("click", function () {
        var thisId = $(this).attr("data-id");
        $.ajax({
            method: "POST",
            url: "/api/save/" + thisId
        }).done(function (data) {
            window.location = "/"
        })
    });

    $(".delete").on("click", function () {
        var thisId = $(this).attr("data-id");
        $.ajax({
            method: "POST",
            url: "/api/delete/" + thisId
        }).done(function (data) {
            window.location = "/saved"
        })
    });

    $(".saveNote").on("click", function () {
        var thisId = $(this).attr("data-id");
        if (!$("#noteText" + thisId).val()) {
            alert("please enter a note to save")
        } else {
            $.ajax({
                method: "POST",
                url: "/api/save/" + thisId,
                data: {
                    text: $("#noteText" + thisId).val()
                }
            }).done(function (data) {
                // Log the response
                console.log(data);
                // Empty the notes section
                $("#noteText" + thisId).val("");
                $(".modalNote").modal("hide");
                window.location = "/saved"
            });
        }
    });

    $(".deleteNote").on("click", function () {
        var noteId = $(this).attr("data-note-id");
        var articleId = $(this).attr("data-article-id");
        $.ajax({
            method: "DELETE",
            url: "/api/delete/" + noteId + "/" + articleId
        }).done(function (data) {
            console.log(data)
            $(".modalNote").modal("hide");
            window.location = "/saved"
        })
    });
});