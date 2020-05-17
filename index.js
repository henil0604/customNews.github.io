
let response = document.getElementById('response')
response.innerHTML = `Loading...`

newsResponse()

function newsResponse() {
    const country = document.getElementById('country-input')
    const catagory = document.getElementById('catagory-input')
    const api = "4e22589fc4ec4b18bd46a08505a59da8"
    if (api == "") {
        window.alert("First input Api Key")
    } else {
        var pattern = `https://newsapi.org/v2/top-headlines?country=${country.value}&category=${catagory.value}&apiKey=${api}`
        var pattern2 = `https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${api}`
        if (catagory.value == "Top") {
            pattern = ""
            pattern += pattern2
        }

        console.log(pattern);

        var xhr7 = new XMLHttpRequest();
        xhr7.open('GET', `${pattern}`, true);
        //On Progress

        xhr7.onprogress = function onprogress() {
            console.log(`We Are Sending a Request to the Server For Your ${catagory.value} News.`)
            let response = document.getElementById('response')
            response.innerHTML = "";
            let spin7 = ``
            let response7 = document.getElementById('Response')
            response7.scrollIntoView()
            let spinHtml7 = `
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            `
            spin7 += spinHtml7
            response7.innerHTML = spin7

            let refreshMainDiv = document.getElementById('refreshMainDiv')
            let refreshMainDivEmptyHTML = ``
            let refreshMainDivHTML = `
            <div id="refrash">
              <img onclick="newsResponse()" onmouseover="refreshHover()" onmouseout="refreshHoverOut()" class="Refresh" src="refresh.png"></img>
              </button>
              <br><br>
              <h6 class="card-subtitle mb-2 text-muted" id="refreshAlt"></h6>
            </div>
          `
            refreshMainDivEmptyHTML += refreshMainDivHTML;
            refreshMainDiv.innerHTML = refreshMainDivEmptyHTML;
        }

        //ON LOAD

        xhr7.onload = function (element) {
            if (this.status === 200) {
                let json7 = JSON.parse(this.responseText)

                let articles7 = json7.articles;
                let response7 = document.getElementById('Response')

                let totalResultsJSON = json7
                let totalResults = document.getElementById('totalResults')
                let totResultHTML = `
                <h6 class="card-subtitle mb-2 text-muted my-2">Total <b>${totalResultsJSON["totalResults"]}</b> Found but we can show you <b>${articles7.length}</b> results.</h6>
              `
                totalResults.innerHTML = totResultHTML;
                let newsHtml7 = "";
                articles7.forEach(function (element, index) {
                    if (element["content"] == null) {
                        let news7 = `
                    <div class="card mx-2 my-2" style="width: 32rem;">
                    <img src="${element["urlToImage"]}" style="max-height:300px " class="card-img-top"  alt="World Custom News">
                    <div class="card-body">
                        <h5 class="card-title">${element["title"]}</h5>
                        <p class="card-text" style="color:red;">Could not get this Content But You can <a id="scroll3" target="_blank" href="${element["url"]}" class="card-link">Read More Here</a></p>
                    </div>
                    </div>
                        `
                        newsHtml7 += news7;
                    }

                    else if (element["content"] == "") {
                        let news7 = `
                    <div class="card mx-2 my-2" style="width: 32rem;">
                    <img src="${element["urlToImage"]}" style="max-height:300px " class="card-img-top"  alt="World Custom News">
                    <div class="card-body">
                        <h5 class="card-title">${element["title"]}</h5>
                        <p class="card-text" style="color:red;">Could not get this Content But You can <a id="scroll3" target="_blank" href="${element["url"]}" class="card-link">Read More Here</a></p>
                    </div>
                    </div>
                        `
                        newsHtml7 += news7;
                    }

                    else if (element["content"] == "Subscribe Start Your Daily Mornings with Times of India Newspaper!Order Now") {
                        let news7 = `
                    <div class="card mx-2 my-2" style="width: 32rem;">
                    <img src="${element["urlToImage"]}" style="max-height:300px " class="card-img-top"  alt="World Custom News">
                    <div class="card-body">
                        <h5 class="card-title">${element["title"]}</h5>
                        <p class="card-text" style="color:red;">The content is written for a Bussinuss Purpose so we can't show this but You can <a href="${element["url"]}">Read More Here</a></a></p>
                    </div>
                    </div>
                        `
                        newsHtml7 += news7;
                    }

                    else {
                        let news7 = `
                    <div class="card mx-2 my-2" style="width: 32rem;">
                    <img src="${element["urlToImage"]}" style="max-height:300px " class="card-img-top" alt="World Custom News">
                    <div class="card-body">
                        <h5 class="card-title">${element["title"]}</h5>
                        <p class="card-text">${element["content"]}</p>
                        <a href="${element["url"]}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                    </div>
                  `

                        newsHtml7 += news7;
                    }
                })
                response7.innerHTML = newsHtml7;

            }
            else {
                console.error(`${this.status} error occured!!! We will try to solve This Error!!!`)
                let response7 = document.getElementById('Response')
                response7.innerHTML = `${this.status} error occured!!! We will try to solve This Error!!!.`
                let totalResults = document.getElementById('totalResults')
                totalResults.innerHTML = ""
                let response = document.getElementById('response')
                response.innerHTML = ""
            }
        }
        xhr7.send()
        setTimeout(() => {
            window.scrollTo(0, 10);
        }, 1000);
    }
}
function feedbackResponse() {
    var feedbackResponseDiv = document.getElementById('feedbackResponseDiv')
    let feedbackResponseDivHTML = `
          <hr style="height: 1px; background-color: black;">
          <button type="button" onclick="feedBackClose()" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button> 
            <h3 class="card-subtitle mb-2 text-muted my-2">Feedback:</h3>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Feedback</span>
              </div>
              <textarea id="feedBackInput" type="text" class="form-control" style="min-height: 50px; min-width: 200px; max-height: 200px; height: 60px;" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Your Feedback Here"></textarea>
              <br><br>
              <button class="btn btn-primary btn-sm" id="feedbackSubmitButton" onclick="feedBackSubmit()">Submit Feedback</button>
            </div>
            <br>
            <h5 id="feedbackResponseValue" class="card-subtitle mb-2 text-muted my-2"></h5>
            <br>
            <button type="button" id="scroll2" class="btn btn-primary btn-sm" onclick="lastFeedBack()">Last Feedback</button>
            <br><br>
        `
    feedbackResponseDiv.innerHTML = feedbackResponseDivHTML
    var scroll2 = document.getElementById('scroll2')
    scroll2.scrollIntoView({ behavior: 'smooth' })
}
function feedBackSubmit() {
    var feedBackInput = document.getElementById('feedBackInput').value
    var feedbackResponseValue = document.getElementById('feedbackResponseValue')
    if (feedBackInput == "") {
        console.error("First Input Feedback")
    }
    else if (feedBackInput.length < 3) {
        console.error("Your Feedback is not sufficient!")
    }
    else {
        feedbackResponseValue.innerHTML = `
            Your Feedback:- ${feedBackInput}
          `
        localStorage.setItem('Feedback', feedBackInput)
        window.alert("Thanks For Your Feedback")
    }
}
function lastFeedBack() {
    var feedbackResponseValue = document.getElementById('feedbackResponseValue')
    var lastFeedBackValue = localStorage.getItem('Feedback')
    if (lastFeedBackValue === null) {
        lastFeedBackValue = "You had not add any Feedback Last time!"
    }
    feedbackResponseValue.innerHTML = `
          Your Last Feedback was:- ${lastFeedBackValue}
        `
}
function feedBackClose() {
    var feedbackResponseDiv = document.getElementById('feedbackResponseDiv')
    feedbackResponseDiv.innerHTML = ""
    let scroll = document.getElementById('MadeBy');
    scroll.scrollIntoView({ behavior: "smooth" })
}
function refreshHover() {
    let refreshAlt = document.getElementById('refreshAlt')
    refreshAlt.innerHTML = "Refresh ?"
}
function refreshHoverOut() {
    let refreshAlt = document.getElementById('refreshAlt')
    refreshAlt.innerHTML = ""
}
function copyApiKey() {
    var apiInput = document.getElementById('Apikey-input')
    apiInput.select()
    apiInput.setSelectionRange(0, 999999999)
    document.execCommand('copy')
    setTimeout(() => {
        alert("API key Copied: " + apiInput.value)
    }, 500);
    console.info("API key Copied: " + apiInput.value)
}

function mainHome() {
    let scroll5 = document.getElementById('scrollIsThis');
    scroll5.scrollIntoView({ behavior: 'smooth' })
}



/* <![CDATA[ */
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
            /* ]]> */
