document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.connect__wrapper-submit');
    const checkbox = document.getElementById('myCheckbox');

    if (submitButton && checkbox) {
        submitButton.addEventListener('click', function () {
            checkbox.checked = !checkbox.checked;
        });
    }
});
$('.connect__wrapper-input').on('input', function () {
    if ($(this).val().trim() !== '') {
        $(this).next('.connect__wrapper-label').css({ top: '-20px', fontSize: '14px', });
    } else {
        $(this).next('.connect__wrapper-label').css({ top: '12px', fontSize: '14px', });
    }
});
