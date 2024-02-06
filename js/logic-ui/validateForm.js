$(document).ready(function () {
    $(".connect__wrapper-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            company: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                minlength: 3
            },
            telephone: {
                required: true,
            }
        },
        messages: {
            name: {
                minlength: "Имя должно содержать минимум 5 символов"
            },
            company: {
                minlength: "Название компании должно содержать минимум 3 символа"
            },
            email: {
                // minlength: "Почта должна иметь формат abc@domain.tld"
            },
            telephone: {

            }
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Это поле обязательно для заполнения.",
        email: "Почта должна иметь формат abc@domain.tld",
        telephone: "abva"
    });
});
