document.getElementById('year').textContent = new Date().getFullYear();

function sendMail(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value);
  const email = encodeURIComponent(f.email.value);
  const msg = encodeURIComponent(f.message.value);
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:karan18092k2@gmail.com?subject=${subject}&body=${body}`;
}
