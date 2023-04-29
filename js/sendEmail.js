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
                alert('Recibimos tu email! Ok. Pronto! enviaremos a tu correo la Guia de e-commerce.pdf, pero antes siguenos en Instagram, Gracias por tu contacto.');
                location.href = 'https://bit.ly/3Xpu3BN'
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });


