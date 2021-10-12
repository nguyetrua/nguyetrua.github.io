ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([9649590.943932, 114520.398236, 15134107.700562, 3164050.856997]);
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
var format_Khuvcnghincu_1 = new ol.format.GeoJSON();
var features_Khuvcnghincu_1 = format_Khuvcnghincu_1.readFeatures(json_Khuvcnghincu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcnghincu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcnghincu_1.addFeatures(features_Khuvcnghincu_1);
var lyr_Khuvcnghincu_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcnghincu_1, 
                style: style_Khuvcnghincu_1,
                interactive: true,
                title: '<img src="styles/legend/Khuvcnghincu_1.png" /> Khu vực nghiên cứu'
            });
var format_ngngmcsu1000m_2 = new ol.format.GeoJSON();
var features_ngngmcsu1000m_2 = format_ngngmcsu1000m_2.readFeatures(json_ngngmcsu1000m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ngngmcsu1000m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ngngmcsu1000m_2.addFeatures(features_ngngmcsu1000m_2);
var lyr_ngngmcsu1000m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ngngmcsu1000m_2, 
                style: style_ngngmcsu1000m_2,
                interactive: true,
                title: '<img src="styles/legend/ngngmcsu1000m_2.png" /> Đường đồng mức sâu 1000m'
            });
var format_ngngmcsu50m_3 = new ol.format.GeoJSON();
var features_ngngmcsu50m_3 = format_ngngmcsu50m_3.readFeatures(json_ngngmcsu50m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ngngmcsu50m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ngngmcsu50m_3.addFeatures(features_ngngmcsu50m_3);
var lyr_ngngmcsu50m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ngngmcsu50m_3, 
                style: style_ngngmcsu50m_3,
                interactive: true,
                title: '<img src="styles/legend/ngngmcsu50m_3.png" /> Đường đồng mức sâu 50m'
            });
var lyr_MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mật độ hoạt động hàng hải (tuyến/tháng) (Nguồn: https://www.marinetraffic.com/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376817.308098, 732713.551164, 12528417.440354, 2478258.199478]
                            })
                        });
var lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Tốc độ gió tại độ cao 100m (m/s) (Nguồn: https://globalwindatlas.info/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var lyr_Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mật độ gió tại độ cao 100m (W/m2) (Nguồn: https://globalwindatlas.info/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var lyr_ahnhymNgunhttpswwwgebconet_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Địa hình đáy (m) (Nguồn: https://www.gebco.net/)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ahnhymNgunhttpswwwgebconet_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376851.959073, 732603.595173, 12528544.857571, 2452097.613923]
                            })
                        });
var lyr_KtquKhnngkhuvctimnng_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kết quả Khả năng khu vực tiềm năng",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KtquKhnngkhuvctimnng_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11376748.730527, 732783.116061, 12528627.161511, 2478332.590759]
                            })
                        });
var format_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9 = new ol.format.GeoJSON();
var features_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9 = format_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.readFeatures(json_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.addFeatures(features_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9);
var lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9, 
                style: style_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9,
                interactive: true,
                title: '<img src="styles/legend/CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.png" /> Các tuyến cáp Internet ngầm (Nguồn: https://www.submarinecablemap.com/country/vietnam)'
            });
var format_NgtrngcamtsnghcNgunVinNghincuHisn_10 = new ol.format.GeoJSON();
var features_NgtrngcamtsnghcNgunVinNghincuHisn_10 = format_NgtrngcamtsnghcNgunVinNghincuHisn_10.readFeatures(json_NgtrngcamtsnghcNgunVinNghincuHisn_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_10.addFeatures(features_NgtrngcamtsnghcNgunVinNghincuHisn_10);
var lyr_NgtrngcamtsnghcNgunVinNghincuHisn_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NgtrngcamtsnghcNgunVinNghincuHisn_10, 
                style: style_NgtrngcamtsnghcNgunVinNghincuHisn_10,
                interactive: true,
    title: 'Ngư trường của một số nghề cá (Nguồn: Viện Nghiên cứu Hải sản)<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_10_0.png" /> Câu cá ngừ bằng nghề cây tay/câu vàng <br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_10_1.png" /> Nghề giã ván<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_10_2.png" /> Nghề kéo đôi<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_10_3.png" /> Nghề lưới chụp<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_10_4.png" /> Nghề rê<br />\
    <img src="styles/legend/NgtrngcamtsnghcNgunVinNghincuHisn_10_5.png" /> Nghề vây<br />'
        });
var format_Cngbin_11 = new ol.format.GeoJSON();
var features_Cngbin_11 = format_Cngbin_11.readFeatures(json_Cngbin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cngbin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cngbin_11.addFeatures(features_Cngbin_11);
var lyr_Cngbin_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cngbin_11, 
                style: style_Cngbin_11,
                interactive: true,
                title: '<img src="styles/legend/Cngbin_11.png" /> Cảng biển'
            });
var format_Ccmdukh_12 = new ol.format.GeoJSON();
var features_Ccmdukh_12 = format_Ccmdukh_12.readFeatures(json_Ccmdukh_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ccmdukh_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ccmdukh_12.addFeatures(features_Ccmdukh_12);
var lyr_Ccmdukh_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ccmdukh_12, 
                style: style_Ccmdukh_12,
                interactive: true,
                title: '<img src="styles/legend/Ccmdukh_12.png" /> Các mỏ dầu/khí'
            });
var format_Ccngngdnduvtlin_13 = new ol.format.GeoJSON();
var features_Ccngngdnduvtlin_13 = format_Ccngngdnduvtlin_13.readFeatures(json_Ccngngdnduvtlin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ccngngdnduvtlin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ccngngdnduvtlin_13.addFeatures(features_Ccngngdnduvtlin_13);
var lyr_Ccngngdnduvtlin_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ccngngdnduvtlin_13, 
                style: style_Ccngngdnduvtlin_13,
                interactive: true,
                title: '<img src="styles/legend/Ccngngdnduvtlin_13.png" /> Các đường ống dẫn dầu về đất liền'
            });
var format_Trmbinp_14 = new ol.format.GeoJSON();
var features_Trmbinp_14 = format_Trmbinp_14.readFeatures(json_Trmbinp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trmbinp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trmbinp_14.addFeatures(features_Trmbinp_14);
var lyr_Trmbinp_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trmbinp_14, 
                style: style_Trmbinp_14,
                interactive: true,
    title: 'Trạm biến áp<br />\
    <img src="styles/legend/Trmbinp_14_0.png" /> 110 kV<br />\
    <img src="styles/legend/Trmbinp_14_1.png" /> 220 kV<br />\
    <img src="styles/legend/Trmbinp_14_2.png" /> 500 kV<br />'
        });
var format_ngdytiin_15 = new ol.format.GeoJSON();
var features_ngdytiin_15 = format_ngdytiin_15.readFeatures(json_ngdytiin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ngdytiin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ngdytiin_15.addFeatures(features_ngdytiin_15);
var lyr_ngdytiin_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ngdytiin_15, 
                style: style_ngdytiin_15,
                interactive: true,
    title: 'Đường dây tải điện<br />\
    <img src="styles/legend/ngdytiin_15_0.png" /> 110 kV<br />\
    <img src="styles/legend/ngdytiin_15_1.png" /> 220 kV<br />\
    <img src="styles/legend/ngdytiin_15_2.png" /> 500 kV<br />'
        });
var format_Khuvcrabinkimn_16 = new ol.format.GeoJSON();
var features_Khuvcrabinkimn_16 = format_Khuvcrabinkimn_16.readFeatures(json_Khuvcrabinkimn_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khuvcrabinkimn_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khuvcrabinkimn_16.addFeatures(features_Khuvcrabinkimn_16);
var lyr_Khuvcrabinkimn_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khuvcrabinkimn_16, 
                style: style_Khuvcrabinkimn_16,
                interactive: true,
    title: 'Khu vực rùa biển kiếm ăn<br />\
    <img src="styles/legend/Khuvcrabinkimn_16_0.png" /> Đồi mồi<br />\
    <img src="styles/legend/Khuvcrabinkimn_16_1.png" /> Đồi mồi Dứa<br />\
    <img src="styles/legend/Khuvcrabinkimn_16_2.png" /> Quản đồng<br />\
    <img src="styles/legend/Khuvcrabinkimn_16_3.png" /> Vích<br />'
        });
var format_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17 = new ol.format.GeoJSON();
var features_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17 = format_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.readFeatures(json_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.addFeatures(features_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17);
var lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17, 
                style: style_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17,
                interactive: true,
                title: '<img src="styles/legend/KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.png" /> Khu bảo tồn (Nguồn: https://www.protectedplanet.net/country/VNM)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Khuvcnghincu_1.setVisible(true);lyr_ngngmcsu1000m_2.setVisible(true);lyr_ngngmcsu50m_3.setVisible(true);lyr_MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_4.setVisible(true);lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_5.setVisible(true);lyr_Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_6.setVisible(true);lyr_ahnhymNgunhttpswwwgebconet_7.setVisible(true);lyr_KtquKhnngkhuvctimnng_8.setVisible(true);lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.setVisible(true);lyr_NgtrngcamtsnghcNgunVinNghincuHisn_10.setVisible(true);lyr_Cngbin_11.setVisible(true);lyr_Ccmdukh_12.setVisible(true);lyr_Ccngngdnduvtlin_13.setVisible(true);lyr_Trmbinp_14.setVisible(true);lyr_ngdytiin_15.setVisible(true);lyr_Khuvcrabinkimn_16.setVisible(true);lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Khuvcnghincu_1,lyr_ngngmcsu1000m_2,lyr_ngngmcsu50m_3,lyr_MthotnghnghituynthngNgunhttpswwwmarinetrafficcom_4,lyr_Tcgiticao100mmsNgunhttpsglobalwindatlasinfo_5,lyr_Mtgiticao100mWm2Ngunhttpsglobalwindatlasinfo_6,lyr_ahnhymNgunhttpswwwgebconet_7,lyr_KtquKhnngkhuvctimnng_8,lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9,lyr_NgtrngcamtsnghcNgunVinNghincuHisn_10,lyr_Cngbin_11,lyr_Ccmdukh_12,lyr_Ccngngdnduvtlin_13,lyr_Trmbinp_14,lyr_ngdytiin_15,lyr_Khuvcrabinkimn_16,lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17];
lyr_Khuvcnghincu_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ngngmcsu1000m_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_ngngmcsu50m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'SOURCE': 'SOURCE', 'Shape_Leng': 'Shape_Leng', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ngheca': 'Ngheca', 'X': 'X', 'Y': 'Y', });
lyr_Cngbin_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PORT_NAME': 'PORT_NAME', 'COUNTRY': 'COUNTRY', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Ccmdukh_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Mo': 'Mo', 'X': 'X', 'Y': 'Y', });
lyr_Ccngngdnduvtlin_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_Trmbinp_14.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', 'X': 'X', 'Y': 'Y', });
lyr_ngdytiin_15.set('fieldAliases', {'Id': 'Id', 'Voltage': 'Voltage', 'Start_X': 'Start_X', 'End_X': 'End_X', 'End_Y': 'End_Y', 'Start_Y': 'Start_Y', });
lyr_Khuvcrabinkimn_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'rua': 'rua', 'X': 'X', 'Y': 'Y', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_Khuvcnghincu_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ngngmcsu1000m_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ngngmcsu50m_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ngheca': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Cngbin_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'PORT_NAME': 'TextEdit', 'COUNTRY': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Ccmdukh_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Mo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Ccngngdnduvtlin_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Trmbinp_14.set('fieldImages', {'Id': 'Range', 'Voltage': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ngdytiin_15.set('fieldImages', {'Id': 'Range', 'Voltage': 'Range', 'Start_X': 'TextEdit', 'End_X': 'TextEdit', 'End_Y': 'TextEdit', 'Start_Y': 'TextEdit', });
lyr_Khuvcrabinkimn_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'rua': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', });
lyr_Khuvcnghincu_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ngngmcsu1000m_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'no label', 'Shape_Leng': 'no label', });
lyr_ngngmcsu50m_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'no label', 'Shape_Leng': 'no label', });
lyr_CctuyncpInternetngmNgunhttpswwwsubmarinecablemapcomcountryvietnam_9.set('fieldLabels', {'OBJECTID': 'no label', 'TYPE': 'no label', 'STATUS': 'no label', 'SOURCE': 'no label', 'Shape_Leng': 'no label', });
lyr_NgtrngcamtsnghcNgunVinNghincuHisn_10.set('fieldLabels', {'OBJECTID': 'no label', 'Ngheca': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Cngbin_11.set('fieldLabels', {'OBJECTID': 'no label', 'PORT_NAME': 'no label', 'COUNTRY': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_Ccmdukh_12.set('fieldLabels', {'OBJECTID': 'no label', 'Mo': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Ccngngdnduvtlin_13.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_Trmbinp_14.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_ngdytiin_15.set('fieldLabels', {'Id': 'no label', 'Voltage': 'no label', 'Start_X': 'no label', 'End_X': 'no label', 'End_Y': 'no label', 'Start_Y': 'no label', });
lyr_Khuvcrabinkimn_16.set('fieldLabels', {'OBJECTID': 'no label', 'rua': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_KhubotnNgunhttpswwwprotectedplanetnetcountryVNM_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});