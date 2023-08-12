Feature: Login Feature

    Feature This feature is required for a user to login to the system.

    Scenario: Success Login
    Given A user opens the page
    When a user enter the username "standard_user"
    And a user enter the password "secret_sauce"
    And user clicks on the login button
    Then a user will be logged in
