import React, { useEffect, useState } from 'react'

const Spellcheck = () => {
    const [suggestedText, setSuggestedText] = useState('')
    const [inputText, setInputText] = useState('')
    const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};
const keyobj = Object.keys(customDictionary)
// useEffect(()=>{
//      function ftchdata(){
//         let word = inputText.split(' ')
//         word.map((itm)=> {
//              if(keyobj.includes(itm)){
//                 return setSuggestedText(itm)
//              } 
//         }
//             )
       
        
// //        if(inputText == customDictionary.inputText ){
        
// //         console.log('ddddd', customDictionary.inputText);        
// //     setSuggestedText(customDictionary.inputText)
// // }
//      }
//      ftchdata()
// },[inputText])
useEffect(() => {
    const words = inputText.toLowerCase().trim().split(/\s+/)

    let found = ''
function ftchdata(){
    for (let word of words) {
      if (customDictionary[word]) {
        found = word
        break   // ✅ stop at FIRST wrong word
      }
    }

    setSuggestedText(found) // '' if none found
}
ftchdata()
  }, [inputText])
console.log(inputText.toLowerCase(), suggestedText);

  return (
     <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={(e)=>setInputText(e.target.value)}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{customDictionary[suggestedText]}</strong>?
          </p>
        )}
      </div>
  )
}

export default Spellcheck