let tampungusername = document.getElementById("nama");
let ambilUsername = localStorage.getItem("Username");
tampungusername.innerText = ambilUsername;
async function tampilHome() {
  // let ambilID = localStorage.getItem("ID");
  // let ambildata = JSON.parse(ambilID)

  let response = await fetch(
    "https://634cc344f5d2cc648e940bb2.mockapi.io/program",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  let ambilemail = localStorage.getItem("Username");
  // let dataemail = JSON.parse(ambilemail)
  data.forEach((element) => {
    //  let idprofile =  element.id ===  ambildata;
    //  console.log(idprofile)
    //    if( element.id ===  ambilID){
    const tampung = document.getElementById("coba1");
    tampung.innerHTML = `
          
          <div class="thumbnail">
          <img src="assets/img/gambar4.jpg">
        
        <div class="caption">
          <h3>${element.nama}</h3>
          <h6>Kitabisa.com</h6>
          <p class="text-justify">${element.deskripsi}</p>
          <p>Kantor
            Jl. Raya Cilandak Kko No.31, RT.14/RW.8, Ragunan, Ps. Minggu</p>
            <span></span>
            <small>${element.tanggal_mulai} - ${element.tanggal_selesai}  (1 bulan)</small> <br>
          <a href="./programdetail.html" class="btn btn-primary">READ MORE</a>
        </div>
        </div>`;
    //    }
  });
}

tampilHome();
