const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = input.value;
        handleCommand(command);
        input.value = '';
    }
});

function handleCommand(command) {
    let response;

    switch (command.toLowerCase()) {
        case 'help':
            response = 'Available commands: help, clear, date, hello, about, ui designs, minigames, args, videos, simulations, contacts, cv';
            break;
        case 'clear':
            output.innerHTML = '';
            return;
        case 'date':
            response = new Date().toString();
            break;
        case 'hello':
            response = 'Hello, and welcome to my portfolio!';
            break;
        case 'about':
            response = "An avid lover of both interaction design and storytelling, <br>Charlene Xu enjoys crafting engaging narrative experiences <br>through thoughtful design and gamification. As a graduate <br>of RMIT University's Bachelor's Degree of Design (Digital <br>Media), she has a great amount of interest and passion in <br>games and gamified experiences that can not only captivate <br>users, but also immerse them in the compelling narratives. <br>Willing to explore new innovative ways to blend aesthetics <br>with gameplay elements to enhance user engagement, Charlene <br>wishes to make it in the games industry as a narrative and <br>interface designer.";
            break;
        case 'ui designs':
            loadUIDesigns();
            return;
        case 'minigames':
            loadMinigames();
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
        case 'contacts':
            loadContactInfo();
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

function loadUIDesigns() {
    const designs = [
        { 
            url: 'https://embed.figma.com/proto/MTM3MlecblyoMoPfybAT7R/ShareCare-Backup?node-id=29-2820&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=29%3A2&starting-point-node-id=29%3A2820&embed-host=share', 
            text: 'ShareCare, a community app focused on sharing food with everyone.' 
        },
    ];

    output.innerHTML += `> ui designs\nLoading UI Designs...\n`;
    
    designs.forEach(design => {
        output.innerHTML += `<div style="margin-top: 10px;">${design.text}</div>`;
        output.innerHTML += `<iframe src="${design.url}" style="width: 82.5vw; height: 95vh; border: none; margin-top: 5px;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadMinigames() {
    const games = [
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
    
    games.forEach(game => {
        output.innerHTML += `<div style="margin-top: 10px;">${game.text}</div>`;
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

function loadContactInfo() {
    const contacts = [
        { name: 'Twitter', url: 'https://x.com/c_xxy_xu' },
        { name: 'Instagram', url: 'https://www.instagram.com/c_xxy_xu?igsh=NTc4MTIwNjQ2YQ==' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/charlene-xu/' },
        { name: 'GitHub', url: 'https://github.com/s3942372' },
    ];

    output.innerHTML += `> contact\nLoading Contact Info...\n`;
    
    contacts.forEach(contact => {
        output.innerHTML += `<div style="margin-top: 10px;"><a href="${contact.url}" target="_blank" style="color: red;">${contact.name}</a></div>`;
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