export const groupUpdate = (data) => {
  console.log(data);
  let severity = null;
  let content = "";
  if (data.newGroup) {
    if (store.getState().auth.userDetail.id === data.newGroup.admin) {
      severity = "success";
      content = `'${data.newGroup.name}' group successfully created`;
    } else {
      content = `You were added to '${data.newGroup.name}' group `;
    }
    store.dispatch(openAlert(content, severity));
  } else if (data.deletedGroup) {
    console.log(data.deletedGroup);
  }
  store.dispatch(setGroups(data.groupUpdate));
};
