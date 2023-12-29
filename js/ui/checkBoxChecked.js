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
        $(this).next('.connect__wrapper-label').css({ top: '-10px', left: '0', color: '#FFF', fontFamily: 'var(--mainFont)', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '125%' });
    } else {
        $(this).next('.connect__wrapper-label').css({ top: '12px', left: '0', color: '#FFF', fontFamily: 'var(--mainFont)', fontSize: '21px', fontStyle: 'normal', fontWeight: 500, lineHeight: '125%' });
    }
});
