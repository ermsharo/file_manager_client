import { useState } from "react";

import { GetData } from "../requests/requests";
import File from "./file";

function FileGalery() {
  const [search, setSearch] = useState("");

  let url = "https://poc-portal.onrender.com/file_list";
  const {
    data: fileData,
    isLoading: fileIsLoading,
    error: fileError,
  } = GetData({
    url: url,
  });

  //Precisamos de
  //Icone arquivo
  //Nome arquivo
  //Tags...
  //Link do arquivo

  if (fileIsLoading) return <div>Loading</div>;

  if (fileError) return <div>Error</div>;

  if (fileData) {
    return (
      <div className="file-galery">
        {fileData.file_records.map((file) => (
          <div>
            <File name={file.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default FileGalery;
