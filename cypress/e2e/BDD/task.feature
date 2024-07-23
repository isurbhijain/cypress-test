Feature:Amazon Test

Scenario: Add product
    Given launch the website
    When search for product
    And select the product
    And Add to cart
    Then assert the product 
    And change language