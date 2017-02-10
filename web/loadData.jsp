<%-- 
    Document   : loadData
    Created on : 9 Feb, 2017, 2:46:19 PM
    Author     : rashmi
--%>

<%@page import="org.icube.chart.Chart"%>
<%@page import="org.json.JSONArray"%>
<%@page import="org.icube.chart.ChartHelper"%>
<%@page import="org.icube.metric.Metric"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--<html>-->
<!--    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>-->
    <!--<body>-->
        <script>debugger;</script>
        <%
            int questionId = Integer.parseInt(request.getParameter("questionId"));
        %>
        <div class="mdl-tabs__panel" id="tab<%=questionId%>-panel"> 

        <div class="android-card-container">
            <%
                System.out.print("calling the loaddata.jsp");
                ChartHelper ch = new ChartHelper();
                List<Metric> rawData = ch.getChartDataForPage(questionId);
                JSONArray rawDataInJSON = new JSONArray(rawData);
                String rawDataJSONArray = rawDataInJSON.toString();
                List<Chart> chartList = ch.getChartMapping(questionId);

                for (int j = 0; j < chartList.size(); j++) {
                    Chart chart = chartList.get(j);
                    String chartType = chart.getChartType();
                    String className = "";
                    if (chartType.equals("Map")) {
                        className = "mdl-chart__map mdl-cell--4-col";
                    } else if (chartType.equals("Pie")) {
                        className = "mdl-chart__pie mdl-cell--4-col";
                    } else if (chartType.equals("Bar")) {
                        className = "mdl-chart__bar mdl-cell--4-col";
                    } else if (chartType.equals("Dropdown")) {
                        className = "mdl-chart__dropdown mdl-cell--4-col";
                    } else if (chartType.equals("Timeseries")) {
                        className = "mdl-chart__timeseries mdl-cell--12-col";
                    }
            %>
            <div class="mdl-cell mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp <%=className%>" id="pg<%=questionId%>_chart<%=chart.getChartId()%>">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text"><%=chart.getChartTitle()%></h2>
                </div>
                <input type="hidden" id="chartType" value='<%=chart.getChartType()%>'/>
                <input type="hidden" id="chartMetricId" value='<%=chart.getMetricId()%>'/>
                <input type="hidden" id="pageNumber" value='<%=questionId%>'/>
            </div>
            <%}%>
        </div>
        </div>
        <input type="hidden" id="rawData<%=questionId%>" value='<%=rawDataJSONArray%>'/>  
        <!--<script src="js/dalela.js"></script>-->
    <!--</body>-->

<!--</html>-->
