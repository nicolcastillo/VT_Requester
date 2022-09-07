// Online delivery
// var deliverySwitch = true

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
        // OK
        handlerOnlineToOnsite();
    });
    offButtonOnsite.addEventListener('click', function() {
        // OK
        handlerOnsiteToOnline();
    });

    // OK // onClick's Bluejeans logic below:
    defButtonBjYes.addEventListener('click', function() {
        // OK
        handlerBluejeansYesToNo();
    });
    offButtonBjNo.addEventListener('click', function() {
        // OK
        handlerBluejeansNoToYes();
    });

    // OK // onClick's Invites logic below:
    defButtonInvitesYes.addEventListener('click', function() {
        // OK
        handlerInvitesYesToNo();
    });
    offButtonInvitesNo.addEventListener('click', function() {
        // OK
        handlerInvitesNoToYes();
    });

    // OK // onClick's Invitees logic below:
    defButtonInvitesAll.addEventListener('click', function() {
        // OK
        handlerShowToHide('toggleInvitesAll', 'toggleInvitesInstructor');
    });
    offButtonInvitesInstructor.addEventListener('click', function() {
        // OK
        handlerShowToHide('toggleInvitesInstructor', 'toggleInvitesAll');
    });

    // onClick's Language logic below:
    defButtonInvitesEng.addEventListener('click', function() {
        // OK
        handlerInvitesEngToOther();
    });
    offButtonInvitesOther.addEventListener('click', function() {
        // OK
        handlerInvitesOtherToEng();
    });

    // onClick's Ebook logic below:
    defEbookYes.addEventListener('click', function(){
        // OK
        handlerEbookYesToNo();
    });
    offEbookNo.addEventListener('click', function(){
        // OK
        handlerEbookNoToYes();
    });

    // onClick's Offering logic below:
    defOfferingSingle.addEventListener('click', function(){
        // OK
        handlerOfferingSingleToMulti();
    });
    offOfferingMulti.addEventListener('click', function(){
        // OK
        handlerOfferingMultiToSingle();
    });

    // OK // onClick's Version logic below:
    defCourseVersionLast.addEventListener('click', function(){
        // OK
        handlerVersionLastToOther();
    });
    offCourseVersionOther.addEventListener('click', function(){
        // OK
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
};

function handlerButtonEmpty(){
    handlerOnsiteToOnline();
    handlerBluejeansNoToYes();
    handlerInvitesNoToYes();
    handlerInvitesOtherToEng();
    handlerEbookNoToYes();
    handlerOfferingMultiToSingle();
    handlerVersionOtherToLast();
};
