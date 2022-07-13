function dataTerbanyak (arr) {

    var mf = 0;
    var m = 0;
    var item=0;
    
       for (var i = 0; i < arr.length; i++) {
           for (var j = i; j < arr.length; j++) {
             if (arr[i] == arr[j]) m++;
             console.log(arr[i])
             if (mf < m) {
               
               mf = m;
               item = arr[i];
             }
           }
         
           return item
            
         }
         
       m=0
       // console.log(m)
    
    }
    
    console.log(dataTerbanyak([1, 1, 1, 2, 2, 4, 1, 1 ], [2, 1, 2, 2, 2, 8, 1, 1 ],[3, 3, 3, 3, 2, 4, 1, 1 ]));