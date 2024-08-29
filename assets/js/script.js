console.log('probando');
/*form*/
const contactForm = document.querySelector('#contact-form')

const buttonContactForm = document.querySelector("#form-button-contact");

const inputEmail = document.querySelector('#input-issue')
const inputIssue = document.querySelector('#input-email')
const inputMessage = document.querySelector('#input-message')

const confirmContainer = document.querySelector("#text-container");


function createHtmlInterface(htmlIssue, htmlEmail, htmlMessage) {
    
    let email = htmlEmail.value;
    let textIssue = htmlIssue.value;
    let textMessage = htmlMessage.value;

    const htmlInterface = `
        <div>
            <h3>¡Gracias! Pronto me pondré en contacto contigo</h3>
        </div>
    `;
    
    return htmlInterface;
};

function printHtmlContent(container, htmlInterfaceToLoad) {
    container.innerHTML = htmlInterfaceToLoad
};

function resetForm(form) {
    form.reset();
};
contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const htmlInterface = createHtmlInterface(inputEmail, inputIssue, inputMessage);
    printHtmlContent(confirmContainer, htmlInterface);
    resetForm(contactForm);
})

document.getElementById('notocar').onclick = function(){
    alert('¿Por qué no hacen caso?>:(');
}