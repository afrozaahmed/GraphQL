import BookList from './components/BookList';
import AddBook from './components/AddBook'
import ApolloClient from 'apollo-boost';
import {ApolloProvider,InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
