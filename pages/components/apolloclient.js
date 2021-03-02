import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import DataTable from './datatable'

class apolloclient extends Component {
    constructor(props) {
        super(props);
        state : {
            countries : {
                'name',
                'code'
              }
        }

    }
   async componentDidMount() {
        const client = new ApolloClient({
          uri: 'https://countries.trevorblades.com/',
          cache: new InMemoryCache()
        });

     await  client
  .query({
    query: gql`
    {
        countries {
          name
          code
        }
      }
    `
  })
  .then(result => 
    //console.log('Api Result',result)
    this.setState({country : result})
    );
    }

    render() {
        console.log('This is current state of apolloclient to check', this.state);
        return (
            <div>
                <DataTable props={this.state}></DataTable>
            </div>
        );
    }
}

apolloclient.propTypes = {

};

export default apolloclient;