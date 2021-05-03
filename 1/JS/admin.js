$(() => {
    $("#addButton").on('click', ()=>{
        window.location.assign("add.php");
    });
});

function editTest(testID) {
    window.location.assign("edit.php?TestID=" + testID);
    return true;
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
