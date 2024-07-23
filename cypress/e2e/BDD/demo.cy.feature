Feature:DemoWebShop

Scenario: Login
    Given the page is launched
    When entering credentials
        |email|password|
        |johndoe271@gmail.com|San@123|
    Then home page is displayed