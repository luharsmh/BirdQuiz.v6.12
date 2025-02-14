// 1. MASTER LIST OF ALL BIRDS
const allBirdNames = [
    "Indian Spot-billed Duck",
    "Rock Pigeon",
    "Spotted Dove",
    "Asian Koel",
    "Eurasian Coot",
    "Gray-headed Swamphen",
    "Red-wattled Lapwing",
    "Common Sandpiper",
    "Little Grebe",
    "Little Cormorant",
    "Great Cormorant",
    "Indian Pond-Heron",
    "Gray Heron",
    "Black Kite",
    "Brahminy Kite",
    "Black Drongo",
    "House Crow",
    "House Sparrow",
    "White-browed Wagtail",
    "White-breasted Waterhen",
    "Pheasant-tailed Jacana",
    "Bronze-winged Jacana",
    "Little Egret",
    "Eastern Cattle-Egret",
    "Medium Egret",
    "Purple Heron",
    "Pied Kingfisher",
    "Coppersmith Barbet",
    "White-cheeked Barbet",
    "Large-billed Crow",
    "Jungle Prinia",
    "Ashy Prinia",
    "Plain Prinia",
    "Blyth's Reed Warbler",
    "Barn Swallow",
    "Eastern Red-rumped Swallow",
    "Yellow-billed Babbler",
    "Chestnut-tailed Starling",
    "Common Myna",
    "Indian Robin",
    "Oriental Magpie-Robin",
    "Purple-rumped Sunbird",
    "Garganey",
    "Northern Shoveler",
    "Northern Pintail",
    "Green-winged Teal",
    "Indian Peafowl",
    "Gray Francolin",
    "Eurasian Collared-Dove",
    "Red Collared-Dove",
    "Laughing Dove",
    "Greater Coucal",
    "Little Swift",
    "Eurasian Moorhen",
    "Black-winged Stilt",
    "Green Sandpiper",
    "Wood Sandpiper",
    "Common Greenshank",
    "Barred Buttonquail",
    "Whiskered Tern",
    "River Tern",
    "Asian Openbill",
    "Painted Stork",
    "Oriental Darter",
    "Glossy Ibis",
    "Black-headed Ibis",
    "Eurasian Spoonbill",
    "Black-crowned Night Heron",
    "Spot-billed Pelican",
    "Black-winged Kite",
    "Shikra",
    "Spotted Owlet",
    "Indian Gray Hornbill",
    "Asian Green Bee-eater",
    "Blue-tailed Bee-eater",
    "White-throated Kingfisher",
    "Indian Roller",
    "Rose-ringed Parakeet",
    "Indian Golden Oriole",
    "Brown Shrike",
    "Jerdon's Bushlark",
    "Common Tailorbird",
    "Zitting Cisticola",
    "Wire-tailed Swallow",
    "Streak-throated Swallow",
    "White-browed Bulbul",
    "Red-whiskered Bulbul",
    "Rosy Starling",
    "Pied Bushchat",
    "Pale-billed Flowerpecker",
    "Purple Sunbird",
    "Baya Weaver",
    "White Wagtail",
    "Paddyfield Pipit",
    "Indian Paradise-Flycatcher",
    "Oriental Honey-buzzard",
    "Common Kingfisher",
    "Asian Tit",
    "Ashy-crowned Sparrow-Lark",
    "Indian Silverbill",
    "Red-vented Bulbul",
    "Tawny-bellied Babbler",
    "Common Hawk-Cuckoo",
    "Marsh Sandpiper",
    "Little Stint",
    "Great Egret",
    "Western Marsh Harrier",
    "Alexandrine Parakeet",
    "Common Iora",
    "Booted Warbler",
    "Sykes's Warbler",
    "Jungle Myna",
    "Western Yellow Wagtail",
    "Montagu's Harrier",
    "Bay-backed Shrike",
    "Long-tailed Shrike",
    "Rufous Treepie",
    "Scaly-breasted Munia",
    "Red Avadavat",
    "Blyth's Pipit",
    "Tree Pipit",
    "Ashy Drongo",
    "Greenish Warbler",
    "Blue Rock-Thrush",
    "Gray-bellied Cuckoo",
    "Little Ringed Plover",
    "Pin-tailed Snipe",
    "Asian Woolly-necked Stork",
    "Greater Spotted Eagle",
    "Indian White-eye",
    "Black-rumped Flameback",
    "Blue-faced Malkoha",
    "Lesser Whistling-Duck",
    "Brahminy Starling",
    "Booted Eagle",
    "Red-necked Falcon",
    "Eurasian Kestrel",
    "Rufous-tailed Lark",
    "Bonelli's Eagle",
    "Pallid Harrier",
    "White-eyed Buzzard",
    "Indian Scops-Owl",
    "Eurasian Hoopoe",
    "Spot-breasted Fantail",
    "Yellow-eyed Babbler",
    "Large Gray Babbler",
    "Loten's Sunbird",
    "Jerdon's Leafbird",
    "Asian Palm Swift",
    "Short-toed Snake-Eagle",
    "Ashy Woodswallow",
    "Oriental Skylark",
    "Clamorous Reed Warbler",
    "White-rumped Munia",
    "Green Warbler",
    "Gray Wagtail",
    "Lesser Whitethroat",
    "Common Rosefinch",
    "Yellow-wattled Lapwing",
    "Dusky Crag-Martin",
    "Black-headed Cuckooshrike",
    "Small Minivet",
    "White-naped Woodpecker",
    "Indian Cormorant",
    "Red Spurfowl",
    "Gray Junglefowl",
    "Puff-throated Babbler",
    "Tawny Eagle",
    "Indian Spotted Eagle",
    "Yellow-throated Bulbul",
    "Tickell's Blue Flycatcher",
    "Siberian Stonechat",
    "Striated Heron",
    "Taiga Flycatcher",
    "Tawny Pipit",
    "Pied Cuckoo",
    "Peregrine Falcon",
    "Indian Nightjar",
    "Indian Thick-knee",
    "Black-tailed Godwit",
    "Paddyfield Warbler",
    "Steppe Eagle",
    "Indian Pitta",
    "Common Woodshrike",
    "White-bellied Drongo",
    "Greater Painted-Snipe",
    "Asian Brown Flycatcher",
    "Painted Spurfowl",
    "Jungle Bush-Quail",
    "Gray-breasted Prinia",
    "Jungle Babbler",
    "Indian Cuckooshrike",
    "Pied Harrier",
    "Tawny Lark",
    "Egyptian Vulture",
    "Tricolored Munia",
    "Sirkeer Malkoha",
    "Western Crowned Warbler",
    "Temminck's Stint",
    "Hair-crested Drongo",
    "Indian Blue Robin",
    "Ruddy-breasted Crake",
    "Gull-billed Tern",
    "Red-breasted Flycatcher",
    "Black-naped Monarch",
    "Verditer Flycatcher",
    "Common Cuckoo",
    "Oriental Turtle-Dove",
    "Eurasian Wryneck",
    "Eastern Yellow Wagtail",
    "Richard's Pipit",
    "Mottled Wood-Owl",
    "Eastern Barn Owl",
    "Large-billed Leaf Warbler",
    "Plum-headed Parakeet",
    "Common Snipe",
    "Knob-billed Duck",
    "Baillon's Crake",
    "Black-headed Bunting",
    "Orange-headed Thrush",
    "Rock Bush-Quail",
    "Ruff",
    "Blue-throated Flycatcher",
    "Brown-breasted Flycatcher",
    "Kentish Plover",
    "Black-naped Oriole",
    "Tibetan Sand-Plover",
    "Streaked Weaver",
    "European Roller",
    "Pacific Golden-Plover",
    "Red-headed Bunting",
    "Long-toed Stint",
    "Alpine Swift",
    "Long-billed Pipit",
    "Common Redshank",
    "Rain Quail",
    "Terek Sandpiper",
    "Changeable Hawk-Eagle",
    "Black Eagle",
    "Thick-billed Flowerpecker",
    "Yellow Bittern",
    "Jerdon's Nightjar",
    "Common Babbler",
    "Tickell's Leaf Warbler",
    "Small Pratincole",
    "Indian Blackbird",
    "Eastern Orphean Warbler",
    "Thick-billed Warbler",
    "Eurasian Sparrowhawk",
    "Bank Swallow",
    "Cotton Pygmy-Goose",
    "Bluethroat",
    "Black-breasted Weaver",
    "Blue-capped Rock-Thrush",
    "Black Redstart",
    "Gray-headed Lapwing",
    "Spotted Redshank",
    "Black-hooded Oriole",
    "Red-naped Ibis",
    "Eurasian Wigeon",
    "Vernal Hanging-Parrot",
    "Yellow-throated Sparrow",
    "Red-throated Pipit",
    "Mongolian Short-toed Lark",
    "Gray-necked Bunting",
    "Amur Falcon",
    "Eurasian Hobby",
    "Common Buzzard",
    "Cinnamon Bittern",
    "Black Stork",
    "Osprey",
    "Hume's Warbler",
    "Citrine Wagtail",
    "Black-capped Kingfisher",
    "Malabar Starling",
    "Indian Bushlark",
    "Black Bittern",
    "Indian Scimitar-Babbler",
    "Bar-headed Goose",
    "Common Pochard",
    "Oriental Pratincole",
    "Common Grasshopper Warbler",
    "Yellow-crowned Woodpecker",
    "Chestnut-headed Bee-eater",
    "Fulvous Whistling-Duck",
    "Jungle Nightjar",
    "Watercock",
    "Sulphur-bellied Warbler",
    "Little Tern",
    "Lesser Cuckoo",
    "Spotted Crake",
    "Ultramarine Flycatcher",
    "White Stork",
    "Bristled Grassbird",
    "Caspian Tern",
    "Savanna Nightjar",
    "Eurasian Curlew",
    "Isabelline Wheatear",
    "Common Tern",
    "Greater Flamingo",
    "Western Reef-Heron",
    "Crested Serpent-Eagle",
    "Gadwall",
    "Slaty-breasted Rail",
    "Brown Crake",
    "Gray-throated Martin",
    "Olive-backed Pipit",
    "Yellow-legged Buttonquail",
    "Brown-rumped Minivet",
    "Brown-headed Gull",
    "Lesser Kestrel",
    "Great Thick-knee",
    "European Bee-eater",
    "Ruddy Shelduck",
    "Lesser Flamingo",
    "Rock Eagle-Owl",
    "Black-bellied Tern"
];

// 2. QUIZ BIRDS (with audio)
const quizBirds = [
    {
        name: "Indian Spot-billed Duck",
        audio: "https://github.com/luharsmh/bird-sounds/raw/main/indianspot-billedduck.mp3"
    }, // Fixed: Added comma here
    {
        name: "Rock Pigeon",
        audio: "https://github.com/luharsmh/bird-sounds/raw/main/rockpigeon.mp3"
    },
    {
        name: "Asian Koel",
        audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/asiankoel.mp3" },
   {
        name: "Spotted Dove",
        audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/spotteddove.mp3" },
  
    { name: "Eurasian Coot", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/eurasian-coot.mp3" },
  
    { name: "Gray-headed Swamphen", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/grey-headed-swamphen.mp3" },
  
    { name: "Red-wattled Lapwing", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/red-wattled-lapwing.mp3" },
  
    { name: "Common Sandpiper", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/common-sandpiper.mp3" },
  
    { name: "Little Grebe", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/little-grebe.mp3" },
  
    { name: "Little Cormorant", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/little-cormorant.mp3" },
  
    { name: "Great Cormorant", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/great-cormorant.mp3" },
  
    { name: "Indian Pond-Heron", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/indian-pond-heron.mp3" },
  
    { name: "Gray Heron", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/grey-heron.mp3" },
  
    { name: "Black Kite", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/black-kite.mp3" },
  
    { name: "Brahminy Kite", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/brahminy-kite.mp3" },
  
    { name: "Black Drongo", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/black-drongo.mp3" },
  
    { name: "House Crow", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/house-crow.mp3" },
  
    { name: "House Sparrow", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/house-sparrow.mp3" },
  
    { name: "White-browed Wagtail", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/white-browed-wagtail.mp3" },
  
    { name: "White-breasted Waterhen", audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/white-breasted-waterhen.mp3" },
  {
    name: "Pheasant-tailed Jacana",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/pheasant-tailed-jacana.mp3"
},
{
    name: "Bronze-winged Jacana",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/bronze-winged-jacana.mp3"
},
{
    name: "Little Egret",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/little-egret.mp3"
},
{
    name: "Eastern Cattle-Egret",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/eastern-cattle-egret.mp3"
},
{
    name: "Medium Egret",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/medium-egret.mp3"
},
{
    name: "Purple Heron",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/purple-heron.mp3"
},
{
    name: "Pied Kingfisher",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/pied-kingfisher.mp3"
},
{
    name: "Coppersmith Barbet",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/coppersmith-barbet.mp3"
},
{
    name: "White-cheeked Barbet",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/white-cheeked-barbet.mp3"
},
{
    name: "Large-billed Crow",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/large-billed-crow.mp3"
},
{
    name: "Jungle Prinia",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/jungle-prinia.mp3"
},
{
    name: "Ashy Prinia",
    audio: "https://github.com/luharsmh/bird-sounds/raw/refs/heads/main/ashy-prinia.mp3"
},
{
    name: "Plain Prinia",
    audio: ""
},
{
    name: "Blyth's Reed Warbler",
    audio: ""
},
{
    name: "Barn Swallow",
    audio: ""
},
{
    name: "Eastern Red-rumped Swallow",
    audio: ""
},
{
    name: "Yellow-billed Babbler",
    audio: ""
},
{
    name: "Chestnut-tailed Starling",
    audio: ""
},
{
    name: "Common Myna",
    audio: ""
},
{
    name: "Indian Robin",
    audio: ""
},
{
    name: "Oriental Magpie-Robin",
    audio: ""
},
{
    name: "Purple-rumped Sunbird",
    audio: ""
},
{
    name: "Garganey",
    audio: ""
},
{
    name: "Northern Shoveler",
    audio: ""
},
{
    name: "Northern Pintail",
    audio: ""
},
{
    name: "Green-winged Teal",
    audio: ""
},
{
    name: "Indian Peafowl",
    audio: ""
},
{
    name: "Gray Francolin",
    audio: ""
},
{
    name: "Eurasian Collared-Dove",
    audio: ""
},
{
    name: "Red Collared-Dove",
    audio: ""
},
{
    name: "Laughing Dove",
    audio: ""
}
  
];

// Game state variables
let currentBird;
let score = 0;
let usedBirds = [];
let totalWrong = 0;
const MAX_WRONG = 3;
let totalGames = 0;
let highestScore = 0;

// Initialize from localStorage
if(localStorage.getItem('birdQuizStats')) {
    const stats = JSON.parse(localStorage.getItem('birdQuizStats'));
    totalGames = stats.totalGames || 0;
    highestScore = stats.highestScore || 0;
}

// Navigation functions
function goHome() {
    stopAudio();
    totalWrong = 0;
    score = 0;
    usedBirds = [];
    updateStatsDisplay();
  document.getElementById('scoreBadge').textContent = score;
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('statsContent').style.display = 'none';
    saveStats();
}

function toggleAbout() {
    const aboutContent = document.getElementById('aboutContent');
    aboutContent.style.display = aboutContent.style.display === 'block' ? 'none' : 'block';
    document.getElementById('statsContent').style.display = 'none';
}

function toggleStats() {
    const statsContent = document.getElementById('statsContent');
    statsContent.style.display = statsContent.style.display === 'block' ? 'none' : 'block';
    document.getElementById('aboutContent').style.display = 'none';
    updateStatsDisplay();
}

// Stats functions
function updateStatsDisplay() {
    document.getElementById('totalGames').textContent = totalGames;
    document.getElementById('highestScore').textContent = highestScore;
}

function saveStats() {
    localStorage.setItem('birdQuizStats', JSON.stringify({
        totalGames: totalGames,
        highestScore: highestScore
    }));
}

// Quiz functions
function startQuiz() {
    totalGames++;
    saveStats();
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    loadQuestion();
}
function loadQuestion() {
const quizScreen = document.getElementById('quizScreen');
quizScreen.style.minHeight = `${quizScreen.offsetHeight}px`;
    let availableBirds = quizBirds.filter(bird => !usedBirds.includes(bird.name));
    
    // Check for completion before resetting
    if (availableBirds.length === 0 && usedBirds.length === quizBirds.length) {
        showCompletionCelebration();
        return;
    }

    // Only reset if not completed
    if (availableBirds.length === 0) {
        usedBirds = [];
        availableBirds = [...quizBirds];
    }

    currentBird = availableBirds[Math.floor(Math.random() * availableBirds.length)];
    usedBirds.push(currentBird.name);

    const options = [currentBird.name];
    while (options.length < 4) {
        const randomBird = allBirdNames[Math.floor(Math.random() * allBirdNames.length)];
        if (!options.includes(randomBird)) options.push(randomBird);
    }
    
    displayOptions(shuffleArray(options));
    
    const audioElement = document.getElementById('birdAudio');
    audioElement.src = currentBird.audio;
    audioElement.play();
}
// Add this function
function displayOptions(options) {
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        choicesDiv.appendChild(button);
    });
}
function checkAnswer(selected) {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentBird.name) {
            button.classList.add('correct');
        } else if (button.textContent === selected) {
            button.classList.add('wrong');
        }
    });

    if (selected === currentBird.name) {
        score++;
        if(score > highestScore) {
            highestScore = score;
        }
    } else {
        totalWrong++;
        if(totalWrong >= MAX_WRONG) {
            saveStats();
            showGameOver();
            return;
        }
    }
    
    document.getElementById('scoreBadge').textContent = score;
    document.getElementById('nextBtn').disabled = false;
    saveStats();
}
// New functions
function showCompletionCelebration() {
    const celebration = document.getElementById('completionCelebration');
    celebration.style.display = 'flex';
    
    // Confetti effect
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

function closeCelebration() {
    document.getElementById('completionCelebration').style.display = 'none';
    restartGame();
}

function showGameOver() {
    stopAudio();
    if(score > highestScore) {
        highestScore = score;
    }
    saveStats();
    updateStatsDisplay();
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'block';
}

function restartGame() {
    totalGames++;
    totalWrong = 0;
    score = 0;
    usedBirds = [];
    document.getElementById('scoreBadge').textContent = score;
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    saveStats();
    loadQuestion();
 
}

// Utility functions
function stopAudio() {
    const audioElement = document.getElementById('birdAudio');
    audioElement.pause();
    audioElement.src = '';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function nextQuestion() {
    document.getElementById('nextBtn').disabled = true;
    loadQuestion();
}

// Initialize stats display on load
updateStatsDisplay();
function toggleAbout() {
    const aboutContent = document.getElementById('aboutContent');
    const statsButton = document.querySelector('.stats-btn');
    const isAboutVisible = aboutContent.style.display === 'block';
    
    // Toggle about visibility
    aboutContent.style.display = isAboutVisible ? 'none' : 'block';
    
    // Hide/show stats button
    statsButton.style.display = isAboutVisible ? 'block' : 'none';
    
    // Always hide stats content
    document.getElementById('statsContent').style.display = 'none';
}

function toggleStats() {
    const statsContent = document.getElementById('statsContent');
    const aboutButton = document.querySelector('.about-btn');
    const isStatsVisible = statsContent.style.display === 'block';
    
    // Toggle stats visibility
    statsContent.style.display = isStatsVisible ? 'none' : 'block';
    
    // Hide/show about button
    aboutButton.style.display = isStatsVisible ? 'block' : 'none';
    
    // Always hide about content
    document.getElementById('aboutContent').style.display = 'none';
}