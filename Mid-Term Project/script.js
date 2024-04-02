// Define the stages of the game with image options
const gameStages = {
    start: {
        text: "You are a space pilot on a mission to defeat the enemy fleet. Are you ready?",
        choices: [
            { text: "Yes, let's go!", nextStage: "sector1" }
        ],
        image: "https://www.shutterstock.com/image-vector/design-game-start-message-260nw-1640304166.jpg",
        backgroundColor: "#87CEEB"
    },
    sector1: {
        text: "You enter Sector 1. There are enemy fighters approaching. What's your move?",
        choices: [
            { text: "Engage in combat", nextStage: "combat1" },
            { text: "Try to evade them", nextStage: "evade1" }
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CtgfelUjFjfCJdAtMYiczBuISlpmelfkQ&s",
        backgroundColor: "#ADD8E6"
    },
    combat1: {
        text: "You engage the enemy fighters in combat. It's intense!",
        choices: [
            { text: "Continue fighting", nextStage: "continueCombat1" },
            { text: "Retreat", nextStage: "retreat1" }
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrPAoNXNhrpf1ZAEfEggVu7jZ9W1wNUuFkw&s",
        backgroundColor: "#87CEEB"
    },
    continueCombat1: {
        text: "The battle rages on. Your perseverance pays off! The enemy retreats. You emerge victorious!",
        choices: [],
        endGame: true,
        image: "https://static.wikia.nocookie.net/endless-space-2/images/5/50/EventMetaplot01Large.png/revision/latest?cb=20210620112916",
        backgroundColor: "#ADD8E6"
    },
    retreat1: {
        text: "You retreat from the battle, narrowly escaping with your life.",
        choices: [],
        endGame: true,
        image: "https://t3.ftcdn.net/jpg/05/40/86/28/360_F_540862807_U2rJHtoZ4BLiYNGnG0JaCP5qiqaB9A8m.jpg",
        backgroundColor: "#87CEEB"
    },
    evade1: {
        text: "You try to evade the enemy fighters, but they're too fast! You're surrounded.",
        choices: [
            { text: "Fight your way out", nextStage: "fightWayOut1" },
            { text: "Request backup", nextStage: "requestBackup1" }
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZB5nvzm0dHkreJlG4CiliFBHvVGRFSoqdw&s",
        backgroundColor: "#ADD8E6"
    },
    fightWayOut1: {
        text: "You fight your way through the enemy fighters and break free from the encirclement.",
        choices: [],
        endGame: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRfBV1dLYCzuXLhClNobeKA610r4k_8T_qg&s",
        backgroundColor: "#87CEEB"
    },
    requestBackup1: {
        text: "You request backup and reinforcements arrive just in time! Together, you defeat the enemy.",
        choices: [],
        endGame: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIf4y8kbMlIWx8GSx8wEp4cn9BewmwjgalA&s",
        backgroundColor: "#ADD8E6"
    }
    // Add more stages with images as needed
};

// Function to start/restart the game
function startGame() {
    currentStage = "start";
    updatePage();
}

// Function to handle restart button click
function restartGame() {
    currentStage = "start";
    document.getElementById("addendum").style.display = "block"; // Show addendum
    updatePage();
}

// Function to update the page with current part of the story and image options
function updatePage() {
    const stage = gameStages[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.body.style.backgroundColor = stage.backgroundColor;

    // Display choices
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            currentStage = choice.nextStage;
            if (gameStages[currentStage].endGame) {
                endGame();
            } else {
                updatePage();
            }
        });
        choicesContainer.appendChild(button);
    });

    // Update game interface based on stage
    if (currentStage === "combat1") {
        document.getElementById("fire-button").style.display = "block";
    } else {
        document.getElementById("fire-button").style.display = "none";
    }

    // Display image option
    const imageOption = document.getElementById("image-option");
    imageOption.style.backgroundImage = `url(${stage.image})`;
    imageOption.addEventListener("click", () => {
        // Perform some action with the selected image
        console.log(`Selected image: ${stage.image}`);
    });
}

// Function to handle end game scenario
function endGame() {
    const stage = gameStages[currentStage];
    document.getElementById("story").textContent = stage.text;

    // Hide choices, game interface, and image options
    document.getElementById("choices").innerHTML = "";
    document.getElementById("game-interface").style.display = "none";
    document.getElementById("image-options").style.display = "none";
}

// Add event listener to the restart button
document.getElementById("restartButton").addEventListener("click", restartGame);

// Initialize game
let currentStage;
restartGame(); // Call restartGame instead of startGame to ensure addendum is displayed on launch
