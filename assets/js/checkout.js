$(document).ready(function(){
    $("#button-hidder").click(function(){
        $(this).hide();
        $("#button-hidder-1").show();
    });
    $("#button-hidder-1").click(function(){
        $("#button-hidder").show();
        $(this).hide();
    });
    $(".edit").click(function(){
        // $(".hide-for-front").css("display","none");
        $(".show-for-front").css("display","block");
    });
    $(".call-back").click(function(){
        // $(".hide-for-front").css("display","block");
        $(".show-for-front").css("display","none");
    });
    $("#button-hidder").click(function(){
        $("#collapseTwo,#payment-option").collapse("hide");
    });
    $("#pay-pal-hidder").click(function(){
        $("#debit,#cash").collapse("hide");
        $("#PayPal,#debit").collapse("hide");
        setTimeout(() => {
            window.location.replace("index.html");
        }, 3000);
    })
    $("#debit-hidder").click(function(){
        $("#PayPal,#cash").collapse("hide");
        $("#PayPal,#debit").collapse("hide");
        setTimeout(() => {
            window.location.replace("index.html");
        }, 3000);
    })
    $("#cash-hidder").click(function(){
        $("#PayPal,#debit").collapse("hide");
        setTimeout(() => {
            window.location.replace("index.html");
        }, 3000);
    });
})
