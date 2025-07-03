$(document).ready(function () {
    const $taskList = $('#task-list');
    const $taskInput = $('#new-task');

    $('#add-btn').click(function () {
        const taskText = $taskInput.val().trim();
        if (taskText) {
            const $li = $('<li>')
                .addClass('list-group-item list-group-item-action')
                .text(taskText)
                .attr('data-task', taskText);

            $taskList.append($li);
            $taskInput.val('');
        }
    });

    $taskList.on('click', 'li', function () {
        const text = $(this).data('task');
        $('#modal-body-text').text(text);
        const modal = new bootstrap.Modal($('#taskModal'));
        modal.show();
    });
});
