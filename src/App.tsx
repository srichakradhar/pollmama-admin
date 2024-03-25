import React, { useEffect, useState, FC } from 'react';
import { Admin, DataProvider, Loading, Resource } from 'react-admin';
import { PollCreate, PollEdit, PollList, PollShow } from './components/Polls';
import { PollOptionCreate, PollOptionEdit, PollOptionList, PollOptionShow } from './components/PollOptions';
import buildProvider from './Provider';

const App: FC = () => {
  const [dataProvider, setDataProvider] = useState<null | DataProvider>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const reactAdminDataProvider = await buildProvider();
      setDataProvider(() => ({ ...reactAdminDataProvider }));
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <Loading />;

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="poll"
        options={{ label: 'Polls' }}
        list={PollList}
        edit={PollEdit}
        create={PollCreate}
        show={PollShow}
      />

      <Resource
        name="option"
        options={{ label: 'Poll Options' }}
        list={PollOptionList}
        edit={PollOptionEdit}
        create={PollOptionCreate}
        show={PollOptionShow}
      />
    </Admin>
  );
};

export default App;

// const hasuraUrl = "https://pollmama.hasura.app/v1/graphql";
