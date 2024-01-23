var globalDeliveryOnline = true
var globalBluejeans = true
var globalInvites = true
var globalInvitesToStudnets = true
var globalInvitesInEng = true
var globalSingleOffering = true
var globalEbook = true
var globalLeastVersion = true

var globalTextAreaLocationAddress = ''
var globalTextAreaLocationLink = ''

var globalTextAreaInviteLanguage = ''

var globalTextAreaPrimary = ''
var globalTextAreaOtherOfferings = ''

var globalTextAreaRegion = ''

var globalTextAreaInstructorRHNID = ''
var globalTextAreaInstructorEmail = ''

var globalTextAreaStudentCount = ''

var globalTextAreaCourseCode = ''
var globalTextAreaCourseVersion = ''
var globalCourseSpecial = ''

var globalTextAreaLMSstart = ''
var globalTextAreaLMSend = ''
var globalTextAreaComment = ''

// HERE // CC for emea
var globalStringEmeaCC = 'Make sure to add lywillia@redhat.com and emea-training-delivery-team@redhat.com to the ticket watch list.'

// basic  split and current date
var currentTime = new Date()
const month = [1,2,3,4,5,6,7,8,9,10,11,12]
var thisMonth = month[currentTime.getMonth()]
var thisYear = currentTime.getFullYear()

// base variables
var highlight

// email
var requester = ''
var subject = ''
var requestContent = ''
var recipient = ''
// recipient = 'nicol.castillo@seznam.cz'
recipient = 'Rol-support@redhat.com'

// ERROR
var eFlag_offering_primary = false  // must be int len 8
var eFlag_offering_other = false    // if not empty must be len 8 int
var eFlag_course_code = false       // must be filled
var eFlag_course_version = false    // must be filled
var eFlag_instructor_rhnid = false  // must be filled
var eFlag_address = false           // must be filled
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
        globalDeliveryOnline = false
        globalBluejeans = false
    })
    offButtonOnsite.addEventListener('click', function() {
        handlerOnsiteToOnline()
        globalDeliveryOnline = true
        globalBluejeans = true
    })

    // OK // onClick's Bluejeans logic below:
    defButtonBjYes.addEventListener('click', function() {
        handlerBluejeansYesToNo()
        globalBluejeans = false
    })
    offButtonBjNo.addEventListener('click', function() {
        handlerBluejeansNoToYes()
        globalBluejeans = true
    })

    // OK // onClick's Invites logic below:
    defButtonInvitesYes.addEventListener('click', function() {
        handlerInvitesYesToNo()
        globalInvites = false
    })
    offButtonInvitesNo.addEventListener('click', function() {
        handlerInvitesNoToYes()
        globalInvites = true
    })

    // OK // onClick's Invitees logic below:
    defButtonInvitesAll.addEventListener('click', function() {
        handlerShowToHide('toggleInvitesAll', 'toggleInvitesInstructor')
        globalInvitesToStudnets = false
    })
    offButtonInvitesInstructor.addEventListener('click', function() {
        handlerShowToHide('toggleInvitesInstructor', 'toggleInvitesAll')
        globalInvitesToStudnets = true
    })

    // onClick's Language logic below:
    defButtonInvitesEng.addEventListener('click', function() {
        handlerInvitesEngToOther()
        globalInvitesInEng = false
    })
    offButtonInvitesOther.addEventListener('click', function() {
        handlerInvitesOtherToEng()
        globalInvitesInEng = true
    })

    // onClick's Ebook logic below:
    defEbookYes.addEventListener('click', function(){
        handlerEbookYesToNo()
        globalEbook = false
    })
    offEbookNo.addEventListener('click', function(){
        handlerEbookNoToYes()
        globalEbook = true
    })

    // onClick's Offering logic below:
    defOfferingSingle.addEventListener('click', function(){
        handlerOfferingSingleToMulti()
        globalSingleOffering = false
    })
    offOfferingMulti.addEventListener('click', function(){
        handlerOfferingMultiToSingle()
        globalSingleOffering = true
    })

    // OK // onClick's Version logic below:
    defCourseVersionLast.addEventListener('click', function(){
        handlerVersionLastToOther()
        globalLeastVersion = false
    })
    offCourseVersionOther.addEventListener('click', function(){
        handlerVersionOtherToLast()
        globalLeastVersion = true
    })

    // Submission buttons
    ButtonProcess.addEventListener('click', function(){

        // // TODO
        // requester = getRequester()

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
        sendEmail()
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
    handlerShowToHide('windowCreate', 'windowConfirm')
    getValues()
    createEmail()
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
    var value = document.getElementById('primaryValue')
    value.value = ''
    value = document.getElementById('otherOfferingsValue1')
    value.value = ''  
    value = document.getElementById('otherOfferingsValue2')
    value.value = ''  
    value = document.getElementById('otherOfferingsValue3')
    value.value = ''  
    value = document.getElementById('otherOfferingsValue4')
    value.value = ''
}

function handlerButtonEmpty(){
    handlerOnsiteToOnline()
    handlerBluejeansNoToYes()
    handlerInvitesNoToYes()
    handlerInvitesOtherToEng()
    handlerEbookNoToYes()
    handlerOfferingMultiToSingle()
    handlerVersionOtherToLast()
    var value = document.getElementById('primaryValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('addressValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('linkValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('inviteValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('otherOfferingsValue1')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('otherOfferingsValue2')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('otherOfferingsValue3')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('otherOfferingsValue4')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('regionValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('instrRhnidValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('instrEmailValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('studValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('courseValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('lmsValue')
    value.value = ''
    value.style.background = valBase
    value = document.getElementById('commentValue')
    value.value = ''
    value.style.background = valBase
}

function evalErr(){
    // // debug values
    // eFlag_offering_primary = false 
    // eFlag_offering_other = false   
    // eFlag_course_code = false       
    // eFlag_course_version = false
    // eFlag_instructor_rhnid = false  
    // eFlag_instructor_email = false
    // eFlag_address = false
    // eFlag_region = false       
    // eFlag_language = false     
    // eFlag_student_count = false     
    // eFlag_lms = false

    if (eFlag_offering_primary || eFlag_offering_other|| eFlag_course_code || eFlag_course_version || eFlag_instructor_rhnid || eFlag_instructor_email || eFlag_address || eFlag_region || eFlag_language || eFlag_student_count || eFlag_lms){
        console.log(' - eFlag_offering_primary: ' + eFlag_offering_primary)
        console.log(' - eFlag_offering_other: ' + eFlag_offering_other)
        console.log(' - eFlag_course_code: ' + eFlag_course_code)
        console.log(' - eFlag_course_version: ' + eFlag_course_version)
        console.log(' - eFlag_instructor_rhnid: ' + eFlag_instructor_rhnid)
        console.log(' - eFlag_instructor_email: ' + eFlag_instructor_email)
        console.log(' - eFlag_language: ' + eFlag_language)
        console.log(' - eFlag_address: ' + eFlag_address)
        console.log(' - eFlag_region: ' + eFlag_region)
        console.log(' - eFlag_student_count: ' + eFlag_student_count)
        console.log(' - eFlag_lms: ' + eFlag_lms)
        return true // inclued error
    } else {
        return false // valid values
    }
}

function validOffering(in_value){
    var mid = /^[0-9]{8}$/.test(in_value)
    return mid
}

function validEmail(in_value){
    return /^\S+@\S+\.\S+$/.test(in_value)
}

function checkPrimary(){
    var formPrimary = document.getElementById('ta_form_offering_primary')
    var getTextAreaPrimary = document.getElementById('primaryValue').value

    // // DEMO value
    // getTextAreaPrimary = '12345678'

    highlight = document.getElementById('primaryValue')
    // primary 8xInt
    if(validOffering(getTextAreaPrimary)){
        // console.log('kekkto')
        eFlag_offering_primary = false
        formPrimary.innerHTML = getTextAreaPrimary
        highlight.style.background = valBase
        formPrimary.style.background = 'inherit'
        formPrimary.style.color = 'white'
        globalTextAreaPrimary = getTextAreaPrimary
    } else {
        // console.log('pekto')
        eFlag_offering_primary = true
        formPrimary.innerHTML = 'offering is not correct'
        highlight.style.background = errYellow
        formPrimary.style.background = errYellow
        formPrimary.style.color = 'black'
    }
    
}

function checkOtherOfferings(inlist){
    var resultString = '-empty-'

    var arrayOthers = inlist

    // clearse the empty out
    arrayOthers = inlist.filter(function(el) { return el; });
    
    var outex = 0
    var arrayOkOthers = []

    // list arrayOthers
    for (let index = 0; index < arrayOthers.length; index++) {
        const element = arrayOthers[index];

        if (element.length == 0){
            break
        }

        // check validity
        if (validOffering(element)){
            // must not be == to primary or in arrayOkOthers
            if ((element == globalTextAreaPrimary) ||  arrayOkOthers.includes(element)){
                resultString = 'Offering duplicity'
                eFlag_offering_other = true
                break
            } else {
                arrayOkOthers[outex] = element
                outex = outex + 1
                eFlag_offering_other = false
            }
        } else {
            resultString = 'Offering in invalid format'
            eFlag_offering_other = true
            break
        }
    }

    if ((outex == 0) && (eFlag_offering_other == false)){
        resultString = 'EMPTY <<< is not valid'
        eFlag_offering_other = true
    }

    var formOther = document.getElementById('ta_form_offering_others')
    var highlightList = [document.getElementById('otherOfferingsValue1'), document.getElementById('otherOfferingsValue2'), document.getElementById('otherOfferingsValue3'), document.getElementById('otherOfferingsValue4')]
        
    if (eFlag_offering_other){
        for (let index = 0; index < highlightList.length; index++) {
            const element = highlightList[index];
            element.style.background = errYellow
        }
        formOther.style.background = errYellow
        formOther.style.color = 'black'
    } else {
        eFlag_offering_other = false
        resultString = ""
        for (let index = 0; index < arrayOkOthers.length; index++) {
            const element = arrayOkOthers[index];
            resultString = resultString + element
            if( index != (arrayOkOthers.length - 1 )){
                resultString = resultString + ", "
            }
        }
        for (let index = 0; index < highlightList.length; index++) {
            const element = highlightList[index];
            element.style.background = valBase
        }
        formOther.style.background = 'inherit'
        formOther.style.color = 'white'
    }

    return resultString
}

function getValuesOfferings(){
// SECTION // OFFERING
    var getSingleOffering = globalSingleOffering
    var formOfferingCount = document.getElementById('ta_form_offering_count')
    var formExpOfferings = document.getElementById('form_exp_offerings')
    
    // // DEMO value
    // getSingleOffering = false

    var getTextAreaOtherOffering1 = document.getElementById('otherOfferingsValue1').value
    var getTextAreaOtherOffering2 = document.getElementById('otherOfferingsValue2').value
    var getTextAreaOtherOffering3 = document.getElementById('otherOfferingsValue3').value
    var getTextAreaOtherOffering4 = document.getElementById('otherOfferingsValue4').value

    var listVal = [getTextAreaOtherOffering1, getTextAreaOtherOffering2, getTextAreaOtherOffering3, getTextAreaOtherOffering4]
    
    
    // elements
    var listValues = [document.getElementById('otherOfferingsValue1'), document.getElementById('otherOfferingsValue2'), document.getElementById('otherOfferingsValue3'), document.getElementById('otherOfferingsValue4')]
            
    // offering type: single / multi
    if (getSingleOffering){
        formOfferingCount.innerHTML = 'Single offering'
        formExpOfferings.style.display = 'none'
        
        checkPrimary()
        
        for (let index = 0; index < listValues.length; index++) {
            var element = listValues[index];
            element.innerHTML = ''
        }
        globalTextAreaOtherOfferings = ''
        for (let index = 0; index < listValues.length; index++) {
            const element = listValues[index];
            element.value = ''
        }
        eFlag_offering_other = false
    } else {
        formOfferingCount.innerHTML = 'Multi-offering merge'
        formExpOfferings.style.display = 'block'
        
        checkPrimary()

        var formOther = document.getElementById('ta_form_offering_others')
        formOther.innerHTML = checkOtherOfferings(listVal)
        globalTextAreaOtherOfferings = formOther.innerHTML
        
        if (eFlag_offering_other){
            for (let index = 0; index < listValues.length; index++) {
                const element = listValues[index];
                element.style.background = errYellow
            }
        } else {
            for (let index = 0; index < listValues.length; index++) {
                const element = listValues[index];
                element.style.background = valBase
            }
        }
    }
// end SECTION // OFFERING
}

function getValuesCourse(){
// SECTION // COURSE
    var getLeastVersion = globalLeastVersion

    var getTextAreaCourseCode = document.getElementById('courseValue').value
    var getTextAreaCourseVersion = document.getElementById('versionValue').value

    var formCourseCode = document.getElementById('ta_form_course_code')
    var formExpCourse = document.getElementById('form_exp_course')
    var formCourseSpecialLeft = document.getElementById('ta_form_course_special_left')
    var formCourseSpecialRight = document.getElementById('ta_form_course_special_right')

    highlight = document.getElementById('courseValue')

    // // DEMO value
    // getTextAreaCourseCode = 'RH124'

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
        if (getTextAreaCourseCode.toUpperCase() == 'DO700'){
            formExpCourse.style.display = 'block'
            formCourseSpecialLeft.innerHTML = getTextAreaCourseCode.toUpperCase()
            formCourseSpecialRight.innerHTML = 'DO180'
            formCourseCode.innerHTML = getTextAreaCourseCode.toUpperCase()

            globalTextAreaCourseCode = getTextAreaCourseCode
            globalCourseSpecial = 'For the first week of DO700 after app-creation set on ROL DO180.'

        } else if (getTextAreaCourseCode.toUpperCase() == 'DO720'){
            formExpCourse.style.display = 'block'
            formCourseSpecialLeft.innerHTML = getTextAreaCourseCode.toUpperCase()
            formCourseSpecialRight.innerHTML = 'DO180'
            formCourseCode.innerHTML = getTextAreaCourseCode.toUpperCase()

            globalTextAreaCourseCode = getTextAreaCourseCode
            globalCourseSpecial = 'For the first week of DO720 after app-creation set on ROL DO180.'
        } else {
    // basic course
            formExpCourse.style.display = 'none'
            formCourseSpecialLeft.innerHTML = ''
            formCourseSpecialRight.innerHTML = ''
            formCourseCode.innerHTML = getTextAreaCourseCode
            globalTextAreaCourseCode = getTextAreaCourseCode
        }
    }

    var formCourseVersion = document.getElementById('ta_form_course_version')

    highlight = document.getElementById('versionValue')

    if (getLeastVersion){
        formCourseVersion.innerHTML = 'newest version'        
        highlight.style.background = valBase
        formCourseVersion.style.background = 'inherit'
        formCourseVersion.style.color = 'white'

        eFlag_course_version = false
        highlight = document.getElementById('versionValue')
        highlight.style.background = valBase
        
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
            globalTextAreaCourseVersion = getTextAreaCourseVersion
        }
    }
// end SECTION // COURSE
}

function getValuesInstructor(){
    // SECTION // INSTRUCTOR
    var getTextAreaInstructorRHNID = document.getElementById('instrRhnidValue').value
    var getTextAreaInstructorEmail = document.getElementById('instrEmailValue').value

    // // DEMO values
    // getTextAreaInstructorRHNID = 'some_rhnid'
    // getTextAreaInstructorEmail = 'some@email.cz'
    
  // RHNID
    var formInstructorRHNID = document.getElementById('ta_form_instructor_rhnid')

    highlight = document.getElementById('instrRhnidValue')
    if (getTextAreaInstructorRHNID.length == 0){
        eFlag_instructor_rhnid = true
        formInstructorRHNID.innerHTML = 'EMPTY <<< is not valid'
    } else if (getTextAreaInstructorRHNID.includes(' ')){
        eFlag_instructor_rhnid = true
        formInstructorRHNID.innerHTML = 'space <<< is not valid'
    } else {
        eFlag_instructor_rhnid = false
        highlight.style.background = valBase
        formInstructorRHNID.innerHTML = getTextAreaInstructorRHNID
        globalTextAreaInstructorRHNID = getTextAreaInstructorRHNID
        formInstructorRHNID.style.backgroundColor = 'inherit'
        formInstructorRHNID.style.color = 'white'
    }
    if (eFlag_instructor_rhnid){
        highlight.style.background = errYellow
        formInstructorRHNID.style.background = errYellow
        formInstructorRHNID.style.color = 'black'
    }
    
  // Email
    var formInstructorEmail = document.getElementById('ta_form_instructor_email')
    
    highlight = document.getElementById('instrEmailValue')

    if (validEmail(getTextAreaInstructorEmail)){
        formInstructorEmail.innerHTML = getTextAreaInstructorEmail
        globalTextAreaInstructorEmail = getTextAreaInstructorEmail
        eFlag_instructor_email = false
        formInstructorEmail.style.background = 'inherit'
        formInstructorEmail.style.color = 'white'
        highlight.style.background = valBase

    } else {
        if (getTextAreaInstructorEmail.length == 0) getTextAreaInstructorEmail = 'EMPTY'
        eFlag_instructor_email = true
        formInstructorEmail.innerHTML = getTextAreaInstructorEmail + ' <<< not in valid'
        formInstructorEmail.style.background = errYellow
        formInstructorEmail.style.color = 'black'
        highlight.style.background = errYellow
    }

    // email pattern match must include 1+ signs '@' 1+ signs '.' and 1+ signs
// end SECTION // INSTRUCTOR
}

function getValuesRegion(){
  // region selection
  var getTextAreaRegion = document.getElementById('regionValue').value

  // HERE // List of reagions
  var arrayAllRegions = ['APAC', 'LATAM', 'NAMER', 'EMEA']
  var formRegion = document.getElementById('ta_form_region')

//   // DEMO value
//   getTextAreaRegion = 'emea'

  highlight = document.getElementById('regionValue')

  getTextAreaRegion = getTextAreaRegion.toUpperCase()
  if (arrayAllRegions.includes(getTextAreaRegion)){
      formRegion.innerHTML = getTextAreaRegion
      globalTextAreaRegion = getTextAreaRegion
      eFlag_region = false

      highlight.style.backgroundColor = valBase

      formRegion.style.background = 'inherit'
      formRegion.style.color = 'white'

  } else {
      eFlag_region = true

      if (getTextAreaRegion==''){
          getTextAreaRegion = 'empty'
          
      }
      formRegion.innerHTML = getTextAreaRegion + ' <<< is not valid'
      formRegion.style.background = errYellow
      formRegion.style.color = 'black'

      highlight.style.backgroundColor = errYellow
  }
}

function getValuesDelivery(){
    // SECTION // DELIVERY
    var getDeliveryOnline = globalDeliveryOnline
    var getBluejeans = globalBluejeans

    var getTextAreaLocationAddress = document.getElementById('addressValue').value
    var getTextAreaLocationLink = document.getElementById('linkValue').value

    var formDeliveryType = document.getElementById('ta_form_delivery_type')
    var formExpOnline = document.getElementById('form_exp_online')
    var formBluejeans = document.getElementById('ta_form_bluejeans')

    var formExpOnsite = document.getElementById('form_exp_onsite')
    var formOnsiteAddress = document.getElementById('ta_form_address_street')
    var formOnsiteLink = document.getElementById('ta_form_address_link')
  // online / onsite
    if (getDeliveryOnline){
        formDeliveryType.innerHTML = 'online'
        formExpOnline.style.display = 'block'
        formExpOnsite.style.display = 'none'
    
  // bluejeans yes/no
        if(getBluejeans){
            formBluejeans.innerHTML = 'Yes'
        } else {
            formBluejeans.innerHTML = 'No'
        }

        eFlag_address = false

        highlight = document.getElementById('addressValue')
        highlight.style.background = valBase

        formOnsiteAddress.innerHTML = ''
        formOnsiteLink.innerHTML = ''

        globalTextAreaLocationAddress = ''
        globalTextAreaLocationLink = ''

    } else {
        formDeliveryType.innerHTML = 'onsite'
        formExpOnline.style.display = 'none'
        formExpOnsite.style.display = 'block'
  // location addres and link
        highlight = document.getElementById('addressValue')
        if (getTextAreaLocationAddress.length == 0){
            eFlag_address = true
            formOnsiteAddress.innerHTML = 'EMPTY <<< is not valid'

            formOnsiteAddress.style.background = errYellow
            formOnsiteAddress.style.color = 'black'
            highlight.style.background = errYellow
        } else {
            eFlag_address = false
            formOnsiteAddress.innerHTML = getTextAreaLocationAddress
            globalTextAreaLocationAddress = getTextAreaLocationAddress
            formOnsiteAddress.style.background = 'inherit'
            formOnsiteAddress.style.color = 'white'
            highlight.style.background = valBase
        }
        formOnsiteLink.innerHTML = getTextAreaLocationLink
        globalTextAreaLocationLink = getTextAreaLocationLink
        formBluejeans.innerHTML = ''
    }
    getValuesRegion()
// end SECTION // DELIVERY
}

function getValuesEbook(){
// SECTION // Ebook
    var getEbook = globalEbook

    var formEbook = document.getElementById('ta_form_ebook')
    if(getEbook){
        formEbook.innerHTML = 'yes enable'
    } else {
        formEbook.innerHTML = 'no disable'
    }
// end SECTION // Ebook
}

function getValuesComment(){    
// SECTION // Comments
        var getTextAreaComment = document.getElementById('commentValue').value
    
        var formComment = document.getElementById('ta_form_comments')
        if (getTextAreaComment.length == 0) getTextAreaComment = 'none'
        formComment.innerHTML = getTextAreaComment.replaceAll(/(\r\n|\n|\r)/gm, '<br>')
        var whileCheck = true
        while (whileCheck){
            if(!formComment.innerHTML.includes('<br><br><br>')){
                whileCheck = false
            }
            formComment.innerHTML = formComment.innerHTML.replaceAll('<br><br><br>', '<br><br>')
        }
        globalTextAreaComment = formComment.innerHTML
// end SECTION // Comments
}

function getValuesStudentCount(){
// student count
    var getTextAreaStudentCount = document.getElementById('studValue').value

    // // DEMO value
    // getTextAreaStudentCount = '0'

    var formStudentCount = document.getElementById('ta_form_student_count')
    highlight = document.getElementById('studValue')

    if ((getTextAreaStudentCount == '') && (parseInt(getTextAreaStudentCount) != 0)){
    
        eFlag_student_count = true

        formStudentCount.innerHTML = 'EMPTY <<< is not valid'
        formStudentCount.style.background = errYellow
        formStudentCount.style.color = 'black'

        highlight.style.backgroundColor = errYellow
    } else {
        formStudentCount.innerHTML = parseInt(getTextAreaStudentCount)
        globalTextAreaStudentCount = getTextAreaStudentCount

        eFlag_student_count = false

        formStudentCount.style.background = 'inherit'
        formStudentCount.style.color = 'white'
        highlight.style.backgroundColor = valBase
    }
}

function getValuesInvites(){
// SECTION // INVITES
    var getInvites = globalInvites   
    var getInvitesToStudnets = globalInvitesToStudnets
    var getInvitesInEng = globalInvitesInEng

    var getTextAreaInviteLanguage = document.getElementById('inviteValue').value

    var formSendOut = document.getElementById('ta_form_invites_sendout')
    var formExpInvites = document.getElementById('form_exp_invites')

    var formRecipient = document.getElementById('ta_form_invites_recipient')
    var formLanguage = document.getElementById('ta_form_invites_language')

    // sendout y/n
    if (getInvites){
        formSendOut.innerHTML = 'Yes'
        formExpInvites.style.display = 'block'

        if (getInvitesToStudnets){
            formRecipient.innerHTML = 'instructor and students'
        } else {
            formRecipient.innerHTML = 'just instructor'
        }

        highlight = document.getElementById('inviteValue')

        if (getInvitesInEng){
            eFlag_language = false

            highlight.style.background = valBase
            
            formLanguage.innerHTML = 'Eng'
            formLanguage.style.background = 'inherit'
            formLanguage.style.color = 'white'

        } else {
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
        formSendOut.innerHTML = 'No'
        formExpInvites.style.display = 'none'
        eFlag_language = false
        highlight = document.getElementById('inviteValue')
        highlight.style.background = valBase
        formRecipient.innerHTML = ''
        formLanguage.innerHTML = ''
    }
    globalTextAreaInviteLanguage = formLanguage.innerHTML

   getValuesCourse()
// end SECTION // INVITES
}

function getValuesDuration(){
    // SECTION // DURATION (lms)
    var getTextAreaLMS = document.getElementById('lmsValue').value

    // // DEMO testing
    // getTextAreaLMS = 'Mon, 03-Feb, 09:00 - Thu, 06-Jan, 15:00 (GMT+2) CEST   Open in new window'

    // Mon, 03-Oct, 09:00 - Thu, 06-Oct, 15:00 (GMT+2) CEST   Open in new window
    // >>> 10/03/2022, 09:00 AM
    // >>> 10/06/2022, 03:00 PM

    highlight = document.getElementById('lmsValue')
    
    if (getTextAreaLMS.length == 0){
        eFlag_lms = true
        highlight.style.backgroundColor = errYellow

        var formStart = document.getElementById('ta_form_durration_start')
        formStart.innerHTML = 'invalid input'
        formStart.style.background = errYellow
        formStart.style.color = 'black'

        var formEnd = document.getElementById('ta_form_durration_end')
        formEnd.innerHTML = 'invalid input'
        formEnd.style.background = errYellow
        formEnd.style.color = 'black'
        return
    }

    try {
        var arrayLms = getTextAreaLMS.split(', ')

      // START DATE and time
        var arrayDateStart = arrayLms[1].split('-')
        var arrayTimeStart = arrayLms[2].split(' ')
        arrayTimeStart = arrayTimeStart[0].split(':')
        var dayPartStart = 'AM'

        if(parseInt(arrayTimeStart[0])>11){
            dayPartStart = 'PM'
            if(parseInt(arrayTimeStart[0]) > 12){
                mid = parseInt(arrayTimeStart[0]) - 12
                arrayTimeStart[0] = '0' + mid
            }
        }

        arrayDateStart[2] = getMonth(arrayDateStart[1])
        if (parseInt(arrayDateStart[2]) < 10){
            arrayDateStart[2] = '0' + arrayDateStart[2]
        }

        var formStart = document.getElementById('ta_form_durration_start')
        var startYear = thisYear
        if (arrayDateStart[2] < thisMonth){
            startYear = thisYear + 1
        }
        formStart.innerHTML = arrayDateStart[2]+'/'+arrayDateStart[0]+'/'+startYear+'; '+ arrayTimeStart[0]+':'+arrayTimeStart[1]+' '+dayPartStart
        globalTextAreaLMSstart = formStart.innerHTML
        formStart.style.background = 'inherit'
        formStart.style.color = 'white'

      // END DATE and time
        var arrayDateEnd = arrayLms[3].split('-')
        var arrayTimeEnd = arrayLms[4].split(' ')
        arrayTimeEnd = arrayTimeEnd[0].split(':')
        var dayPartEnd = 'AM'

        if(parseInt(arrayTimeEnd[0])>11){
            dayPartEnd = 'PM'
            if(parseInt(arrayTimeEnd[0]) > 12){
                mid = parseInt(arrayTimeEnd[0]) - 12
                arrayTimeEnd[0] = '0' + mid
            }
        }

        arrayDateEnd[2] = getMonth(arrayDateEnd[1])
        if (parseInt(arrayDateEnd[2]) < 10){
            arrayDateEnd[2] = '0' + arrayDateEnd[2]
        }

        var formEnd = document.getElementById('ta_form_durration_end')
        var endYear = startYear
        if (arrayDateEnd[2] < arrayDateStart[2]){
            endYear = startYear + 1
        }
        formEnd.innerHTML = arrayDateEnd[2]+'/'+arrayDateEnd[0]+'/'+endYear+'; '+ arrayTimeEnd[0]+':'+arrayTimeEnd[1]+' '+dayPartEnd
        globalTextAreaLMSend = formEnd.innerHTML
        formEnd.style.background = 'inherit'
        formEnd.style.color = 'white'

        highlight.style.backgroundColor = valBase
        eFlag_lms = false
    }
    catch (e) {
        console.log(e)
        eFlag_lms = true
        highlight.style.backgroundColor = errYellow

        var formStart = document.getElementById('ta_form_durration_start')
        formStart.innerHTML = 'invalid input'
        formStart.style.background = errYellow
        formStart.style.color = 'black'

        var formEnd = document.getElementById('ta_form_durration_end')
        formEnd.innerHTML = 'invalid input'
        formEnd.style.background = errYellow
        formEnd.style.color = 'black'
    }
// end SECTION // DURATION (lms)
}

function getValues(){
    getValuesOfferings()
    getValuesCourse()
    getValuesInstructor()
    getValuesDelivery()
    getValuesEbook()
    getValuesInvites()
    getValuesStudentCount()
    getValuesDuration()
    getValuesComment()

// SECTION // Validity check        
    var evalButtonConfirm = document.getElementById('buttonConfirm')
    var highlightEdit = document.getElementById('buttonEdit')
    // evalErr true >> has error >> lock confirm
    if(evalErr()){
        document.getElementById('buttonConfirm').disabled = true
        evalButtonConfirm.style.backgroundColor = lockedGrey
        highlightEdit.style.backgroundColor = errYellow
    } else {
        document.getElementById('buttonConfirm').disabled = false
        evalButtonConfirm.style.backgroundColor = 'inherit'
        highlightEdit.style.backgroundColor = 'inherit'
    }
// end SECTION // Validity check
}

function isNumeric(str) {
    if (typeof str != 'string') return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

function getMonth(string_month){
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return month.indexOf(string_month)+1
}

function createEmail(){
    var subjectElement = document.getElementById('subject')
    subject = 'MOCK TEST TICKET: ' + 'VT creation request for ' + globalTextAreaPrimary

    // DEMO
    // subjectElement.innerHTML = subject

    var ticketType = 'was sth'
    
    var tmpIndex = 0
    var tmpList = ['']

    var tmpStr

    var _ = false 
    
    var resComments = ''
    if (globalCourseSpecial.length){
        resComments = globalCourseSpecial + '<br>'
        _ = true
    }

    var resOffering = 'Offering ID: ' + globalTextAreaPrimary + '<br>'
    if (!globalSingleOffering){
        tmpList[tmpIndex] = 'multi'
        tmpIndex += 1
        resOffering = resOffering + 'Other offerings: ' + globalTextAreaOtherOfferings + '<br>'
    }
    
    var resCourse = 'Course code: ' + globalTextAreaCourseCode
    if (!globalLeastVersion){
        resCourse += '---> version: ' + globalTextAreaCourseVersion
        tmpList[tmpIndex] = 'spec.ver'
        tmpIndex += 1
    }
    resCourse += '<br><br>'

    var resInstructor = 'Instructor RHNID: ' + globalTextAreaInstructorRHNID + '<br>'
    resInstructor += 'Instructor EMAIL: ' + globalTextAreaInstructorEmail + '<br><br>'
    
    var resDelivery = 'Delivery: '
    if (!globalDeliveryOnline){
        resDelivery += 'ONSITE' + '<br>'
        resDelivery += 'Location Address: ' + globalTextAreaLocationAddress + '<br>'
        if (globalTextAreaLocationLink.length > 0){
            resDelivery += 'Location Link: ' + globalTextAreaLocationLink + '<br>'
        }
        tmpList[tmpIndex] = 'delivery'
        tmpIndex += 1
    } else {
        resDelivery += 'online &'
        if (!globalBluejeans){
            resDelivery += ' no bj creation needed'
            tmpList[tmpIndex] = 'bj'
            tmpIndex += 1
        } else {
            resDelivery += ' bj creation requested'
        }
    }
    if (_ || (globalTextAreaRegion=='EMEA')){
        tmpList[tmpIndex] = 'comment'
        tmpIndex += 1
        resComments += globalStringEmeaCC + '<br><br>'
    }

    if (globalTextAreaComment.length > 0 && globalTextAreaComment != 'none'){
        resComments = resComments + '----<br>' + globalTextAreaComment + '<br>----<br>'
    }

    resDelivery += '<br>' + 'Region: '+ globalTextAreaRegion + '<br><br>'
    
    _ = false   
    var resInvites = ''
    if (!globalInvites){
        resInvites += 'Do not send out invites.'
        _ = true
    } else {
        resInvites = 'Send out invites '
        if (!globalInvitesToStudnets){
            resInvites += 'to JUST instructor'
            _ = true
        } else {
            resInvites += 'to instructor and enrolled students'
        }
        if (!globalInvitesInEng){
            resInvites += ' using ' + globalTextAreaInviteLanguage + ' template.'
            _ = true
        } else {
            resInvites += ' using English template.'
        }
    }
    if (_){
        tmpList[tmpIndex] = 'invites'
        tmpIndex += 1
    }
    resInvites += '<br><br>'
    
    // TODO
    var resEbook = ''
    if (!globalEbook){
        resEbook += 'Disable ebook.<br><br>'
        tmpList[tmpIndex] = 'ebook'
        tmpIndex += 1
    } else {
        resEbook += 'Enable ebook.<br><br>'
    }
    
    var resDurration = 'Start date & time: ' + globalTextAreaLMSstart + '<br>'
    resDurration += 'End date & time : ' + globalTextAreaLMSend + '<br><br>'

    ticketType = tmpList[0]
    if(tmpList.length > 0){
        for (let index = 1; index < tmpList.length; index++) {
            const element = tmpList[index];
            if (index != tmpList.length){
                ticketType = ticketType + ' - '
            }
            ticketType = ticketType + element
        }
    }

    requestContent = /*'<br>------------<br><br>' +*/ 'Hello team,<br>Kindly create VT as per below information:<br><br>'
    if (ticketType.length > 0){
        requestContent += 'Mod---> ' + ticketType + '<br><br>'
    }
    requestContent = requestContent + resComments + resOffering + resCourse + resInstructor + resDelivery + resInvites + resEbook + 'Format of date   : mm/dd/yy; HH:MM XX<br>' + resDurration
    requestContent = requestContent + '<br>Thank you,<br>' + requester //+ 'NICOL Castillo'

    // DEMO
    // var contentElement = document.getElementById('requestContent')
    // contentElement.innerHTML = requestContent
}

function encodeString(in_string){
    in_string = in_string.replaceAll('<br>', '\%0A')
    in_string = in_string.replaceAll(' ', '\%20')
    in_string = in_string.replaceAll(':', '\%3A')
    in_string = in_string.replaceAll('(', '\%28')
    in_string = in_string.replaceAll(')', '\%29')
    in_string = in_string.replaceAll('@', '\%40')
    in_string = in_string.replaceAll('&', '\%26')
    in_string = in_string.replaceAll('_', '\%5F')
    in_string = in_string.replaceAll('-', '\%2D')
    in_string = in_string.replaceAll('\\', '\%5C')
    in_string = in_string.replaceAll('.', '\%2E')
    in_string = in_string.replaceAll('\'', '\%27')
    return in_string
}

// TODO replace symbols and breaks (URL-encoding) -->> https://www.w3schools.com/tags/ref_urlencode.ASP
function cleanContent(){
    subject = encodeString(subject)
    requestContent = encodeString(requestContent)
    requester = encodeString(requester)
    recipient = encodeString(recipient)
    // console.log('request: ' + requestContent)
}

function sendEmail(){
    var send = document.getElementById('buttonConfirm')
    cleanContent()
    // send.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + recipient + '&su=' + subject + '&body=' + requestContent
    var link = 'mailto:'+recipient+'?subject='+subject+'&body='+requestContent
    window.open(link)
    // console.log('was clicked...')
}