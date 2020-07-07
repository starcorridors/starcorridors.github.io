/* SW-Player */
var audio;

$( document ).ready(function() {
    audio = $(".sw-player");
    addEventHandlers();
    audio.prop("muted",!audio.prop("muted"));
    audio.trigger('play');
});

function addEventHandlers(){
    $("a.sw-player-load").click(loadAudio);
    $("a.sw-player-start").click(startAudio);
    $("a.sw-player-forward").click(forwardAudio);
    $("a.sw-player-back").click(backAudio);
    $("a.sw-player-pause").click(pauseAudio);
    $("a.sw-player-stop").click(stopAudio);
    $("a.sw-player-volume-up").click(volumeUp);
    $("a.sw-player-volume-down").click(volumeDown);
    $("a.sw-player-mute").click(toggleMuteAudio);
}

		
function loadAudio(){
    audio.bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });
    audio.trigger('load');
}

function startAudio(){
    audio.trigger('play');
}

function pauseAudio(){
    audio.trigger('pause');
}

function stopAudio(){
    pauseAudio();
    audio.prop("currentTime",0);
}

function forwardAudio(){
    pauseAudio();
    audio.prop("currentTime",audio.prop("currentTime")+5);
    startAudio();
}

function backAudio(){
    pauseAudio();
    audio.prop("currentTime",audio.prop("currentTime")-5);
    startAudio();
}

function volumeUp(){
    var volume = audio.prop("volume")+0.2;
    if(volume >1){
        volume = 1;
    }
    audio.prop("volume",volume);
}

function volumeDown(){
    var volume = audio.prop("volume")-0.2;
    if(volume <0){
        volume = 0;
    }
    audio.prop("volume",volume);
}

function toggleMuteAudio(){
    audio.prop("muted",!audio.prop("muted"));
    $( ".sw-player-mute" ).toggle();
    $( ".sw-player-status" ).toggle();
}




