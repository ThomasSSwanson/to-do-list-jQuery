function newItem() {
    let toDoInput = $('#input').val();
    if (!toDoInput) {
        alert("You must write something!");
    }
    else {
        $('#list').append('<li>' + toDoInput + '</li>');  
    }
    


}