var jArray = $('#rawData1').val();
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

$(document).ready(function () {
//    $("body").css('visibility', 'visible');
    $("div[id^='pg']").each(function () {
        var chartId = $(this).attr('id');
        var chartType = $(this).find("#chartType").val();
        var chartMetricId = $(this).find("#chartMetricId").val();
        if (chartType === "Map") {

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

            }
        }

    });
});

function createPieChartUsingDc(chartId, cfDimension, cfGroup) {

    var chart = dc.pieChart("#" + chartId);
    chart
            .height(275)
            .width(275)
            .dimension(cfDimension)
            .group(cfGroup)
            .legend(dc.legend());
    chart.render();
}

function createBarChartUsingDc(chartId, cfDimension, cfGroup) {
    var chart = dc.barChart("#" + chartId);
    chart
            .height(275)
            .width(275)
            .dimension(cfDimension)
            .group(cfGroup)
            .legend(dc.legend())
            .elasticX(true)
            .controlsUseVisibility(true);
    chart.render();
}

function createPieChart(pieChartId) {
    var width = 350,
            height = 350,
            radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
            .range(['#303F9F', '#1976D2', '#0288D1', '#0097A7', '#00796B', '#388E3C', '#689F38', '#AFB42B', '#FBC02D', '#FFA000', '#F57C00', '#E64A19', '#d32f2f', '#C2185B', '#7B1FA2', '#512DA8']);

    var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

    var labelArc = d3.svg.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);

    var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) {
                return d.Count;
            });

    var svg = d3.select(pieChartId).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.csv("practise_data_processed.csv", type, function (error, data) {
        if (error)
            throw error;

        var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");

        g.append("path")
                .attr("d", arc)
                .style("fill", function (d) {
                    return color(d.data.Count);
                });

        g.append("text")
                .attr("transform", function (d) {
                    return "translate(" + labelArc.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .text(function (d) {
                    return d.data.Count;
                });
    });

    function type(d) {
        d.Count = +d.Count;
        return d;
    }
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