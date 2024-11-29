import React from "react";

export default function Table({ tableData }) {
  return (
    <div>
      {tableData && (
        <>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gmail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
                {tableData.map((userData, index)=>{
                    return (
                        <tr>
                            <td>{userData?.firstName}</td>
                            <td>{userData?.lastName}</td>
                            <td>{userData?.gmail}</td>
                            <td>{userData?.age}</td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
