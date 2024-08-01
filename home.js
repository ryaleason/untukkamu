document.getElementById('clickableImage').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.play();
    document.getElementById('clickableImage').classList.add('hilang');
    document.getElementById('tbl').classList.add('hilang');
    function showTextForDuration(elementId, showTime, duration) {
        setTimeout(function() {
            document.getElementById(elementId).classList.remove('hidden');
            document.getElementById(elementId).style.position = 'absolute';
            document.getElementById(elementId).style.zIndex = '99';
        }, showTime); // Show text after showTime

        setTimeout(function() {
            document.getElementById(elementId).classList.add('hidden');
            document.getElementById(elementId).style.position = 'absolute';
            document.getElementById(elementId).style.zIndex = '-1';
        }, showTime + duration); // Hide text after showTime + duration
    }

    // Show text1 for 2 seconds after 1 second
    showTextForDuration('text1', 1000, 2000);

    // Show text2 for 2 seconds after 4 seconds
    showTextForDuration('text2', 4000, 2000);

    // Show text3 for 2 seconds after 7 seconds
    showTextForDuration('text3', 7000, 2000);
    showTextForDuration('text4', 10000, 2000);
    showTextForDuration('text5', 13000, 2000);
    showTextForDuration('text6', 16000, 3000);
    showTextForDuration('text7', 20000, 2000);
    showTextForDuration('text8', 23000, 2000);
    showTextForDuration('text9', 26000, 2000);
    showTextForDuration('text10', 29000, 2000);
    showTextForDuration('text11', 32000, 2000);
    showTextForDuration('text12', 35000, 2000);
    showTextForDuration('text13', 38000, 2000);
    showTextForDuration('text14', 41000, 2000);
    showTextForDuration('text15', 44000, 2000);
    showTextForDuration('text16', 47000, 2000);
    showTextForDuration('text17', 50000, 2000);
    showTextForDuration('text18', 53000, 2000);
    showTextForDuration('text19', 56000, 2000);
    showTextForDuration('box', 59000, 120000);
    showTextForDuration('text20', 180000, 12000);
});






    // Function to show text for a specified duration
    