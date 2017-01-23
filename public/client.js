//LOGIN

// Get the modal
var modal = document.getElementById('id01');


var booksArray = [
    //Book 1
    {
        book: "A Discourse on the Method",
        author: "René Descartes"
    },
    //Book 2
    {
        book: "A Philosophical Enquiry into the Origin of our Ideas",
        author: "Edmund Burke"
    },
    //Book 3
    {
        book: "An Enquiry concerning Human Understanding",
        author: "David Hume"
    },
    //Book 4
    {
        book: "An Enquiry Concerning Political Justice",
        author: "William Godwin"
    },
    //Book 5
    {
        book: "An Essay on the Principle of Population",
        author: "Thomas Robert Malthus"
    },
    //Book 6
    {
        book: "Anselm of Canterbury: The Major Works",
        author: "St Anselm"
    },
    //Book 7
    {
        book: "Beyond Good and Evil",
        author: "Friedrich Nietzsche"
    },
    //Book 8
    {
        book: "Critique of Judgement",
        author: "Immanuel Kant"
    },
    //Book 9
    {
        book: "Daodejing",
        author: "Laozi "
    },
    //Book 10
    {
        book: "Defence of Socrates, Euthyphro, Crito",
        author: "Plato"
    },
    //Book 11
    {
        book: "Dialogues and Essays",
        author: "Seneca "
    },
    //Book 12
    {
        book: "Dialogues Concerning Natural Religion",
        author: "David Hume"
    },
    //Book 13
    {
        book: "Discourse on Political Economy and The Social Contract",
        author: "Jean-Jacques Rousseau"
    },
    //Book 14
    {
        book: "Discourse on the Origin of Inequality",
        author: "Jean-Jacques Rousseau"
    },
    //Book 15
    {
        book: "Discourses, Fragments, Handbook",
        author: "Epictetus"
    },
    //Book 16
    {
        book: "Ecce Homo",
        author: "Pontius Pilate"
    },
    //Book 17
    {
        book: "Gorgias",
        author: "Plato"
    },
    //Book 18
    {
        book: "Leviathan",
        author: "Thomas Hobbes "
    },
    //Book 19
    {
        book: "Meditations",
        author: "Marcus Aurelius"
    },
    //Book 20
    {
        book: "Meditations on First Philosophy",
        author: "René Descartes"
    },
    //Book 21
    {
        book: "Meno and Other Dialogues",
        author: "Plato"
    },
    //Book 22
    {
        book: "Natural Theology",
        author: "William Paley"
    },
    //Book 23
    {
        book: "On Liberty, Utilitarianism and Other Essays",
        author: "John Stuart Mill"
    },
    //Book 24
    {
        book: "On the Genealogy of Morals",
        author: "Friedrich Nietzsche"
    },
    //Book 25
    {
        book: "On the Nature of the Universe",
        author: "Lucretius"
    },
    //Book 26
    {
        book: "Outlines of the Philosophy of Right",
        author: "Georg Wilhelm Friedrich Hegel"
    },
    //Book 27
    {
        book: "Pensées and Other Writings",
        author: "Blaise Pascal"
    },
    //Book 28
    {
        book: "Phaedo",
        author: "Plato"
    },
    //Book 29
    {
        book: "Phaedrus",
        author: "Plato"
    },
    //Book 30
    {
        book: "Principles of Human Knowledge and Three Dialogues",
        author: "George Berkeley"
    },
    //Book 31
    {
        book: "Protagoras",
        author: "Plato"
    },
    //Book 32
    {
        book: "Repetition and Philosophical Crumbs",
        author: "Soren Kierkegaard"
    },
    //Book 33
    {
        book: "Republic",
        author: "Plato"
    },
    //Book 34
    {
        book: "Reveries of the Solitary Walker",
        author: "Jean-Jacques Rousseau"
    },
    //Book 35
    {
        book: "Sartor Resartus",
        author: "Thomas Carlyle"
    },
    //Book 36
    {
        book: "Second Treatise of Government",
        author: "John Locke"
    },
    //Book 37
    {
        book: "Symposium",
        author: "Plato"
    },
    //Book 38
    {
        book: "The Birth of Tragedy",
        author: "Friedrich Nietzsche"
    },
    //Book 39
    {
        book: "The Communist Manifesto",
        author: "karl marx"
    },
    //Book 40
    {
        book: "The Condition of the Working Class in England",
        author: "Friedrich Engels"
    },
    //Book 41
    {
        book: "The Confessions",
        author: "St. Augustine of Hippo"
    },
    //Book 42
    {
        book: "The Consolation of Philosophy",
        author: "Boethius"
    },
    //Book 43
    {
        book: "The Elements of Law Natural and Politic.",
        author: "Thomas Hobbes "
    },
    //Book 44
    {
        book: "The Eudemian Ethics",
        author: "Aristotle"
    },
    //Book 45
    {
        book: "The Federalist Papers",
        author: "Alexander Hamilton, James Madison, and John Jay"
    },
    //Book 46
    {
        book: "The Passions of the Soul and Other Late Philosophical Writings",
        author: "René Descartes"
    },
    //Book 47
    {
        book: "The Politics",
        author: "Aristotle"
    },
    //Book 48
    {
        book: "The Two Fundamental Problems of Ethics",
        author: "Arthur Schopenhauer"
    },
    //Book 49
    {
        book: "The Varieties of Religious Experience",
        author: "William James"
    },
    //Book 50
    {
        book: "Theaetetus",
        author: "Plato"
    },
    //Book 51
    {
        book: "Three Early Modern Utopias",
        author: "Thomas More"
    },
    //Book 52
    {
        book: "Thus Spoke Zarathustra",
        author: "Friedrich Nietzsche"
    },
    //Book 53
    {
        book: "Timaeus and Critias",
        author: "Plato"
    },
    //Book 54
    {
        book: "Twilight of the Idols",
        author: "Friedrich Nietzsche"
    }
];

function populateBooksDropDown(inputArray) {

    var htmlOutput = "";

    htmlOutput += "<select id='query' >";

    for (var counter = 0; counter < inputArray.length; counter++) {
        htmlOutput += "<option value='" + inputArray[counter].author + " - " + inputArray[counter].book + "'>" + inputArray[counter].book + " ( " + inputArray[counter].author + " )</option>";
    }
    htmlOutput += "</select>";

    $(".input-placeholder").html(htmlOutput);
}


//script to toggle class on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});

////////author search///////////////////////////

function ajaxWikipediaAuthorSearch(searchTerm) {

    //console.log(searchTerm);

    $.ajax({
            type: "GET",
            url: "/search/" + searchTerm,
            dataType: 'json',
        })
        .done(function(result) {
            //If successful, set some globals instead of using result object
            // console.log(JSON.parse(result));

            var resultsForJsonParse = result.substring(5, result.length - 1);

            //console.log(JSON.parse(resultsForJsonParse));

            displayWikipediaAuthorResults(JSON.parse(resultsForJsonParse));
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function displayWikipediaAuthorResults(searchResults) {
    
    var excludeFirstElement = searchResults.shift();
    
    //create an empty variable to store one LI for each one the results
    var buildTheHtmlOutput = "";
    for (var countArrayLenght = 0; countArrayLenght < 4; countArrayLenght++) {
        
        buildTheHtmlOutput += "<li>";

        $.each(searchResults, function(searchResultKey, searchResultValue) {

            if((searchResultValue[countArrayLenght] != '') && (searchResultValue[countArrayLenght]  !== undefined))  {

                // console.log(searchResultValue);
                //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
                if (searchResultKey == 0) {
                    buildTheHtmlOutput += "<h2>" + searchResultValue[countArrayLenght] + "</h2>";
                }
                else if (searchResultKey == 1) {
                    buildTheHtmlOutput += "<p>" + searchResultValue[countArrayLenght] + "</p>";
                }
                else if (searchResultKey == 2) {
                    buildTheHtmlOutput += "<p><a href='" + searchResultValue[countArrayLenght] + "' target='_blank'>Detilas</a></p>";
                }
            }
        });
        buildTheHtmlOutput += "</li>";
    }
    
    var excludeEmptyLIs = buildTheHtmlOutput.replace(/<li><\/li>/g,'');

    $(".js-author-results").html(excludeEmptyLIs);
}


////////book search///////////////////////////

function ajaxWikipediaBookSearch(searchTerm) {

    //console.log(searchTerm);

    $.ajax({
            type: "GET",
            url: "/search/" + searchTerm,
            dataType: 'json',
        })
        .done(function(result) {
            //If successful, set some globals instead of using result object
            // console.log(JSON.parse(result));

            var resultsForJsonParse = result.substring(5, result.length - 1);

            //console.log(JSON.parse(resultsForJsonParse));

            displayWikipediaBookResults(JSON.parse(resultsForJsonParse));
        })
        .fail(function(jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function displayWikipediaBookResults(searchResults) {
    
     var excludeFirstElement = searchResults.shift();
    
    //create an empty variable to store one LI for each one the results
    var buildTheHtmlOutput = "";
    for (var countArrayLenght = 0; countArrayLenght < 4; countArrayLenght++) {
        
        buildTheHtmlOutput += "<li>";

        $.each(searchResults, function(searchResultKey, searchResultValue) {

            if((searchResultValue[countArrayLenght] != '') && (searchResultValue[countArrayLenght]  !== undefined))  {

                // console.log(searchResultValue);
                //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
                if (searchResultKey == 0) {
                    buildTheHtmlOutput += "<h2>" + searchResultValue[countArrayLenght] + "</h2>";
                }
                else if (searchResultKey == 1) {
                    buildTheHtmlOutput += "<p>" + searchResultValue[countArrayLenght] + "</p>";
                }
                else if (searchResultKey == 2) {
                    buildTheHtmlOutput += "<p><a href='" + searchResultValue[countArrayLenght] + "' target='_blank'>Detilas</a></p>";
                }
            }
        });
        buildTheHtmlOutput += "</li>";
    }
    
    var excludeEmptyLIs = buildTheHtmlOutput.replace(/<li><\/li>/g,'');

    $(".js-book-results").html(excludeEmptyLIs);
}



$(function() {
    populateBooksDropDown(booksArray);
    
});

$("#search-form").submit(function(event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    var userInput = $("#query").val();
    
    var authorAndBookNameArray = userInput.split(" - ");
    
    var authorName = authorAndBookNameArray[0];
    var bookName = authorAndBookNameArray[1];
    
    // console.log("authorName = ", authorName);
    // console.log("bookName = ", bookName);
    //use that value to call the getResults function defined bellow
    ajaxWikipediaAuthorSearch(authorName);
    ajaxWikipediaBookSearch(bookName);
});