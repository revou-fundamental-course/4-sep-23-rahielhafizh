document.addEventListener("DOMContentLoaded", function () {
  const kelilingButton = document.getElementById("keliling");
  const luasButton = document.getElementById("luas");
  const kelilingForm = document.getElementById("menghitungKeliling");
  const luasForm = document.getElementById("menghitungLuas");
  const kelilingSection = document.querySelector(".kelilingPersegi");
  const luasSection = document.querySelector(".luasPersegi");
  const resetButtonKeliling = document.getElementById("resetButtonKeliling");
  const resetButtonLuas = document.getElementById("resetButtonLuas");
  const hasilK = document.getElementById("hasilK");
  const hasilL = document.getElementById("hasilL");

  kelilingSection.style.display = "none";
  luasSection.style.display = "none";

  kelilingButton.addEventListener("click", function () {
    kelilingSection.style.display = "block";
    luasSection.style.display = "none";
    hideResults();
  });

  luasButton.addEventListener("click", function () {
    kelilingSection.style.display = "none";
    luasSection.style.display = "block";
    hideResults();
  });

  kelilingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const sisi = parseFloat(document.getElementById("inputSisiKeliling").value);
    const keliling = 4 * sisi;
    hasilK.style.display = "block";
    hasilK.querySelector("span").textContent = keliling;
  });

  luasForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const sisi = parseFloat(document.getElementById("inputSisiLuas").value);
    const luas = sisi * sisi;
    hasilL.style.display = "block";
    hasilL.querySelector("span").textContent = luas;
  });

  resetButtonKeliling.addEventListener("click", function () {
    document.getElementById("inputSisiKeliling").value = "";
    hideResults();
  });

  resetButtonLuas.addEventListener("click", function () {
    document.getElementById("inputSisiLuas").value = "";
    hideResults();
  });

  function hideResults() {
    hasilK.style.display = "none";
    hasilL.style.display = "none";
  }
});
