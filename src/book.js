import React from 'react';
const Book=()=>{
return(
    <div>


<div class="input-group" style={{marginTop: 90,marginLeft: 400,marginRight: 90}}>
    <input type="text"  placeholder="Start"style={{width:150,textAlign:"justify"}}/>
    <span class="input-group-addon">-</span>
    <input type="text"  placeholder="End"style={{width:150,textAlign:"justify"}}/>
    <span class="input-group-addon">-</span>
    <input type="text"  placeholder="Start Date"style={{width:150,textAlign:"justify"}}/>
</div>
</div>
);
}
export default Book;