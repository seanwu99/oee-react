import React, { Component } from 'react';


function chartOeeTrendInit(title, series) {
    var chartSeries;
    if (series == null) {
        var n = 100, OEE = [], Availability = [], Performance = [], Quality = [];
        var tm = Math.round(new Date().getTime() / 1000) * 1000 - n * 3000;
        for (var i = 0; i < n; i++) {
            tm += 3000;
            Availability.push([tm, 60 + Math.round(Math.random() * 400) / 10]);
            Performance.push([tm, 60 + Math.round(Math.random() * 400) / 10]);
            Quality.push([tm, 60 + Math.round(Math.random() * 400) / 10]);
            OEE.push([tm, Availability[Availability.length - 1][1] * Performance[Performance.length - 1][1] * Quality[Quality.length - 1][1] / 10000]);
        }
        chartSeries = [];
        chartSeries.push({
            name: 'OEE',
            data: OEE
        });
        chartSeries.push({
            name: 'Availability',
            data: Availability
        });
        chartSeries.push({
            name: 'Performance',
            data: Performance
        });

        chartSeries.push({
            name: 'Quality',
            data: Quality
        });
    } else {
        chartSeries = series;
    }

    Highcharts.stockChart('chartOeeTrend', {
        credits: {
            enabled: false,
            href: 'https://seanwu99.github.io/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },
            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },
            text: 'RTS Consulting Inc.'
        },
        title: {
            text: title,
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: false,
            align: 'center',
            y: 40,
            style: {
                fontSize: '14px',
                display: 'none'
            }
        },

        chart: {
            type: 'spline',
            margin: [0, 90, 0, 90],
            // width: 3108,
            events: {
                load: function () {
// 					alert('load');
                }
            }
        },
        colors: [
            '#d9534f',//'#90ed7d',
            '#5cb85c',//'#7cb5ec',
            '#f0ad4e',//'#f7a35c',
            '#2f71aa',//'#888888'
        ],
        legend: {
            enabled: true,
            align: "center",
            verticalAlign: "bottom",
            shadow: false,
        },
        rangeSelector: {
            buttons: [{
                type: 'minute',
                count: 1,
                text: 'm.'
            }, {
                type: 'hour',
                count: 1,
                text: 'H'
            }, {
                type: 'hour',
                count: 8,
                text: 'S'
            }, {
                type: 'day',
                count: 1,
                text: 'D'
            }, {
                type: 'week',
                count: 1,
                text: 'W'
            }, {
                type: 'month',
                count: 1,
                text: 'M'
            }, {
                type: 'all',
                text: 'All'
            }],
            selected: 0
        },

        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'yAxis',
                enabled: false,
            },
            labels: {
                enabled: true,
                formatter: function () {
//              return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    return this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (%)<br/>',
            valueDecimals: 2,
            split: false
        },
        navigator: {
            enabled: true
        },
        series: chartSeries
    });
}

function chartSixBigLossesInit(title, series, state) {
    var chartSeries = [];
    var chartCategories = [
        state.sblEquipmentFailure.title,
        state.sblSetupAndAdjustments.title,
        state.sblIdlingAndMinorStops.title,
        state.sblReducedSpeed.title,
        state.sblProcessDefects.title,
        state.sblReducedYield.title
    ];

    if (series == null) {
        // rtsOEEM.sblEquipmentFailure.occurrences = Math.round(10 + Math.random() * 100);
        // rtsOEEM.sblEquipmentFailure.totalizer = Math.round(5000);
        // rtsOEEM.sblSetupAndAdjustments.occurrences = Math.round(10 + Math.random() * 100);
        // rtsOEEM.sblSetupAndAdjustments.totalizer = Math.round(5000);
        // rtsOEEM.sblIdlingAndMinorStops.occurrences = Math.round(10 + Math.random() * 100);
        // rtsOEEM.sblIdlingAndMinorStops.totalizer = Math.round(5000);
        // rtsOEEM.sblReducedSpeed.occurrences = Math.round(10 + Math.random() * 100);
        // rtsOEEM.sblReducedSpeed.totalizer = Math.round(5000);
        // rtsOEEM.sblProcessDefects.occurrences = Math.round(10 + Math.random() * 100);
        // rtsOEEM.sblProcessDefects.totalizer = Math.round(5000);
        // rtsOEEM.sblReducedYield.occurrences = Math.round(10 + Math.random() * 100);
        // rtsOEEM.sblReducedYield.totalizer = Math.round(5000);
        var b6 =
            state.sblEquipmentFailure.totalizer +
            state.sblSetupAndAdjustments.totalizer +
            state.sblIdlingAndMinorStops.totalizer +
            state.sblReducedSpeed.totalizer +
            state.sblProcessDefects.totalizer +
            state.sblReducedYield.totalizer;
        var r1 = (100 * state.sblEquipmentFailure.totalizer / b6) | 0;
        var r2 = (100 * state.sblSetupAndAdjustments.totalizer / b6) | 0;
        var r3 = (100 * state.sblIdlingAndMinorStops.totalizer / b6) | 0;
        var r4 = (100 * state.sblReducedSpeed.totalizer / b6) | 0;
        var r5 = (100 * state.sblProcessDefects.totalizer / b6) | 0;
        var r6 = (100 * state.sblReducedYield.totalizer / b6) | 0;

        // rtsOEEM.sblEquipmentFailure.rate.shift();
        // rtsOEEM.sblEquipmentFailure.rate.push(r1);
        // rtsOEEM.sblSetupAndAdjustments.rate.shift();
        // rtsOEEM.sblSetupAndAdjustments.rate.push(r2);
        // rtsOEEM.sblIdlingAndMinorStops.rate.shift();
        // rtsOEEM.sblIdlingAndMinorStops.rate.push(r3);
        // rtsOEEM.sblReducedSpeed.rate.shift();
        // rtsOEEM.sblReducedSpeed.rate.push(r4);
        // rtsOEEM.sblProcessDefects.rate.shift();
        // rtsOEEM.sblProcessDefects.rate.push(r5);
        // rtsOEEM.sblReducedYield.rate.shift();
        // rtsOEEM.sblReducedYield.rate.push(r6);
        chartSeries.push(state.sblEquipmentFailure.rate[state.sblEquipmentFailure.rate.length - 1]);
        chartSeries.push(state.sblSetupAndAdjustments.rate[state.sblSetupAndAdjustments.rate.length - 1]);
        chartSeries.push(state.sblIdlingAndMinorStops.rate[state.sblIdlingAndMinorStops.rate.length - 1]);
        chartSeries.push(state.sblReducedSpeed.rate[state.sblReducedSpeed.rate.length - 1]);
        chartSeries.push(state.sblProcessDefects.rate[state.sblProcessDefects.rate.length - 1]);
        chartSeries.push(state.sblReducedYield.rate[state.sblReducedYield.rate.length - 1]);
    }
    for (var i = 0; i < 5; i++) {
        for (var j = i + 1; j < 6; j++) {
            if (chartSeries[i] < chartSeries[j]) {
                var t1 = chartSeries[i];
                chartSeries[i] = chartSeries[j];
                chartSeries[j] = t1;
                var t2 = chartCategories[i];
                chartCategories[i] = chartCategories[j];
                chartCategories[j] = t2;
            }
        }
    }
    Highcharts.chart('chartSixBigLosses', {
        chart: {
//          backgroundColor: '#f0f0f0',
            margin: [10, 50, 20, 50],
//          width: 600,
            height: 400,
        },
        credits: {
            enabled: false,
            href: 'https://seanwu99.github.io/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },
            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },
            text: 'RTS Consulting Inc.'
        },
        title: {
            text: title,
            style: {
                display: 'none'
            }
        },
        xAxis: {
            categories: chartCategories
        },
        labels: {
            items: [{
                html: 'Six Big Losses',
                style: {
                    left: '80px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [
            {
                type: 'column',
                colorByPoint: true,
                name: 'items',
                data: chartSeries,
                showInLegend: false
            },
            {
                type: 'spline',
                name: 'Accumulate',
                data: [
                    chartSeries[0],
                    chartSeries[0] + chartSeries[1],
                    chartSeries[0] + chartSeries[1] + chartSeries[2],
                    chartSeries[0] + chartSeries[1] + chartSeries[2] + chartSeries[3],
                    chartSeries[0] + chartSeries[1] + chartSeries[2] + chartSeries[3] + chartSeries[4],
                    chartSeries[0] + chartSeries[1] + chartSeries[2] + chartSeries[3] + chartSeries[4] + chartSeries[4],
                ],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            },
            {
                type: 'pie',
                name: 'Ratio',
                data: [{
                    name: chartCategories[0],
                    y: chartSeries[0],
                    //              color: Highcharts.getOptions().colors[0] // item's color
                }, {
                    name: chartCategories[1],
                    y: chartSeries[1],
                    //              color: Highcharts.getOptions().colors[1] // item's color
                }, {
                    name: chartCategories[2],
                    y: chartSeries[2],
                    //              color: Highcharts.getOptions().colors[2] // item's color
                }, {
                    name: chartCategories[3],
                    y: chartSeries[3],
                    //              color: Highcharts.getOptions().colors[3] // item's color
                }, {
                    name: chartCategories[4],
                    y: chartSeries[4],
                    //              color: Highcharts.getOptions().colors[4] // item's color
                }, {
                    name: chartCategories[5],
                    y: chartSeries[5],
                    //              color: Highcharts.getOptions().colors[5] // item's color
                }],
                center: [100, 100],
                size: 150,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }],
        legend: {
            enabled: false,
            align: "center",
            verticalAlign: "bottom",
            shadow: false,
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'yAxis',
                enabled: false,
            },
            labels: {
                formatter: function () {
//              return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    return this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },
    });
    // cc(chartSixBigLosses.axes[1].toPixels(80, false));
    $("#chartSixBigLosses").highcharts().renderer.path(['M', 50, $("#chartSixBigLosses").highcharts().axes[1].toPixels(state.bigLossFilter, false), 'H', 1000, $("#chartSixBigLosses").highcharts().axes[1].toPixels(state.bigLossFilter, false)]).attr({
        'stroke-width': 1,
        stroke: Highcharts.getOptions().colors[0],
        dashstyle: 'dash'
    }).add();
}

function chartEventsInit(title, series) {
    var rtsOEEM = {
        events: [
            {reason: '', occurrences: 0, totalizer: 0},
        ],
    }
    var chartSeries;
    var reasons = [
        'ToolingFailure',
        'UnplannedMaint',
        'EquipmentFailure',
        'Setup&Changeover',
        'MaterialShortage',
        'OperatorShortage',
        'WarmUpTime',
        'ObstructedFlow',
        'ComponentJams',
        'Misfeeds',
        'SensorBlocked',
        'CleaningChecking',
        'RoughRunning',
        'UnderCapacity',
        'EquipmentWear',
        'OperatorInnefficiency',
        'Scrap',
        'Rework',
        'InProcessDamage',
        'InProcessExpiration',
        'IncorrectAssembly',
        'Unassigned',
        'FailureCtr'
    ];

    var n = 7;// = Math.round(10 + Math.random() * 5);
    rtsOEEM.events = [];
    rtsOEEM.events.push({
        'reason': reasons[Math.round(Math.random() * (reasons.length - 1))],
        'occurrences': Math.round(3 + Math.random() * 10),
        'totalizer': Math.round(100 + Math.random() * 5000)
    });
    for (var i = 0; i < n; i++) {
        var r = '';
        do {
            r = reasons[Math.round(Math.random() * (reasons.length - 1))];
            var m = -1;
            for (var j = 0; j < rtsOEEM.events.length; j++) {
                if (rtsOEEM.events[j]['reason'] == r) {
                    m = j;
                }
            }
        } while (m > 0);

        rtsOEEM.events.push({
            'reason': r,
            'occurrences': Math.round(3 + Math.random() * 10),
            'totalizer': Math.round(100 + Math.random() * 5000)
        });
    }

    chartSeries = [];
    $.each(rtsOEEM.events, function (i, event) {
        chartSeries.push({name: event['reason'], y: event['totalizer']});
    });

    Highcharts.chart('chartEvents', {
        credits: {
            enabled: false,
            href: 'https://seanwu99.github.io/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },
            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },
            text: 'RTS Consulting Inc.'
        },
        title: {
            text: title,
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: false,
            align: 'center',
            y: 40,
            style: {
                fontSize: '14px',
                display: 'none'
            }
        },
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60
            },
//          margin: [0, 165, 0, 165],
            margin: [10, 0, 20, 0],
// width: 600,
            height: 400,
        },
        plotOptions: {
            pie: {
                innerSize: 150,
                depth: 45
            }
        },
        series: [{
            name: 'During',
            data: chartSeries,

        }]
    });
    var thead = "<thead><tr><th>Events</th><th>Occurrences</th><th>Totalizer</th></tr></thead><tbody>";
    var n = 0;
    var tbody = "";
    $.each(rtsOEEM.events, function (i, event) {
        tbody = tbody + '<tr><td>' + event['reason'] + '</td><td>' + event['occurrences'] + '</td><td>' + (new Date(event['totalizer'] * 1000)).toISOString().substr(11, 8) + '</td> </tr>';
    });

    document.getElementById('eventsTable').innerHTML = thead + tbody + '</tbody>';

}

function chartFloorMapInit(title, series) {
    var OPs = [
        {text: '<u>OP 10</u><br>LaserMarker<br>#1 Pinion', 'x': 60, 'y': 30 + 0 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 10</u><br>LaserMarker<br>#2 Pinion', 'x': 60, 'y': 30 + 1 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 10</u><br>LaserMarker<br>#1 Ring', 'x': 60, 'y': 30 + 2 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 10</u><br>LaserMarker<br>#2 Ring', 'x': 60, 'y': 30 + 3 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 10</u><br>LaserMarker<br>#3 Ring', 'x': 60, 'y': 30 + 4 * 80, 'padType': 'Pad80x50'},
        {text: '.', 'x': 200, 'y': 30 + 2 * 80, 'padType': 'Pad60x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#1 Pinion', 'x': 280, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#2 Pinion', 'x': 390, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#3 Pinion', 'x': 390, 'y': 70 + 1 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#4 Pinion', 'x': 390, 'y': 70 + 2 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#5 Pinion', 'x': 390, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#6 Pinion', 'x': 280, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#1 Ring', 'x': 610, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#2 Ring', 'x': 490, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#3 Ring', 'x': 490, 'y': 70 + 1 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#4 Ring', 'x': 490, 'y': 70 + 2 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#5 Ring', 'x': 490, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'},
        {text: '<u>OP 20</u><br>Cutter<br>#6 Ring', 'x': 610, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'},
        {text: '.', 'x': 620, 'y': 30 + 2 * 80, 'padType': 'Pad60x50'},
        {text: '.', 'x': 845, 'y': 90 + 0 * 80, 'padType': 'Pad60x50'},
        {text: '.', 'x': 845, 'y': 50 + 3 * 80, 'padType': 'Pad60x50'},
        {text: '<u>Furnace #1</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'},
        {text: '<u>Furnace #2</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 1 * 80, 'padType': 'Pad80x50'},
        {text: '<u>Furnace #3</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 2 * 80, 'padType': 'Pad80x50'},
        {text: '<u>Furnace #4</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'},
    ];

    Highcharts.chart('chartFloorMap', {
        credits: {
            enabled: false
        },
        chart: {
            margin: [0, 0, 0, 0],
            width: 1080,
            height: 400,
            backgroundColor: '#ffffff',
            events: {
                load: function () {

                    var ren = this.renderer,
                        colors = Highcharts.getOptions().colors,
                        rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                        leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];

                    ren.path(['M', 105, 50, 'L', 105, 350]).attr({'stroke-width': 5, stroke: '#c0c0c0'}).add();
                    ren.path(['M', 100, 200, 'L', 320, 200]).attr({'stroke-width': 5, stroke: '#c0c0c0'}).add();

                    ren.path(['M', 435, 30, 'L', 435, 320, 'L', 325, 320, 'L', 325, 80, 'L', 435, 80]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    // ren.path(['M', 325, 80, 'L', 325, 320, 'L', 435, 320, 'L', 435, 80, 'L', 325, 80]).attr({
                    //     'stroke-width': 5,
                    //     stroke: '#c0c0c0'
                    // }).add();

                    ren.path(['M', 535, 30, 'L', 535, 320, 'L', 655, 320, 'L', 655, 80, 'L', 535, 80]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    // ren.path(['M', 535, 80, 'L', 535, 320, 'L', 655, 320, 'L', 655, 80, 'L', 535, 80]).attr({
                    //     'stroke-width': 5,
                    //     stroke: '#c0c0c0'
                    // }).add();
                    ren.path(['M', 655, 200, 'L', 985, 200,]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    ren.path(['M', 880, 80, 'L', 880, 320,]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    ren.path(['M', 985, 80, 'L', 985, 320,]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();

                    $.each(OPs, function (i, o) {
                        ren.label(o.text, o.x, o.y, 'rect', 10, 10, true, true, o.padType).attr({
                            fill: '#337ab7',
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5,
                        }).css({color: 'white', fontSize: '12px',}).add().shadow(true);
                    });
                    ren.label('Serial NumberSummary RanCycle CompleteMachine #Date/TimeOperator', 270, 10).attr({
                        fill: '#c0c0c0', stroke: 'c0c0c0',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5,
                    }).css({color: 'white', fontSize: '12px',}).add().shadow(false);

                    ren.label('FORT WAYNE GEARS LINE PART 1', 840, 365).attr({
                        fill: '#337ab7', stroke: '#white',
                        'stroke-width': 1,
                        padding: 5,
                        r: 5,
                    }).css({color: 'white', fontSize: '12px', 'font-weight': 'bold'}).add().shadow(false);

                    ren.image("data:image/png;base64,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", 715, 40, 90, 80).add();
                    ren.image('data:image/png;base64,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', 715, 275, 90, 80).add();
                    ren.image('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5RkRCRDRCM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5RkRCRDRDM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlGREJENDkzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlGREJENEEzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LwDbsAAAYgklEQVR42uxd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', 212, 180, 36, 36).add();
                    ren.image('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5RkRCRDRCM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5RkRCRDRDM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlGREJENDkzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlGREJENEEzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LwDbsAAAYgklEQVR42uxd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', 632, 180, 36, 36).add();
                    ren.image('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5RkRCRDRCM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5RkRCRDRDM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlGREJENDkzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlGREJENEEzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LwDbsAAAYgklEQVR42uxd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', 857, 80, 36, 36).add();
                    ren.image('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5RkRCRDRCM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5RkRCRDRDM0JERTExRTc4RDE3REM2Q0IyM0E4OUQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjlGREJENDkzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjlGREJENEEzQkRFMTFFNzhEMTdEQzZDQjIzQTg5RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LwDbsAAAYgklEQVR42uxd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', 857, 280, 36, 36).add();
                    ren.circle(325, 200, 15).attr({
                        fill: 'white', stroke: '#2f71aa', 'stroke-width': 10
                    }).add();
                    ren.circle(775, 200, 40).attr({fill: '#2f71aa', stroke: '#c0c0c0', 'stroke-width': 4}).add();
                    ren.text('PARTS<br>TRAY', 753, 200)
                        .attr({
                            rotation: 0
                        })
                        .css({
                            color: '#ffffff',
                            fontSize: '16px'
                        })
                        .add();

                    ren.circle(880, 200, 15).attr({fill: 'white', stroke: '#2f71aa', 'stroke-width': 10}).add();
                    ren.path(['M', 190, 370, 'L', 190, 285, 'C', 190, 260, 190, 260, 215, 260, 'L', 290, 260, 'L', 285, 265, 'M', 290, 260, 'L', 285, 255,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                    ren.path(['M', 190, 30, 'L', 190, 115, 'C', 190, 140, 190, 140, 215, 140, 'L', 290, 140, 'L', 285, 135, 'M', 290, 140, 'L', 285, 145,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                    ren.path(['M', 700, 140, 'L', 900, 140, 'C', 925, 140, 925, 140, 925, 115, 'L', 925, 80, 'L', 920, 85, 'M', 925, 80, 'L', 930, 85,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                    ren.path(['M', 700, 260, 'L', 900, 260, 'C', 925, 260, 925, 260, 925, 285, 'L', 925, 320, 'L', 920, 315, 'M', 925, 320, 'L', 930, 315,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                }
            }
        },
        title: {
            text: 'title',
            style: {
                color: 'black',
                display: 'none'
            }
        }
    });

    var ELE = document.getElementsByClassName("highcharts-Pad80x50-box");// Pad fixing
    $.each(ELE, function (i, ele) {
        ele.setAttribute("width", 80);
        ele.setAttribute("height", 50);
    });

    var ELE = document.getElementsByClassName("highcharts-Pad60x50-box");// Pad fixing
    $.each(ELE, function (i, ele) {
        ele.setAttribute("width", 60);
        ele.setAttribute("height", 50);
    });

    var ELE = document.getElementsByClassName("highcharts-label highcharts-Pad80x50");//Font fixing
    $.each(ELE, function (i, ele) {
        if (ele.nodeName == 'DIV') {
            ele.children[0].style['left'] = '3px';
            ele.children[0].style['top'] = '-13px';
            ele.children[0].style['width'] = '75px';
            ele.children[0].style['text-align'] = 'center';
            ele.children[0].style['line-height'] = '14px';
        }
    });
}


function sblChartsInit() {
    chartX('chartEquipmentFailure');
    chartX('chartSetupAndAdjustments');
    chartX('chartIdlingAndMinorStops');
    chartX('chartReducedSpeed');
    chartX('chartProcessDefects');
    chartX('chartReducedYield');

    function chartX(id) {
        Highcharts.chart(id, {
            chart: {
                borderWidth: 0,
                type: 'area',
                width: 140,
                height: 55,
//            spacingBottom: 30,
                style: {
                    overflow: 'visible'
                },
                margin: [0, 0, 0, 0],
            },
            title: {
                text: 'title',
                style: {
                    display: 'none'
                }
            },
            subtitle: {
                text: 'subtitle',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15,
                style: {
                    display: 'none'
                }
            },
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            tooltip: {
                formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                    return this.y + '%';
                }
            },
            plotOptions: {
                series: {
                    animation: false,
                },
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }],
        });
    };

}


class Tile extends React.Component {
    render() {
        return (
            <div className={this.props.classA}>
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                            <i className={this.props.classB}></i>
                        </div>
                        <div className="col-xs-9 text-right">
                            <div id={this.props.id} className="huge">{this.props.value + '%'}</div>
                            <div>{this.props.desc}</div>
                        </div>
                    </div>
                </div>
                <div className="panel-footer">
                    <div>
                        <span
                            className={(this.props.value / 20 > 0 && this.props.value / 20 < 0.3) ?
                                "fa fa-2x fa-star-o" : ((this.props.value / 20 >= 0.3 && this.props.value / 20 <= 0.7) ?
                                    "fa fa-2x fa-star-half-o" : "fa fa-2x fa-star")}
                            style={{color: 'gold'}}></span>
                        <span
                            className={(this.props.value / 20 > 0 && this.props.value / 20 < 1.3) ?
                                "fa fa-2x fa-star-o" : ((this.props.value / 20 >= 1.3 && this.props.value / 20 <= 1.7) ?
                                    "fa fa-2x fa-star-half-o" : "fa fa-2x fa-star")}
                            style={{color: 'gold'}}></span>
                        <span
                            className={(this.props.value / 20 > 0 && this.props.value / 20 < 2.3) ?
                                "fa fa-2x fa-star-o" : ((this.props.value / 20 >= 2.3 && this.props.value / 20 <= 2.7) ?
                                    "fa fa-2x fa-star-half-o" : "fa fa-2x fa-star")}
                            style={{color: 'gold'}}></span>
                        <span
                            className={(this.props.value / 20 > 0 && this.props.value / 20 < 3.3) ?
                                "fa fa-2x fa-star-o" : ((this.props.value / 20 >= 3.3 && this.props.value / 20 <= 3.7) ?
                                    "fa fa-2x fa-star-half-o" : "fa fa-2x fa-star")}
                            style={{color: 'gold'}}></span>
                        <span
                            className={(this.props.value / 20 > 0 && this.props.value / 20 < 4.3) ?
                                "fa fa-2x fa-star-o" : ((this.props.value / 20 >= 4.3 && this.props.value / 20 <= 4.7) ?
                                    "fa fa-2x fa-star-half-o" : "fa fa-2x fa-star")}
                            style={{color: 'gold'}}></span>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
};

class Bar extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div id={this.props.id + 'Color'} className={this.props.classA}>
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-1">
                                <i id={this.props.id + 'Icon'} className={this.props.classB}></i>
                            </div>

                            <div id={this.props.id} className="col-xs-11 text-right huge">
                                {this.props.value}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function Charts(props) {

    return (
        <div className="panel-group" id="accordion">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                        {/*<i className="fa fa-area-chart"></i>*/}
                        All seeing. All knowing.
                    </a>
                </div>


                <div id="collapse4" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="panel-body">
                                        <div id="chartOeeTrend"></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="panel-body">
                                        <div id="chartSixBigLosses"></div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div id="chartEvents" className="col-md-7"></div>
                                            <div className="col-md-5">
                                                <div className="panel-body">
                                                    <div className="table">
                                                        <table id="eventsTable" className="table table-hover">
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="panel-body">
                                        <div id="chartFloorMap"></div>
                                    </div>
                                </div>

                            </div>
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

class Wall extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className={this.props.classA}>
                    <div className="panel-heading">
                        {this.props.title}
                    </div>
                    <div id={this.props.id} className="panel-body">
                        <div id={'chart' + this.props.id} className="col-sm-4"></div>
                        <ul id={'rate' + this.props.id} className="col-sm-8" style={{fontSize: '18px'}}>
                            <li>{this.props.lossT}
                                <span className={this.props.classB}>
                                    {this.props.lossV + '%'}
                                </span>
                            </li>
                            <li>Occurrences
                                <span className="badge badge-default">
                                    {this.props.Occurrences}
                                </span>, Totalizer
                                <span className="label label-default pull-right">
                                    {this.props.Totalizer}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-footer">
                        {this.props.descr}
                    </div>
                </div>
            </div>
        )
    }
}

class PanelOEE extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SECs: 0,
            ms1000: new Date(),
            availability: 85,
            performance: 85,
            quality: 85,
            productCurrent: 0,
            productTarget: 9999,
            downtime: false,
            downtimeCurrent: 0,
            downtimeTotal: 0,
            bigLossFilter: 90,
            sblEquipmentFailure: {
                title: 'Equipment Failure',
                occurrences: Math.round(10 + Math.random() * 100),
                totalizer: Math.round(Math.random() * 5000),
                rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            sblSetupAndAdjustments: {
                title: 'Setup and Adjustments',
                occurrences: Math.round(10 + Math.random() * 100),
                totalizer: Math.round(Math.random() * 5000),
                rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            sblIdlingAndMinorStops: {
                title: 'Idling and Minor Stops',
                occurrences: Math.round(10 + Math.random() * 100),
                totalizer: Math.round(Math.random() * 5000),
                rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            sblReducedSpeed: {
                title: 'Reduced Speed',
                occurrences: Math.round(10 + Math.random() * 100),
                totalizer: Math.round(Math.random() * 5000),
                rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            sblProcessDefects: {
                title: 'Process Defects',
                occurrences: Math.round(10 + Math.random() * 100),
                totalizer: Math.round(Math.random() * 5000),
                rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            sblReducedYield: {
                title: 'Reduced Yield',
                occurrences: Math.round(10 + Math.random() * 100),
                totalizer: Math.round(Math.random() * 5000),
                rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            events: [
                {reason: '', occurrences: 0, totalizer: 0},
            ]
        };
    }

    componentDidMount() {
        chartOeeTrendInit("Oee Trend", null);
        chartSixBigLossesInit("Six Big Losses", null, this.state);
        chartEventsInit("Downtime Events", null);
        chartFloorMapInit('Floor Maps', null);
        sblChartsInit();
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    panelOEE() {
        this.setState({
            availability: 60 + Math.round((Math.random() * 400) / 10),
            performance: 60 + Math.round((Math.random() * 400) / 10),
            quality: 60 + Math.round((Math.random() * 400) / 10),

        });
    }

    panelTarget() {
        if (!this.state.downtime) {
            this.setState({
                productCurrent: this.state.productCurrent + Math.round((Math.random() * 5)),
                // productTarget: this.state.productTarget,
            })
        }
    }

    turnTarget() {
        this.setState({
            downtime: !this.state.downtime,
        });

        if (this.state.downtime) {
            this.setState({
                downtimeCurrent: new Date().getTime(),
            });
        } else {
            this.setState({
                downtimeTotal: this.state.downtimeTotal + (new Date().getTime() - this.state.downtimeCurrent),
            });
        }

    }

    chartOeeTrendDraw() {
        var ts = new Date().getTime();
        $("#chartOeeTrend").highcharts().series[1].addPoint([ts, this.state.availability], false, false);
        $("#chartOeeTrend").highcharts().series[2].addPoint([ts, this.state.performance], false, false);
        $("#chartOeeTrend").highcharts().series[3].addPoint([ts, this.state.quality], false, false);
        $("#chartOeeTrend").highcharts().series[0].addPoint([ts, this.state.availability * this.state.performance * this.state.quality / 10000], true, false);
    }


    chartSixBigLossesRefresh(filter) {
        var chartSeries = [
            this.state.sblEquipmentFailure.rate[this.state.sblEquipmentFailure.rate.length - 1],
            this.state.sblSetupAndAdjustments.rate[this.state.sblSetupAndAdjustments.rate.length - 1],
            this.state.sblIdlingAndMinorStops.rate[this.state.sblIdlingAndMinorStops.rate.length - 1],
            this.state.sblReducedSpeed.rate[this.state.sblReducedSpeed.rate.length - 1],
            this.state.sblProcessDefects.rate[this.state.sblProcessDefects.rate.length - 1],
            this.state.sblReducedYield.rate[this.state.sblReducedYield.rate.length - 1],
        ];

        var chartCategories = [
            this.state.sblEquipmentFailure.title,
            this.state.sblSetupAndAdjustments.title,
            this.state.sblIdlingAndMinorStops.title,
            this.state.sblReducedSpeed.title,
            this.state.sblProcessDefects.title,
            this.state.sblReducedYield.title,
        ];

        for (var i = 0; i < 5; i++) {
            for (var j = i + 1; j < 6; j++) {
                if (chartSeries[i] < chartSeries[j]) {
                    var t1 = chartSeries[i];
                    chartSeries[i] = chartSeries[j];
                    chartSeries[j] = t1;
                    var t2 = chartCategories[i];
                    chartCategories[i] = chartCategories[j];
                    chartCategories[j] = t2;
                }
            }
        }
        var chartSeries2 = [];
        var chartSeries3 = [];

        var g = 0;
        for (var n = 0; n < chartSeries.length; n++) {
            g = g + chartSeries[n];
            chartSeries2.push(chartSeries[n]);
            chartSeries3.push(g);
            if (g > filter) {
                n = 100;
            }
        }

        $("#chartSixBigLosses").highcharts().series[0].setData(chartSeries2);
        $("#chartSixBigLosses").highcharts().series[1].setData(chartSeries3);
        $("#chartSixBigLosses").highcharts().series[2].setData([{
            name: chartCategories[0],
            y: chartSeries[0]
        }, {
            name: chartCategories[1],
            y: chartSeries[1]
        }, {
            name: chartCategories[2],
            y: chartSeries[2]
        }, {
            name: chartCategories[3],
            y: chartSeries[3]
        }, {
            name: chartCategories[4],
            y: chartSeries[4]
        }, {
            name: chartCategories[5],
            y: chartSeries[5]
        }]);
        $("#chartSixBigLosses").highcharts().xAxis[0].setCategories(chartCategories);
    }


    chartFloorMapReafresh() {

        var ele = document.getElementsByClassName("highcharts-Pad80x50-box");
        $.each(ele, function (i, e) {
            var rdm = Math.random();
            if (rdm < .85) {
                e.setAttribute("fill", '#337ab7');
            } else if (rdm >= .85 && rdm < .95) {
                e.setAttribute("fill", '#ffbc00');
            } else if (rdm >= .95) {
                e.setAttribute("fill", '#d9534f');
            }
        });

    }


    panelSixBigLossesRefresh() {
        var
            t1 = Math.round(Math.random() * 5000),
            t2 = Math.round(Math.random() * 5000),
            t3 = Math.round(Math.random() * 5000),
            t4 = Math.round(Math.random() * 5000),
            t5 = Math.round(Math.random() * 5000),
            t6 = Math.round(Math.random() * 5000),
            t = t1 + t2 + t3 + t4 + t5 + t6;
        // sblEquipmentFailure((100 * t1 / t) | 0, Math.round(10 + (Math.random() * 100)), t1);
        // sblSetupAndAdjustments((100 * t2 / t) | 0, Math.round(10 + (Math.random() * 100)), t2);
        // sblIdlingAndMinorStops((100 * t3 / t) | 0, Math.round(10 + (Math.random() * 100)), t3);
        // sblReducedSpeed((100 * t4 / t) | 0, Math.round(10 + (Math.random() * 100)), t4);
        // sblProcessDefects((100 * t5 / t) | 0, Math.round(10 + (Math.random() * 100)), t5);
        // sblReducedYield((100 * t6 / t) | 0, Math.round(10 + (Math.random() * 100)), t6);

        var rate1 = this.state.sblEquipmentFailure.rate,
            rate2 = this.state.sblSetupAndAdjustments.rate,
            rate3 = this.state.sblIdlingAndMinorStops.rate,
            rate4 = this.state.sblReducedSpeed.rate,
            rate5 = this.state.sblProcessDefects.rate,
            rate6 = this.state.sblReducedYield.rate,
            total = 0;

        rate1.shift();
        rate2.shift();
        rate3.shift();
        rate4.shift();
        rate5.shift();
        rate6.shift();

        rate1.push(Math.round(Math.random() * 5000));
        rate2.push(Math.round(Math.random() * 5000));
        rate3.push(Math.round(Math.random() * 5000));
        rate4.push(Math.round(Math.random() * 5000));
        rate5.push(Math.round(Math.random() * 5000));
        rate6.push(Math.round(Math.random() * 5000));

        total = rate1[8] + rate2[8] + rate3[8] + rate4[8] + rate5[8] + rate6[8];

        rate1[8] = Math.round(rate1[8] / total * 100);
        rate2[8] = Math.round(rate2[8] / total * 100);
        rate3[8] = Math.round(rate3[8] / total * 100);
        rate4[8] = Math.round(rate4[8] / total * 100);
        rate5[8] = Math.round(rate5[8] / total * 100);
        rate6[8] = Math.round(rate6[8] / total * 100);

        this.setState({
            sblEquipmentFailure: {
                title: 'Equipment Failure',
                occurrences: Math.round(10 + (Math.random() * 100)),
                totalizer: Math.round(Math.random() * 5000),
                rate: rate1
            },
            sblSetupAndAdjustments: {
                title: 'Setup and Adjustments',
                occurrences: Math.round(10 + (Math.random() * 100)),
                totalizer: Math.round(Math.random() * 5000),
                rate: rate2
            },
            sblIdlingAndMinorStops: {
                title: 'Idling and Minor Stops',
                occurrences: Math.round(10 + (Math.random() * 100)),
                totalizer: Math.round(Math.random() * 5000),
                rate: rate3
            },
            sblReducedSpeed: {
                title: 'Reduced Speed',
                occurrences: Math.round(10 + (Math.random() * 100)),
                totalizer: Math.round(Math.random() * 5000),
                rate: rate4
            },
            sblProcessDefects: {
                title: 'Process Defects',
                occurrences: Math.round(10 + (Math.random() * 100)),
                totalizer: Math.round(Math.random() * 5000),
                rate: rate5
            },
            sblReducedYield: {
                title: 'Reduced Yield',
                occurrences: Math.round(10 + (Math.random() * 100)),
                totalizer: Math.round(Math.random() * 5000),
                rate: rate6
            },
        });
        $("#chartEquipmentFailure").highcharts().series[0].setData(this.state.sblEquipmentFailure.rate);
        $("#chartSetupAndAdjustments").highcharts().series[0].setData(this.state.sblSetupAndAdjustments.rate);
        $("#chartIdlingAndMinorStops").highcharts().series[0].setData(this.state.sblIdlingAndMinorStops.rate);
        $("#chartReducedSpeed").highcharts().series[0].setData(this.state.sblReducedSpeed.rate);
        $("#chartProcessDefects").highcharts().series[0].setData(this.state.sblProcessDefects.rate);
        $("#chartReducedYield").highcharts().series[0].setData(this.state.sblReducedYield.rate);

    }

    tick() {
        if (new Date() - this.state.ms1000 < 1000) {
            return;
        } else {
            this.setState({
                SECs: this.state.SECs + 1,
                ms1000: new Date(),
            });
        }
        this.panelOEE();
        this.panelTarget();
        this.panelTarget();

        if (this.state.SECs % 15 == 0) {
            this.turnTarget();
        }

        if (this.state.SECs % 3 == 0) {
            this.chartOeeTrendDraw();
        }


        if (this.state.SECs % 2 == 0) {
            this.chartSixBigLossesRefresh(this.state.bigLossFilter);

        }
        if (this.state.SECs % 2 == 0) {
            this.panelSixBigLossesRefresh();
        }


        if (this.state.SECs % 3 == 0) {
            this.chartFloorMapReafresh();
        }
    }

    render() {
        return (

            <div className="container">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="navbar-header">

                        <a className="navbar-brand" href="https://github.com/seanwu99/oee-react"><i
                            className="fa fa-github fa-3"> OEE
                            Dashboard</i></a>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-3">
                        <Tile
                            classA={'panel panel-primary'}
                            classB={'fa fa-cogs  fa-5x'}
                            id={'panelOEE'}
                            value={Math.round(this.state.availability * this.state.performance * this.state.quality / 1000) / 10}
                            desc={'OEE'}
                        />
                    </div>
                    <div className="col-md-3">
                        <Tile
                            classA={'panel panel-cyan'}
                            classB={'fa fa-clock-o fa-5x'}
                            id={'panelAvailability'}
                            value={this.state.availability}
                            desc={'Availability'}
                        />
                    </div>
                    <div className="col-md-3">
                        <Tile
                            classA={'panel panel-cyan'}
                            classB={'fa fa-wrench fa-5x'}
                            id={'panelPerformance'}
                            value={this.state.performance}
                            desc={'Performance'}
                        />
                    </div>
                    <div className="col-md-3">
                        <Tile
                            classA={'panel panel-cyan'}
                            classB={'fa fa-check-square-o fa-5x'}
                            id={'panelQuality'}
                            value={this.state.quality}
                            desc={'Quality'}
                        />
                    </div>
                </div>

                <div className="row">
                    <Bar
                        id={'Target'}
                        classA={
                            !this.state.downtime ?
                                'panel panel-green' :
                                'panel panel-red'
                        }
                        classB={
                            !this.state.downtime ?
                                'fa fa-cog fa-spin fa-4x' :
                                'fa fa-cog fa-4x'
                        }
                        classC={''}
                        value={
                            'Target: ' + this.state.productCurrent + ' / ' + this.state.productTarget
                        }

                    />
                    <Bar
                        id={'Downtime'}
                        classA={'panel panel-yellow'}
                        classB={
                            !this.state.downtime ?
                                'fa fa-spinner fa-4x fa-fw' :
                                'fa fa-spinner fa-pulse fa-4x fa-fw'
                        }
                        classC={''}
                        value={
                            !this.state.downtime ?
                                'Downtime: ' + (new Date(0)).toISOString().substr(14, 5) + " / " +
                                (new Date(this.state.downtimeTotal)).toISOString().substr(14, 5) :
                                'Downtime: ' + (new Date((new Date().getTime() - this.state.downtimeCurrent))).toISOString().substr(14, 5) + ' / ' +
                                (new Date(this.state.downtimeTotal)).toISOString().substr(14, 5)
                        }
                    />
                </div>

                <Charts/>

                <div className="row">
                    <Wall
                        id={'EquipmentFailure'}
                        title={'Six Big Losses > Availability Loss > EQUIPMENT FAILURE'}
                        descr={'Reasons for equipment failure include tooling failure, breakdowns, and unplanned maintenance. From the broader perspective of unplanned stops, other common reasons include no operators or materials, being starved by upstream equipment or being blocked by downstream equipment.'}
                        classA={'panel panel-success'}
                        classB={(this.state.sblEquipmentFailure.rate[this.state.sblEquipmentFailure.rate.length - 1] > this.state.sblEquipmentFailure.rate[this.state.sblEquipmentFailure.rate.length - 2]) ?
                            'label label-danger  pull-right' : 'label label-success pull-right'}
                        lossT={(this.state.sblEquipmentFailure.rate[this.state.sblEquipmentFailure.rate.length - 1] > this.state.sblEquipmentFailure.rate[this.state.sblEquipmentFailure.rate.length - 2]) ?
                            'This loss increased at a rate of' : 'This loss decreased at a rate of'}
                        lossV={this.state.sblEquipmentFailure.rate[this.state.sblEquipmentFailure.rate.length - 1]}
                        Occurrences={this.state.sblEquipmentFailure.occurrences}
                        Totalizer={(new Date(this.state.sblSetupAndAdjustments.totalizer * 1000)).toISOString().substr(11, 8)}

                    />
                    <Wall
                        id={'SetupAndAdjustments'}
                        title={'Six Big Losses > Availability Loss > SETUP AND ADJUSTMENTS'}
                        descr={' Reasons for Setup and Adjustments include setup, changeovers, major adjustments, and tooling adjustments. From the broader perspective of planned stops, other common reasons include cleaning, warmup time, planned maintenance, and quality inspections.'}
                        classA={'panel panel-success'}
                        classB={(this.state.sblSetupAndAdjustments.rate[this.state.sblSetupAndAdjustments.rate.length - 1] > this.state.sblSetupAndAdjustments.rate[this.state.sblSetupAndAdjustments.rate.length - 2]) ?
                            'label label-danger  pull-right' : 'label label-success pull-right'}
                        lossT={(this.state.sblSetupAndAdjustments.rate[this.state.sblSetupAndAdjustments.rate.length - 1] > this.state.sblSetupAndAdjustments.rate[this.state.sblSetupAndAdjustments.rate.length - 2]) ?
                            'This loss increased at a rate of' : 'This loss decreased at a rate of'}
                        lossV={this.state.sblSetupAndAdjustments.rate[this.state.sblSetupAndAdjustments.rate.length - 1]}
                        Occurrences={this.state.sblSetupAndAdjustments.occurrences}
                        Totalizer={(new Date(this.state.sblSetupAndAdjustments.totalizer * 1000)).toISOString().substr(11, 8)}
                    />
                </div>

                <div className="row">
                    <Wall
                        id={'IdlingAndMinorStops'}
                        title={'Six Big Losses > Performance Loss > IDLING AND MINOR STOPS'}
                        descr={' Reasons for Idling and Minor Stops include misfeeds, material jams, obstructed product flow, incorrect settings, misaligned or blocked sensors, equipment design issues, and periodic quick cleaning.'}
                        classA={'panel panel-warning'}
                        classB={(this.state.sblIdlingAndMinorStops.rate[this.state.sblIdlingAndMinorStops.rate.length - 1] > this.state.sblIdlingAndMinorStops.rate[this.state.sblIdlingAndMinorStops.rate.length - 2]) ?
                            'label label-danger  pull-right' : 'label label-success pull-right'}
                        lossT={(this.state.sblIdlingAndMinorStops.rate[this.state.sblIdlingAndMinorStops.rate.length - 1] > this.state.sblIdlingAndMinorStops.rate[this.state.sblIdlingAndMinorStops.rate.length - 2]) ?
                            'This loss increased at a rate of' : 'This loss decreased at a rate of'}
                        lossV={this.state.sblIdlingAndMinorStops.rate[this.state.sblIdlingAndMinorStops.rate.length - 1]}
                        Occurrences={this.state.sblIdlingAndMinorStops.occurrences}
                        Totalizer={(new Date(this.state.sblIdlingAndMinorStops.totalizer * 1000)).toISOString().substr(11, 8)}
                    />

                    <Wall
                        id={'ReducedSpeed'}
                        title={'Six Big Losses > Performance Loss > REDUCED SPEED'}
                        descr={' Reasons for reduced speed include dirty or worn out equipment, poor lubrication, substandard materials, poor environmental conditions, operator inexperience, startup, and shutdown.'}
                        classA={'panel panel-warning'}
                        classB={(this.state.sblReducedSpeed.rate[this.state.sblReducedSpeed.rate.length - 1] > this.state.sblReducedSpeed.rate[this.state.sblReducedSpeed.rate.length - 2]) ?
                            'label label-danger  pull-right' : 'label label-success pull-right'}
                        lossT={(this.state.sblReducedSpeed.rate[this.state.sblReducedSpeed.rate.length - 1] > this.state.sblReducedSpeed.rate[this.state.sblReducedSpeed.rate.length - 2]) ?
                            'This loss increased at a rate of' : 'This loss decreased at a rate of'}
                        lossV={this.state.sblReducedSpeed.rate[this.state.sblReducedSpeed.rate.length - 1]}
                        Occurrences={this.state.sblReducedSpeed.occurrences}
                        Totalizer={(new Date(this.state.sblReducedSpeed.totalizer * 1000)).toISOString().substr(11, 8)}
                    />

                </div>

                <div className="row">
                    <Wall
                        id={'ProcessDefects'}
                        title={'Six Big Losses > Quality Loss > PROCESS DEFECTS'}
                        descr={'Reasons for process defects include incorrect equipment settings, operator or equipment handling errors, and lot expiration. This includes scrapped parts as well as parts that can be reworked.'}
                        classA={'panel panel-info'}
                        classB={(this.state.sblProcessDefects.rate[this.state.sblProcessDefects.rate.length - 1] > this.state.sblProcessDefects.rate[this.state.sblProcessDefects.rate.length - 2]) ?
                            'label label-danger  pull-right' : 'label label-success pull-right'}
                        lossT={(this.state.sblProcessDefects.rate[this.state.sblProcessDefects.rate.length - 1] > this.state.sblProcessDefects.rate[this.state.sblProcessDefects.rate.length - 2]) ?
                            'This loss increased at a rate of' : 'This loss decreased at a rate of'}
                        lossV={this.state.sblProcessDefects.rate[this.state.sblProcessDefects.rate.length - 1]}
                        Occurrences={this.state.sblProcessDefects.occurrences}
                        Totalizer={(new Date(this.state.sblProcessDefects.totalizer * 1000)).toISOString().substr(11, 8)}
                    />

                    <Wall
                        id={'ReducedYield'}
                        title={'Six Big Losses > Quality Loss > REDUCED YIELD'}
                        descr={'Reasons for Reduced Yield include suboptimal changeovers, incorrect settings when a new part is run, equipment that needs warmup cycles, or equipment that inherently creates waste after startup.'}
                        classA={'panel panel-info'}
                        classB={(this.state.sblReducedYield.rate[this.state.sblReducedYield.rate.length - 1] > this.state.sblReducedYield.rate[this.state.sblReducedYield.rate.length - 2]) ?
                            'label label-danger  pull-right' : 'label label-success pull-right'}
                        lossT={(this.state.sblReducedYield.rate[this.state.sblReducedYield.rate.length - 1] > this.state.sblReducedYield.rate[this.state.sblReducedYield.rate.length - 2]) ?
                            'This loss increased at a rate of' : 'This loss decreased at a rate of'}
                        lossV={this.state.sblReducedYield.rate[this.state.sblReducedYield.rate.length - 1]}
                        Occurrences={this.state.sblReducedYield.occurrences}
                        Totalizer={(new Date(this.state.sblReducedYield.totalizer * 1000)).toISOString().substr(11, 8)}
                    />

                </div>

            </div>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <PanelOEE/>
        );
    }
}
export default Main;







