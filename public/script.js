const output = document.getElementById('output');
const input = document.getElementById('input');
const binaryBackground = document.getElementById('binaryBackground');

const helpDiv = document.createElement('div');
helpDiv.id = 'helpMessage';
helpDiv.style.display = 'none';
helpDiv.style.position = 'fixed';
helpDiv.style.top = '10px';
helpDiv.style.right = '10px';
helpDiv.style.color = 'rgba(255, 0, 0)';
helpDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
helpDiv.style.border = '1px solid black';
helpDiv.style.padding = '10px';
helpDiv.style.zIndex = '1000';
document.body.appendChild(helpDiv);

function generateBinaryString() {
    return Math.random() < 0.5 ? '0' : '1';
}

function createBinaryLine() {
    const binaryLine = document.createElement('div');
    binaryLine.className = 'binary-string';
    binaryLine.textContent = Array.from({ length: Math.floor(window.innerWidth / 8.2) }, generateBinaryString).join('');
    binaryLine.style.animationDuration = `${Math.random() * 5 + 5}s`;
    binaryLine.style.top = '100%';

    binaryBackground.appendChild(binaryLine);

    binaryLine.style.animationName = 'trickle';
    binaryLine.style.top = `${Math.random() * 100}%`;

    setTimeout(() => {
        binaryLine.remove();
    }, 10000);
}

setInterval(createBinaryLine, 500);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = input.value;
        handleCommand(command);
        input.value = '';
    }
});

function handleCommand(command) {
    output.innerHTML = '';
    let response;

    switch (command.toLowerCase()) {
        case 'help':
            response = 'Available commands: help, clear, date, hello, about, ui, minigames, games, args, videos, simulations, socials, cv';
            helpDiv.innerHTML = response;
            helpDiv.style.display = 'block';
            break;
        case 'clear':
            output.innerHTML = '';
            helpDiv.style.display = 'none';
            return;
        case 'date':
            response = new Date().toString();
            break;
        case 'hello':
            response = "Hello, and welcome to Charlene's portfolio!";
            break;
        case 'about':
            loadAboutMe();
            return;
        case 'ui':
            loadUIDesigns();
            return;
        case 'minigames':
            loadMinigames();
            return;
        case 'games':
            loadGames();
            return;
        case 'args':
            loadARGs();
            return;
        case 'videos':
            loadVideos();
            return;
        case 'simulations':
            loadSimulations();
            return;
        case 'socials':
            loadSocialMedia();
            return;
        case 'cv':
            loadCV();
            return;
        default:
            response = `Unknown command: ${command}`;
    }

    output.innerHTML += `> ${command}\n${response}\n`;
    output.scrollTop = output.scrollHeight;
}

function loadAboutMe() {
    const aboutMe = [
        { 
            img: '/media/me2.jpg', 
            text: "An avid lover of both interaction design and storytelling, <br>Charlene Xu enjoys crafting engaging narrative experiences <br>through thoughtful design and gamification. As a graduate <br>of RMIT University's Bachelor's Degree of Design (Digital <br>Media), she has a great amount of interest and passion in <br>games and gamified experiences that can not only captivate <br>users, but also immerse them in the compelling narratives. <br>Willing to explore new innovative ways to blend aesthetics <br>with gameplay elements to enhance user engagement, Charlene <br>wishes to make it in the games industry as a narrative and <br>interface designer. <br><br>Email: charlene.xxy.xu@gmail.com",
            text1: "A photo of Charlene backstage during a production. Her <br>love of creating stories is in part due to her nature as a <br>theatre kid."
        },
    ];

    output.innerHTML += `> about\nLoading About Me...\n`;
    
    aboutMe.forEach(about => {
        output.innerHTML += `<div style="margin-top: 10px;">${about.text}</div>`;
        output.innerHTML += `<img src="${about.img}" style="width: 35%; height: auto; border: none; margin-top: 5px;"></iframe>`;
        output.innerHTML += `<div style="margin-top: 10px;">${about.text1}</div>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadUIDesigns() {
    const designs = [
        { 
            url: 'https://embed.figma.com/proto/MTM3MlecblyoMoPfybAT7R/ShareCare-Backup?node-id=29-2820&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=29%3A2&starting-point-node-id=29%3A2820&embed-host=share', 
            text: 'ShareCare, a community app focused on sharing food with everyone.' 
        },
    ];

    output.innerHTML += `> ui\nLoading UI Designs...\n`;
    
    designs.forEach(design => {
        output.innerHTML += `<div style="margin-top: 10px;">${design.text}</div>`;
        output.innerHTML += `<iframe src="${design.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadMinigames() {
    const miniGames = [
        { 
            url: 'https://scratch.mit.edu/projects/1075088739/embed', 
            text: "Punchin' Time!: a game about school violence, and the things that cause it." 
        },
        { 
            url: 'https://scratch.mit.edu/projects/1075341974/embed', 
            text: "Drifting Off: a game about fighting off sleep deprivation, a never-ending cycle you can't win against." 
        },
    ];

    output.innerHTML += `> minigames\nLoading Minigames...\n`;
    
    miniGames.forEach(minigame => {
        output.innerHTML += `<div style="margin-top: 10px;">${minigame.text}</div>`;
        output.innerHTML += `<iframe src="${minigame.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadGames() {
    const games = [
        { 
            url: 'https://player.vimeo.com/video/815986265?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479', 
            text1: "Crisis: a card-swiping game about navigating through a global health crisis (that may or may not be inspired by the 2020 pandemic) while campaigning to be the president.",
            text2: "Please note that this is only an idea, and that the game does not actually exist."
        },
        { 
            url: 'https://player.vimeo.com/video/1023647432?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479', 
            text1: "Asylum: a game idea about about refugees, their lives, and the road to seeking asylum.",
            text2: "Please note that this is only an idea, and that the game does not actually exist."
        },
    ];

    output.innerHTML += `> games\nLoading Games...\n`;
    
    games.forEach(game => {
        output.innerHTML += `<div style="margin-top: 10px;">${game.text1}</div>`;
        output.innerHTML += `<div style="margin-top: 10px;">${game.text2}</div>`;
        output.innerHTML += `<iframe src="${game.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadARGs() {
    const args = [
        { 
            url: 'https://s3942372.wixsite.com/lunarchive', 
            text: "An alternate reality game featuring Australia's very own Luna Park for promotional purposes."
        },
        { 
            url: 'https://s3942372.wixsite.com/lyaeusecofoundation', 
            text: "An alternate reality game featuring real-world puzzles and elements, linking to a sordid past within the United State's CIA." 
        },
    ];

    output.innerHTML += `> args\nLoading ARGs...\n`;
    
    args.forEach(arg => {
        output.innerHTML += `<div style="margin-top: 10px;">${arg.text}</div>`;
        output.innerHTML += `<iframe src="${arg.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadVideos() {
    const videos = [
        { 
            url: 'https://player.vimeo.com/video/736524470?h=b4baf58fda', 
            text: "Alone at Home: a slow horror about a young boy and a mysterious stranger new to the neighbourhood." 
        },
        { 
            url: 'https://player.vimeo.com/video/1023286780?h=281f42b367', 
            text: "Aberrant Ingress: an analogue horror short film made using AI generated images inspired by Cold War era government PSAs and the fear of what is considered 'other'." 
        },
    ];

    output.innerHTML += `> videos\nLoading Videos...\n`;
    
    videos.forEach(video => {
        output.innerHTML += `<div style="margin-top: 10px;">${video.text}</div>`;
        output.innerHTML += `<iframe src="${video.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight; 
}

function loadSimulations() {
    const simulations = [
        { 
            url: 'https://s3942372.github.io/im-2310/a3/', 
            text: "Buddy Simulator: a satire look into what the future of AI-driven therapists would be." 
        },
        { 
            url: 'https://s3942372-ccs-a3.deno.dev/', 
            text: "Interview Simulator: a satirical study on current generations, and their over-reliance on AI for conversation and companionship, as well as a study on how AI may replace certain aspects of the hiring process in a workforce." 
        },
    ];

    output.innerHTML += `> simulations\nLoading Simulations...\n`;
    
    simulations.forEach(simulation => {
        output.innerHTML += `<div style="margin-top: 10px;">${simulation.text}</div>`;
        output.innerHTML += `<iframe src="${simulation.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight; 
}

function loadSocialMedia() {
    const socials = [
        { name: 'Twitter', url: 'https://x.com/c_xxy_xu' },
        { name: 'Instagram', url: 'https://www.instagram.com/c_xxy_xu?igsh=NTc4MTIwNjQ2YQ==' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/charlene-xu/' },
        { name: 'GitHub', url: 'https://github.com/s3942372' },
    ];

    output.innerHTML += `> socials\nLoading Social Medias...\n`;
    
    socials.forEach(social => {
        output.innerHTML += `<div style="margin-top: 10px;"><a href="${social.url}" target="_blank" style="color: red;">${social.name}</a></div>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight; 
}

function loadCV() {
    const cvDocument = [
        {
            url: 'https://www.canva.com/design/DAGUr14n5xE/2U21OiJiCD17pBOvtldUOQ/view?embed',
            text: "Feel free to take a look at or download my CV." 
        },
    ];

    output.innerHTML += `> cv\nLoading CV...\n`;
    
    cvDocument.forEach(cv => {
        output.innerHTML += `<div style="margin-top: 10px;">${cv.text}</div>`;
        output.innerHTML += `<iframe src="${cv.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight; 
}