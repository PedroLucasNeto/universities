$(document).ready(() => {

  const urlBase = "http://universities.hipolabs.com/search"

  function searchUniversities(country, university, callback) {
    let url = urlBase;
    if (country && university) {
      url += `?country=${country}&name=${university}`
    } else if (country && !university) {
      url += `?country=${country}`
    } else if (!country && university) {
      url += `?name=${university}`
    }

    $.ajax({
      url: url,
      type: 'GET'
    })
      .done((data) => {
        callback(data);
      })
  }

  function createRow(university) {
    const link = `<a href="${university.web_pages[0]}" class="btn btn-primary" target="_blank">Go to university</a>`
    return `
      <tr>
          <td>${university.name}</td>
          <td>${university.country}</td>
          <td>${link}</td>
      </tr>
          `
  }
  $('#search-universities').click(() => {
    const country = $('#country-name').val()
    const university = $('#university-name').val()
    const tableBody = $('#table-body');
  
    searchUniversities(country, university, (results) => {
      if (results.length <= 0) {
        alert('No registries were found');
        return;
      } else {
        let items = [];
        let counter = 0;
        let index = 0;
  
        while (counter < 20 && index < results.length) {
          const universityResult = results[index];
          const row = createRow(universityResult);
          items.push(row);
          counter++;
          index++;
        }
  
        tableBody.html(items.join('')); 
        console.log(results);

        const tableElement = document.getElementById('table-body');
        if (tableElement) {
          tableElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  

});
