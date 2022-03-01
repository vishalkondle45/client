import React, { useState } from "react";
import MaterialTable from "material-table";

const Working = () => {
  const [data, setData] = useState([
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birthYear: 2017,
      birthCity: 34,
    },
  ]);
  const unCheck = () => {};
  return (
    <div>
      <button onClick={unCheck}>UnCheck</button>
      <MaterialTable
        title="Basic Selection Preview"
        columns={[
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={data}
        options={{
          selection: true,
        }}
      />
    </div>
  );
};

export default Working;
