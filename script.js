let container = document.createElement("div");
container.setAttribute("class", "container");

let logoLeft=document.createElement("div");
logoLeft.setAttribute("class","logo-left")
logoLeft.innerHTML=`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Art_Institute_of_Chicago_logo.svg/2048px-Art_Institute_of_Chicago_logo.svg.png" alt="">`

let head1=document.createElement("h2");
head1.setAttribute("class","heading1");
head1.innerHTML="Art Institute Of Chicaco";

let head2=document.createElement("h3");
head2.setAttribute("class","heading2");
head2.innerHTML=" we are the one of the oldest and largest art museums in the world";

let head3=document.createElement("h6");
head3.setAttribute("class","heading3");
head3.innerHTML=" we are Recognized for our curatorial efforts and popularity among visitors, the museum hosts approximately 1.5 million people annually";


let head4=document.createElement("p");
head4.setAttribute("class","heading4");
head4.innerHTML="Its permanent collection of nearly 300,000 works of art is augmented by more than 30 special exhibitions mounted yearly that illuminate aspects of the collection and present cutting-edge curatorial and scientific research"



let iFrame=document.createElement("div");
iFrame.setAttribute("class","iframe")
iFrame.innerHTML=` <iframe src="./NavHero1_1122.mp4" frameborder="0" loading="lazy"></iframe>`

let pagination=document.createElement("div");
pagination.setAttribute("id","page");
pagination.innerHTML=`<nav aria-label="Page navigation example" class="nav">
<ul class="pagination justify-content-center">
  <li class="page-item disabled">
    <a class="page-link" href="#" tabindex="-1">Previous</a>
  </li>
  <li class="page-item"><a class="page-link" onclick="page1()" href="#">1</a></li>
  <li class="page-item"><a class="page-link" onclick="page2()" href="#">2</a></li>
  <li class="page-item"><a class="page-link" onclick="page3()"  href="#">3</a></li>
  <li class="page-item"><a class="page-link" onclick="page4()" href="#">4</a></li>
  <li class="page-item"><a class="page-link" onclick="page5()" href="#">5</a></li>
  <li class="page-item"><a class="page-link" onclick="page6()" href="#">6</a></li>
  <li class="page-item"><a class="page-link" onclick="page7()" href="#">7</a></li>
  <li class="page-item"><a class="page-link" onclick="page8()" href="#">8</a></li>
  <li class="page-item"><a class="page-link" onclick="page9()" href="#">9</a></li>
  <li class="page-item"><a class="page-link" onclick="page10()" href="#">10</a></li>
  <li class="page-item"><a class="page-link" onclick="page11()" href="#">11</a></li>
  <li class="page-item">
    <a class="page-link" href="#" tabindex="+1">Next</a>
  </li>
</ul>
</nav>`;

let row = document.createElement("div");
row.setAttribute("class", "row");

container.append(logoLeft,head1,head2,head3, head4,iFrame,pagination,row);

document.body.append(container);

function page1() {
  let res = fetch("https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
    .then((response) => response.json())
    .then((data1) => {
      console.log(data1);
      row.innerHTML = ""
     
      for (let i = 0; i < data1.data.length; i++) {
        
        row.innerHTML += `
        <div class="col-lg-4","col-sm-12","col-md-4">
            <div class="main">
                <div id="card${i}" class="card">
                            <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                            
                        <div class="card-body">
                            <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                            <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                            <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                            <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                  
                        </div>
                </div>
            </div>
        </div>`;
       
       
      }
    }).catch((error)=>console.log(error));
}




function page2() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=2&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }

  function page3() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=3&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
       
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
        
        }
      }).catch((error)=>console.log(error));
  }

  function page4() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=4&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }

  function page5() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=5&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          Page - 5
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }

  function page6() {
    let res = fetch( "https://api.artic.edu/api/v1/artworks?page=6&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }

  function page7() {
    let res = fetch( "https://api.artic.edu/api/v1/artworks?page=7&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }

  function page8() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=8&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }


  function page9() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=9&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
         
        }
      }).catch((error)=>console.log(error));
  }


  function page10() {
    let res = fetch("https://api.artic.edu/api/v1/artworks?page=10&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }


  function page11() {
    let res = fetch( "https://api.artic.edu/api/v1/artworks?page=11&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number")
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1);
        row.innerHTML = ""
        for (let i = 0; i < data1.data.length; i++) {
          
          row.innerHTML += `
          <div class="col-lg-4","col-sm-12","col-md-4">
              <div class="main">
                  <div id="card${i}" class="card">
                              <div class="card-header"><h6>Title : ${data1.data[i].title}</h6></div>
                              
                          <div class="card-body">
                              <h5 class="card-title">Artist : ${data1.data[i].artist_display}</h5>
                              <div class="card-title"><h5> ID : ${data1.data[i].id}</h5></div>
                              <h5 class="card-title">Year of Publish: ${data1.data[i].date_display}</h5>
                              <h5 class="card-title">Reference : ${data1.data[i].main_reference_number}</h5>
                    
                          </div>
                  </div>
              </div>
          </div>`;
         
          
        }
      }).catch((error)=>console.log(error));
  }