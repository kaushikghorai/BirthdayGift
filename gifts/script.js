function bgmusic() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.error('Error playing audio:', error);
    });
};

function balloonpop(){
    var audio = document.getElementById('balloon-pop');
    audio.volume = 0.2;
    audio.play().catch(function(error) {
        console.error('Error playing audio:', error);
    });
}

var i=0;

const emojis = ['🙂','🥰','🤩','😘','🤗','❤️','🌹','🥀','🌺','🌷','💐','✨','🎈','🎉','🎊','🎀','🎁'];
function trigger(){
    var callCE;
    for(callCE=0;callCE<250;callCE++){
        createEmoji();
    }
}
 
function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(emoji);

    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}


function img(){
    document.getElementById('image').innerHTML = "<center><img src='doreamon.png' width='500px'></center>";
    document.getElementById('image').style.position = 'fixed';
    document.getElementById('image').style.transition = "inset 5s, transform 5s";
    document.getElementById('image').style.inset = '70% 0% 0% 70%';
    document.getElementById('image').style.transform = 'scale(0.3)';
    setTimeout(change, 2000);
}

function messageOpacity(identity){
    document.getElementById(identity).style.opacity = 0;
    document.getElementById(identity).style.transition = "opacity 0.5s";
    setTimeout(() => {
        document.getElementById(identity).style.opacity = 1;
    }, 1);
}

function change(){
    //document.body.style.backgroundColor = '#fafafa';
    document.getElementById("video").style.display = "none";
    document.getElementById("video2").style.display = "none";
    document.getElementById("message").style.display = "block";
    switch(i){
        case 0:
            document.getElementById("message").innerHTML = "<h1><center>Happy Birthday!!</center></h1>";
            messageOpacity("message");
            break;
        case 1:
            document.getElementById("message").innerHTML = "<h1><center>Wishing you all the happiness in the world!</center></h1>";
            messageOpacity("message");
            break;
        case 2:
            document.getElementById("message").innerHTML = "<h1><center>May your day be filled with love and laughter!</center></h1>";
            messageOpacity("message");
            break;
        case 3:
            document.getElementById("message").innerHTML = "<h1><center>Happiness looks great on you!</center></h1>";
            messageOpacity("message");
            break;
        case 4:
            document.getElementById("message").innerHTML = "<h1><center>Never stop being you!</center></h1>";
            messageOpacity("message");
            break;
        case 5:
            document.getElementById("message").innerHTML = "<h1><center>Chase your dreams and never give up!</center></h1>";
            messageOpacity("message");
            break;
        case 6:
            document.getElementById("message").innerHTML = "<h1><center>Here's to you and all your dreams!</center></h1>";
            messageOpacity("message");
            break;
        case 7:
            document.getElementById("message").innerHTML = "<h1><center>Wishing you a year full of success!</center></h1>";
            messageOpacity("message");
            break;
        case 8:
            document.getElementById("message").innerHTML = "<h1><center>You are amazing just the way you are!</center></h1>";
            messageOpacity("message");
            break;
        case 9:
            document.getElementById("message").innerHTML = "<h1><center>You deserve all the good things today!</center></h1>";
            messageOpacity("message");
            break;
        case 10:
            document.getElementById("message").innerHTML = "<h1><center>May this year bring you new adventures!</center></h1>";
            messageOpacity("message");
            break;
        case 11:
            document.getElementById("message").innerHTML = "<h1><center>Your smile can light up any room!</center></h1>";
            messageOpacity("message");
            break;
        case 12:
            document.getElementById("message").innerHTML = "<h1><center>Celebrate every moment of your life!</center></h1>";
            messageOpacity("message");
            break;
        case 13:
            document.getElementById("message").innerHTML = "<h1><center>You are loved more than you know!</center></h1>";
            messageOpacity("message");
            break;
        case 14:
            document.getElementById("message").innerHTML = "<h1><center>You bring joy to everyone around you!</center></h1>";
            messageOpacity("message");
            break;
        case 15:
            document.getElementById("message").innerHTML = "<h1><center>You are a treasure to those around you!</center></h1>";
            messageOpacity("message");
            break;
        case 16:
            document.getElementById("message").innerHTML = "<h1><center>Life is better with friends like you!</center></h1>";
            messageOpacity("message");
            break;
        case 17:
            document.getElementById("message").innerHTML = "<h1><center>Keep shining bright, just like you do!</center></h1>";
            messageOpacity("message");
            break;
        case 18:
            document.getElementById("message").innerHTML = "<h1><center>Believe in yourself and all that you are!</center></h1>";
            messageOpacity("message");
            break;
        case 19:
            document.getElementById("message").style.display = 'none';
            document.getElementById("image").innerHTML = "<center><img src='doreamon.png' width='500px'></center>";
            messageOpacity("image");
            break;
        case 20:
            document.getElementById("message").innerHTML = "<h1>Another Birthday Present</h1><h2>Just a simple HTML Home page for your web browsing</h2><div style='text-align: left;'><p>To add an HTML file as your home page in Microsoft Edge, you can:</p><ol><li>Open Microsoft Edge</li><li>Select Settings and more > Settings</li><li>Select Appearance</li><li>Turn on Show home button</li><li>Select Enter URL for the page you want to use as your home page</li><li>Use a URL that starts with 'file:'</li><li>For example, file:///C:/directory/filename.html</li></ol><a href='homepage.html' target='_blank'>Hear is a new homepage for your browser.</a>Please accept if you like this.</div>";
            break;
        case 21:
            document.getElementById("message").innerHTML = "<h1>Once again 🥰🥰 </h1><a href='https://open.spotify.com/playlist/64ng3eitWOpxADj8OBz7sn?si=ZHkH-77sRiySdPWHOqQ_2A&pt=e5217b4cfbc360a3a517f33563b697b4&pi=iGa8FIPRQiW79' target='_blank'> <img src='spotify.jpeg' width='30%' style='border-radius: 10px'></a>";
            break;
        case 22:
            document.getElementById("message").style.display = 'none';
            document.getElementById("cake").innerHTML = "<img src='cake.jpg' style='border-radius: 10px' width='100%'>";
            i=i-0.5;
            break;
        default:
            document.getElementById("message").style.display = "none";
            var video2 = document.getElementById("video2");
            video2.src = "video2.mp4";
            video2.playbackRate = 0.1;
            video2.load();
            messageOpacity("video2");
            video2.style.display = "block";
    }
    i=i+0.5;
}


