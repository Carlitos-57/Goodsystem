const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'service_gu7mqj6';
        const templateID = 'template_u5s3jwq';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Recibimos tu email! Gracias por tu contacto. Pronto! enviaremos a tu correo La Guia definitiva de facebook Ads, pero antes siguenos en Instagram, y unete a nuestro canal de telegram.');
                location.href = 'https://main--cozy-croquembouche-1f7bcc.netlify.app/single.html'
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });


