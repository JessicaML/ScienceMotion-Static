var phrases = [
	"Movement - they can move and change their position.",
  "Reproduction – they can make more of the same kind of organism as themselves.",
  "Sensitivity – they can detect or sense stimuli and respond to them.",
  "Growth - they can permanently increase their size or dry mass by increasing the number or size of their cells.",
  "Respiration – they can create chemical reactions that break down nutrient molecules in living cells to release energy.",
  "Excretion – they can excrete toxic materials, waste products of metabolism, and excess substances (note that excretion is not the same as egestion).",
  "Nutrition - they can take in and absorb nutrients such as organic substances and mineral ions. These nutrients contain the raw materials or energy needed for growth and tissue repair."
]

$("input").on("input", function () {

  var value = $(this).val()

  var phrase = phrases[value]

  $("div.phrase").html(phrase)

})
