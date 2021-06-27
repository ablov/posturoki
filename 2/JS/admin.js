$(() => {
    $("#addButton").on('click', ()=>{
        window.location.assign("add.php");
    });
});

function editTest(testID) {
    window.location.assign("edit.php?ID=" + testID);
    return true;
}

function toggleTest(testID) {
    $.post("admin.php",
        {Action: "TOGGLE",
            TestID: testID}
    )
        .done(() => location.reload())
        .fail(() => alert("При выполнении операции произошла ошибка"));
}

function removeTest(testID, testTitle) {
    if (confirm('Подтвердите ваше желание удалить тест "' + testTitle + '"')) {
        $.post("admin.php",
            {Action: "DELETE",
            TestID: testID}
        )
            .done(() => location.reload())
            .fail(() => alert("При выполнении операции удаления произошла ошибка"));
    }
    return true;
}
