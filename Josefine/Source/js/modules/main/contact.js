// contact form js
export function form() {
  let name = document.querySelector(".contact__name"),
    email = document.querySelector(".contact__email"),
    person = document.querySelector(".contact__person"),
    time = document.querySelector(".contact__time"),
    date = document.querySelector(".contact__date"),
    btn = document.querySelector('button[type="submit"]'),
    //footer email
    footer_email = document.querySelector(".center-footer__email .input");

  let all_input = [name, email, person, time, date, footer_email];
  let confirm = 0;
  all_input.forEach((i) => {
    let inputs = i.querySelectorAll("input");
    for (const input of inputs) {
      //focus up title
      input.addEventListener("focusin", () =>
        input.closest(".input").classList.add("focus")
      );
      input.addEventListener("focusout", () => {
        if (input.value == "") {
          input.closest(".input").classList.remove("focus");
          input.closest(".input").classList.remove("red");
          valuesclear(input);
        }
        if (!textornum(input)) {
          numverefication(input);
        }
      });
      // verification value
      let maxL = input.maxLength;
      let minL = input.minLength;
      let max = input.max;
      let min = input.min;
      let length;
      function validateEmail(email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.value);
      }
      function textornum(i) {
        let t;
        i.max == "" ? (t = 1) : (t = 0);
        return t;
        // t = 1 text
        // t = 0 num
      }
      function wrong(i) {
        i.closest(".input").classList.add("red");
        confirm = 1;
      }
      function removewrong(i) {
        i.closest(".input").classList.remove("red");
        confirm = 1;
      }
      function textverefication(i) {
        maxL == -1 ? (maxL = 99999) : maxL;
        if (length < minL || length > maxL) {
          return false;
        } else if (i.type == "email") {
          return validateEmail(i);
        } else {
          return true;
        }
      }
      function numverefication(i) {
        if (i.closest(".input") == date || i.closest(".input") == time) {
          if (+i.value < 10 && i.value.length < 2 && i.value != "") {
            i.value = "0" + i.value;
          }
        }

        if (+i.value < min && i.value != "") {
          i.value = min;
        } else if (+i.value > max && i.value != "") {
          i.value = max;
        }
      }
      function valuesclear(i) {
        for (const value of i.closest(".input").querySelectorAll("input")) {
          value.value = "";
        }
      }
      input.addEventListener("input", () => {
        length = input.value.length;
        if (textornum(input)) {
          if (!textverefication(input)) {
            wrong(input);
          } else if (textverefication(input)) {
            removewrong(i);
          }
        }
      });
    }
  });
}
