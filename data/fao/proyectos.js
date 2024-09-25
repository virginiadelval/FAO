
var MarkerOptions = {
    radius: 6,
    fillColor: "#000",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


// Contenido del popup para cada feature
function popupContentProyectos(feature) {
    return (
        "<div id='Estilo1'><h3>Acceso al Agua</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Nombre del Proyecto: </b>" + feature.properties.Name + "<br>" +
        "<b> Tipo de Abastecimiento: </b>" + feature.properties.layer + "<br>" +
        "<b> Descripcion del Abastecimiento: </b>" + feature.properties.Descriptio + "<br>" +
       
        "<br>" +
        "<b><i> Fuente de Información:  </b> <br>" +
        "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "</div>"
    )
};


// Estilo para cada feature del GeoJSON
function styleProyectos(feature) {
    var color;
    if (feature.properties.layer === 'Proy Estandarizado') {
        color = '#8dd3c7';
        } else if (feature.properties.layer === 'Proy No Estandar') {
        color = '#608a17';
    }  else {
        color = 'gray';
    }
    return {
        weight: 1,
        opacity: 0.7,
        fillColor: color,
        color: "#000",
        dashArray: '0',
        fillOpacity: 0.9,
    };
}


// Función para generar la leyenda
function createLegendProyectos() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];

        // Array con los estilos y sus etiquetas correspondientes
        var styles = [
            { label: 'Proyectos Estandarizados', color: '#8dd3c7' },
            { label: 'Proyectos No Estandarizados', color: '#608a17' },
            
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(ProyecAgua)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}



var proyectos = {
"type": "FeatureCollection",
"name": "poryectos",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [

{ "type": "Feature", "properties": { "Name": "AGUA-JJP-SAF-0016", "Descriptio": "Concatenar: COCHINOCA, JUJUY<br>ID_FID: 4<br>PROVINCIA: JUJUY<br>LOCALIDAD: COCHINOCA<br>TECNOLOGIA: MODELO NO ESTANDARIZADO<br>NOMBRE DEL PROYECTO: FORTALECIMIENTO DE LOS SISTEMAS AGROPECUARIOS MEDIANTE EL APROVECHAMIENTO INTEGRAL DEL AGUA, DESTINADO A", "layer": "Proy No Estandar", "path": "proy_No_estandarizados.shp" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -65.8962315, -22.7450329, 0.0 ] ] } },
]
}
