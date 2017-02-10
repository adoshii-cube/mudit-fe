$(document).ready(function () {

    //SELECT FIRST QUESTION ON LEFT FOR EACH PAGE
    var selectTab = $('body').find(".mdl-tabs__tab").attr('id');
    $('body').find("#" + selectTab).addClass("is-active");

    //SELECT CORRESPONDING PANEL OF CHARTS ON RIGHT FOR RESPECTIVE QUESTION
    var selectPanel = $('body').find(".mdl-tabs__tab").attr('href');
    $('body').find(selectPanel).addClass("is-active");

    $(".mdl-tabs__tab").on("click", function () {
        dc.renderAll();
    });


    var jArray = $('#questionIdList').val();
    var jsonObj = $.parseJSON(jArray);
    jQuery.each(jsonObj, function (i, quesId) {
        var jArray = $('#rawData' + quesId).val();
        var data = $.parseJSON(jArray);
//        data.forEach(function (d) {
//            d.metricName4 = new Date(d.metricName4);
//        });
        if (quesId === 3) {
            var cf = crossfilter(data);
            var tatMetricName1 = cf.dimension(function (d) {
                return d["metricName1"];
            });
            var tatMetricNameGroup1 = tatMetricName1.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var tatMetricName2 = cf.dimension(function (d) {
                return d["metricName2"];
            });
            var tatMetricNameGroup2 = tatMetricName2.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var tatMetricName3 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var tatMetricNameGroup3 = tatMetricName3.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var tatMetricName4 = cf.dimension(function (d) {
                return d.metricName4;
            });
            var tatMetricNameGroup4 = tatMetricName4.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );

            var tatMetricName5 = cf.dimension(function (d) {
                return d["metricName5"];
            });
            var tatMetricNameGroup5 = tatMetricName5.group().reduce(
                    function (p, v) {
                        if (isTATSum(v)) {
                            p.numerator += +v.value;
                        }
                        if (isTATCount(v)) {
                            p.denominator += +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator), 2);
                        return p;
//                            console.log("p ::::::::::::::::::::" + p);
                    },
                    function (p, v) {
                        if (isTATSum(v)) {
                            p.numerator -= +v.value;
                        }
                        if (isTATCount(v)) {
                            p.denominator -= +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator), 2);
                        return p;
                    },
                    function () {
                        return{
                            denominator: 0,
                            numerator: 0,
                            avg: 0
                        };
                    }
            );

            var tatMetricName6 = cf.dimension(function (d) {
                return d["metricName6"];
            });

            var tatMetricNameGroup6 = tatMetricName6.group().reduce(
                    function (p, v) {
                        if (isConvNumerator(v)) {
                            p.numerator += +v.value;
                        }
                        if (isConvDenominator(v)) {
                            p.denominator += +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator * 100), 2);
                        return p;
//                            console.log("p ::::::::::::::::::::" + p);
                    },
                    function (p, v) {
                        if (isConvNumerator(v)) {
                            p.numerator -= +v.value;
                        }
                        if (isConvDenominator(v)) {
                            p.denominator -= +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator * 100), 2);
                        return p;
                    },
                    function () {
                        return{
                            denominator: 0,
                            numerator: 0,
                            avg: 0
                        };
                    }
            );


        } else if (quesId === 4) {
            var cf = crossfilter(data);
            var sohMetricName1 = cf.dimension(function (d) {
                return d["metricName1"];
            });
            var sohMetricNameGroup1 = sohMetricName1.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var sohMetricName2 = cf.dimension(function (d) {
                return d["metricName2"];
            });
            var sohMetricNameGroup2 = sohMetricName2.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var sohMetricName3 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var sohMetricNameGroup3 = sohMetricName3.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var sohMetricName4 = cf.dimension(function (d) {
                return d.metricName4;
            });
            var sohMetricNameGroup4 = sohMetricName4.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );

            var sohMetricName5 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var sohMetricNameGroup5 = sohMetricName5.group().reduce(
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p += +v.value;
                        }
                        return p;
                    },
                    function (p, v) {
                        if (isCandidateCount(v)) {
                            p -= +v.value;
                        }
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );

            var sohMetricName6 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var sohMetricNameGroup6 = sohMetricName6.group().reduce(
                    function (p, v) {
                        if (isConvNumerator(v)) {
                            p.numerator += +v.value;
                        }
                        if (isCandidateCount(v)) {
                            p.denominator += +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator * 100), 1);
                        return p;
//                            console.log("p ::::::::::::::::::::" + p);
                    },
                    function (p, v) {
                        if (isConvNumerator(v)) {
                            p.numerator -= +v.value;
                        }
                        if (isCandidateCount(v)) {
                            p.denominator -= +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator * 100), 1);
                        return p;
                    },
                    function () {
                        return{
                            denominator: 0,
                            numerator: 0,
                            avg: 0
                        };
                    }
            );

            var sohMetricName7 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var sohMetricNameGroup7 = sohMetricName7.group().reduce(
                    function (p, v) {
                        if (isTATSum(v)) {
                            p.numerator += +v.value;
                        }
                        if (isCandidateCount(v)) {
                            p.denominator += +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator), 1);
                        return p;
//                            console.log("p ::::::::::::::::::::" + p);
                    },
                    function (p, v) {
                        if (isTATSum(v)) {
                            p.numerator -= +v.value;
                        }
                        if (isCandidateCount(v)) {
                            p.denominator -= +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator), 1);
                        return p;
                    },
                    function () {
                        return{
                            denominator: 0,
                            numerator: 0,
                            avg: 0
                        };
                    }
            );

            var sohMetricName8 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var sohMetricNameGroup8 = sohMetricName8.group().reduce(
                    function (p, v) {
                        if (isCompensationSum(v)) {
                            p.numerator += +v.value;
                        }
                        if (isCandidateCount(v)) {
                            p.denominator += +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator), 1);
                        return p;
//                            console.log("p ::::::::::::::::::::" + p);
                    },
                    function (p, v) {
                        if (isCompensationSum(v)) {
                            p.numerator -= +v.value;
                        }
                        if (isCandidateCount(v)) {
                            p.denominator -= +v.value;
                        }
                        p.avg = d3.round((p.numerator / p.denominator), 1);
                        return p;
                    },
                    function () {
                        return{
                            denominator: 0,
                            numerator: 0,
                            avg: 0
                        };
                    }
            );

        } else {
            var cf = crossfilter(data);

            var metricName1 = cf.dimension(function (d) {
                return d["metricName1"];
            });
            var metricNameGroup1 = metricName1.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName2 = cf.dimension(function (d) {
                return d["metricName2"];
            });
            var metricNameGroup2 = metricName2.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName3 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var metricNameGroup3 = metricName3.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName4 = cf.dimension(function (d) {
                return d.metricName4;
            });
            var metricNameGroup4 = metricName4.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName5 = cf.dimension(function (d) {
                return d["metricName5"];
            });
            var metricNameGroup5 = metricName5.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName6 = cf.dimension(function (d) {
                return d["metricName6"];
            });
            var metricNameGroup6 = metricName6.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName7 = cf.dimension(function (d) {
                return d["metricName7"];
            });
            var metricNameGroup7 = metricName7.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName8 = cf.dimension(function (d) {
                return d["metricName8"];
            });
            var metricNameGroup8 = metricName8.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
            var metricName9 = cf.dimension(function (d) {
                return d["metricName9"];
            });
            var metricNameGroup9 = metricName9.group().reduce(
                    function (p, v) {
                        p += +v.value;
                        return p;
                    },
                    function (p, v) {
                        p -= +v.value;
                        return p;
                    },
                    function () {
                        return 0;
                    }
            );
        }

        $("div[id^='pg" + quesId + "']").each(function () {
            var chartId = $(this).attr('id');
            var chartType = $(this).find("#chartType").val();
            var chartMetricId = $(this).find("#chartMetricId").val();
            if (quesId === 3) {
                switch (chartMetricId) {
                    case "1":
                        createDropdownUsingDc(chartId, tatMetricName1, tatMetricNameGroup1);
                        break;
                    case "2":
                        createDropdownUsingDc(chartId, tatMetricName2, tatMetricNameGroup2);
                        break;
                    case "3":
                        createDropdownUsingDc(chartId, tatMetricName3, tatMetricNameGroup3);
                        break;
                    case "4":
                        createTimeseriesUsingDc(chartId, tatMetricName4, tatMetricNameGroup4);
                        break;
                    case "5":
                        createRowChartTATUsingDc(chartId, tatMetricName5, tatMetricNameGroup5);
                        break;
                    case "6":
                        createRowChartTATUsingDc(chartId, tatMetricName6, tatMetricNameGroup6);
                        break;
                }
            } else if (quesId === 4) {
                switch (chartMetricId) {
                    case "1":
                        createDropdownUsingDc(chartId, sohMetricName1, sohMetricNameGroup1);
                        break;
                    case "2":
                        createDropdownUsingDc(chartId, sohMetricName2, sohMetricNameGroup2);
                        break;
                    case "3":
                        createDropdownUsingDc(chartId, sohMetricName3, sohMetricNameGroup3);
                        break;
                    case "4":
                        createTimeseriesUsingDc(chartId, sohMetricName4, sohMetricNameGroup4);
                        break;
                    case "5":
                        createPieChartUsingDc(chartId, sohMetricName5, sohMetricNameGroup5);
                        break;
                    case "6":
                        createBarChartAvgUsingDc(chartId, sohMetricName6, sohMetricNameGroup6);
                        break;
                    case "7":
                        createBarChartAvgUsingDc(chartId, sohMetricName7, sohMetricNameGroup7);
                        break;
                    case "8":
                        createBarChartAvgUsingDc(chartId, sohMetricName8, sohMetricNameGroup8);
                        break;
                }
            } else {
                if (chartType === "Map") {
                    switch (chartMetricId) {
                        case "1":
                            createBubbleOverlayChart(chartId, metricName1, metricNameGroup1);
//                        createBubbleOverlayChart(chartId);
//                        createBubbleChartUsingDc(chartId, metricName1, metricNameGroup1);
                            break;
                        case "2":
                            createBubbleOverlayChart(chartId, metricName2, metricNameGroup2);
                            break;
                        case "3":
                            createBubbleOverlayChart(chartId, metricName3, metricNameGroup3);
                            break;
                        case "4":
                            createBubbleOverlayChart(chartId, metricName4, metricNameGroup4);
                            break;
                        case "5":
                            createBubbleOverlayChart(chartId, metricName5, metricNameGroup5);
                            break;
                        case "6":
                            createBubbleOverlayChart(chartId, metricName6, metricNameGroup6);
                            break;
                        case "7":
                            createBubbleOverlayChart(chartId, metricName7, metricNameGroup7);
                            break;
                        case "8":
                            createBubbleOverlayChart(chartId, metricName8, metricNameGroup8);
                            break;
                        case "9":
                            createBubbleOverlayChart(chartId, metricName9, metricNameGroup9);
                            break;
                    }
                } else if (chartType === "Pie") {
                    switch (chartMetricId) {
                        case "1":
                            createPieChartUsingDc(chartId, metricName1, metricNameGroup1);
                            break;
                        case "2":
                            createPieChartUsingDc(chartId, metricName2, metricNameGroup2);
                            break;
                        case "3":
                            createPieChartUsingDc(chartId, metricName3, metricNameGroup3);
                            break;
                        case "4":
                            createPieChartUsingDc(chartId, metricName4, metricNameGroup4);
                            break;
                        case "5":
                            createPieChartUsingDc(chartId, metricName5, metricNameGroup5);
                            break;
                        case "6":
                            createPieChartUsingDc(chartId, metricName6, metricNameGroup6);
                            break;
                        case "7":
                            createPieChartUsingDc(chartId, metricName7, metricNameGroup7);
                            break;
                        case "8":
                            createPieChartUsingDc(chartId, metricName8, metricNameGroup8);
                            break;
                        case "9":
                            createPieChartUsingDc(chartId, metricName9, metricNameGroup9);
                            break;
                    }
                } else if (chartType === "Bar") {
                    switch (chartMetricId) {
                        case "1":
                            createBarChartUsingDc(chartId, metricName1, metricNameGroup1);
                            break;
                        case "2":
                            createBarChartUsingDc(chartId, metricName2, metricNameGroup2);
                            break;
                        case "3":
                            createBarChartUsingDc(chartId, metricName3, metricNameGroup3);
                            break;
                        case "4":
                            createBarChartUsingDc(chartId, metricName4, metricNameGroup4);
                            break;
                        case "5":
                            createBarChartUsingDc(chartId, metricName5, metricNameGroup5);
                            break;
                        case "6":
                            createBarChartUsingDc(chartId, metricName6, metricNameGroup6);
                            break;
                        case "7":
                            createBarChartUsingDc(chartId, metricName7, metricNameGroup7);
                            break;
                        case "8":
                            createBarChartUsingDc(chartId, metricName8, metricNameGroup8);
                            break;
                        case "9":
                            createBarChartUsingDc(chartId, metricName9, metricNameGroup9);
                            break;
                    }
                } else if (chartType === "Dropdown") {
                    switch (chartMetricId) {
                        case "1":
                            createDropdownUsingDc(chartId, metricName1, metricNameGroup1);
                            break;
                        case "2":
                            createDropdownUsingDc(chartId, metricName2, metricNameGroup2);
                            break;
                        case "3":
                            createDropdownUsingDc(chartId, metricName3, metricNameGroup3);
                            break;
                        case "4":
                            createDropdownUsingDc(chartId, metricName4, metricNameGroup4);
                            break;
                        case "5":
                            createDropdownUsingDc(chartId, metricName5, metricNameGroup5);
                            break;
                        case "6":
                            createDropdownUsingDc(chartId, metricName6, metricNameGroup6);
                            break;
                        case "7":
                            createDropdownUsingDc(chartId, metricName7, metricNameGroup7);
                            break;
                        case "8":
                            createDropdownUsingDc(chartId, metricName8, metricNameGroup8);
                            break;
                        case "9":
                            createDropdownUsingDc(chartId, metricName9, metricNameGroup9);
                            break;
                    }
                } else if (chartType === "Timeseries") {
                    switch (chartMetricId) {
                        case "1":
                            createTimeseriesUsingDc(chartId, metricName1, metricNameGroup1);
                            break;
                        case "2":
                            createTimeseriesUsingDc(chartId, metricName2, metricNameGroup2);
                            break;
                        case "3":
                            createTimeseriesUsingDc(chartId, metricName3, metricNameGroup3);
                            break;
                        case "4":
                            createTimeseriesUsingDc(chartId, metricName4, metricNameGroup4);
                            break;
                        case "5":
                            createTimeseriesUsingDc(chartId, metricName5, metricNameGroup5);
                            break;
                        case "6":
                            createTimeseriesUsingDc(chartId, metricName6, metricNameGroup6);
                            break;
                        case "7":
                            createTimeseriesUsingDc(chartId, metricName7, metricNameGroup7);
                            break;
                        case "8":
                            createTimeseriesUsingDc(chartId, metricName8, metricNameGroup8);
                            break;
                        case "9":
                            createTimeseriesUsingDc(chartId, metricName9, metricNameGroup9);
                            break;
                    }
                }


            }

        });

    });
});

function isCandidateCount(v) {
    return v.type === "candidate_count";
}
function isTATCount(v) {
    return v.type === "tat_count";
}
function isTATSum(v) {
    return v.type === "tat_sum";
}
function isConvNumerator(v) {
    return v.type === "conversion_ratio_num";
}
function isConvDenominator(v) {
    return v.type === "conversion_ratio_deno";
}
function isCompensationSum(v) {
    return v.type === "compensation_sum";
}

function createPieChartUsingDc(chartId, cfDimension, cfGroup) {
    chart = dc.pieChart("#" + chartId);
    chart
            .dimension(cfDimension)
            .group(cfGroup)
            .externalLabels(10)
            .externalRadiusPadding(25)
            .ordinalColors(['#ef5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157', '#FFEE58', '#FFCA28', '#FFA726', '#FF7043'])
            .label(function (d) {
                return d.key + ": " + d3.round((d.value / d3.sum(cfGroup.all(), function (d) {
                    return d.value;
                })) * 100, 1) + "%";
            });
//        chart.filter = function () {};
    plotResponsiveCharts(chartId);
}

function createRowChartUsingDc(chartId, cfDimension, cfGroup) {
    var chart = dc.rowChart("#" + chartId);
    chart
            .elasticX(true)
            .dimension(cfDimension)
            .group(cfGroup)
            .ordinalColors(['#7986CB'])
            .label(function (d) {
                return d.key + " = " + d.value;
            })
//            .ordering(function (d) {
//                return -d.value;
//            })
            .xAxis().tickFormat(d3.format('.1s'));
    plotResponsiveCharts(chartId);
}

function createRowChartTATUsingDc(chartId, cfDimension, cfGroup) {
    var chart = dc.rowChart("#" + chartId);
    chart
            .valueAccessor(function (p) {
                return p.value.avg;
            })
            .dimension(cfDimension)
            .group(cfGroup)
            .elasticX(true)
            .ordinalColors(['#7986CB']);
    chart.filter = function () {};
    plotResponsiveCharts(chartId);
}

function createBarChartUsingDc(chartId, cfDimension, cfGroup) {
    var chart = dc.barChart("#" + chartId);
    chart
            .margins({top: 0, bottom: 30, left: 50, right: 20})
            .dimension(cfDimension)
            .group(cfGroup)
            .yAxisLabel("No. of candidates")
            .elasticY(true)
//            .showYAxis(false)
            .x(d3.scale.ordinal().domain(cfDimension)) // Need the empty val to offset the first value
            .xUnits(dc.units.ordinal) // Tell Dc.js that we're using an ordinal x axis
            .ordinalColors(['#7986CB'])
//            .ordering(function (d) {
//                return -d.value;
//            })
//            .yAxis().tickFormat(d3.format('.1s'));
//            .label(function (d) {
//                return d.key + " = " + d.value;
//            })
            .centerBar(false);

    chart.on("renderlet", function (chart) {
        var gLabels = chart.select(".labels");
        if (gLabels.empty()) {
            gLabels = chart.select(".chart-body").append('g').classed('labels', true);
        }

        var gLabelsData = gLabels.selectAll("text").data(chart.selectAll(".bar")[0]);
        gLabelsData.exit().remove(); //Remove unused elements

        gLabelsData.enter().append("text") //Add new elements

        gLabelsData
                .attr('text-anchor', 'middle')
                .attr('fill', 'white')
                .text(function (d) {
                    return d3.select(d).data()[0].data.value
                })
                .attr('x', function (d) {
                    return +d.getAttribute('x') + (d.getAttribute('width') / 2);
                })
                .attr('y', function (d) {
                    return +d.getAttribute('y') + 15;
                })
                .attr('style', function (d) {
                    if (+d.getAttribute('height') < 18)
                        return "display:none";
                });
    });

    plotResponsiveCharts(chartId);
}

function createBarChartAvgUsingDc(chartId, cfDimension, cfGroup) {
    var chart = dc.barChart("#" + chartId);
    chart
            .margins({top: 0, bottom: 30, left: 50, right: 20})
            .dimension(cfDimension)
            .group(cfGroup)
//            .yAxisLabel("Count")
            .elasticY(true)
//            .showYAxis(false)
            .valueAccessor(function (p) {
                return p.value.avg;
            })
            .x(d3.scale.ordinal().domain(cfDimension)) // Need the empty val to offset the first value
            .xUnits(dc.units.ordinal) // Tell Dc.js that we're using an ordinal x axis
            .ordinalColors(['#7986CB'])
//            .label(function (d) {
//                return d.key + " = " + d.value;
//            })
            .centerBar(false);

    chart.on("renderlet", function (chart) {
        var gLabels = chart.select(".labels");
        if (gLabels.empty()) {
            gLabels = chart.select(".chart-body").append('g').classed('labels', true);
        }

        var gLabelsData = gLabels.selectAll("text").data(chart.selectAll(".bar")[0]);
        gLabelsData.exit().remove(); //Remove unused elements

        gLabelsData.enter().append("text") //Add new elements

        gLabelsData
                .attr('text-anchor', 'middle')
                .attr('fill', 'white')
                .text(function (d) {
                    return d3.select(d).data()[0].data.value.avg
                })
                .attr('x', function (d) {
                    return +d.getAttribute('x') + (d.getAttribute('width') / 2);
                })
                .attr('y', function (d) {
                    return +d.getAttribute('y') + 15;
                })
                .attr('style', function (d) {
                    if (+d.getAttribute('height') < 18)
                        return "display:none";
                });
    });

    plotResponsiveCharts(chartId);
}

function createDropdownUsingDc(chartId, cfDimension, cfGroup) {
    var chart = dc.selectMenu("#" + chartId);
    chart
            .dimension(cfDimension)
            .group(cfGroup)
            .controlsUseVisibility(true);
    chart.render();
}

function createTimeseriesUsingDc(chartId, cfDimension, cfGroup) {
//    var minDate = cfDimension.bottom(1)[0].metricName4;
//    var maxDate = cfDimension.top(1)[0].metricName4;
    var chart = dc.barChart("#" + chartId);
    chart
            .height(75)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
//            .x(d3.time.scale().domain([minDate, maxDate]))
//            .xUnits(d3.time.months)
//            .brushOn(true)
            .elasticY(true)
            .dimension(cfDimension)
            .group(cfGroup)
//            .mouseZoomable(true)
            .showYAxis(false)
//            .centerBar(true)
            .colors(['#303f9f']);

    chart.on("renderlet", function (chart) {
        var gLabels = chart.select(".labels");
        if (gLabels.empty()) {
            gLabels = chart.select(".chart-body").append('g').classed('labels', true);
        }

        var gLabelsData = gLabels.selectAll("text").data(chart.selectAll(".bar")[0]);
        gLabelsData.exit().remove(); //Remove unused elements

        gLabelsData.enter().append("text"); //Add new elements

        gLabelsData
                .attr('text-anchor', 'middle')
                .attr('fill', 'white')
                .text(function (d) {
                    return d3.select(d).data()[0].data.value;
                })
                .attr('x', function (d) {
                    return +d.getAttribute('x') + (d.getAttribute('width') / 2);
                })
                .attr('y', function (d) {
                    return +d.getAttribute('y') + 15;
                })
                .attr('style', function (d) {
                    if (+d.getAttribute('height') < 18)
                        return "display:none";
                });
    });
    plotResponsiveCharts(chartId);
}

function plotResponsiveCharts(chartId) {
    document.getElementById(chartId).style.display = 'none';
    document.getElementById(chartId).style.display = 'block';
    dc.renderAll();
}

//LOGIN PAGE JS START
$(".mdl-textfield__input").blur(function () {
    if (!this.value) {
        $(this).prop('required', true);
        $(this).parent().addClass('is-invalid');
    }
});
$(".mdl-button[type='submit']").click(function (event) {
    $(this).siblings(".mdl-textfield").addClass('is-invalid');
    $(this).siblings(".mdl-textfield").children(".mdl-textfield__input").prop('required', true);
});
$("#submit-button").click(function (event) {
    if ($("#username").val().length === 0) {
        $("#username").prop('required', true);
        $("#username").parent().addClass('is-invalid');
    }
    if ($("#password").val().length === 0) {
        $("#password").prop('required', true);
        $("#password").parent().addClass('is-invalid');
    }
    if ($("#username").val().length !== 0 && $("#password").val().length !== 0) {
        alert("Woohooo");
    }
});
//LOGIN PAGE JS END