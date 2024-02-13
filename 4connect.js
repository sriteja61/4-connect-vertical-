var p1name=prompt("Enter your name  player1 you will be color red ")
var p2name=prompt("Enter the name player2 you will be color blue")
p1color='red'
p2color='blue'
var text=document.getElementById("text")
var text1=document.getElementById("text1")
var fillcolor=p1color
cell=document.getElementsByTagName("td")
text.textContent='Its the turn of player1'
function change(){
        if(c1<42){
            if(this.style.backgroundColor==p1color){
                text1.textContent="Its already colored by player1"
                return
            }
            if(this.style.backgroundColor==p2color){
                text1.textContent="Its already colored by player2"
                return

            }
        var colnumber=this.className
        var column=document.querySelectorAll("."+colnumber)
        for(var i=column.length-1;i>=0;i--){
          var c=column[i].id
          var r=document.getElementById(c)
          var computedStyle = window.getComputedStyle(r);
        var backgroundColor = computedStyle.backgroundColor;
        if (backgroundColor == 'grey' || backgroundColor == 'rgb(128, 128, 128)') {
            r.style.backgroundColor = fillcolor;
            var parent=r.parentNode.className;
            rows=document.querySelectorAll("."+parent)
            k=-1
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].querySelectorAll("td");
                for (var j = 0; j < cells.length; j++) {
                    if(cells[j].id==r.id)
                    {
                        k=j
                        break
                    }
                if(k!=-1){
                    break
                }
                }
            }
            if(k>=3)
            {
                var targetColor = (fillcolor == p1color) ?'rgb(255, 0, 0)' : 'rgb(0, 0, 255)';
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].querySelectorAll("td");
                    for (var j =k;j>=k-3; j--) {
                    var r1=document.getElementById(cells[j].id)
                    var computedStyle = window.getComputedStyle(r1);
                    var backgroundColor = computedStyle.backgroundColor;
                    console.log(targetColor)
                    if (backgroundColor ==targetColor)
                    {
                        continue
                    }
                    else{
                        break
                    }
                }
            }
            if(j==k-4 && fillcolor==p1color)
                {
                    text.textContent="Player 1 has won the game"
                    for(var i=0;i<cell.length;i++){
                        var c2=document.getElementById(cell[i].id)
                        c2.style.backgroundColor='rgb(128, 128, 128)'
                    }
                    return 
                }
            else if(j==k-4 && fillcolor==p2color)
            {
                text.textContent="Player 2 has won the game"
                for(var i=0;i<cell.length;i++){
                    var c2=document.getElementById(cell[i].id)
                    c2.style.backgroundColor='rgb(128, 128, 128)'
                }
                
                return
                
            }
        }
        break
        }
        }

        if(fillcolor==p1color)
        {
            text.textContent='Its the turn of player2'
            fillcolor=p2color
            text1.textContent=" "
        }
        else{
            text.textContent='Its the turn of player1'
            fillcolor=p1color
            text1.textContent=" "
        }
        c1=c1+1
    }
    else{
        text.textContent="Game Over"
        text1.textContent=" "
    }
}
c1=0
for(var i=0;i<cell.length;i++)
    {
    cell[i].addEventListener('click',change)
    }


