// Browser version
function addClass(el, newClass) {
  if(el.className.indexOf(newClass) !== -1) {
    return;
  }

  if(el.className !== '') {
    //ensure class names are separated by a space
    newClass = ' ' + newClass;
  }

  el.className += newClass;
}

// Node Version
// module.exports = {
//   addClass: function(el, newClass) {
//     if(el.className.indexOf(newClass) !== -1) {
//       return;
//     }

//     if(el.className !== '') {
//       //ensure class names are separated by a space
//       newClass = ' ' + newClass;
//     }

//     el.className += newClass;
//   }
// }
