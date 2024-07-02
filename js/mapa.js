// con VAR se crean las capas basese a visualizar => L.tileLayer.wms es la propiedad que tare los TileLayer y/o wms //
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});

var google = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	opacity: 1.0,
	attribution: '&copy;<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google</a>',
	maxZoom: 18
});
var argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
	opacity: 1.0,
	attribution: '<a href="https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2"  target="_blank"> ArgenMap </a>',
	maxZoom: 18,
});


// Crear una capa GeoJSON y añadir al mapa
var Prov = L.geoJSON(provincia, {
	style: function (feature) {
		return {
			fillColor: 'whait',
			weight: 3,
			opacity: 0.5,
			color: 'black',
			dashArray: '3',
			fillOpacity: 0.0
		}
	}
});

var Localidad = L.geoJSON(locCabecera, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocCab);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocCab(feature);
		layer.bindPopup(content);
	}
});
var Parajes = L.geoJSON(locSec, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocSec);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocSec(feature);
		layer.bindPopup(content);
	}
});

var Geologia = L.geoJSON(geologico, {
	style: styleGeol,
	onEachFeature: function (feature, layer) {
		var content = popupContentGeol(feature);
		layer.bindPopup(content);
	}
});

var SubCuencas = L.geoJSON(subcuencas, {

	style: styleCuenca,
	onEachFeature: function (feature, layer) {
		var content = popupContentCuenca(feature);
		layer.bindPopup(content);
	}
});

var Rios = L.geoJSON(rios, {
	style: styleRios,
	onEachFeature: function (feature, layer) {
		var content = popupContentRios(feature);
		layer.bindPopup(content);
	}
});
/// INFO DE TIPO JURISDICCIONAL
var DEPTOFAO = L.geoJSON(dptoFAO, {
	style: function (feature) {
		return {
			fillColor: "gray",
			weight: 1,
			opacity: 1,
			color: '#000',
			dashArray: '0.2',
			fillOpacity: 0.1
		};
	}
});

var PROVFAO = L.geoJSON(provinciasFAO, {
	style: function (feature) {
		return {
			fillColor: "gray",
			weight: 1,
			opacity: 1,
			color: '#000',
			dashArray: '0.2',
			fillOpacity: 0.1
		};
	}
});

var REFIONESFAO = L.geoJSON(regionesFAO, {
	style: styleRegiones,
	onEachFeature: function (feature, layer) {
		var content = popupContentRegiones(feature);
		layer.bindPopup(content);
	}
});
/// ESCENARIOS DE CC 
// PPM 4.5 Y 8.5 en proyeccion Actual (2030), Futuro Cercano (2050) y Furuto Lejano (2010) - Informacion recopilada de SIMARCC (https://simarcc.ambiente.gob.ar/cambio-climatico) - Faecha: junio 2024
var Ppm45Actual = L.geoJSON(resultadoPpm45Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});

var Ppm45FC = L.geoJSON(resultadoPpm45FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var Ppm45FL = L.geoJSON(resultadoPpm45FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var Ppm85Actual = L.geoJSON(resultadoPpm85Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var Ppm85FC = L.geoJSON(resultadoPpm85FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var Ppm85FL = L.geoJSON(resultadoPpm85FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});

///temperatura media

var temMedia45Actual = L.geoJSON(resultadotemMedia45Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});

var temMedia45FC = L.geoJSON(resultadotemMedia45FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var temMedia45FL = L.geoJSON(resultadotemMedia45FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var temMedia85Actual = L.geoJSON(resultadotemMedia85Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var temMedia85FC = L.geoJSON(resultadotemMedia85FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});
var temMedia85FL = L.geoJSON(resultadotemMedia85FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	}

});


//data de Nueclos de Agricultura faminial (extraido del Atlas de AF  - Horacio)
var NucleosAF = L.geoJSON(naf, {
	style: styleNAG,
	onEachFeature: function (feature, layer) {
		var content = popupContentNAF(feature);
		layer.bindPopup(content);
	}
});

//Datos de Localidades con Proyectos de Agua, Estandarizado y No Estandarizado - Generado a partir del Excel con todos los proyectos.
var ProyecAgua = L.geoJSON(proyectos,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptions);

		},
		style: styleProyectos,
		onEachFeature: function (feature, layer) {
			var content = popupContentProyectos(feature);
			layer.bindPopup(content);
		}
	});

// Data poblacional, del año 2022 por departamento. Tomado de: https://portalgeoestadistico.indec.gob.ar/?indicator_id=37&members=108
var DataCenso = L.geoJSON(censo,
	{
		style: styleCenso,
		onEachFeature: function (feature, layer) {
			var content = popupContentCenso(feature);
			layer.bindPopup(content);
		}
	});

///Dapto con Arsenicos segun el Ministerio de Salud en 2006 https://www.argentina.gob.ar/sites/default/files/2006_epidemiologia_del_hacre_en_argentina.pdf
var DeptoArsenico = L.geoJSON(dptoArsenico,
	{
		style: styleDptoArsenico,
		onEachFeature: function (feature, layer) {
			var content = popupContentDptoArsenico(feature);
			layer.bindPopup(content);
		}
	});