document.addEventListener('DOMContentLoaded', function() {
    // Animate feature cards on scroll
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    // URL shortening functionality
    const shortenBtn = document.getElementById('shortenBtn');
    const urlInput = document.getElementById('longUrl');

    shortenBtn.addEventListener('click', async () => {
        const url = urlInput.value;
        if (!url) {
            alert('Please enter a URL');
            return;
        }

        shortenBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Shortening...';
        
        try {
            const response = await fetch('/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            const data = await response.json();
            if (response.ok) {
                urlInput.value = data.shortUrl;
                urlInput.select();
                document.execCommand('copy');
                shortenBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            alert('Error shortening URL: ' + error.message);
            shortenBtn.innerHTML = 'Shorten URL';
        }

        setTimeout(() => {
            shortenBtn.innerHTML = 'Shorten URL';
        }, 2000);
    });
});
