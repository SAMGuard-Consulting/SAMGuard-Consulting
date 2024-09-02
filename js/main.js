function validateEmail() {
    const email = document.getElementById('email').value;
    const freeEmailDomains = ['gmail.com', 'yahoo.com', 'aol.com', 'hotmail.com', 'outlook.com', 'msn.com', 'live.com'];
    const emailDomain = email.split('@')[1];
    const errorMessage = document.getElementById('errorMessage');

    if (freeEmailDomains.includes(emailDomain)) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        
        // Send email alert
        fetch('your-backend-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        }).then(() => {
            window.location.href = 'path-to-your-ebook.pdf';
        }).catch(error => {
            console.error('Error:', error);
        });

        return false;
    }
}

$(document).ready(function(){
    $('a.nav-link').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 56
        }, 800);
    });
});
