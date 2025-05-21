import './index.less';

declare const layer: any;
declare const $: any;

$(document).on("click", ".showTk", function () {
    $(".mask").addClass("show");
});
$(document).on("click", ".close", function () {
    $(".mask").removeClass("show");
    $(".error-tips").html("");
    $(this).parents(".mask").find("form")[0].reset();
    $("select").css("color", "#999");
});
var inputs = [
    {
        class: "name",
        message: "请输入学生姓名"
    },
    {
        class: "mobile",
        message: "请输入家长手机号"
    },
    {
        class: "grade",
        message: "请选择就读年级"
    },
    {
        class: "want_school",
        message: "意向学校"
    }
];
$(".submit").on("click", function () {
    var form: any = $(this).closest("form");
    var errors = [];
    var msg = inputs.reduce(function (acc, input) {
        var val = form.find(".".concat(input.class)).val();
        if (!val) {
            errors.push(input.message);
        }
        return errors[0];
    }, "");
    if (msg) {
        layer.msg(msg);
        return false;
    }
    else {
        $.ajax({
            url: "".concat(form[0].action),
            type: form[0].method,
            dataType: "JSON",
            data: form.serialize(),
            success: function (res) {
                if (res.status == 1) {
                    $('.mask_form').removeClass('show');
                    layer.msg("您已报名成功，谢谢您的参与！");
                    $(document).find(".close").click();
                    form[0].reset();
                    $("select").css("color", "#999");
                }
                else {
                    layer.msg(res.info);
                }
            },
            error: function () {
                layer.msg("报名失败，请稍后再试");
            }
        });
    }
    return false;
});
$("#go-top").on("click", function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
$("select").change(function () {
    $(this).css("color", "#000");
});
$('#share').share({
    sites: ['wechat']
});