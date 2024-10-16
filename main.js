const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');
    const generateButton = document.getElementById('generateCircles');
    const colorPicker = document.getElementById('circleColor');


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // Generate random circles
    function generateCircles() {
        const numberOfCircles = Math.floor(Math.random() * 10) + 5; // Generates between 5 and 15 circles
        const circleColor = colorPicker.value;

        for (let i = 0; i < numberOfCircles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.strokeStyle = circleColor;
            ctx.stroke();
        }
    }

    generateButton.addEventListener('click', generateCircles);

    window.addEventListener('resize', resizeCanvas);



    