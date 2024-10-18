// Simulated NFT data
const nfts = [
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft1.jpg" },
    { name: "NFT 2", volume: "low", price: "cheap", image: "/nft/nft2.jpg" },
    { name: "NFT 3", volume: "low", price: "cheap", image: "/nft/nft3.jpg" },
    { name: "NFT 4", volume: "low", price: "cheap", image: "/nft/nft4.jpg" },
    { name: "NFT 5", volume: "low", price: "cheap", image: "/nft/nft5.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft6.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft7.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft8.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft9.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft10.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft11.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft12.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft13.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft14.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft15.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft16.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft17.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft18.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft19.jpg" },
    { name: "NFT 1", volume: "low", price: "cheap", image: "/nft/nft2o.jpg" },
   
];

// Render NFTs initially
renderNFTs(nfts);

// Render NFTs without filtering
function renderNFTs(nfts) {
    const nftList = document.getElementById('nft-list');
    nftList.innerHTML = '';

    nfts.forEach(nft => {
        const nftCard = document.createElement('div');
        nftCard.classList.add('nft-card');
        nftCard.innerHTML = `
            <img src="${nft.image}" alt="${nft.name}">
            <h3>${nft.name}</h3>
            <p>Volume: ${nft.volume}</p>
            <p>Price: ${nft.price}</p>
        `;
        nftList.appendChild(nftCard);
    });
}