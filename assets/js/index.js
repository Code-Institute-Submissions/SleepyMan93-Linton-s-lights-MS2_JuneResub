/* Viewport User Input Fix: https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone 
I added in an extra CSS style so that the input field doesn't grow with a border*/

function sizing(x) {
    if (x.matches) {
        $('input[type=text]').on('focus', function(){
        // replace CSS font-size with 16px to disable auto zoom on iOS
        $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px').addClass("remove-outline");
        }).on('blur', function(){
        // put back the CSS font-size
        $(this).css('font-size', $(this).data('fontSize'));
    });
    }
}

var x = window.matchMedia("(max-width: 550px)")
sizing(x) // Call listener function at run time
x.addListener(sizing) // Attach listener function on state changes


/* Username Store and Messages */

function userName() {

    var name = document.getElementById("nameField").value;
    
    if (name == "") {
        alert("Enter Username To Continue");
        return false;
    };

    var introMessage = `<p class="typewriter">Now we're ready for LIFT OFF ${name}!</p>
    <p class="typewriter2">Push the BIG red button...</p>
    <p class="typewriter3">Your mission statement awaits!<span>|</span></p>`;
    $("#introMessage").addClass("speech-box");
    document.getElementById("introMessage").innerHTML = introMessage;


    var message = `<p class="text-color">HEEELLP! MY SHIP... IT'S ABOUT TO CRASH...</p> 

    <p class="text-color">${name}, my name is Linton and I'm on a super important mission to help save our planet and I need YOUR help!</p>
    <p class="text-color">Will you be the hero that Earth needs?</p>
    <p class="text-color">To restore power, the mainframe needs a color series. There are 15 rounds to save Earth. When the mainframe flashes a color, wait and then
    push the same color. If you get it right, the mainframe will then flash one more light in the series.</p>
    <p class="text-color">All you have to do is REMEMBER the pattern and repush the lights in order...
    Reckon you could do that?... That's right! I KNOW YOU CAN.</p>
    <p class="text-color">Gods speed ${name}!!. If you need me, just click on "Restart Game" to remind yourself of the mission...<span>|</span> </p>`;
    window.localStorage.setItem("message", message);
}