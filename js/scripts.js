$(document).ready(function() {
  $("#stress").submit(function(event) {
    event.preventDefault();

    var warningSigns = [];
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningSign = $(this).val();
      warningSigns.push(warningSign);
    });

    var healthSymptoms = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var healthSymptom = $(this).val();
      healthSymptoms.push(healthSymptom);
    });

    var copingMethods = [];
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var copingMethod = $(this).val();
      copingMethods.push(copingMethod);
    })
    $(".results").show();
    if (warningSigns.length > copingMethods.length) {
      $("#display").text("Get some help");
    } else if (healthSymptoms.length > copingMethods.length) {
      $("#display").text("See a doctor");
    } else if (copingMethods.length >= warningSigns.length) {
      $("#display").text("Keep up the good work");
    }

  })
})
