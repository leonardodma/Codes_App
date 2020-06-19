function saveEdits(){
      var editElem = document.getElementById('task1');
      var editElem = document.getElementById('task2');
      var userVersion = editElem.innerHTML;
      localStorage.setItem('label', userVersion)
      document.getElementById("update").innerHTML="Edits Saved!";
    }

    function checkEdits(){
    	if(localStorage.userEdits != null)
        	document.getElementById("task1").innerHTML=localStorage.getItem('label');

        if(localStorage.userEdits != null)
        document.getElementById("task2").innerHTML=localStorage.getItem('label');
    }
