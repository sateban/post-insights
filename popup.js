document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pager").addEventListener("click", pager);

  function pager() {
    let counter = 0;
    let loopPager = setInterval(pager, 2000);

    console.log(document
      .querySelectorAll(
        "span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.x1s688f.xi81zsa"
      ));

    document
      .querySelectorAll(
        "span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.x1s688f.xi81zsa"
      )
      .forEach((el, index) => {
        if (
          /^View /.test(el.textContent) ||
          /replies/.test(el.textContent) ||
          /replied/.test(el.textContent)
        ) {
          console.log(`Clicking element #${index}:`, el.textContent);
          el.click();

          counter++;
        }
      });

    if (counter === 0) {
      clearInterval(loopPager);
      console.log("Timer cleared");
    }

    counter = 0;
  }
});
