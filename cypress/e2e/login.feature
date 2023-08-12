Feature: Login Feature

    Feature This feature is required for a user to login to the system.

    Scenario: Success Login
    Given A user opens the page
    When A user enter the username "standard_user"
    And A user enter the password "secret_sauce"
    And User clicks on the login button
    Then A user will be logged in
