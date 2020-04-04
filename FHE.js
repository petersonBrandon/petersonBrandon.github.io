var famiInfo;
var openHymn;
var openP;
var less;
var closHymn;
var closPrayer;

function familyHomeEvening(famiInfo, openHymn, openP, less, closHymn, closPrayer){
    this.famiInfo   = famiInfo;
    this.openHymn   = openHymn;
    this.openP      = openP;
    this.less       = less;
    this.closHymn   = closHymn;
    this.closPrayer = closPrayer;
}

function loadIntro(){
    console.log("working");

    var firstSec = document.getElementById("firstSec");
    var firstBack = document.getElementById("firstBack");
    var startBtn = document.getElementById("startBtn");

    firstSec.className = "firstSecOn";
    firstBack.className = "firstBackOn";
    startBtn.className = "startBtnOn";
}

function goToNext(num){

    // Page 1
    var familyInfo     = document.getElementById("familyInfo");
    var famInfo        = document.getElementById("famInfo");
    var fameName       = document.getElementById("famName");
    var famInfoBtn1    = document.getElementById("famInfoBtn1");
    var famInfoBtn2    = document.getElementById("famInfoBtn2");

    // Page 2
    var openingHymn    = document.getElementById("openingHymn");
    var oHymnInfo      = document.getElementById("oHymnInfo");
    var oHymn          = document.getElementById("oHymn");
    var oHymnInfoBtn1  = document.getElementById("oHymnInfoBtn1");
    var oHymnInfoBtn2  = document.getElementById("oHymnInfoBtn2");

    // Page 3
    var openingPrayer  = document.getElementById("openingPrayer");
    var oPrayerInfo    = document.getElementById("oPrayerInfo");
    var oPrayer        = document.getElementById("oPrayer");
    var oPrayerInfoBtn1= document.getElementById("oPrayerInfoBtn1");
    var oPrayerInfoBtn2= document.getElementById("oPrayerInfoBtn2");

    // Page 4
    var lesson         = document.getElementById("lesson");
    var lessonInfo     = document.getElementById("lessonInfo");
    var lessonP        = document.getElementById("lessonP");
    var lessonInfoBtn1 = document.getElementById("lessonInfoBtn1");
    var lessonInfoBtn2 = document.getElementById("lessonInfoBtn2");

    // Page 5
    var closingHymn    = document.getElementById("closingHymn");
    var cHymnInfo      = document.getElementById("cHymnInfo");
    var cHymn          = document.getElementById("cHymn");
    var cHymnInfoBtn1  = document.getElementById("cHymnInfoBtn1");
    var cHymnInfoBtn2  = document.getElementById("cHymnInfoBtn2");

    // Page 6
    var closingPrayer  = document.getElementById("closingPrayer");
    var cPrayerInfo    = document.getElementById("cPrayerInfo");
    var cPrayer        = document.getElementById("cPrayer");
    var cPrayerInfoBtn1= document.getElementById("cPrayerInfoBtn1");
    var cPrayerInfoBtn2= document.getElementById("cPrayerInfoBtn2");

    // Page 7
    var final           = document.getElementById("final");
    var finalInfo       = document.getElementById("finalInfo");
    var finalP          = document.getElementById("finalP");


    switch(num){
        case 0: // Start Page
            {
                // (1) Family Page OFF
                familyInfo.className    = "familyInfoOff";
                famInfo.className       = "infoOff";
                fameName.className      = "famNameOff";
                famInfoBtn1.className   = "famInfoBtnOff";
                famInfoBtn2.className   = "famInfoBtnOff";

                // (0) First Page ON
                firstSec.className      = "firstSecOn";
                firstBack.className     = "firstBackOn";
                startBtn.className      = "startBtnOn";
                break;
            }
        
        case 1: //Family Info Page
            {
                // (0) First Page OFF
                firstSec.className      = "firstSecOff";
                firstBack.className     = "firstBackOff";
                startBtn.className      = "startBtnOff";

                // (2) Opening Hymn Page OFF
                openingHymn.className   = "openingHymnOff";
                oHymnInfo.className     = "oHymnInfoOff";
                oHymn.className         = "oHymnOff";
                oHymnInfoBtn1.className = "oHymnInfoBtnOff";
                oHymnInfoBtn2.className = "oHymnInfoBtnOff";

                // (1) Family Page ON
                familyInfo.className    = "familyInfoOn";
                famInfo.className       = "famInfoOn";
                fameName.className      = "famNameOn";
                famInfoBtn1.className   = "famInfoBtnOn";
                famInfoBtn2.className   = "famInfoBtnOn";

                break;
            }

        case 2: // Opening Hymn Page
            {
                // (1) Family Page OFF
                familyInfo.className    = "familyInfoOff";
                famInfo.className       = "famInfoOff";
                fameName.className      = "famNameOff";
                famInfoBtn1.className   = "famInfoBtnOff";
                famInfoBtn2.className   = "famInfoBtnOff";

                // (3) Opening Prayer Page OFF
                openingPrayer.className   = "openingPrayerOff";
                oPrayerInfo.className     = "oPrayerInfoOff";
                oPrayer.className         = "oPrayerOff";
                oPrayerInfoBtn1.className = "oPrayerInfoBtnOff";
                oPrayerInfoBtn2.className = "oPrayerInfoBtnOff";

                // (2) Opening Hymn Page ON
                openingHymn.className   = "openingHymnOn";
                oHymnInfo.className     = "oHymnInfoOn";
                oHymn.className         = "oHymnOn";
                oHymnInfoBtn1.className = "oHymnInfoBtnOn";
                oHymnInfoBtn2.className = "oHymnInfoBtnOn";

                //Save Family Info
                famiInfo = document.getElementById("fI").value;
                break;
            }

        case 3:
            {
                // (2) Opening Hymn Page OFF
                openingHymn.className   = "openingHymnOff";
                oHymnInfo.className     = "oHymnInfoOff";
                oHymn.className         = "oHymnOff";
                oHymnInfoBtn1.className = "oHymnInfoBtnOff";
                oHymnInfoBtn2.className = "oHymnInfoBtnOff";

                // (4) Lesson Page OFF
                lesson.className          = "lessonOff";
                lessonInfo.className      = "lessonInfoOff";
                lessonP.className         = "lessonPOff";
                lessonInfoBtn1.className  = "lessonInfoBtnOff";
                lessonInfoBtn2.className  = "lessonInfoBtnOff";

                // (3) Opening Prayer Page ON
                openingPrayer.className   = "openingPrayerOn";
                oPrayerInfo.className     = "oPrayerInfoOn";
                oPrayer.className         = "oPrayerOn";
                oPrayerInfoBtn1.className = "oPrayerInfoBtnOn";
                oPrayerInfoBtn2.className = "oPrayerInfoBtnOn";

                //Save Hymn Info
                openHymn = document.getElementById("oH").value;
                break;
            }

        case 4:
            {
                // (3) Opening Prayer Page OFF
                openingPrayer.className   = "openingPrayerOff";
                oPrayerInfo.className     = "oPrayerInfoOff";
                oPrayer.className         = "oPrayerOff";
                oPrayerInfoBtn1.className = "oPrayerInfoBtnOff";
                oPrayerInfoBtn2.className = "oPrayerInfoBtnOff";

                // (5) Opening Hymn Page OFF
                closingHymn.className   = "closingHymnOff";
                cHymnInfo.className     = "cHymnInfoOff";
                cHymn.className         = "cHymnOff";
                cHymnInfoBtn1.className = "cHymnInfoBtnOff";
                cHymnInfoBtn2.className = "cHymnInfoBtnOff";

                // (4) Lesson Page ON
                lesson.className          = "lessonOn";
                lessonInfo.className      = "lessonInfoOn";
                lessonP.className         = "lessonPOn";
                lessonInfoBtn1.className  = "lessonInfoBtnOn";
                lessonInfoBtn2.className  = "lessonInfoBtnOn";

                // Save Opening Prayer Info
                openP = document.getElementById("oP").value;
                break;
            }

        case 5:
            {
                // (4) Lesson Page OFF
                lesson.className          = "lessonOff";
                lessonInfo.className      = "lessonInfoOff";
                lessonP.className         = "lessonPOff";
                lessonInfoBtn1.className  = "lessonInfoBtnOff";
                lessonInfoBtn2.className  = "lessonInfoBtnOff";

                // (6) Closing Prayer Page OFF
                closingPrayer.className    = "closingPrayerOff";
                cPrayerInfo.className     = "cPrayerInfoOff";
                cPrayer.className         = "cPrayerOff";
                cPrayerInfoBtn1.className = "cPrayerInfoBtnOff";
                cPrayerInfoBtn2.className = "cPrayerInfoBtnOff";

                // (5) Closing Hymn Page ON
                closingHymn.className   = "closingHymnOn";
                cHymnInfo.className     = "cHymnInfoOn";
                cHymn.className         = "cHymnOn";
                cHymnInfoBtn1.className = "cHymnInfoBtnOn";
                cHymnInfoBtn2.className = "cHymnInfoBtnOn";

                //Save Lesson Info
                less = document.getElementById("l").value;
                break;
            }
            
        case 6:
            {
                // (5) Closing Hymn Page OFF
                closingHymn.className   = "closingHymnOff";
                cHymnInfo.className     = "cHymnInfoOff";
                cHymn.className         = "cHymnOff";
                cHymnInfoBtn1.className = "cHymnInfoBtnOff";
                cHymnInfoBtn2.className = "cHymnInfoBtnOff";

                // (6) Closing Prayer Page ON
                closingPrayer.className   = "closingPrayerOn";
                cPrayerInfo.className     = "cPrayerInfoOn";
                cPrayer.className         = "cPrayerOn";
                cPrayerInfoBtn1.className = "cPrayerInfoBtnOn";
                cPrayerInfoBtn2.className = "cPrayerInfoBtnOn";

                // Save Closing Hymn Info
                closHymn = document.getElementById("cH").value;
                break;
            }

        case 7:
            {
                // (6) Closing Prayer Page OFF
                closingPrayer.className   = "closingPrayerOff";
                cPrayerInfo.className     = "cPrayerInfoOff";
                cPrayer.className         = "cPrayerOff";
                cPrayerInfoBtn1.className = "cPrayerInfoBtnOff";
                cPrayerInfoBtn2.className = "cPrayerInfoBtnOff";

                // (7) Final Page ON
                final.className           = "finalOn";
                finalInfo.className       = "finalInfoOn";
                finalP.className          = "finalPOn";

                // Save Closing Prayer Info
                closPrayer = document.getElementById("cP").value;
                saveInfo();
                openInfo();
                break;
            }

    }
}

function saveInfo(){
    
    var nFhe = new familyHomeEvening(famiInfo, openHymn, openP, less, closHymn, closPrayer);

    var jFhe = JSON.stringify(nFhe);

    localStorage.setItem("FHE", jFhe);
}

function openInfo(){

    var lsJSON = localStorage.getItem("FHE");

    var fhe = JSON.parse(lsJSON);

    document.getElementById("name").innerHTML = fhe.famiInfo;
    document.getElementById("hymn1").innerHTML = fhe.openHymn;
    document.getElementById("prayer1").innerHTML = fhe.openP;
    document.getElementById("less").innerHTML = fhe.less;
    document.getElementById("hymn2").innerHTML = fhe.closHymn;
    document.getElementById("prayer2").innerHTML = fhe.closPrayer;
}

var hymnNum = 0

function getHymn(num){
    // Create a request
    var json = new XMLHttpRequest(); 
    
    // Once request is loaded begin
    json.onload = function() {

        // If statement:
        // 1. The ready state number 4 means the request is finished and the response is ready
        // 2. the status number 200 means everything is "OK"
        if (this.readyState === 4 && this.status === 200)
        {
            var obj = JSON.parse(this.responseText);
            if(hymnNum < 6)
            {
                if(num == 1){
                    document.getElementById("oHIdeaSec").innerHTML = obj[hymnNum];
                }
                else{
                    document.getElementById("cHIdeaSec").innerHTML = obj[hymnNum];
                }
                
                hymnNum++;
            }
            else{
                hymnNum = 0;
            }
        }
    }

    // Specifies the type of request
    json.open('GET', 'https://petersonbrandon.github.io/hymns.json', true);
    
    // Send the request
    json.send();
}