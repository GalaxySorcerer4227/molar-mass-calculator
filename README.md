Link to website: https://galaxysorcerer4227.github.io/molar-mass-calculator/

This website calculates the molar mass of chemical compounds by parsing them as strings. First, the compound is divided into elements and polyatomic ions, which are stored in a string. Then, each index is put in a seperate function where the molar mass is calculated. If the index is an element, then the function parses out any subscripts, and goes through arrays listing every eement and molar mass, outputting the mass multiplied by the subscript. If the index is polyatomic, the ions are further broken down into elements and subscripts before calculating the mass, and are multiplied by another subscript if applicable.

Example Input: "Mg3(PO4)2" <br><br>
Breaking down compound: <br> 
divide = ["Mg3", "(PO4)2"] <br><br>
Calculating molar mass of Mg3: <br>
element = ["Mg"] <br>
subscript = ["3"] <br>
mass = Mg mass * 3<br>
return mass<br><br>
Calculating molar mass of PO4:<br>
element = ["P", "O"]<br>
subscript = ["1", "4"]<br>
mass = (P mass * 1) + (O mass * 4)<br>
Returns mass<br><br>
Calculating total molar mass:<br>
mass = Mg3 mass + (PO4 mass * 2)<br>
return mass
