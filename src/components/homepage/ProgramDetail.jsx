import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

const ProgramDetail = () => {
    useEffect(() => {
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
            // let ambilemail = localStorage.getItem("Email");
            // let dataemail = JSON.parse(ambilemail)
            data.forEach((element) => {
              //  let idprofile =  element.id ===  ambildata;
              //  console.log(idprofile)
              //    if( element.id ===  ambilID){
              const tampung = document.getElementById("home");
              tampung.innerHTML = ` <div class="container mt-4 border border-2">
                    <h6 class="text-start fw- fs-3">Detail Program</h6>
                   <!-- Bagian caraosel -->
                   <!-- bagian Text -->
                   <!-- Akhir Text -->
                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                   <div class="carousel-indicators">
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                   </div>
                   <div class="carousel-inner">
                     <div class="carousel-item active">
                       <img src="https://jurnalpost.com/wp-content/uploads/2022/05/Penyandang-Disabilitas.jpg" class="d-block w-100 img-fluid rounded" alt="...">
                     </div>
                     <div class="carousel-item">
                       <img src="/asset/Gambar17Agustus.jpg" class="d-block w-100 img-fluid rounded" alt="...">
                     </div>
                     <div class="carousel-item">
                       <img src="/asset/Gambar17Agustus.jpg" class="d-block w-100 img-fluid rounded" alt="...">
                     </div>
                   </div>
                   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                   </button>
                   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                   </button>
                 </div>
           
                 <!-- bagian Text 2 -->
                 <section class="" style="text-align:left">
                   <div>
                     <p class="text-start fw-bold fs-3 mt-2 ">${element.nama}</p>
                     <p class="p-2">Kitabisa.com</p>
                     <p class="border-bottom border-3 p-2">${element.tanggal_mulai} - ${element.tanggal_selesai}   (1 Bulan)</p>
                 </div>
                   <div>
                     <p class="text-start fw-bold fs-3 mt-2 ">Deskripsi Kegiatan</p>
                     <p class="border-bottom border-3 p-2">${element.deskripsi}</p>
                   </div>
                   <div>
                     <p class="text-start fw-bold fs-3 mt-2 ">Kriteria peserta</p>
                     <p class="border-bottom border-3 p-2">${element.kriteria}
                       </p>
                   </div>
           
                   <div>
                     <p class="text-start fw-bold fs-3 mt-2 ">Tentang Perusahaan</p>
                     <div class="d-flex">
                   <div class="flex-shrink-0 ms-3">
                     <img style="border: 1px solid;" src="zaid.png" width="50px" class="rounded-circle" alt="...">  
                   </div>
                   <div class="flex-shrink-0 ms-3">
                      <h6 class=" fw-bold">KitaBisa</h6>
                      <p>PT Jongkok</p>
                      <i class="fas fa-people-carry"></i>  Sosial
                      
                      <br><i class="fas fa-user"></i>  10 - 11 Karyawan
                      
                      <br><i class="fas fa-street-view"></i> Jl. menuju panggilan allah
                      
                      <br><i class="fas fa-globe"></i> www.web.com
                   </div>
                   </div>
                   </div>
                 </section>
           
                 <button type="button" class="btn btn-primary mt-2 mb-3">Lebih Lengkap</button>
                 
                 <!-- akhir bagian text 2-->
                 <!-- akhir dari caraose -->
               </div>`;
            })
        }
        tampilHome()
    })
  return (
    <body style={{width:"100%",backgroundColor:"white"}}>
        <div id="home"></div>
        <div className="container mt-4 d-grid gap-2 mb-5">
        <button type="submit" className="btn btn-primary">
            Yuk Join!
        </button>
        </div>
        
    </body>
  )
}

export default ProgramDetail