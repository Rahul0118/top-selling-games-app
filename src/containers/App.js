import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import ReactTable from 'react-table-v6';

import './App.css';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

 componentDidMount() {
  const url = "api-key";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(items => {
      this.setState({items: items})
    })
      
  }

  render () {
    const columns = [
      {
        Header: "Rank",
        accessor: "Rank",
        sortable: false,
        filterable: false
      },
      {
        Header: "Name",
        accessor: "Name",
        sortable: false,
        width: 250
      },
      {
        Header: "Platform",
        accessor: "Platform",
        sortable: false,
        filterable: false
      },
      {
        Header: "Year",
        accessor: "Year",
        filterable: false
      },
      {
        Header: "Genre",
        accessor: "Genre",
        sortable: false,
        filterable: false,
        width: 150
      },
      {
        Header: "Publisher",
        accessor: "Publisher",
        sortable: false,
        filterable: false
      },
      {
        Header: "Global Sales",
        accessor: "Global_Sales",
        sortable: false,
        filterable: false,
      },
    ]

    return (
      <Container>
        <div className="Game_section">
          <h1>Top Selling Games</h1>
          <ReactTable 
            columns={columns}
            data={this.state.items}
            filterable 
            defaultPageSize={10}
            noDataText={"Please Wait..."}
          />
        </div>
      </Container>
    );
  }
}

export default App;
