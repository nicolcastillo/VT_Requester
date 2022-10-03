var deliveryOnline = true
var Bluejeans = true
var Invites = true
var invitesToStudnets = true
var invitesInEng = true
var singleOffering = true
var ebook = true
var leastVersion = true

var textAreaLocationAddress = ""
var textAreaLocationLink = ""

var textAreaInviteLanguage = ""

var textAreaPrimary = ""
var textAreaOtherOfferings = ""

var textAreaRegion = ""
var textArea = ""


document.addEventListener('DOMContentLoaded', function() {
    var defButtonOnline = document.getElementById('toggleOnline');
    var offButtonOnsite = document.getElementById('toggleOnsite');

    var defButtonBjYes = document.getElementById('toggleBluejeansYes');
    var offButtonBjNo = document.getElementById('toggleBluejeansNo');

    var defButtonInvitesYes = document.getElementById('toggleInvitesYes');
    var offButtonInvitesNo = document.getElementById('toggleInvitesNo');

    var defButtonInvitesAll = document.getElementById('toggleInvitesAll');
    var offButtonInvitesInstructor = document.getElementById('toggleInvitesInstructor');

    var defButtonInvitesEng = document.getElementById('toggleInvitesEng');
    var offButtonInvitesOther = document.getElementById('toggleInvitesOther');

    var defEbookYes = document.getElementById('toggleEbookYes');
    var offEbookNo = document.getElementById('toggleEbookNo');

    var defOfferingSingle = document.getElementById('toggleOfferingSingle');
    var offOfferingMulti = document.getElementById('toggleOfferingMulti');

    var defCourseVersionLast = document.getElementById('toggleCourseVersionDef');
    var offCourseVersionOther = document.getElementById('toggleCourseVersionSpec');

    var ButtonProcess = document.getElementById('buttonProcess');
    var ButtonEmpty = document.getElementById('buttonEmpty');

    var ButtonConfirm = document.getElementById('buttonConfirm');
    var ButtonEdit = document.getElementById('buttonEdit');

    var ButtonCreateNew = document.getElementById('buttonCreateNew');
    var ButtonCreateNewFromLast = document.getElementById('buttonFromLast');

	// OK // onClick's DELIVERY logic below:
    defButtonOnline.addEventListener('click', function() {
        handlerOnlineToOnsite();
        deliveryOnline = false
        Bluejeans = false
    });
    offButtonOnsite.addEventListener('click', function() {
        handlerOnsiteToOnline();
        deliveryOnline = true
        Bluejeans = true
    });

    // OK // onClick's Bluejeans logic below:
    defButtonBjYes.addEventListener('click', function() {
        handlerBluejeansYesToNo();
        Bluejeans = false
    });
    offButtonBjNo.addEventListener('click', function() {
        handlerBluejeansNoToYes();
        Bluejeans = true
    });

    // OK // onClick's Invites logic below:
    defButtonInvitesYes.addEventListener('click', function() {
        handlerInvitesYesToNo();
        Invites = false
    });
    offButtonInvitesNo.addEventListener('click', function() {
        handlerInvitesNoToYes();
        Invites = true
    });

    // OK // onClick's Invitees logic below:
    defButtonInvitesAll.addEventListener('click', function() {
        handlerShowToHide('toggleInvitesAll', 'toggleInvitesInstructor');
        invitesToStudnets = false
        
    });
    offButtonInvitesInstructor.addEventListener('click', function() {
        handlerShowToHide('toggleInvitesInstructor', 'toggleInvitesAll');
        invitesToStudnets = true
    });

    // onClick's Language logic below:
    defButtonInvitesEng.addEventListener('click', function() {
        handlerInvitesEngToOther();
        invitesInEng = false
    });
    offButtonInvitesOther.addEventListener('click', function() {
        handlerInvitesOtherToEng();
        invitesInEng = true
    });

    // onClick's Ebook logic below:
    defEbookYes.addEventListener('click', function(){
        handlerEbookYesToNo();
        ebook = false
        
    });
    offEbookNo.addEventListener('click', function(){
        handlerEbookNoToYes();
        ebook = true
    });

    // onClick's Offering logic below:
    defOfferingSingle.addEventListener('click', function(){
        handlerOfferingSingleToMulti();
        singleOffering = false
    });
    offOfferingMulti.addEventListener('click', function(){
        handlerOfferingMultiToSingle();
        singleOffering = true
    });

    // OK // onClick's Version logic below:
    defCourseVersionLast.addEventListener('click', function(){
        handlerVersionLastToOther();
    });
    offCourseVersionOther.addEventListener('click', function(){
        handlerVersionOtherToLast();
    });

    ButtonProcess.addEventListener('click', function(){
        handlerButtonProcess();
    });

    ButtonEmpty.addEventListener('click', function(){
        handlerButtonEmpty();
    });
    
    ButtonEdit.addEventListener('click', function(){
        handlerButtonEdit();
    });

    ButtonConfirm.addEventListener('click', function(){
        handlerButtonConfirm();
    });

    ButtonCreateNew.addEventListener('click', function(){
        handlerButtonNew();
    });

    ButtonCreateNewFromLast.addEventListener('click', function(){
        handlerNewFromLast();
    });

    // off hidden when loaded
    offButtonOnsite.style.display = 'none';
    offButtonBjNo.style.display = 'none';
    offButtonInvitesNo.style.display = 'none';
    offButtonInvitesInstructor.style.display = 'none';
    offButtonInvitesOther.style.display = 'none'
    offEbookNo.style.display = 'none';
    offOfferingMulti.style.display = 'none';
    offCourseVersionOther.style.display = 'none';

    // off other hidden objects
    var ExpTA = document.getElementById('textAreaInvitesLanguage');
    ExpTA.style.display = 'none';
    var TAMulti = document.getElementById('offeringMulti');
    TAMulti.style.display = 'none';
    var TAVersion = document.getElementById('courseVersion');
    TAVersion.style.display = 'none';

});

// OK // works swap hide to show
function handlerShowToHide(showName, hideName){
    var show = document.getElementById(showName);
    var hide = document.getElementById(hideName);

    show.style.display = 'none';
    hide.style.display = 'block'; 
}

// OK // switch Online to Onsite
function handlerOnlineToOnsite(){
    handlerShowToHide('toggleOnline', 'toggleOnsite');

    var ExpDelivery = document.getElementById('ExpDeliveryOnline');
    ExpDelivery.style.display = 'none';

    var extension = document.getElementById('ExpDeliveryOnsite');
    extension.style.display = 'block'
    
};
// OK // switch Online to Onsite
function handlerOnsiteToOnline(){
    handlerShowToHide('toggleOnsite', 'toggleOnline');

    var extension = document.getElementById('ExpDeliveryOnline');
    extension.style.display = 'block'

    var ExpDelivery = document.getElementById('ExpDeliveryOnsite');
    ExpDelivery.style.display = 'none';

};

// OK // switch Bluejeans Yes to No
function handlerBluejeansYesToNo(){
    handlerShowToHide('toggleBluejeansYes', 'toggleBluejeansNo');
};
// OK // switch Bluejeans No to Yes
function handlerBluejeansNoToYes(){
    handlerShowToHide('toggleBluejeansNo', 'toggleBluejeansYes');
};

// OK // switch Yes invites to No invites
function handlerInvitesYesToNo(){
    var defButtonInvitesYes = document.getElementById('toggleInvitesYes');
    var offButtonInvitesNo = document.getElementById('toggleInvitesNo');
    
    defButtonInvitesYes.style.display = 'none';
    offButtonInvitesNo.style.display = 'block';

    var extension = document.getElementById('onlineSpec');
    extension.style.display = 'none';
    var extension = document.getElementById('invitesLanguage');
    extension.style.display = 'none';
    
};
// OK // switch No invites to Yes invites
function handlerInvitesNoToYes(){
    var defButtonInvitesYes = document.getElementById('toggleInvitesYes');
    var offButtonInvitesNo = document.getElementById('toggleInvitesNo');

    defButtonInvitesYes.style.display = 'block';
    offButtonInvitesNo.style.display = 'none';

    var extension = document.getElementById('onlineSpec');
    extension.style.display = 'block';

    var extension = document.getElementById('toggleInvitesAll');
    extension.style.display = 'block';
    var extension = document.getElementById('toggleInvitesInstructor');
    extension.style.display = 'none';

    var extension = document.getElementById('invitesLanguage');
    extension.style.display = 'block';

};

// OK // switch language Eng to Others
function handlerInvitesEngToOther(){
    var defButtonInvitesEng = document.getElementById('toggleInvitesEng');
    var offButtonInvitesOther = document.getElementById('toggleInvitesOther');

    defButtonInvitesEng.style.display = 'none';
    offButtonInvitesOther.style.display = 'block';

    var textArea = document.getElementById('textAreaInvitesLanguage');
    textArea.style.display = 'block';


};
// OK // switch language Others to Eng
function handlerInvitesOtherToEng(){
    var defButtonInvitesEng = document.getElementById('toggleInvitesEng');
    var offButtonInvitesOther = document.getElementById('toggleInvitesOther');

    defButtonInvitesEng.style.display = 'block';
    offButtonInvitesOther.style.display = 'none';

    var textArea = document.getElementById('textAreaInvitesLanguage');
    textArea.style.display = 'none';
    
};

// OK // switch Ebook Yes to No
function handlerEbookYesToNo(){
    handlerShowToHide('toggleEbookYes', 'toggleEbookNo');
};
// OK // switch Ebook No to Yes
function handlerEbookNoToYes(){
    handlerShowToHide('toggleEbookNo', 'toggleEbookYes');
};

// OK // switch Offering from Single to Multi
function handlerOfferingSingleToMulti(){
    var defOfferingSingle = document.getElementById('toggleOfferingSingle');
    var offOfferingMulti = document.getElementById('toggleOfferingMulti');
    
    defOfferingSingle.style.display = 'none';
    offOfferingMulti.style.display = 'block';

    var textArea = document.getElementById('offeringMulti')
    textArea.style.display = 'block'
};
// OK // switch Offering from Multi to Single
function handlerOfferingMultiToSingle(){
    var defOfferingSingle = document.getElementById('toggleOfferingSingle');
    var offOfferingMulti = document.getElementById('toggleOfferingMulti');
    
    defOfferingSingle.style.display = 'block';
    offOfferingMulti.style.display = 'none';

    var textArea = document.getElementById('offeringMulti')
    textArea.style.display = 'none'
};

// OK // switch last version to specific
function handlerVersionLastToOther(){
    var defButtonEng = document.getElementById('toggleCourseVersionDef');
    var offButtonInstructor = document.getElementById('toggleCourseVersionSpec');
    
    defButtonEng.style.display = 'none';
    offButtonInstructor.style.display = 'block';

    var textArea = document.getElementById('courseVersion')
    textArea.style.display = 'block'
    
};
// OK // switch specific version to last
function handlerVersionOtherToLast(){
    handlerShowToHide('toggleCourseVersionSpec', 'toggleCourseVersionDef');

    var textArea = document.getElementById('courseVersion')
    textArea.style.display = 'none'
};

function handlerButtonProcess(){
    handlerShowToHide('windowCreate', 'windowConfirm')
    var overviewMsg = document.getElementById("confirmMsg")
    var retVal = getValues()
    overviewMsg.innerHTML = retVal
};

function handlerButtonEdit(){
    handlerShowToHide('windowConfirm', 'windowCreate')
};

function handlerButtonConfirm(){
    handlerShowToHide('windowConfirm', 'windowReport');
};

function handlerButtonNew(){
    handlerShowToHide('windowReport', 'windowCreate');
    handlerButtonEmpty();
};

function handlerNewFromLast(){
    handlerShowToHide('windowReport', 'windowCreate')
    var value = document.getElementById("primaryValue")
    value.value = ""
};

function handlerButtonEmpty(){
    handlerOnsiteToOnline();
    handlerBluejeansNoToYes();
    handlerInvitesNoToYes();
    handlerInvitesOtherToEng();
    handlerEbookNoToYes();
    handlerOfferingMultiToSingle();
    handlerVersionOtherToLast();
    var value = document.getElementById("primaryValue")
    value.value = ""
    value = document.getElementById('addressValue')
    value.value = "" 
    value = document.getElementById('linkValue')
    value.value = ""
    value = document.getElementById("inviteValue")
    value.value = "" 
    value = document.getElementById('otherOfferingsValue')
    value.value = "" 
    value = document.getElementById('regionValue')
    value.value = "" 
    value = document.getElementById('instrRhnidValue')
    value.value = "" 
    value = document.getElementById('instrEmailValue')
    value.value = "" 
    value = document.getElementById('studValue')
    value.value = "" 
    value = document.getElementById('courseValue')
    value.value = "" 
    value = document.getElementById('lmsValue')
    value.value = ""

};

function getValues(){
    var delivery = document.getElementById('cmDelivery')

    var locdeliveryOnline = deliveryOnline
    var locBluejeans = Bluejeans
    var locInvites = Invites
    var locinvitesToStudnets = invitesToStudnets
    var locinvitesInEng = invitesInEng
    var locsingleOffering = singleOffering
    var locebook = ebook
    var locleastVersion = leastVersion

    var loctextAreaLocationAddress = textAreaLocationAddress
    var loctextAreaLocationLink = textAreaLocationLink

    var loctextAreaInviteLanguage = textAreaInviteLanguage

    var loctextAreaPrimary = textAreaPrimary
    var loctextAreaOtherOfferings = textAreaOtherOfferings

    var loctextAreaRegion = textAreaRegion
    var loctextArea = textArea

    var outString = "DELIVERY: "

    if (locdeliveryOnline){
        outString += "online"
    } else {
        outString += "ONSITE"
    }

    outString += "\r\nBluejeans: "

    if(locBluejeans){
        outString += "yes"
    } else {
        outString += "NO"
    }

    return outString

}
