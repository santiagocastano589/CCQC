// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('searchInput');
//     const pabellonSelect = document.getElementById('Pabellon');
//     const servicioSelect = document.getElementById('Servicio');
//     const tableBody = document.getElementById('tableBody');

//     let searchTerm = '';
//     let pabellonFilter = '';
//     let servicioFilter = '';
    

//     function filterResults() {
//         $.ajax({
//             url: 'db.php',
//             method: 'GET',
//             dataType: 'text',
//             success: function(data) {
//                 tableBody.innerHTML = '';


//                 try {


                      
//                       const pabellonSet = new Set();

//                       jsonData.forEach(row => {
//                           const { Pabellon, Cama, Ingreso, Tip_Doc, Documento, Folio, Paciente, Fec_Ingreso, Origen_Atencion, Tipo_Concepto, Cups, Nombre_Procedimiento, Cantidad, Fch_Orden, Observaciones } = row;
                          
//                           if (Pabellon) {
//                               pabellonSet.add(Pabellon);
//                           }
  
//                           const matchesPabellon = pabellonFilter === '' || Pabellon.toLowerCase().includes(pabellonFilter.toLowerCase());
//                           const matchesServicio = servicioFilter === '' || Tipo_Concepto.toLowerCase().includes(servicioFilter.toLowerCase());
//                           const matchesSearchTerm = 
//                               Pabellon.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Cama.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Documento.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Folio.toString().includes(searchTerm) ||
//                               Paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Tipo_Concepto.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Cups.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Nombre_Procedimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                               Cantidad.toString().includes(searchTerm) ||
//                               Fch_Orden.toLowerCase().includes(searchTerm.toLowerCase());
  
//                           if (matchesPabellon && matchesServicio && matchesSearchTerm) {
//                               const rowElement = document.createElement('tr');
//                               rowElement.innerHTML = `
//                                   <td>${Pabellon}</td>
//                                   <td>${Ingreso}</td>
//                                   <td>${Tip_Doc}</td>
//                                   <td>${Documento}</td>
//                                   <td>${Folio}</td>
//                                   <td class='fh'>${Paciente}</td>
//                                   <td>${Origen_Atencion}</td>
//                                   <td>${Cups}</td>
//                                   <td class='fh'>${Nombre_Procedimiento}</td>
//                                   <td>${Cantidad}</td>
//                                   <td class='fh'>${Fch_Orden}</td>
//                                   <td id="ob">${Observaciones}</td>
//                               `;
//                               tableBody.appendChild(rowElement);
//                           }
//                       });
  
//                       // Limpiar las opciones del select de pabellón antes de agregar nuevas
//                       pabellonSelect.innerHTML = '';

//                 // Agregar la opción predeterminada si no hay pabellón seleccionado
//                 if (pabellonFilter === '') {
//                     const defaultOption = document.createElement('option');
//                     defaultOption.value = '';
//                     defaultOption.textContent = 'Selecciona un Pabellón';
//                     pabellonSelect.appendChild(defaultOption);
//                 }

//                 // Agregar los pabellones únicos al select
//                 pabellonSet.forEach(pabellon => {
//                     const option = document.createElement('option');
//                     option.value = pabellon;
//                     option.textContent = pabellon;
//                     pabellonSelect.appendChild(option);
//                 });

//                 // Restaurar la selección anterior si hay un filtro aplicado
//                 pabellonSelect.value = pabellonFilter;
  
//                   } catch (e) {
//                       console.error("Error al convertir el texto a JSON:", e);
//                   }
//               },
//               error: function(jqXHR, textStatus, errorThrown) {
//                   console.error('Error fetching data:', textStatus, errorThrown, jqXHR);
//               }
//           });
//       }
  
//       searchInput.addEventListener('input', (event) => {
//           searchTerm = event.target.value.toLowerCase();
//           filterResults();
//       });
  
//       pabellonSelect.addEventListener('change', (event) => {
//           pabellonFilter = event.target.value.toLowerCase();
//           filterResults();
//       });
  
//       servicioSelect.addEventListener('change', (event) => {
//           servicioFilter = event.target.value.toLowerCase();
//           filterResults();
//       });
  
//       filterResults();
//   });



// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('searchInput');
//     const pabellonSelect = document.getElementById('Pabellon');
//     const servicioSelect = document.getElementById('Servicio');
//     const tableBody = document.getElementById('tableBody');

//     let searchTerm = '';
//     let pabellonFilter = '';
//     let servicioFilter = '';

//     function filterResults() {
//         $.ajax({
//             url: 'db.php',
//             method: 'GET',
//             dataType: 'text',
//             success: function(data) {
//                 tableBody.innerHTML = '';
                
//                 try {
//                     const jsonData = [
//                         {
//                             Pabellon: "JUGOS",
//                             Cama: "888",
//                             Ingreso: "2024-01",
//                             Tip_Doc: "CC",
//                             Documento: "67765645",
//                             Folio: "F001",
//                             Paciente: "Juan Pérez",
//                             Fec_Ingreso: "01/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Consulta Externa",
//                             Cups: "870100",
//                             Nombre_Procedimiento: "Consulta Médica General",
//                             Cantidad: 1,
//                             Fch_Orden: "01/10/2024 10:30",
//                             Observaciones: "Ninguna"
//                           },
//                         {
//                             Pabellon: "Cirugía",
//                             Cama: "101",
//                             Ingreso: "2024-01",
//                             Tip_Doc: "CC",
//                             Documento: "123456789",
//                             Folio: "F001",
//                             Paciente: "Juan Pérez",
//                             Fec_Ingreso: "01/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Consulta Externa",
//                             Cups: "870100",
//                             Nombre_Procedimiento: "Consulta Médica General",
//                             Cantidad: 1,
//                             Fch_Orden: "01/10/2024 10:30",
//                             Observaciones: "Ninguna"
//                           },
//                           {
//                             Pabellon: "Pediatría",
//                             Cama: "205",
//                             Ingreso: "2024-02",
//                             Tip_Doc: "TI",
//                             Documento: "987654321",
//                             Folio: "F002",
//                             Paciente: "María López",
//                             Fec_Ingreso: "02/10/2024",
//                             Origen_Atencion: "URGENCIAS",
//                             Tipo_Concepto: "Cirugía Ambulatoria",
//                             Cups: "870110",
//                             Nombre_Procedimiento: "Apendicectomía",
//                             Cantidad: 1,
//                             Fch_Orden: "02/10/2024 14:45",
//                             Observaciones: "Paciente estable"
//                           },
//                           {
//                             Pabellon: "Urgencias",
//                             Cama: "0",
//                             Ingreso: "2024-03",
//                             Tip_Doc: "CE",
//                             Documento: "1122334455",
//                             Folio: "F003",
//                             Paciente: "Carlos Ramírez",
//                             Fec_Ingreso: "03/10/2024",
//                             Origen_Atencion: "URGENCIAS",
//                             Tipo_Concepto: "Consulta Prioritaria",
//                             Cups: "870120",
//                             Nombre_Procedimiento: "Sutura de Herida",
//                             Cantidad: 2,
//                             Fch_Orden: "03/10/2024 18:00",
//                             Observaciones: "Paciente requiere seguimiento"
//                           },
//                           {
//                             Pabellon: "Urgencias",
//                             Cama: "0",
//                             Ingreso: "2024-04",
//                             Tip_Doc: "CC",
//                             Documento: "5566778899",
//                             Folio: "F004",
//                             Paciente: "Ana García",
//                             Fec_Ingreso: "04/10/2024",
//                             Origen_Atencion: "CX.AMBULATORIA",
//                             Tipo_Concepto: "Examen Diagnóstico",
//                             Cups: "870130",
//                             Nombre_Procedimiento: "Radiografía de Tórax",
//                             Cantidad: 1,
//                             Fch_Orden: "04/10/2024 09:00",
//                             Observaciones: "Resultado pendiente"
//                           },
//                           {
//                             Pabellon: "JUGOS",
//                             Cama: "303",
//                             Ingreso: "2024-05",
//                             Tip_Doc: "CC",
//                             Documento: "2233445566",
//                             Folio: "F005",
//                             Paciente: "Luis Hernández",
//                             Fec_Ingreso: "05/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Examen Diagnóstico",
//                             Cups: "870140",
//                             Nombre_Procedimiento: "Ecografía Abdominal",
//                             Cantidad: 1,
//                             Fch_Orden: "05/10/2024 11:00",
//                             Observaciones: "Requiere evaluación adicional"
//                           },
//                           {
//                             Pabellon: "Ginecología",
//                             Cama: "401",
//                             Ingreso: "2024-06",
//                             Tip_Doc: "CC",
//                             Documento: "4455667788",
//                             Folio: "F006",
//                             Paciente: "Sofía Ríos",
//                             Fec_Ingreso: "06/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Intervención Quirúrgica",
//                             Cups: "870150",
//                             Nombre_Procedimiento: "Cesárea",
//                             Cantidad: 1,
//                             Fch_Orden: "06/10/2024 08:00",
//                             Observaciones: "Todo salió bien"
//                           },
//                           {
//                             Pabellon: "Neurología",
//                             Cama: "105",
//                             Ingreso: "2024-07",
//                             Tip_Doc: "CE",
//                             Documento: "3344556677",
//                             Folio: "F007",
//                             Paciente: "Pedro Torres",
//                             Fec_Ingreso: "07/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Terapia",
//                             Cups: "870160",
//                             Nombre_Procedimiento: "Rehabilitación Motora",
//                             Cantidad: 5,
//                             Fch_Orden: "07/10/2024 15:00",
//                             Observaciones: "Mejora notable"
//                           },
//                           {
//                             Pabellon: "Oncología",
//                             Cama: "203",
//                             Ingreso: "2024-08",
//                             Tip_Doc: "CE",
//                             Documento: "7788990011",
//                             Folio: "F008",
//                             Paciente: "Carolina Martínez",
//                             Fec_Ingreso: "08/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Tratamiento",
//                             Cups: "870170",
//                             Nombre_Procedimiento: "Quimioterapia",
//                             Cantidad: 4,
//                             Fch_Orden: "08/10/2024 09:30",
//                             Observaciones: "Paciente con buen ánimo"
//                           },
//                           {
//                             Pabellon: "Pediatría",
//                             Cama: "301",
//                             Ingreso: "2024-09",
//                             Tip_Doc: "TI",
//                             Documento: "9998887776",
//                             Folio: "F009",
//                             Paciente: "Emilia Soto",
//                             Fec_Ingreso: "09/10/2024",
//                             Origen_Atencion: "URGENCIAS",
//                             Tipo_Concepto: "Consulta Externa",
//                             Cups: "870180",
//                             Nombre_Procedimiento: "Vacunación",
//                             Cantidad: 1,
//                             Fch_Orden: "09/10/2024 12:00",
//                             Observaciones: "Vacunas completas"
//                           },
//                           {
//                             Pabellon: "Medicina Interna",
//                             Cama: "501",
//                             Ingreso: "2024-10",
//                             Tip_Doc: "CC",
//                             Documento: "11223344556",
//                             Folio: "F010",
//                             Paciente: "Andrés Velásquez",
//                             Fec_Ingreso: "10/10/2024",
//                             Origen_Atencion: "HOSPITALIZACION",
//                             Tipo_Concepto: "Examen Diagnóstico",
//                             Cups: "870190",
//                             Nombre_Procedimiento: "Electrocardiograma",
//                             Cantidad: 1,
//                             Fch_Orden: "10/10/2024 10:00",
//                             Observaciones: "Resultado dentro de parámetros normales"
//                           },
//                           {
//                             Pabellon: "Cardiología",
//                             Cama: "602",
//                             Ingreso: "2024-11",
//                             Tip_Doc: "CC",
//                             Documento: "6677889900",
//                             Folio: "F011",
//                             Paciente: "Sara Montoya",
//                             Fec_Ingreso: "11/10/2024",
//                             Origen_Atencion: "URGENCIAS",
//                             Tipo_Concepto: "Intervención Quirúrgica",
//                             Cups: "870200",
//                             Nombre_Procedimiento: "Colocación de marcapasos",
//                             Cantidad: 1,
//                             Fch_Orden: "11/10/2024 07:00",
//                             Observaciones: "Procedimiento exitoso"
//                           },
//                           {
//                             Pabellon: "Gastroenterología",
//                             Cama: "202",
//                             Ingreso: "2024-12",
//                             Tip_Doc: "CE",
//                             Documento: "5544332211",
//                             Folio: "F012",
//                             Paciente: "Julia Ortiz",
//                             Fec_Ingreso: "12/10/2024",
//                             Origen_Atencion: "URGENCIAS",
//                             Tipo_Concepto: "Consulta Externa",
//                             Cups: "870210",
//                             Nombre_Procedimiento: "Colonoscopia",
//                             Cantidad: 1,
//                             Fch_Orden: "12/10/2024 11:30",
//                             Observaciones: "Requiere tratamiento"
//                           },
//                       ];
//                       ;                    
//                     const pabellonSet = new Set();
//                     const filteredData = jsonData.filter(row => {
//                         const { Pabellon, Tipo_Concepto, ...rest } = row;

//                         if (Pabellon) {
//                             pabellonSet.add(Pabellon);
//                         }

//                         // Aplica los filtros
//                         const matchesPabellon = pabellonFilter === '' || Pabellon.toLowerCase().includes(pabellonFilter.toLowerCase());
//                                                   const matchesServicio = servicioFilter === '' || Tipo_Concepto.toLowerCase().includes(servicioFilter.toLowerCase());
//                                                   const matchesSearchTerm = 
//                                                       Pabellon.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Cama.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Documento.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Folio.toString().includes(searchTerm) ||
//                                                       Paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Tipo_Concepto.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Cups.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Nombre_Procedimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                                                       Cantidad.toString().includes(searchTerm) ||
//                                                       Fch_Orden.toLowerCase().includes(searchTerm.toLowerCase());
                          
                            
//                         return matchesPabellon && matchesServicio && matchesSearchTerm;
//                     });

//                     // Llenar la tabla con los resultados filtrados
//                     filteredData.forEach(row => {
//                         const rowElement = document.createElement('tr');
//                         rowElement.innerHTML = `
//                             <td>${row.Pabellon}</td>
//                             <td>${row.Ingreso}</td>
//                             <td>${row.Tip_Doc}</td>
//                             <td>${row.Documento}</td>
//                             <td>${row.Folio}</td>
//                             <td class='fh'>${row.Paciente}</td>
//                             <td>${row.Origen_Atencion}</td>
//                             <td>${row.Cups}</td>
//                             <td class='fh'>${row.Nombre_Procedimiento}</td>
//                             <td>${row.Cantidad}</td>
//                             <td class='fh'>${row.Fch_Orden}</td>
//                             <td id="ob">${row.Observaciones}</td>
//                         `;
//                         tableBody.appendChild(rowElement);
//                     });

//                     // Actualizar el select de pabellones
//                     pabellonSelect.innerHTML = '';
//                     const defaultOption = document.createElement('option');
//                     defaultOption.value = '';
//                     defaultOption.textContent = 'Selecciona un Pabellón';
//                     pabellonSelect.appendChild(defaultOption);

//                     // Agregar los pabellones únicos al select
//                     pabellonSet.forEach(pabellon => {
//                         const option = document.createElement('option');
//                         option.value = pabellon;
//                         option.textContent = pabellon;
//                         pabellonSelect.appendChild(option);
//                     });

//                     // Restaurar la selección anterior si hay un filtro aplicado
//                     pabellonSelect.value = pabellonFilter;

//                 } catch (e) {
//                     console.error("Error al convertir el texto a JSON:", e);
//                 }
//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//                 console.error('Error fetching data:', textStatus, errorThrown, jqXHR);
//             }
//         });
//     }

//     searchInput.addEventListener('input', (event) => {
//         searchTerm = event.target.value.toLowerCase();
//         filterResults();
//     });

//     pabellonSelect.addEventListener('change', (event) => {
//         pabellonFilter = event.target.value.toLowerCase();
//         filterResults();
//     });

//     servicioSelect.addEventListener('change', (event) => {
//         servicioFilter = event.target.value.toLowerCase();
//         filterResults();
//     });

//     filterResults();
// });

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
                    const jsonData = [
                        { Pabellon: "JUGOS", Cama: "888", Ingreso: "2024-01", Tip_Doc: "CC", Documento: "67765645", Folio: "F001", Paciente: "Juan Pérez", Fec_Ingreso: "01/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Consulta Externa", Cups: "870100", Nombre_Procedimiento: "Consulta Médica General", Cantidad: 1, Fch_Orden: "01/10/2024 10:30", Observaciones: "Ninguna" },
                        { Pabellon: "Cirugía", Cama: "101", Ingreso: "2024-01", Tip_Doc: "CC", Documento: "123456789", Folio: "F001", Paciente: "Juan Pérez", Fec_Ingreso: "01/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Consulta Externa", Cups: "870100", Nombre_Procedimiento: "Consulta Médica General", Cantidad: 1, Fch_Orden: "01/10/2024 10:30", Observaciones: "Ninguna" },
                        { Pabellon: "Pediatría", Cama: "205", Ingreso: "2024-02", Tip_Doc: "TI", Documento: "987654321", Folio: "F002", Paciente: "María López", Fec_Ingreso: "02/10/2024", Origen_Atencion: "URGENCIAS", Tipo_Concepto: "Cirugía Ambulatoria", Cups: "870110", Nombre_Procedimiento: "Apendicectomía", Cantidad: 1, Fch_Orden: "02/10/2024 14:45", Observaciones: "Paciente estable" },
                        { Pabellon: "Urgencias", Cama: "0", Ingreso: "2024-03", Tip_Doc: "CE", Documento: "1122334455", Folio: "F003", Paciente: "Carlos Ramírez", Fec_Ingreso: "03/10/2024", Origen_Atencion: "URGENCIAS", Tipo_Concepto: "Consulta Prioritaria", Cups: "870120", Nombre_Procedimiento: "Sutura de Herida", Cantidad: 2, Fch_Orden: "03/10/2024 18:00", Observaciones: "Paciente requiere seguimiento" },
                        { Pabellon: "Urgencias", Cama: "0", Ingreso: "2024-04", Tip_Doc: "CC", Documento: "5566778899", Folio: "F004", Paciente: "Ana García", Fec_Ingreso: "04/10/2024", Origen_Atencion: "CX.AMBULATORIA", Tipo_Concepto: "Examen Diagnóstico", Cups: "870130", Nombre_Procedimiento: "Radiografía de Tórax", Cantidad: 1, Fch_Orden: "04/10/2024 09:00", Observaciones: "Resultado pendiente" },
                        { Pabellon: "JUGOS", Cama: "303", Ingreso: "2024-05", Tip_Doc: "CC", Documento: "2233445566", Folio: "F005", Paciente: "Luis Hernández", Fec_Ingreso: "05/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Examen Diagnóstico", Cups: "870140", Nombre_Procedimiento: "Ecografía Abdominal", Cantidad: 1, Fch_Orden: "05/10/2024 11:00", Observaciones: "Requiere evaluación adicional" },
                        { Pabellon: "Ginecología", Cama: "401", Ingreso: "2024-06", Tip_Doc: "CC", Documento: "4455667788", Folio: "F006", Paciente: "Sofía Ríos", Fec_Ingreso: "06/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Intervención Quirúrgica", Cups: "870150", Nombre_Procedimiento: "Cesárea", Cantidad: 1, Fch_Orden: "06/10/2024 08:00", Observaciones: "Todo salió bien" },
                        { Pabellon: "Neurología", Cama: "105", Ingreso: "2024-07", Tip_Doc: "CE", Documento: "3344556677", Folio: "F007", Paciente: "Pedro Torres", Fec_Ingreso: "07/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Terapia", Cups: "870160", Nombre_Procedimiento: "Rehabilitación Motora", Cantidad: 5, Fch_Orden: "07/10/2024 15:00", Observaciones: "Mejora notable" },
                        { Pabellon: "Oncología", Cama: "203", Ingreso: "2024-08", Tip_Doc: "CE", Documento: "7788990011", Folio: "F008", Paciente: "Carolina Martínez", Fec_Ingreso: "08/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Tratamiento", Cups: "870170", Nombre_Procedimiento: "Quimioterapia", Cantidad: 4, Fch_Orden: "08/10/2024 09:30", Observaciones: "Paciente con buen ánimo" },
                        { Pabellon: "Pediatría", Cama: "301", Ingreso: "2024-09", Tip_Doc: "TI", Documento: "9998887776", Folio: "F009", Paciente: "Emilia Soto", Fec_Ingreso: "09/10/2024", Origen_Atencion: "URGENCIAS", Tipo_Concepto: "Consulta Externa", Cups: "870180", Nombre_Procedimiento: "Vacunación", Cantidad: 1, Fch_Orden: "09/10/2024 12:00", Observaciones: "Vacunas completas" },
                        { Pabellon: "Medicina Interna", Cama: "501", Ingreso: "2024-10", Tip_Doc: "CC", Documento: "11223344556", Folio: "F010", Paciente: "Andrés Velásquez", Fec_Ingreso: "10/10/2024", Origen_Atencion: "HOSPITALIZACION", Tipo_Concepto: "Examen Diagnóstico", Cups: "870190", Nombre_Procedimiento: "Electrocardiograma", Cantidad: 1, Fch_Orden: "10/10/2024 10:00", Observaciones: "Resultado dentro de parámetros normales" },
                        { Pabellon: "Cardiología", Cama: "602", Ingreso: "2024-11", Tip_Doc: "CC", Documento: "6677889900", Folio: "F011", Paciente: "Sara Montoya", Fec_Ingreso: "11/10/2024", Origen_Atencion: "URGENCIAS", Tipo_Concepto: "Intervención Quirúrgica", Cups: "870200", Nombre_Procedimiento: "Colocación de marcapasos", Cantidad: 1, Fch_Orden: "11/10/2024 07:00", Observaciones: "Procedimiento exitoso" },
                        { Pabellon: "Gastroenterología", Cama: "202", Ingreso: "2024-12", Tip_Doc: "CE", Documento: "5544332211", Folio: "F012", Paciente: "Julia Ortiz", Fec_Ingreso: "12/10/2024", Origen_Atencion: "URGENCIAS", Tipo_Concepto: "Consulta Externa", Cups: "870210", Nombre_Procedimiento: "Colonoscopia", Cantidad: 1, Fch_Orden: "12/10/2024 11:30", Observaciones: "Requiere tratamiento" }
                    ];
                    const pabellonSet = new Set();
                    const filteredData = jsonData.filter(row => {
                        const { Pabellon, Tipo_Concepto } = row;

                        if (Pabellon) {
                            pabellonSet.add(Pabellon);
                        }

                        // Aplica los filtros
                        const matchesPabellon = pabellonFilter === '' || Pabellon.toLowerCase().includes(pabellonFilter.toLowerCase());
                        const matchesServicio = servicioFilter === '' || Tipo_Concepto.toLowerCase().includes(servicioFilter.toLowerCase());
                        const matchesSearchTerm = 
                                                      Pabellon.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Cama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Documento.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Folio.toString().includes(searchTerm) ||
                                                      Paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Tipo_Concepto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Cups.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Nombre_Procedimiento.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                      Cantidad.toString().includes(searchTerm) ||
                                                      Fch_Orden.toLowerCase().includes(searchTerm.toLowerCase());

                        return matchesPabellon && matchesServicio && matchesSearchTerm;
                    });

                    // Limpiar las opciones del select de pabellón antes de agregar nuevas
                    pabellonSelect.innerHTML = '';

                    // Agregar la opción predeterminada
                    const defaultOption = document.createElement('option');
                    defaultOption.value = '';
                    defaultOption.textContent = 'Pabellón';
                    pabellonSelect.appendChild(defaultOption);

                    // Agregar los pabellones únicos al select
                    pabellonSet.forEach(pabellon => {
                        const option = document.createElement('option');
                        option.value = pabellon;
                        option.textContent = pabellon;
                        pabellonSelect.appendChild(option);
                    });

                    // Restaurar la selección anterior si hay un filtro aplicado
                    if (pabellonFilter && pabellonSet.has(pabellonFilter)) {
                        pabellonSelect.value = pabellonFilter;
                    } else {
                        pabellonSelect.value = ''; // Si no está, restaura a vacío
                    }

                    // Actualiza la tabla con los datos filtrados
                    filteredData.forEach(row => {
                        const rowElement = document.createElement('tr');
                        rowElement.innerHTML = `
                            <td>${row.Pabellon}</td>
                            <td>${row.Cama}</td>
                            <td>${row.Ingreso}</td>
                            <td>${row.Tip_Doc}</td>
                            <td>${row.Documento}</td>
                            <td>${row.Folio}</td>
                            <td>${row.Paciente}</td>
                            <td>${row.Fec_Ingreso}</td>
                            <td>${row.Origen_Atencion}</td>
                            <td>${row.Tipo_Concepto}</td>
                            <td>${row.Cups}</td>
                            <td>${row.Nombre_Procedimiento}</td>
                            <td>${row.Cantidad}</td>
                            <td>${row.Fch_Orden}</td>
                            <td>${row.Observaciones}</td>
                        `;
                        tableBody.appendChild(rowElement);
                    });

                } catch (e) {
                    console.error("Error al procesar los datos:", e);
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









// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('searchInput');
//     const pabellonSelect = document.getElementById('Pabellon');
//     const servicioSelect = document.getElementById('Servicio');
//     const tableBody = document.getElementById('tableBody');

//     let searchTerm = '';
//     let pabellonFilter = '';
//     let servicioFilter = '';

//     function filterResults() {
//         // Simulación de datos con estructura compleja
//         const data = [
//             {
//                 "ingreso": {
//                     "paciente": {
//                         "nombre": "Juan Pérez",
//                         "documento": "67765645"
//                     },
//                     "pabellon": {
//                         "nombre": "JUGOS"
//                     },
//                     "cama": "888",
//                     // otros datos...
//                 }
//             },
//             {
//                 "ingreso": {
//                     "paciente": {
//                         "nombre": "María López",
//                         "documento": "987654321"
//                     },
//                     "pabellon": {
//                         "nombre": "Pediatría"
//                     },
//                     "cama": "205",
//                     // otros datos...
//                 }
//             },
//             // más objetos...
//         ];

//         const pabellonSet = new Set();
//         const filteredData = data.filter(row => {
//             const pabellonNombre = row.ingreso.pabellon.nombre;
//             const pacienteNombre = row.ingreso.paciente.nombre;

//             if (pabellonNombre) {
//                 pabellonSet.add(pabellonNombre);
//             }

//             // Aplica los filtros
//             const matchesPabellon = pabellonFilter === '' || pabellonNombre.toLowerCase().includes(pabellonFilter.toLowerCase());
//             const matchesSearchTerm = pacienteNombre.toLowerCase().includes(searchTerm.toLowerCase());

//             return matchesPabellon && matchesSearchTerm;
//         });

//         // Limpiar las opciones del select de pabellón antes de agregar nuevas
//         pabellonSelect.innerHTML = '';

//         // Agregar la opción predeterminada
//         const defaultOption = document.createElement('option');
//         defaultOption.value = '';
//         defaultOption.textContent = 'Selecciona un Pabellón';
//         pabellonSelect.appendChild(defaultOption);

//         // Agregar los pabellones únicos al select
//         pabellonSet.forEach(pabellon => {
//             const option = document.createElement('option');
//             option.value = pabellon;
//             option.textContent = pabellon;
//             pabellonSelect.appendChild(option);
//         });

//         // Actualiza la tabla con los datos filtrados
//         tableBody.innerHTML = ''; // Limpiar tabla antes de agregar nuevos elementos
//         filteredData.forEach(row => {
//             const rowElement = document.createElement('tr');
//             rowElement.innerHTML = `
//                 <td>${row.ingreso.pabellon.nombre}</td>
//                 <td>${row.ingreso.cama}</td>
//                 <td>${row.ingreso.paciente.documento}</td>
//                 <td>${row.ingreso.paciente.nombre}</td>
//                 // otros campos...
//             `;
//             tableBody.appendChild(rowElement);
//         });
//     }

//     searchInput.addEventListener('input', (event) => {
//         searchTerm = event.target.value.toLowerCase();
//         filterResults();
//     });

//     pabellonSelect.addEventListener('change', (event) => {
//         pabellonFilter = event.target.value.toLowerCase();
//         filterResults();
//     });

//     // Llamada inicial para mostrar datos
//     filterResults();
// });
