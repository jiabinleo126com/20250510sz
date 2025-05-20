import './index.scss'

declare const layer: any;

$("select").change(function () {
    if ($(this).val()) {
        $(this).css("color", "#333");
    }
    else {
        $(this).css("color", "#999");
    }
});
var inputs = [
    {
        name: "name",
        message: "请输入学生姓名"
    },
    {
        name: "mobile",
        message: "请输入家长手机号"
    },
    {
        name: "grade",
        message: "请选择即将入读年级"
    },
    {
        name: "want_school",
        message: "请输入意向学校"
    }
];
$(".submit").on("click", function () {
    var form:any = $(this).closest("form");
    var errors = [];
    var msg = inputs.reduce(function (acc, input) {
        var val = form.find("[name=\"".concat(input.name, "\"]")).val();
        if (!val) {
            errors.push(input.message);
        }
        return errors[0];
    }, "");
    if (msg) {
        layer.open({
            content: msg,
            skin: 'msg',
            time: 3
        });
    }
    else {
        $.ajax({
            url: "".concat(form[0].action, "&t=").concat(Math.random().toString()),
            type: form[0].method,
            dataType: "JSON",
            data: form.serialize(),
            success: function (res) {
                if (res.status == 1) {
                    layer.open({
                        content: "您已报名成功，谢谢您的参与！",
                        skin: 'msg',
                        time: 3
                    });
                    form[0].reset();
                }
                else {
                    layer.open({
                        content: res.info,
                        skin: 'msg',
                        time: 3
                    });
                }
            },
            error: function () {
                layer.open({
                    content: "报名失败，请稍后再试",
                    skin: 'msg',
                    time: 3
                });
            }
        });
    }
    return false;
});