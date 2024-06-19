$(document).ready(function() {
    $(".selectable").click(function() {
        const activity = $(this).text();
        const cliffSite = $(this).closest('tr').find('th').eq($(this).index()).text();
        const activityText = `${activity} at ${cliffSite}`;
        const selectedActivitiesBox = $("#selected-activities-box");
        const selectedActivitiesList = $("#selected-activities-list");

        if ($(this).hasClass("highlighted")) {
            $(this).removeClass("highlighted");
            selectedActivitiesList.find(`li:contains(${activityText})`).remove();
        } else {
            $(this).addClass("highlighted");
            selectedActivitiesList.append(`<li>${activityText}</li>`);
        }

        if (selectedActivitiesList.children().length === 0) {
            selectedActivitiesBox.hide();
        } else {
            selectedActivitiesBox.show();
        }
    });
});
