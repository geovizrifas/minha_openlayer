var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Ampara_GN_Div_1 = new ol.format.GeoJSON();
var features_Ampara_GN_Div_1 = format_Ampara_GN_Div_1.readFeatures(json_Ampara_GN_Div_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ampara_GN_Div_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ampara_GN_Div_1.addFeatures(features_Ampara_GN_Div_1);
var lyr_Ampara_GN_Div_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ampara_GN_Div_1, 
                style: style_Ampara_GN_Div_1,
                popuplayertitle: 'Ampara_GN_Div',
                interactive: true,
                title: '<img src="styles/legend/Ampara_GN_Div_1.png" /> Ampara_GN_Div'
            });
var format_Batticaloa_GN_Div_2 = new ol.format.GeoJSON();
var features_Batticaloa_GN_Div_2 = format_Batticaloa_GN_Div_2.readFeatures(json_Batticaloa_GN_Div_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batticaloa_GN_Div_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batticaloa_GN_Div_2.addFeatures(features_Batticaloa_GN_Div_2);
var lyr_Batticaloa_GN_Div_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batticaloa_GN_Div_2, 
                style: style_Batticaloa_GN_Div_2,
                popuplayertitle: 'Batticaloa_GN_Div',
                interactive: true,
                title: '<img src="styles/legend/Batticaloa_GN_Div_2.png" /> Batticaloa_GN_Div'
            });
var format_Trinco_GN_Div_3 = new ol.format.GeoJSON();
var features_Trinco_GN_Div_3 = format_Trinco_GN_Div_3.readFeatures(json_Trinco_GN_Div_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trinco_GN_Div_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trinco_GN_Div_3.addFeatures(features_Trinco_GN_Div_3);
var lyr_Trinco_GN_Div_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trinco_GN_Div_3, 
                style: style_Trinco_GN_Div_3,
                popuplayertitle: 'Trinco_GN_Div',
                interactive: true,
                title: '<img src="styles/legend/Trinco_GN_Div_3.png" /> Trinco_GN_Div'
            });
var format_KKY_DS_Div_4 = new ol.format.GeoJSON();
var features_KKY_DS_Div_4 = format_KKY_DS_Div_4.readFeatures(json_KKY_DS_Div_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KKY_DS_Div_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KKY_DS_Div_4.addFeatures(features_KKY_DS_Div_4);
var lyr_KKY_DS_Div_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KKY_DS_Div_4, 
                style: style_KKY_DS_Div_4,
                popuplayertitle: 'KKY_DS_Div',
                interactive: true,
                title: '<img src="styles/legend/KKY_DS_Div_4.png" /> KKY_DS_Div'
            });
var format_minhas_route_5 = new ol.format.GeoJSON();
var features_minhas_route_5 = format_minhas_route_5.readFeatures(json_minhas_route_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minhas_route_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minhas_route_5.addFeatures(features_minhas_route_5);
var lyr_minhas_route_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_minhas_route_5, 
                style: style_minhas_route_5,
                popuplayertitle: 'minha\'s_route',
                interactive: true,
                title: '<img src="styles/legend/minhas_route_5.png" /> minha\'s_route'
            });
var format_minhas_places_6 = new ol.format.GeoJSON();
var features_minhas_places_6 = format_minhas_places_6.readFeatures(json_minhas_places_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minhas_places_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minhas_places_6.addFeatures(features_minhas_places_6);
var lyr_minhas_places_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_minhas_places_6, 
                style: style_minhas_places_6,
                popuplayertitle: 'minha\'s_places',
                interactive: true,
                title: '<img src="styles/legend/minhas_places_6.png" /> minha\'s_places'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Ampara_GN_Div_1.setVisible(true);lyr_Batticaloa_GN_Div_2.setVisible(true);lyr_Trinco_GN_Div_3.setVisible(true);lyr_KKY_DS_Div_4.setVisible(true);lyr_minhas_route_5.setVisible(true);lyr_minhas_places_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Ampara_GN_Div_1,lyr_Batticaloa_GN_Div_2,lyr_Trinco_GN_Div_3,lyr_KKY_DS_Div_4,lyr_minhas_route_5,lyr_minhas_places_6];
lyr_Ampara_GN_Div_1.set('fieldAliases', {'fid': 'fid', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Batticaloa_GN_Div_2.set('fieldAliases', {'fid': 'fid', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Trinco_GN_Div_3.set('fieldAliases', {'fid': 'fid', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KKY_DS_Div_4.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'fid_12': 'fid_12', 'DSD_N': 'DSD_N', });
lyr_minhas_route_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_minhas_places_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ampara_GN_Div_1.set('fieldImages', {'fid': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Batticaloa_GN_Div_2.set('fieldImages', {'fid': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Trinco_GN_Div_3.set('fieldImages', {'fid': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_KKY_DS_Div_4.set('fieldImages', {'fid': '', 'fid_1': '', 'fid_12': '', 'DSD_N': '', });
lyr_minhas_route_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_minhas_places_6.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Ampara_GN_Div_1.set('fieldLabels', {'fid': 'no label', 'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Batticaloa_GN_Div_2.set('fieldLabels', {'fid': 'no label', 'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Trinco_GN_Div_3.set('fieldLabels', {'fid': 'no label', 'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KKY_DS_Div_4.set('fieldLabels', {'fid': 'no label', 'fid_1': 'no label', 'fid_12': 'no label', 'DSD_N': 'inline label - always visible', });
lyr_minhas_route_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'inline label - always visible', });
lyr_minhas_places_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'inline label - always visible', });
lyr_minhas_places_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});