@feature-tag
Feature: The D3a Assignment

Background: 
    Given User is on D3a login page
    When User enters username as "testd3aio@gmail.com"  
    And  User enters password as "Quality@123" 
    And User click on Log in button

Scenario: Verification of user is able to login to d3a.io
    Then I verify that D3a home page is displayed


Scenario: Verification of user is able to create project after login
    Given User is on D3a projects page
    When User clicks on New project button
    And User creates a project
    And User click on Add button
    Then User verify that project is created

Scenario: Verification of user is able to simulation to project
    Given User is on D3a projects page
    When User is on D3a projects page
    When User clicks on project to expand
    And User clicks on New simulation button
    Then user verifies default configuration
    When User clicks on Next button
    Then User verifies Modeling screen is displayed
    When User is on D3a projects page
    And User clicks on project to expand
    Then User verify simulation is added under project

