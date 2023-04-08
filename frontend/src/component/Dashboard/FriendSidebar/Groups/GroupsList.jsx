import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import GroupsListItem from "./GroupsListItem";
const MainContainer = styled("div")({
  overflowY: "auto",
  overflowX: "hidden",
  height: "calc((100vh - 40px) / 3 - 25px)"
  
});
function GroupsList({ groups }) {
  return (
    <MainContainer>
      {groups.map((g) => {
        console.log(g)
        return (
          <GroupsListItem
            key={g._id}
            name={g.name}
            id={g._id}
            admin={g.admin}
            date={g.date}
            conversation={g.conversation}
          />
        );
      })}
    </MainContainer>
  );
}

const mapStatesToProps = ({ group }) => {
  return group;
};
export default connect(mapStatesToProps)(GroupsList);
