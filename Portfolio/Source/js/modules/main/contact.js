"use strict";
export function contact() {
  let name = document.querySelector(`.name_box input`),
    name_box = document.querySelector(`.name_box`),
    name_title = document.querySelector(`.name_box .tiny_title`),
    email = document.querySelector(`.email_box input`),
    email_box = document.querySelector(`.email_box`),
    email_title = document.querySelector(`.email_box .tiny_title`),
    textarea = document.querySelector(`.TA`),
    textarea_title = document.querySelector(`.TA_title`),
    btn_sub = document.querySelectorAll(`.btn`),
    btn_box = document.querySelector(`.box_btn`),
    form = document.querySelector(`.con_form`);

  //==================================================================//
  name.addEventListener("focusin", () => name_box.classList.add("focus"));
  name.addEventListener("focusout", () => {
    if (name.value == "") {
      name_box.classList.remove("focus");
      name_title.innerText = "Name";
    }
  });

  email.addEventListener("focusin", () => email_box.classList.add("focus"));
  email.addEventListener("focusout", () => {
    if (email.value == "") {
      email_box.classList.remove("focus");
      email_title.innerText = "Email";
    }
  });
  textarea.addEventListener("focusout", () => {
    if (textarea.value == "") {
      textarea_title.innerText = "Your message";
    }
  });
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
  }

  for (let btn of btn_sub) {
    btn.disabled = true;
  }
  form.onchange = () => {
    // endspaces(nvalue)
    if (
      name.value.length > 2 &&
      textarea.value.length >= 20 &&
      validateEmail(email) == true
    ) {
      for (let btn of btn_sub) {
        btn.disabled = false;
        btn.addEventListener("click", clear());
      }
      btn_box.classList.add(`send`);
    } else {
      for (let btn of btn_sub) {
        btn.disabled = true;
      }
      if (btn_box.classList.contains(`send`)) {
        btn_box.classList.remove(`send`);
      }
    }
  };
  // ..................................
  name.oninput = () => {
    let nvalue = name.value;

    if (nvalue.length < 2) {
      name_title.innerText = "Please enter name";
    } else if (nvalue.length > 2) {
      name_title.innerText = "Name";
    }

    if (nvalue.slice(0, 1) == " " || nvalue.indexOf("  ") != -1) {
      spaces(name);
      if (nvalue.slice(0, 1) == " ") {
        name_title.innerText +=
          ". The name can't start and end with a space!".toUpperCase();
        setTimeout(() => {
          name_title.innerText = name_title.innerText.replace(
            ". The name can't start and end with a space!".toUpperCase(),
            ""
          );
        }, 3000);
      }

      if (nvalue.indexOf("  ") != -1) {
        name_title.innerText += ". Only one spaces!".toUpperCase();
        setTimeout(() => {
          name_title.innerText = name_title.innerText.replace(
            ". Only one spaces!".toUpperCase(),
            ""
          );
        }, 3000);
      }
    }
    form.onchange();
  };

  // ..................................

  email.oninput = () => {
    let evalue = email.value;
    if (validateEmail(email) == false) {
      email_title.innerText = "please enter correct email address";
    } else if (validateEmail(email) == true) {
      email_title.innerText = "Email";
    }
    if (evalue.slice(0, 1) == " " || evalue.indexOf("  ") != -1) {
      spaces(email);
      //alerts
      if (evalue.slice(0, 1) == " ") {
        email_title.innerText +=
          ". The Email can't start and end with a space!".toUpperCase();
        setTimeout(() => {
          email_title.innerText = email_title.innerText.replace(
            ". The Email can't start and end with a space!".toUpperCase(),
            ""
          );
        }, 3000);
      }

      if (evalue.indexOf("  ") != -1) {
        email_title.innerText += ". Only one spaces!".toUpperCase();
        setTimeout(() => {
          email_title.innerText = email_title.innerText.replace(
            ". Only one spaces!".toUpperCase(),
            ""
          );
        }, 3000);
      }
    }

    form.onchange();
  };

  // ..................................
  textarea.oninput = () => {
    let tvalue = textarea.value;

    if (tvalue.length == 0) {
      textarea_title.innerText = "Your message";
    } else if (tvalue.length == 1 && tvalue.slice(0, 1) != " ") {
      textarea_title.innerText = "Are you serious? One symbol. Need more!";
    } else if (tvalue.length > 1 && tvalue.length < 20) {
      textarea_title.innerText = "More…";
    } else if (tvalue.length >= 20) {
      textarea_title.innerText = "You can send!";
    }

    if (tvalue.slice(0, 1) == " " || tvalue.indexOf("  ") != -1) {
      spaces(textarea);
      // if (tvalue.slice(0, 1) == ' ') {
      // 	textarea_title.innerText += '. The name can\'t start and end with a space!'.toUpperCase();
      // 	setTimeout(() => {
      // 		textarea_title.innerText = textarea_title.innerText.replace('. The name can\'t start and end with a space!'.toUpperCase(), '');
      // 	}, 3000)
      // }

      if (tvalue.indexOf("  ") != -1) {
        textarea_title.innerText += ". Only one spaces!".toUpperCase();
        setTimeout(() => {
          textarea_title.innerText = textarea_title.innerText.replace(
            ". Only one spaces!".toUpperCase(),
            ""
          );
        }, 3000);
      }
    }
    form.onchange();
  };
  function spaces(element) {
    let value = element.value,
      result = value;
    while (result.slice(0, 1) == " ") {
      result = result.slice(1);
    }

    while (result.indexOf("  ") != -1) {
      result = result.replace("  ", " ");
    }

    element.value = result;
  }

  function endspaces(value) {
    let result = value;
    if (result.slice(-1) == " ") {
      value = result.slice(0, -1);
    }
  }
  //Copy id discord

  const discord = document.querySelector("#contact_discord");
  discord.addEventListener("click", () => {
    navigator.clipboard.writeText(`Everything#7242`);
    discord.innerText = `Tag copy!`;
    setTimeout(() => {
      discord.innerText = `Discord`;
    }, 1500);
  });
  function clear() {
    console.log("gg");
    let a = setInterval(() => {
      if (
        document.querySelector(".container").classList.contains("submitted")
      ) {
        name.value = "";
        email.value = "";
        textarea.value = "";
        form.onchange();
        clearInterval(a);
      }
    }, 500);
  }
}
