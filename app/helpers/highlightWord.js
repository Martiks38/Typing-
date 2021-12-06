export function highlightWord(text, indexWord = 0, offsetWord = 0){
   let arr = text.split(" "),
      textView = "";

   if(offsetWord === 0){
      textView = `<span class="resaltar">${arr[0]}</span> ${text.slice(arr[0].length + 1)}`;
      return textView;
   }
   
   let i = 0,
      newOffset = 0;

   for(i; i < indexWord; i++){
      textView += `${arr[i]} `;
   }

   textView += `<span class="resaltar">${arr[indexWord]}</span>`;

   for(i = (indexWord + 1); i < arr.length; i++){
      textView += ` ${arr[i]}`;
   }

   indexWord === arr.length
      ? newOffset = text.length 
      : newOffset = text.indexOf(arr[indexWord + 1], offsetWord);
   
   return {textView, newOffset};
}
