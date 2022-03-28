import 'App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'components/common/layout';
import Index from 'components/pages';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Index} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
