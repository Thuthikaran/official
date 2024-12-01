document.querySelectorAll('.socials img').forEach((img, index) => {
    img.style.cursor = 'pointer'; // Change cursor to pointer to indicate it's clickable
    img.addEventListener('click', () => {
        if (index === 0) {
            window.open('https://github.com/thuthikaran', '_blank');
        } else if (index === 1) {
            window.open('https://www.linkedin.com/in/thuthikaran/', '_blank');
          
        }
    });
});

document.querySelector('.HabitPulse').addEventListener('click', function () {
    window.open('https://www.habit-pulse.me/dashboard', '_blank');
});


document.getElementById("sayHello").addEventListener("click", function () {
    window.location.href = "mailto:thuthikaraneasvaran@gmail.com";
});

