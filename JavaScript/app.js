const listaSpesa = ["pasta", "insalata", "mele", "limoni", "banane"]

const ul = document.querySelector('.lista_spesa');


for(let i = 0; i < listaSpesa.length; i++) {
    
    // creazione <li> e aggiunta classe .elemento_spesa
    const liElement = document.createElement('li');
    liElement.classList.add('elemento_spesa')

    // aggiungo a <li> gli oggetti dell'array listaSpesa
    liElement.append(listaSpesa[i])

    // Aggiunto <li> a <ul> con classe .lista_spesa
    ul.append(liElement);
}