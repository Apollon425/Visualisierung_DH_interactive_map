import {select, csv, scalelinear, max, scaleBand} from 'd3';
var linkTL = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/netto_output.csv';
var data = linkTL;


const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data =>  {
    const xValue = d=>d.Nettoeinkommen
    const yValue = d => d.Gebiet

    const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, width]);

     const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, height]);

    svg.selectAll('rect').data(data)
    .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());

};

csv(data).then(data => {data.forEach(d => {d.Nettoeinkommen = +d.Nettoeinkommen;});
    render(data);
});
    // {console.log(data);});

    (function(){
        function ac_add_to_head(el){
            var head = document.getElementsByTagName('head')[0];
            head.insertBefore(el,head.firstChild);
        }
        function ac_add_link(url){
            var el = document.createElement('link');
            el.rel='stylesheet';el.type='text/css';el.media='all';el.href=url;
            ac_add_to_head(el);
        }
        function ac_add_style(css){
            var ac_style = document.createElement('style');
            if (ac_style.styleSheet) ac_style.styleSheet.cssText = css;
            else ac_style.appendChild(document.createTextNode(css));
            ac_add_to_head(ac_style);
        }
        
        ac_add_style(document.getElementById("ac_style_1tvaNdD6").innerHTML);
        ac_add_style(".anychart-embed-1tvaNdD6{width:1000px;height:600px;}");
        })();
            var currentValue = 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/EinkommenVerlauf.csv';
        
           anychart.onDocumentReady(function () {
        
          // create a data set on our data
          var dataSet = anychart.data.set(getData());
         // var dataSet = anychart.data.set(getData());
        
          // map data for the first series,
          // take x from the zero column and value from the first column
          var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
        
          // map data for the second series,
          // take x from the zero column and value from the second column
          var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
        
          // map data for the third series,
          // take x from the zero column and value from the third column
          var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
          
          // map data for the fourth series,
          // take x from the zero column and value from the fourth column
          var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });  
          
          // map data for the fourth series,
          // take x from the zero column and value from the fourth column
          var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });
        
          // map data for the fourth series,
          // take x from the zero column and value from the fourth column
          var sixthSeriesData = dataSet.mapAs({ x: 0, value: 6 });
        
          // create a line chart
          var chart = anychart.line();
        
          // configure the chart title text settings
          chart.title('??bersicht d. Einkommens ??ber die Zeit in den jeweiligen Stadtgebieten');
        
          // set the y axis title
          chart.yAxis().title('Durchschntl. Einkommen in ???');
        
          // create the first series with the mapped data
          var firstSeries = chart.line(firstSeriesData);
          firstSeries.name('2011');
        
          // create the second series with the mapped data
          var secondSeries = chart.line(secondSeriesData);
          secondSeries.name('2013');
        
          // create the third series with the mapped data
          var thirdSeries = chart.line(thirdSeriesData);
          thirdSeries.name('2015');
          
           // create the fourth series with the mapped data
           var fourthSeries = chart.line(fourthSeriesData);
          fourthSeries.name('2017');   
          
          // create the fourth series with the mapped data
          var fifthSeries = chart.line(fifthSeriesData);
          fifthSeries.name('2019');   
          
          // create the fourth series with the mapped data
          var sixthSeries = chart.line(sixthSeriesData);
          sixthSeries.name('2021');
        
          // turn the legend on
          chart.legend().enabled(true);
        
          // set the container id for the line chart
          chart.container('container');
          
          // draw the line chart
          chart.draw();
          
        });
        
        
        function getData() {
         /* return [
            ['1990',16.9,12.2,10.2,5.2],
            ['1991',17,17.8,10,4.8],
            ['1993',26.5,23.8,16.8,6.6],
            ['1994',28.7,22,17.3,9.1],
            ['1996',35.7,24,22.6,9.2],
            ['1998',37.2,24.6,22.4,11.2],
            ['2000',36.5,26.2,23.7,9.9],
            ['2002',40,34.4,23.8,16.4],
            ['2004',33.3,28.8,32.5,14.3],
            ['2006',40.2,32.1,27.5,15.1],
            ['2008',49.3,37.2,31.4,17.1],
            ['2010',51.9,42.5,36.1,28.5],
            ['2012',53.1,43.8,36,24.6],
            ['2014',63.7,45.9,44.7,31.3],
            ['2016',66.3,52,42.3,37.2],
            ['2018',70.1,57.7,49.2,39]
          ];*/
          //return 'https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/EinkommenVerlauf.csv';
           return [/*
           ['Zentrum',1119.47039665305,1387.20640125823,1195.05979980502,1447.96220968878,1825.86228741449,2000],
        ['Zentrum-Ost',1265.99205817462,1466.09414682086,1558.46446293875,1707.7767078668,1685.21465145296,2100],
        ['Zentrum-S??dost',951.277296249952,1036.31881766262,1179.72791979858,1162.74304023383,1230.3002590334,1400],
        ['Zentrum-S??d',1180.7159897981,1198.15650717198,1537.93512629354,1637.51749650758,1723.61974524395,2200],
        ['Zentrum-West',1213.21350451776,1441.63236840073,1583.09343883357,1783.84788913395,1860.62126157356,1950],
        ['Zentrum-Nordwest',1405.6300418508,1557.75353350179,1807.86573966689,1923.41772023745,2001.70853058349,2200],
        ['Zentrum-Nord',1084.97325293465,1293.83514847689,1557.63231593991,1737.51290101109,1810.56807744534,1760],
        ['Sch??nefeld-Abtnaundorf',975.37098789051,1095.27904515581,1204.97758710458,1340.71127216007,1259.55998182373,1600],
        ['Sch??nefeld-Ost',974.202607787242,1054.69096396352,1121.43398129717,1236.18403115057,1240.01741084135,1500],
        ['Mockau-S??d',972.210381412116,1127.460838546,1326.95009276871,1266.88307890095,1420.58661145618,1700],
        ['Mockau-Nord',931.158517991913,1065.65108405532,1155.2437662091,1216.56876435786,1430.74328519829,1500],
        ['Thekla',1109.92193541225,1107.4890038051,1205.32315560565,1329.34711248885,1530.32502123099,1700],
        ['Plau??ig-Portitz',1149.51537354595,1238.79973466992,1459.96324414859,1496.59976308774,1419.55465704874,2000],
        ['Neustadt-Neusch??nefeld',796.53307517394,892.772742117413,947.360843637112,1420.55802987529,1369.30255015992,1500],
        ['Volkmarsdorf',760.269113556662,797.784691497263,924.338287348429,946.396383044053,1313.68071525285,1500],
        ['Anger-Crottendorf',1036.08326643794,1008.20571211122,1320.67706251846,1282.69187353148,1409.39614816647,1485],
        ['Sellerhausen-St??nz',966.031591614398,1156.22211303367,1211.96733997694,1266.31003572819,1355.34594704123,1950],
        ['Paunsdorf',952.221711507292,1152.56610109651,1204.22404554281,1283.32859339474,1221.79069260124,1300],
        ['Heiterblick',1290.13999439191,1180.99211309959,1400.26492239537,1636.60981814944,1669.86813566334,2000],
        ['M??lkau',1210.10125715544,1302.74935110407,1479.59104909432,1593.13945191246,1747.17302919718,1892],
        ['Engelsdorf',1172.7805470797,1278.45502803295,1496.44038513096,1620.55980647377,1646.59482378322,2000],
        ['Baalsdorf',1187.2629588148,1328.59423540916,1810.05333331238,1726.693663691,1792.76890451475,1900],
        ['Althen-Kleinp??sna',1142.1556754857,1278.07763149338,1578.78731880601,1659.74859229751,1777.17015870346,1551],
        ['Reudnitz-Thonberg',854.039697968048,1113.09459551184,1196.28809748242,1264.71041816604,1477.18994178904,1700],
        ['St??tteritz',1049.7576702688,1183.84084277403,1523.60704838855,1484.89035992886,1618.44635487817,1800],
        ['Probstheida',1106.592797064,1376.09445557938,1496.00157591398,1369.81657962768,1711.16941491105,2000],
        ['Meusdorf',988.702247739471,1124.7572536232,1180.92415912393,1391.88187402242,1467.01648947425,1700],
        ['Liebertwolkwitz',1118.4785540424,1198.21390782151,1372.95561414884,1503.73090384943,1632.0724625514,1800],
        ['Holzhausen',1141.15295702758,1251.66216165169,1442.10168264056,1565.52595688623,1992.17694862236,1800],
        ['S??dvorstadt',1157.42380208836,1194.97479229623,1549.69013456476,1764.90163957372,1866.34072337186,1800],
        ['Connewitz',1076.68510337047,1150.30457234274,1302.1403693914,1322.87356459248,1530.43065394619,1900],
        ['Marienbrunn',1082.86720994423,1158.00289172507,1483.60343189898,1515.5836984607,1502.18227044132,1700],
        ['L????nig',1046.24614547265,1073.56135943547,1108.65184686779,1300.58768362128,1374.76325896785,1470],
        ['D??litz-D??sen',1149.80949230727,1412.16889493875,1326.6731743186,1407.49912911147,1629.92522741037,1700],
        ['Schleu??ig',1164.56017966956,1359.60813260693,1460.5392288974,1684.48133255746,2016.00190561904,1900],
        ['Plagwitz',1225.02248661079,1093.46501312475,1554.6294434375,1423.2728145209,1545.15003251269,1850],
        ['Kleinzschocher',960.714072472308,1076.64475640535,1271.28469063531,1473.03984712155,1478.86849476936,1600],
        ['Gro??zschocher',1095.87639447864,1244.90029386024,1153.4565131558,1436.3651771435,1453.67040236266,1600],
        ['Knautkleeberg-Knauthain',1150.6422073346,1232.43729314193,1353.79468494812,1561.96637182497,1712.43967923897,2000],
        ['Hartmannsdorf-Knautnaundorf',1097.4459160057,1264.94830672396,1424.11613216715,1560.26836353576,1443.05946668469,2000],
        ['Sch??nau',1044.99386350261,1162.33047745411,1222.43407646404,1391.70069053101,1684.02623773588,1658],
        ['Gr??nau-Ost',1063.50109594185,988.637325724793,1090.84425833176,1150.6893535596,1182.69119628374,1400],
        ['Gr??nau-Mitte',928.989237574649,1008.3882179928,1124.3918743438,1331.17178240257,1269.92524687821,1200],
        ['Gr??nau-Siedlung',1198.66100062977,1179.55455614937,1444.86328462828,1651.74733113122,1739.58072515402,1800],
        ['Lausen-Gr??nau',976.025968696877,1089.7928100014,1190.68764239962,1380.97460535894,1380.261600346,1500],
        ['Gr??nau-Nord',895.112599069049,949.678626197639,1054.86356595686,1279.71040869068,1194.07532186042,1500],
        ['Miltitz',1181.71001321242,1120.07331549898,1426.32686619538,1550.99297336722,1563.47586429453,1800],
        ['Lindenau',893.739774758912,925.505862028256,1242.16104760904,1137.32126233122,1735.64520001298,1700],
        ['Altlindenau',1025.93236873067,917.847018554694,1235.27428907154,1420.20284987721,1391.17558208726,1700],
        ['Neulindenau',1077.43033609746,923.79643525511,1269.61525082739,1288.21677524233,1488.14001614925,1760],
        ['Leutzsch',1133.13320492051,1193.83285031344,1387.01909752618,1498.2441177064,1500.28663051087,1700],
        ['B??hlitz-Ehrenberg',1080.37539931653,1151.12898232979,1445.3703806906,1656.86571420307,1486.11399089204,1600],
        ['Burghausen-R??ckmarsdorf',1153.49380836073,1241.97067368001,1206.30449688969,1617.83574392671,1924.44376348646,1800],
        ['M??ckern',994.130490681782,1133.31441752456,1349.20552415978,1425.58952352027,1646.72904302495,1700],
        ['Wahren',1111.27972870703,1405.98981630026,1366.12737946177,1486.48365349333,1411.51505626094,1800],
        ['L??tzschena-Stahmeln',1107.99210573493,1301.52504462107,1591.11229952145,1462.48748849787,1539.42255724326,1900],
        ['Lindenthal',1147.21505221923,1297.66980685371,1389.06430485442,1658.4335221951,1654.83512523133,1900],
        ['Gohlis-S??d',1164.01892795164,1406.25552988931,1623.52095410162,1804.09930717605,1820.95300994867,2000],
        ['Gohlis-Mitte',1240.11222698576,1375.42441455985,1572.19709410839,1724.8258729023,1700.4009859165,1950],
        ['Gohlis-Nord',1158.22687294858,1210.76806791149,1300.63303149062,1412.91136295929,1571.81406118917,1900],
        ['Eutritzsch',1170.86064854204,1212.19847144958,1235.05555764506,1454.41243894891,1652.39908135495,1800],
        ['Seehausen',1215.85207009075,1271.15464892238,1361.5663928243,1532.34786335259,1674.41448052915,2000],
        ['Wiederitzsch',1182.25930901437,1319.88118164136,1459.76969009838,1679.66831269493,1760.49111927625,2000]*/,
        ['Mitte',1232.61291070668,1230.00720998546,1384.11695837427,1425.48164667381,1561.8037547802,1668.59106470733],
        ['Nordost',997.115176850823,1105.8246858236,1184.65173941114,1238.51966962911,1242.69052355052,1464.05306198241],
        ['Ost',990.597956224431,1057.31540762597,1123.81935481143,1198.02470412333,1291.57419446603,1461.65285337528],
        ['S??dost',1022.17417273885,1171.27304150874,1257.10034802975,1254.75192836033,1410.79429914148,1685.92511199641],
        ['S??d',1086.11466049852,1166.47555024222,1286.44377414388,1325.853315684,1518.25164868368,1593.32337391011],
        ['S??dwest',1084.33778742868,1139.41247264541,1303.83611622658,1406.81116968633,1532.00020536336,1647.63245019907],
        ['West',1028.50127157781,1013.11230209569,1142.61679421887,1273.69454967225,1237.43877444886,1401.7768114236],
        ['Alt-West',1060.35697905217,1086.54810504991,1222.83736578639,1352.60709704827,1428.25328021808,1635.66158309849],
        ['Nordwest',1006.9258674381,1323.04317626035,1319.64840442718,1454.06644984535,1555.67514576419,1698.61876061981],
        ['Nord',1201.27377553616,1298.06138486479,1397.79938034385,1523.43327724741,1668.64112830234,1821.25546158716],
        ['Stadt Leipzig',1066.01430298254,1151.83593033199,1254.31010000498,1327.75857836967,1438.05230525735,1592.12676996873]
           ];
          }
        