document.getElementById("donate-now").addEventListener("click", function () {
  const accountBalance = getElementTextById("account-balance");
  const donationInput = getInputValueById("donation-input");
  const currentDonation = getElementTextById("current-donation");
  // Clear input field after donation
  document.getElementById("donation-input").value = "";

  if (isNaN(donationInput) || donationInput <= 0) {
    return alert("Please enter a valid donation amount");
  }

  if (donationInput > accountBalance) {
    return alert("Insufficient funds for this donation");
  }

  const newBalance = accountBalance - donationInput;
  const newDonationTotal = currentDonation + donationInput;
  document.getElementById("account-balance").textContent = newBalance.toFixed(2);
  document.getElementById("current-donation").innerText = newDonationTotal.toFixed(2);

  // History add
  const date = new Date();
  const historyList = document.createElement("div");
  historyList.className = "bg-white shadow-xl rounded border-2 p-6 mb-6";
  historyList.innerHTML = `
    <h3 class="text-xl font-bold my-4">${donationInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
    <p class="text-lg text-black">Date: ${date}</p>
    `;
  document.getElementById("history-list").appendChild(historyList);

  // Show Modal
  document.getElementById("success-modal").showModal();
});


// donation to History tab
const showHistory = document.getElementById("show-history");
const showDonation = document.getElementById("show-donation");

showHistory.addEventListener("click", function () {
  showHistory.classList.add("text-black", "bg-[#b4f461]");
  showDonation.classList.remove("text-black", "bg-[#b4f461]");
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

showDonation.addEventListener("click", function () {
  showDonation.classList.add("text-black", "bg-[#b4f461]", "border-2");
  showHistory.classList.remove("text-black", "bg-[#b4f461]");
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('backdrop-blur-md', 'bg-opacity-90');
  } else {
    navbar.classList.remove('backdrop-blur-md', 'bg-opacity-90');
  }
});