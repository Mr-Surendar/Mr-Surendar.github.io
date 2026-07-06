const output = document.getElementById("output");
const terminal = output.parentElement;

const lines = [
    "Initializing...",
    "**************************",
    "$ connect onlyfans",
    "████████████████████ 100%",
    "Done ✓",
    "😂 Gotcha!",
    "You clicked that link with zero hesitation.",
    "Unfortunately..., it's just bait.",
    "But since you're already here..., I have something better for you.",
    "[ OK ] Redirect scheduled"
];

let line = 0;
let char = 0;

function scrollBottom() {

    terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth"
    });

}

function typeLine() {

    if (line >= lines.length) {

        startCountdown();
        return;

    }

    if (char < lines[line].length) {

        output.textContent += lines[line].charAt(char);

        char++;

        scrollBottom();

        setTimeout(typeLine, 50);

    } else {

        output.textContent += "\n";

        line++;
        char = 0;

        scrollBottom();

        setTimeout(typeLine, 250);

    }

}

typeLine();

function startCountdown() {

    let count = 07;

  
    output.textContent += "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
    output.textContent += `\nRedirecting in ${count}`;

    scrollBottom();

    // Show prank link
    const realContent = document.getElementById("real-content");
    realContent.style.display = "block";

    const interval = setInterval(() => {

        count--;

        if (count < 0) {

            clearInterval(interval);

            window.location.href = "https://mr-surendar.github.io/";

            return;

        }

        const lines = output.textContent.split("\n");

        lines[lines.length - 1] = `Redirecting in ${String(count).padStart(2,'0')}`;

        output.textContent = lines.join("\n");

        scrollBottom();

    },1000);

}
