import React from "react";
import axios from "axios";

class Conf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/getConf")
      .then((result) => {
        console.log(result.data);
        this.setState({
            data: result.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <table
          border="1"
        >
          <thead>
            <tr>
              <th scope="col">
                Name of the Conference
              </th>
              <th scope="col">
                City
              </th>
              <th scope="col">
                Conference website
              </th>
              <th scope="col">
                Venue
              </th>
              <th scope="col">
                Date
              </th>
              <th scope="col">
                Entry Type
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(element =>
              <tr>
                <td>{element.confName}</td>
                <td>{element.city}</td>
                <td>{element.confUrl}</td>
                <td>{element.venue}</td>
                <td>{element.confStartDate}</td>
                <td>{element.entryType}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Conf;
