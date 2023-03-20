var mute = false;
function updateMass(){
    var click = new Audio("Click.wav");
    if(mute == false){
        click.play();
    }
    var compound = document.getElementById("input").value;
    var color = document.getElementById("mode").innerHTML;
    mass = molarMass(compound);
    document.getElementById("output").innerHTML = mass + " g/mol";
    if(color == "Dark Mode"){
    document.getElementById("output").style.color = "black";
    }else{
    document.getElementById("output").style.color = "white";
    }
}
function molarMass(compound){
    var divide = [];
    var id = [];
    var temp = ""
    var mass = 0;
    var tempMass = "";
    for(var i = 0; i < compound.length; i++){
        var char = compound.substring(i, i+1);
        if(char == "("){
            divide.push(temp);
            temp = "";
            id.push(1);
        }
        if(char == ")"){
            temp = temp + compound.substring(i, i+2);
            divide.push(temp);
            temp = "";
            i = i + 1;
            id.push(2);
        }
        temp = temp + char;
        if(char == ")"){
            temp = "";
        }
    }
    if(temp != ""){
        id.push(1);
        divide.push(temp);
    }
    console.log(divide);
    console.log(id);
    for(var e = 0; e < divide.length; e++){
        if(id[e] == 1){
            mass = mass + breakdown(divide[e]);
        }else{
            mass = mass + (breakdown(divide[e].substring(1, divide[e].length -2)) * divide[e].substring(divide[e].length -1, divide[e].length));
        }
    }
    mass = Math.round(mass * 10000000)/10000000;
    return mass;
}
function breakdown(compound){
    var massList = [1.00794, 4.002602, 6.941, 9.1021831, 10.811, 12.0107, 14.00674, 15.9994, 18.9984032, 20.1797, 22.9897693, 24.305, 26.9815385, 28.0855, 30.973762, 32.066, 35.4527, 39.948, 39.0983, 40.078, 44.955908, 47.867, 50.9415, 51.9961, 54.938044, 55.845, 58.933194, 58.6934, 63.546, 65.38, 69.723, 72.63, 74.921595, 78.971, 79.904, 83.798, 85.4678, 87.62, 88.90584, 91.224, 92.90637, 95.95, 98, 101.07, 102.9055, 106.42, 107.8682, 112.414, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.905452, 137.327, 138.90547, 140.116, 140.90766, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5, 164.93033, 167.259, 168.93422, 173.045, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966569, 200.592, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 232.0377, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 263, 268, 271, 270, 270, 278, 281, 281, 285, 286, 289, 289, 293, 294, 294];
    var symbolList = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
    var element= [];
    var subscript= [];
    var sub = "";
    var sub2 = "";
    var mass = 0;
    for(var i = 0; i < compound.length; i++){
        var letter = compound.substring(i, i+1);
        if((letter == letter.toLowerCase() || !isNaN(letter)) || i == 0){
            sub = sub + letter;
        } else {
            element.push(sub);
            sub = letter;
        }
    }
    element.push(sub);
    sub = "";
    for(var a = 0; a < element.length; a++){
        for(var e = 0; e < element[a].length; e ++){
            letter = element[a].substring(e, e+1);
            if(isNaN(letter)){
                sub = sub + letter;
            }else{
                sub2 = sub2 + letter;
            }
        }
        if(sub2 == ""){
            sub2 = 1;
        }
        element.splice(a, 1, sub);
        subscript.push(sub2);
        sub = "";
        sub2 = "";
    }
    for(var o = 0; o < element.length; o++){
        for(var u = 0; u < massList.length; u++){
            if(element[o] == symbolList[u]){
                sub = massList[u];
            }
        }
        sub = sub * subscript[o];
        mass = mass + sub;
    }
    return mass;
}
function modeSwitch(){
    var lightClick = new Audio("lightClick.wav");
    var darkClick = new Audio("darkClick.wav");
    var color = document.getElementById("mode").innerHTML;
    if(color == "Dark Mode"){
        if(mute == false){
            darkClick.play();
        }
        document.body.style.backgroundColor = "black";
        document.getElementById("header").style.color = "white";
        document.getElementById("calculateButton").style.color = "white";
        document.getElementById("output").style.color = "white";
        document.getElementById("mode").style.color = "white";
        document.getElementById("input").style.color = "white";
        document.getElementById("calculateButton").style.backgroundColor = "black";
        document.getElementById("mode").style.backgroundColor = "black";
        document.getElementById("volume").style.backgroundColor = "black";
        document.getElementById("input").style.borderColor = "white";
        document.getElementById("calculateButton").style.borderColor = "white";
        document.getElementById("input").style.borderColor = "white";
        document.getElementById("mode").style.borderColor = "white";
        document.getElementById("volume").style.borderColor = "white";
        document.getElementById("mode").innerHTML = "Light Mode";
        document.getElementById("input").style.backgroundColor = "rgb(30,30,30)";
        if(mute == false){
            document.getElementById("volume").src = "SpeakerInvert.png";
        }else{
            document.getElementById("volume").src = "MuteInvert.png";
        }
    }
    if(color == "Light Mode"){
        if(mute == false){
            lightClick.play();
        }
        document.body.style.backgroundColor = "white";
        document.getElementById("header").style.color = "black";
        document.getElementById("calculateButton").style.color = "black";
        document.getElementById("output").style.color = "black";
        document.getElementById("mode").style.color = "black";
        document.getElementById("calculateButton").style.backgroundColor = "white";
        document.getElementById("mode").style.backgroundColor = "white";
        document.getElementById("volume").style.backgroundColor = "white";
        document.getElementById("input").style.borderColor = "black"
        document.getElementById("calculateButton").style.borderColor = "black"
        document.getElementById("input").style.borderColor = "black"
        document.getElementById("mode").style.borderColor = "black"
        document.getElementById("volume").style.borderColor = "black"
        document.getElementById("mode").innerHTML = "Dark Mode";
        document.getElementById("input").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("input").style.color = "black";
        if(mute == false){
            document.getElementById("volume").src = "Speaker.png";
        }else{
            document.getElementById("volume").src = "Mute.png";
        }
        }
}
function volume(){
    if(document.getElementById("mode").innerHTML == "Dark Mode"){
        if(mute == false){
            document.getElementById("volume").src = "Mute.png";
            mute = true;
        }else{
            document.getElementById("volume").src = "Speaker.png";
            mute = false;
        }
    }else{
        if(mute == false){
            document.getElementById("volume").src = "MuteInvert.png";
            mute = true;
        }else{
            document.getElementById("volume").src = "SpeakerInvert.png";
            mute = false;
        }
    }
}