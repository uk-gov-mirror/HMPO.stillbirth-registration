console.log("Script loaded conditional js");

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="name-or-not"]');
  const yesBlock = document.getElementById("yes-name-block");
  const noBlock = document.getElementById("no-name-block");

  function toggleBlocks(selectedValue) {
    if (selectedValue === "yes-name") {
      yesBlock.style.display = "block";
      noBlock.style.display = "none";
    } else if (selectedValue === "no-name") {
      yesBlock.style.display = "none";
      noBlock.style.display = "block";
    }
  }

  radioButtons.forEach((element) => {
    element.addEventListener("change", (event) => {
      toggleBlocks(event.target.value);
    });
  });

  const checkedRadio = document.querySelector('input[name="name-or-not"]:checked');
  if (checkedRadio) {
    toggleBlocks(checkedRadio.value);
  }
});
