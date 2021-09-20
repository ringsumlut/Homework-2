function showVariable(newName) {
    //console.log("newName app.js " + newName);
}
// function showTestVariable(newTest) {
//     console.log("newTest app.js " + newTest);
// }

function setBindings() {
    $("nav a").click(function (e) {
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID, showVariable);
    }
    )
}

$(document).ready(function () {
    console.log("Ready");
    setBindings();
})

$('nav a').click(function () {
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});
