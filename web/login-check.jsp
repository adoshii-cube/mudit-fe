<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="org.icube.login.Login"%>
<%@page import="org.icube.login.User"%>

<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    if (username != null && !username.equals("") && password != null && !password.equals("")) {
        Login login = new Login();
        try {
            User user = login.login(username, password);
            System.out.println("user validated");
            session.setAttribute("username", user.getUserName());
            session.setAttribute("role", user.getRoleId());
            if (user.getRoleId() == 1) {
                response.sendRedirect("hiring");
            } else {
                response.sendRedirect("index");
            }
        } catch (Exception ex) {
            ex.printStackTrace();

        }
    } else {
        response.sendRedirect("index");
    }
%>
