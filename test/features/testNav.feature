Feature: Use de Navigation bar

  In this application, the navigation bar is an important feature, so it has to redirect to the correct links
  and not be seen for not logged in users.

  Scenario: Enter to the TimeLine page
  Scenario: Not be seen in the login page
    When rendering <LoginComponent>
    Then <NavBar> is not there

