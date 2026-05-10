async function copiarCodigo(boton) {
    const contenedor = boton.closest('.contenedorCodigo');
    const codigo = contenedor.querySelector('code').innerText;
    try {
        await navigator.clipboard.writeText(codigo);
        boton.innerText = '¡Código copiado!';
        console.log('Código copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el código: ', err);
        boton.innerText = '¡Error al copiar!';
    }
    setTimeout(() => {
        boton.innerHTML = `
            <span class="material-symbols-outlined">
                content_copy
            </span>
        `;
    }, 2000);
}