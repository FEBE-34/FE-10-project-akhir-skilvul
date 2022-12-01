import axios from "axios";
import React from "react";
import "../assets/css/Profile.css";

function UploadBerkas() {
  const url =
    "https://grup-project-be-34-production.up.railway.app/profile/datapribadi/kontakpribadi/upload_berkas";
  let formData = new FormData();
  const pilihfile = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
    }
  };

  const kirimfile = () => {
    axios
      .post(url, { formData })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-md-12">
      <div className="profile-content-formdata">
        <div className="mb-3">
          <div>
            <label className="form-label" htmlFor="customFile">
              File KTP
            </label>
            <input
              type="file"
              className="form-control"
              id="customFile"
              onChange={pilihfile}
            />
            <button onClick={kirimfile}>Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadBerkas;
