let slideIndex = 0;

function showSlides() {
  const slides = document.querySelector('.carousel');
  slides.style.transform = `translateX(-${slideIndex * (100 / 4)}%)`; // Adjust card width
}

function nextSlide() {
  const slides = document.querySelectorAll('.nft-card2');
  if (slideIndex < slides.length - 4) { // Adjust condition to show only 3 cards
    slideIndex++;
    showSlides();
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlides();
  }
}

showSlides();













// // Simulated NFT data
// const nfts = [
//     { name: "NFT", volume: "low", price: "cheap", image: "/nft/nft1.jpg" },
//     { name: "NFT 1", volume: "low", price: "cheap", image: "/img/img-01.jpg" },
//     { name: "NFT 2", volume: "medium", price: "moderate", image: "/img/img-02.jpg" },
//     { name: "NFT 3", volume: "high", price: "expensive", image: "/img/img-03.jpg" },
//     { name: "NFT 4", volume: "low", price: "cheap", image: "/img/img-04.jpg" },
//     { name: "NFT 5", volume: "medium", price: "moderate", image: "/img/img-05.jpg" },
//     { name: "NFT 6", volume: "high", price: "expensive", image: "/img/img-06.jpg" },
//     { name: "NFT 7", volume: "low", price: "cheap", image: "/img/img-07.jpg" },
//     { name: "NFT 8", volume: "medium", price: "moderate", image: "/img/img-08.jpg" },
//     { name: "NFT 9", volume: "high", price: "expensive", image: "/img/img-09.jpg" },

// ];

// // Render NFTs initially
// renderNFTs(nfts);

// // Handle filtering
// document.getElementById('volume').addEventListener('change', filterNFTs);
// document.getElementById('price').addEventListener('change', filterNFTs);

// function filterNFTs() {
//     const volumeFilter = document.getElementById('volume').value;
//     const priceFilter = document.getElementById('price').value;
//     let filteredNFTs = nfts;

//     if (volumeFilter !== 'all') {
//         filteredNFTs = filteredNFTs.filter(nft => nft.volume === volumeFilter);
//     }
//     if (priceFilter !== 'all') {
//         filteredNFTs = filteredNFTs.filter(nft => nft.price === priceFilter);
//     }

//     renderNFTs(filteredNFTs);
// }

// // Render NFTs based on filtered data
// function renderNFTs(nfts) {
//     const nftList = document.getElementById('nft-list');
//     nftList.innerHTML = '';

//     nfts.forEach(nft => {
//         const nftCard = document.createElement('div');
//         nftCard.classList.add('nft-card');
//         nftCard.innerHTML = `
//             <img src="${nft.image}" alt="${nft.name}">
//             <h3>${nft.name}</h3>
//             <p>Volume: ${nft.volume}</p>
//             <p>Price: ${nft.price}</p>
//         `;
//         nftList.appendChild(nftCard);
//     });
// }
// // Simulated NFT data
// const pfp = [
//   { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft1.jpg" },
//   { name: "NFT 2", volume: "low", price: "cheap", image: "/nft/nft2.jpg" },
//   { name: "NFT 3", volume: "low", price: "cheap", image: "/nft/nft3.jpg" },
//   { name: "NFT 4", volume: "low", price: "cheap", image: "/nft/nft4.jpg" },
//   { name: "NFT 5", volume: "low", price: "cheap", image: "/nft/nft5.jpg" },
//   { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft6.jpg" },
//   { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft7.jpg" },
 
 
// ];

// // Render NFTs initially
// renderpfps(pfp);

// // Render NFTs without filtering
// function renderpfps(pfp) {
//   const pfpList = document.getElementById('pfp-list');
//   pfpList.innerHTML = '';

//   pfps.forEach(nft => {
//       const pfpCard = document.createElement('div');
//       pfpCard.classList.add('pfp-card');
//       pfpCard.innerHTML = `
//           <img src="${pfp.image}" alt="${pfp.name}">
//           <h3>${pfp.name}</h3>
//           <p>Volume: ${pfp.volume}</p>
//           <p>Price: ${pfp.price}</p>
//       `;
//       pfpList.appendChild(pfpCard);
//     });
// }



