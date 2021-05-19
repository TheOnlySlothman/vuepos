/** @param {string} message Message to log 
 * @param {string[]} additonalColors
*/
export default function(message, ...additonalColors) {
    console.log(`%c[vuepos]: %c${message}`, "color:#7777ff; font-weight:bold;", "color:white", ...additonalColors);
}