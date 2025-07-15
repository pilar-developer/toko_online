
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
