var DOWNLOAD_DELAY = 10000;

// var i = 0, howManyTimes = $("button.content-item").length -1;
var i = 0, howManyTimes = 10;

function downloader() {
    $("button.content-item").eq(i).click();
    console.log(i + ": " + location.href.replace("https://app.pluralsight.com/course-player?clipId=", ""));
    window.location.href = "https://vid30.pluralsight.com/clips/resolution/d52d8942-cc0d-40e0-ba4b-a2dfc9f58816/current/mp4/1280x720.mp4?verify=1614200652-qPG%2FnVzB%2FTvAeRydIRBbxqhSu8v5vgDCCGElbHaytOs%3D";
    i++;
    if (i < howManyTimes) {
        setTimeout(downloader, DOWNLOAD_DELAY);
    }
}

downloader();