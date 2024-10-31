function changeLang(language, el) {
    // Selecciona el contenedor de idioma que pertenece al elemento clicado
    const container = el.closest('.chooseLang');

    if (!container) return; // Salir si no se encontró el contenedor

    const containerClassList = container.classList;
    const elClassList = el.classList;

    // Alternar la clase 'open'
    if (containerClassList.contains('open')) {
        containerClassList.remove('open'); // Cierra el contenedor
        if (!elClassList.contains('chosen')) {
            // Cambia la selección
            const currentChosen = container.querySelector('.chosen');
            if (currentChosen) {
                currentChosen.classList.remove('chosen'); // Elimina la selección anterior
            }
            elClassList.add('chosen'); // Marca el nuevo elemento como seleccionado
            console.log(language + ' chosen'); // Log del idioma seleccionado
            // Aquí puedes agregar el código adicional que necesites
        }
        return;
    }

    // Abre el contenedor si no está abierto
    containerClassList.add('open');
}
