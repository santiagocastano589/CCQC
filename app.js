document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const pabellonSelect = document.getElementById('Pabellon');
    const servicioSelect = document.getElementById('Servicio');
    const tableBody = document.getElementById('tableBody');

    let searchTerm = '';
    let pabellonFilter = '';
    let servicioFilter = '';

    function filterResults() {
        $.ajax({
            url: 'db.php',
            method: 'GET',
            dataType: 'text',
            success: function(data) {
                tableBody.innerHTML = '';

                try {
                    const jsonData = JSON.parse(data);

                    jsonData.forEach(row => {
                        const { Pabellon, Cama, Ingreso, Tip_Doc, Documento, Folio, Paciente, Fec_Ingreso, Origen_Atencion, Tipo_Concepto, Cups, Nombre_Procedimiento, Cantidad, Fch_Orden, Observaciones } = row;

                        const matchesPabellon = pabellonFilter === '' || Pabellon?.toLowerCase().includes(pabellonFilter.toLowerCase());

                        const matchesServicio = servicioFilter === '' || Tipo_Concepto?.toLowerCase().includes(servicioFilter.toLowerCase());

                        const matchesSearchTerm = 
                            Pabellon?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Cama?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Documento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Folio?.toString().includes(searchTerm) ||
                            Paciente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Tipo_Concepto?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Cups?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Nombre_Procedimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            Cantidad?.toString().includes(searchTerm) ||
                            Fch_Orden?.toLowerCase().includes(searchTerm.toLowerCase());
                
                        if (matchesPabellon && matchesServicio && matchesSearchTerm) {
                            const rowElement = document.createElement('tr');
                            rowElement.innerHTML = `
                                <td>${Cama}</td>
                                <td>${Ingreso}</td>
                                <td>${Tip_Doc}</td>
                                <td>${Documento}</td>
                                <td>${Folio}</td>
                                <td class='fh'>${Paciente}</td>
                                <td>${Origen_Atencion}</td>
                                <td>${Cups}</td>
                                <td class='fh'>${Nombre_Procedimiento}</td>
                                <td>${Cantidad}</td>
                                <td class='fh'>${Fch_Orden}</td>
                                <td id=ob>${Observaciones}</td>
                            `;
                            tableBody.appendChild(rowElement);
                        }
                    });
                } catch (e) {
                    console.error("Error al convertir el texto a JSON:", e);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching data:', textStatus, errorThrown, jqXHR);
            }
        });
    }

    searchInput.addEventListener('input', (event) => {
        searchTerm = event.target.value.toLowerCase();
        filterResults();
    });

    pabellonSelect.addEventListener('change', (event) => {
        pabellonFilter = event.target.value.toLowerCase();
        filterResults();
    });

    servicioSelect.addEventListener('change', (event) => {
        servicioFilter = event.target.value.toLowerCase();
        filterResults();
    });

    filterResults();
});
