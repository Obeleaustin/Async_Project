let table = document.getElementById('table')
let idNation = [];
let idYear = [];
let Nation = [];
let Population = [] ;
let slugNation = [];
let Year = []
let th1 = document.createElement('th')
th1.innerHTML = 'ID Nation'
let th2 = document.createElement('th')
th2.innerHTML = 'ID Year'
let th3 = document.createElement('th')
th3.innerHTML = 'Nation'
let th4 = document.createElement('th')
th4.innerHTML = 'Population'
let th5 = document.createElement('th')
th5.innerHTML = 'Slug Nation'
let th6 = document.createElement('th')
th6.innerHTML = 'Year'

export{table, idNation,idYear,Nation,
    Population,slugNation,Year,th1,th2,th3,th4,th5,th6}