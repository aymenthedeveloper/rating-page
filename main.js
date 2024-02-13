const form = document.querySelector('form');
const r = document.getElementsByName('rating');
form.addEventListener('submit', function(event) {
  event.preventDefault()
  document.getElementById('section1').style.display = 'none';
  document.getElementById('section2').style.display = 'flex';
  for (i = 0; i < r.length; i++) {
    if (r[i].checked) {
      document.getElementById('result').innerHTML = "You selected " + r[i].value + " out of 5"
    }
  }

})