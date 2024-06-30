// Grupos de capas bases
var baseLayers = [
	{
		name: "ArgenMap",
		layer: argenmap,
	},
	{
		name: "Open Street Map",
		layer: osm,
	},
	{
		name: "Google Satelite",
		layer: google
	}];
// Grupos de capas interactivas
var overlayMaps = [
	{
		group: "Jurisdicciones",
		collapsed: true,
		layers: [

			{
				active: false,
				name: "Departamentos",
				layer: DEPTOFAO,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Provincias",
				layer: PROVFAO,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Regiones",
				layer: REFIONESFAO,
				transparent: true,
				opacity: 0.5,
			}
		]
	},
];
//panel ambiental
var infoAmb = [
	{
		group: "Información Base",
		collapsed: true,
		layers: [
			{
				active: false,
				name: "Rios",
				layer: Rios,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Cuencas Hídricas",
				layer: SubCuencas,
				transparent: true,
				opacity: 0.5,
			},

			{
				active: false,
				name: "Unidades Geológicas (2.5M)",
				layer: Geologia,
				transparent: true,
				opacity: 0.5,
			},
		]
	}

];
//panel Poblaciones
var panelPob = [
	{
		group: "Info Censal - INDEC",
		collapsed: true,
		layers: [

			, {
				active: false,
				name: "Localidades Censales",
				layer: Localidad,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Parajes",
				layer: Parajes,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Datos Censales (2022)",
				layer: DataCenso,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Nucleos de Agricultura Familiar",
				layer: NucleosAF,
				transparent: true,
				opacity: 0.5,
			}]
	}];

// panel Acceso al Agua
var panelAgua = [
	{
		group: "Acceso al Agua",
		collapsed: true,
		layers: [
			{
				active: false,
				name: "Proyectos de Agua",
				layer: ProyecAgua,
				transparent: true,
				opacity: 0.5,
			},
			
			
		]
	}];

//panel de Estatus Hidrico
var panelTransparecia = [{
	group: "Estatus Hídrico",
	collapsed: true,
	layers: [
		{
			active: false,
			name: "Indice de Precipitación Diario (API)",
			layer: APIDiario,
			transparent: true,
			opacity: 0.5,
		},
		{
			active: false,
			name: "Percentil de API",
			layer: APIPercentil,
			transparent: true,
			opacity: 0.5,
		}
	]
}

];

// panel de CC
var panelCC = [
	{
		title: "Escenarios de Precipitación",
		group: "PPM 4.5",
		collapsed: true,
		layers: [
			{
				active: false,
				name: "Actual",
				layer: Ppm45Actual,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Futuro Cercano (2050)",
				layer: Ppm45FC,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Futuro Lejano (2100)",
				layer: Ppm45FL,
				transparent: true,
				opacity: 0.5,
			},
		]
	},
	{
		group: "PPM 8.5",
		collapsed: true,
		layers: [
			{
				active: false,
				name: "Actual",
				layer: Ppm85Actual,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Futuro Cercano (2050)",
				layer: Ppm85FC,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Futuro Lejano (2100)",
				layer: Ppm85FL,
				transparent: true,
				opacity: 0.5,
			},
		]
	}
];

//panel de control agregado//
var panelLayers = new L.Control.PanelLayers(baseLayers, null,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers1 = new L.Control.PanelLayers(null, overlayMaps,
	{
		compact: true,
		//collapsed: true,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers2 = new L.Control.PanelLayers(null, infoAmb,
	{
		compact: true,
		//collapsed: true,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers3 = new L.Control.PanelLayers(null, panelPob,
	{
		compact: true,
		//collapsed: true,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers4 = new L.Control.PanelLayers(null, panelAgua,
	{
		compact: true,
		//collapsed: true,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers5 = new L.Control.PanelLayers(null, panelTransparecia,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',

	});
var panelLayers6 = new L.Control.PanelLayers(null, panelCC,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',

	});
