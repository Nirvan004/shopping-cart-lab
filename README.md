Reflection Questions
How did you dynamically create and append new elements to the DOM?
What steps did you take to ensure accurate updates to the total price?
How did you handle invalid input for product name or price?
What challenges did you face when implementing the remove functionality?
1. I used the <li> element whenever a new product was added so it would create a new cart item when the add button was clicked making sure to validate every input so it wouldnt break any part of the website. Then I added a appended that list item using cart.appendchild which would make sure to show it as the next item on the shopping cart website.
2. I used the dedicated update total price function as keeping it as a seperate function made sure that the inputs wouldnt cross over and break anything in the add item function, this also kept the code readable and helped with faster bug fixing as if the add item function wasnt working, I wasnt also trouble shooting the price not working and vice versa.
3. I validated inputs to insure that the product name and price were correct and could be used in the rest of the code like price being a positive number, etc.
4. item.remove() worked initially but I wanted to make sure that edge cases for the remove function existed incase anything were to break or people could remove things that werent actually in the list or anything like that. This insured that the cart wouldnt break. additionally I made sure that the cart total would rerun after each removal so the removal of an item would translate into the correct price being displayed. 
