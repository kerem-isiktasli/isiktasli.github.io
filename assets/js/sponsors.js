let totalAmount = 5000;
let currentAmount = 100;
let recentDonations = [];

function updateProgressBar() {
  const percentage = (currentAmount / totalAmount) * 100;
  document.getElementById('progressBar').style.width = percentage + '%';
}

function updateRecentDonations() {
  const donationList = document.getElementById('donationList');
  donationList.innerHTML = '';
  recentDonations.slice(0, 3).forEach(donation => {
    const listItem = document.createElement('li');
    listItem.textContent = `${donation.name} donated ${donation.amount} TL`;
    donationList.appendChild(listItem);
  });
}

function getQRImagePath(amount, bankSelection) {
  let imagePath = `assets/img/qr/${amount}tl.webp`;
  if (bankSelection === 'isbank') {
    imagePath = `assets/img/qr/${amount}tlis.webp`;
  }
  return imagePath;
}

function updateQRCode(amount, bankSelection) {
  const qrCode = document.getElementById('qrCode');
  const qrImagePath = getQRImagePath(amount, bankSelection);
  qrCode.innerHTML = `<img src="${qrImagePath}" alt="QR Code for ${amount} TL donation" style="max-width: 300px; height: auto;">`;
}

function updateThankYouMessage() {
  const thankYouMessage = document.getElementById('thankYouMessage');
  thankYouMessage.textContent = 'Thank you for your donation!';
}

function donate(amount, bankSelection) {
  const sponsorName = "Anonymous"; // İsim yerine "Anonymous" atanacak
  currentAmount += amount;
  recentDonations.unshift({ name: sponsorName, amount: amount });
  updateProgressBar();
  updateRecentDonations();
  updateQRCode(amount, bankSelection);
  updateThankYouMessage();
}

document.getElementById('sponsorForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const sponsorName = document.getElementById('sponsorName').value;
  const sponsorEmail = document.getElementById('sponsorEmail').value;
  const sponsorAmount = document.getElementById('sponsorAmount').value;
  const sponsorProof = document.getElementById('sponsorProof').files[0];
  const bankSelection = document.getElementById('bankSelection').value;

  if (sponsorName && sponsorEmail && sponsorAmount >= 5000 && sponsorProof) {
    recentDonations.unshift({ name: sponsorName, amount: sponsorAmount });
    updateRecentDonations();
    this.reset();
    alert('Thank you for becoming a sponsor!');

    if (bankSelection === 'papara') {
      // Generate QR code for Papara
    } else if (bankSelection === 'isbank') {
      // Generate QR code for İş Bankası
    }
  } else {
    alert('Please enter valid information, make sure your donation amount is 5000 TL or more, and upload proof in PDF format.');
  }
});

function showDropdown(buttonId) {
  const dropdownId = "dropdown" + buttonId.slice(3);
  const dropdown = document.getElementById(dropdownId);
  const dropdowns = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i] !== dropdown) {
      dropdowns[i].style.display = "none";
    }
  }
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
    window.scrollBy(0, dropdown.offsetHeight);
  }
}

// İlerleme çubuğunu başlangıçta güncellemek için çağırıyoruz.
updateProgressBar();
