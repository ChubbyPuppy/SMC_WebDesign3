  $(document).ready(function () {
    //   FORM VALIDATION
    $("form.needs-validation").submit(function(event){
        event.preventDefault();
  
          $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
      })

    // CHECKBOX BILLING SAME
    $('#check-same').click(function () {
      if ($('#check-same').is(':checked')) {
        $('#firstName-billing').val($('#firstName').val());
        $('#lastName-billing').val($('#lastName').val());
        $('#inputAddress-billing').val($('#inputAddress').val());
        $('#inputCity-billing').val($('#inputCity').val());
        $('#inputZip-billing').val($('#inputZip').val());
        var state = $('#inputState option:selected').val();
        $('#inputState-billing option[value=' + state + ']').attr('selected', 'selected');
      } else {
        //Clear on uncheck
        $('#firstName-billing').val("");
        $('#lastName-billing').val("");
        $('#inputAddress-billing').val("");
        $('#inputCity-billing').val("");
        $('#inputZip-billing').val("");
        $('#inputState-billing option[value=""]').attr('selected', 'selected');
      };
    });


// REMOVE ITEM LIST WITH BUTTON CLICKS
$( ".proceed" ).click(function() {
    $( ".cart" ).hide();
  });

//   SHOW SHIPPING SECTION WITH BUTTON CLICK
  $( ".proceed" ).click(function() {
    $( "#shipping" ).show();
  });

    // VALIDATE FORM FIELDSET FOR NEXT FIELDSET TO OPEN
    $("#shipping input").on("keyup change", function(){
        var inputValidate = true;
        $("#shipping input").each(function(index, element){   		
            if ($(element).val() == "")
               inputValidate = false;
        });
        
        if (inputValidate)
            $("#billing").show("slow");
        else
            $("#billing").hide();
    });

    $("#billing input").on("keyup change", function(){
        var inputValidate = true;
        $("#billing input").each(function(index, element){   		
            if ($(element).val() == "")
               inputValidate = false;
        });
        
        if (inputValidate)
            $("#credit").show("slow");
        else
            $("#credit").hide();
    });



    });