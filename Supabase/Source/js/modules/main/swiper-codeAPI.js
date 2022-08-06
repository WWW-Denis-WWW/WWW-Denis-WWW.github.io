"use strict";
export function slidesAPI() {
  //column
  let column = document.querySelectorAll(".item-slider-API__column");
  Array.from(column).map((i) => {
    let int = i.dataset.amount;
    for (let a = 1; int >= a; a++) {
      i.append(createEl("div", "item-slider-API__count", a));
    }
  });
  //code

  // slide code content
  // comm: <span class="comm"></span><pre> </pre>
  // blue: <span class="blue"></span><pre> </pre>
  // green: <span class="green"></span><pre> </pre>
  // space: <pre> </pre> or empty line
  let different_code = {
    API_1: {
      0: "<pre> </pre>",
      1: '<nobr><span class="comm">// Upload an image to the "avatars" bucket</span></nobr>',
      2: '<span class="blue">const</span><pre> </pre> <pre> </pre> spaceCat = event.target.files[0]',
      3: '<span class="blue">const</span><pre> </pre>{ data, error } = <pre> </pre><span class="blue">await</span><pre> </pre> supabase',
      4: ".storage",
      5: ".from(<span class=\"green\">'avatars'</span>)",
      6: ".upload(<span class=\"green\">'space-cat.png'</span>, spaceCat)",
      7: "<pre> </pre>",
      8: "<pre> </pre>",
      9: "<pre> </pre>",
      10: "<pre> </pre>",
      11: "<pre> </pre>",
      12: "<pre> </pre>",
    },
    API_2: {
      0: "<pre> </pre>",
      1: '<span class="comm">// Download the "space-cat.png" image from the "avatars" bucket</span>',
      2: '<span class="blue">const</span><pre> </pre>{ data, error } = <pre> </pre><span class="blue">await</span><pre> </pre> supabase',
      3: ".storage",
      4: ".from(<span class=\"green\">'avatars'</span>)",
      5: ".download(<span class=\"green\">'space-cat.png'</span>)",
      6: "<pre> </pre>",
      7: "<pre> </pre>",
      8: "<pre> </pre>",
      9: "<pre> </pre>",
      10: "<pre> </pre>",
      11: "<pre> </pre>",
      12: "<pre> </pre>",
    },
    API_3: {
      0: "<pre> </pre>",
      1: '<span class="comm">// List all the files in the "avatars" bucket</span>',
      2: '<span class="blue">const</span><pre> </pre>{ data, error } = <pre> </pre><span class="blue">await</span><pre> </pre> supabase',
      3: ".storage",
      4: ".from(<span class=\"green\">'avatars'</span>)",
      5: ".list()",
      6: "<pre> </pre>",
      7: "<pre> </pre>",
      8: "<pre> </pre>",
      9: "<pre> </pre>",
      10: "<pre> </pre>",
      11: "<pre> </pre>",
      12: "<pre> </pre>",
      copy: "",
    },
    API_4: {
      0: "<pre> </pre>",
      1: '<span class="comm">// Move and rename files</span>',
      2: '<span class="blue">const</span><pre> </pre>{ data, error } = <pre> </pre><span class="blue">await</span><pre> </pre> supabase',
      3: ".storage",
      4: ".from(<span class=\"green\">'avatars'</span>)",
      5: ".move(<span class=\"green\">'pubic/space-cat.png'</span>,<pre> </pre><span class=\"green\">'private/space-cat.png'</span>)",
      6: "<pre> </pre>",
      7: "<pre> </pre>",
      8: "<pre> </pre>",
      9: "<pre> </pre>",
      10: "<pre> </pre>",
      11: "<pre> </pre>",
      12: "<pre> </pre>",
    },
    API_5: {
      0: "<pre> </pre>",
      1: '<span class="comm">// Delete a list of files</span>',
      2: '<span class="blue">const</span><pre> </pre>{ data, error } = <pre> </pre><span class="blue">await</span><pre> </pre> supabase',
      3: ".storage",
      4: ".from(<span class=\"green\">'avatars'</span>)",
      5: ".remove([<span class=\"green\">'avatar1.png'</span>,<pre> </pre><span class=\"green\">'avatar2.png'</span>])",
      6: "<pre> </pre>",
      7: "<pre> </pre>",
      8: "<pre> </pre>",
      9: "<pre> </pre>",
      10: "<pre> </pre>",
      11: "<pre> </pre>",
      12: "<pre> </pre>",
    },
  };
  //add code in swiper
  let code = Array.from(document.querySelectorAll(".item-slider-API__code"));
  code.map((i) => {
    let int = i.dataset.amount;
    let name = i.dataset.slide;
    for (let a = 0; a < int; a++) {
      i.append(
        createEl("p", "item-slider-API__codeStroke", different_code[name][a])
      );
    }
  });
  //create element
  function createEl(tag, className, content = "") {
    let el = document.createElement(`${tag}`);
    el.classList.add(`${className}`);
    if (content == undefined) {
      el.innerHTML = "";
    } else {
      el.innerHTML = content;
    }
    return el;
  }
  //copy button
  let copy_btns = Array.from(
    document.querySelectorAll("button.item-slider-API__copy")
  );
  //flag
  let copied = 0;

  copy_btns.map((el, i) => {
    el.addEventListener("click", () => {
      let text = "";
      let needCode = Array.from(code[i].querySelectorAll("p"));
      let count = code[i].dataset.amount;

      //Copying
      for (let a = 0; a < count; ++a) {
        let thisCode = needCode[a].textContent;
        if (thisCode != " " && !copied) {
          text += thisCode + "\n";
        }
      }
      //add class
      let alertCopied = document.querySelector("#copy");

      if (!copied) {
        alertCopied.classList.add("copied");
        copied++;
        setTimeout(() => {
          alertCopied.classList.remove("copied");
        }, 1500);
        setTimeout(() => {
          copied--;
        }, 2000);
      }
      if (text) navigator.clipboard.writeText(text);
    });
  });
}
