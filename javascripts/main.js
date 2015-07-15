var main = function() {
    $('.navigation-item').click(function() {
        switch(this.id) {
            case "home":
                $('.content').innerHTML = "<p>Home</p>";
                //$('.content').load();
                break;
            case "commons":
                $('.content').load("/doriincommons.html");
                break;
            case "notes":
                $('.content').load("/notesandrefs.html");
                break;
            case "projects":
                $('.content').load("/projects.html");
                break;
            default:
                $('.content').innerHTML = "<h1>AN ERROR HAS OCCURRED</h1>";
        }
    });
}

$(documents).ready(main);
