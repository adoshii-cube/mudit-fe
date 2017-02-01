$(document).ready(function () {

    $("#scroll-tab-1").addClass("is-active");
    $("#question-tab-1").addClass("is-active");

//    $(".mdl-tabs__tab-bar").first("mdl-tabs__tab").addClass("is-active");
    $("#tab1-panel").addClass("is-active");

    $(".mdl-layout__tab").on('click', function () {
        var x = $('.mdl-layout__tab.is-active').attr('href');
        if ($(x).find('.mdl-tabs__tab').hasClass("is-active")) {
        } else {
            $(x).find('.mdl-tabs__tab').first().addClass("is-active");
        }
    });

    $(".mdl-layout__tab.is-active").each(function () {
        var totalPages = $('#totalPages').val();
        for (var n = 1; n <= totalPages; n++) {
            var jArray = $('#rawData' + n).val();
            var data = $.parseJSON(jArray);
            var cf = crossfilter(data);
            var metricName1 = cf.dimension(function (d) {
                return d["metricName1"];
            });
            var metricNameGroup1 = metricName1.group();
            var metricName2 = cf.dimension(function (d) {
                return d["metricName2"];
            });
            var metricNameGroup2 = metricName2.group();
            var metricName3 = cf.dimension(function (d) {
                return d["metricName3"];
            });
            var metricNameGroup3 = metricName3.group();

            var metricName4 = cf.dimension(function (d) {
                return d["metricName4"];
            });
            var metricNameGroup4 = metricName4.group();
            var metricName5 = cf.dimension(function (d) {
                return d["metricName5"];
            });
            var metricNameGroup5 = metricName5.group();
            var metricName6 = cf.dimension(function (d) {
                return d["metricName6"];
            });
            var metricNameGroup6 = metricName6.group();

            var metricName7 = cf.dimension(function (d) {
                return d["metricName7"];
            });
            var metricNameGroup7 = metricName7.group();
            var metricName8 = cf.dimension(function (d) {
                return d["metricName8"];
            });
            var metricNameGroup8 = metricName8.group();
            var metricName9 = cf.dimension(function (d) {
                return d["metricName9"];
            });
            var metricNameGroup9 = metricName9.group();

            $("div[id^='pg" + n + "']").each(function () {
                var chartId = $(this).attr('id');
                var chartType = $(this).find("#chartType").val();
                var chartMetricId = $(this).find("#chartMetricId").val();
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

            });
        }
    });

    function createBubbleOverlayChart(chartId, cfDimension, cfGroup) {
        var hello = d3.select("#" + chartId + " svg");
        hello.attr({
            "width": "100",
            "height": "50",
            "viewBox": "0 0 50 50"
        });
        var caChart = dc.bubbleOverlay('#' + chartId)
                .svg(hello);
//    d3.csv("crime.csv", function (csv) {
//        var data = crossfilter(csv);
//
//        var cities = data.dimension(function (d) {
//            return d.city;
//        });
//        function isTotalCrimeRateRecord(v) {
//            return v.type == "Total, all violations" && v.sub_type == "Rate per 100,000 population";
//        }
//        function isViolentCrimeRateRecord(v) {
//            return v.type == "Total violent Criminal Code violations" && v.sub_type == "Rate per 100,000 population";
//        }
//
//        var totalCrimeRateByCity = cities.group().reduce(
//                function (p, v) {
//                    if (isTotalCrimeRateRecord(v)) {
//                        p.totalCrimeRecords++;
//                        p.totalCrimeRate += +v.number;
//                        p.avgTotalCrimeRate = p.totalCrimeRate / p.totalCrimeRecords;
//                    }
//                    if (isViolentCrimeRateRecord(v)) {
//                        p.violentCrimeRecords++;
//                        p.violentCrimeRate += +v.number;
//                        p.avgViolentCrimeRate = p.violentCrimeRate / p.violentCrimeRecords;
//                    }
//                    p.violentCrimeRatio = p.avgViolentCrimeRate / p.avgTotalCrimeRate * 100;
//                    return p;
//                },
//                function (p, v) {
//                    if (isTotalCrimeRateRecord(v)) {
//                        p.totalCrimeRecords--;
//                        p.totalCrimeRate -= +v.number;
//                        p.avgTotalCrimeRate = p.totalCrimeRate / p.totalCrimeRecords;
//                    }
//                    if (isViolentCrimeRateRecord(v)) {
//                        p.violentCrimeRecords--;
//                        p.violentCrimeRate -= +v.number;
//                        p.avgViolentCrimeRate = p.violentCrimeRate / p.violentCrimeRecords;
//                    }
//                    p.violentCrimeRatio = p.avgViolentCrimeRate / p.avgTotalCrimeRate * 100;
//                    return p;
//                },
//                function () {
//                    return {
//                        totalCrimeRecords: 0, totalCrimeRate: 0, avgTotalCrimeRate: 0,
//                        violentCrimeRecords: 0, violentCrimeRate: 0, avgViolentCrimeRate: 0,
//                        violentCrimeRatio: 0
//                    };
//                }
//        );
//    });
        caChart.width(100)
                .height(100)
                .dimension(cfDimension)
                .group(cfGroup)
                .radiusValueAccessor(function (p) {
                    return 10;
//                    return p.value.avgTotalCrimeRate;
                })
                .r(d3.scale.linear().domain([0, 200000]))
                .colors(["#ff7373", "#ff4040", "#ff0000", "#bf3030", "#a60000"])
                .colorDomain([13, 30])
//            .colorAccessor(function (p) {
//                return p.value.violentCrimeRatio;
//            })

                .point("Andhra Pradesh", 250, 250)
//            .point("Ottawa", 395.5, 383)
//            .point("Vancouver", 40.5, 316)
//            .point("Montreal", 417, 370)
//            .point("Edmonton", 120, 299)
//            .point("Saskatoon", 163, 322)
//            .point("Winnipeg", 229, 345)
//            .point("Calgary", 119, 329)
//            .point("Quebec", 431, 351)
//            .point("Halifax", 496, 367)
//            .point("St. John's", 553, 323)
//            .point("Yukon", 44, 176)
//            .point("Northwest Territories", 125, 195)
//            .point("Nunavut", 273, 188)
                .debug(false);
        caChart.render();
//    });
    }

    function createPieChartUsingDc(chartId, cfDimension, cfGroup) {
        var width = document.getElementById(chartId).offsetWidth;
        chart = dc.pieChart("#" + chartId);
        chart
//                .height(150)
                .width(width)
                .dimension(cfDimension)
                .group(cfGroup)
                .label(function (d) {
                    return d.key + ": " + d3.round((d.value / d3.sum(cfGroup.all(), function (d) {
                        return d.value;
                    })) * 100, 1) + "%";
                });
//                .legend(dc.legend().x(175).horizontal(false));
//        chart.filter = function () {};
        chart.render();
    }

    function createBarChartUsingDc(chartId, cfDimension, cfGroup) {
        var width = document.getElementById(chartId).offsetWidth;
        var chart = dc.rowChart("#" + chartId);
        chart
//                .height(200)
                .width(width)
                .elasticX(true)
                .dimension(cfDimension)
                .group(cfGroup)
                .xAxis().tickFormat(d3.format('.1s'));
        
//        chart.on("renderlet.a", function (chart) {
//            //Check if labels exist
//            var gLabels = chart.select(".labels");
//            if (gLabels.empty()) {
//                gLabels = chart.select(".chart-body").append('g').classed('labels', true);
//            }
//
//            var gLabelsData = gLabels.selectAll("text").data(chart.selectAll(".bar")[0]);
//
//            gLabelsData.exit().remove(); //Remove unused elements
//
//            gLabelsData.enter().append("text"); //Add new elements
//
//            gLabelsData
//                    .attr('text-anchor', 'middle')
//                    .attr('fill', 'white')
//                    .text(function (d) {
//                        return d3.select(d).data()[0].data.value
//                    })
//                    .attr('x', function (d) {
//                        return +d.getAttribute('x') + (d.getAttribute('width') / 2);
//                    })
//                    .attr('y', function (d) {
//                        return +d.getAttribute('y') + 15;
//                    })
//                    .attr('style', function (d) {
//                        if (+d.getAttribute('height') < 18)
//                            return "display:none";
//                    });
//        });
        
        chart.render();
    }

    function createDropdownUsingDc(chartId, cfDimension, cfGroup) {
        var width = document.getElementById(chartId).offsetWidth;
        var chart = dc.selectMenu("#" + chartId);
        chart
//            .height(275)
//            .width(width)
                .dimension(cfDimension)
                .group(cfGroup)
                .controlsUseVisibility(true);
        chart.render();
    }

    function createTimeseriesUsingDc(chartId, cfDimension, cfGroup) {

        var chart = dc.barChart("#" + chartId);
        chart
                .height(75)
                .width(900)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .dimension(cfDimension)
                .group(cfGroup)
                .showYAxis(false)
                .elasticY(true)
                .colors(['#303f9f']);
//                .xAxis().tickFormat(d3.format("%m"));
        chart.render();
    }

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


    function createBubbleChartUsingDc(chartId, cfDimension, cfGroup) {
        var yearlyBubbleChart = dc.bubbleChart('#' + chartId)
                .svg(d3.select("#" + chartId + " svg"));
        d3.csv('ndx.csv', function (data) {
            // Since its a csv file we need to format the data a bit.
            var dateFormat = d3.time.format('%m/%d/%Y');
            var numberFormat = d3.format('.2f');
            data.forEach(function (d) {
                d.dd = dateFormat.parse(d.date);
                d.month = d3.time.month(d.dd); // pre-calculate month for better performance
                d.close = +d.close; // coerce to number
                d.open = +d.open;
            });
            //### Create Crossfilter Dimensions and Groups

            //See the [crossfilter API](https://github.com/square/crossfilter/wiki/API-Reference) for reference.
            var ndx = crossfilter(data);
            var all = ndx.groupAll();
            // Dimension by year
            var yearlyDimension = ndx.dimension(function (d) {
                return d3.time.year(d.dd).getFullYear();
            });
            // Maintain running tallies by year as filters are applied or removed
            var yearlyPerformanceGroup = yearlyDimension.group().reduce(
                    /* callback for when data is added to the current filter results */
                            function (p, v) {
                                ++p.count;
                                p.absGain += v.close - v.open;
                                p.fluctuation += Math.abs(v.close - v.open);
                                p.sumIndex += (v.open + v.close) / 2;
                                p.avgIndex = p.sumIndex / p.count;
                                p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
                                p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
                                return p;
                            },
                            /* callback for when data is removed from the current filter results */
                                    function (p, v) {
                                        --p.count;
                                        p.absGain -= v.close - v.open;
                                        p.fluctuation -= Math.abs(v.close - v.open);
                                        p.sumIndex -= (v.open + v.close) / 2;
                                        p.avgIndex = p.count ? p.sumIndex / p.count : 0;
                                        p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
                                        p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
                                        return p;
                                    },
                                    /* initialize p */
                                            function () {
                                                return {
                                                    count: 0,
                                                    absGain: 0,
                                                    fluctuation: 0,
                                                    fluctuationPercentage: 0,
                                                    sumIndex: 0,
                                                    avgIndex: 0,
                                                    percentageGain: 0
                                                };
                                            }
                                    );
                                    // Dimension by full date
                                    var dateDimension = ndx.dimension(function (d) {
                                        return d.dd;
                                    });
                                    // Dimension by month
                                    var moveMonths = ndx.dimension(function (d) {
                                        return d.month;
                                    });
                                    // Group by total movement within month
                                    var monthlyMoveGroup = moveMonths.group().reduceSum(function (d) {
                                        return Math.abs(d.close - d.open);
                                    });
                                    // Group by total volume within move, and scale down result
                                    var volumeByMonthGroup = moveMonths.group().reduceSum(function (d) {
                                        return d.volume / 500000;
                                    });
                                    var indexAvgByMonthGroup = moveMonths.group().reduce(
                                            function (p, v) {
                                                ++p.days;
                                                p.total += (v.open + v.close) / 2;
                                                p.avg = Math.round(p.total / p.days);
                                                return p;
                                            },
                                            function (p, v) {
                                                --p.days;
                                                p.total -= (v.open + v.close) / 2;
                                                p.avg = p.days ? Math.round(p.total / p.days) : 0;
                                                return p;
                                            },
                                            function () {
                                                return {days: 0, total: 0, avg: 0};
                                            }
                                    );
                                    // Create categorical dimension
                                    var gainOrLoss = ndx.dimension(function (d) {
                                        return d.open > d.close ? 'Loss' : 'Gain';
                                    });
                                    // Produce counts records in the dimension
                                    var gainOrLossGroup = gainOrLoss.group();
                                    // Determine a histogram of percent changes
                                    var fluctuation = ndx.dimension(function (d) {
                                        return Math.round((d.close - d.open) / d.open * 100);
                                    });
                                    var fluctuationGroup = fluctuation.group();
                                    // Summarize volume by quarter
                                    var quarter = ndx.dimension(function (d) {
                                        var month = d.dd.getMonth();
                                        if (month <= 2) {
                                            return 'Q1';
                                        } else if (month > 2 && month <= 5) {
                                            return 'Q2';
                                        } else if (month > 5 && month <= 8) {
                                            return 'Q3';
                                        } else {
                                            return 'Q4';
                                        }
                                    });
                                    var quarterGroup = quarter.group().reduceSum(function (d) {
                                        return d.volume;
                                    });
                                    // Counts per weekday
                                    var dayOfWeek = ndx.dimension(function (d) {
                                        var day = d.dd.getDay();
                                        var name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                                        return day + '.' + name[day];
                                    });
                                    var dayOfWeekGroup = dayOfWeek.group();
                                    //### Define Chart Attributes
                                    // Define chart attributes using fluent methods. See the
                                    // [dc.js API Reference](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md) for more information
                                    //

                                    //#### Bubble Chart

                                    //Create a bubble chart and use the given css selector as anchor. You can also specify
                                    //an optional chart group for this chart to be scoped within. When a chart belongs
                                    //to a specific group then any interaction with the chart will only trigger redraws
                                    //on charts within the same chart group.
                                    // <br>API: [Bubble Chart](https://github.com/dc-js/dc.js/blob/master/web/docs/api-latest.md#bubble-chart)

                                    yearlyBubbleChart /* dc.bubbleChart('#yearly-bubble-chart', 'chartGroup') */
                                            // (_optional_) define chart width, `default = 200`
                                            .width(350)
                                            // (_optional_) define chart height, `default = 200`
                                            .height(250)
                                            // (_optional_) define chart transition duration, `default = 750`
                                            .transitionDuration(1500)
                                            .margins({top: 10, right: 50, bottom: 30, left: 40})
                                            .dimension(yearlyDimension)
                                            //The bubble chart expects the groups are reduced to multiple values which are used
                                            //to generate x, y, and radius for each key (bubble) in the group
                                            .group(yearlyPerformanceGroup)
                                            // (_optional_) define color function or array for bubbles: [ColorBrewer](http://colorbrewer2.org/)
//                                        .colors(colorbrewer.RdYlGn[9])
                                            //(optional) define color domain to match your data domain if you want to bind data or color
                                            .colorDomain([-500, 500])
                                            //##### Accessors

                                            //Accessor functions are applied to each value returned by the grouping

                                            // `.colorAccessor` - the returned value will be passed to the `.colors()` scale to determine a fill color
//                                        .colorAccessor(function (d) {
////                                            return 5;
//                                            return d.value.absGain;
//                                        })
                                            // `.keyAccessor` - the `X` value will be passed to the `.x()` scale to determine pixel location
                                            .keyAccessor(function (p) {
                                                return p.value.absGain;
                                            })
                                            // `.valueAccessor` - the `Y` value will be passed to the `.y()` scale to determine pixel location
                                            .valueAccessor(function (p) {
                                                return p.value.percentageGain;
                                            })
                                            // `.radiusValueAccessor` - the value will be passed to the `.r()` scale to determine radius size;
                                            //   by default this maps linearly to [0,100]
                                            .radiusValueAccessor(function (p) {
                                                return 10;
//                                            return p.value.fluctuationPercentage;
                                            })
                                            .maxBubbleRelativeSize(0.3)
                                            .x(d3.scale.linear().domain([-2500, 2500]))
                                            .y(d3.scale.linear().domain([-100, 100]))
                                            .r(d3.scale.linear().domain([0, 4000]))
                                            //##### Elastic Scaling

                                            //`.elasticY` and `.elasticX` determine whether the chart should rescale each axis to fit the data.
                                            .elasticY(true)
                                            .elasticX(true)
                                            //`.yAxisPadding` and `.xAxisPadding` add padding to data above and below their max values in the same unit
                                            //domains as the Accessors.
                                            .yAxisPadding(100)
                                            .xAxisPadding(500)
                                            // (_optional_) render horizontal grid lines, `default=false`
                                            .renderHorizontalGridLines(true)
                                            // (_optional_) render vertical grid lines, `default=false`
                                            .renderVerticalGridLines(true)
                                            // (_optional_) render an axis label below the x axis
                                            .xAxisLabel('Index Gain')
                                            // (_optional_) render a vertical axis lable left of the y axis
                                            .yAxisLabel('Index Gain %')
                                            //##### Labels and  Titles

                                            //Labels are displayed on the chart for each bubble. Titles displayed on mouseover.
                                            // (_optional_) whether chart should render labels, `default = true`
//                                        .renderLabel(true)
//                                        .label(function (p) {
//                                            return p.key;
//                                        })
                                            // (_optional_) whether chart should render titles, `default = false`
//                                        .renderTitle(true)
//                                        .title(function (p) {
//                                            return [
//                                                p.key,
//                                                'Index Gain: ' + numberFormat(p.value.absGain),
//                                                'Index Gain in Percentage: ' + numberFormat(p.value.percentageGain) + '%',
//                                                'Fluctuation / Index Ratio: ' + numberFormat(p.value.fluctuationPercentage) + '%'
//                                            ].join('\n');
//                                        })
                                            //#### Customize Axes

                                            // Set a custom tick format. Both `.yAxis()` and `.xAxis()` return an axis object,
                                            // so any additional method chaining applies to the axis, not the chart.
                                            .yAxis().tickFormat(function (v) {
                                        return v + '%';
                                    });
                                    //#### Rendering

                                    //simply call `.renderAll()` to render all charts on the page
                                    dc.renderAll();
                                    /*
                                     // Or you can render charts belonging to a specific chart group
                                     dc.renderAll('group');
                                     // Once rendered you can call `.redrawAll()` to update charts incrementally when the data
                                     // changes, without re-rendering everything
                                     dc.redrawAll();
                                     // Or you can choose to redraw only those charts associated with a specific chart group
                                     dc.redrawAll('group');
                                     */

                                });
                    }

//        function createBubbleOverlayChart(chartId) {
//            var yearlyBubbleChart = dc.bubbleOverlay('#pg1_chart1')
//                    .svg(d3.select("#pg1_chart1 svg"));
//            d3.csv('ndx.csv', function (data) {
//                // Since its a csv file we need to format the data a bit.
//                var dateFormat = d3.time.format('%m/%d/%Y');
//                var numberFormat = d3.format('.2f');
//
//                data.forEach(function (d) {
//                    d.dd = dateFormat.parse(d.date);
//                    d.month = d3.time.month(d.dd); // pre-calculate month for better performance
//                    d.close = +d.close; // coerce to number
//                    d.open = +d.open;
//                });
//                var ndx = crossfilter(data);
//                var all = ndx.groupAll();
//
//                // Dimension by year
//                var yearlyDimension = ndx.dimension(function (d) {
//                    return d3.time.year(d.dd).getFullYear();
//                });
//                // Maintain running tallies by year as filters are applied or removed
//                var yearlyPerformanceGroup = yearlyDimension.group().reduce(
//                        /* callback for when data is added to the current filter results */
//                                function (p, v) {
//                                    ++p.count;
//                                    p.absGain += v.close - v.open;
//                                    p.fluctuation += Math.abs(v.close - v.open);
//                                    p.sumIndex += (v.open + v.close) / 2;
//                                    p.avgIndex = p.sumIndex / p.count;
//                                    p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
//                                    p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
//                                    return p;
//                                },
//                                /* callback for when data is removed from the current filter results */
//                                        function (p, v) {
//                                            --p.count;
//                                            p.absGain -= v.close - v.open;
//                                            p.fluctuation -= Math.abs(v.close - v.open);
//                                            p.sumIndex -= (v.open + v.close) / 2;
//                                            p.avgIndex = p.count ? p.sumIndex / p.count : 0;
//                                            p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
//                                            p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
//                                            return p;
//                                        },
//                                        /* initialize p */
//                                                function () {
//                                                    return {
//                                                        count: 0,
//                                                        absGain: 0,
//                                                        fluctuation: 0,
//                                                        fluctuationPercentage: 0,
//                                                        sumIndex: 0,
//                                                        avgIndex: 0,
//                                                        percentageGain: 0
//                                                    };
//                                                }
//                                        );
//                                        yearlyBubbleChart.width(350)
//                                                .height(250)
//                                                .dimension(yearlyDimension)
//                                                .group(yearlyPerformanceGroup)
//                                                .radiusValueAccessor(function (p) {
//                                                    return 10
////                                return p.value.avgTotalCrimeRate;
//                                                })
//                                                .r(d3.scale.linear().domain([0, 200000]))
////                                                .colors(["#ff7373", "#ff4040", "#ff0000", "#bf3030", "#a60000"])
////                                                .colorDomain([13, 30])
////                            .colorAccessor(function (p) {
////                                return p.value.violentCrimeRatio;
////                            })
////                            .title(function (d) {
////                                return "City: " + d.key
////                                        + "\nTotal crime per 100k population: " + numberFormat(d.value.avgTotalCrimeRate)
////                                        + "\nViolent crime per 100k population: " + numberFormat(d.value.avgViolentCrimeRate)
////                                        + "\nViolent/Total crime ratio: " + numberFormat(d.value.violentCrimeRatio) + "%";
////                            })
//                                                .point("Toronto", 500, 400)
//                                                .point("Ottawa", 395.5, 383)
//                                                .point("Vancouver", 40.5, 316)
//                                                .point("Montreal", 417, 370)
//                                                .point("Edmonton", 120, 299)
//                                                .point("Saskatoon", 163, 322)
//                                                .point("Winnipeg", 229, 345)
//                                                .point("Calgary", 119, 329)
//                                                .point("Quebec", 431, 351)
//                                                .point("Halifax", 496, 367)
//                                                .point("St. John's", 553, 323)
//                                                .point("Yukon", 44, 176)
//                                                .point("Northwest Territories", 125, 195)
//                                                .point("Nunavut", 273, 188)
//                                                .debug(false);
//                                        yearlyBubbleChart.render();
//                                    });
//                        }



//OLD MAP CHART
//function createBubbleOverlayChart(chartId, cfDimension, cfGroup) {
//    var caChart = dc.bubbleOverlay('#' + chartId)
//            .svg(d3.select("#" + chartId + " svg"));
//
//    d3.csv("crime.csv", function (csv) {
//        var data = crossfilter(csv);
//
//        var cities = data.dimension(function (d) {
//            return d.city;
//        });
//        function isTotalCrimeRateRecord(v) {
//            return v.type == "Total, all violations" && v.sub_type == "Rate per 100,000 population";
//        }
//        function isViolentCrimeRateRecord(v) {
//            return v.type == "Total violent Criminal Code violations" && v.sub_type == "Rate per 100,000 population";
//        }
//
//        var totalCrimeRateByCity = cities.group().reduce(
//                function (p, v) {
//                    if (isTotalCrimeRateRecord(v)) {
//                        p.totalCrimeRecords++;
//                        p.totalCrimeRate += +v.number;
//                        p.avgTotalCrimeRate = p.totalCrimeRate / p.totalCrimeRecords;
//                    }
//                    if (isViolentCrimeRateRecord(v)) {
//                        p.violentCrimeRecords++;
//                        p.violentCrimeRate += +v.number;
//                        p.avgViolentCrimeRate = p.violentCrimeRate / p.violentCrimeRecords;
//                    }
//                    p.violentCrimeRatio = p.avgViolentCrimeRate / p.avgTotalCrimeRate * 100;
//                    return p;
//                },
//                function (p, v) {
//                    if (isTotalCrimeRateRecord(v)) {
//                        p.totalCrimeRecords--;
//                        p.totalCrimeRate -= +v.number;
//                        p.avgTotalCrimeRate = p.totalCrimeRate / p.totalCrimeRecords;
//                    }
//                    if (isViolentCrimeRateRecord(v)) {
//                        p.violentCrimeRecords--;
//                        p.violentCrimeRate -= +v.number;
//                        p.avgViolentCrimeRate = p.violentCrimeRate / p.violentCrimeRecords;
//                    }
//                    p.violentCrimeRatio = p.avgViolentCrimeRate / p.avgTotalCrimeRate * 100;
//                    return p;
//                },
//                function () {
//                    return {
//                        totalCrimeRecords: 0, totalCrimeRate: 0, avgTotalCrimeRate: 0,
//                        violentCrimeRecords: 0, violentCrimeRate: 0, avgViolentCrimeRate: 0,
//                        violentCrimeRatio: 0
//                    };
//                }
//        );
//        caChart.width(900)
//                .height(900)
//                .dimension(cities)
//                .group(totalCrimeRateByCity)
//                .radiusValueAccessor(function (p) {
//                    return p.value.avgTotalCrimeRate;
//                })
//                .r(d3.scale.linear().domain([0, 200000]))
//                .colors(["#ff7373", "#ff4040", "#ff0000", "#bf3030", "#a60000"])
//                .colorDomain([13, 30])
//                .colorAccessor(function (p) {
//                    return p.value.violentCrimeRatio;
//                })
//
//                .point("Toronto", 500, 400)
//                .point("Ottawa", 395.5, 383)
//                .point("Vancouver", 40.5, 316)
//                .point("Montreal", 417, 370)
//                .point("Edmonton", 120, 299)
//                .point("Saskatoon", 163, 322)
//                .point("Winnipeg", 229, 345)
//                .point("Calgary", 119, 329)
//                .point("Quebec", 431, 351)
//                .point("Halifax", 496, 367)
//                .point("St. John's", 553, 323)
//                .point("Yukon", 44, 176)
//                .point("Northwest Territories", 125, 195)
//                .point("Nunavut", 273, 188)
//                .debug(false);
//
//        caChart.render();
//    });

            $("#tab1-panel").trigger('click');
        });