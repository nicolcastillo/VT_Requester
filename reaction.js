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

// ERROR
var eFlag_offering_primary = false  // must be int len 8
var eFlag_offering_other = false    // if not empty must be len 8 int
var eFlag_course_code = false       // must be filled
var eFlag_course_version = false    // must be filled
var eFlag_instructor_rhnid = false  // must be filled
var eFlag_instructor_email = false  // must be email in format: example@email.com
var eFlag_region = false            // must be valid region
var eFlag_language = false          // must be filled
var eFlag_student_count = false     // must be int
var eFlag_lms = false               // must be the format form LMS

// COLORS
// // input
var errYellow = 'rgba(244, 248, 0, 0.5)'
var valBase = 'rgba(255, 255, 255, 0.521)'
var lockedGrey = 'rgba(60, 60, 60, 0.75)'

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
        Ebook = false
    })
    offEbookNo.addEventListener('click', function(){
        handlerEbookNoToYes()
        Ebook = true
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
        LeastVersion = false
    })
    offCourseVersionOther.addEventListener('click', function(){
        handlerVersionOtherToLast()
        LeastVersion = true
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

    handlerInvitesOtherToEng()
    
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

function evalErr(){

    // // debug values
    // eFlag_offering_primary = false 
    // eFlag_offering_other = false   
    // eFlag_course_code = false       
    // eFlag_course_version = false
    // eFlag_instructor_rhnid = false  
    // eFlag_instructor_email = false
    // eFlag_region = false       
    // eFlag_language = false     
    // eFlag_student_count = false     
    // eFlag_lms = false

    if (eFlag_offering_primary || eFlag_offering_other|| eFlag_course_code || eFlag_course_version || eFlag_instructor_rhnid || eFlag_instructor_email || eFlag_region || eFlag_language || eFlag_student_count || eFlag_lms){
        // console.log("Some values in error state")
        // console.log(" - eFlag_offering_primary: " + eFlag_offering_primary)
        // console.log(" - eFlag_offering_other: " + eFlag_offering_other)
        // console.log(" - eFlag_course_code: " + eFlag_course_code)
        // console.log(" - eFlag_course_version: " + eFlag_course_version)
        // console.log(" - eFlag_instructor_rhnid: " + eFlag_instructor_rhnid)
        // console.log(" - eFlag_instructor_email: " + eFlag_instructor_email)
        // console.log(" - eFlag_language: " + eFlag_language)
        // console.log(" - eFlag_region: " + eFlag_region)
        // console.log(" - eFlag_student_count: " + eFlag_student_count)
        // console.log(" - eFlag_lms: " + eFlag_lms)
        return true // inclued error
    } else {
        // console.log("All values in valid state")
        return false // valid values
    }
}

function validOffering(in_value){
    var mid = /^[0-9]{8}$/.test(in_value)
    // console.log("validOffering-mid: " + mid)
    return mid
}

function getValues(){
    var highlight

// SECTION // OFFERING
    var getSingleOffering = SingleOffering

    var formOfferingCount = document.getElementById("ta_form_offering_count")
    var formExpOfferings = document.getElementById("form_exp_offerings")

    var getTextAreaPrimary = document.getElementById("primaryValue").value
    var getTextAreaOtherOffering1 = document.getElementById("otherOfferingsValue1").value
    var getTextAreaOtherOffering2 = document.getElementById("otherOfferingsValue2").value
    var getTextAreaOtherOffering3 = document.getElementById("otherOfferingsValue3").value
    var getTextAreaOtherOffering4 = document.getElementById("otherOfferingsValue4").value

    var formPrimary = document.getElementById('ta_form_offering_primary')
    var formOther = document.getElementById('ta_form_offering_others')

  // offering type: single / multi
    if (getSingleOffering){
        formOfferingCount.innerHTML = "Single offering"
        formExpOfferings.style.display = 'none'
    } else {
        formOfferingCount.innerHTML = "Multi-offering merge"
        formExpOfferings.style.display = 'block'
    }

    highlight = document.getElementById('primaryValue')

    // DEMO value
    getTextAreaPrimary = 12345678
 
  // primary 8xInt
    if(validOffering(getTextAreaPrimary)){
        eFlag_offering_primary = false
        formPrimary.innerHTML = getTextAreaPrimary
        highlight.style.background = valBase
        formPrimary.style.background = 'inherit'
        formPrimary.style.color = "white"
    } else {
        eFlag_offering_primary = true
        formPrimary.innerHTML = "offering is not correct"
        highlight.style.background = errYellow
        formPrimary.style.background = errYellow
        formPrimary.style.color = "black"
    }

    if (getSingleOffering){
        getTextAreaOtherOffering1.innerHTML = ""
        getTextAreaOtherOffering2.innerHTML = ""
        getTextAreaOtherOffering3.innerHTML = ""
        getTextAreaOtherOffering4.innerHTML = ""
  // multiple
    } else {
        var arrayOthers = [getTextAreaOtherOffering1, getTextAreaOtherOffering2, getTextAreaOtherOffering3, getTextAreaOtherOffering4]
        var skip = 0
        var outex = 0
        var arrayOkOthers = []

        // list arrayOthers
        for (let index = 0; index < arrayOthers.length; index++) {
            const element = arrayOthers[index];

            // if not correct len skip
            if (element.length != 8){
                skip = skip + 1
            } else {
                // check validity
                if (validOffering(element)){
                    // must not be == to primary or in arrayOkOthers
                    if ((element == getTextAreaPrimary) ||  arrayOkOthers.includes(element)){
                        formOther.innerHTML = 'Offering dubplicity'
                        eFlag_offering_other = true
                    } else {
                        arrayOkOthers[outex] = element
                        outex = outex + 1
                    }
                } else {
                    formOther.innerHTML = 'Offering in invalid format'
                    eFlag_offering_other = true
                }
            }
        }


        if (eFlag_offering_other || (skip == 4)){
            eFlag_offering_other = true
            highlight = document.getElementById('otherOfferingsValue1')
            highlight.style.background = errYellow
            highlight = document.getElementById('otherOfferingsValue2')
            highlight.style.background = errYellow
            highlight = document.getElementById('otherOfferingsValue3')
            highlight.style.background = errYellow
            highlight = document.getElementById('otherOfferingsValue4')
            highlight.style.background = errYellow
            // error collowring of offering fields
        } else {
            // base color
            var result = arrayOkOthers[0]
            for (let i = 1; i < arrayOkOthers.length; i++) {
                const element = arrayOkOthers[i];
                result = ", " + element
            }
            formOther.innerHTML = result
        }
    }

    // others check len 8 >> out 1 + ", " + 2 + ", " + 3 + ", " + 4
// end SECTION // OFFERING

// SECTION // COURSE
    var getLeastVersion = LeastVersion

    var getTextAreaCourseCode = document.getElementById("courseValue").value
    var getTextAreaCourseVersion = document.getElementById("versionValue").value

    var formCourseCode = document.getElementById("ta_form_course_code")
    var formExpCourse = document.getElementById("form_exp_course")
    var formCourseSpecialLeft = document.getElementById("ta_form_course_special_left")
    var formCourseSpecialRight = document.getElementById("ta_form_course_special_right")

    highlight = document.getElementById('courseValue')

    if (getTextAreaCourseCode.length == 0){
        eFlag_course_code = true
        formCourseCode.style.background = errYellow
        formCourseCode.style.color = 'black'
        formCourseCode.innerHTML = 'EMPTY <<< is not valid'
        highlight.style.background = errYellow
    } else {
        eFlag_course_code = false
        formCourseCode.style.background = 'inherit'
        formCourseCode.style.color = 'white'
        highlight.style.background = valBase
  // specific course code
    // HERE // special known multi-course couse
        if (getTextAreaCourseCode.toUpperCase() == "DO700"){
            formExpCourse.style.display = 'block'
            formCourseSpecialLeft.innerHTML = "DO700"
            formCourseSpecialRight.innerHTML = "DO180"
            formCourseCode.innerHTML = "DO700"
        } else if (getTextAreaCourseCode.toUpperCase() == "DO720"){
            formExpCourse.style.display = 'block'
            formCourseSpecialLeft.innerHTML = "DO720"
            formCourseSpecialRight.innerHTML = "DO180"
            formCourseCode.innerHTML = "DO720"
        } else {
    // basic offerings
            formExpCourse.style.display = 'none'
            formCourseSpecialLeft.innerHTML = ""
            formCourseSpecialRight.innerHTML = ""
            formCourseCode.innerHTML = getTextAreaCourseCode
        }
    }

    var formCourseVersion = document.getElementById("ta_form_course_version")
    
    highlight = document.getElementById('versionValue')

    if (getLeastVersion){
        formCourseVersion.innerHTML = "newest version"
        highlight.style.background = valBase
        formCourseVersion.style.background = 'inherit'
        formCourseVersion.style.color = 'white'
        
    } else {
        if (getTextAreaCourseVersion.length == 0){
            eFlag_course_version = true
            
            highlight.style.background = errYellow

            formCourseVersion.style.background = errYellow
            formCourseVersion.style.color = 'black'
            formCourseVersion.innerHTML = 'EMPTY <<< is not valid'
            
        } else {
            eFlag_course_version = false

            highlight.style.background = valBase

            formCourseVersion.style.background = 'inherit'
            formCourseVersion.style.color = 'white'
            formCourseVersion.innerHTML = getTextAreaCourseVersion
            
        }
    }

    // TODO verison

// end SECTION // COURSE

// SECTION // INSTRUCTOR
    var getTextAreaInstructorRHNID = document.getElementById("instrRhnidValue").value
    var getTextAreaInstructorEmail = document.getElementById("instrEmailValue").value
    
  // RHNID
    var formInstructorRHNID = document.getElementById('ta_form_instructor_rhnid')

    highlight = document.getElementById("instrRhnidValue")
    if (getTextAreaInstructorRHNID.length == 0){
        eFlag_instructor_rhnid = true
        highlight.style.background = errYellow
        formInstructorRHNID.innerHTML = 'EMPTY <<< is not valid'
        formInstructorRHNID.style.background = errYellow
        formInstructorRHNID.style.color = "black"
    } else {
        eFlag_instructor_rhnid = false
        highlight.style.background = valBase
        formInstructorRHNID.innerHTML = getTextAreaInstructorRHNID
        formInstructorRHNID.style.backgroundColor = "inherit"
        formInstructorRHNID.style.color = "white"
    }
    
  // Email
    var formInstructorEmail = document.getElementById('ta_form_instructor_email')
    var testVal = /^\S+@\S+\.\S+$/.test(getTextAreaInstructorEmail)

    highlight = document.getElementById('instrEmailValue')

    if (testVal){
        formInstructorEmail.innerHTML = getTextAreaInstructorEmail
        eFlag_instructor_email = false
        formInstructorEmail.style.background = 'inherit'
        formInstructorEmail.style.color = 'white'
        highlight.style.background = valBase

    } else {
        if (getTextAreaInstructorEmail.length == 0) getTextAreaInstructorEmail = 'EMPTY'
        eFlag_instructor_email = true
        formInstructorEmail.innerHTML = getTextAreaInstructorEmail + " <<< not in valid"
        formInstructorEmail.style.background = errYellow
        formInstructorEmail.style.color = 'black'
        highlight.style.background = errYellow
    }

    // email pattern match must include 1+ signs '@' 1+ signs '.' and 1+ signs
// end SECTION // INSTRUCTOR

// SECTION // DELIVERY
    var getDeliveryOnline = DeliveryOnline
    var getBluejeans = Bluejeans

    var getTextAreaRegion = document.getElementById("regionValue").value

    // TODO // address must be inserted
    var getTextAreaLocationAddress = document.getElementById("addressValue").value
    var getTextAreaLocationLink = document.getElementById("linkValue").value

    var formDeliveryType = document.getElementById("ta_form_delivery_type")
    var formExpOnline = document.getElementById("form_exp_online")
    var formBluejeans = document.getElementById("ta_form_bluejeans")

    var formExpOnsite = document.getElementById("form_exp_onsite")
    var formOnsiteAddress = document.getElementById("ta_form_address_street")
    var formOnsiteLink = document.getElementById("ta_form_address_link")
  // online / onsite
    if (getDeliveryOnline){
        formDeliveryType.innerHTML = "online"
        formExpOnline.style.display = 'block'
        formExpOnsite.style.display = 'none'
    
  // bluejeans yes/no
        if(getBluejeans){
            formBluejeans.innerHTML = "Yes"
        } else {
            formBluejeans.innerHTML = "No"
        }

        formOnsiteAddress.innerHTML = ""
        formOnsiteLink.innerHTML = ""
    } else {
        formDeliveryType.innerHTML = "onsite"
        formExpOnline.style.display = 'none'
        formExpOnsite.style.display = 'block'
  // location addres and link
        formOnsiteAddress.innerHTML = getTextAreaLocationAddress
        formOnsiteLink.innerHTML = getTextAreaLocationLink

        formBluejeans.innerHTML = ""
    }
  // region selection
    // HERE // List of reagions
    var arrayAllRegions = ["APAC", "LATAM", "NAMER", "EMEA"]
    var formRegion = document.getElementById("ta_form_region")

    // DEMO value
    getTextAreaRegion = "emea"

    highlight = document.getElementById("regionValue")

    getTextAreaRegion = getTextAreaRegion.toUpperCase()
    if (arrayAllRegions.includes(getTextAreaRegion)){
        formRegion.innerHTML = getTextAreaRegion
        eFlag_region = false

        highlight.style.backgroundColor = valBase

        formRegion.style.background = 'inherit'
        formRegion.style.color = 'white'

    } else {
        eFlag_region = true

        if (getTextAreaRegion==""){
            getTextAreaRegion = "empty"
            
        }
        formRegion.innerHTML = getTextAreaRegion + " <<< is not valid"
        formRegion.style.background = errYellow
        formRegion.style.color = 'black'

        highlight.style.backgroundColor = errYellow
    }
// end SECTION // DELIVERY

// SECTION // INVITES
    var getInvites = Invites   
    var getInvitesToStudnets = InvitesToStudnets
    var getInvitesInEng = InvitesInEng

    var getTextAreaStudentCount = document.getElementById("studValue").value
    var getTextAreaInviteLanguage = document.getElementById("inviteValue").value

    var formSendOut = document.getElementById("ta_form_invites_sendout")
    var formExpInvites = document.getElementById("form_exp_invites")

    var formRecipient = document.getElementById('ta_form_invites_recipient')
    var formLanguage = document.getElementById('ta_form_invites_language')

  // sendout y/n
    if (getInvites){
        formSendOut.innerHTML = "Yes"
        formExpInvites.style.display = 'block'

        if (getInvitesToStudnets){
            formRecipient.innerHTML = "instructor and students"
        } else {
            formRecipient.innerHTML = "just instructor"
        }

        if (getInvitesInEng){
            formLanguage.innerHTML = "Eng"
        } else {

            highlight = document.getElementById('inviteValue')

            if (getTextAreaInviteLanguage.length == 0){
                eFlag_language = true

                highlight.style.backgroundColor = errYellow

                formLanguage.innerHTML = 'EMPTY <<< is not valid'
                formLanguage.style.background = errYellow
                formLanguage.style.color = 'black'

            } else {
                eFlag_language = false
                highlight.style.background = valBase
                formLanguage.innerHTML = getTextAreaInviteLanguage
                formLanguage.style.background = 'inherit'
                formLanguage.style.color = 'white'
            }
        }

    } else {
        formSendOut.innerHTML = "No"
        formExpInvites.style.display = 'none'
        formRecipient.innerHTML = ""
        formLanguage.innerHTML = ""
    }

  // student count

    // DEMO value
    getTextAreaStudentCount = 0

    var formStudentCount = document.getElementById("ta_form_student_count")
    highlight = document.getElementById("studValue")

    if ((getTextAreaStudentCount == "") && (parseInt(getTextAreaStudentCount) != 0)){
        eFlag_student_count = true

        getTextAreaStudentCount = "empty"

        formStudentCount.innerHTML = getTextAreaStudentCount + " <<< is not valid"
        formStudentCount.style.background = errYellow
        formStudentCount.style.color = 'black'

        highlight.style.backgroundColor = errYellow
    } else {
        formStudentCount.innerHTML = getTextAreaStudentCount

        // NOTE: if err paint >> depaint when fixed
        eFlag_student_count = false
        formStudentCount.style.background = 'inherit'
        formStudentCount.style.color = 'white'

        highlight.style.backgroundColor = valBase
    }
// end SECTION // INVITES

// SECTION // Ebook
    var getEbook = Ebook

    var formEbook = document.getElementById('ta_form_ebook')
    if(getEbook){
        formEbook.innerHTML = "yes enable"
    } else {
        formEbook.innerHTML = "no disable"
    }
// end SECTION // Ebook

// SECTION // DURATION (lms)
    var getTextAreaLMS = document.getElementById("lmsValue").value

    // DEMO testing
    getTextAreaLMS = "Mon, 03-Feb, 09:00 - Thu, 06-Jan, 15:00 (GMT+2) CEST   Open in new window"

    // Mon, 03-Oct, 09:00 - Thu, 06-Oct, 15:00 (GMT+2) CEST   Open in new window
    // >>> 10/03/2022, 09:00 AM
    // >>> 10/06/2022, 03:00 PM
    
  // basic  split and current date
    var currentTime = new Date()
    const month = [1,2,3,4,5,6,7,8,9,10,11,12]
    var thisMonth = month[currentTime.getMonth()]
    var thisYear = currentTime.getFullYear()

    highlight = document.getElementById('lmsValue')

    try {
        var arrayLms = getTextAreaLMS.split(", ")

      // START DATE and time
        var arrayDateStart = arrayLms[1].split("-")
        var arrayTimeStart = arrayLms[2].split(" ")
        arrayTimeStart = arrayTimeStart[0].split(":")
        var dayPartStart = "AM"

        if(parseInt(arrayTimeStart[0])>11){
            dayPartStart = "PM"
            if(parseInt(arrayTimeStart[0]) > 12){
                mid = parseInt(arrayTimeStart[0]) - 12
                arrayTimeStart[0] = "0" + mid
            }
        }

        arrayDateStart[2] = getMonth(arrayDateStart[1])
        if (parseInt(arrayDateStart[2]) < 10){
            arrayDateStart[2] = "0" + arrayDateStart[2]
        }

        var formStart = document.getElementById("ta_form_durration_start")
        var startYear = thisYear
        if (arrayDateStart[2] < thisMonth){
            startYear = thisYear + 1
        }
        formStart.innerHTML = arrayDateStart[2]+"/"+arrayDateStart[0]+"/"+startYear+"; "+ arrayTimeStart[0]+":"+arrayTimeStart[1]+" "+dayPartStart
        formStart.style.background = 'inherit'
        formStart.style.color = 'white'

      // END DATE and time
        var arrayDateEnd = arrayLms[3].split("-")
        var arrayTimeEnd = arrayLms[4].split(" ")
        arrayTimeEnd = arrayTimeEnd[0].split(":")
        var dayPartEnd = "AM"

        if(parseInt(arrayTimeEnd[0])>11){
            dayPartEnd = "PM"
            if(parseInt(arrayTimeEnd[0]) > 12){
                mid = parseInt(arrayTimeEnd[0]) - 12
                arrayTimeEnd[0] = "0" + mid
            }
        }

        arrayDateEnd[2] = getMonth(arrayDateEnd[1])
        if (parseInt(arrayDateEnd[2]) < 10){
            arrayDateEnd[2] = "0" + arrayDateEnd[2]
        }

        var formEnd = document.getElementById("ta_form_durration_end")
        var endYear = startYear
        if (arrayDateEnd[2] < arrayDateStart[2]){
            endYear = startYear + 1
        }
        formEnd.innerHTML = arrayDateEnd[2]+"/"+arrayDateEnd[0]+"/"+endYear+"; "+ arrayTimeEnd[0]+":"+arrayTimeEnd[1]+" "+dayPartEnd
        formEnd.style.background = 'inherit'
        formEnd.style.color = 'white'

        highlight.style.backgroundColor = valBase

    }
    catch (e) {
        console.log(e)
        eFlag_lms = true
        highlight.style.backgroundColor = errYellow

        var formStart = document.getElementById("ta_form_durration_start")
        formStart.innerHTML = 'invalid input'
        formStart.style.background = errYellow
        formStart.style.color = 'black'

        var formEnd = document.getElementById("ta_form_durration_end")
        formEnd.innerHTML = 'invalid input'
        formEnd.style.background = errYellow
        formEnd.style.color = 'black'
    }
// end SECTION // DURATION (lms)


// SECTION // Comments
    var getTextAreaComment = document.getElementById("commentValue").value

    var formComment = document.getElementById('ta_form_comments')
    if (getTextAreaComment.length == 0) getTextAreaComment = 'none'
    formComment.innerHTML = getTextAreaComment.replace(/(\r\n|\n|\r)/gm, "<br>")
// end SECTION // Comments

    var evalButtonConfirm = document.getElementById('buttonConfirm')
    highlightEdit = document.getElementById('buttonEdit')

// SECTION // Validity check
    // evalErr true >> has error >> lock confirm
    if(evalErr()){

        document.getElementById('buttonConfirm').disabled = true
        evalButtonConfirm.style.backgroundColor = lockedGrey
        highlightEdit.style.backgroundColor = errYellow
        console.log("was true >> some err")
    } else {
        console.log("was false >> no err")
        document.getElementById('buttonConfirm').disabled = false
        evalButtonConfirm.style.backgroundColor = 'inherit'
        highlightEdit.style.backgroundColor = 'inherit'

    }
// end SECTION // Validity check

// TODO // values return to global
    // formStart.innerHTML =  thisYear// works
    
    // here

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

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

function getMonth(string_month){
    // console.log(string_month)
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return month.indexOf(string_month)+1
}

// TODO // function make message
/// get creatr email
/// title = "vtrequest for " + "primary"
/// comment

/// request type:
/// // 0 - basic request
/// // 1 - post creation rol edit
/// // 2 - merge request
/// // 3 - specific version

/// offering
/// Delivery
/// Invites
/// instructor
/// Ebook

/// thanks (request creator email)

// TODO // open email and create email.