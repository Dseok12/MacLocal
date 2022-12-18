function updateDivs() {
  const parentDivs = document.querySelectorAll('.obj');

  parentDivs.forEach(parentDiv => {
      const onDivs = parentDiv.querySelectorAll('.on');
      onDivs.forEach(div => div.classList.remove('on'));

      const childDivs = parentDiv.querySelectorAll('.obj img');
      const randomIndex = Math.floor(Math.random() * childDivs.length);
      const randomDiv = childDivs[randomIndex];

      randomDiv.classList.add('on');
  });
}
updateDivs();
setInterval(updateDivs, 1000);