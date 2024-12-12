import "./Sample.css";

const Sample = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: "John Doe", age: 28, profession: "Engineer" },
    { id: 2, name: "Jane Smith", age: 34, profession: "Designer" },
    { id: 3, name: "Mike Johnson", age: 45, profession: "Manager" },
  ];

  return (
    <div className="m1">
      <h1>Simple React Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sample;
