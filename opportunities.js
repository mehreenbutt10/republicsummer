var savedProgram = $('.far');
var cardContainer = $('.card-container');
var allPrograms = JSON.parse(localStorage.getItem('programs')) || [];

function appendAllPrograms() {

  allPrograms.forEach(function(program){
    cardContainer.append(`
      <div class="row">
      <p class="new-opp-card">${program}
      <button type="button" class="btn btn-dark complete">Complete</button>
      </p>
      `);
  })
}
appendAllPrograms();

savedProgram.on("click", appendNewProgram);

function appendNewProgram() {
  var program = $(this).attr('id');

  cardContainer.append(`
    <div class="row">
    <p class="new-opp-card">${program}
    <button type="button" class="btn btn-dark btn-sm complete">Complete</button>
    </p>
    `);
    setStorage(program);
}

function setStorage(program) {
  allPrograms.push(program);
  var programString = JSON.stringify(allPrograms);
  localStorage.setItem('programs', programString);
}

cardContainer.on("click", ".complete", completedApp)

function completedApp(event) {
  var programToDelete = event.target.parentNode.children[0].textContent;
  var indexToDelete = allPrograms.indexOf(programToDelete);
  allPrograms.splice(indexToDelete, 1);
  var programString = JSON.stringify(allPrograms);
  localStorage.setItem('programs', programString);

  event.target.parentNode.remove()
}
