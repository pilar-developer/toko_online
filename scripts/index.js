
    // const scrollContainer = document.getElementById('categoryScroll');
    // let scrollAmount = 0;
    // const scrollStep = 160; // pixel width per card
    // const scrollInterval = 1500; // ms

    // setInterval(() => {
    //   if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
    //     scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    //   } else {
    //     scrollAmount += scrollStep;
    // scrollContainer.scrollTo({left: scrollAmount, behavior: 'smooth' });
    //   }
    // }, scrollInterval);

  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("categoryScroll");

    let scrollStep = 0;
    let direction = 1; // 1 = ke kanan, -1 = ke kiri

    function autoScrollCategory() {
      const cardWidth = scrollContainer.querySelector(".category-card").offsetWidth + 12; // +gap
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      scrollStep += direction;

      if (scrollStep * cardWidth >= maxScroll) {
        direction = -1;
      } else if (scrollStep <= 0) {
        direction = 1;
      }

      scrollContainer.scrollTo({
        left: scrollStep * cardWidth,
        behavior: "smooth"
      });
    }

    setInterval(autoScrollCategory, 2000); // Ganti angka untuk kecepatan (2000ms = 2 detik)
  });

function increaseQuantity(button) {
  let input = button.parentElement.querySelector('input');
  let currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  updateTotalPrice(button);
}

function decreaseQuantity(button) {
  let input = button.parentElement.querySelector('input');
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
    updateTotalPrice(button);
  }
}

function updateTotalPrice(button) {
  let row = button.closest('tr');
  let price = parseInt(row.querySelector('td:nth-child(2)').textContent.replace('Rp', '').replace(',', ''));
  let quantity = parseInt(row.querySelector('input').value);
  let totalPrice = row.querySelector('.total-price');
  totalPrice.textContent = 'Rp' + (price * quantity).toLocaleString('id-ID');
}
