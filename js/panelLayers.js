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
		group: "Información de base",
		collapsed: true,
		layers: [
			// 
			 {
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
				name: "Pob. Total (2022)",
				layer: DataCenso,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Pobl. Originaria (2022)",
				layer: POBIndigena,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "% de Hogares con NBI (2010)",
				layer: NBI,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "% de Hogares con Agua de Red (2022)",
				layer: AguaRED,
				transparent: true,
				opacity: 0.5,
			},{
				active: false,
				name: "Pob. con Nucleos de Agricultura Familiar",
				layer: NucleosAF,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Niveles de Arsenico (ppb)",
				layer: DeptoArsenico,
				transparent: true,
				opacity: 0.5,
			},
			
			

		]
	},
	{
		group: "Proyectos de Agua",
		collapsed: true,
		layers: [
			{
				active: false,
				name: "Proyectos Estandarizados <br> y No Estandarizados",
				layer: ProyecAgua,
				transparent: true,
				opacity: 0.5,
			},
			


		]
	},
	{
		group: "Sitios Priorizados",
		collapsed: true,
		layers: [
			{
				active: false,
				name: "Sitios",
				layer: SitiosSeleccionados,
				transparent: true,
				opacity: 0.5,
			},
			


		]
	},
	
	
	
	


];
//panel ambiental
var infoAmb = [
	{
		group: "Información Base",
		collapsed: true,
		layers: [
			// {
			// 	active: false,
			// 	name: "Rios",
			// 	layer: Rios,
			// 	transparent: true,
			// 	opacity: 0.5,
			// },
			{
				active: false,
				name: "Cuencas Hídricas",
				layer: CuencasHidro,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Regiones Hidrogeográficas",
				layer: RegionesHirdo,
				transparent: true,
				opacity: 0.5,
			},

			{
				active: false,
				name: "Unidades Geológicas (2.5M)",
				layer: GeologicoIGN,
				transparent: true,
				opacity: 0.5,
			},
			
		]
	},
	// {
	// 	group: "Arsénico",
	// 	collapsed: true,
	// 	layers: [
	// 		{
	// 			active: false,
	// 			name: "Dptos con Niveles de Arsenico",
	// 			layer: DeptoArsenico,
	// 			transparent: true,
	// 			opacity: 0.5,
	// 		},


	// 	]
	// }

];
//panel Poblaciones
var panelPob = [
	{
		group: "Info Censal - INDEC",
		collapsed: true,
		layers: [

{
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
			// {
			// 	active: false,
			// 	name: "Nucleos de Agricultura Familiar",
			// 	layer: NucleosAF,
			// 	transparent: true,
			// 	opacity: 0.5,
			// }
		]
	}];

// panel Acceso al Agua
// var panelAgua = [
// 	];

// panel de CC
// var panelCC = [
// 	{
// 		title: "Escenarios de CC",
// 		group: "Escenarios de CC",
// 		collapsed: true,
// 		layers: [
// 			{
// 				active: false,
// 				name: " PPM 4.5 Actual",
// 				layer: Ppm45Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 4.5 Futuro Cercano (2050)",
// 				layer: Ppm45FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 4.5 Futuro Lejano (2100)",
// 				layer: Ppm45FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 8.5 Actual",
// 				layer: Ppm85Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 8.5 Futuro Cercano (2050)",
// 				layer: Ppm85FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 8.5 Futuro Lejano (2100)",
// 				layer: Ppm85FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: " Temp Media 4.5 Actual",
// 				layer: temMedia45Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 4.5 Futuro Cercano (2050)",
// 				layer: temMedia45FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 4.5 Futuro Lejano (2100)",
// 				layer: temMedia45FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 8.5 Actual",
// 				layer: temMedia85Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 8.5 Futuro Cercano (2050)",
// 				layer: temMedia85FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 8.5 Futuro Lejano (2100)",
// 				layer: temMedia85FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 		]
// 	},
// 	// {
// 	// 	group: "Temperatura Media",
// 	// 	collapsed: true,
// 	// 	layers: [
// 	// 		{
// 	// 			active: false,
// 	// 			name: " Temp Media 4.5 Actual",
// 	// 			layer: temMedia45Actual,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 4.5 Futuro Cercano (2050)",
// 	// 			layer: temMedia45FC,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 4.5 Futuro Lejano (2100)",
// 	// 			layer: temMedia45FL,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 8.5 Actual",
// 	// 			layer: temMedia85Actual,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 8.5 Futuro Cercano (2050)",
// 	// 			layer: temMedia85FC,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 8.5 Futuro Lejano (2100)",
// 	// 			layer: temMedia85FL,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 	]
// 	// }
// ];

//panel Acceso al Agua
// var panelArsenico = [
// 	{
// 		group: "Arsénico",
// 		collapsed: true,
// 		layers: [
// 			{
// 				active: false,
// 				name: "Dptos con Niveles de Arsenico",
// 				layer: DeptoArsenico,
// 				transparent: true,
// 				opacity: 0.5,
// 			},


// 		]
// 	}];

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
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});

// var panelLayers3 = new L.Control.PanelLayers(null, panelPob,
// 	{
// 		compact: true,
// 		//collapsed: true,
// 		collapsibleGroups: true,
// 		position: 'topleft',
// 	});
// var panelLayers4 = new L.Control.PanelLayers(null, panelAgua,
// 	{
// 		compact: true,
// 		collapsed: false,
// 		collapsibleGroups: true,
// 		position: 'topleft',
// 	});
var panelLayers2 = new L.Control.PanelLayers(null, infoAmb,
		{
			compact: true,
			collapsed: false,
			collapsibleGroups: true,
			position: 'topleft',
		});


