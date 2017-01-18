$(document).ready(function () {

    
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
        $("div[id^='pg"+n+"']").each(function () {
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
    }

//    $("body").css('visibility', 'visible');
$("#scroll-tab-1").addClass("is-active");
});


function createPieChartUsingDc(chartId, cfDimension, cfGroup) {
    var width = document.getElementById(chartId).offsetWidth;
    chart = dc.pieChart("#" + chartId);
    chart
            .height(275)
            .width(width)
            .dimension(cfDimension)
//            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .group(cfGroup)
            .legend(dc.legend().horizontal(true));
    chart.render();
}

function createBarChartUsingDc(chartId, cfDimension, cfGroup) {
    var width = document.getElementById(chartId).offsetWidth;
    var chart = dc.rowChart("#" + chartId);
    chart
            .height(275)
            .width(width)
            .dimension(cfDimension)
            .group(cfGroup)
            .legend(dc.legend())
//            .elasticX(true)
//            .controlsUseVisibility(true);
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
