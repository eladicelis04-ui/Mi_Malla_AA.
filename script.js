document.addEventListener('DOMContentLoaded', () => {
    const materias = document.querySelectorAll('.materia');
    const storageKey = 'malla_aa_estado';
    
    // 1. Cargar el estado guardado
    let estadoMaterias = JSON.parse(localStorage.getItem(storageKey)) || {};

    // Aplicar el estado cargado
    materias.forEach(materia => {
        const id = materia.getAttribute('data-id');
        if (estadoMaterias[id]) {
            materia.classList.add('aprobada');
        }
    });

    // 2. Manejar el clic para cambiar el estado
    materias.forEach(materia => {
        materia.addEventListener('click', () => {
            materia.classList.toggle('aprobada');
            
            const id = materia.getAttribute('data-id');
            const esAprobada = materia.classList.contains('aprobada');

            // Actualizar el objeto de estado
            estadoMaterias[id] = esAprobada;
            
            // Guardar el nuevo estado en el almacenamiento local del navegador
            localStorage.setItem(storageKey, JSON.stringify(estadoMaterias));
        });
    });
});
