Feature: Test site Logic.by

	Scenario: Test authorization page
		Given I am on "auth" page
		Then title should be "Вход в личный кабинет"
		When I submit login form with email "glar4ik@gmail.com" and password "real82"
		Then User page should be displayed	
		

	Scenario: Test rating page
		Given I am on "rating" page
		Then title should be "Рейтинг учеников центра развития логического мышления"
		Then I set filters
		Then I should see a list of pupils


	Scenario: Test user page
		Given I am on "home" page
		Then title should be "Центр развития логики и решения логических задач в Минске."
		Then the main logo should be visible
		When I open login form
		When I submit login form with email "glar4ik@gmail.com" and password "real82"
		Then User page should be displayed
		Then I choose logic game 
		Then I start game
		Then I return on previous page
		Then I logout from user page
		Then authorization page should be displayed
		


	



	