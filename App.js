//$('#selectElement').val($('#selectElement option:eq(0)').val());
/* 
$(document).ready(function () {
    $("#selectElement").val($("#selectElement option:first").val())
   }); */
   function updateStatus(){
    var empList = document.getElementById("ListOfEmp");
    var statusList = document.getElementById("selectElement");

    if(empList.value === "Justin Bharucha"){
        statusList.value = "approved";
    }
    else if(empList.value === "MP Bharucha")
    {
        statusList.value = "rejected";
    }
    else{
        statusList.value = "await";
    }
   }