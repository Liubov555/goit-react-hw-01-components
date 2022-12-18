import { Container } from "./App.styled";

import user from "../data/user.json";
import { Profile } from "./Profile/Profile";

import data from "../data/data.json";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />


    </Container>
  );
};
