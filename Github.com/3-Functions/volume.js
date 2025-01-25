let volBox = (l,b,h) => {
    let vol = l * b * h;
    return vol;
  }
  
  let l = 10;
  let b = 5;
  let h = 2;
  let vol = volBox(l,b,h);
  console.log(vol);