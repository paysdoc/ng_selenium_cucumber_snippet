#language:en

Feature: Basic homepage test

  @Test
  Scenario: Homepage starts up
    Given a running app on port 4200
    When I navigate to the homepage
    Then I should see a page containing 'Welcome to Test!'
