ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([92.587010, 8.427952, 119.654402, 23.478109]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_density_100m_clipbien1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "density_100m_clipbien1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/density_100m_clipbien1_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [102.199073, 6.568269, 112.546573, 21.723269]
                            })
                        });
var lyr_sum_noweight_new1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "sum_noweight_new1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/sum_noweight_new1_2.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [102.199073, 6.568269, 112.546573, 21.723269]
                            })
                        });
var format_Substations_KV_3 = new ol.format.GeoJSON();
var features_Substations_KV_3 = format_Substations_KV_3.readFeatures(json_Substations_KV_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Substations_KV_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Substations_KV_3.addFeatures(features_Substations_KV_3);
var lyr_Substations_KV_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Substations_KV_3, 
                style: style_Substations_KV_3,
                interactive: true,
    title: 'Substations_KV<br />\
    <img src="styles/legend/Substations_KV_3_0.png" /> 110<br />\
    <img src="styles/legend/Substations_KV_3_1.png" /> 220<br />\
    <img src="styles/legend/Substations_KV_3_2.png" /> 500<br />\
    <img src="styles/legend/Substations_KV_3_3.png" /> <br />'
        });
var lyr_gebco_2021_n24111328125000007_s37792932987213206_w10177734375_e11724609375_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "gebco_2021_n24.111328125000007_s3.7792932987213206_w101.77734375_e117.24609375",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gebco_2021_n24111328125000007_s37792932987213206_w10177734375_e11724609375_4.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [101.779167, 3.779167, 117.245833, 24.112500]
                            })
                        });
var format_TransmissionLine_KV_5 = new ol.format.GeoJSON();
var features_TransmissionLine_KV_5 = format_TransmissionLine_KV_5.readFeatures(json_TransmissionLine_KV_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TransmissionLine_KV_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransmissionLine_KV_5.addFeatures(features_TransmissionLine_KV_5);
var lyr_TransmissionLine_KV_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransmissionLine_KV_5, 
                style: style_TransmissionLine_KV_5,
                interactive: true,
    title: 'TransmissionLine_KV<br />\
    <img src="styles/legend/TransmissionLine_KV_5_0.png" /> 110 - 110<br />\
    <img src="styles/legend/TransmissionLine_KV_5_1.png" /> Đường dây 110kV<br />\
    <img src="styles/legend/TransmissionLine_KV_5_2.png" /> Đường dây 220kV<br />\
    <img src="styles/legend/TransmissionLine_KV_5_3.png" /> Đường dây 500kV<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_density_100m_clipbien1_1.setVisible(true);lyr_sum_noweight_new1_2.setVisible(true);lyr_Substations_KV_3.setVisible(true);lyr_gebco_2021_n24111328125000007_s37792932987213206_w10177734375_e11724609375_4.setVisible(true);lyr_TransmissionLine_KV_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_density_100m_clipbien1_1,lyr_sum_noweight_new1_2,lyr_Substations_KV_3,lyr_gebco_2021_n24111328125000007_s37792932987213206_w10177734375_e11724609375_4,lyr_TransmissionLine_KV_5];
lyr_Substations_KV_3.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', });
lyr_TransmissionLine_KV_5.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', });
lyr_Substations_KV_3.set('fieldImages', {'Id': 'Range', 'Voltage': 'TextEdit', });
lyr_TransmissionLine_KV_5.set('fieldImages', {'Id': 'Range', 'Voltage': 'Range', });
lyr_Substations_KV_3.set('fieldLabels', {'Id': 'no label', 'Voltage': 'header label', });
lyr_TransmissionLine_KV_5.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', });
lyr_TransmissionLine_KV_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});