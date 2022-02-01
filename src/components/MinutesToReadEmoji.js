import React from 'react';

// --= my first try =--

// function countEmojis (minutes) {
//     let count;
//     let img = '';
//     let labelName;
//     let emoji;

//     if (parseInt(minutes.minutes) <= '30') {
//         count = Math.ceil(minutes.minutes / 5);
//         labelName = "coffee cup";
//         emoji = '☕️';
//     } else {
//         count = Math.ceil(minutes.minutes / 10);
//         labelName = "bento box";
//         emoji = '🍱';
//     }

//     for (let i = 0; i < count; i++) {
//         img = img + emoji;
//     }
//     return {
//         label: labelName,
//         image: ` ${img}`,
//     }; 
// }

// --= my second try =--
function countEmojis (minutes) {
    const devider = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? '☕️' : '🍱';
    const emojiCounter = Math.ceil(minutes/devider);
    let emojis = '';
    
    for (let i = 0; i < emojiCounter; i++) {
        emojis += emoji;
    }
    
    return emojis;
}

// --= solution =--
// function makeEmojiList(minutes) {
//     const interval = minutes < 30 ? 5 : 10;
//     const emoji = minutes < 30 ? "☕️" : "🍱";
  
//     let emojis = "";
//     for (let i = 0; i < minutes; i += interval) {
//       emojis += emoji;
//     }
  
//     return emojis;
// }

function MinutesToReadEmoji ({ minutes }) {
    //const { label, image } = countEmojis({ minutes }); //for the first try
    const emojis = countEmojis(minutes);
    return (
        //<span role="img" aria-label={ label }> • { image } { minutes } min read</span> // for thw first try
        <>• { emojis } { minutes } min read</>
    );
}

export default MinutesToReadEmoji;