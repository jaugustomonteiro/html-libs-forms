(function ($) {
  var settings = {
    textLoginMessage: "#textLoginMessage",
    borderDefault: "#ccc",
    backgroundDefault: "#FFF",
    colorError: "#dc3545",
    backgroundErrorColor: "#fbeaec",
  };

  var JAMLFormLogin = $("#JamlFormLogin");

  var JAMLInputLogin = JAMLFormLogin.find(".jaml-form-control");

  var inputEmailError = {
    border: "1px solid " + settings.colorError,
    background: settings.backgroundErrorColor,
  };

  var inputEmailDefault = {
    border: "1px solid " + settings.borderDefault,
    background: settings.backgroundDefault,
  };

  JAMLInputLogin.css(inputEmailDefault);

  $(settings.textLoginMessage).html("&nbsp");

  function checkEmailLogin(inputEmail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
      return true;
    }
    return false;
  }

  function isLoginValidCPF(cpf) {
    if (typeof cpf !== "string") return false;
    cpf = cpf.replace(/[\s.-]*/gim, "");
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  function validateEmailForm(input) {
    JAMLInputLogin.css(inputEmailDefault);
    $(settings.textLoginMessage).html("&nbsp");
    for (var i = 0; i < input.length; i++) {
      if (input.eq(i).hasClass("jaml-form-text") && input.eq(i).hasClass("jaml-form-valid") && input.eq(i).val() === "") {
        input.eq(i).css(inputEmailError);
        $(settings.textLoginMessage).html(input.eq(i).siblings("small").text()).css("color", settings.colorError);
        return false;
      }

      if (input.eq(i).hasClass("jaml-form-phone") && input.eq(i).hasClass("jaml-form-valid") && input.eq(i).val() === "") {
        input.eq(i).css(inputEmailError);
        $(settings.textLoginMessage).html(input.eq(i).siblings("small").text()).css("color", settings.colorError);
        return false;
      }

      if (input.eq(i).hasClass("jaml-form-email") && input.eq(i).hasClass("jaml-form-valid")) {
        if (!checkEmailLogin(input.eq(i).val())) {
          input.eq(i).css(inputEmailError);
          $(settings.textLoginMessage).html(input.eq(i).siblings("small").text()).css("color", settings.colorError);
          return false;
        }
      }

      if (input.eq(i).hasClass("jaml-form-cpf") && input.eq(i).hasClass("jaml-form-valid")) {
        if (!isLoginValidCPF(input.eq(i).val())) {
          input.eq(i).css(inputEmailError);
          $(settings.textLoginMessage).html(input.eq(i).siblings("small").text()).css("color", settings.colorError);
          return false;
        }
      }
    }
    return true;
  }

  JAMLFormLogin.on("click", "button", function (e) {
    e.preventDefault();
    if (validateEmailForm(JAMLInputLogin)) {
      alert(123);
    }
  });
})(jQuery);
