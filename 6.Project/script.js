const randomcolore = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervelid;
  const startChangingcolor = function () {
    if (!intervelid) {
      intervelid = setInterval(function () {
        document.body.style.backgroundColor = randomcolore();
      }, 1000);
    }
  };
  const stopChangingcolor = function () {
    clearInterval(intervelid);
    intervelid = null;
  };
  document.querySelector('#start').addEventListener('click', startChangingcolor);
  document.querySelector('#stop').addEventListener('click', stopChangingcolor);
  