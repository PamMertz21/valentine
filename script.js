// ========== LOGIN FUNCTIONALITY ==========
const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');
const proposalContainer = document.getElementById('proposalContainer');
const loginError = document.getElementById('loginError');
const attemptCountSpan = document.getElementById('attemptCount');
const userGreeting = document.getElementById('userGreeting');

let attemptCount = 0;
const MAX_ATTEMPTS = 5;

// Correct credentials
const CORRECT_USERNAME = "Vhianca Yzavel D. Vicente";
const CORRECT_PASSWORD = "092118"; // 09/21/18

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    attemptCount++;
    attemptCountSpan.textContent = attemptCount;
    
    // Validate credentials
    if (username.toLowerCase() === CORRECT_USERNAME.toLowerCase() && password === CORRECT_PASSWORD) {
        // Success!
        loginError.style.display = 'none';
        loginForm.style.opacity = '0.5';
        loginForm.style.pointerEvents = 'none';
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-login';
        successDiv.innerHTML = '<p style="color: #00ff88; text-align: center;">✓ ACCESS GRANTED</p>';
        loginForm.parentNode.insertBefore(successDiv, loginForm.nextSibling);
        
        setTimeout(() => {
            loginContainer.classList.remove('active');
            proposalContainer.classList.add('active');
            
            // Extract first name from full name
            const firstName = username.split(' ')[0];
            userGreeting.textContent = firstName + ' ❤️';
            
            // Play background music
            const backgroundMusic = document.getElementById('backgroundMusic');
            if (backgroundMusic) {
                backgroundMusic.play().catch(err => console.log('Audio autoplay prevented:', err));
            }
        }, 1500);
        
    } else {
        // Failed
        if (attemptCount >= MAX_ATTEMPTS) {
            loginError.textContent = '❌ MAX ATTEMPTS EXCEEDED - System locked for 24 hours';
            loginError.style.display = 'block';
            loginForm.style.pointerEvents = 'none';
        } else {
            loginError.textContent = `❌ Invalid credentials! (${MAX_ATTEMPTS - attemptCount} attempts remaining)`;
            loginError.style.display = 'block';
        }
        
        // Shake animation
        loginForm.style.animation = 'shake 0.5s';
        setTimeout(() => {
            loginForm.style.animation = 'none';
        }, 500);
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    .success-login {
        margin-top: 15px;
    }
`;
document.head.appendChild(style);

// ========== PROPOSAL FUNCTIONALITY ==========
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');
const buttonsContainer = document.querySelector('.buttons-container');

let noButtonClicks = 0;
// YES Button - Send email then redirect to flowery success page
yesBtn.addEventListener('click', function() {
    // Disable buttons to avoid double clicks
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Save the current music time before redirecting
    const audio = document.getElementById('backgroundMusic');
    if (audio) {
        sessionStorage.setItem('musicTime', audio.currentTime);
    }

    // celebration and redirect to success page
    const nameParam = encodeURIComponent(userGreeting.textContent || 'Palangga');
    const locationParam = encodeURIComponent('La Dolce Restaurant');
    const addressParam = encodeURIComponent('Brgy. 7 Cabadbaran City, Philippines');

    celebrationEffect();
    setTimeout(() => {
        // redirect to success page with query params
        window.location.href = `success.html?name=${nameParam}&location=${locationParam}&address=${addressParam}`;
    }, 1400);
});

// NO Button - Moves away and YES button grows
noBtn.addEventListener('click', function() {
    noButtonClicks++;
    
    // Generate random position
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    // Move NO button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Grow YES button
    const newScale = 1 + (noButtonClicks * 0.15);
    yesBtn.style.transform = `scale(${newScale})`;
    
    // Add funny messages
    const funnyMessages = [
        "Are you sure? 🤔",
        "Come on! 😢",
        "You're breaking my code... 💔",
        "Try again? 🙏",
        "The YES button is right here! 👉",
        "This hurts my RAM... 😭",
        "No escaping this! 😏",
        "I'm gonna keep making this bigger! 😄"
    ];
    
    if (noButtonClicks > 0) {
        const message = funnyMessages[Math.min(noButtonClicks - 1, funnyMessages.length - 1)];
        showFloatingMessage(message);
    }
    
    // If NO button has been clicked too many times, make it disappear
    if (noButtonClicks > 7) {
        noBtn.style.opacity = '0.3';
        noBtn.style.pointerEvents = 'none';
    }
});

// Celebration effect with floating hearts
function celebrationEffect() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💕';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-30px';
            heart.style.fontSize = '30px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.animation = `fall ${2 + Math.random() * 2}s linear`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
    
    // Add animation
    if (!document.getElementById('fallAnimation')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'fallAnimation';
        styleEl.textContent = `
            @keyframes fall {
                to {
                    top: 100vh;
                    opacity: 0;
                    transform: translateX(${(Math.random() - 0.5) * 200}px) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(styleEl);
    }
}

// Floating message
function showFloatingMessage(message) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    msgDiv.style.position = 'fixed';
    msgDiv.style.left = '50%';
    msgDiv.style.top = '20%';
    msgDiv.style.transform = 'translateX(-50%)';
    msgDiv.style.background = 'rgba(255, 20, 147, 0.9)';
    msgDiv.style.color = '#fff';
    msgDiv.style.padding = '15px 25px';
    msgDiv.style.borderRadius = '25px';
    msgDiv.style.zIndex = '9999';
    msgDiv.style.animation = 'fadeInOut 2s ease-in-out';
    msgDiv.style.pointerEvents = 'none';
    
    document.body.appendChild(msgDiv);
    
    // Add animation if not exists
    if (!document.getElementById('floatingAnimation')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'floatingAnimation';
        styleEl.textContent = `
            @keyframes fadeInOut {
                0% {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
            }
        `;
        document.head.appendChild(styleEl);
    }
    
    setTimeout(() => msgDiv.remove(), 2000);
}

// Easter egg - Konami code!
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiIndex = 0;
            activateEasterEgg();
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    console.log('🎮 EASTER EGG ACTIVATED! 🎮');
    
    // Create matrix rain effect
    const matrixContainer = document.createElement('div');
    matrixContainer.style.position = 'fixed';
    matrixContainer.style.top = '0';
    matrixContainer.style.left = '0';
    matrixContainer.style.width = '100%';
    matrixContainer.style.height = '100%';
    matrixContainer.style.pointerEvents = 'none';
    matrixContainer.style.zIndex = '10000';
    matrixContainer.style.overflow = 'hidden';
    
    const chars = '01💕🎮💝🎯✨';
    let html = '';
    
    for (let i = 0; i < 100; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 3;
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        html += `<div style="
            position: absolute;
            left: ${left}%;
            top: -20px;
            font-size: 20px;
            opacity: 0.7;
            animation: matrixFall ${duration}s linear ${delay}s infinite;
            color: #ff1493;
        ">${char}</div>`;
    }
    
    matrixContainer.innerHTML = html;
    document.body.appendChild(matrixContainer);
    
    // Add animation
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        @keyframes matrixFall {
            to {
                top: 100vh;
            }
        }
    `;
    document.head.appendChild(styleEl);
    
    // Remove after animation
    setTimeout(() => matrixContainer.remove(), 8000);
    
    // Sound effect (if you want to add one)
    const audio = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
    audio.play().catch(() => {});
}

console.log('💕 Valentine Page Loaded! Press Up, Up, Down, Down, Left, Right, Left, Right, B, A for easter egg! 💕');
