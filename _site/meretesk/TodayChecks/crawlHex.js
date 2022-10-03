var duration;
const travelBtn = document.querySelector('#travelBtn');        
const radioButtons = document.querySelectorAll('input[name="environment"]');
travelBtn.addEventListener("click", () => {
    let selectedEnviro;
    let enviroType;
    const encounter = Math.random() < 0.126 ? true : false;
    const keyedHex = Math.random() > 0.5 ? true : false;
    var encounterArray = [];
    var travelEntry;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedEnviro = radioButton.value;
            enviroType = radioButton.id;
            if (enviroType.indexOf('_mts') !== -1) {
            	duration = '8';
            }
            else if (enviroType.indexOf('_slow') !== -1) {
            	duration = '3';
            }            
            else if (enviroType.indexOf("_fast") !== -1 ) {
            	duration = '1.5';
            }
            else if (enviroType.indexOf("_vfast") !== -1) {
            	duration = '1';
            }
            else {
            	duration = '2';
            }
        }
    }
    travelEntry = selectedEnviro ? `You traveled 6 miles through the ${selectedEnviro} for ` + duration + " hour(s). " : `You haven't selected any type of terrain`;
    if (encounter == true) {
    	if (selectedEnviro == "River, upriver," || selectedEnviro == "River, downriver," || selectedEnviro == "countryside, by road," || selectedEnviro == "Plains, on foot," || selectedEnviro == "Plains, mounted,") {
    		encounterArray = Plains;
    	}
    	else if (selectedEnviro == "Foothills") {
    		encounterArray = Foothills;
    	}
    	else if (selectedEnviro == "Snarlwood") {
    		encounterArray = Snarlwood;
    	}
        else if (selectedEnviro == "Swamp") {
            encounterArray = Swamp;
        }
        else if (selectedEnviro == "Coast") {
            encounterArray = Coast;
        }
        else if (selectedEnviro == "Giants Reach") {
            encounterArray = GiantsReach;
        }
        else if (selectedEnviro == "Glass and Silver Mountains") {
            encounterArray = GlassSilverMtns;
        }
        else if (selectedEnviro == "Golden Gulf, in bad conditions," 
            || selectedEnviro == "Golden Gulf, in good conditions,") {
            encounterArray = GoldenGulf;
        }
        else if (selectedEnviro == "Godsbody Mountains") {
            encounterArray = Godsbody;
        }
        else if (selectedEnviro == "Taruna Woods") {
            encounterArray = TarunaWoods;
        }
        else if (selectedEnviro == "Taruna Lake") {
            encounterArray = TarunaLake;
        }
        else if (selectedEnviro == "Western Marches") {
            encounterArray = WestMarches;
        }
        else if (selectedEnviro == "Maramoor Woods") {
            encounterArray = MaramoorWoods;
        }        
        else if (selectedEnviro == "Salt Flats") {
            encounterArray = SaltFlats;
        }
        else if (selectedEnviro == "Maramoor Mountains") {
            encounterArray = MaramoorMtns;
        }
		var encounterSitch = encounterArray[Math.floor(Math.random()*encounterArray.length)];
        var vibeAct = vibeActivity[Math.floor(Math.random()*vibeActivity.length)];
        var vibeComp = vibeComplication[Math.floor(Math.random()*vibeComplication.length)];
        if (vibeComp == 'interacting with ') {
            vibeComp = 'interacting with ' + encounterArray[Math.floor(Math.random()*encounterArray.length)];
        }
		travelEntry += " You encounter " + encounterSitch + ". They are " + vibeAct + " and are also " + vibeComp + ".";
    }
    if (keyedHex == true) {
        travelEntry += " If there is a keyed location here, it is found.";
    }
    
    console.log(travelEntry);
    var newList = document.getElementById("travelog").appendChild(document.createElement('li'));
    newList.innerText = travelEntry;
});