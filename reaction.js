var DeliveryOnline = true
var Bluejeans = true
var Invites = true
var InvitesToStudnets = true
var InvitesInEng = true
var SingleOffering = true
var Ebook = true
var LeastVersion = true

var TextAreaLocationAddress = ""
var TextAreaLocationLink = ""

var TextAreaInviteLanguage = ""

var TextAreaPrimary = ""
var TextAreaOtherOffering1 = ""
var TextAreaOtherOffering2 = ""
var TextAreaOtherOffering3 = ""
var TextAreaOtherOffering4 = ""

var TextAreaRegion = ""

var TextAreaInstructorRHNID = ""
var TextAreaInstructorEmail = ""

var TextAreaStudentCount = ""

var TextAreaCourseCode = ""
var TextAreaCourseVersion = ""

var TextAreaLMS = ""
var TextAreaComment = ""


document.addEventListener('DOMContentLoaded', function() {
    var defButtonOnline = document.getElementById('toggleOnline')
    var offButtonOnsite = document.getElementById('toggleOnsite')

    var defButtonBjYes = document.getElementById('toggleBluejeansYes')
    var offButtonBjNo = document.getElementById('toggleBluejeansNo')

    var defButtonInvitesYes = document.getElementById('toggleInvitesYes')
    var offButtonInvitesNo = document.getElementById('toggleInvitesNo')

    var defButtonInvitesAll = document.getElementById('toggleInvitesAll')
    var offButtonInvitesInstructor = document.getElementById('toggleInvitesInstructor')

    var defButtonInvitesEng = document.getElementById('toggleInvitesEng')
    var offButtonInvitesOther = document.getElementById('toggleInvitesOther')

    var defEbookYes = document.getElementById('toggleEbookYes')
    var offEbookNo = document.getElementById('toggleEbookNo')

    var defOfferingSingle = document.getElementById('toggleOfferingSingle')
    var offOfferingMulti = document.getElementById('toggleOfferingMulti')

    var defCourseVersionLast = document.getElementById('toggleCourseVersionDef')
    var offCourseVersionOther = document.getElementById('toggleCourseVersionSpec')

    var ButtonProcess = document.getElementById('buttonProcess')
    var ButtonEmpty = document.getElementById('buttonEmpty')

    var ButtonConfirm = document.getElementById('buttonConfirm')
    var ButtonEdit = document.getElementById('buttonEdit')

    var ButtonCreateNew = document.getElementById('buttonCreateNew')
    var ButtonCreateNewFromLast = document.getElementById('buttonFromLast')

	// OK // onClick's DELIVERY logic below:
    defButtonOnline.addEventListener('click', function() {
        handlerOnlineToOnsite()
        DeliveryOnline = false
        Bluejeans = false
    })
    offButtonOnsite.addEventListener('click', function() {
        handlerOnsiteToOnline()
        DeliveryOnline = true
        Bluejeans = true
    })

    // OK // onClick's Bluejeans logic below:
    defButtonBjYes.addEventListener('click', function() {
        handlerBluejeansYesToNo()
        Bluejeans = false
    })
    offButtonBjNo.addEventListener('click', function() {
        handlerBluejeansNoToYes()
        Bluejeans = true
    })

    // OK // onClick's Invites logic below:
    defButtonInvitesYes.addEventListener('click', function() {
        handlerInvitesYesToNo()
        Invites = false
    })
    offButtonInvitesNo.addEventListener('click', function() {
        handlerInvitesNoToYes()
        Invites = true
    })

    // OK // onClick's Invitees logic below:
    defButtonInvitesAll.addEventListener('click', function() {
        handlerShowToHide('toggleInvitesAll', 'toggleInvitesInstructor')
        InvitesToStudnets = false
    })
    offButtonInvitesInstructor.addEventListener('click', function() {
        handlerShowToHide('toggleInvitesInstructor', 'toggleInvitesAll')
        InvitesToStudnets = true
    })

    // onClick's Language logic below:
    defButtonInvitesEng.addEventListener('click', function() {
        handlerInvitesEngToOther()
        InvitesInEng = false
    })
    offButtonInvitesOther.addEventListener('click', function() {
        handlerInvitesOtherToEng()
        InvitesInEng = true
    })

    // onClick's Ebook logic below:
    defEbookYes.addEventListener('click', function(){
        handlerEbookYesToNo()
        Ebook = true
    })
    offEbookNo.addEventListener('click', function(){
        handlerEbookNoToYes()
        Ebook = false
    })

    // onClick's Offering logic below:
    defOfferingSingle.addEventListener('click', function(){
        handlerOfferingSingleToMulti()
        SingleOffering = false
    })
    offOfferingMulti.addEventListener('click', function(){
        handlerOfferingMultiToSingle()
        SingleOffering = true
    })

    // OK // onClick's Version logic below:
    defCourseVersionLast.addEventListener('click', function(){
        handlerVersionLastToOther()
    })
    offCourseVersionOther.addEventListener('click', function(){
        handlerVersionOtherToLast()
    })

    // Submission buttons
    ButtonProcess.addEventListener('click', function(){
        handlerButtonProcess()
    })
    ButtonEmpty.addEventListener('click', function(){
        handlerButtonEmpty()
    })
    ButtonEdit.addEventListener('click', function(){
        handlerButtonEdit()
    })
    ButtonConfirm.addEventListener('click', function(){
        handlerButtonConfirm()
    })
    ButtonCreateNew.addEventListener('click', function(){
        handlerButtonNew()
    })
    ButtonCreateNewFromLast.addEventListener('click', function(){
        handlerNewFromLast()
    })

    // off hidden when loaded
    offButtonOnsite.style.display = 'none'
    offButtonBjNo.style.display = 'none'
    offButtonInvitesNo.style.display = 'none'
    offButtonInvitesInstructor.style.display = 'none'
    offButtonInvitesOther.style.display = 'none'
    offEbookNo.style.display = 'none'
    offOfferingMulti.style.display = 'none'
    offCourseVersionOther.style.display = 'none'

    // off other hidden objects
    var ExpTA = document.getElementById('textAreaInvitesLanguage')
    ExpTA.style.display = 'none'
    var TAMulti = document.getElementById('offeringMulti')
    TAMulti.style.display = 'none'
    var TAVersion = document.getElementById('courseVersion')
    TAVersion.style.display = 'none'

})

// OK // works swap hide to show
function handlerShowToHide(showName, hideName){
    var show = document.getElementById(showName)
    var hide = document.getElementById(hideName)

    show.style.display = 'none'
    hide.style.display = 'block' 
}

// OK // switch Online to Onsite
function handlerOnlineToOnsite(){
    handlerShowToHide('toggleOnline', 'toggleOnsite')

    var ExpDelivery = document.getElementById('ExpDeliveryOnline')
    ExpDelivery.style.display = 'none'

    var extension = document.getElementById('ExpDeliveryOnsite')
    extension.style.display = 'block'
}
// OK // switch Online to Onsite
function handlerOnsiteToOnline(){
    handlerShowToHide('toggleOnsite', 'toggleOnline')

    var extension = document.getElementById('ExpDeliveryOnline')
    extension.style.display = 'block'

    var ExpDelivery = document.getElementById('ExpDeliveryOnsite')
    ExpDelivery.style.display = 'none'
}

// OK // switch Bluejeans Yes to No
function handlerBluejeansYesToNo(){
    handlerShowToHide('toggleBluejeansYes', 'toggleBluejeansNo')
}
// OK // switch Bluejeans No to Yes
function handlerBluejeansNoToYes(){
    handlerShowToHide('toggleBluejeansNo', 'toggleBluejeansYes')
}

// OK // switch Yes invites to No invites
function handlerInvitesYesToNo(){
    var defButtonInvitesYes = document.getElementById('toggleInvitesYes')
    var offButtonInvitesNo = document.getElementById('toggleInvitesNo')
    
    defButtonInvitesYes.style.display = 'none'
    offButtonInvitesNo.style.display = 'block'

    var extension = document.getElementById('onlineSpec')
    extension.style.display = 'none'
    var extension = document.getElementById('invitesLanguage')
    extension.style.display = 'none'   
}
// OK // switch No invites to Yes invites
function handlerInvitesNoToYes(){
    var defButtonInvitesYes = document.getElementById('toggleInvitesYes')
    var offButtonInvitesNo = document.getElementById('toggleInvitesNo')

    defButtonInvitesYes.style.display = 'block'
    offButtonInvitesNo.style.display = 'none'

    var extension = document.getElementById('onlineSpec')
    extension.style.display = 'block'

    var extension = document.getElementById('toggleInvitesAll')
    extension.style.display = 'block'
    var extension = document.getElementById('toggleInvitesInstructor')
    extension.style.display = 'none'

    var extension = document.getElementById('invitesLanguage')
    extension.style.display = 'block'

}

// OK // switch language Eng to Others
function handlerInvitesEngToOther(){
    var defButtonInvitesEng = document.getElementById('toggleInvitesEng')
    var offButtonInvitesOther = document.getElementById('toggleInvitesOther')

    defButtonInvitesEng.style.display = 'none'
    offButtonInvitesOther.style.display = 'block'

    var textArea = document.getElementById('textAreaInvitesLanguage')
    textArea.style.display = 'block'
}
// OK // switch language Others to Eng
function handlerInvitesOtherToEng(){
    var defButtonInvitesEng = document.getElementById('toggleInvitesEng')
    var offButtonInvitesOther = document.getElementById('toggleInvitesOther')

    defButtonInvitesEng.style.display = 'block'
    offButtonInvitesOther.style.display = 'none'

    var textArea = document.getElementById('textAreaInvitesLanguage')
    textArea.style.display = 'none'
}

// OK // switch Ebook Yes to No
function handlerEbookYesToNo(){
    handlerShowToHide('toggleEbookYes', 'toggleEbookNo')
}
// OK // switch Ebook No to Yes
function handlerEbookNoToYes(){
    handlerShowToHide('toggleEbookNo', 'toggleEbookYes')
}

// OK // switch Offering from Single to Multi
function handlerOfferingSingleToMulti(){
    var defOfferingSingle = document.getElementById('toggleOfferingSingle')
    var offOfferingMulti = document.getElementById('toggleOfferingMulti')
    
    defOfferingSingle.style.display = 'none'
    offOfferingMulti.style.display = 'block'

    var textArea = document.getElementById('offeringMulti')
    textArea.style.display = 'block'
}
// OK // switch Offering from Multi to Single
function handlerOfferingMultiToSingle(){
    var defOfferingSingle = document.getElementById('toggleOfferingSingle')
    var offOfferingMulti = document.getElementById('toggleOfferingMulti')
    
    defOfferingSingle.style.display = 'block'
    offOfferingMulti.style.display = 'none'

    var textArea = document.getElementById('offeringMulti')
    textArea.style.display = 'none'
}

// OK // switch last version to specific
function handlerVersionLastToOther(){
    var defButtonEng = document.getElementById('toggleCourseVersionDef')
    var offButtonInstructor = document.getElementById('toggleCourseVersionSpec')
    
    defButtonEng.style.display = 'none'
    offButtonInstructor.style.display = 'block'

    var textArea = document.getElementById('courseVersion')
    textArea.style.display = 'block'
}
// OK // switch specific version to last
function handlerVersionOtherToLast(){
    handlerShowToHide('toggleCourseVersionSpec', 'toggleCourseVersionDef')

    var textArea = document.getElementById('courseVersion')
    textArea.style.display = 'none'
}

// Submission buttons handlers
function handlerButtonProcess(){
    // handlerShowToHide('windowCreate', 'windowConfirm')
    getValues()
}
function handlerButtonEdit(){
    handlerShowToHide('windowConfirm', 'windowCreate')
}
function handlerButtonConfirm(){
    handlerShowToHide('windowConfirm', 'windowReport')
}
function handlerButtonNew(){
    handlerShowToHide('windowReport', 'windowCreate')
    handlerButtonEmpty()
}
function handlerNewFromLast(){
    handlerShowToHide('windowReport', 'windowCreate')

    // ensures that in new creaion offerins will be inserted a new
    var value = document.getElementById("primaryValue")
    value.value = ""
    value = document.getElementById('otherOfferingsValue1')
    value.value = ""  
    value = document.getElementById('otherOfferingsValue2')
    value.value = ""  
    value = document.getElementById('otherOfferingsValue3')
    value.value = ""  
    value = document.getElementById('otherOfferingsValue4')
    value.value = "" 
}

function handlerButtonEmpty(){
    handlerOnsiteToOnline()
    handlerBluejeansNoToYes()
    handlerInvitesNoToYes()
    handlerInvitesOtherToEng()
    handlerEbookNoToYes()
    handlerOfferingMultiToSingle()
    handlerVersionOtherToLast()
    var value = document.getElementById("primaryValue")
    value.value = ""
    value = document.getElementById('addressValue')
    value.value = "" 
    value = document.getElementById('linkValue')
    value.value = ""
    value = document.getElementById("inviteValue")
    value.value = "" 
    value = document.getElementById('otherOfferingsValue1')
    value.value = ""  
    value = document.getElementById('otherOfferingsValue2')
    value.value = ""  
    value = document.getElementById('otherOfferingsValue3')
    value.value = ""  
    value = document.getElementById('otherOfferingsValue4')
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
    value = document.getElementById('commentValue')
    value.value = ""
}

function getValues(){

    var getDeliveryOnline = DeliveryOnline
    var getBluejeans = Bluejeans
    var getInvites = Invites
    var getInvitesToStudnets = InvitesToStudnets
    var getInvitesInEng = InvitesInEng
    var getSingleOffering = SingleOffering
    var getEbook = Ebook
    var getLeastVersion = LeastVersion

    var getTextAreaLocationAddress = document.getElementById("addressValue").value
    var getTextAreaLocationLink = document.getElementById("linkValue").value

    var getTextAreaInviteLanguage = document.getElementById("")

    var getTextAreaPrimary = document.getElementById("")
    var getTextAreaOtherOffering1 = document.getElementById("")
    var getTextAreaOtherOffering2 = document.getElementById("")
    var getTextAreaOtherOffering3 = document.getElementById("")
    var getTextAreaOtherOffering4 = document.getElementById("")

    var getTextAreaRegion = document.getElementById("")
    
    var getTextAreaInstructorRHNID = document.getElementById("")
    var getTextAreaInstructorEmail = document.getElementById("")

    var getTextAreaStudentCount = document.getElementById("")

    var getTextAreaCourseCode = document.getElementById("courseValue")
    var getTextAreaCourseVersion = document.getElementById("")

    var getTextAreaLMS = document.getElementById("lmsValue").value
    // debug testing
    getTextAreaLMS = "Mon, 10-Oct, 09:00 - Fri, 14-Oct, 19:00 (GMT+2) CEST   Open in new window"

    var getTextAreaComment = document.getElementById("ta_form_comments")


    var formDeliveryType = document.getElementById("ta_form_delivery_type")
    var formExpOnline = document.getElementById("form_exp_online")
    var formBluejeans = document.getElementById("ta_form_bluejeans")

    var formExpOnsite = document.getElementById("form_exp_onsite")
    var formOnsiteAddress = document.getElementById("ta_form_address_street")
    var formOnsiteLink = document.getElementById("ta_form_address_link")

    if (getDeliveryOnline){
        formDeliveryType.innerHTML = "online"
        formExpOnline.style.display = 'block'
        formExpOnsite.style.display = 'none'
        
        if(getBluejeans){
            formBluejeans.innerHTML = "Yes"
        } else {
            formBluejeans.innerHTML = "No"
        }

        formOnsiteAddress.innerHTML = getTextAreaLocationAddress
        formOnsiteLink.innerHTML = getTextAreaLocationLink

    } else {
        formDeliveryType.innerHTML = "onsite"
        formExpOnline.style.display = 'none'
        formExpOnsite.style.display = 'block'

        formOnsiteAddress.innerHTML = ""
        formOnsiteLink.innerHTML = ""

        formBluejeans.innerHTML = ""
    }

    var formSendOut = document.getElementById("ta_form_invites_sendout")
    var formExpInvites = document.getElementById("form_exp_invites")

    if (getInvites){
        formSendOut.innerHTML = "Yes"
        formExpInvites.style.display = 'block'
    } else {
        formSendOut.innerHTML = "No"
        formExpInvites.style.display = 'none'
    }

    var formOfferingCount = document.getElementById("ta_form_offering_count")
    var formExpOfferings = document.getElementById("form_exp_offerings")
    if (getSingleOffering){
        formOfferingCount.innerHTML = "Single"
        formExpOfferings.style.display = 'none'
    } else {
        formOfferingCount.innerHTML = "Multi merge"
        formExpOfferings.style.display = 'block'
    }

    var formCourseCode = document.getElementById("ta_form_course_code")
    var formExpCourse = document.getElementById("form_exp_course")
    var formCourseSpecialLeft = document.getElementById("ta_form_course_special_left")
    var formCourseSpecialRight = document.getElementById("ta_form_course_special_right")
    if ((getTextAreaCourseCode.value == "DO700") || (getTextAreaCourseCode.value == "do700")){
        formExpCourse.style.display = 'block'
        formCourseSpecialLeft.innerHTML = "DO700"
        formCourseSpecialRight.innerHTML = "DO180"
        formCourseCode.innerHTML = "DO700"
    } else if ((getTextAreaCourseCode.value == "DO720") || (getTextAreaCourseCode.value == "do720")){
        formExpCourse.style.display = 'block'
        formCourseSpecialLeft.innerHTML = "DO720"
        formCourseSpecialRight.innerHTML = "DO180"
        formCourseCode.innerHTML = "DO720"
    } else {
        formExpCourse.style.display = 'none'
        formCourseSpecialLeft.innerHTML = ""
        formCourseSpecialRight.innerHTML = ""
        formCourseCode.innerHTML = getTextAreaCourseCode.value
    }

    // Mon, 03-Oct, 09:00 - Thu, 06-Oct, 15:00 (GMT+2) CEST   Open in new window
    // >>> 10/03/2022, 09:00 AM
    // >>> 10/06/2022, 03:00 PM
    var arrayLms = getTextAreaLMS.split(", ")

    var arrayDateStart = arrayLms[1].split("-")
    var arrayTimeStart = arrayLms[2].split(" ")
    arrayTimeStart = arrayTimeStart[0].split(":")
    var dayPartStart = "AM"

    var arrayDateEnd = arrayLms[3].split("-")
    var arrayTimeEnd = arrayLms[4].split(" ")
    arrayTimeEnd = arrayTimeEnd[0].split(":")
    var dayPartEnd = "AM"

    arrayDateStart[2] = getMonth(arrayDateStart[1])
    arrayDateEnd[2] = getMonth(arrayDateEnd[1])

    var currentTime = new Date()
    var thisYear = currentTime.getFullYear()

    var formStart = document.getElementById("ta_form_durration_start")
    var formEnd = document.getElementById("ta_form_durration_start")

    formStart.innerHTML = thisYear // works


    // here




    getTextAreaComment.innerHTML = getDeliveryOnline




    // DeliveryOnline = true
    // Bluejeans = true
    // Invites = true
    // InvitesToStudnets = true
    // InvitesInEng = true
    // SingleOffering = true
    // Ebook = true
    // LeastVersion = true

    // TextAreaLocationAddress = ""
    // TextAreaLocationLink = ""

    // TextAreaInviteLanguage = ""

    // TextAreaPrimary = ""
    // TextAreaOtherOffering1 = ""
    // TextAreaOtherOffering2 = ""
    // TextAreaOtherOffering3 = ""
    // TextAreaOtherOffering4 = ""

    // TextAreaRegion = ""

    // TextAreaInstructorRHNID = ""
    // TextAreaInstructorEmail = ""
    
    // TextAreaStudentCount = ""
    
    // TextAreaCourseCode = ""
    // TextAreaCourseVersion = ""
    
    // TextAreaLMS = ""

    // TextAreaComment = ""

}

function getMonth(string_month){
    switch (string_month){
        case "Jan":
            return 1
        case "Feb":
            return 2
        case "Mar":
            return 3
        case "Apr":
            return 4
        case "May":
            return 5
        case "Jun":
            return 6
        case "Jul":
            return 7
        case "Aug":
            return 8
        case "Sep":
            return 9
        case "Oct":
            return 10
        case "Nov":
            return 11
        case "Dec":
            return 12
    }
}
