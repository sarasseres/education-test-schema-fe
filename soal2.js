
    
    function StringChallenge(str) {
  
        let string = ''
        const removeAllCharacter = str.match(/([0-9])/gi, ' ')
        
       if (string = removeAllCharacter ) {
        return "Sistem kami menolak untuk inputan berisi angka 167283"
       }else {
        return `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${str}`
     }
         
        
      
      }
      
      // keep this function call here 
      console.log(StringChallenge("hallo jesika24 selamat datang!"));
      console.log(StringChallenge("hallo anggun selamat datang!"));
      console.log(StringChallenge("hallo ** selamat datang!"));
      console.log(StringChallenge("hallo Mariage889120! selamat datang!"));