export function slidesIntegrates() {
  //column
  let column = document.querySelectorAll(".sliders-integrates__column");
  Array.from(column).map((i) => {
    let int = i.dataset.amount;
    for (let a = 1; int >= a; a++) {
      i.append(createEl("div", "sliders-integrates__count", a));
    }
  });
  //code

  // slide code content
  // comm: <span class=\"comm\"></span><pre> </pre>
  // blue: <span class=\"blue\"></span><pre> </pre>
  // green: <span class=\"green\"></span><pre> </pre>
  // space: <pre> </pre> or empty line
  let different_code = {
    integrates_1: {
      0: '<span class="blue">create policy</span><pre> </pre><span class="green">"Public Access"</span>',
      1: '<span class="blue">on</span><pre> </pre>storage.objects<pre> </pre><span class="blue">for all</span>',
      2: '<span class="blue">using</span>( bucket_id =<pre> </pre><span class="green">\'avatars\'</span>);',
      3: "",
    },

    integrates_2: {
      0: '<span class="blue">create policy</span><pre> </pre><span class="green">"Public Access to a folder"</span>',
      1: '<span class="blue">on</span><pre> </pre>storage.objects<pre> </pre><span class="blue">for all</span>',
      2: '<span class="blue">using</span>( ',
      3: "bucket_id =<pre> </pre><span class=\"green\">'avatars'</span>",
      4: '<pre>  </pre><span class="blue">and</span>(storage.foldername(<span class="blue">name</span>))[1] =<pre> </pre><span class="green">\'public\'</span>',
      5: ");",
      6: "",
    },
    integrates_3: {
      0: '<span class="blue">create police</span><pre> </pre><span class="green">"Logged in access"</span>',
      1: '<span class="blue">on</span><pre> </pre>storage.objects',
      2: '<span class="blue">for all</span><pre> </pre>using(',
      3: "bucket_id =<pre> </pre><span class=\"green\">'avatars'</span>",
      4: '<pre>  </pre><span class="blue">and</span><pre> </pre>auth.role() =<pre> </pre><span class="green">\'authenticated\'</span>',
      5: ");",
    },
  };
  //add code in swiper
  let code = Array.from(document.querySelectorAll(".sliders-integrates__code"));
  code.map((i) => {
    let int = i.dataset.amount;
    let name = i.dataset.slide;
    for (let a = 0; a < int; a++) {
      i.append(
        createEl("p", "slider-integrates__codeStroke", different_code[name][a])
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
    document.querySelectorAll(".sliders-integrates__copy")
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
        if (thisCode != " " && thisCode != "" && !copied) {
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
