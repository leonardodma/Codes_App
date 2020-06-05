document.addEventListener('DOMContentLoaded', function() {

  let params = coDesExtract()

  let value = params['key']

  let value2 = params['pi']
 

  let db = coDesConnect('https://projeto-ana-andre-leo-rafael.firebaseio.com/')
  
  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.nav',context)
    context = data["portfolio"][value2]["projetos"][value]
    console.log(context)
    coDesReplace('.centralizadortitulo',context)
    coDesReplace('.paragraph2',context)
    coDesReplace('.paragraph4',context)
    coDesReplace('.paragraph6',context)
    coDesReplace('.paragraph8',context)
    coDesReplace('.blocktext2',context)
    coDesReplace('.text-mobile',context)
    
  })
})

