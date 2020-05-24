//-----------------------joke----------------------//
function myFunction() {
     var x = document.getElementById('js-categories-items');
     if (x.style.display === 'inline-flex') {
         x.style.display = 'none';
     } else {
         x.style.display = 'inline-flex';
     }
 }

 function myFunctionSearch() {
     var x = document.getElementById('js-categories-items-search');
     if (x.style.display === 'inline-flex') {
         x.style.display = 'none';
     } else {
         x.style.display = 'inline-flex';
     }
 };



//----------------------like--------------------//

 function imgHeart(img) {
  $(document).on('click', '.example-like', function () {
        var id = $(this).hasClass('simple');
        if (!id) {
            $(this).addClass('simple');
        } else {
            $(this).removeClass('simple');
        }
    });
    
 };

//-------------------like end--------------------//

//-------------------modal window---------------------//

var modal = document.getElementById('myModal');
var btn = document.getElementById("menu");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//-------------------modal-window end-----------------//


function updateDisplayRandom(key, val, id) {
    let url = "https://api.chucknorris.io/jokes/random";
    
    fetch(url).then(function(response) {
        response.json().then(function(json) {
           var arr = console.log('json', json);
        });
    });

    $.getJSON('https://api.chucknorris.io/jokes/random', function(data) {
        $.get(data, function(key, val) {
          $('#id').append('<a class="id-text" value="' + data.id + '">' + data.id + '</a>');
          $('#origin').append('<div class="example-update" value="' + data.updated_at + '">' + data.updated_at + '</div>');
          $('#example-text').append('<div class="example-explain" value="' + data.value + '">' + data.value + '</div>');
        });

        var x = document.getElementById('example-item');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }

});

};



function updateDisplayCategories(verse) {
    let url = "https://api.chucknorris.io/jokes/categories";
    fetch(url).then(function(response) {
        response.json().then(function(json) {
           var arr = console.log('json', json);
        });
    });

    $(function updateDisplayCategories(){
    $.getJSON('https://api.chucknorris.io/jokes/categories', function(data) {
        $.each(data, function(key, val) {
            $('#js-categories-items').append('<button class="categories-item" onclick="updateDisplayCategory(verse)" id="categories-item" value="' + val + '">' + val + '</button>');
        });
    });
});
    
};


function updateDisplayCategory(verse) {
    let url = "https://api.chucknorris.io/jokes/random?category={category}";
    fetch(url).then(function(response) {
        response.json().then(function(json) {
           var arr = console.log('json', json);
        });
    });
   
    $(function updateDisplayCategory(){
    $.getJSON('https://api.chucknorris.io/jokes/random?category={category}', function(data) {
        $.get(data, function(key, val) {
          $('#origin').append('<div class="category" id="origin" value="' + data.value + '">' + data.value + '</div>');
          $('#id').append('<a class="id-text" value="' + data.id + '">' + data.id + '</a>');
          $('#example-text').append('<div class="example-explain" value="' + data.value + '">' + data.value + '</div>');
        });
    });
});

};

function updateDisplaySearch(verse) {
    let url = "https://api.chucknorris.io/jokes/search?query={query}";
    fetch(url).then(function(response) {
        response.json().then(function(json) {
           var arr = console.log('json', json);
        });
    });   
};














