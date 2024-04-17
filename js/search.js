$(document).ready()

const urlBase = "http://universities.hipolabs.com/search"

function searchUniversities(country, university){
  let url = urlBase;
  if(country && university){
    url += `?country=${country}&name=${university}`
  }else if ( country && !university){
    url += `?country=${country}`
  }else if ( !country && university){
    url += `?name=${university}`
  }

  console.log(url);
  
    $.ajax({
        url: url,
        type: 'GET'
    })
    .done((data)=>{ 
        const universities = data;
        return universities;
    })
}

function createRow(university){
    const link = `<a href="${university.web_pages[0]}" class="btn btn-primary">Go to university</a>`
    return `
    <tr>
        <td>${university.name}</td>
        <td>${university.country}</td>
        <td>${link}</td>
    </tr>
        `
  
}

$('#search-universities').click(() => {
    const country = $('search-by-country').val()
    const university = $('search-by-university').val()
    const tableBody = $('#table-body');

    const results = searchUniversities(country, university)

    console.log(results);
    alert('No registries were found');

    let items = [];

     results.map((universityResult) => {
        const row = createRow(universityResult)
        items.append(row)
    } )

    tableBody.html(items);
    
})