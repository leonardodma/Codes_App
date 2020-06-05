document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  console.log(value)
  let value2 = document.querySelector(".link")
  value2.href = 'categoria.html?pi=' + value + '&key={{@key}}'
  let value3 = document.querySelector(".title")
  value3.href = 'projeto.html?pi=' + value + '&key={{@key}}'

  let db = coDesConnect('https://projeto-ana-andre-leo-rafael.firebaseio.com/')

  db.download('/', function(data) {
      context = data
    	console.log(context) 
    	coDesReplace('.nav', context)
    
      context = data['portfolio'][value]
      console.log(context)
      coDesReplace('.centralizadortitulo',context)
      coDesReplace('.nav2', context)
      coDesReplace('.blocktext2', context)
      coDesReplace('.titulo-mobile', context)

  })
})