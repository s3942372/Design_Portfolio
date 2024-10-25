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
            response = 'Available commands: help, clear, date, hello, ui designs, minigames';
            break;
        case 'clear':
            output.innerHTML = '';
            return;
        case 'date':
            response = new Date().toString();
            break;
        case 'hello':
            response = 'Hello, User!';
            break;
        case 'about':
            output.innerHTML = "An avid lover of both interaction design and storytelling, Charlene Xu enjoys crafting engaging narrative experiences through thoughtful design and gamification. Having studied at RMIT University in the <br>Bachelor's Degree of Design (Digital Media), she has a great amount of interest and passion in games and gamified experiences that not only captivate users but also immerse them in compelling narratives. <br>Willing to explore new innovative ways to blend aesthetics with gameplay elements to enhance user engagement, Charlene wishes to make it in the games industry as a narrative and interface designer.";
            return;
        case 'ui designs':
            loadUIDesigns();
            return;
        case 'minigames':
            loadMinigames();
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
            img: 'https://via.placeholder.com/150', 
            text: 'ShareCare, a community app focused on sharing food with everyone.' 
        },
    ];

    output.innerHTML += `> ui designs\nLoading UI Designs...\n`;
    
    designs.forEach(design => {
        output.innerHTML += `<img src="${design.img}" alt="UI Design" style="width: 150px; height: auto; display: inline-block; margin: 5px;">`;
        output.innerHTML += `<div>${design.text}</div>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}

function loadMinigames() {
    const games = [
        { 
            url: 'https://scratch.mit.edu/projects/1075088739', 
            text: "Punchin' Time!: a game about school violence, and the things that cause it." 
        },
        { 
            url: 'https://scratch.mit.edu/projects/1075341974', 
            text: "Drifting Off: a game about sleep deprivation, and how it impacts your work." 
        },
    ];

    output.innerHTML += `> minigames\nLoading Minigames...\n`;
    
    games.forEach(game => {
        output.innerHTML += `<div>${game.text}</div>`;
        output.innerHTML += `<iframe src="${game.url}" style="width: 300px; height: 200px; border: none;"></iframe>`;
    });

    output.innerHTML += `<br>`;
    output.scrollTop = output.scrollHeight;
}