/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > high) {
            high = piles[i];
        }
    }

    const canEatAllBananas = (mid) => {
        let pileIndex = 0;
        let leftOver = 0;
        for (let i = 0; i < h ; i++) {
            const bananas = leftOver || piles[pileIndex];
            leftOver = Math.max(0, bananas-mid);
            if (leftOver == 0) {
                pileIndex += 1;
            }
            if (pileIndex >= piles.length) {
                break;
            }
        }
        return leftOver === 0 && pileIndex === piles.length;
    }

    while (low <= high) {
        const mid = low + Math.floor((high-low) / 2);
        // h1 3 - 5 = 0
        // h2 6 - 5 = 1
        // h3 1 - 5 = 0
        // h4 7 - 5 = 2
        // h5 2 - 5 = 0
        // h6 11 - 5 = 6,
        // h7 6 - 5 = 1
        // h8 1 - 5 = 0
        if (canEatAllBananas(mid)) {
            high = mid - 1;
        } else {
            low = mid+1;
        }
    }

    return low;
};

const piles = [3,6,7,11];
const hours = 8;
console.log(minEatingSpeed(piles, hours));